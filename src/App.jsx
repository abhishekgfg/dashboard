import Sidebar from "./components/Sidebar";
import HomePage from "./Pages/HomePage"; // 👈 Import the homepage content

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: "20px", backgroundColor: "#f4f7fe" }}>
        <HomePage /> {/* 👈 Load the actual homepage here */}
      </div>
    </div>
  );
}

export default App;
