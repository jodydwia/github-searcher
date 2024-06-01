const API_URL = "https://api.github.com";
const TOKEN = "";

export async function searchGithub(value, type) {
    const param = value ? `/${type}?q=${value}` : '';
    const path = value ? `/search` : `/${type}`;
    const res = await fetch(`${API_URL}${path}${param}`, {
        headers: {Authorization: `Bearer ${TOKEN}`}
    });

    if (!res.ok) throw Error("Failed getting data");

    const data = await res.json();

    return value ? data.items : data;
}
