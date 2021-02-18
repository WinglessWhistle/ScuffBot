const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('ScuffBot active!'));

app.listen(port, () => console.log(`ScuffBot Active on - http://localhost:${port}`));

// ================= START BOT CODE ===================
const Discord = require('discord.js');
const client = new Discord.Client();
client.on("ready", () => {

client.user.setPresence({
    status: 'online',
    activity: {
        name: 'Wingless > Robin',
        type: 'STREAMING',
        url: 'https://www.twitch.tv/redr0binhood'
    }
})

})

// Bot Commands

// scuff!ping
client.on('message', message => {
  if (message.content === 'scuff!ping') {  
        message.react('🏓');
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
    msg.react('📷');
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

// "robin sucks"
client.on('message', msg => {
  if (msg.content === 'robin sucks') {
    msg.react('🇹');
    msg.react('🇷');
    msg.react('🇺');
    msg.react('🇪');
  }
});

// !yoshi
client.on('message', msg => {
  if (msg.content === '!yoshi') {
    msg.channel.send('╰(*°▽°*)╯ Yoshi Indeed!');
  }
});

// yikes
client.on('message', msg => {
  if (msg.content === 'yikes') {
    msg.channel.send('yikes indeed.');
  }
});

// "🦞"
client.on('message', msg => {
  if (msg.content === '🦞') {
    msg.react('🦞');
  }
});

// Bot Token

client.login(process.env.DISCORD_TOKEN);

