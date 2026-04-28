import React, { useState, useEffect } from 'react';
import { locationData, loadDistricts, loadUpazilas, loadAreas } from '../data/locations';

const DoctorList = ({ doctors, navigateTo, showToast }) => {
  const [filters, setFilters] = useState({
    division: '',
    district: '',
    upazila: '',
    area: '',
    petType: '',
    name: ''
  });
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [areas, setAreas] = useState([]);
  const [showAreaField, setShowAreaField] = useState(false);
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  useEffect(() => {
    filterDoctors();
  }, [filters, doctors]);

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
    
    if (field === 'division') {
      const newDistricts = loadDistricts(value, locationData);
      setDistricts(newDistricts);
      setFilters(prev => ({ ...prev, district: '', upazila: '', area: '' }));
      setUpazilas([]);
      setAreas([]);
      setShowAreaField(false);
    } else if (field === 'district') {
      const newUpazilas = loadUpazilas(filters.division, value, locationData);
      setUpazilas(newUpazilas);
      setFilters(prev => ({ ...prev, upazila: '', area: '' }));
      setAreas([]);
      setShowAreaField(false);
    } else if (field === 'upazila') {
      const newAreas = loadAreas(filters.division, filters.district, value, locationData);
      setAreas(newAreas);
      setShowAreaField(newAreas.length > 0);
      setFilters(prev => ({ ...prev, area: '' }));
    }
  };

  const filterDoctors = () => {
    const filtered = doctors.filter(doc => {
      if (filters.division && doc.division !== filters.division) return false;
      if (filters.district && doc.district !== filters.district) return false;
      if (filters.upazila && doc.upazila !== filters.upazila) return false;
      if (filters.area && doc.area !== filters.area) return false;
      if (filters.petType && !doc.pets.includes(filters.petType)) return false;
      if (filters.name && !doc.name.toLowerCase().includes(filters.name.toLowerCase())) return false;
      return true;
    });
    setFilteredDoctors(filtered);
  };

  const divisions = Object.keys(locationData);

  return (
    <>
      <div className="search-section">
        <div className="search-inner">
          <div className="search-title"><i className="fa-solid fa-magnifying-glass"></i> ভেট ডাক্তার খুঁজুন</div>
          <div className="search-grid">
            <div className="search-field">
              <label>বিভাগ (Division)</label>
              <select value={filters.division} onChange={(e) => handleFilterChange('division', e.target.value)}>
                <option value="">সব বিভাগ</option>
                {divisions.map(div => <option key={div} value={div}>{div}</option>)}
              </select>
            </div>
            <div className="search-field">
              <label>জেলা (District)</label>
              <select value={filters.district} onChange={(e) => handleFilterChange('district', e.target.value)} disabled={!filters.division}>
                <option value="">জেলা নির্বাচন করুন</option>
                {districts.map(dist => <option key={dist} value={dist}>{dist}</option>)}
              </select>
            </div>
            <div className="search-field">
              <label>উপজেলা/সিটি কর্পোরেশন</label>
              <select value={filters.upazila} onChange={(e) => handleFilterChange('upazila', e.target.value)} disabled={!filters.district}>
                <option value="">উপজেলা নির্বাচন করুন</option>
                {upazilas.map(up => <option key={up} value={up}>{up}</option>)}
              </select>
            </div>
            {showAreaField && (
              <div className="search-field" id="areaField">
                <label>এলাকা (Area)</label>
                <select value={filters.area} onChange={(e) => handleFilterChange('area', e.target.value)}>
                  <option value="">এলাকা নির্বাচন করুন</option>
                  {areas.map(area => <option key={area} value={area}>{area}</option>)}
                </select>
              </div>
            )}
            <div className="search-field">
              <label>পেটের ধরন</label>
              <select value={filters.petType} onChange={(e) => handleFilterChange('petType', e.target.value)}>
                <option value="">সব ধরন</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="cow">Cow</option>
                <option value="goat">Goat</option>
              </select>
            </div>
            <div className="search-field">
              <label>নাম দিয়ে খুঁজুন</label>
              <input
                type="text"
                placeholder="ডাক্তারের নাম"
                value={filters.name}
                onChange={(e) => handleFilterChange('name', e.target.value)}
              />
            </div>
            <div>
              <button className="search-btn" onClick={filterDoctors}>
                <i className="fa-solid fa-magnifying-glass"></i> সার্চ
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <h2 className="section-title">ডাক্তারদের তালিকা</h2>
          <span style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>
            {filteredDoctors.length} জন ডাক্তার পাওয়া গেছে
          </span>
        </div>
        {filteredDoctors.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h3>কোনো ডাক্তার পাওয়া যায়নি</h3>
            <p>অনুসন্ধানের শর্ত পরিবর্তন করে আবার চেষ্টা করুন।</p>
          </div>
        ) : (
          <div className="cards-grid">
            {filteredDoctors.map(doctor => (
              <div key={doctor.id} className="doctor-card" onClick={() => navigateTo('doctor-detail', doctor)}>
                <div className="doctor-header">
                  <div className="doctor-avatar">{doctor.initials}</div>
                  <div>
                    <div className="doctor-name">{doctor.name}</div>
                    <div className="doctor-qual">{doctor.qual}</div>
                    <div className="pet-tags">
                      {doctor.pets.map(p => <span key={p} className="pet-tag">{p}</span>)}
                    </div>
                  </div>
                </div>
                <div className="doctor-location-detail">
                  <div className="location-row"><i className="fa-solid fa-building"></i><span>{doctor.chamberName}</span></div>
                  <div className="location-row"><i className="fa-solid fa-location-dot"></i><span>{doctor.area}, {doctor.upazila}, {doctor.district}</span></div>
                  <div className="location-row"><i className="fa-solid fa-clock"></i><span>{doctor.availableDays}</span></div>
                  <div className="location-row"><i className="fa-solid fa-money-bill-wave"></i><span>সেবা ফি: {doctor.consultationFee}</span></div>
                </div>
                <div className="doctor-actions">
                  <a className="action-btn btn-call" href={`tel:${doctor.phone}`} onClick={(e) => e.stopPropagation()}>
                    <i className="fa-solid fa-phone"></i> Call
                  </a>
                  <a className="action-btn btn-mail" href={`mailto:${doctor.email}`} onClick={(e) => e.stopPropagation()}>
                    <i className="fa-solid fa-envelope"></i> Mail
                  </a>
                  <a className="action-btn btn-map" href={doctor.map} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <i className="fa-solid fa-map-location-dot"></i> Map
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DoctorList;