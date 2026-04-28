import React from 'react';

const ImportantLinks = ({ navigateTo }) => {
  const links = [
    { icon: 'fa-building-columns', label: 'প্রাণিসম্পদ অধিদপ্তর', sub: 'DLS Bangladesh', href: 'https://www.dls.gov.bd', external: true },
    { icon: 'fa-syringe', label: 'ভ্যাকসিন ট্র্যাকার', sub: 'রেকর্ড রাখুন', action: () => navigateTo('vaccine'), external: false },
    { icon: 'fa-magnifying-glass', label: 'ডাক্তার খুঁজুন', sub: 'কাছের ভেট', action: () => navigateTo('doctor'), external: false },
    { icon: 'fa-globe', label: 'FAO Bangladesh', sub: 'আন্তর্জাতিক সহায়তা', href: 'https://www.fao.org/bangladesh', external: true },
    { icon: 'fa-phone-volume', label: 'ইমার্জেন্সি হটলাইন', sub: '16123 (পশু চিকিৎসা)', href: 'tel:16123', external: true },
    { icon: 'fa-book-open-reader', label: 'রোগ পরিচিতি', sub: 'তথ্যভাণ্ডার', action: () => {}, external: false }
  ];

  const handleClick = (link) => {
    if (link.external && link.href) {
      window.open(link.href, '_blank');
    } else if (link.action) {
      link.action();
    }
  };

  return (
    <div className="section">
      <div className="section-header">
        <h2 className="section-title">গুরুত্বপূর্ণ লিংক</h2>
      </div>
      <div className="links-grid">
        {links.map((link, index) => (
          <a
            key={index}
            className="link-card"
            href={link.external ? link.href : '#'}
            onClick={(e) => {
              if (!link.external) {
                e.preventDefault();
                handleClick(link);
              }
            }}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
          >
            <div className="link-icon"><i className={`fa-solid ${link.icon}`}></i></div>
            <div>
              <div className="link-label">{link.label}</div>
              <div className="link-sub">{link.sub}</div>
            </div>
            <i className={`fa-solid ${link.external ? 'fa-external-link-alt' : 'fa-arrow-right'} link-arrow`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ImportantLinks;