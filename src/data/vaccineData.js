export const vaccineData = {
  dog: [
    { name: "DHPP (Distemper/Parvo)", intervalDays: 365, minAgeMonths: 2, description: "Distemper, Parvo, Adenovirus, Parainfluenza" },
    { name: "Rabies", intervalDays: 365, minAgeMonths: 3, description: "Rabies virus" },
    { name: "Kennel Cough", intervalDays: 365, minAgeMonths: 2, description: "Bordetella bronchiseptica" },
    { name: "Leptospirosis", intervalDays: 365, minAgeMonths: 2, description: "Leptospira bacteria" }
  ],
  cat: [
    { name: "FVRCP", intervalDays: 365, minAgeMonths: 2, description: "Panleukopenia, Herpesvirus, Calicivirus" },
    { name: "Rabies", intervalDays: 365, minAgeMonths: 3, description: "Rabies virus" },
    { name: "FeLV", intervalDays: 365, minAgeMonths: 2, description: "Feline Leukemia Virus" }
  ],
  cow: [
    { name: "FMD", intervalDays: 180, minAgeMonths: 4, description: "Foot and Mouth Disease" },
    { name: "HS", intervalDays: 365, minAgeMonths: 6, description: "Hemorrhagic Septicemia" },
    { name: "BQ", intervalDays: 365, minAgeMonths: 6, description: "Black Quarter" }
  ],
  goat: [
    { name: "PPR", intervalDays: 365, minAgeMonths: 3, description: "Peste des Petits Ruminants" },
    { name: "Enterotoxemia", intervalDays: 365, minAgeMonths: 2, description: "Enterotoxemia" },
    { name: "FMD", intervalDays: 180, minAgeMonths: 4, description: "Foot and Mouth Disease" },
    { name: "Goat Pox", intervalDays: 365, minAgeMonths: 3, description: "Goat Pox" }
  ],
  poultry: [
    { name: "Marek's", intervalDays: 365, minAgeMonths: 0.5, description: "Marek's Disease" },
    { name: "Newcastle", intervalDays: 180, minAgeMonths: 1, description: "Newcastle Disease" },
    { name: "IBD", intervalDays: 180, minAgeMonths: 1, description: "Infectious Bursal Disease" },
    { name: "Fowl Pox", intervalDays: 365, minAgeMonths: 2, description: "Fowl Pox" }
  ],
  rabbit: [
    { name: "RHD", intervalDays: 365, minAgeMonths: 2, description: "Rabbit Hemorrhagic Disease" },
    { name: "Myxomatosis", intervalDays: 365, minAgeMonths: 2, description: "Myxomatosis" }
  ]
};

export function calculateAgeInMonths(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  let months = (today.getFullYear() - birthDate.getFullYear()) * 12;
  months -= birthDate.getMonth();
  months += today.getMonth();
  return months <= 0 ? 0 : months;
}

export function calculateNextDue(lastGiven, intervalDays) {
  const date = new Date(lastGiven);
  date.setDate(date.getDate() + intervalDays);
  return date.toISOString().split('T')[0];
}

export function getStatus(nextDue) {
  const today = new Date().toISOString().split('T')[0];
  if (nextDue === today) return "due";
  if (nextDue < today) return "overdue";
  return "upcoming";
}

export function generateAutoVaccines(petId, petType, dob, existingRecords) {
  const ageMonths = calculateAgeInMonths(dob);
  const vaccines = vaccineData[petType] || [];
  const newVaccines = [];
  
  vaccines.forEach(vaccine => {
    if (ageMonths >= vaccine.minAgeMonths) {
      const lastGiven = new Date();
      lastGiven.setMonth(lastGiven.getMonth() - (ageMonths - vaccine.minAgeMonths));
      const lastGivenStr = lastGiven.toISOString().split('T')[0];
      
      const nextDue = calculateNextDue(lastGivenStr, vaccine.intervalDays);
      const nextDueStr = nextDue;
      
      newVaccines.push({
        id: Date.now() + Math.random() * 1000 + newVaccines.length,
        petId: petId,
        vaccineName: vaccine.name,
        lastGiven: lastGivenStr,
        nextDue: nextDueStr,
        status: getStatus(nextDueStr)
      });
    }
  });
  
  return newVaccines;
}