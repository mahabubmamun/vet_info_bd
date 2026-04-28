import React from 'react';

const Hero = ({ totalVaccines, upcoming, overdue }) => {
  return (
    <div className="hero">
      {/* <div className="hero-badge">🇧🇩 ভেটেরিনারি বাংলাদেশ</div> */}
      <h1>আপনার পোষা প্রাণীর<br /><span>সর্বোত্তম যত্ন</span></h1>
      <p>পশু চিকিৎসা সেবা ট্র্যাক করুন, অভিজ্ঞ ভেটেরিনারি ডাক্তার খুঁজুন এবং আপনার প্রিয় পোষা প্রাণীর ভ্যাকসিনেশন রেকর্ড সংরক্ষণ করুন।</p>
      {/* <div className="hero-stats">
        <div className="stat">
          <div className="stat-num">{totalVaccines}</div>
          <div className="stat-lbl">মোট ভ্যাকসিন</div>
        </div>
        <div className="stat">
          <div className="stat-num">{upcoming}</div>
          <div className="stat-lbl">আসন্ন</div>
        </div>
        <div className="stat">
          <div className="stat-num">{overdue}</div>
          <div className="stat-lbl">মেয়াদোত্তীর্ণ</div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;