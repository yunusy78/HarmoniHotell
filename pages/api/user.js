// File: utilities/user.js

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function postNewsletter(email) {
  try {
    const response = await fetch(`${apiUrl}/newsletters`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Diğer gerekli başlıkları buraya ekleyebilirsiniz
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error(`Error posting newsletter: ${response.statusText}`);
    }

    const json = await response.json();
    console.log(json.data);

    return { success: true, data: json.data || [] };
  } catch (error) {
    console.error("Error posting newsletter:", error);
    return { success: false, error: 'Internal Server Error' };
  }
}
