# Canalhinha Discord bot

Canalhas server discord bot.

## Table of content

* [Requirements](#requirements)
* [Configuration](#configuration)
* [Installation](#installation)
* [Required permissions](#required-permissions)

## Requirements

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

### Configuration

```
1 - Put vrchat tokens inside "./credentils.json"
2 - Edit the bot status message at "./config.json"
3 - Put DISCORD_TOKEN and VR_CHAT_GROUP_ID inside a "./.env"
4 - Edit lines 10, 11, 12 of "canalhas_discord_bot.service" to have right user, working directory and exec path
```

### Installation

```bash
# Clone the repository
git clone https://github.com/Alvorada9999/canalhas_project.git

# Enter into the directory
cd canalhas_project/discord_bot

# Install the dependencies
npm install

# Create a service for easy management
cp canalhas_discord_bot.service /etc/systemd/system

# Register it with the systemd daemon
systemctl daemon-reload
```

### Required permissions

Make sure that your bot has the `applications.commands` application scope enabled, which can be found under the `OAuth2` tab on the [developer portal](https://discord.com/developers/applications/)

Enable the `Server Members Intent` and `Message Content Intent` which can be found under the `Bot` tab on the [developer portal](https://discord.com/developers/applications/)
