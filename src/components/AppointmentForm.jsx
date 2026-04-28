import React, { useState } from 'react';

const AppointmentForm = ({ doctor, appointments, setAppointments, navigateTo, showToast }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    petName: '',
    petType: '',
    petAge: '',
    problem: '',
    area: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.patientName || !formData.phone || !formData.date || !formData.time || !formData.petName || !formData.petType || !formData.problem || !formData.area) {
      showToast('সব প্রয়োজনীয় তথ্য পূরণ করুন!', 'warning');
      return;
    }

    const newAppointment = {
      id: Date.now(),
      doctorId: doctor.id,
      doctorName: doctor.name,
      ...formData,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    setAppointments([...appointments, newAppointment]);
    showToast(`✅ অ্যাপয়েন্টমেন্ট সফলভাবে বুক করা হয়েছে! ${doctor.name} ডাক্তার শীঘ্রই আপনার সাথে যোগাযোগ করবেন।`, 'success');

    setTimeout(() => {
      navigateTo('doctor');
    }, 2000);
  };

  const minDate = new Date().toISOString().split('T')[0];

  return (
    <div className="detail-back-container">
      <button className="back-button" onClick={() => navigateTo('doctor-detail', doctor)}>
        <i className="fa-solid fa-arrow-left"></i> ডাক্তার প্রোফাইলে ফিরুন
      </button>
      <div className="appointment-form-container">
        <div className="form-header">
          <h2><i className="fa-solid fa-calendar-check"></i> অ্যাপয়েন্টমেন্ট ফর্ম</h2>
          <p>ডাক্তার: {doctor.name} ({doctor.speciality})</p>
          <p>সেবা ফি: {doctor.consultationFee}</p>
        </div>

        <form id="appointmentForm" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label><i className="fa-solid fa-user"></i> আপনার নাম *</label>
              <input
                type="text"
                id="patientName"
                required
                placeholder="আপনার পুরো নাম"
                value={formData.patientName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label><i className="fa-solid fa-phone"></i> মোবাইল নম্বর *</label>
              <input
                type="tel"
                id="phone"
                required
                placeholder="01XXXXXXXXX"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label><i className="fa-solid fa-envelope"></i> ইমেইল</label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label><i className="fa-solid fa-calendar-day"></i> পছন্দের তারিখ *</label>
              <input
                type="date"
                id="date"
                required
                min={minDate}
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label><i className="fa-solid fa-clock"></i> পছন্দের সময় *</label>
              <select id="time" required value={formData.time} onChange={handleChange}>
                <option value="">সময় নির্বাচন করুন</option>
                <option value="09:00 AM">সকাল ৯:০০ টা</option>
                <option value="10:00 AM">সকাল ১০:০০ টা</option>
                <option value="11:00 AM">সকাল ১১:০০ টা</option>
                <option value="12:00 PM">দুপুর ১২:০০ টা</option>
                <option value="02:00 PM">দুপুর ২:০০ টা</option>
                <option value="03:00 PM">বিকাল ৩:০০ টা</option>
                <option value="04:00 PM">বিকাল ৪:০০ টা</option>
                <option value="05:00 PM">বিকাল ৫:০০ টা</option>
              </select>
            </div>
            <div className="form-group">
              <label><i className="fa-solid fa-paw"></i> পোষা প্রাণীর নাম *</label>
              <input
                type="text"
                id="petName"
                required
                placeholder="পোষা প্রাণীর নাম"
                value={formData.petName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label><i className="fa-solid fa-dog"></i> পোষা প্রাণীর ধরন *</label>
              <select id="petType" required value={formData.petType} onChange={handleChange}>
                <option value="">ধরন নির্বাচন করুন</option>
                <option value="dog">কুকুর (Dog)</option>
                <option value="cat">বিড়াল (Cat)</option>
                <option value="cow">গরু (Cow)</option>
                <option value="goat">ছাগল (Goat)</option>
                <option value="poultry">মুরগি (Poultry)</option>
                <option value="rabbit">খরগোশ (Rabbit)</option>
              </select>
            </div>
            <div className="form-group">
              <label><i className="fa-solid fa-calendar-alt"></i> পোষা প্রাণীর বয়স</label>
              <input
                type="text"
                id="petAge"
                placeholder="যেমন: 2 বছর বা 6 মাস"
                value={formData.petAge}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label><i className="fa-solid fa-comment"></i> সমস্যার বিবরণ *</label>
            <textarea
              id="problem"
              rows="4"
              required
              placeholder="আপনার পোষা প্রাণীর সমস্যা সম্পর্কে বিস্তারিত জানান..."
              value={formData.problem}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label><i className="fa-solid fa-location-dot"></i> আপনার এলাকা *</label>
            <input
              type="text"
              id="area"
              required
              placeholder="জেলা, উপজেলা, এলাকা"
              value={formData.area}
              onChange={handleChange}
            />
          </div>

          <div className="form-footer">
            <button type="button" className="btn-cancel" onClick={() => navigateTo('doctor-detail', doctor)}>
              বাতিল
            </button>
            <button type="submit" className="btn-save">
              <i className="fa-solid fa-paper-plane"></i> অ্যাপয়েন্টমেন্ট বুক করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;