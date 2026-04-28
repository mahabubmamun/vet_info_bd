// import React, { useState } from 'react';
// import { vaccineInfoData, vaccineScheduleSummary } from '../data/vaccineInfoData';
// import '../styles/VaccineInfoSection.css';

// const VaccineInfoSection = () => {
//   const [selectedAnimal, setSelectedAnimal] = useState(null);
//   const [showDetail, setShowDetail] = useState(false);

//   const animals = Object.keys(vaccineInfoData);

//   const handleCardClick = (animalKey) => {
//     setSelectedAnimal(animalKey);
//     setShowDetail(true);
//   };

//   const closeDetail = () => {
//     setShowDetail(false);
//     setSelectedAnimal(null);
//   };

//   const getStatusBadge = (schedule) => {
//     if (schedule.includes("মাস") && schedule.includes("বছর")) return "yearly";
//     if (schedule.includes("মাস")) return "monthly";
//     if (schedule.includes("সপ্তাহ")) return "weekly";
//     return "regular";
//   };

//   return (
//     <div className="vaccine-info-section">
//       <div className="info-header">
//         <div className="info-header-content">
//           <h2>
//             <i className="fa-solid fa-book-open"></i> 
//             প্রাণীর ভ্যাকসিন তথ্য
//           </h2>
//           <p>বিভিন্ন প্রাণীর জন্য প্রয়োজনীয় ভ্যাকসিন এবং সময়সূচী সম্পর্কে বিস্তারিত জানুন</p>
//         </div>
//       </div>

//       <div className="animals-grid">
//         {animals.map((animalKey) => {
//           const animal = vaccineInfoData[animalKey];
//           const summary = vaccineScheduleSummary[animalKey];
          
//           return (
//             <div 
//               key={animalKey} 
//               className="animal-card"
//               style={{ '--card-accent': animal.color }}
//               onClick={() => handleCardClick(animalKey)}
//             >
//               <div className="card-header" style={{ background: animal.bgLight }}>
//                 <div className="animal-icon">{animal.icon}</div>
//                 <h3 className="animal-name">{animal.nameBn}</h3>
//                 <div className="animal-badge" style={{ background: animal.color }}>
//                   {animal.vaccines.length}টি ভ্যাকসিন
//                 </div>
//               </div>
              
//               <div className="card-body">
//                 <div className="quick-info">
//                   <div className="info-item">
//                     <i className="fa-solid fa-calendar-check"></i>
//                     <span>প্রথম ভ্যাকসিন: {summary.firstVaccine}</span>
//                   </div>
//                   <div className="info-item">
//                     <i className="fa-solid fa-clock"></i>
//                     <span>বুস্টার: {summary.boosterInterval}</span>
//                   </div>
//                 </div>
                
//                 <div className="vaccine-preview">
//                   <strong>প্রধান ভ্যাকসিন:</strong>
//                   <div className="preview-list">
//                     {animal.vaccines.slice(0, 3).map((vaccine, idx) => (
//                       <span key={idx} className="preview-tag">
//                         {vaccine.name.split(' ')[0]}
//                       </span>
//                     ))}
//                     {animal.vaccines.length > 3 && (
//                       <span className="preview-tag more">+{animal.vaccines.length - 3}</span>
//                     )}
//                   </div>
//                 </div>
                
//                 <div className="card-footer">
//                   <button className="details-btn">
//                     বিস্তারিত দেখুন <i className="fa-solid fa-arrow-right"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Detailed Modal */}
//       {showDetail && selectedAnimal && (
//         <div className="detail-modal-overlay" onClick={closeDetail}>
//           <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
//             <button className="modal-close-btn" onClick={closeDetail}>
//               <i className="fa-solid fa-xmark"></i>
//             </button>
            
//             <div className="modal-header" style={{ background: vaccineInfoData[selectedAnimal].bgLight }}>
//               <div className="modal-icon">{vaccineInfoData[selectedAnimal].icon}</div>
//               <h2>{vaccineInfoData[selectedAnimal].nameBn}</h2>
//               <p className="modal-subtitle">সম্পূর্ণ ভ্যাকসিনেশন সময়সূচী</p>
//             </div>
            
//             <div className="modal-body">
//               <div className="vaccine-timeline">
//                 {vaccineInfoData[selectedAnimal].vaccines.map((vaccine, idx) => (
//                   <div key={idx} className="timeline-item">
//                     <div className="timeline-marker" style={{ background: vaccineInfoData[selectedAnimal].color }}>
//                       <i className="fa-solid fa-syringe"></i>
//                     </div>
//                     <div className="timeline-content">
//                       <div className="vaccine-header">
//                         <h4>{vaccine.name}</h4>
//                         <span className={`schedule-badge ${getStatusBadge(vaccine.schedule)}`}>
//                           {vaccine.schedule}
//                         </span>
//                       </div>
//                       <p className="vaccine-description">{vaccine.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="info-note">
//                 <i className="fa-solid fa-circle-info"></i>
//                 <div>
//                   <strong>মনে রাখবেন:</strong>
//                   <p>ভ্যাকসিনের সময়সূচী আপনার এলাকার ভেটেরিনারি ডাক্তারের পরামর্শ অনুযায়ী পরিবর্তন হতে পারে। নিয়মিত বুস্টার ডোজ অত্যন্ত গুরুত্বপূর্ণ।</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VaccineInfoSection;

import React, { useState } from 'react';
import { vaccineInfoData, vaccineScheduleSummary } from '../data/vaccineInfoData';
import '../styles/VaccineInfoSection.css';

const VaccineInfoSection = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const animals = Object.keys(vaccineInfoData);

  const handleCardClick = (animalKey) => {
    setSelectedAnimal(animalKey);
    setShowDetail(true);
  };

  const closeDetail = () => {
    setShowDetail(false);
    setSelectedAnimal(null);
  };

  const getStatusBadge = (schedule) => {
    if (schedule.includes("মাস") && schedule.includes("বছর")) return "yearly";
    if (schedule.includes("মাস")) return "monthly";
    if (schedule.includes("সপ্তাহ")) return "weekly";
    return "regular";
  };

  return (
    <div className="vaccine-info-section">
      <div className="info-header">
        <div className="info-header-content">
          <div className="header-badge">
            <i className="fa-solid fa-syringe"></i> ভ্যাকসিন গাইড
          </div>
          <h2>
            প্রাণীর জন্য প্রয়োজনীয় 
            <span className="highlight"> ভ্যাকসিন তথ্য</span>
          </h2>
          <p>বিভিন্ন প্রাণীর জন্য প্রয়োজনীয় ভ্যাকসিন এবং সময়সূচী সম্পর্কে বিস্তারিত জানুন</p>
        </div>
      </div>

      <div className="animals-grid">
        {animals.map((animalKey) => {
          const animal = vaccineInfoData[animalKey];
          const summary = vaccineScheduleSummary[animalKey];
          
          return (
            <div 
              key={animalKey} 
              className="animal-card"
              style={{ '--card-accent': animal.color }}
              onClick={() => handleCardClick(animalKey)}
            >
              <div className="card-header" style={{ background: animal.bgLight }}>
                <div className="animal-icon">{animal.icon}</div>
                <h3 className="animal-name">{animal.nameBn}</h3>
                <div className="animal-badge" style={{ background: animal.color }}>
                  {animal.vaccines.length}টি ভ্যাকসিন
                </div>
              </div>
              
              <div className="card-body">
                <div className="quick-info">
                  <div className="info-item">
                    <i className="fa-solid fa-calendar-check"></i>
                    <span>প্রথম ভ্যাকসিন: {summary.firstVaccine}</span>
                  </div>
                  <div className="info-item">
                    <i className="fa-solid fa-clock"></i>
                    <span>বুস্টার: {summary.boosterInterval}</span>
                  </div>
                </div>
                
                <div className="vaccine-preview">
                  <strong>প্রধান ভ্যাকসিন:</strong>
                  <div className="preview-list">
                    {animal.vaccines.slice(0, 3).map((vaccine, idx) => (
                      <span key={idx} className="preview-tag">
                        {vaccine.name.split(' ')[0]}
                      </span>
                    ))}
                    {animal.vaccines.length > 3 && (
                      <span className="preview-tag more">+{animal.vaccines.length - 3}</span>
                    )}
                  </div>
                </div>
                
                <div className="card-footer">
                  <button className="details-btn">
                    বিস্তারিত দেখুন <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Modal */}
      {showDetail && selectedAnimal && (
        <div className="detail-modal-overlay" onClick={closeDetail}>
          <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeDetail}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            
            <div className="modal-header" style={{ background: vaccineInfoData[selectedAnimal].bgLight }}>
              <div className="modal-icon">{vaccineInfoData[selectedAnimal].icon}</div>
              <h2>{vaccineInfoData[selectedAnimal].nameBn}</h2>
              <p className="modal-subtitle">সম্পূর্ণ ভ্যাকসিনেশন সময়সূচী</p>
            </div>
            
            <div className="modal-body">
              <div className="vaccine-timeline">
                {vaccineInfoData[selectedAnimal].vaccines.map((vaccine, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-marker" style={{ background: vaccineInfoData[selectedAnimal].color }}>
                      <i className="fa-solid fa-syringe"></i>
                    </div>
                    <div className="timeline-content">
                      <div className="vaccine-header">
                        <h4>{vaccine.name}</h4>
                        <span className={`schedule-badge ${getStatusBadge(vaccine.schedule)}`}>
                          {vaccine.schedule}
                        </span>
                      </div>
                      <p className="vaccine-description">{vaccine.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="info-note">
                <i className="fa-solid fa-circle-info"></i>
                <div>
                  <strong>মনে রাখবেন:</strong>
                  <p>ভ্যাকসিনের সময়সূচী আপনার এলাকার ভেটেরিনারি ডাক্তারের পরামর্শ অনুযায়ী পরিবর্তন হতে পারে। নিয়মিত বুস্টার ডোজ অত্যন্ত গুরুত্বপূর্ণ।</p>
                </div>
              </div>

              <div className="emergency-contact">
                <i className="fa-solid fa-phone-alt"></i>
                <div>
                  <strong>জরুরি যোগাযোগ:</strong>
                  <p>পশু চিকিৎসা হটলাইন: 16123 | জাতীয় প্রাণিসম্পদ হটলাইন: 16233</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VaccineInfoSection;