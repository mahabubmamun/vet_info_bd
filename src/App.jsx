// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import VaccineTracker from './components/VaccineTracker';
import DoctorList from './components/DoctorList';
import DoctorDetail from './components/DoctorDetail';
import AppointmentForm from './components/AppointmentForm';
import VaccineCalculator from './components/VaccineCalculator'; // Add this import
import Toast from './components/Toast';
import { useToast } from './hooks/useToast';
import { loadInitialData } from './utils/helpers';
import './styles/App.css';

// function App() {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [pets, setPets] = useState([]);
//   const [vaccineRecords, setVaccineRecords] = useState([]);
//   const [doctors, setDoctors] = useState([]);
//   const [blogs, setBlogs] = useState([]);
//   const [appointments, setAppointments] = useState([]);
//   const { toast, showToast, removeToast } = useToast();

//   useEffect(() => {
//     const initialData = loadInitialData();
//     setPets(initialData.pets);
//     setVaccineRecords(initialData.vaccineRecords);
//     setDoctors(initialData.doctors);
//     setBlogs(initialData.blogs);
//     setAppointments(initialData.appointments);
//   }, []);

//   const navigateTo = (page, doctor = null) => {
//     setCurrentPage(page);
//     if (doctor) setSelectedDoctor(doctor);
//     window.scrollTo(0, 0);
//   };

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'home':
//         return (
//           <HomePage
//             pets={pets}
//             vaccineRecords={vaccineRecords}
//             blogs={blogs}
//             navigateTo={navigateTo}
//           />
//         );
//       case 'vaccine':
//         return (
//           <VaccineTracker
//             pets={pets}
//             setPets={setPets}
//             vaccineRecords={vaccineRecords}
//             setVaccineRecords={setVaccineRecords}
//             showToast={showToast}
//           />
//         );
//       case 'doctor':
//         return (
//           <DoctorList
//             doctors={doctors}
//             navigateTo={navigateTo}
//             showToast={showToast}
//           />
//         );
//       case 'doctor-detail':
//         return (
//           <DoctorDetail
//             doctor={selectedDoctor}
//             navigateTo={navigateTo}
//             showToast={showToast}
//           />
//         );
//       case 'appointment':
//         return (
//           <AppointmentForm
//             doctor={selectedDoctor}
//             appointments={appointments}
//             setAppointments={setAppointments}
//             navigateTo={navigateTo}
//             showToast={showToast}
//           />
//         );
//       default:
//         return (
//           <HomePage
//             pets={pets}
//             vaccineRecords={vaccineRecords}
//             blogs={blogs}
//             navigateTo={navigateTo}
//           />
//         );
//     }
//   };

//   return (
//     <div className="app">
//       <Navbar currentPage={currentPage} navigateTo={navigateTo} />
//       <main>{renderPage()}</main>
//       <Footer />
//       {toast && (
//         <Toast
//           message={toast.message}
//           type={toast.type}
//           onClose={removeToast}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [pets, setPets] = useState([]);
  const [vaccineRecords, setVaccineRecords] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const { toast, showToast, removeToast } = useToast();

  useEffect(() => {
    const initialData = loadInitialData();
    setPets(initialData.pets);
    setVaccineRecords(initialData.vaccineRecords);
    setDoctors(initialData.doctors);
    setBlogs(initialData.blogs);
    setAppointments(initialData.appointments);
  }, []);

  const navigateTo = (page, doctor = null) => {
    setCurrentPage(page);
    if (doctor) setSelectedDoctor(doctor);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            pets={pets}
            vaccineRecords={vaccineRecords}
            blogs={blogs}
            navigateTo={navigateTo}
          />
        );
      case 'vaccine':
        return (
          <VaccineTracker
            pets={pets}
            setPets={setPets}
            vaccineRecords={vaccineRecords}
            setVaccineRecords={setVaccineRecords}
            showToast={showToast}
          />
        );
      case 'calculator': // Add this new case
        return <VaccineCalculator />;
      case 'doctor':
        return (
          <DoctorList
            doctors={doctors}
            navigateTo={navigateTo}
            showToast={showToast}
          />
        );
      case 'doctor-detail':
        return (
          <DoctorDetail
            doctor={selectedDoctor}
            navigateTo={navigateTo}
            showToast={showToast}
          />
        );
      case 'appointment':
        return (
          <AppointmentForm
            doctor={selectedDoctor}
            appointments={appointments}
            setAppointments={setAppointments}
            navigateTo={navigateTo}
            showToast={showToast}
          />
        );
      default:
        return (
          <HomePage
            pets={pets}
            vaccineRecords={vaccineRecords}
            blogs={blogs}
            navigateTo={navigateTo}
          />
        );
    }
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} navigateTo={navigateTo} />
      <main>{renderPage()}</main>
      <Footer />
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={removeToast}
        />
      )}
    </div>
  );
}

export default App;
