import React, { useState, useEffect } from 'react';
import { dfuAPI } from '../api';
import DFULayout from '../components/DFULayout';

export default function DFUDistrictConfig() {
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    totalThreshold: '',
    pendingThreshold: '',
    legScore: ''
  });

  useEffect(() => {
    loadDistrictConfig();
  }, []);

  const loadDistrictConfig = async () => {
    try {
      const result = await dfuAPI.getDistrictConfig();
      setDistricts(result);
    } catch (error) {
      console.error('Error loading district config:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (district) => {
    setEditingId(district.id);
    setEditForm({
      totalThreshold: district.totalThreshold,
      pendingThreshold: district.pendingThreshold,
      legScore: district.legScore
    });
  };

  const handleSave = (districtId) => {
    console.log('Saving config for district:', districtId, editForm);
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({
      totalThreshold: '',
      pendingThreshold: '',
      legScore: ''
    });
  };

  if (loading) {
    return (
      <DFULayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-lg">Loading...</div>
        </div>
      </DFULayout>
    );
  }

  return (  <DFULayout>
  
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">District Configuration</h1>
            <p className="text-gray-600">Set credit threshold and LEG parameters for each district</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="flex-1">
              <div className="font-semibold text-blue-900 mb-1">About Credit Thresholds</div>
              <div className="text-sm text-blue-800">
                The credit threshold (₹) determines when an MSME needs to formulate a Local Entrepreneur Group (LEG). Applications above this threshold require LEG membership through LEG committee recommendations.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {districts.map((district) => (
              <div key={district.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{district.district}</h3>
                      <p className="text-sm text-gray-500">District Parameters</p>
                    </div>
                    {editingId !== district.id && (
                      <button
                        onClick={() => handleEdit(district)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {editingId === district.id ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Total Threshold (₹)</label>
                        <input
                          type="number"
                          value={editForm.totalThreshold}
                          onChange={(e) => setEditForm({...editForm, totalThreshold: e.target.value})}
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Pending Threshold (₹)</label>
                        <input
                          type="number"
                          value={editForm.pendingThreshold}
                          onChange={(e) => setEditForm({...editForm, pendingThreshold: e.target.value})}
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">LEG Score</label>
                        <input
                          type="number"
                          value={editForm.legScore}
                          onChange={(e) => setEditForm({...editForm, legScore: e.target.value})}
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => handleSave(district.id)}
                          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancel}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="text-xs text-gray-600 mb-1">Total Threshold</div>
                        <div className="text-lg font-bold text-gray-900">₹{district.totalThreshold.toLocaleString()}</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="text-xs text-gray-600 mb-1">Pending Threshold</div>
                        <div className="text-lg font-bold text-gray-900">₹{district.pendingThreshold.toLocaleString()}</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4">
                        <div className="text-xs text-gray-600 mb-1">LEG Score</div>
                        <div className="text-lg font-bold text-gray-900">{district.legScore}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Configuration Summary</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">District</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Threshold</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pending Threshold</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">LEG Score</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {districts.map((district) => (
                    <tr key={district.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{district.district}</td>
                      <td className="px-4 py-3 text-sm">₹{district.totalThreshold.toLocaleString()}</td>
                      <td className="px-4 py-3 text-sm">₹{district.pendingThreshold.toLocaleString()}</td>
                      <td className="px-4 py-3 text-sm">{district.legScore}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Configured</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 bg-gray-100 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Parameter Definitions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-medium text-gray-900 mb-1">Total Threshold</div>
                <div className="text-gray-600">Maximum credit amount an MSME can access individually before requiring LEG formation.</div>
              </div>
              <div>
                <div className="font-medium text-gray-900 mb-1">Pending Threshold</div>
                <div className="text-gray-600">Maximum pending credit amount allowed before additional applications are restricted.</div>
              </div>
              <div>
                <div className="font-medium text-gray-900 mb-1">LEG Score</div>
                <div className="text-gray-600">Minimum score required for LEG committee approval and group formation eligibility.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DFULayout>
  );
}