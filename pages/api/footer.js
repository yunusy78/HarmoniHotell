const apiUrl = process.env.NEXT_PUBLIC_API_URL;

async function getFooters() {
  try {
    const res = await fetch(`${apiUrl}/Footers`);
    console.log(res);
    if (!res.ok) {
      throw new Error(`Error fetching footers: ${res.statusText}`);
    }
    const json = await res.json();
    console.log("footers",json.data);
    return json.data || []; // data özelliği varsa kullan, yoksa boş bir dizi kullan
  } catch (error) {
    console.error("Error fetching footers:", error);
    return []; // Hata durumunda da boş bir dizi kullan
  }
}

export { getFooters };