export async function fetchProducts() {
  try {
    const response = await fetch("../data/productsGroups.json");
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}
