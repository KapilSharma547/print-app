import React from 'react';

function ReceiptPrint() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <div id="receipt">
        <h1 style={{ textAlign: 'center', fontSize: '32px' }}>Kapil Shop</h1>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '20px' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '12px', fontSize: '24px' }}>Name</th>
              <th style={{ textAlign: 'right', padding: '12px', fontSize: '24px' }}>MRP</th>
              <th style={{ textAlign: 'right', padding: '12px', fontSize: '24px' }}>Discount Price</th>
              <th style={{ textAlign: 'right', padding: '12px', fontSize: '24px' }}>Final Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', fontSize: '24px' }}>Balaji Oil</td>
              <td style={{ textAlign: 'right', padding: '12px', fontSize: '24px' }}>200</td>
              <td style={{ textAlign: 'right', padding: '12px', fontSize: '24px' }}>30</td>
              <td style={{ textAlign: 'right', padding: '12px', fontSize: '24px' }}>170</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', fontSize: '24px' }}>Sugar</td>
              <td style={{ textAlign: 'right', padding: '12px', fontSize: '24px' }}>100</td>
              <td style={{ textAlign: 'right', padding: '12px', fontSize: '24px' }}>38</td>
              <td style={{ textAlign: 'right', padding: '12px', fontSize: '24px' }}>82</td>
            </tr>
            {/* Add more rows for more items */}
          </tbody>
        </table>
        <p style={{ fontSize: '24px', marginTop: '20px', textAlign: 'center' }}>Thank you for your purchase!</p>
      </div>
      <button onClick={handlePrint} style={{ fontSize: '20px', padding: '15px 25px', display: 'block', margin: '20px auto' }}>Print Receipt</button>

      {/* Print-specific styles */}
      <style>
        {`
          @media print {
            body {
              font-size: 48px; /* Larger text for better readability on the printer */
            }
            #receipt {
              width: 80mm;
              margin: 0 0;
              font-size: 36px; /* Set a larger base font size for print */
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              padding: 16px;
              font-size: 36px; /* Increase font size in table cells */
              text-align: left;
            }
            th {
              font-weight: bold;
            }
            td {
              text-align: right;
            }
            button {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
}

export default ReceiptPrint;
