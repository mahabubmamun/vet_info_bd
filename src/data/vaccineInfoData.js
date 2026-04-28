export const vaccineInfoData = {
  dog: {
    nameBn: "কুকুর",
    icon: "🐶",
    color: "#FF6B35",
    bgLight: "#FFF4E6",
    vaccines: [
      { name: "রেবিস (Rabies)", schedule: "৩ মাস বয়সে + প্রতি বছর বুস্টার", description: "মানুষ ও প্রাণীর জন্য মারাত্মক ভাইরাসজনিত রোগ প্রতিরোধ করে" },
      { name: "DHPP (ডিস্টেম্পার/পারভো)", schedule: "৬-৮ সপ্তাহে + বুস্টার", description: "ডিস্টেম্পার, পারভোভাইরাস, এডিনোভাইরাস ও প্যারাইনফ্লুয়েঞ্জা প্রতিরোধ" },
      { name: "কেনেল কফ (Bordetella)", schedule: "প্রতি বছর বা ৬ মাস অন্তর", description: "শ্বাসতন্ত্রের সংক্রমণ প্রতিরোধ করে" },
      { name: "লেপ্টোস্পাইরোসিস", schedule: "৩ মাস বয়সে + বার্ষিক", description: "ব্যাকটেরিয়াজনিত রোগ প্রতিরোধ করে যা লিভার ও কিডনিকে আক্রান্ত করে" },
      { name: "করোনাভাইরাস", schedule: "৬-৮ সপ্তাহে", description: "গ্যাস্ট্রোইনটেস্টাইনাল সংক্রমণ প্রতিরোধ" }
    ]
  },
  cat: {
    nameBn: "বিড়াল",
    icon: "🐱",
    color: "#9B59B6",
    bgLight: "#F4E6FF",
    vaccines: [
      { name: "রেবিস (Rabies)", schedule: "৩ মাস বয়সে + প্রতি বছর বুস্টার", description: "মারাত্মক ভাইরাসজনিত রোগ প্রতিরোধ" },
      { name: "FVRCP", schedule: "৬-৮ সপ্তাহে + বুস্টার", description: "ফেলাইন প্যানলিউকোপেনিয়া, হারপিসভাইরাস ও ক্যালিসিভাইরাস প্রতিরোধ" },
      { name: "FeLV (লিউকেমিয়া)", schedule: "৮-১২ সপ্তাহে + বার্ষিক", description: "ফেলাইন লিউকেমিয়া ভাইরাস প্রতিরোধ করে" },
      { name: "ক্ল্যামিডিয়া", schedule: "৯ সপ্তাহে", description: "চোখ ও শ্বাসতন্ত্রের সংক্রমণ প্রতিরোধ" },
      { name: "ফেলাইন এইডস", schedule: "উচ্চ ঝুঁকিপূর্ণ এলাকায়", description: "ইমিউন সিস্টেম সুরক্ষা" }
    ]
  },
  cow: {
    nameBn: "গরু",
    icon: "🐄",
    color: "#2ECC71",
    bgLight: "#E6FFF0",
    vaccines: [
      { name: "FMD (পাওর ও মুখের রোগ)", schedule: "৪ মাস বয়সে + প্রতি ৬ মাস অন্তর", description: "পাওর ও মুখের রোগ প্রতিরোধ করে, যা দুধ ও মাংস উৎপাদন ব্যাহত করে" },
      { name: "হেমোরেজিক সেপ্টিসেমিয়া (HS)", schedule: "৬ মাস বয়সে + বার্ষিক", description: "ব্যাকটেরিয়াজনিত সেপ্টিসেমিয়া প্রতিরোধ" },
      { name: "ব্ল্যাক কোয়ার্টার (BQ)", schedule: "৬ মাস বয়সে + বার্ষিক", description: "পেশিতে সংক্রমণজনিত রোগ প্রতিরোধ" },
      { name: "ব্রুসেলোসিস", schedule: "৬-৮ মাস বয়সে", description: "প্রজননক্ষমতা হ্রাসকারী রোগ প্রতিরোধ" },
      { name: "গলার ফোলা রোগ", schedule: "৩ মাস বয়সে", description: "শ্বাসতন্ত্রের সংক্রমণ প্রতিরোধ" }
    ]
  },
  goat: {
    nameBn: "ছাগল",
    icon: "🐐",
    color: "#E67E22",
    bgLight: "#FFF0E6",
    vaccines: [
      { name: "PPR (ছাগলের প্লেগ)", schedule: "৩ মাস বয়সে + বার্ষিক", description: "মারাত্মক ভাইরাসজনিত রোগ প্রতিরোধ" },
      { name: "এন্টেরোটক্সেমিয়া", schedule: "২ মাস বয়সে + প্রতি ৬ মাস", description: "ব্যাকটেরিয়াজনিত বিষক্রিয়া প্রতিরোধ" },
      { name: "FMD", schedule: "৪ মাস বয়সে + প্রতি ৬ মাস", description: "পাওর ও মুখের রোগ প্রতিরোধ" },
      { name: "ছাগলের গুটিবসন্ত", schedule: "৩ মাস বয়সে + বার্ষিক", description: "চামড়ার সংক্রমণ প্রতিরোধ" },
      { name: "ক্লোস্ট্রিডিয়াল রোগ", schedule: "মাসিক বিরতিতে", description: "ব্যাকটেরিয়াল সংক্রমণ প্রতিরোধ" }
    ]
  },
  rabbit: {
    nameBn: "খরগোশ",
    icon: "🐰",
    color: "#E91E63",
    bgLight: "#FFE6F0",
    vaccines: [
      { name: "RHD (র্যাবিট হেমোরেজিক ডিজিজ)", schedule: "২ মাস বয়সে + বার্ষিক", description: "মারাত্মক হেমোরেজিক রোগ প্রতিরোধ" },
      { name: "মিক্সোমাটোসিস", schedule: "২ মাস বয়সে + বার্ষিক", description: "চামড়ার সংক্রমণ ও টিউমার প্রতিরোধ" },
      { name: "পাস্তুরেলোসিস", schedule: "প্রতি ৬ মাসে", description: "শ্বাসতন্ত্রের সংক্রমণ প্রতিরোধ" },
      { name: "ই. কোলাই সংক্রমণ", schedule: "প্রয়োজন অনুযায়ী", description: "ব্যাকটেরিয়াল সংক্রমণ প্রতিরোধ" }
    ]
  },
  poultry: {
    nameBn: "মুরগি",
    icon: "🐔",
    color: "#1ABC9C",
    bgLight: "#E6FFF8",
    vaccines: [
      { name: "নিউক্যাসল ডিজিজ (Ranikhet)", schedule: "১ দিন ও ২ সপ্তাহে + ২ মাসে", description: "শ্বাসতন্ত্র ও স্নায়ুতন্ত্রের মারাত্মক রোগ প্রতিরোধ" },
      { name: "মারেকস ডিজিজ", schedule: "হ্যাচারিতে ১ দিনে", description: "টিউমার ও প্যারালাইসিস প্রতিরোধ" },
      { name: "গামবোরো (IBD)", schedule: "২ ও ৪ সপ্তাহে", description: "ইমিউন সিস্টেম দুর্বলকারী রোগ প্রতিরোধ" },
      { name: "বার্ড ফ্লু (H9N2)", schedule: "প্রয়োজন অনুযায়ী", description: "এভিয়ান ইনফ্লুয়েঞ্জা প্রতিরোধ" },
      { name: "ফাউল পক্স", schedule: "৪-৬ সপ্তাহে", description: "চামড়ার সংক্রমণ প্রতিরোধ" },
      { name: "ইনফেকশাস ব্রঙ্কাইটিস", schedule: "১ ও ৩ সপ্তাহে", description: "শ্বাসতন্ত্রের সংক্রমণ প্রতিরোধ" }
    ]
  }
};

// Additional detailed information
export const vaccineScheduleSummary = {
  dog: {
    firstVaccine: "৬-৮ সপ্তাহ",
    boosterInterval: "প্রতি বছর",
    criticalVaccines: ["রেবিস", "DHPP"]
  },
  cat: {
    firstVaccine: "৬-৮ সপ্তাহ",
    boosterInterval: "প্রতি বছর",
    criticalVaccines: ["রেবিস", "FVRCP"]
  },
  cow: {
    firstVaccine: "৪ মাস",
    boosterInterval: "৬ মাস - ১ বছর",
    criticalVaccines: ["FMD", "HS"]
  },
  goat: {
    firstVaccine: "২-৩ মাস",
    boosterInterval: "৬ মাস - ১ বছর",
    criticalVaccines: ["PPR", "এন্টেরোটক্সেমিয়া"]
  },
  rabbit: {
    firstVaccine: "২ মাস",
    boosterInterval: "প্রতি বছর",
    criticalVaccines: ["RHD", "মিক্সোমাটোসিস"]
  },
  poultry: {
    firstVaccine: "১ দিন",
    boosterInterval: "প্রয়োজন অনুযায়ী",
    criticalVaccines: ["নিউক্যাসল", "মারেকস"]
  }
};