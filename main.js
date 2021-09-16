const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('準備完了！');
});
client.on('message', function(message) {
 if (message.content === '!rule') {
  message.channel.send('自由なサーバー3のルールブックです。\nhttps://sites.google.com/view/ziyuu-discord/home/rules');
 }
});
client.on('message', message => {
	if (message.content.match('!agree')) {
	let role = message.guild.roles.cache.get("付けるID")
	message.member.roles.add(role)
  	.then(console.log)
  	.catch(console.error)
}
});
client.on('message', message => {
	if (message.content.match('!disagree')) {
	let role = message.guild.roles.cache.get("外すID")
	message.member.roles.remove(role)
  	.then(console.log)
  	.catch(console.error)
}
});

client.login('TOKEN');

