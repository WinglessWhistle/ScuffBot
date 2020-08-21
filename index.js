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

// hello
client.on('message', msg => {
  if (msg.content === 'hello') {
    msg.reply('Hi!');
  }
});

// !invite
client.on('message', msg => {
  if (msg.content === '!invite') {
    msg.reply('Soon™');
  }
});

// !avatar
client.on('message', message => {
  if (message.content === '!avatar') {
    message.reply(message.author.displayAvatarURL());
  }
});

// !commands
client.on('message', msg => {
  if (msg.content === '!commands') {
    msg.reply('!ping, !invite, !avatar, !minecraft & !commands');
  }
});

// !minecraft
client.on('message', msg => {
    if (msg.channel.id === '742389792150388907') {
        if (msg.content === '!minecraft')
        msg.reply('The JAVA Minecraft server is on 1.16.1 and the IP address is: ats.mc.gg! Hosted By Battlecraft. https://discord.battlecraft.network');
    }
});

// Bot Token

client.login(process.env.DISCORD_TOKEN);