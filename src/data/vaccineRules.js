// src/data/vaccineRules.js
export const vaccineRules = {
  dog: {
    core: [
      { name: "রেবিস (Rabies)", age: "3 months+", repeat: "প্রতি বছর" },
      { name: "DHPP (ডিস্টেম্পার, হেপাটাইটিস, প্যারাইনফ্লুয়েঞ্জা, পারভো)", age: "6-8 weeks", repeat: "বুস্টার প্রয়োজন" },
      { name: "লেপ্টোস্পাইরোসিস (Leptospirosis)", age: "8-9 weeks", repeat: "প্রতি বছর" },
      { name: "প্যারাইনফ্লুয়েঞ্জা (Parainfluenza)", age: "6-8 weeks", repeat: "প্রতি বছর" }
    ],
    optional: [
      { name: "বর্ডেটেলা (Bordetella) - কেনেল কাফ", age: "8 weeks+", repeat: "৬ মাস থেকে প্রতি বছর" },
      { name: "লাইম ডিজিজ (Lyme Disease)", age: "12 weeks+", repeat: "প্রতি বছর" },
      { name: "করোনাভাইরাস (Canine Coronavirus)", age: "6-8 weeks", repeat: "প্রতি বছর" }
    ]
  },
  cat: {
    core: [
      { name: "রেবিস (Rabies)", age: "3 months+", repeat: "প্রতি বছর" },
      { name: "FVRCP (ফেলাইন ভাইরাল রাইনোট্রাকাইটিস, ক্যালিসিভাইরাস, প্যানলিউকোপেনিয়া)", age: "6-8 weeks", repeat: "বুস্টার প্রয়োজন" },
      { name: "ফেলাইন প্যানলিউকোপেনিয়া (Feline Panleukopenia)", age: "6-8 weeks", repeat: "প্রতি বছর" }
    ],
    optional: [
      { name: "ফেলাইন লিউকেমিয়া ভাইরাস (FeLV)", age: "8-9 weeks", repeat: "প্রতি বছর" },
      { name: "বর্ডেটেলা (Bordetella)", age: "Any", repeat: "প্রতি বছর" },
      { name: "ক্ল্যামাইডিয়া (Chlamydia)", age: "9 weeks+", repeat: "প্রতি বছর" }
    ]
  },
  cow: {
    core: [
      { name: "গোলাপ খুরা (Foot and Mouth Disease - FMD)", age: "4 months+", repeat: "৬ মাস পর পর" },
      { name: "ক্ষুরা রোগ (Hemorrhagic Septicemia - HS)", age: "6 months+", repeat: "প্রতি বছর" },
      { name: "কালে খুরা (Black Quarter - BQ)", age: "6 months+", repeat: "প্রতি বছর" }
    ],
    optional: [
      { name: "যক্ষ্মা (Tuberculosis)", age: "3 months+", repeat: "প্রতি বছর" },
      { name: "ব্রুসেলোসিস (Brucellosis)", age: "4-8 months", repeat: "একবার" }
    ]
  },
  goat: {
    core: [
      { name: "গোলাপ খুরা (FMD)", age: "4 months+", repeat: "৬ মাস পর পর" },
      { name: "ক্ষুরা রোগ (HS)", age: "4 months+", repeat: "প্রতি বছর" },
      { name: "পিপিআর (PPR - Peste des Petits Ruminants)", age: "3 months+", repeat: "প্রতি বছর" }
    ],
    optional: [
      { name: "এন্টেরোটক্সেমিয়া (Enterotoxemia)", age: "2-3 months", repeat: "প্রতি বছর" },
      { name: "ক্লোস্ট্রিডিয়াল (Clostridial)", age: "2 months+", repeat: "প্রতি বছর" }
    ]
  },
  poultry: {
    core: [
      { name: "নিউক্যাসল ডিজিজ (Newcastle Disease - RDV)", age: "1 day", repeat: "২-৩ মাস পর পর" },
      { name: "গামবোরো (Infectious Bursal Disease - IBD)", age: "10-14 days", repeat: "১৪-২১ দিন পর বুস্টার" },
      { name: "বার্ড ফ্লু (Avian Influenza - AI)", age: "2 weeks+", repeat: "প্রতি ৩ মাস" }
    ],
    optional: [
      { name: "মাইকোপ্লাজমা (Mycoplasma)", age: "Any", repeat: "প্রতি ২ মাস" },
      { name: "কক্সিডিওসিস (Coccidiosis)", age: "7 days+", repeat: "প্রতি মাস" }
    ]
  },
  rabbit: {
    core: [
      { name: "মাইক্সোমাটোসিস (Myxomatosis)", age: "6 weeks+", repeat: "প্রতি বছর" },
      { name: "র্যাবিট হেমোরেজিক ডিজিজ (RHD)", age: "10 weeks+", repeat: "প্রতি বছর" }
    ],
    optional: [
      { name: "পাস্তুরেলোসিস (Pasteurellosis)", age: "Any", repeat: "প্রতি বছর" },
      { name: "এনসেফালিটোজুনোসিস (Encephalitozoonosis)", age: "Any", repeat: "প্রতি বছর" }
    ]
  }
};

// Helper function to calculate age in months from DOB
export const calculateAgeInMonths = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let months = (today.getFullYear() - birthDate.getFullYear()) * 12;
  months -= birthDate.getMonth();
  months += today.getMonth();
  
  // Adjust for day of month
  if (today.getDate() < birthDate.getDate()) {
    months--;
  }
  
  return months < 0 ? 0 : months;
};