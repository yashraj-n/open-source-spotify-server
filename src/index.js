import { Router } from "itty-router";
// Access token expires every hour so we use refreshTime to check when it expires
// When expires we refresh the token
let ACCESS_TOKEN = "";
let refreshTime = Date.now();

const router = Router();

router.get("/", () => {
  return new Response(
    "Spotify Open Source server (https://github.com/yashraj-n/open-source-spotify-server)"
  );
});

//* Searching for a track
router.get("/query/:query", async ({ params }) => {
  // Checking if the token is expired or not
  await RefreshToken();

  let query = decodeURIComponent(params.query);
  let url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
  let response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  return response;
});

async function RefreshToken() {
  // We don't want to refresh the token if it's not expired
  if (Date.now() < refreshTime) {
    return;
  }
  // Refreshing the token
  let url = "https://accounts.spotify.com/api/token";
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${OAUTH_BTOA}`,
    },
    body: `grant_type=refresh_token&refresh_token=${REFRESH_TOKEN}`,
  });

  let data = await response.json();
  ACCESS_TOKEN = data.access_token;

  if (refreshTime === 0) {
    //Sometimes its 0 so we set it to current time
    refreshTime = Date.now();
  }
  refreshTime = refreshTime + data.expires_in * 1000;
}
//* Getting a playlist
router.get("/playlist/:id", async ({ params }) => {
  await RefreshToken();
  let id = decodeURIComponent(params.id);
  let url = `https://api.spotify.com/v1/playlists/${id}`;
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
});

//* Getting a track
router.get("/track/:id", async ({ params }) => {
  await RefreshToken();
  let id = decodeURIComponent(params.id);
  let url = `https://api.spotify.com/v1/tracks/${id}`;
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
});

//* 404
router.all("*", () => new Response("404, not found!", { status: 404 }));

//* Adding the router to the worker
addEventListener("fetch", (e) => {
  e.respondWith(router.handle(e.request));
});
