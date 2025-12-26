import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useTranslation } from 'react-i18next';

// Language Switcher Component
function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'ks', name: 'Kashmiri', nativeName: 'कॉशुर' },
    { code: 'dg', name: 'Dogri', nativeName: 'डोगरी' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{currentLanguage.nativeName}</span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            <div className="p-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                    i18n.language === lang.code
                      ? 'bg-slate-50 text-slate-900'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <span className="text-sm">{lang.nativeName}</span>
                  {i18n.language === lang.code && (
                    <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function LandingPage() {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuthenticated && user) {
      navigate(`/${user.role}/dashboard`);
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-900 rounded-lg">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">J&K MSME</h1>
              <p className="text-xs text-slate-500">Credit Access System</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link to="/login">
              <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-gray-50 rounded-md border border-gray-300">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md">
                Register
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mb-8">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Government of J&K Initiative
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Empowering MSMEs<br />
            in <span className="text-emerald-600">Jammu & Kashmir</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mb-8">
            A unified digital platform connecting Micro, Small & Medium Enterprises with 
            financial institutions for seamless credit access through transparent processes.
          </p>

          <Link to="/login">
            <button className="px-8 py-4 text-lg bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 inline-flex items-center gap-2">
              Get Started
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </Link>
        </div>
      </section>

      {/* Three Portals */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Three Integrated Portals</h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            A comprehensive ecosystem connecting MSMEs, NBFCs, and District Facilitation Units
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'MSME Portal', 
                bg: 'bg-emerald-50',
                icon: '🏢',
                desc: 'For Micro, Small & Medium Enterprises seeking credit access', 
                features: ['Apply for loans', 'Form Local Enterprise Groups', 'Track applications'] 
              },
              { 
                title: 'NBFC Portal', 
                bg: 'bg-blue-50',
                icon: '🏦',
                desc: 'For Non-Banking Financial Companies providing credit', 
                features: ['Browse loan applications', 'Manage portfolio', 'Create loan products'] 
              },
              { 
                title: 'DFU Portal', 
                bg: 'bg-amber-50',
                icon: '👥',
                desc: 'For District Facilitation Units managing the ecosystem', 
                features: ['Configure districts', 'Monitor fraud alerts', 'Track performance'] 
              }
            ].map((portal, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className={`inline-flex p-4 rounded-xl ${portal.bg} text-4xl mb-6`}>
                  {portal.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{portal.title}</h3>
                <p className="text-slate-600 mb-6">{portal.desc}</p>
                <ul className="space-y-3">
                  {portal.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-700">
                      <svg className="h-5 w-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Credit Routing */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Smart Credit Routing System
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Our intelligent system automatically routes credit applications based on 
                district thresholds, ensuring optimal processing through individual or 
                group lending pathways.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: '📈', title: 'Risk Assessment', desc: 'Automated risk scoring for faster decisions' },
                  { icon: '📄', title: 'Document Management', desc: 'Secure digital document handling' },
                  { icon: '💳', title: 'Multi-NBFC Selection', desc: 'Choose from multiple lending partners' }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg">{feature.title}</h4>
                      <p className="text-slate-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
                alt="Business meeting"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-slate-600">
          © 2024 J&K MSME Credit Access System. All rights reserved.
        </div>
      </footer>
    </div>
  );
}