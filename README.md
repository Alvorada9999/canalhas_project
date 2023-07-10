# Canalhinha Discord bot

Canalhas server discord bot.

## Table of content

* [Requirements](#requirements)
* [Author](#author)

## Requirements

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- You should have $NVM_BIN set, that points to the folder where the node binary (Named as "node") is located, you already have that if you installed node from [nvm](https://github.com/nvm-sh/nvm#install--update-script)

### Configuration

1 - Put vrchat tokens inside "canalhinha_discord_bot/credentils.json"
2 - Edit the bot status message at "canalhinha_discord_bot/config.json"
3 - Put DISCORD_TOKEN and VR_CHAT_GROUP_ID inside a "canalhinha_discord_bot/.env"
4 - Edit lines 10, 11, 12 of "canalhinha.service" to have right user, working directory and exec path

### Installation

```bash
# Clone the repository
git clone https://github.com/Alvorada9999/canalhinha_discord_bot.git

# Enter into the directory
cd canalhinha_discord_bot/

# Install the dependencies
npm install

# Create a service for easy management
cp canalhinha.service /etc/systemd/system

# Register it with the systemd daemon
systemctl daemon-reload
```

### Required permissions

Make sure that your bot has the `applications.commands` application scope enabled, which can be found under the `OAuth2` tab on the [developer portal](https://discord.com/developers/applications/)

Enable the `Server Members Intent` and `Message Content Intent` which can be found under the `Bot` tab on the [developer portal](https://discord.com/developers/applications/)

## Author

[Kenedy Henrique](kenedyhenrique.buenosilva@gmail.com)
