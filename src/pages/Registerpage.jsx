import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // For eye icons

function RegisterPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateField = (name, value) => {
    let error = '';
    
    switch(name) {
      case 'firstName':
      case 'lastName':
        if (!/^[A-Za-z]+$/.test(value)) {
          error = 'Only letters are allowed';
        }
        break;
      // In the validateField function:
case 'username':
    if (!/^[A-Za-z0-9]+$/.test(value)) {
      error = 'Only letters and numbers are allowed';
    } else if (!/[A-Za-z]/.test(value) || !/[0-9]/.test(value)) {  // ← Added this check
      error = 'Must contain both letters and numbers';
    }
    break;
      // In the validateField function:
case 'phone':
    if (!/^[0-9]+$/.test(value)) {
      error = 'Only numbers are allowed';
    } else if (value.length == 11) {  // ← Added this check
      error = 'Phone number must be 10 digits long';
    }
    break;
      case 'password':
        if (value.length < 8) {
          error = 'Password must be at least 8 characters';
        } else if (/^[0-9]+$/.test(value)) {
          error = 'Password cannot be numbers only';
        } else if (/^[A-Za-z]+$/.test(value)) {
          error = 'Password cannot be letters only';
        }
        break;
      case 'confirmPassword':
        if (value !== formData.password) {
          error = 'Passwords do not match';
        }
        break;
      case 'agreeTerms':
        if (!value) {
          error = 'You must agree to the terms';
        }
        break;
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: fieldValue
    }));
    
    // Validate on change
    if (name !== 'agreeTerms') {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, fieldValue)
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, fieldValue)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      newErrors[key] = validateField(key, formData[key]);
    });
    
    setErrors(newErrors);
    
    // Check if form is valid
    const isValid = Object.values(newErrors).every(error => !error);
    
    if (isValid) {
      console.log('Registration data:', formData);
      // Submit to backend
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">{t('Create an account')}</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium mb-1">{t('First name')}</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded`}
            pattern="[A-Za-z]+"
            required
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium mb-1">{t('Last name')}</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded`}
            pattern="[A-Za-z]+"
            required
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>

        {/* Username */}
        <div>
          <label className="block text-sm font-medium mb-1">{t('Username')}</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-2 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded`}
            pattern="[A-Za-z0-9]+"
            required
          />
          {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium mb-1">{t('Phone Number')}</label>
          <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  onBlur={handleBlur}
  maxLength={10}  // ← Added maxLength attribute
  className={`w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded`}
  pattern="[0-9]+"
  required
/>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">{t('Password')}</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded pr-10`}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-2.5 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium mb-1">{t('Confirm Password')}</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded pr-10`}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-2.5 text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mr-2"
            required
          />
          <label>{t('I agree to the terms of service and privacy policy')}</label>
          {errors.agreeTerms && <p className="text-red-500 text-xs ml-2">{errors.agreeTerms}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors disabled:opacity-50"
          disabled={Object.values(errors).some(error => error) || !formData.agreeTerms}
        >
          {t('Create Account')}
        </button>
      </form>

      <p className="mt-4 text-center">
        {t('Already have an account?')}{' '}
        <Link to="/login" className="text-green-600 hover:underline">
          {t('Login')}
        </Link>
      </p>
    </div>
  );
}

export default RegisterPage;