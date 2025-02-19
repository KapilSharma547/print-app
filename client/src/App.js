import React from 'react';

function ReceiptPrint() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <div id="receipt">
        <h1>Receipt</h1>
        <p>Item: Sample Product</p>
        <p>Price: $10.00</p>
        <p>Thank you for your purchase!</p>
      </div>
      <button onClick={handlePrint}>Print Receipt</button>
    </div>
  );
}

export default ReceiptPrint;
