export const locationData = {
  Dhaka: {
    districts: ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Narayanganj", "Norshingdi", "Rajbari", "Shariatpur", "Tangail"],
    upazilas: {
      "Dhaka": {
        upazilas: ["Dhaka South City Corporation", "Dhaka North City Corporation", "Dhamrai", "Dohar", "Keraniganj", "Nawabganj", "Savar"],
        areas: {
          "Dhaka South City Corporation": ["Paltan", "Motijheel", "Ramna", "Shahbag", "Wari", "Bangshal", "Gulistan", "Sabujbagh", "Khilgaon", "Mugda", "Shahjahanpur", "Basabo", "Dhanmondi", "Hazaribagh", "Azimpur", "New Market", "Lalbagh", "Kamrangirchar", "Jatrabari", "Shympur", "Demra", "Kadamtali", "Gendaria"],
          "Dhaka North City Corporation": ["Uttara", "Uttarkhan", "Dakshinkhan", "Khilkhet", "Bimanbandar", "Mirpur", "Pallabi", "Rupnagar", "Gulshan", "Banani", "Baridhara", "Badda", "Rampura", "Mirpur", "Shah Ali", "Darussalam", "Karwan Bazar", "Tejgaon", "Mohammadpur", "Adabor", "Sher-e-Bangla nagar", "Technical Area", "Gabtoli", "Cantonment", "Vatara"]
        }
      },
      //       "Faridpur": {
      //   upazilas: ["ফরিদপুর সদর", "মধুখালী", "বোয়ালমারী", "আলফাডাঙ্গা", "নগরকান্দা", "ভাঙ্গা", "সদরপুর", "চরভদ্রাসন", "সালথা"]
      // }
    }
  },
  Chattogram: {
    districts: ["Chattogram", "Bandarban", "Brahmanbaria", "Chandpur", "Comilla", "Cox's Bazar", "Feni", "Khagrachari", "Laksmipur", "Noakhali", "Rangamati"],
    upazilas: {
      "Chattogram": {
        upazilas: ["Chattogram City Corporation", "Anwara", "Banshkhali", "Boalkhali", "Chandanaish", "Fatikchari", "Hathazari", "Lohagara", "Mirsarai", "Patiya", "Rangunia", "Raujan", "Sandwip", "Satkania", "Sitakundu"],
        areas: {
          "Chattogram City Corporation": ["Akbar Shah", "Bakalia", "Bandar", "Bayazid", "Chandgaon", "Double Mooring", "Halishahar", "Khulshi", "Kotwali", "Pahartali", "Panchlaish", "Patenga", "Chawkbazar", "Sadarghat", "EPZ", "Karnaphuli"]
        }
      }
    }
  },
  Rajshahi: {
    districts: ["Rajshahi", "Bogra", "Chapainawabganj", "Joypurhat", "Naogaon", "Natore", "Pabna", "Sirajganj"],
    upazilas: {}
  },
  Khulna: {
    districts: ["Khulna", "Bagerhat", "Chuadanga", "Jashore", "Jhenaidah", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"],
    upazilas: {}
  },
  Barisal: {
    districts: ["Barisal", "Barguna", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur"],
    upazilas: {}
  },
  Sylhet: {
    districts: ["Sylhet", "Habiganj", "Moulvibazar", "Sunamganj"],
    upazilas: {}
  },
  Mymensingh: {
    districts: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"],
    upazilas: {}
  },
  Rangpur: {
    districts: ["Rangpur", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Thakurgaon"],
    upazilas: {}
  }
};

export function loadDistricts(division, data) {
  if (division && data[division]) {
    return data[division].districts;
  }
  return [];
}

export function loadUpazilas(division, district, data) {
  if (division && district && data[division] && data[division].upazilas[district]) {
    return data[division].upazilas[district].upazilas;
  }
  return [];
}

export function loadAreas(division, district, upazila, data) {
  if (division && district && upazila && 
      data[division] && 
      data[division].upazilas[district] && 
      data[division].upazilas[district].areas && 
      data[division].upazilas[district].areas[upazila]) {
    return data[division].upazilas[district].areas[upazila];
  }
  return [];
}