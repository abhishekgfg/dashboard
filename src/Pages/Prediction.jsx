import React from "react";
import "../styles/Prediction.css";
import Chart from "react-apexcharts";

// Existing data
const profitabilityData = [
  { metric: "Total Revenue", amount: 106746.80 },
  { metric: "Total Expenses", amount: 16343.00 },
  { metric: "Profit Margin", amount: 90403.80 },
];

const thresholdData = [
  { threshold: 5, percentage: 0.0 },
  { threshold: 10, percentage: 0.0 },
  { threshold: 15, percentage: 0.0 },
  { threshold: 20, percentage: 0.0 },
  { threshold: 25, percentage: 0.0 },
  { threshold: 30, percentage: 0.0 },
];

const studentTrendsData = [
  { monthYear: "2023-10", currentStudents: 2.0, futureStudents: 1.5 },
  { monthYear: "2024-04", currentStudents: 3.0, futureStudents: 2.0 },
  { monthYear: "2024-11", currentStudents: 4.0, futureStudents: 3.5 },
  { monthYear: "2025-02", currentStudents: 3.5, futureStudents: 3.0 },
  { monthYear: "2025-03", currentStudents: 2.5, futureStudents: 2.5 },
  { monthYear: "2025-05", currentStudents: 1.5, futureStudents: 2.0 },
  { monthYear: "2025-07-13", currentStudents: 2.2, futureStudents: 2.8 }, // Current date
  { monthYear: "2026-01", currentStudents: null, futureStudents: 3.0 },
];

const feeTrendsData = [
  { monthYear: "1/2025", currentFee: 10000, futureFee: 5000 },
  { monthYear: "2/2025", currentFee: 30000, futureFee: 10000 },
  { monthYear: "4/2025", currentFee: 45000, futureFee: 20000 },
  { monthYear: "5/2025", currentFee: 35000, futureFee: 15000 },
  { monthYear: "6/2025", currentFee: 20000, futureFee: 10000 },
  { monthYear: "7/2025", currentFee: 15000, futureFee: 12000 },
  { monthYear: "2025-07-13", currentFee: 10000, futureFee: 14000 }, // Current date
  { monthYear: "2026-01", currentFee: null, futureFee: 15000 },
];

// Existing income data
const incomeTrendsData = [
  { monthYear: "1/2025", currentIncome: 8000, futureIncome: 6000 },
  { monthYear: "2/2025", currentIncome: 12000, futureIncome: 9000 },
  { monthYear: "4/2025", currentIncome: 15000, futureIncome: 11000 },
  { monthYear: "5/2025", currentIncome: 10000, futureIncome: 8000 },
  { monthYear: "6/2025", currentIncome: 7000, futureIncome: 6500 },
  { monthYear: "7/2025", currentIncome: 9000, futureIncome: 8500 },
];

const incomeBreakdownData = [
  { category: "Salary", value: 70 },
  { category: "Freelance", value: 20 },
  { category: "Investments", value: 10 },
];

const incomeSourceDistributionData = [
  { category: "Primary Job", value: 60 },
  { category: "Side Projects", value: 25 },
  { category: "Passive Income", value: 15 },
];

const Prediction = () => {
  // Chart options for Threshold Analysis
  const thresholdOptions = {
    chart: { id: "threshold-chart", toolbar: { show: false } },
    xaxis: { categories: thresholdData.map((d) => d.threshold) },
    yaxis: { labels: { formatter: (value) => `${value}%` }, min: 0, max: 1 },
    legend: { show: true },
    dataLabels: { enabled: false },
  };
  const thresholdSeries = [{ name: "Percentage of Entries Where Dates Are Closer", data: thresholdData.map((d) => d.percentage) }];

  // Chart options for Student Trends Analysis
  const studentTrendsOptions = {
    chart: { id: "student-trends-chart", toolbar: { show: false } },
    xaxis: { 
      categories: studentTrendsData.map((d) => d.monthYear),
      labels: { style: { colors: '#888' } },
    },
    yaxis: { 
      min: 0, 
      max: 5,
      title: { text: "Number of Students", style: { color: '#888' } },
      labels: { style: { colors: '#888' } },
    },
    legend: { 
      show: true,
      position: 'top',
      labels: { colors: '#888' },
    },
    fill: { 
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    stroke: { 
      curve: "smooth",
      colors: ['#00CED1', '#FFA500'], // Cyan for current, orange for future
    },
    dataLabels: { enabled: false },
    colors: ['#00CED1', '#FFA500'],
  };
  const studentTrendsSeries = [
    { name: "Current New Students per Month", data: studentTrendsData.map((d) => d.currentStudents || null) },
    { name: "Future New Students per Month", data: studentTrendsData.map((d) => d.futureStudents), dashArray: 5 },
  ];

  // Chart options for Fee Collection Trends Analysis
  const feeTrendsOptions = {
    chart: { id: "fee-trends-chart", toolbar: { show: false } },
    xaxis: { 
      categories: feeTrendsData.map((d) => d.monthYear),
      labels: { style: { colors: '#888' } },
    },
    yaxis: { 
      min: 0, 
      max: 50000,
      title: { text: "Total Fee Collected", style: { color: '#888' } },
      labels: { style: { colors: '#888' }, formatter: (value) => `₹${value}` },
    },
    legend: { 
      show: true,
      position: 'top',
      labels: { colors: '#888' },
    },
    fill: { 
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    stroke: { 
      curve: "smooth",
      colors: ['#00CED1', '#FFA500'], // Cyan for current, orange for future
    },
    dataLabels: { enabled: false },
    colors: ['#00CED1', '#FFA500'],
  };
  const feeTrendsSeries = [
    { name: "Current Fee Collected per Month", data: feeTrendsData.map((d) => d.currentFee || null) },
    { name: "Future Fee Collected per Month", data: feeTrendsData.map((d) => d.futureFee), dashArray: 5 },
  ];

  // Chart options for Income Trends Analysis
  const incomeTrendsOptions = {
    chart: { id: "income-trends-chart", toolbar: { show: false } },
    xaxis: { categories: incomeTrendsData.map((d) => d.monthYear) },
    yaxis: { min: 0 },
    legend: { show: true },
    dataLabels: { enabled: false },
  };
  const incomeTrendsSeries = [
    { name: "Current Income per Month", data: incomeTrendsData.map((d) => d.currentIncome) },
    { name: "Future Income per Month", data: incomeTrendsData.map((d) => d.futureIncome) },
  ];

  const incomeBreakdownOptions = {
    chart: { id: "income-breakdown-chart", toolbar: { show: false } },
    labels: incomeBreakdownData.map((d) => d.category),
    legend: { show: true },
    dataLabels: { enabled: true },
  };
  const incomeBreakdownSeries = incomeBreakdownData.map((d) => d.value);

  // Chart options for Income Source Distribution
  const incomeSourceDistributionOptions = {
    chart: { id: "income-source-distribution-chart", toolbar: { show: false } },
    labels: incomeSourceDistributionData.map((d) => d.category),
    legend: { show: true },
    dataLabels: { enabled: true },
  };
  const incomeSourceDistributionSeries = incomeSourceDistributionData.map((d) => d.value);

  // Chart options for Profitability Analysis
  const profitabilityOptions = {
    chart: { id: "profitability-chart", toolbar: { show: false } },
    xaxis: { categories: profitabilityData.map((d) => d.metric) },
    yaxis: { min: 0, labels: { formatter: (value) => `Rs. ${value.toFixed(2)}` } },
    legend: { show: true },
    dataLabels: { enabled: false },
  };
  const profitabilitySeries = [
    { name: "Amount", data: profitabilityData.map((d) => d.amount) },
  ];

  return (
    <div className="prediction-container">
      <h2 className="prediction-title">Threshold Analysis</h2>
      <div className="threshold-analysis-grid">
        <div className="threshold-table">
          <table>
            <thead>
              <tr>
                <th>Threshold<br />(days)</th>
                <th>Percentage<br />(Dates Are Closer)</th>
              </tr>
            </thead>
            <tbody>
              {thresholdData.map((item, index) => (
                <tr key={index}>
                  <td>{item.threshold}</td>
                  <td>{item.percentage.toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="threshold-chart">
          <Chart options={thresholdOptions} series={thresholdSeries} type="bar" width={700} height={300} />
          <p className="chart-label">
            percentage of students who have submitted fee within threshold days of expiration date.
          </p>
        </div>
      </div>

      <h2 className="prediction-title">Trends Analysis</h2>
      <div className="trends-analysis-grid">
        <div className="student-trends-chart">
          <h3>Student Trends Analysis</h3>
          <Chart options={studentTrendsOptions} series={studentTrendsSeries} type="bar" width={700} height={300} />
          <p className="chart-label">
            Analysis of current and future student enrollment trends.
          </p>
        </div>
        <div className="fee-trends-chart">
          <h3>Fee Collection Trends Analysis</h3>
          <Chart options={feeTrendsOptions} series={feeTrendsSeries} type="bar" width={700} height={300} />
          <p className="chart-label">
            Analysis of current and future fee collection trends.
          </p>
        </div>
      </div>

      <h2 className="prediction-title">Income Analysis</h2>
      <div className="trends-analysis-grid">
        <div className="income-trends-chart">
          <h3>Income Trends Analysis</h3>
          <Chart options={incomeTrendsOptions} series={incomeTrendsSeries} type="line" width={700} height={300} />
          <p className="chart-label">
            Analysis of current and future income trends.
          </p>
        </div>
        {/* <div className="income-breakdown-chart">
          <h3>Income Breakdown</h3>
          <Chart options={incomeBreakdownOptions} series={incomeBreakdownSeries} type="pie" width={700} height={300} />
          <p className="chart-label">
            Breakdown of income sources.
          </p>
        </div> */}
      </div>

      {/* New Section: Income Source Distribution */}
      <h2 className="prediction-title">Income Source Distribution</h2>
      <div className="trends-analysis-grid">
        <div className="income-source-distribution-chart">
          <h3>Income Source Distribution</h3>
          <Chart options={incomeSourceDistributionOptions} series={incomeSourceDistributionSeries} type="pie" width={700} height={300} />
          <p className="chart-label">
            Distribution of income across different sources.
          </p>
        </div>
      </div>

      <h2 className="prediction-title">Profitability Analysis</h2>
      <div className="profitability-summary">
        <p><strong>Total Revenue:</strong> Rs. <span style={{ color: '#ff0000' }}>106,746.80</span></p>
        <p><strong>Total Expenses:</strong> Rs. <span style={{ color: '#ff0000' }}>16,343.00</span></p>
        <p><strong>Profit Margin:</strong> Rs. <span style={{ color: '#0000ff' }}>90,403.80</span></p>
      </div>
      <div className="profitability-chart">
        <Chart options={profitabilityOptions} series={profitabilitySeries} type="bar" width={700} height={300} />
        <p className="chart-label">
          Comparison of Total Revenue, Total Expenses, and Profit Margin.
        </p>
      </div>

      {/* New Section: Trends Analysis (same to same as image) */}
     <h2 className="prediction-title" style={{ color: '#333', fontSize: '24px', marginBottom: '10px' }}>Trends Analysis</h2>
<div className="trends-analysis-grid">
  <div className="student-trends-chart" style={{ background: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
    <h3 style={{ color: '#333', fontSize: '18px', marginBottom: '10px' }}>Student Trends Analysis</h3>
    <Chart options={studentTrendsOptions} series={studentTrendsSeries} type="line" width={700} height={300} />
    <p className="chart-label" style={{ color: '#666', fontSize: '12px', marginTop: '10px' }}>
      Analysis of current and future student enrollment trends.
    </p>
  </div>
  <div className="fee-trends-chart" style={{ background: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
    <h3 style={{ color: '#333', fontSize: '18px', marginBottom: '10px' }}>Fee Collection Trends Analysis</h3>
    <Chart options={feeTrendsOptions} series={feeTrendsSeries} type="line" width={700} height={300} />
    <p className="chart-label" style={{ color: '#666', fontSize: '12px', marginTop: '10px' }}>
      Analysis of current and future fee collection trends.
    </p>
  </div>
</div>
    </div>
  );
};

export default Prediction;