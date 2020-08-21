const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Literally just here to fill in the empty page from hosting ScuffBot'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
const Discord = require('discord.js');
const client = new Discord.Client();
client.on("ready", () => {

client.user.setPresence({
    status: 'online',
    activity: {
        name: 'Made by Wingless',
        type: 'STREAMING',
        url: 'https://www.twitch.tv/WinglessWhistle'
    }
})

})

// Bot Commands

// !ping
client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('pong!');
  }
});

// !invite
client.on('message', msg => {
  if (msg.content === '!invite') {
    msg.channel.send('Soon™');
  }
});

// !avatar
client.on('message', message => {
  if (message.content === '!avatar') {
    message.reply('This link takes you to your discord avatar.');
    message.channel.send(message.author.displayAvatarURL());
  }
});

// !commands
client.on('message', msg => {
  if (msg.content === '!commands') {
    msg.channel.send('!ping, !invite, !avatar, !minecraft & !commands');
  }
});

// !minecraft
client.on('message', msg => {
  if (msg.content === '!minecraft') {
    msg.channel.send('Sorry, this server is now offline. If you played previously you may still be able to.');
  }
});

// Bot Token

client.login(process.env.DISCORD_TOKEN);