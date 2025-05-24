export default function App6() {
  const fruits = ["Apple", "Mango", "Orange", "Banana"]; // Array of fruits

  return (
    <div>
      <h1>This is App6 Component</h1>
      <p>Welcome to the App6 page!</p>
      {/* Outer box covering all */}
      <div
        style={{
          border: "2px solid black", // Outer box border
          padding: "20px", // Space inside the outer box
          display: "inline-block", // Adjust width to fit content
          backgroundColor: "#f9f9f9", // Light background for better visibility
        }}
      >
        {/* Grid container for fruits */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr", // Two columns
            gap: "10px", // Space between boxes
            width: "220px", // Adjust width for the grid
          }}
        >
          {fruits.map((fruit, index) => (
            <div
              key={index}
              style={{
                border: "1px solid black", // Border for each fruit box
                padding: "10px", // Space inside each box
                textAlign: "center", // Center the text
                backgroundColor: "#fff", // White background for each box
              }}
            >
              {fruit}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}