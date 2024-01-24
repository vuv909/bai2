const BASE_URL = "http://localhost:4444/api/";

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; 
  }
};
