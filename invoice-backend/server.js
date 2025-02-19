const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const printer = require("@thiagoelg/node-printer");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PRINTER_NAME = "Thermal_Printer"; // Change if needed

app.post("/print", (req, res) => {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "No text provided" });

    try {
        printer.printDirect({
            data: text,
            printer: PRINTER_NAME,
            type: "RAW",
            success: () => res.json({ message: "Printed successfully!" }),
            error: (err) => res.status(500).json({ error: err.message }),
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
