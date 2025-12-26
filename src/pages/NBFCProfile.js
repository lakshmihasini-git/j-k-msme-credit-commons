import React, { useState, useEffect } from 'react';
import { nbfcAPI } from '../api';
import NBFCLayout from '../components/NBFCLayout';
export default function NBFCProfile() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const result = await nbfcAPI.getProfile();
      setData(result);
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return ( 
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (  <NBFCLayout>
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">NBFC Profile</h1>
              <p className="text-gray-600">Your registered company information</p>
            </div>
            {data.verified && (
              <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">Verified</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Company Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h2 className="text-lg font-semibold">Company Details</h2>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Company Name</div>
                    <div className="font-medium">{data.companyName}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Registration No.</div>
                    <div className="font-medium">{data.registrationNo}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">License No.</div>
                    <div className="font-medium">{data.licenseNo}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Headquarters</div>
                    <div className="font-medium">{data.headquarters}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lending Criteria */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <h2 className="text-lg font-semibold">Lending Criteria</h2>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Min Loan Amount</div>
                    <div className="font-medium">₹{data.minLoanAmount.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Max Loan Amount</div>
                    <div className="font-medium">₹{data.maxLoanAmount.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Min Interest Rate</div>
                    <div className="font-medium">{data.minInterestRate.toFixed(2)}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Max Interest Rate</div>
                    <div className="font-medium">{data.maxInterestRate.toFixed(2)}%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Districts Served */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h2 className="text-lg font-semibold">Districts Served</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {data.districtsServed.map((district) => (
                    <span key={district} className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium">
                      {district}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Focus Sectors */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">Focus Sectors</h2>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {data.focusSectors.map((sector) => (
                    <span key={sector} className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium">
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">Total Disbursed</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">₹{(data.totalDisbursed / 100000).toFixed(2)} L</div>
                </div>

                <div className="pt-6 border-t">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">Active Loans</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{data.activeLoans}</div>
                </div>

                <div className="pt-6 border-t">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="text-sm text-gray-600">Loan Products</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{data.loanProducts}</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow p-6 text-white">
              <h3 className="font-semibold mb-2">Performance Summary</h3>
              <p className="text-sm text-blue-100 mb-4">
                You are actively serving {data.districtsServed.length} districts with {data.focusSectors.length} focus sectors.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span>Portfolio Health</span>
                <span className="font-semibold">Excellent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> </NBFCLayout>
  );
}