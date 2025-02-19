const express = require('express');
const escpos = require('escpos');

// Change this based on your printer type
escpos.USB = require('escpos-usb');

const app = express();
const port = 3000;

app.get('/print', (req, res) => {
  try {
    // Connect to the USB thermal printer (adjust vendorId and productId)
    const device = new escpos.USB();

    const printer = new escpos.Printer(device);

    device.open(function (error) {
      if (error) {
        console.error('Failed to open device:', error);
        return res.status(500).send('Failed to connect to printer');
      }

      printer
        .font('a')
        .align('ct')
        .style('bu')
        .size(1, 1)
        .text('Sample Receipt')
        .text('Item: Sample Product')
        .text('Price: $10.00')
        .text('------------------------')
        .text('Thank you for shopping!')
        .cut()
        .close(() => {
          console.log('Printed successfully');
          res.send('Receipt printed successfully');
        });
    });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('An error occurred');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
