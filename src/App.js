import React, { useState } from 'react';
import { getTransitData } from './api/api'; // Import your API helper

function App() {
  const [transitData, setTransitData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  ReactDOM.render(<App />, document.getElementById('root'));


  async function fetchTransitData() {
    setLoading(true);
    setError(null);
    try {
      const data = await getTransitData(37.7749, -122.4194); // Example coordinates
      setTransitData(data);
    } catch (error) {
      setError('Failed to fetch transit data.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Transit Data</h1>
      <button onClick={fetchTransitData}>
        Get Next Buses/Trains
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {transitData && (
        <pre>{JSON.stringify(transitData, null, 2)}</pre>
      )}
    </div>
  );
}

export default App;

