const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('El Scuffo. Reporting for duty!'));

app.listen(port, () => console.log(`ScuffBot Active on -  http://localhost:${port}`));

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
    msg.channel.send('client.ping');
  }
});

// !invite
client.on('message', msg => {
  if (msg.content === '!invite') {
    msg.channel.send('Add ScuffBot Via This Handy Link! http://bit.ly/ScuffBotInvite');
  }
});

// !avatar
client.on('message', message => {
  if (message.content === '!avatar') {
    message.chan('Here is your avatar!');
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

//!sync
client.on('message', msg => {
  if (msg.content === '!sync') {
    msg.channel.send('Instructions sent to you in DMs!');
    msg.author.send("Please run the command `%^syncme` in ScuffBots dms")
  }
});

//%^syncme
client.on('message', msg => {
  if (msg.content === '%^syncme') {
    msg.author.send('$user.discordApi.Bot scuffbot.storage.sync404')
  }
});

// Bot Token

client.login(process.env.DISCORD_TOKEN);