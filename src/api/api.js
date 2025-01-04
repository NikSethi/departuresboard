export async function getTransitData(lat, lng) {
  try {
    const response = await fetch(`/api/getTransitData?lat=${lat}&lng=${lng}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching transit data:', error);
    throw error;
  }
}
