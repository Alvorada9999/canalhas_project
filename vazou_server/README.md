# Vazou server

Canalhas "vazou" website server.

## Table of content

* [Requirements](#requirements)
* [Configuration](#configuration)
* [Installation](#installation)

## Requirements

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

### Configuration

```
1 - On the same folder the "vazou" website is located, put also all files contained in this folder (Just by convention, if you leave them in another place, remember to update the configuration files accordingly)
2 - Put DISCORD_TOKEN inside a "./.env"
3 - Edit lines 10, 11, 12 of "vazou_server.service" to have right user, working directory and exec path
```

### Installation

```bash
# Clone the repository
git clone https://github.com/Alvorada9999/canalhas_project.git

# Enter into the directory
cd canalhas_project/vazou_server

# Install the dependencies
npm install

# Create a service for easy management
cp vazou_server.service /etc/systemd/system

# Register it with the systemd daemon
systemctl daemon-reload
```

##### ⚠️ Refer to ../apache_configs/README.md to continue with more instructions
