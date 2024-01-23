const apiUrl = process.env.NEXT_PUBLIC_API_URL;

async function getBanners() {
  try {
    const res = await fetch(`${apiUrl}/Banners`);
    console.log(res);
    if (!res.ok) {
      throw new Error(`Error fetching banners: ${res.statusText}`);
    }
    const json = await res.json();
    console.log("banners",json.data);
    return json.data || []; // data özelliği varsa kullan, yoksa boş bir dizi kullan
  } catch (error) {
    console.error("Error fetching banners:", error);
    return []; // Hata durumunda da boş bir dizi kullan
  }
}

export { getBanners };