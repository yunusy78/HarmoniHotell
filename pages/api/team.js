const apiUrl = process.env.NEXT_PUBLIC_API_URL;

async function getEmployees() {
  try {
    const res = await fetch(`${apiUrl}/Employees`);
    console.log(res);
    if (!res.ok) {
      throw new Error(`Error fetching employees: ${res.statusText}`);
    }
    const json = await res.json();
    console.log("employees",json.data);
    return json.data || []; // data özelliği varsa kullan, yoksa boş bir dizi kullan
  } catch (error) {
    console.error("Error fetching employees:", error);
    return []; // Hata durumunda da boş bir dizi kullan
  }
}

export { getEmployees };