export async function handler(event, context) {
  const { resId } = event.queryStringParameters || {};
  if (!resId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing restaurantId" }),
    };
  }

  const apiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&restaurantId=${resId}&lat=16.706369&lng=74.2481772`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Accept": "application/json, text/plain, */*",
        "Referer": "https://www.swiggy.com/",
        "Origin": "https://www.swiggy.com",
      },
    });

    const text = await response.text();

    // Try parsing JSON, if fails log HTML response
    try {
      const data = JSON.parse(text);
      return {
        statusCode: 200,
        body: JSON.stringify(data),
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      };
    } catch (err) {
      console.error("❌ Menu JSON parse failed. Response was:", text.slice(0, 200));
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Invalid JSON from Swiggy" }),
      };
    }
  } catch (err) {
    console.error("❌ Error fetching menu:", err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch menu" }),
    };
  }
}
