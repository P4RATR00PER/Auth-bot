const Discord = require("discord.js");

const PREFIX = "a.";

var bot = new Discord.Client();

bot.on("ready", function() {
  console.log("Auth is ready to use.")
  bot.user.setActivity('a.help')
})



bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(PREFIX)) return;

  var args  = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLowerCase()) {
    case "auth":
      message.channel.send(message.author.toString());
        message.channel.send("Auth is online and working correctly.");
        break;
    case "help":
        message.channel.send(message.author.toString());
            var embed = new Discord.RichEmbed()
        .addField("PREFIX", "a.")
        .addField("Help", "Gives a list of commands you can use with _Auth_")
        .addField("Auth", "Use this to test if _Auth_ is working correctly")
        .addField("Credits", "This will tell you the creator of _Auth_")
        .addField("London", "This is display a link to London v2")
        .addField("Map", "This is display an image of the London v2 map")
        .setColor(0xFFFFFF)
        .setThumbnail(message.author.avaterURL)
        .setTitle("**Auth commands**")
        message.channel.send(embed);
      break;
    case "credits":
        message.channel.send(message.author.toString());
        message.channel.send("P4RATR00PER#2008 is the created this bot.");
      break;
    case "london":
        message.channel.send(message.author.toString());
        message.delete();
        message.channel.send("https://www.roblox.com/games/883338831/City-of-London-United-Kingdom");
      break;
    case "map":
        message.channel.send(message.author.toString());
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/408357576242364427/409066843228078090/unknown.png")
      break;
    case "porn":
        message.channel.send("You lonely little twat, trying to use me in ways I don't want to be used. Fuck you man.")
      break;
    }
});

bot.login(process.env.BOT_TOKEN)
