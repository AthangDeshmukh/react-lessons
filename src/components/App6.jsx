export default function App6() {
  const fruits = ["Apple", "mango", "orange", "banana"]; // Array of fruits

  return (
    <div>
      <h1>This is App6 Component</h1>
      <p>Welcome to the App6 page</p>
      <div
        style={{
          border: "2px solid black", // Outer box border
          padding: "20px", // Space inside the outer box
          display: "inline-block", // Adjust width to fit content
        }}
      >
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
                border: "1px solid black",
                padding: "10px",
                textAlign: "center",
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