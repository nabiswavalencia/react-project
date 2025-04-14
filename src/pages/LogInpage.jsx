import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LoginPage() {
  const { t } = useTranslation();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">{t('Login')}</h1>
      <p className="text-center mb-6">{t('Enter your credentials to access your account')}</p>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">{t('Email')}</label>
          <input
            type="email"
            placeholder="your.email@example.com"
            className="w-full p-2 border border-gray-300 rounded focus:ring-green-500 focus:border-green-500"
          />
        </div>
        
        <div>
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium mb-1">{t('Password')}</label>
            <Link to="/forgot-password" className="text-sm text-green-600 hover:underline">
              {t('Forgot password?')}
            </Link>
          </div>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded focus:ring-green-500 focus:border-green-500"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors"
        >
          {t('Sign in')}
        </button>
      </form>
      
      <p className="mt-4 text-center">
        {t("Don't have an account?")}{' '}
        <Link to="/signup" className="text-green-600 hover:underline">
          {t('Sign up')}
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;