import React, { useState } from "react";
import axios from "axios";

const PrintInvoice = () => {
  const [invoice, setInvoice] = useState({
    customer: "John Doe",
    date: new Date().toLocaleDateString(),
    items: [
      { description: "Item 1", quantity: 2, price: 10 },
      { description: "Item 2", quantity: 1, price: 20 },
    ],
    total: 40,
  });

  const handlePrint = async () => {
    try {
      const response = await axios.post("http://localhost:5000/print", invoice);
      alert(response.data.message);
    } catch (error) {
      console.error("Printing error:", error);
      alert("Failed to print invoice.");
    }
  };

  return (
    <div>
      <h1>Invoice</h1>
      <p>Customer: {invoice.customer}</p>
      <p>Date: {invoice.date}</p>
      <table border="1">
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: ${invoice.total}</p>
      <button onClick={handlePrint}>Print Invoice</button>
    </div>
  );
};

export default PrintInvoice;
