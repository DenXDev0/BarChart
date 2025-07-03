# 📋 Bar Chart

An interactive visualization of United States Gross Domestic Product (GDP) data using D3.js. This bar chart displays the GDP growth over time, with tooltips showing detailed information when hovering over each bar.

Example: [Live Demo](https://bar-chart-gilt.vercel.app/)


## ⚙️ Features

- Bar chart visualization of US GDP data from 1947 to present.
- Time scale on the X-axis (years) and linear scale on the Y-axis (GDP value).
- Interactive tooltips displaying the date and GDP value in billions of USD on hover.
- Smooth animation transitions for bar growth on initial render.
- Gradient color applied to bars for better visual effect.
- Tooltip disappears when the mouse leaves the bar.
- Responsive SVG container.


## 🚀 Technologies Used

- [D3.js](https://d3js.org/) for data visualization.
- Pure HTML, CSS, and JavaScript.
- GDP data sourced from: [freeCodeCamp Project Reference Data](https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json).


## 📁 Project Structure
```
BarChart/
├── index.html # Main HTML file containing SVG and container elements
├── styles.css # CSS styles for tooltip, axes, and layout
├── script.js # JavaScript logic to build the D3.js chart
└── README.md # Project documentation
```

## 🧑‍💻 How It Works

- The GDP data is fetched asynchronously using `d3.json()`.
- Data is mapped to a time scale (`scaleTime`) and a linear scale (`scaleLinear`).
- Each bar represents the GDP value for a specific date.
- Tooltips appear on hover to show detailed data.
- Bars animate from bottom to their corresponding height on load using D3 transitions.


## 📌 Notes

This project is part of the freeCodeCamp [View Data Visualization Certification](https://www.freecodecamp.org/certification/DenXDev/data-visualization).
It fulfills the requirements for the "Visualize Data with a Bar Chart" project challenge.
