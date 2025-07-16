import React from "react";
import Chart from "react-apexcharts";
import "../styles/Prediction.css";

// --- Static Data ---
const profitabilityData = [
  { metric: "Total Revenue", amount: 106746.8 },
  { metric: "Total Expenses", amount: 16343.0 },
  { metric: "Profit Margin", amount: 90403.8 },
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
  { monthYear: "2025-07-13", currentStudents: 2.2, futureStudents: 2.8 },
  { monthYear: "2026-01", currentStudents: null, futureStudents: 3.0 },
];

const feeTrendsData = [
  { monthYear: "1/2025", currentFee: 10000, futureFee: 5000 },
  { monthYear: "2/2025", currentFee: 30000, futureFee: 10000 },
  { monthYear: "4/2025", currentFee: 45000, futureFee: 20000 },
  { monthYear: "5/2025", currentFee: 35000, futureFee: 15000 },
  { monthYear: "6/2025", currentFee: 20000, futureFee: 10000 },
  { monthYear: "7/2025", currentFee: 15000, futureFee: 12000 },
  { monthYear: "2025-07-13", currentFee: 10000, futureFee: 14000 },
  { monthYear: "2026-01", currentFee: null, futureFee: 15000 },
];

const incomeTrendsData = [
  { monthYear: "1/2025", currentIncome: 8000, futureIncome: 6000 },
  { monthYear: "2/2025", currentIncome: 12000, futureIncome: 9000 },
  { monthYear: "4/2025", currentIncome: 15000, futureIncome: 11000 },
  { monthYear: "5/2025", currentIncome: 10000, futureIncome: 8000 },
  { monthYear: "6/2025", currentIncome: 7000, futureIncome: 6500 },
  { monthYear: "7/2025", currentIncome: 9000, futureIncome: 8500 },
];

const incomeSourceDistributionData = [
  { category: "Primary Job", value: 60 },
  { category: "Side Projects", value: 25 },
  { category: "Passive Income", value: 15 },
];

// --- Chart Configs ---
const Prediction = () => {
  const getChartConfig = (xLabels, yTitle, yFormatter, max, type = "line") => ({
    chart: { toolbar: { show: false } },
    xaxis: { categories: xLabels, labels: { style: { colors: "#888" } } },
    yaxis: {
      min: 0,
      max,
      title: { text: yTitle, style: { color: "#888" } },
      labels: { formatter: yFormatter, style: { color: "#888" } },
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
    stroke: { curve: "smooth", colors: ["#00CED1", "#FFA500"] },
    dataLabels: { enabled: false },
    colors: ["#00CED1", "#FFA500"],
    legend: {
      show: true,
      position: "top",
      labels: { colors: "#888" },
    },
  });

  return (
    <div className="prediction-container">
      {/* Threshold Analysis */}
      <h2 className="prediction-title">Threshold Analysis</h2>
      <div className="threshold-analysis-grid">
        <div className="threshold-table">
          <table>
            <thead>
              <tr>
                <th>Threshold (days)</th>
                <th>% Dates Closer</th>
              </tr>
            </thead>
            <tbody>
              {thresholdData.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.threshold}</td>
                  <td>{item.percentage.toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="threshold-chart">
          <Chart
            options={{
              chart: { toolbar: { show: false } },
              xaxis: { categories: thresholdData.map((d) => d.threshold) },
              yaxis: { min: 0, max: 1, labels: { formatter: (val) => `${val}%` } },
              dataLabels: { enabled: false },
            }}
            series={[{ name: "Closer Dates %", data: thresholdData.map((d) => d.percentage) }]}
            type="bar"
            width="100%"
            height={300}
          />
          <p className="chart-label">
            % of students who paid fees within threshold after expiration.
          </p>
        </div>
      </div>

      {/* Student & Fee Trends */}
      <h2 className="prediction-title">Student & Fee Trends</h2>
      <div className="trends-analysis-grid">
        <div className="chart-card">
          <h3>Student Trends</h3>
          <Chart
            options={getChartConfig(
              studentTrendsData.map((d) => d.monthYear),
              "Students",
              (val) => val,
              5
            )}
            series={[
              { name: "Current Students", data: studentTrendsData.map((d) => d.currentStudents || null) },
              { name: "Future Students", data: studentTrendsData.map((d) => d.futureStudents) },
            ]}
            type="line"
            width="100%"
            height={300}
          />
        </div>

        <div className="chart-card">
          <h3>Fee Trends</h3>
          <Chart
            options={getChartConfig(
              feeTrendsData.map((d) => d.monthYear),
              "Fee Collected",
              (val) => `₹${val}`,
              50000
            )}
            series={[
              { name: "Current Fee", data: feeTrendsData.map((d) => d.currentFee || null) },
              { name: "Future Fee", data: feeTrendsData.map((d) => d.futureFee) },
            ]}
            type="line"
            width="100%"
            height={300}
          />
        </div>
      </div>

      {/* Income Trends */}
      <h2 className="prediction-title">Income Trends</h2>
      <div className="chart-card">
        <Chart
          options={getChartConfig(
            incomeTrendsData.map((d) => d.monthYear),
            "Monthly Income",
            (val) => `₹${val}`,
            null
          )}
          series={[
            { name: "Current Income", data: incomeTrendsData.map((d) => d.currentIncome) },
            { name: "Future Income", data: incomeTrendsData.map((d) => d.futureIncome) },
          ]}
          type="line"
          width="100%"
          height={300}
        />
      </div>

      {/* Income Source Pie */}
      <h2 className="prediction-title">Income Source Distribution</h2>
      <div className="chart-card">
        <Chart
          options={{
            chart: { toolbar: { show: false } },
            labels: incomeSourceDistributionData.map((d) => d.category),
            legend: { show: true },
            dataLabels: { enabled: true },
          }}
          series={incomeSourceDistributionData.map((d) => d.value)}
          type="pie"
          width="100%"
          height={300}
        />
      </div>

      {/* Profitability */}
      <h2 className="prediction-title">Profitability Analysis</h2>
      <div className="profitability-summary">
        <p><strong>Total Revenue:</strong> ₹106,746.80</p>
        <p><strong>Total Expenses:</strong> ₹16,343.00</p>
        <p><strong>Profit Margin:</strong> ₹90,403.80</p>
      </div>
      <div className="chart-card">
        <Chart
          options={{
            chart: { toolbar: { show: false } },
            xaxis: { categories: profitabilityData.map((d) => d.metric) },
            yaxis: { labels: { formatter: (val) => `₹${val}` } },
            dataLabels: { enabled: false },
          }}
          series={[{ name: "Amount", data: profitabilityData.map((d) => d.amount) }]}
          type="bar"
          width="100%"
          height={300}
        />
      </div>
    </div>
  );
};

export default Prediction;
