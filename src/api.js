// Mock data - no backend needed
const mockData = {
  users: {
    'dfu@jkmsme.gov.in': { 
      email: 'dfu@jkmsme.gov.in', 
      password: 'dfu123', 
      role: 'dfu', 
      name: 'DFU Officer',
      id: 'dfu1'
    },
    'jkgrameenbank@nbfc.in': { 
      email: 'jkgrameenbank@nbfc.in', 
      password: 'nbfc123', 
      role: 'nbfc', 
      name: 'J&K Grameen Bank',
      id: 'nbfc1'
    },
    'gulmargtextiles@msme.in': { 
      email: 'gulmargtextiles@msme.in', 
      password: 'msme123', 
      role: 'msme', 
      name: 'Gulmarg Enterprises',
      id: 'msme1',
      businessName: 'Gulmarg Textiles',
      businessType: 'Textiles',
      district: 'Srinagar'
    }
  },
  
  // MSME Data
  msmeDashboard: {
    applications: { total: 2, approved: 1, pending: 1 },
    loans: { active: 1 },
    totalBorrowed: 750000,
    leg_membership: true,
    districtThreshold: 600000,
    recent_applications: [
      { id: 'app001', amount: 200000, purpose: 'Shop renovation', status: 'Approved', date: '28/12/2025', responses: 1 },
      { id: 'app002', amount: 750000, purpose: 'Business expansion', status: 'Disbursed', date: '28/12/2025', responses: 1, isGroup: true }
    ],
    legs: [
      { id: 'leg001', name: 'Srinagar Handicrafts Collective', members: 8, district: 'Srinagar', status: 'Approved' },
      { id: 'leg002', name: 'Jammu Artisans Group', members: 8, district: 'Jammu', status: 'Pending', isCommittee: true },
      { id: 'leg003', name: 'Valley Farmers Association', members: 8, district: 'Baramulla', status: 'Approved' }
    ],
    activeLoans: [{
      amount: 750000,
      emi: 35000,
      outstanding: 515880.96,
      nextDue: '14/1/2026',
      status: 'Active',
      interestRate: 12,
      tenure: 24,
      disbursedDate: '16 September 2025',
      progress: 31.2
    }]
  },
  
  msmeProfile: {
    businessName: 'Gulmarg Textiles',
    type: 'Services',
    sector: 'Textiles',
    annualTurnover: 1404526,
    employees: 32,
    district: 'Srinagar',
    address: 'Main Market, Srinagar, J&K',
    aadhaar: 'XXXX-XXXX-5628',
    pan: 'ABCDE9544F',
    gst: '01ABCDE2770F1Z5',
    bankName: 'J&K Bank',
    accountNumber: 'XXXXXX7944',
    ifsc: 'JAKA0BRANCH',
    riskScore: 80.7,
    kycVerified: true
  },

  // NBFC Data
  nbfcDashboard: {
    pendingApplications: 4,
    approved: 1,
    activeLoans: 1,
    totalDisbursed: 8145000,
    portfolioSummary: {
      totalOutstanding: 501629592,
      interestRateRange: '10.57653199100329% - 14.900681923964521%',
      loanRange: '₹50,000 - ₹50,00,000',
      focusSectors: ['Handicrafts', 'IT Services', 'Textiles', 'Retail']
    },
    pendingApps: [
      { id: 'app003', amount: 750000, msme: 'MSME', sector: 'Food Processing', district: 'Jammu', riskScore: 59.8, status: 'Submitted' },
      { id: 'app004', amount: 500000, msme: 'MSME', sector: 'Tourism', district: 'Srinagar', riskScore: 72.9, status: 'Submitted' },
      { id: 'app005', amount: 300000, msme: 'MSME', sector: 'Tourism', district: 'Srinagar', riskScore: 80.3, status: 'Submitted' },
      { id: 'app006', amount: 1000000, msme: 'MSME', sector: 'Food Processing', district: 'Jammu', riskScore: 60.1, status: 'Submitted' }
    ],
    recentLoans: [
      { borrower: '84fab195...', amount: 750000, outstanding: 501629592, emi: 35000, status: 'Active' }
    ]
  },

  nbfcProfile: {
    companyName: 'J&K Grameen Bank',
    registrationNo: 'NBFC56142',
    licenseNo: 'RBI/NBFC/2210',
    headquarters: 'Srinagar',
    verified: true,
    minLoanAmount: 50000,
    maxLoanAmount: 5000000,
    minInterestRate: 10.57653199100329,
    maxInterestRate: 14.900681923964521,
    districtsServed: ['Jammu', 'Kulgam', 'Srinagar', 'Pulwama', 'Shopian'],
    focusSectors: ['Handicrafts', 'IT Services', 'Textiles', 'Retail'],
    totalDisbursed: 8144834,
    activeLoans: 50,
    loanProducts: 2
  },

  nbfcMarketplace: [
    { id: 'app007', amount: 100000, tenure: 12, msme: 'Dal Lake Houseboats', district: 'Srinagar', sector: 'Tourism', purpose: 'Business expansion', riskScore: 77.7, status: 'Disbursed' },
    { id: 'app008', amount: 1000000, tenure: 24, msme: 'Jammu Food Industries', district: 'Jammu', sector: 'Food Processing', purpose: 'Business expansion', riskScore: 60.1, status: 'Submitted', isGroup: true },
    { id: 'app009', amount: 300000, tenure: 48, msme: 'Dal Lake Houseboats', district: 'Srinagar', sector: 'Tourism', purpose: 'Shop renovation', riskScore: 80.3, status: 'Submitted' },
    { id: 'app010', amount: 750000, tenure: 24, msme: 'Gulmarg Textiles', district: 'Srinagar', sector: 'Textiles', purpose: 'Business expansion', riskScore: 67.3, status: 'Disbursed', isGroup: true },
    { id: 'app011', amount: 200000, tenure: 24, msme: 'Gulmarg Textiles', district: 'Srinagar', sector: 'Textiles', purpose: 'Shop renovation', riskScore: 79.2, status: 'Approved' },
    { id: 'app012', amount: 500000, tenure: 24, msme: 'Dal Lake Houseboats', district: 'Srinagar', sector: 'Tourism', purpose: 'Equipment purchase', riskScore: 72.9, status: 'Submitted' },
    { id: 'app013', amount: 100000, tenure: 12, msme: 'Kulgam Carpet Works', district: 'Kulgam', sector: 'Textiles', purpose: 'Business expansion', riskScore: 85.8, status: 'Disbursed' },
    { id: 'app014', amount: 750000, tenure: 24, msme: 'Jammu Food Industries', district: 'Jammu', sector: 'Food Processing', purpose: 'Working capital', riskScore: 59.8, status: 'Submitted', isGroup: true }
  ],

  nbfcPortfolio: {
    totalDisbursed: 750000,
    outstanding: 502000,
    activeLoans: 1,
    avgInterestRate: 12.0,
    loans: [
      { loanId: '2367838...', amount: 750000, outstanding: 501629592, rate: 12, emi: 35000, tenure: 24, progress: 33, status: 'Active' }
    ]
  },

  nbfcLoanProducts: [
    {
      id: 'prod1',
      name: 'MSME Quick Loan',
      description: 'Quick financing for working capital needs',
      minAmount: 50000,
      maxAmount: 500000,
      interestRate: 12.5,
      processingFee: 1.5,
      minTenure: 6,
      maxTenure: 36,
      sectors: ['Handicrafts', 'Textiles', 'Food Processing', 'Agriculture']
    },
    {
      id: 'prod2',
      name: 'Business Expansion Loan',
      description: 'For business expansion and equipment purchase',
      minAmount: 200000,
      maxAmount: 5000000,
      interestRate: 14,
      processingFee: 2,
      minTenure: 12,
      maxTenure: 60,
      sectors: ['Handicrafts', 'Textiles', 'Food Processing', 'Agriculture', 'Tourism', 'IT Services', 'Manufacturing', 'Retail']
    }
  ],

  // DFU Data
  dfuDashboard: {
    totalMSMEs: 15,
    totalLEGs: 3,
    applications: 15,
    totalDisbursed: 28800000,
    defaultRate: 6.67,
    activeNBFCs: 5,
    districtApplications: [
      { district: 'Srinagar', applications: 5, totalAmount: 850000 },
      { district: 'Anantnag', applications: 7, totalAmount: 700000 },
      { district: 'Ganderbal', applications: 1, totalAmount: 750000 },
      { district: 'Baramulla', applications: 7, totalAmount: 300000 },
      { district: 'Jammu', applications: 2, totalAmount: 1000000 },
      { district: 'Pulwama', applications: 1, totalAmount: 600000 },
      { district: 'Kulgam', applications: 1, totalAmount: 100000 }
    ],
    fraudAlerts: [
      { id: 'fraud1', type: 'HIGH', description: 'Suspicious pattern', msme: 'Gulmarg Textiles', date: 'Today' },
      { id: 'fraud2', type: 'LEG', description: 'Unverified pattern', group: 'Srinagar LEG', date: 'Today' },
      { id: 'fraud3', type: 'FILE', description: 'Document anomaly', msme: 'Kulgam', date: '2 days ago' }
    ],
    recentApplications: [
      { type: 'Individual', amount: 100000, district: 'Srinagar', sector: 'Tourism', riskScore: 77.7, status: 'Disbursed', date: '28/12/2025' },
      { type: 'Group', amount: 1000000, district: 'Jammu', sector: 'Food Processing', riskScore: 60.1, status: 'Submitted', date: '28/12/2025' },
      { type: 'Group', amount: 750000, district: 'Srinagar', sector: 'Textiles', riskScore: 67.3, status: 'Disbursed', date: '27/12/2025' },
      { type: 'Individual', amount: 300000, district: 'Srinagar', sector: 'Tourism', riskScore: 80.3, status: 'Submitted', date: '27/12/2025' },
      { type: 'Individual', amount: 750000, district: 'Srinagar', sector: 'Textiles', riskScore: 67.3, status: 'Approved', date: '26/12/2025' },
      { type: 'Individual', amount: 750000, district: 'Baramulla', sector: 'Food Processing', riskScore: 72.6, status: 'Approved', date: '26/12/2025' },
      { type: 'Individual', amount: 500000, district: 'Kulgam', sector: 'Textiles', riskScore: 85.8, status: 'Disbursed', date: '25/12/2025' },
      { type: 'Individual', amount: 100000, district: 'Kulgam', sector: 'Textiles', riskScore: 85.8, status: 'Disbursed', date: '25/12/2025' },
      { type: 'Group', amount: 750000, district: 'Jammu', sector: 'Food Processing', riskScore: 59.8, status: 'Submitted', date: '24/12/2025' }
    ]
  },

  dfuDistrictConfig: [
    { id: 'dist1', district: 'Srinagar', totalThreshold: 600000, pendingThreshold: 250000, legScore: 50 },
    { id: 'dist2', district: 'Jammu', totalThreshold: 500000, pendingThreshold: 200000, legScore: 45 },
    { id: 'dist3', district: 'Anantnag', totalThreshold: 600000, pendingThreshold: 250000, legScore: 50 },
    { id: 'dist4', district: 'Baramulla', totalThreshold: 300000, pendingThreshold: 150000, legScore: 40 },
    { id: 'dist5', district: 'Pulwama', totalThreshold: 300000, pendingThreshold: 150000, legScore: 40 },
    { id: 'dist6', district: 'Kulgam', totalThreshold: 400000, pendingThreshold: 180000, legScore: 60 },
    { id: 'dist7', district: 'Budgam', totalThreshold: 300000, pendingThreshold: 150000, legScore: 80 },
    { id: 'dist8', district: 'Ganderbal', totalThreshold: 300000, pendingThreshold: 150000, legScore: 60 },
    { id: 'dist9', district: 'Shopian', totalThreshold: 600000, pendingThreshold: 250000, legScore: 60 }
  ],

  dfuFraudAlerts: [
    { id: 'fraud1', msme: 'Suspicious MSME 1', type: 'HIGH', reason: 'Multiple applications', district: 'Srinagar', flaggedBy: 'DFU Officer', date: '26/12/2025', status: 'Under Review' },
    { id: 'fraud2', msme: 'Suspicious LEG Group', type: 'LEG', reason: 'Unverified members', district: 'Jammu', flaggedBy: 'DFU Officer', date: '25/12/2025', status: 'Investigating' },
    { id: 'fraud3', msme: 'Document Anomaly MSME', type: 'FILE', reason: 'Forged documents', district: 'Kulgam', flaggedBy: 'System', date: '24/12/2025', status: 'Resolved' }
  ],

  dfuReports: {
    monthlyTrends: [
      { month: '2025-12', applications: 15, totalAmount: 7750000 }
    ],
    sectorDistribution: [
      { sector: 'Textiles', count: 3, percentage: 20 },
      { sector: 'Agriculture', count: 1, percentage: 6.7 },
      { sector: 'Tourism', count: 5, percentage: 33.3 },
      { sector: 'Handicrafts', count: 2, percentage: 13.3 },
      { sector: 'Food Processing', count: 4, percentage: 26.7 }
    ],
    nbfcPerformance: [
      { name: 'J&K Grameen Bank', totalDisbursed: 8144834, activeLoans: 50 },
      { name: 'Kashmir Mercantile Finance', totalDisbursed: 4336493, activeLoans: 48 },
      { name: 'Himalayan Credit Corporation', totalDisbursed: 5645679, activeLoans: 33 },
      { name: 'Valley Finance Ltd', totalDisbursed: 7168443, activeLoans: 28 },
      { name: 'Chenab Capital', totalDisbursed: 4479229, activeLoans: 10 }
    ],
    summary: {
      totalApplications: 15,
      totalAmount: 7750000,
      activeSectors: 5,
      partnerNBFCs: 5
    }
  },

  nbfcs: [
    { id: 'nbfc1', name: 'J&K Grameen Bank', minAmount: 50000, maxAmount: 5000000, rate: '10.5%-14.8%' },
    { id: 'nbfc2', name: 'Kashmir Mercantile Finance', minAmount: 50000, maxAmount: 5000000, rate: '11.45%-14.3%' },
    { id: 'nbfc3', name: 'Himalayan Credit Corporation', minAmount: 50000, maxAmount: 5000000, rate: '11.45%-14.5%' },
    { id: 'nbfc4', name: 'Valley Finance Ltd', minAmount: 50000, maxAmount: 5000000, rate: '11.3%-15.9%' },
    { id: 'nbfc5', name: 'Chenab Capital', minAmount: 50000, maxAmount: 5000000, rate: '10.87%-16.5%' }
  ]
};

// Mock API calls
export async function apiCall(endpoint, method = 'GET', body = null) {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (endpoint === '/auth/login' && method === 'POST') {
    const { email, password } = body;
    const user = mockData.users[email];
    
    if (user && user.password === password) {
      console.log('Login successful for role:', user.role); // Debug log
      return {
        token: 'mock-jwt-token-' + Date.now(),
        user: { 
          id: user.id, 
          email: user.email, 
          name: user.name, 
          role: user.role,
          businessName: user.businessName,
          businessType: user.businessType,
          district: user.district
        }
      };
    }
    throw new Error('Invalid credentials');
  }
  
  // MSME endpoints
  if (endpoint === '/msme/dashboard') return mockData.msmeDashboard;
  if (endpoint === '/msme/profile') return mockData.msmeProfile;
  
  // NBFC endpoints
  if (endpoint === '/nbfc/dashboard') return mockData.nbfcDashboard;
  if (endpoint === '/nbfc/profile') return mockData.nbfcProfile;
  if (endpoint === '/nbfc/marketplace') return mockData.nbfcMarketplace;
  if (endpoint === '/nbfc/portfolio') return mockData.nbfcPortfolio;
  if (endpoint === '/nbfc/loan-products') return mockData.nbfcLoanProducts;
  
  // DFU endpoints
  if (endpoint === '/dfu/dashboard') return mockData.dfuDashboard;
  if (endpoint === '/dfu/district-config') return mockData.dfuDistrictConfig;
  if (endpoint === '/dfu/fraud-alerts') return mockData.dfuFraudAlerts;
  if (endpoint === '/dfu/reports') return mockData.dfuReports;
  
  // Common endpoints
  if (endpoint === '/nbfcs') return mockData.nbfcs;
  
  return {};
}

export const authAPI = {
  login: (email, password) => apiCall('/auth/login', 'POST', { email, password }),
};

export const msmeAPI = {
  getDashboard: () => apiCall('/msme/dashboard'),
  getProfile: () => apiCall('/msme/profile'),
};

export const nbfcAPI = {
  getAll: () => apiCall('/nbfcs'),
  getDashboard: () => apiCall('/nbfc/dashboard'),
  getProfile: () => apiCall('/nbfc/profile'),
  getMarketplace: () => apiCall('/nbfc/marketplace'),
  getPortfolio: () => apiCall('/nbfc/portfolio'),
  getLoanProducts: () => apiCall('/nbfc/loan-products'),
};

export const dfuAPI = {
  getDashboard: () => apiCall('/dfu/dashboard'),
  getDistrictConfig: () => apiCall('/dfu/district-config'),
  getFraudAlerts: () => apiCall('/dfu/fraud-alerts'),
  getReports: () => apiCall('/dfu/reports'),
};