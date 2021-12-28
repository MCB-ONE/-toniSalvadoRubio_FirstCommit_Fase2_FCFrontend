import React from 'react';
import AdminMain from './AdminMain';
import AdminSidebar from './AdminSidebar';

/** Import styles */
import './adminPanel.scss';

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <AdminMain />
      <AdminSidebar />
    </div>
  );
};

export default AdminPanel;
