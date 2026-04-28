// import React, { useState, useEffect } from 'react';
// import Modal from './Modal';
// import { vaccineData, calculateAgeInMonths, calculateNextDue, getStatus, generateAutoVaccines } from '../data/vaccineData';

// const VaccineTracker = ({ pets, setPets, vaccineRecords, setVaccineRecords, showToast }) => {
//   const [filterType, setFilterType] = useState('');
//   const [searchName, setSearchName] = useState('');
//   const [isAddPetModalOpen, setIsAddPetModalOpen] = useState(false);
//   const [isAddVaccineModalOpen, setIsAddVaccineModalOpen] = useState(false);
//   const [newPet, setNewPet] = useState({ name: '', type: 'dog', dob: '' });
//   const [currentPetId, setCurrentPetId] = useState(null);
//   const [currentPetType, setCurrentPetType] = useState(null);
//   const [newVaccine, setNewVaccine] = useState({ vaccineName: '', lastGiven: new Date().toISOString().split('T')[0] });

//   useEffect(() => {
//     updateAllStatuses();
//   }, [vaccineRecords]);

//   const updateAllStatuses = () => {
//     const updatedRecords = vaccineRecords.map(record => ({
//       ...record,
//       status: getStatus(record.nextDue)
//     }));
//     setVaccineRecords(updatedRecords);
//   };

//   const getDashboardStats = () => {
//     const today = new Date().toISOString().split('T')[0];
//     const sevenDaysLater = new Date();
//     sevenDaysLater.setDate(sevenDaysLater.getDate() + 7);
//     const sevenDaysStr = sevenDaysLater.toISOString().split('T')[0];

//     const total = vaccineRecords.length;
//     const upcoming = vaccineRecords.filter(r => r.status === 'upcoming' && r.nextDue <= sevenDaysStr).length;
//     const dueToday = vaccineRecords.filter(r => r.status === 'due').length;
//     const overdue = vaccineRecords.filter(r => r.status === 'overdue').length;

//     return { total, upcoming, dueToday, overdue };
//   };

//   const handleAddPet = () => {
//     if (!newPet.name.trim()) {
//       showToast('পোষা প্রাণীর নাম দিন!', 'warning');
//       return;
//     }
//     if (!newPet.dob) {
//       showToast('জন্ম তারিখ নির্বাচন করুন!', 'warning');
//       return;
//     }

//     const newId = pets.length > 0 ? Math.max(...pets.map(p => p.id)) + 1 : 1;
//     const pet = { id: newId, ...newPet };
//     setPets([...pets, pet]);

//     const autoVaccines = generateAutoVaccines(newId, newPet.type, newPet.dob, vaccineRecords);
//     setVaccineRecords([...vaccineRecords, ...autoVaccines]);

//     showToast(`✅ ${newPet.name} যোগ করা হয়েছে এবং বয়স অনুযায়ী ${autoVaccines.length}টি ভ্যাকসিন যুক্ত হয়েছে!`, 'success');
//     setIsAddPetModalOpen(false);
//     setNewPet({ name: '', type: 'dog', dob: '' });
//   };

//   const handleAddVaccine = () => {
//     if (!newVaccine.vaccineName) {
//       showToast('ভ্যাকসিন নির্বাচন করুন!', 'warning');
//       return;
//     }
//     if (!newVaccine.lastGiven) {
//       showToast('তারিখ নির্বাচন করুন!', 'warning');
//       return;
//     }

//     const selectedVaccine = vaccineData[currentPetType]?.find(v => v.name === newVaccine.vaccineName);
//     if (!selectedVaccine) return;

//     const nextDue = calculateNextDue(newVaccine.lastGiven, selectedVaccine.intervalDays);
//     const newId = vaccineRecords.length > 0 ? Math.max(...vaccineRecords.map(r => r.id)) + 1 : 1;

//     const newRecord = {
//       id: newId,
//       petId: currentPetId,
//       vaccineName: newVaccine.vaccineName,
//       lastGiven: newVaccine.lastGiven,
//       nextDue,
//       status: getStatus(nextDue)
//     };

//     setVaccineRecords([...vaccineRecords, newRecord]);
//     showToast(`💉 ${newVaccine.vaccineName} ভ্যাকসিন রেকর্ড যোগ করা হয়েছে!`, 'success');
//     setIsAddVaccineModalOpen(false);
//     setNewVaccine({ vaccineName: '', lastGiven: new Date().toISOString().split('T')[0] });
//   };

//   const handleDeleteVaccine = (recordId) => {
//     if (window.confirm('এই ভ্যাকসিন রেকর্ড মুছে ফেলতে চান?')) {
//       setVaccineRecords(vaccineRecords.filter(r => r.id !== recordId));
//       showToast('🗑️ ভ্যাকসিন রেকর্ড মুছে ফেলা হয়েছে', 'info');
//     }
//   };

//   const handleDeletePet = (petId) => {
//     if (window.confirm('এই পোষা প্রাণী এবং এর সকল ভ্যাকসিন রেকর্ড মুছে ফেলতে চান?')) {
//       setPets(pets.filter(p => p.id !== petId));
//       setVaccineRecords(vaccineRecords.filter(r => r.petId !== petId));
//       showToast('পোষা প্রাণী মুছে ফেলা হয়েছে', 'info');
//     }
//   };

//   const openAddVaccineModal = (petId, petType) => {
//     setCurrentPetId(petId);
//     setCurrentPetType(petType);
//     setNewVaccine({ vaccineName: vaccineData[petType]?.[0]?.name || '', lastGiven: new Date().toISOString().split('T')[0] });
//     setIsAddVaccineModalOpen(true);
//   };

//   const stats = getDashboardStats();
//   const petTypeLabels = {
//     dog: 'কুকুর', cat: 'বিড়াল', cow: 'গরু', goat: 'ছাগল', poultry: 'মুরগি', rabbit: 'খরগোশ'
//   };

//   const filteredPets = pets.filter(pet => {
//     if (filterType && pet.type !== filterType) return false;
//     if (searchName && !pet.name.toLowerCase().includes(searchName.toLowerCase())) return false;
//     return true;
//   });

//   return (
//     <>
//       <div className="track-page-header">
//         <h1><i className="fa-solid fa-syringe"></i> পেট ভ্যাকসিন ট্র্যাকার</h1>
//         <p>আপনার পোষা প্রাণীর ভ্যাকসিনেশন রেকর্ড সংরক্ষণ করুন এবং সময়মতো বুস্টার দিন</p>
//       </div>

//       <div className="stats-dashboard">
//         <div className="stat-card">
//           <div className="stat-icon"><i className="fa-solid fa-syringe"></i></div>
//           <div className="stat-info">
//             <div className="stat-value">{stats.total}</div>
//             <div className="stat-label">মোট ভ্যাকসিন</div>
//           </div>
//         </div>
//         <div className="stat-card upcoming">
//           <div className="stat-icon"><i className="fa-solid fa-calendar-week"></i></div>
//           <div className="stat-info">
//             <div className="stat-value">{stats.upcoming}</div>
//             <div className="stat-label">আসন্ন (৭ দিনের মধ্যে)</div>
//           </div>
//         </div>
//         <div className="stat-card due">
//           <div className="stat-icon"><i className="fa-solid fa-calendar-day"></i></div>
//           <div className="stat-info">
//             <div className="stat-value">{stats.dueToday}</div>
//             <div className="stat-label">আজকের বাকি</div>
//           </div>
//         </div>
//         <div className="stat-card overdue">
//           <div className="stat-icon"><i className="fa-solid fa-exclamation-triangle"></i></div>
//           <div className="stat-info">
//             <div className="stat-value">{stats.overdue}</div>
//             <div className="stat-label">মেয়াদোত্তীর্ণ</div>
//           </div>
//         </div>
//       </div>

//       <div className="filter-section">
//         <div className="filter-group">
//           <label><i className="fa-solid fa-filter"></i> ফিল্টার</label>
//           <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
//             <option value="">সব পোষা প্রাণী</option>
//             <option value="dog">কুকুর</option>
//             <option value="cat">বিড়াল</option>
//             <option value="cow">গরু</option>
//             <option value="goat">ছাগল</option>
//             <option value="poultry">মুরগি</option>
//             <option value="rabbit">খরগোশ</option>
//           </select>
//         </div>
//         <div className="filter-group">
//           <label><i className="fa-solid fa-search"></i> সার্চ</label>
//           <input
//             type="text"
//             placeholder="পোষা প্রাণীর নাম..."
//             value={searchName}
//             onChange={(e) => setSearchName(e.target.value)}
//           />
//         </div>
//         <button className="btn-add-pet" onClick={() => setIsAddPetModalOpen(true)}>
//           <i className="fa-solid fa-plus"></i> নতুন পোষা প্রাণী যোগ করুন
//         </button>
//       </div>

//       <div className="pets-vaccine-container">
//         {filteredPets.length === 0 ? (
//           <div className="empty-state">
//             <div className="empty-icon">🐾</div>
//             <h3>কোনো পোষা প্রাণী পাওয়া যায়নি</h3>
//             <p>নতুন পোষা প্রাণী যোগ করুন</p>
//           </div>
//         ) : (
//           filteredPets.map(pet => {
//             const petRecords = vaccineRecords.filter(r => r.petId === pet.id);
//             const ageMonths = calculateAgeInMonths(pet.dob);
//             const ageYears = Math.floor(ageMonths / 12);
//             const ageRemMonths = ageMonths % 12;
//             const ageDisplay = ageYears > 0 ? `${ageYears} বছর ${ageRemMonths} মাস` : `${ageMonths} মাস`;

//             return (
//               <div key={pet.id} className="pet-card">
//                 <div className="pet-card-header">
//                   <div className="pet-info">
//                     <h3><i className={`fas fa-${pet.type === 'dog' ? 'dog' : pet.type === 'cat' ? 'cat' : 'paw'}`}></i> {pet.name}</h3>
//                     <p>{petTypeLabels[pet.type]} • বয়স: {ageDisplay} • জন্ম: {pet.dob}</p>
//                   </div>
//                   <div style={{ display: 'flex', gap: '10px' }}>
//                     <button className="add-vaccine-btn" onClick={() => openAddVaccineModal(pet.id, pet.type)}>
//                       <i className="fa-solid fa-plus"></i> ভ্যাকসিন যোগ করুন
//                     </button>
//                     <button className="add-vaccine-btn" style={{ background: 'rgba(200,82,58,0.2)' }} onClick={() => handleDeletePet(pet.id)}>
//                       <i className="fa-solid fa-trash"></i>
//                     </button>
//                   </div>
//                 </div>
//                 <div style={{ overflowX: 'auto' }}>
//                   <table className="vaccine-table">
//                     <thead>
//                       <tr>
//                         <th>ভ্যাকসিনের নাম</th>
//                         <th>শেষ প্রদানের তারিখ</th>
//                         <th>পরবর্তী তারিখ</th>
//                         <th>স্ট্যাটাস</th>
//                         <th></th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {petRecords.length === 0 ? (
//                         <tr>
//                           <td colSpan="5" className="empty-vaccines">কোনো ভ্যাকসিন রেকর্ড নেই</td>
//                         </tr>
//                       ) : (
//                         petRecords.map(rec => (
//                           <tr key={rec.id}>
//                             <td><strong>{rec.vaccineName}</strong></td>
//                             <td>{rec.lastGiven}</td>
//                             <td>{rec.nextDue}</td>
//                             <td>
//                               <span className={`status-badge status-${rec.status}`}>
//                                 {rec.status === 'upcoming' ? '📅 আসন্ন' : rec.status === 'due' ? '⚠️ আজকে' : '🔴 মেয়াদোত্তীর্ণ'}
//                               </span>
//                             </td>
//                             <td>
//                               <button className="del-vaccine" onClick={() => handleDeleteVaccine(rec.id)}>
//                                 <i className="fa-solid fa-trash"></i>
//                               </button>
//                             </td>
//                           </tr>
//                         ))
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>

//       {/* Add Pet Modal */}
//       <Modal isOpen={isAddPetModalOpen} onClose={() => setIsAddPetModalOpen(false)} title={<><i className="fa-solid fa-paw"></i> নতুন পোষা প্রাণী যোগ করুন</>}>
//         <div className="form-group">
//           <label>পোষা প্রাণীর নাম *</label>
//           <input
//             type="text"
//             placeholder="যেমন: Max, Bella"
//             value={newPet.name}
//             onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>প্রাণীর ধরন *</label>
//           <select value={newPet.type} onChange={(e) => setNewPet({ ...newPet, type: e.target.value })}>
//             <option value="dog">কুকুর (Dog)</option>
//             <option value="cat">বিড়াল (Cat)</option>
//             <option value="cow">গরু (Cow)</option>
//             <option value="goat">ছাগল (Goat)</option>
//             <option value="poultry">মুরগি (Poultry)</option>
//             <option value="rabbit">খরগোশ (Rabbit)</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>জন্ম তারিখ *</label>
//           <input
//             type="date"
//             value={newPet.dob}
//             onChange={(e) => setNewPet({ ...newPet, dob: e.target.value })}
//             required
//           />
//         </div>
//         <div className="form-footer">
//           <button className="btn-cancel" onClick={() => setIsAddPetModalOpen(false)}>বাতিল</button>
//           <button className="btn-save" onClick={handleAddPet}><i className="fa-solid fa-save"></i> সংরক্ষণ</button>
//         </div>
//       </Modal>

//       {/* Add Vaccine Modal */}
//       <Modal isOpen={isAddVaccineModalOpen} onClose={() => setIsAddVaccineModalOpen(false)} title={<><i className="fa-solid fa-syringe"></i> ভ্যাকসিন রেকর্ড যোগ করুন</>}>
//         <div className="form-group">
//           <label>ভ্যাকসিন নির্বাচন করুন *</label>
//           <select
//             value={newVaccine.vaccineName}
//             onChange={(e) => setNewVaccine({ ...newVaccine, vaccineName: e.target.value })}
//           >
//             {currentPetType && vaccineData[currentPetType]?.map(v => (
//               <option key={v.name} value={v.name}>{v.name} ({v.intervalDays} দিন পর)</option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label>শেষ প্রদানের তারিখ *</label>
//           <input
//             type="date"
//             value={newVaccine.lastGiven}
//             onChange={(e) => setNewVaccine({ ...newVaccine, lastGiven: e.target.value })}
//           />
//         </div>
//         <div className="form-footer">
//           <button className="btn-cancel" onClick={() => setIsAddVaccineModalOpen(false)}>বাতিল</button>
//           <button className="btn-save" onClick={handleAddVaccine}><i className="fa-solid fa-save"></i> সংরক্ষণ</button>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default VaccineTracker;

// import React, { useState, useEffect } from 'react';
// import Modal from './Modal';
// import VaccineInfoSection from './VaccineInfoSection';
// import { vaccineData, calculateAgeInMonths, calculateNextDue, getStatus, generateAutoVaccines } from '../data/vaccineData';

// const VaccineTracker = ({ pets, setPets, vaccineRecords, setVaccineRecords, showToast }) => {
//   const [activeTab, setActiveTab] = useState('tracker'); // 'tracker' or 'info'
//   const [filterType, setFilterType] = useState('');
//   const [searchName, setSearchName] = useState('');
//   const [isAddPetModalOpen, setIsAddPetModalOpen] = useState(false);
//   const [isAddVaccineModalOpen, setIsAddVaccineModalOpen] = useState(false);
//   const [newPet, setNewPet] = useState({ name: '', type: 'dog', dob: '' });
//   const [currentPetId, setCurrentPetId] = useState(null);
//   const [currentPetType, setCurrentPetType] = useState(null);
//   const [newVaccine, setNewVaccine] = useState({ vaccineName: '', lastGiven: new Date().toISOString().split('T')[0] });

//   useEffect(() => {
//     updateAllStatuses();
//   }, [vaccineRecords]);

//   const updateAllStatuses = () => {
//     const updatedRecords = vaccineRecords.map(record => ({
//       ...record,
//       status: getStatus(record.nextDue)
//     }));
//     setVaccineRecords(updatedRecords);
//   };

//   const getDashboardStats = () => {
//     const today = new Date().toISOString().split('T')[0];
//     const sevenDaysLater = new Date();
//     sevenDaysLater.setDate(sevenDaysLater.getDate() + 7);
//     const sevenDaysStr = sevenDaysLater.toISOString().split('T')[0];

//     const total = vaccineRecords.length;
//     const upcoming = vaccineRecords.filter(r => r.status === 'upcoming' && r.nextDue <= sevenDaysStr).length;
//     const dueToday = vaccineRecords.filter(r => r.status === 'due').length;
//     const overdue = vaccineRecords.filter(r => r.status === 'overdue').length;

//     return { total, upcoming, dueToday, overdue };
//   };

//   const handleAddPet = () => {
//     if (!newPet.name.trim()) {
//       showToast('পোষা প্রাণীর নাম দিন!', 'warning');
//       return;
//     }
//     if (!newPet.dob) {
//       showToast('জন্ম তারিখ নির্বাচন করুন!', 'warning');
//       return;
//     }

//     const newId = pets.length > 0 ? Math.max(...pets.map(p => p.id)) + 1 : 1;
//     const pet = { id: newId, ...newPet };
//     setPets([...pets, pet]);

//     const autoVaccines = generateAutoVaccines(newId, newPet.type, newPet.dob, vaccineRecords);
//     setVaccineRecords([...vaccineRecords, ...autoVaccines]);

//     showToast(`✅ ${newPet.name} যোগ করা হয়েছে এবং বয়স অনুযায়ী ${autoVaccines.length}টি ভ্যাকসিন যুক্ত হয়েছে!`, 'success');
//     setIsAddPetModalOpen(false);
//     setNewPet({ name: '', type: 'dog', dob: '' });
//   };

//   const handleAddVaccine = () => {
//     if (!newVaccine.vaccineName) {
//       showToast('ভ্যাকসিন নির্বাচন করুন!', 'warning');
//       return;
//     }
//     if (!newVaccine.lastGiven) {
//       showToast('তারিখ নির্বাচন করুন!', 'warning');
//       return;
//     }

//     const selectedVaccine = vaccineData[currentPetType]?.find(v => v.name === newVaccine.vaccineName);
//     if (!selectedVaccine) return;

//     const nextDue = calculateNextDue(newVaccine.lastGiven, selectedVaccine.intervalDays);
//     const newId = vaccineRecords.length > 0 ? Math.max(...vaccineRecords.map(r => r.id)) + 1 : 1;

//     const newRecord = {
//       id: newId,
//       petId: currentPetId,
//       vaccineName: newVaccine.vaccineName,
//       lastGiven: newVaccine.lastGiven,
//       nextDue,
//       status: getStatus(nextDue)
//     };

//     setVaccineRecords([...vaccineRecords, newRecord]);
//     showToast(`💉 ${newVaccine.vaccineName} ভ্যাকসিন রেকর্ড যোগ করা হয়েছে!`, 'success');
//     setIsAddVaccineModalOpen(false);
//     setNewVaccine({ vaccineName: '', lastGiven: new Date().toISOString().split('T')[0] });
//   };

//   const handleDeleteVaccine = (recordId) => {
//     if (window.confirm('এই ভ্যাকসিন রেকর্ড মুছে ফেলতে চান?')) {
//       setVaccineRecords(vaccineRecords.filter(r => r.id !== recordId));
//       showToast('🗑️ ভ্যাকসিন রেকর্ড মুছে ফেলা হয়েছে', 'info');
//     }
//   };

//   const handleDeletePet = (petId) => {
//     if (window.confirm('এই পোষা প্রাণী এবং এর সকল ভ্যাকসিন রেকর্ড মুছে ফেলতে চান?')) {
//       setPets(pets.filter(p => p.id !== petId));
//       setVaccineRecords(vaccineRecords.filter(r => r.petId !== petId));
//       showToast('পোষা প্রাণী মুছে ফেলা হয়েছে', 'info');
//     }
//   };

//   const openAddVaccineModal = (petId, petType) => {
//     setCurrentPetId(petId);
//     setCurrentPetType(petType);
//     setNewVaccine({ vaccineName: vaccineData[petType]?.[0]?.name || '', lastGiven: new Date().toISOString().split('T')[0] });
//     setIsAddVaccineModalOpen(true);
//   };

//   const stats = getDashboardStats();
//   const petTypeLabels = {
//     dog: 'কুকুর', cat: 'বিড়াল', cow: 'গরু', goat: 'ছাগল', poultry: 'মুরগি', rabbit: 'খরগোশ'
//   };

//   const filteredPets = pets.filter(pet => {
//     if (filterType && pet.type !== filterType) return false;
//     if (searchName && !pet.name.toLowerCase().includes(searchName.toLowerCase())) return false;
//     return true;
//   });

//   // If showing info tab, render VaccineInfoSection
//   if (activeTab === 'info') {
//     return (
//       <>
//         <div className="track-page-header">
//           <h1><i className="fa-solid fa-book-open"></i> ভ্যাকসিন তথ্য</h1>
//           <p>বিভিন্ন প্রাণীর জন্য প্রয়োজনীয় ভ্যাকসিন ও সময়সূচী সম্পর্কে জানুন</p>
//         </div>
        
//         <div className="tab-navigation">
//           <button 
//             className={`tab-btn ${activeTab === 'tracker' ? 'active' : ''}`}
//             onClick={() => setActiveTab('tracker')}
//           >
//             <i className="fa-solid fa-chart-line"></i> ভ্যাকসিন ট্র্যাকার
//           </button>
//           <button 
//             className={`tab-btn ${activeTab === 'info' ? 'active' : ''}`}
//             onClick={() => setActiveTab('info')}
//           >
//             <i className="fa-solid fa-info-circle"></i> ভ্যাকসিন তথ্য
//           </button>
//         </div>
        
//         <VaccineInfoSection />
//       </>
//     );
//   }

//   return (
//     <>
//       <div className="track-page-header">
//         <h1><i className="fa-solid fa-syringe"></i> পেট ভ্যাকসিন ট্র্যাকার</h1>
//         <p>আপনার পোষা প্রাণীর ভ্যাকসিনেশন রেকর্ড সংরক্ষণ করুন এবং সময়মতো বুস্টার দিন</p>
//       </div>

//       <div className="tab-navigation">
//         <button 
//           className={`tab-btn ${activeTab === 'tracker' ? 'active' : ''}`}
//           onClick={() => setActiveTab('tracker')}
//         >
//           <i className="fa-solid fa-chart-line"></i> ভ্যাকসিন ট্র্যাকার
//         </button>
//         <button 
//           className={`tab-btn ${activeTab === 'info' ? 'active' : ''}`}
//           onClick={() => setActiveTab('info')}
//         >
//           <i className="fa-solid fa-info-circle"></i> ভ্যাকসিন তথ্য
//         </button>
//       </div>

//       <div className="stats-dashboard">
//         <div className="stat-card">
//           <div className="stat-icon"><i className="fa-solid fa-syringe"></i></div>
//           <div className="stat-info">
//             <div className="stat-value">{stats.total}</div>
//             <div className="stat-label">মোট ভ্যাকসিন</div>
//           </div>
//         </div>
//         <div className="stat-card upcoming">
//           <div className="stat-icon"><i className="fa-solid fa-calendar-week"></i></div>
//           <div className="stat-info">
//             <div className="stat-value">{stats.upcoming}</div>
//             <div className="stat-label">আসন্ন (৭ দিনের মধ্যে)</div>
//           </div>
//         </div>
//         <div className="stat-card due">
//           <div className="stat-icon"><i className="fa-solid fa-calendar-day"></i></div>
//           <div className="stat-info">
//             <div className="stat-value">{stats.dueToday}</div>
//             <div className="stat-label">আজকের বাকি</div>
//           </div>
//         </div>
//         <div className="stat-card overdue">
//           <div className="stat-icon"><i className="fa-solid fa-exclamation-triangle"></i></div>
//           <div className="stat-info">
//             <div className="stat-value">{stats.overdue}</div>
//             <div className="stat-label">মেয়াদোত্তীর্ণ</div>
//           </div>
//         </div>
//       </div>

//       <div className="filter-section">
//         <div className="filter-group">
//           <label><i className="fa-solid fa-filter"></i> ফিল্টার</label>
//           <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
//             <option value="">সব পোষা প্রাণী</option>
//             <option value="dog">কুকুর</option>
//             <option value="cat">বিড়াল</option>
//             <option value="cow">গরু</option>
//             <option value="goat">ছাগল</option>
//             <option value="poultry">মুরগি</option>
//             <option value="rabbit">খরগোশ</option>
//           </select>
//         </div>
//         <div className="filter-group">
//           <label><i className="fa-solid fa-search"></i> সার্চ</label>
//           <input
//             type="text"
//             placeholder="পোষা প্রাণীর নাম..."
//             value={searchName}
//             onChange={(e) => setSearchName(e.target.value)}
//           />
//         </div>
//         <button className="btn-add-pet" onClick={() => setIsAddPetModalOpen(true)}>
//           <i className="fa-solid fa-plus"></i> নতুন পোষা প্রাণী যোগ করুন
//         </button>
//       </div>

//       <div className="pets-vaccine-container">
//         {filteredPets.length === 0 ? (
//           <div className="empty-state">
//             <div className="empty-icon">🐾</div>
//             <h3>কোনো পোষা প্রাণী পাওয়া যায়নি</h3>
//             <p>নতুন পোষা প্রাণী যোগ করুন</p>
//           </div>
//         ) : (
//           filteredPets.map(pet => {
//             const petRecords = vaccineRecords.filter(r => r.petId === pet.id);
//             const ageMonths = calculateAgeInMonths(pet.dob);
//             const ageYears = Math.floor(ageMonths / 12);
//             const ageRemMonths = ageMonths % 12;
//             const ageDisplay = ageYears > 0 ? `${ageYears} বছর ${ageRemMonths} মাস` : `${ageMonths} মাস`;

//             return (
//               <div key={pet.id} className="pet-card">
//                 <div className="pet-card-header">
//                   <div className="pet-info">
//                     <h3><i className={`fas fa-${pet.type === 'dog' ? 'dog' : pet.type === 'cat' ? 'cat' : 'paw'}`}></i> {pet.name}</h3>
//                     <p>{petTypeLabels[pet.type]} • বয়স: {ageDisplay} • জন্ম: {pet.dob}</p>
//                   </div>
//                   <div style={{ display: 'flex', gap: '10px' }}>
//                     <button className="add-vaccine-btn" onClick={() => openAddVaccineModal(pet.id, pet.type)}>
//                       <i className="fa-solid fa-plus"></i> ভ্যাকসিন যোগ করুন
//                     </button>
//                     <button className="add-vaccine-btn" style={{ background: 'rgba(200,82,58,0.2)' }} onClick={() => handleDeletePet(pet.id)}>
//                       <i className="fa-solid fa-trash"></i>
//                     </button>
//                   </div>
//                 </div>
//                 <div style={{ overflowX: 'auto' }}>
//                   <table className="vaccine-table">
//                     <thead>
//                       <tr>
//                         <th>ভ্যাকসিনের নাম</th>
//                         <th>শেষ প্রদানের তারিখ</th>
//                         <th>পরবর্তী তারিখ</th>
//                         <th>স্ট্যাটাস</th>
//                         <th></th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {petRecords.length === 0 ? (
//                         <tr>
//                           <td colSpan="5" className="empty-vaccines">কোনো ভ্যাকসিন রেকর্ড নেই</td>
//                         </tr>
//                       ) : (
//                         petRecords.map(rec => (
//                           <tr key={rec.id}>
//                             <td><strong>{rec.vaccineName}</strong></td>
//                             <td>{rec.lastGiven}</td>
//                             <td>{rec.nextDue}</td>
//                             <td>
//                               <span className={`status-badge status-${rec.status}`}>
//                                 {rec.status === 'upcoming' ? '📅 আসন্ন' : rec.status === 'due' ? '⚠️ আজকে' : '🔴 মেয়াদোত্তীর্ণ'}
//                               </span>
//                             </td>
//                             <td>
//                               <button className="del-vaccine" onClick={() => handleDeleteVaccine(rec.id)}>
//                                 <i className="fa-solid fa-trash"></i>
//                               </button>
//                             </td>
//                           </tr>
//                         ))
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>

//       {/* Add Pet Modal */}
//       <Modal isOpen={isAddPetModalOpen} onClose={() => setIsAddPetModalOpen(false)} title={<><i className="fa-solid fa-paw"></i> নতুন পোষা প্রাণী যোগ করুন</>}>
//         <div className="form-group">
//           <label>পোষা প্রাণীর নাম *</label>
//           <input
//             type="text"
//             placeholder="যেমন: Max, Bella"
//             value={newPet.name}
//             onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>প্রাণীর ধরন *</label>
//           <select value={newPet.type} onChange={(e) => setNewPet({ ...newPet, type: e.target.value })}>
//             <option value="dog">কুকুর (Dog)</option>
//             <option value="cat">বিড়াল (Cat)</option>
//             <option value="cow">গরু (Cow)</option>
//             <option value="goat">ছাগল (Goat)</option>
//             <option value="poultry">মুরগি (Poultry)</option>
//             <option value="rabbit">খরগোশ (Rabbit)</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>জন্ম তারিখ *</label>
//           <input
//             type="date"
//             value={newPet.dob}
//             onChange={(e) => setNewPet({ ...newPet, dob: e.target.value })}
//             required
//           />
//         </div>
//         <div className="form-footer">
//           <button className="btn-cancel" onClick={() => setIsAddPetModalOpen(false)}>বাতিল</button>
//           <button className="btn-save" onClick={handleAddPet}><i className="fa-solid fa-save"></i> সংরক্ষণ</button>
//         </div>
//       </Modal>

//       {/* Add Vaccine Modal */}
//       <Modal isOpen={isAddVaccineModalOpen} onClose={() => setIsAddVaccineModalOpen(false)} title={<><i className="fa-solid fa-syringe"></i> ভ্যাকসিন রেকর্ড যোগ করুন</>}>
//         <div className="form-group">
//           <label>ভ্যাকসিন নির্বাচন করুন *</label>
//           <select
//             value={newVaccine.vaccineName}
//             onChange={(e) => setNewVaccine({ ...newVaccine, vaccineName: e.target.value })}
//           >
//             {currentPetType && vaccineData[currentPetType]?.map(v => (
//               <option key={v.name} value={v.name}>{v.name} ({v.intervalDays} দিন পর)</option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label>শেষ প্রদানের তারিখ *</label>
//           <input
//             type="date"
//             value={newVaccine.lastGiven}
//             onChange={(e) => setNewVaccine({ ...newVaccine, lastGiven: e.target.value })}
//           />
//         </div>
//         <div className="form-footer">
//           <button className="btn-cancel" onClick={() => setIsAddVaccineModalOpen(false)}>বাতিল</button>
//           <button className="btn-save" onClick={handleAddVaccine}><i className="fa-solid fa-save"></i> সংরক্ষণ</button>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default VaccineTracker;

import React, { useState } from 'react';
import VaccineInfoSection from './VaccineInfoSection';
// import './VaccineTracker.css';

const VaccineTracker = () => {
  return (
    <>
      <div className="track-page-header">
        <h1><i className="fa-solid fa-book-open"></i> ভ্যাকসিন তথ্য</h1>
        <p>বিভিন্ন প্রাণীর জন্য প্রয়োজনীয় ভ্যাকসিন ও সময়সূচী সম্পর্কে বিস্তারিত জানুন</p>
      </div>
      
      <VaccineInfoSection />
    </>
  );
};

export default VaccineTracker;