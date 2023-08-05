const http = require('http');

const { Client, IntentsBitField } = require('discord.js');
let leet = require('l33tsp34k')

require('dotenv').config()

// const client = new Discord.Client();
const client = new Client({ 
   intents: [IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.MessageContent, IntentsBitField.Flags.Guilds] 
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});
client.on('sendMessageEvent', (channelId, message) => {
  const channel = client.channels.cache.get(channelId);
  if (channel) {
    channel.send("⇒" + message + "⇐");
  } else {
    console.log(`Channel ${channelId} not found.`);
  }
});
client.login(process.env.DISCORD_TOKEN);

// Create a server object
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    // Collect the data from the request
    req.on('data', (chunk) => {
      body += chunk;
    });

    // Process the data once the request has ended
    req.on('end', () => {
      // Send a response
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Received and processed POST request' }));

      // Parse the received data
      const data = leet(JSON.parse(body));
      client.emit('sendMessageEvent', "1135220739906216017", leet(data));
    });
  } else {
    // Handle other HTTP methods or routes
    res.statusCode = 404;
    res.end();
  }
});

// Set the server to listen on a specific port
const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
