import React from 'react';
import Hero from './Hero';
import BlogSection from './BlogSection';
import ImportantLinks from './ImportantLinks';

const HomePage = ({ pets, vaccineRecords, blogs, navigateTo }) => {
  const today = new Date().toISOString().split('T')[0];
  const sevenDaysLater = new Date();
  sevenDaysLater.setDate(sevenDaysLater.getDate() + 7);
  const sevenDaysStr = sevenDaysLater.toISOString().split('T')[0];

  const totalVaccines = vaccineRecords.length;
  const upcoming = vaccineRecords.filter(r => r.status === 'upcoming' && r.nextDue <= sevenDaysStr).length;
  const overdue = vaccineRecords.filter(r => r.status === 'overdue').length;

  return (
    <>
      <Hero totalVaccines={totalVaccines} upcoming={upcoming} overdue={overdue} />
      <BlogSection blogs={blogs} />
      <div className="divider"></div>
      <ImportantLinks navigateTo={navigateTo} />
    </>
  );
};

export default HomePage;