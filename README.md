<h1 align="center" style="display: block; font-size: 2.5em; font-weight: bold; margin-block-start: 1em; margin-block-end: 1em;">
</a>
  <strong>Spotify Server</strong>
</h1>

![API URL](https://img.shields.io/badge/Endpoint-https%3A%2F%2Foss--spotify.cosii.workers.dev%2F-blue)
<br>
[API](https://oss-spotify.cosii.workers.dev/)

---

## Introduction

Simple Cloudflare workers server to use Spotify Server without any authentication. This is only reccomended for development uses only.

---

## Motivation

I was working on an app that allows you to search for music using the Spotify API. As I became more acquainted with the API, I learned that you need to increase the capacity to make it suitable for production usage, and I also needed to encrypt my OAuth credentials in the app.

> The solution was to create a server that functions as a proxy for searching.

---

## Installation and Running

Clone the repository and setup wrangler cli.
Then run the following commands to set Environment Variables.

```bash
# Set the Refresh Token of your account
wrangler secret put REFRESH_TOKEN

# Set the  base64 encoded client id and client secret
wrangler secret put OAUTH_BTOA

```

### Running

```bash
# For local server
wrangler dev

# For production
wrangler publish
```

---

## Endpoints

### Search

`/query/<query>`

Where \<query> is your search string

Returns

```json
{
  "tracks": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "items": [{}],
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4
  },
  "artists": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "items": [{}],
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4
  },
  "albums": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "items": [{}],
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4
  },
  "playlists": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "items": [{}],
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4
  },
  "shows": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "items": [{}],
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4
  },
  "episodes": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "items": [{}],
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4
  },
  "audiobooks": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "items": [{}],
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4
  }
}
```

References: [Spotify API](https://developer.spotify.com/documentation/web-api/reference/#/operations/search)

### Playlist

`/playlist/<id>`

Where \<id> is your playlist id

Returns

```json
{
  "collaborative": true,
  "description": "string",
  "external_urls": {
    "spotify": "string"
  },
  "followers": {
    "href": "string",
    "total": 0
  },
  "href": "string",
  "id": "string",
  "images": [
    {
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "height": 300,
      "width": 300
    }
  ],
  "name": "string",
  "owner": {
    "external_urls": {
      "spotify": "string"
    },
    "followers": {
      "href": "string",
      "total": 0
    },
    "href": "string",
    "id": "string",
    "type": "user",
    "uri": "string",
    "display_name": "string"
  },
  "public": true,
  "snapshot_id": "string",
  "tracks": {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "items": [{}],
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4
  },
  "type": "string",
  "uri": "string"
}
```

References: [Spotify API](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlist)

### Track Details

`/track/<id>`

Where \<id> is your track id

Returns

```json
      Refer to URL below
```

References: [Spotify API](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-track)

## License

MIT
