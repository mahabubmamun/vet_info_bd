import doctorsData from '../data/doctors.json';
import blogsData from '../data/blogs.json';
import { generateAutoVaccines } from '../data/vaccineData';

export function loadInitialData() {
  // Load pets from localStorage
  let pets = [];
  let vaccineRecords = [];
  
  const storedPets = localStorage.getItem('vetbd_pets');
  const storedVaccines = localStorage.getItem('vetbd_vaccines');
  
  if (storedPets) {
    pets = JSON.parse(storedPets);
  }
  if (storedVaccines) {
    vaccineRecords = JSON.parse(storedVaccines);
  }
  
  // Initialize with sample data if empty
  if (pets.length === 0) {
    const samplePet = { id: 1, name: "Max", type: "dog", dob: "2022-01-15" };
    pets.push(samplePet);
    const autoVaccines = generateAutoVaccines(1, "dog", "2022-01-15", []);
    vaccineRecords.push(...autoVaccines);
    saveToLocalStorage(pets, vaccineRecords);
  }
  
  // Load appointments
  let appointments = [];
  const storedAppointments = localStorage.getItem('vetbd_appointments');
  if (storedAppointments) {
    appointments = JSON.parse(storedAppointments);
  }
  
  return {
    pets,
    vaccineRecords,
    doctors: doctorsData,
    blogs: blogsData,
    appointments
  };
}

export function saveToLocalStorage(pets, vaccineRecords) {
  localStorage.setItem('vetbd_pets', JSON.stringify(pets));
  localStorage.setItem('vetbd_vaccines', JSON.stringify(vaccineRecords));
}

export function saveAppointments(appointments) {
  localStorage.setItem('vetbd_appointments', JSON.stringify(appointments));
}