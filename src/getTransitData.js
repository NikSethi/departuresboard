const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { lat, lng } = event.queryStringParameters;
  const apiKey = 'YOUR_API_KEY'; // Replace with your API key
  
  try {
    const response = await fetch(`https://api.transit.com/v1/arrival-times?lat=${lat}&lng=${lng}&api_key=${apiKey}`);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error('Error fetching transit data:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch transit data' })
    };
  }
};
