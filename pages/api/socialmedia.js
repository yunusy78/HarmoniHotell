const apiUrl = process.env.NEXT_PUBLIC_API_URL;

async function getSocialMedia() {
  try {
    const res = await fetch(`${apiUrl}/socialMedia`);
    console.log(res);
    if (!res.ok) {
      throw new Error(`Error fetching socialMedia: ${res.statusText}`);
    }
    const json = await res.json();
    console.log("socialMedia",json.data);
    return json.data || []; // data özelliği varsa kullan, yoksa boş bir dizi kullan
  } catch (error) {
    console.error("Error fetching socialMedia:", error);
    return []; // Hata durumunda da boş bir dizi kullan
  }
}

export { getSocialMedia };