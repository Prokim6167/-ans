const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../ayarlar.json')

module.exports = client => {
  var k4h1n = [
    
    "!yardım",
    "Ekonomi Bot",
    "Kanalım prokim6161"
    
  ]
  
  setInterval(function() {
    var k4h1n1 = k4h1n[Math.floor(Math.random() * (k4h1n.length))]
    client.user.setActivity(`${k4h1n1}`);

}, 2 * 30000);
  
  client.user.setStatus("online");
  
}