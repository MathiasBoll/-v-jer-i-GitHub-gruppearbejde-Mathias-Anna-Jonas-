export async function fetchProducts() {
  try {
    const response = await fetch("../data/productsGroups.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}

export async function fetchRecommended() {
  try {
    const response = await fetch("../data/recommended.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}

export async function fetchGallery() {
  try {
    const response = await fetch("../data/gallery.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}
