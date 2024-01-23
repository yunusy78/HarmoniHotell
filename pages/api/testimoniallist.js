// api.js

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

async function getTestimonials() {
  try {
    const res = await fetch(`${apiUrl}/testimonials`);
    if (!res.ok) {
      throw new Error(`Error fetching testimonials: ${res.statusText}`);
    }
    const json = await res.json();
    console.log(json.data);
    return json.data || []; // data özelliği varsa kullan, yoksa boş bir dizi kullan
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return []; // Hata durumunda da boş bir dizi kullan
  }
}

export { getTestimonials };




