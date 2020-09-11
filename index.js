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
        name: 'Robin Sucks',
        type: 'STREAMING',
        url: 'https://www.twitch.tv/WinglessWhistle'
    }
})

})

// Bot Commands

// !ping
client.on('message', message => {
  if (message.content === '!ping') {  
    message.channel.send(`Your latency is ${Date.now() - message.createdTimestamp}ms. APIs Latency is ${Math.round(client.ws.ping)}ms`);
  }
});

// !invite
client.on('message', msg => {
  if (msg.content === '!invite') {
    msg.channel.send('Add ScuffBot Via This Handy Link! http://bit.ly/ScuffBotInvite');
  }
});

// !avatar
client.on('message', msg => {
  if (msg.content === '!avatar') {
    msg.reply('Here is your avatar!');
    msg.channel.send(msg.author.displayAvatarURL());
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
    msg.channel.send('Java 1.16.1 - robin.mc.gg');
  }
});

// !@#$%^&*()yikes
client.on('message', msg => {
  if (msg.content === '!@#$%^&*()yikes') {
    msg.channel.send('yikes indeed.');
  }
});



// Bot Token

client.login(process.env.DISCORD_TOKEN);

