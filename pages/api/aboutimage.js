const apiUrl = process.env.NEXT_PUBLIC_API_URL;

async function getAboutImages() {
  try {
    const res = await fetch(`${apiUrl}/aboutImages`);
    if (!res.ok) {
      throw new Error(`Error fetching aboutImages: ${res.statusText}`);
    }
    const json = await res.json();
    console.log(json.data);
    return json.data || []; // data özelliği varsa kullan, yoksa boş bir dizi kullan
  } catch (error) {
    console.error("Error fetching aboutImages:", error);
    return []; // Hata durumunda da boş bir dizi kullan
  }
}

export { getAboutImages };