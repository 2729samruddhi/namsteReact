export async function handler(event, context) {
  const apiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.6748&lng=74.2114&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)...",
        "Accept": "application/json, text/plain, */*",
        "Referer": "https://www.swiggy.com",
        "Origin": "https://www.swiggy.com",
      },
    });

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch restaurants" }),
    };
  }
}
