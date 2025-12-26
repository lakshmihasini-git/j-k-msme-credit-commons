import React, { useState, useEffect } from 'react';
import { nbfcAPI } from '../api';
import NBFCLayout from '../components/NBFCLayout';
export default function NBFCMarketplace() {
  const [applications, setApplications] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [filters, setFilters] = useState({
    status: 'All Status',
    district: 'All Districts',
    sector: 'All Sectors',
    sort: 'Latest First'
  });

  const statusOptions = ['All Status', 'Submitted', 'Under Review', 'Approved', 'Disbursed'];
  const districtOptions = ['All Districts', 'Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Pulwama', 'Kulgam', 'Budgam', 'Ganderbal', 'Shopian'];
  const sectorOptions = ['All Sectors', 'Handicrafts', 'Textiles', 'Food Processing', 'Agriculture', 'Tourism', 'IT Services', 'Manufacturing', 'Retail'];
  const sortOptions = ['Latest First', 'Highest Amount', 'Best Risk Score'];

  useEffect(() => {
    loadMarketplace();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, applications]);

  const loadMarketplace = async () => {
    try {
      const result = await nbfcAPI.getMarketplace();
      setApplications(result);
      setFilteredApps(result);
    } catch (error) {
      console.error('Error loading marketplace:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...applications];

    if (filters.status !== 'All Status') {
      filtered = filtered.filter(app => app.status === filters.status);
    }

    if (filters.district !== 'All Districts') {
      filtered = filtered.filter(app => app.district === filters.district);
    }

    if (filters.sector !== 'All Sectors') {
      filtered = filtered.filter(app => app.sector === filters.sector);
    }

    if (filters.sort === 'Highest Amount') {
      filtered.sort((a, b) => b.amount - a.amount);
    } else if (filters.sort === 'Best Risk Score') {
      filtered.sort((a, b) => b.riskScore - a.riskScore);
    }

    setFilteredApps(filtered);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Submitted': return 'bg-blue-100 text-blue-700';
      case 'Under Review': return 'bg-yellow-100 text-yellow-700';
      case 'Approved': return 'bg-green-100 text-green-700';
      case 'Disbursed': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getRiskScoreColor = (score) => {
    if (score >= 70) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
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
          <h1 className="text-2xl font-bold text-gray-900">Marketplace</h1>
          <p className="text-gray-600">{filteredApps.length} applications found</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow mb-6 p-4">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search by business name, purpose, amount..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <div className="flex gap-3">
              {/* Status Filter */}
              <div className="relative">
                <select
                  value={filters.status}
                  onChange={(e) => setFilters({...filters, status: e.target.value})}
                  className="px-4 py-2 border rounded-lg appearance-none bg-white pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {statusOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* District Filter */}
              <div className="relative">
                <select
                  value={filters.district}
                  onChange={(e) => setFilters({...filters, district: e.target.value})}
                  className="px-4 py-2 border rounded-lg appearance-none bg-white pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {districtOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Sector Filter */}
              <div className="relative">
                <select
                  value={filters.sector}
                  onChange={(e) => setFilters({...filters, sector: e.target.value})}
                  className="px-4 py-2 border rounded-lg appearance-none bg-white pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {sectorOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Sort Filter */}
              <div className="relative">
                <select
                  value={filters.sort}
                  onChange={(e) => setFilters({...filters, sort: e.target.value})}
                  className="px-4 py-2 border rounded-lg appearance-none bg-white pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {sortOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredApps.map((app) => (
            <div key={app.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">₹{app.amount.toLocaleString()}</h3>
                      {app.isGroup && (
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded font-medium">
                          Group
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">{app.tenure} months tenure</div>
                  </div>
                  <span className={`px-3 py-1 rounded-lg text-sm font-medium ${getStatusColor(app.status)}`}>
                    {app.status}
                  </span>
                </div>

                {/* Business Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-sm font-medium">{app.msme}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">{app.district}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{app.sector}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">{app.purpose}</span>
                  </div>
                </div>

                {/* Risk Score */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Risk Score</span>
                    <span className={`text-sm font-semibold ${getRiskScoreColor(app.riskScore)}`}>
                      {app.riskScore}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${app.riskScore >= 70 ? 'bg-green-500' : app.riskScore >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${app.riskScore}%` }}
                    />
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredApps.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p className="text-gray-600">No applications found matching your filters</p>
          </div>
        )}
      </div>
    </div> </NBFCLayout>
  );
}