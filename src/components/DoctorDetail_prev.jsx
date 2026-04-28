import React from 'react';

const DoctorDetail = ({ doctor, navigateTo, showToast }) => {
  if (!doctor) {
    return (
      <div className="detail-back-container">
        <button className="back-button" onClick={() => navigateTo('doctor')}>
          <i className="fa-solid fa-arrow-left"></i> ডাক্তার তালিকায় ফিরুন
        </button>
        <div className="empty-state">
          <h3>ডাক্তার তথ্য পাওয়া যায়নি</h3>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="detail-back-container">
        <button className="back-button" onClick={() => navigateTo('doctor')}>
          <i className="fa-solid fa-arrow-left"></i> ডাক্তার তালিকায় ফিরুন
        </button>
      </div>
      <div className="doctor-detail-page">
        <div className="detail-header">
          <div className="detail-avatar">{doctor.initials}</div>
          <div>
            <h1>{doctor.name}</h1>
            <div className="detail-qual">{doctor.qual}</div>
            <div className="detail-speciality">বিশেষত্ব: {doctor.speciality}</div>
          </div>
        </div>

        <div className="detail-section">
          <h3><i className="fa-solid fa-circle-info"></i> পেশাগত তথ্য</h3>
          <div className="detail-grid">
            <div><strong>অভিজ্ঞতা:</strong> {doctor.experience}</div>
            <div><strong>চেম্বারের নাম:</strong> {doctor.chamberName}</div>
            <div><strong>ঠিকানা:</strong> {doctor.area}, {doctor.upazila}, {doctor.district}, {doctor.division}</div>
            <div><strong>সেবার সময়:</strong> {doctor.availableDays}</div>
            <div><strong>সেবা ফি:</strong> {doctor.consultationFee}</div>
            <div><strong>চিকিৎসা প্রদান করেন:</strong> {doctor.pets.map(p => p.toUpperCase()).join(', ')}</div>
          </div>
        </div>

        <div className="detail-section">
          <h3><i className="fa-solid fa-address-card"></i> যোগাযোগের তথ্য</h3>
          <div className="contact-links">
            <a href={`tel:${doctor.phone}`} className="contact-link">
              <i className="fa-solid fa-phone"></i> {doctor.phone}
            </a>
            <a href={`mailto:${doctor.email}`} className="contact-link">
              <i className="fa-solid fa-envelope"></i> {doctor.email}
            </a>
            <a href={doctor.map} target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fa-solid fa-map-location-dot"></i> গুগল ম্যাপে দেখুন
            </a>
          </div>
        </div>

        <div className="detail-section">
          <h3><i className="fa-solid fa-calendar-check"></i> অ্যাপয়েন্টমেন্ট</h3>
          <p>অ্যাপয়েন্টমেন্টের জন্য নিচের বাটনে ক্লিক করুন। অ্যাপয়েন্টমেন্ট বুকিং এর পর ডাক্তার আপনার সাথে যোগাযোগ করবেন।</p>
          <button className="appointment-btn" onClick={() => navigateTo('appointment', doctor)}>
            <i className="fa-solid fa-calendar-plus"></i> অ্যাপয়েন্টমেন্ট বুক করুন
          </button>
        </div>
      </div>
    </>
  );
};

export default DoctorDetail;