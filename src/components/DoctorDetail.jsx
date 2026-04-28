// // import React from 'react';

// // const DoctorDetail = ({ doctor, navigateTo, showToast }) => {
// //   if (!doctor) {
// //     return (
// //       <div className="detail-back-container">
// //         <button className="back-button" onClick={() => navigateTo('doctor')}>
// //           <i className="fa-solid fa-arrow-left"></i> ডাক্তার তালিকায় ফিরুন
// //         </button>
// //         <div className="empty-state">
// //           <h3>ডাক্তার তথ্য পাওয়া যায়নি</h3>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <>
// //       <div className="detail-back-container">
// //         <button className="back-button" onClick={() => navigateTo('doctor')}>
// //           <i className="fa-solid fa-arrow-left"></i> ডাক্তার তালিকায় ফিরুন
// //         </button>
// //       </div>
      
// //       <div className="doctor-detail-page">
// //         <div className="detail-header">
// //           <div className="detail-avatar">{doctor.initials}</div>
// //           <div>
// //             <h1>{doctor.name}</h1>
// //             <div className="detail-location">{doctor.exactLocation}</div>
// //           </div>
// //         </div>

// //         <div className="detail-section">
// //           <h3><i className="fa-solid fa-circle-info"></i> পেশাগত তথ্য</h3>
// //           <div className="detail-grid">
// //             <div>
// //               <strong>ঠিকানা:</strong> 
// //               <p>{doctor.area}, {doctor.upazila}, {doctor.district}, {doctor.division}</p>
// //             </div>
// //             {/* <div>
// //               <strong>সেবার সময়:</strong> 
// //               <p>{doctor.opensAt}</p>
// //             </div> */}
// //           </div>
// //         </div>

// //         <div className="detail-section">
// //           <h3><i className="fa-solid fa-address-card"></i> যোগাযোগের তথ্য</h3>
// //           <div className="contact-links">
// //             <a href={`tel:${doctor.phone}`} className="contact-link">
// //               <i className="fa-solid fa-phone"></i> {doctor.phone}
// //             </a>
// //             <a href={`mailto:${doctor.email}`} className="contact-link">
// //               <i className="fa-solid fa-envelope"></i> {doctor.email}
// //             </a>
// //             <a href={doctor.map} target="_blank" rel="noopener noreferrer" className="contact-link">
// //               <i className="fa-solid fa-map-location-dot"></i> গুগল ম্যাপে দেখুন
// //             </a>
// //           </div>
// //         </div>

// //         <div className="detail-section">
// //           <h3><i className="fa-solid fa-calendar-check"></i> অ্যাপয়েন্টমেন্ট</h3>
// //           <p>অ্যাপয়েন্টমেন্টের জন্য নিচের বাটনে ক্লিক করুন। অ্যাপয়েন্টমেন্ট বুকিং এর পর ডাক্তার আপনার সাথে যোগাযোগ করবেন।</p>
// //           <button className="appointment-btn" onClick={() => navigateTo('appointment', doctor)}>
// //             <i className="fa-solid fa-calendar-plus"></i> অ্যাপয়েন্টমেন্ট বুক করুন
// //           </button>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default DoctorDetail;

// import React from 'react';

// const DoctorDetail = ({ doctor, navigateTo, showToast }) => {
//   if (!doctor) {
//     return (
//       <div className="detail-back-container">
//         <button className="back-button" onClick={() => navigateTo('doctor')}>
//           <i className="fa-solid fa-arrow-left"></i> ডাক্তার তালিকায় ফিরুন
//         </button>
//         <div className="empty-state">
//           <h3>ডাক্তার তথ্য পাওয়া যায়নি</h3>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="detail-back-container">
//         <button className="back-button" onClick={() => navigateTo('doctor')}>
//           <i className="fa-solid fa-arrow-left"></i> ডাক্তার তালিকায় ফিরুন
//         </button>
//       </div>
      
//       <div className="doctor-detail-page">
//         <div className="detail-header">
//           <div className="detail-avatar">{doctor.initials}</div>
//           <div>
//             <h1>{doctor.name}</h1>
//             <div className="detail-location">{doctor.exactLocation}</div>
//           </div>
//         </div>

//         <div className="detail-section">
//           <h3><i className="fa-solid fa-circle-info"></i> পেশাগত তথ্য</h3>
//           <div className="detail-grid">
//             <div>
//               <strong>ঠিকানা:</strong> 
//               <p>{doctor.area}, {doctor.upazila}, {doctor.district}, {doctor.division}</p>
//             </div>
//             <div>
//               <strong>সেবার সময়:</strong> 
//               <p>{doctor.opensAt}</p>
//             </div>
//           </div>
//         </div>

//         <div className="detail-section">
//           <h3><i className="fa-solid fa-address-card"></i> যোগাযোগের তথ্য</h3>
//           <div className="contact-links">
//             <a href={`tel:${doctor.phone}`} className="contact-link">
//               <i className="fa-solid fa-phone"></i> {doctor.phone}
//             </a>
//             <a href={`mailto:${doctor.email}`} className="contact-link">
//               <i className="fa-solid fa-envelope"></i> {doctor.email}
//             </a>
//             <a href={doctor.map} target="_blank" rel="noopener noreferrer" className="contact-link">
//               <i className="fa-solid fa-map-location-dot"></i> গুগল ম্যাপে দেখুন
//             </a>
//           </div>
//         </div>

//         <div className="detail-section">
//           <h3><i className="fa-solid fa-calendar-check"></i> অ্যাপয়েন্টমেন্ট</h3>
//           <p>অ্যাপয়েন্টমেন্টের জন্য নিচের বাটনে ক্লিক করুন। অ্যাপয়েন্টমেন্ট বুকিং এর পর ডাক্তার আপনার সাথে যোগাযোগ করবেন।</p>
//           <button className="appointment-btn" onClick={() => navigateTo('appointment', doctor)}>
//             <i className="fa-solid fa-calendar-plus"></i> অ্যাপয়েন্টমেন্ট বুক করুন
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DoctorDetail;

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

  // Function to handle WhatsApp redirect
  const handleWhatsAppRedirect = () => {
    // Clean the phone number (remove +, spaces, dashes)
    let phoneNumber = doctor.phone.replace(/[+\s\-]/g, '');
    
    // Remove any non-digit characters
    phoneNumber = phoneNumber.replace(/\D/g, '');
    
    // Remove leading 88 if exists for Bangladesh numbers
    if (phoneNumber.startsWith('88')) {
      phoneNumber = phoneNumber.substring(2);
    }
    
    // Ensure it starts with 880 for Bangladesh
    if (!phoneNumber.startsWith('880') && phoneNumber.length === 11) {
      phoneNumber = '880' + phoneNumber;
    }
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

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
            <div className="detail-location">{doctor.exactLocation}</div>
          </div>
        </div>

        <div className="detail-section">
          <h3><i className="fa-solid fa-circle-info"></i> পেশাগত তথ্য</h3>
          <div className="detail-grid">
            <div>
              <strong>ঠিকানা:</strong> 
              <p>{doctor.area}, {doctor.upazila}, {doctor.district}, {doctor.division}</p>
            </div>
            <div>
              <strong>সেবার সময়:</strong> 
              <p>{doctor.opensAt}</p>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h3><i className="fa-solid fa-address-card"></i> যোগাযোগের তথ্য</h3>
          <div className="contact-links">
            <a href={`tel:${doctor.phone}`} className="contact-link">
              <i className="fa-solid fa-phone"></i> {doctor.phone}
            </a>
            <a href={`https://wa.me/${doctor.phone.replace(/[+\s\-]/g, '')}`} target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fa-brands fa-whatsapp"></i> WhatsApp
            </a>
            <a href={doctor.map} target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fa-solid fa-map-location-dot"></i> গুগল ম্যাপে দেখুন
            </a>
          </div>
        </div>

        <div className="detail-section">
          <h3><i className="fa-solid fa-calendar-check"></i> অ্যাপয়েন্টমেন্ট</h3>
          <p>অ্যাপয়েন্টমেন্টের জন্য নিচের বাটনে ক্লিক করুন। অ্যাপয়েন্টমেন্ট বুকিং এর পর ডাক্তার আপনার সাথে যোগাযোগ করবেন।</p>
          <button className="appointment-btn" onClick={handleWhatsAppRedirect}>
            <i className="fa-brands fa-whatsapp"></i> হোয়াটসঅ্যাপে অ্যাপয়েন্টমেন্ট বুক করুন
          </button>
        </div>
      </div>
    </>
  );
};

export default DoctorDetail;