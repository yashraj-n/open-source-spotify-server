<h1 align="center" style="display: block; font-size: 2.5em; font-weight: bold; margin-block-start: 1em; margin-block-end: 1em;">
</a>
  <strong>Spotify Server</strong>
</h1>

![API URL](https://img.shields.io/badge/Endpoint-https%3A%2F%2Foss--spotify.cosii.workers.dev%2F-blue)


---

## Introduction

Simple Cloudflare workers server to use Spotify Server without any authentication. This is only reccomended for development uses only.


---


## Motivation[![](./docs/img/pin.svg)](#motivation)

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

## License
MIT


