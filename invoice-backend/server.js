const express = require('express');
const escpos = require('escpos');
const cors = require('cors');

// USB Printer Setup
escpos.USB = require('escpos-usb');

const app = express();
const port = 3001;

app.use(cors()); // Allow requests from frontend

app.get('/print-receipt', (req, res) => {
  try {
    const device = new escpos.USB(); // Automatically detects the USB printer
    const printer = new escpos.Printer(device);

    device.open(function (err) {
      if (err) {
        console.error('Printer connection error:', err);
        return res.status(500).send('Printer connection failed');
      }

      printer
        .font('a')
        .align('ct')
        .style('bu')
        .size(1, 1)
        .text('Admin Panel Receipt')
        .text('Item: Example Product')
        .text('Price: $15.00')
        .text('------------------------')
        .text('Thank You!')
        .cut()
        .close(() => {
          console.log('Receipt Printed Successfully');
          res.send('Receipt Printed Successfully');
        });
    });
  } catch (error) {
    console.error('Printing Error:', error);
    res.status(500).send('Printing failed');
  }
});

app.listen(port, () => {
  console.log(`Printer API running at http://localhost:${port}`);
});
