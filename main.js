const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('準備完了！');
});
client.on('message', function(message) {
 if (message.content === '!ping') {
  message.channel.send('!ping');
 }
});
client.on('message', message => {
	if (message.content.match('!agree')) {
	let role = message.guild.roles.cache.get("887596982611349586")
	message.member.roles.add(role)
  	.then(console.log)
  	.catch(console.error)
}
});
client.on('message', message => {
	if (message.content.match('!disagree')) {
	let role = message.guild.roles.cache.get("887596982611349586")
	message.member.roles.remove(role)
  	.then(console.log)
  	.catch(console.error)
}
});

client.login('TOKEN');
