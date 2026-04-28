// src/components/VaccineCalculator.jsx
import React, { useState } from 'react';
import { vaccineRules, calculateAgeInMonths } from '../data/vaccineRules';
import '../styles/VaccineCalculator.css';

const VaccineCalculator = () => {
  const [formData, setFormData] = useState({
    animalType: 'dog',
    ageType: 'months',
    dob: '',
    ageValue: '',
    weight: ''
  });
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);

  const animalOptions = [
    { value: 'dog', label: 'কুকুর' },
    { value: 'cat', label: 'বিড়াল' },
    { value: 'cow', label: 'গরু' },
    { value: 'goat', label: 'ছাগল' },
    { value: 'poultry', label: 'মুরগি / হাঁস' },
    { value: 'rabbit', label: 'খরগোশ' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear errors when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.animalType) {
      newErrors.animalType = 'অনুগ্রহ করে পশুর প্রকার নির্বাচন করুন';
    }
    
    if (formData.ageType === 'dob') {
      if (!formData.dob) {
        newErrors.dob = 'অনুগ্রহ করে জন্ম তারিখ নির্বাচন করুন';
      } else {
        const dobDate = new Date(formData.dob);
        const today = new Date();
        if (dobDate > today) {
          newErrors.dob = 'জন্ম তারিখ আজকের তারিখের পরে হতে পারে না';
        }
      }
    } else {
      if (!formData.ageValue || formData.ageValue <= 0) {
        newErrors.ageValue = 'অনুগ্রহ করে সঠিক বয়স দিন';
      }
    }
    
    if (formData.weight && (formData.weight <= 0 || isNaN(formData.weight))) {
      newErrors.weight = 'অনুগ্রহ করে সঠিক ওজন দিন';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getVaccineStatus = (vaccineAge, animalAgeMonths) => {
    if (!vaccineAge || vaccineAge === 'Any') return 'due';
    
    // Parse recommended age from string like "6-8 weeks" or "3 months+"
    let minAge = 0;
    let maxAge = Infinity;
    
    if (vaccineAge.includes('weeks')) {
      const weeks = parseInt(vaccineAge.split('-')[0]);
      minAge = weeks / 4.33; // Convert to months approx
    } else if (vaccineAge.includes('months')) {
      const match = vaccineAge.match(/(\d+)/);
      if (match) {
        minAge = parseInt(match[0]);
        if (vaccineAge.includes('+')) {
          maxAge = Infinity;
        } else if (vaccineAge.includes('-')) {
          const parts = vaccineAge.split('-');
          minAge = parseInt(parts[0]);
          maxAge = parseInt(parts[1].split(' ')[0]);
        }
      }
    }
    
    if (animalAgeMonths < minAge) {
      return 'too-young';
    } else if (animalAgeMonths > maxAge && maxAge !== Infinity) {
      return 'overdue';
    } else {
      return 'due';
    }
  };

  const getStatusMessage = (status, vaccineName) => {
    switch(status) {
      case 'too-young':
        return { text: 'বয়স খুব কম', class: 'status-warning', icon: '⚠️' };
      case 'overdue':
        return { text: 'বিলম্বিত', class: 'status-overdue', icon: '🔴' };
      default:
        return { text: 'প্রয়োজন', class: 'status-due', icon: '✅' };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsAnimating(true);
    
    // Calculate age in months
    let ageInMonths = 0;
    if (formData.ageType === 'dob') {
      ageInMonths = calculateAgeInMonths(formData.dob);
    } else {
      ageInMonths = parseFloat(formData.ageValue);
    }
    
    const rules = vaccineRules[formData.animalType];
    if (!rules) {
      setResult({ error: 'এই পশুর জন্য ভ্যাকসিনের তথ্য পাওয়া যায়নি' });
      setIsAnimating(false);
      return;
    }
    
    // Process core vaccines
    const coreVaccines = rules.core.map(vaccine => {
      const status = getVaccineStatus(vaccine.age, ageInMonths);
      const statusInfo = getStatusMessage(status, vaccine.name);
      return {
        ...vaccine,
        status,
        statusMessage: statusInfo.text,
        statusIcon: statusInfo.icon,
        statusClass: statusInfo.class
      };
    });
    
    // Process optional vaccines
    const optionalVaccines = rules.optional.map(vaccine => {
      const status = getVaccineStatus(vaccine.age, ageInMonths);
      const statusInfo = getStatusMessage(status, vaccine.name);
      return {
        ...vaccine,
        status,
        statusMessage: statusInfo.text,
        statusIcon: statusInfo.icon,
        statusClass: statusInfo.class
      };
    });
    
    setResult({
      animalType: formData.animalType,
      ageInMonths: ageInMonths.toFixed(1),
      weight: formData.weight,
      coreVaccines,
      optionalVaccines
    });
    
    // Remove animation after 500ms
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getAnimalLabel = (value) => {
    const animal = animalOptions.find(opt => opt.value === value);
    return animal ? animal.label : value;
  };

  return (
    <div className="vaccine-calculator">
      <div className="calculator-header">
        <h2>🐾 ভ্যাকসিন ক্যালকুলেটর</h2>
        <p>আপনার পশুর জন্য প্রয়োজনীয় ভ্যাকসিনের সম্পূর্ণ তালিকা জানুন</p>
      </div>
      
      <div className="calculator-container">
        <form onSubmit={handleSubmit} className="vaccine-form">
          <div className="form-group">
            <label>পশুর প্রকার <span className="required">*</span></label>
            <select
              name="animalType"
              value={formData.animalType}
              onChange={handleChange}
              className={errors.animalType ? 'error' : ''}
            >
              {animalOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.animalType && <span className="error-message">{errors.animalType}</span>}
          </div>
          
          <div className="form-group">
            <label>বয়স নির্ধারণের পদ্ধতি</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="ageType"
                  value="months"
                  checked={formData.ageType === 'months'}
                  onChange={handleChange}
                />
                বয়স মাসে
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="ageType"
                  value="dob"
                  checked={formData.ageType === 'dob'}
                  onChange={handleChange}
                />
                জন্ম তারিখ থেকে
              </label>
            </div>
          </div>
          
          {formData.ageType === 'dob' ? (
            <div className="form-group">
              <label>জন্ম তারিখ <span className="required">*</span></label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className={errors.dob ? 'error' : ''}
              />
              {errors.dob && <span className="error-message">{errors.dob}</span>}
            </div>
          ) : (
            <div className="form-group">
              <label>বয়স (মাসে) <span className="required">*</span></label>
              <input
                type="number"
                name="ageValue"
                value={formData.ageValue}
                onChange={handleChange}
                placeholder="যেমন: 6 (৬ মাস) বা 24 (২ বছর)"
                step="0.5"
                className={errors.ageValue ? 'error' : ''}
              />
              {errors.ageValue && <span className="error-message">{errors.ageValue}</span>}
            </div>
          )}
          
          <div className="form-group">
            <label>ওজন (কেজি) <span className="optional">(ঐচ্ছিক)</span></label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="পশুর ওজন কেজিতে"
              step="0.1"
              className={errors.weight ? 'error' : ''}
            />
            {errors.weight && <span className="error-message">{errors.weight}</span>}
          </div>
          
          <button type="submit" className="submit-btn">
            🩺 ভ্যাকসিন দেখুন
          </button>
        </form>
        
        {result && !result.error && (
          <div className={`results-section ${isAnimating ? 'fade-in' : ''}`}>
            <div className="results-header">
              <h3>📋 সুপারিশকৃত ভ্যাকসিন তালিকা</h3>
              <div className="animal-info">
                <span className="info-badge">🐕 {getAnimalLabel(result.animalType)}</span>
                <span className="info-badge">📅 বয়স: {result.ageInMonths} মাস</span>
                {result.weight && <span className="info-badge">⚖️ ওজন: {result.weight} কেজি</span>}
              </div>
            </div>
            
            {/* Core Vaccines Section */}
            <div className="vaccine-section core-section">
              <div className="section-header">
                <div className="section-title">
                  <span className="section-icon">🔴</span>
                  <h4>অবশ্যই প্রয়োজনীয় ভ্যাকসিন</h4>
                </div>
                <div className="section-badge core-badge">Core Vaccines</div>
              </div>
              <div className="vaccine-cards">
                {result.coreVaccines.map((vaccine, index) => (
                  <div key={index} className={`vaccine-card core-card ${vaccine.statusClass}`}>
                    <div className="vaccine-icon">💉</div>
                    <div className="vaccine-details">
                      <h5>{vaccine.name}</h5>
                      <div className="vaccine-meta">
                        <span className="meta-item">
                          <span className="meta-icon">📆</span>
                          <span>{vaccine.age}</span>
                        </span>
                        <span className="meta-item">
                          <span className="meta-icon">🔄</span>
                          <span>{vaccine.repeat}</span>
                        </span>
                      </div>
                      <div className={`status-badge ${vaccine.statusClass}`}>
                        {vaccine.statusIcon} {vaccine.statusMessage}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Optional Vaccines Section */}
            <div className="vaccine-section optional-section">
              <div className="section-header">
                <div className="section-title">
                  <span className="section-icon">🟢</span>
                  <h4>ঐচ্ছিক ভ্যাকসিন</h4>
                </div>
                <div className="section-badge optional-badge">Optional Vaccines</div>
              </div>
              <div className="vaccine-cards">
                {result.optionalVaccines.map((vaccine, index) => (
                  <div key={index} className={`vaccine-card optional-card ${vaccine.statusClass}`}>
                    <div className="vaccine-icon">💊</div>
                    <div className="vaccine-details">
                      <h5>{vaccine.name}</h5>
                      <div className="vaccine-meta">
                        <span className="meta-item">
                          <span className="meta-icon">📆</span>
                          <span>{vaccine.age}</span>
                        </span>
                        <span className="meta-item">
                          <span className="meta-icon">🔄</span>
                          <span>{vaccine.repeat}</span>
                        </span>
                      </div>
                      <div className={`status-badge ${vaccine.statusClass}`}>
                        {vaccine.statusIcon} {vaccine.statusMessage}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="disclaimer">
              <p>⚠️ সতর্কতা: এই তথ্য শুধুমাত্র সাধারণ ধারণার জন্য। সঠিক ভ্যাকসিন সময়সূচির জন্য পশু ডাক্তারের পরামর্শ নিন।</p>
            </div>
          </div>
        )}
        
        {result && result.error && (
          <div className="error-result">
            <span className="error-icon">⚠️</span>
            <p>{result.error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VaccineCalculator;