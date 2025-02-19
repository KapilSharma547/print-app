import React from 'react';
import axios from 'axios';

function AdminPanel() {
  const printReceipt = async () => {
    try {
      const response = await axios.get('http://localhost:3001/print-receipt');
      alert(response.data);
    } catch (error) {
      console.error('Print Error:', error);
      alert('Failed to print receipt');
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <button onClick={printReceipt}>Print Receipt</button>
    </div>
  );
}

export default AdminPanel;
