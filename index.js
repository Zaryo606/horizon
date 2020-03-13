const Discord = require('discord.js');
const prefix = ('h!')
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Logged into ' + client.user.tag);
    client.user.setActivity('h!help , CUSTOM BOT', { type : "WATCHING"});
});

client.on('message', (message) => {
	if (message.content === prefix + 'test') {
		message.channel.send('work');
    }

    let mention = message.mentions.users.first();
     if (message.content.startsWith (prefix + 'warn')) {
                if (!message.member.roles.cache.some(x => ["STAFF PERMS"].includes(x.name))) return message.channel.send("No Perms");						
                message.channel.send('User warned');
                MenMsg = ("WARN: " + message.content.slice (7));
                const embed1 = new Discord.MessageEmbed()
                .setAuthor("Warn Commnand author - " + message.author.username)
                .setDescription(MenMsg)
                .setTimestamp();
                mention.send(MenMsg);
                message.delete();
                client.channels.cache.get("686636482810609675").send(embed1);
         }
        if (message.content.startsWith (prefix + "help")) {
          const embed5 = new Discord.MessageEmbed()
          .setColor('#FF4500')
          .setAuthor("Command author - " + message.author.username)
          .setTitle('HORIZON HELP COMMAND')
          .addField('**h!warn - Staff Command**', true)
          .addField('**h!announce - Owner Commmand**', true)
          .addField('**h!say - Owner Command**', true)
          .addField('**h!team - show staff team of this bot !**', true)
          .addField('**h!staffhelp - show help about staffs commands !**', true)
          .addField('**h!ownerhelp - show help about owners commands !**', true)
          .setTitle("***MORE COMMANDS COMING SOON!!***")
          .setTimestamp();
          message.channel.send(embed5);
        }
        if (message.content.startsWith (prefix + "team")) {
          message.channel.send(`DEV - Zaryo#8635
          DONOS - Mac#0006`)
        }
        if (message.content.startsWith (prefix + 'staffhelp')) {
          if (!message.member.roles.cache.some(x => ["STAFF PERMS"].includes(x.name))) return message.channel.send("No Perms");
          const embed6 = new Discord.MessageEmbed()
          .setAuthor("Staff help command for " + message.author.username)
          .setDescription("***MORE STAFFS COMMANDS COMMING SOON***")
          .addField('h!warn - send private message to mentioned user, and save log', true)
          .setTimestamp();
           message.author.send(embed6);
        }
        if (message.content.startsWith (prefix + 'ownerhelp')) {
          if (!message.member.roles.cache.some(x => ["OWNER"].includes(x.name))) return message.channel.send("No Perms");
        const embed7 = new Discord.MessageEmbed()
        .setAuthor('Owner help command for ' + message.author.username)
        .setDescription('***MORE OWNERS COMMANDS COMMING SOON***')
        .addField('h!announce - say message content to channel "NEWS", and save log', true)
        .addField('h!say - say message contant to same channel, and save log', true)
        }
        

         if (message.content.startsWith (prefix + 'announce')) {
          if (!message.member.roles.cache.some(x => ["OWNER"].includes(x.name))) return message.channel.send("No Perms");
          announce = ('ANNOUNCE: ' + message.content.slice (10));
          const embed3 = new Discord.MessageEmbed()
          .setAuthor("Announce command author - " + message.author.username)
          .setDescription(announce)
          .setTimestamp();
          message.delete();
          client.channels.cache.get('686634896864968804').send(announce);
          client.channels.cache.get('686636482810609675').send(embed3);
        }
        if (message.content.startsWith (prefix + "say")) {
          if (!message.member.roles.cache.some(x => ["OWNER"].includes(x.name))) return message.channel.send("No Perms");
        say = message.content.slice (5);
        const embed2 = new Discord.MessageEmbed()
        .setAuthor("Say Command author - " + message.author.username)
        .setDescription("Say: " + say)
        .setTimestamp();
        message.delete();
        client.channels.cache.get('686636482810609675').send(embed2);
        message.channel.send(say);
        }
        const embed4 = new Discord.MessageEmbed()
        .setAuthor("Breaker: " + message.author.username)
        .setDescription(message.author.username + ' used ban words !!')
        .setTimestamp();

        if (message.content.includes("kurwa"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + ' Used Bad Word !!');
          client.channels.cache.get('686636482810609675').send(embed4);
         
        }
        if (message.content.includes("píča"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("pica"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("tvl"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("prdel"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("doprdele"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("tyvole"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("dopici"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("zmrd"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("picus"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("píčus"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("hajzl"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("zmrde"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("buzna"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("buzno"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("buzík"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("buzíku"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("kokot"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("kokote"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("mrdko"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("mrdka"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("buzerant"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("debil"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("kretén"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("prdel"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        if (message.content.includes("hajzle"))
        {
          message.delete();
          message.author.send('That word isnt avaible on this server !');
          message.channel.send(message.author.username + " Used Bad Word !!");
          client.channels.cache.get('686636482810609675').send(embed4);
        }
        



});

client.login(process.env.BOT_TOKEN);



