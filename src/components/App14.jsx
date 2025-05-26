import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App14() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUser, setFilteredUser] = useState(null);

  const fetchData = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/users";
      const res = await axios(url);
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const user = users.find((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUser(user || null);
  }, [searchTerm, users]);

  return (
    <div>
      <h1>App14</h1>
      <h2>Search and Display Full User Info</h2>
      <p>
        <input
          type="text"
          placeholder="Type a name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </p>

      {filteredUser ? (
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h3>{filteredUser.name}</h3>
          <p><strong>Username:</strong> {filteredUser.username}</p>
          <p><strong>Email:</strong> {filteredUser.email}</p>
          <p><strong>Phone:</strong> {filteredUser.phone}</p>
          <p><strong>Website:</strong> {filteredUser.website}</p>
          <p><strong>Company:</strong> {filteredUser.company?.name}</p>
          <p><strong>Address:</strong> 
            {filteredUser.address?.suite}, {filteredUser.address?.street}, 
            {filteredUser.address?.city} - {filteredUser.address?.zipcode}
          </p>
        </div>
      ) : (
        searchTerm && <p>No user found with that name.</p>
      )}
    </div>
  );
}
