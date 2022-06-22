import { useState } from 'react';

import './App.css';

function App() {
  const [query, setQuery] = useState("");
  const a = {
    id: 1,
    firstName: "James",
    lastName: "Ibori",
    city: "Ikoyi",
    state: "Lagos",
    address: "One expensive house like that"
  }

  return (
    <div className="App">
      <input placeholder="Search" onChange={e => setQuery(e.target.value)} />
      {/* {
        a.map((data) => (
          <div key={data.id}>
            <p>{data.firstName}</p>
            <p>{data.lastName }</p>
          </div>
        ))
      } */}
    </div>
  );
}

export default App;
