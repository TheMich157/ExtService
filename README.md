# Roblox Backend Service

This repository provides a simple backend for synchronizing Roblox player data across games using Node.js, Express and MongoDB.  It exposes a REST API, a small command line utility and a very light React based dashboard.

## Development

Copy `.env.example` to `.env` and adjust values.  After installing dependencies you can start the server with:

```bash
npm install
npm start
```

Docker and docker-compose configurations are included for local development.

### CLI

```
node admin-cli/main.js create-admin <user> <pass>
```

Additional commands such as `get`, `backup`, `migrate`, `history` and `users` are available. Run the script without arguments to see them all.

### Roblox Example

Send player data from a Roblox game:

```lua
local HttpService = game:GetService("HttpService")
HttpService:PostAsync(
    "https://your-server/api/user/save",
    HttpService:JSONEncode({userId = player.UserId, coins = 100}),
    Enum.HttpContentType.ApplicationJson,
    false,
    { ["x-api-key"] = "your-api-key" }
)
```

Load data back in another game:

```lua
local res = HttpService:GetAsync("https://your-server/api/user/load?userId=" .. player.UserId, false, { ["x-api-key"] = "your-api-key" })
local data = HttpService:JSONDecode(res)
print(data.coins)
```

### Deploying to Render

The included `render.yaml` sets up a Docker-based web service. To deploy:

1. Create a MongoDB instance on Render or provide an external connection string.
2. In your Render dashboard, create a **New Web Service** from this repository.
3. Ensure the environment variables defined in `render.yaml` are set with
   appropriate values.
4. Deploy and Render will build the Docker image and start the server.

Your API will then be available at the URL provided by Render.
