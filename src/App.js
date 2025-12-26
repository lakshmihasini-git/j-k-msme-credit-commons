import './i18n/config';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// MSME Pages
import MSMEDashboard from './pages/MSMEDashboard';
import MSMEProfile from './pages/MSMEProfile';
import MSMEApplications from './pages/MSMEApplications';
import MSMELEG from './pages/MSMELEG';
import MSMELoans from './pages/MSMELoans';

// NBFC Pages
import NBFCDashboard from './pages/NBFCDashboard';
import NBFCProfile from './pages/NBFCProfile';
import NBFCMarketplace from './pages/NBFCMarketplace';
import NBFCPortfolio from './pages/NBFCPortfolio';
import NBFCLoanProducts from './pages/NBFCLoanProducts';

// DFU Pages
import DFUDashboard from './pages/DFUDashboard';
import DFUDistrictConfig from './pages/DFUDistrictConfig';
import DFUFraudAlerts from './pages/DFUFraudAlerts';
import DFUReports from './pages/DFUReports';

function ProtectedRoute({ children, role }) {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to={`/${user.role}/dashboard`} />;
  
  return children;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* MSME Routes */}
          <Route path="/msme/dashboard" element={
            <ProtectedRoute role="msme"><MSMEDashboard /></ProtectedRoute>
          } />
          <Route path="/msme/profile" element={
            <ProtectedRoute role="msme"><MSMEProfile /></ProtectedRoute>
          } />
          <Route path="/msme/applications" element={
            <ProtectedRoute role="msme"><MSMEApplications /></ProtectedRoute>
          } />
          <Route path="/msme/leg" element={
            <ProtectedRoute role="msme"><MSMELEG /></ProtectedRoute>
          } />
          <Route path="/msme/loans" element={
            <ProtectedRoute role="msme"><MSMELoans /></ProtectedRoute>
          } />
          
          {/* NBFC Routes */}
          <Route path="/nbfc/dashboard" element={
            <ProtectedRoute role="nbfc"><NBFCDashboard /></ProtectedRoute>
          } />
          <Route path="/nbfc/profile" element={
            <ProtectedRoute role="nbfc"><NBFCProfile /></ProtectedRoute>
          } />
          <Route path="/nbfc/marketplace" element={
            <ProtectedRoute role="nbfc"><NBFCMarketplace /></ProtectedRoute>
          } />
          <Route path="/nbfc/portfolio" element={
            <ProtectedRoute role="nbfc"><NBFCPortfolio /></ProtectedRoute>
          } />
          <Route path="/nbfc/loan-products" element={
            <ProtectedRoute role="nbfc"><NBFCLoanProducts /></ProtectedRoute>
          } />
          
          {/* DFU Routes */}
          <Route path="/dfu/dashboard" element={
            <ProtectedRoute role="dfu"><DFUDashboard /></ProtectedRoute>
          } />
          <Route path="/dfu/district-config" element={
            <ProtectedRoute role="dfu"><DFUDistrictConfig /></ProtectedRoute>
          } />
          <Route path="/dfu/fraud-alerts" element={
            <ProtectedRoute role="dfu"><DFUFraudAlerts /></ProtectedRoute>
          } />
          <Route path="/dfu/reports" element={
            <ProtectedRoute role="dfu"><DFUReports /></ProtectedRoute>
          } />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;