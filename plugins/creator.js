let handler = function (m) {
  // this.sendContact(m.chat, '6285157072227', 'Shan Bot', m)
  this.sendContact(m.chat, '6285157072227', 'Shan Bot', m)
  m.reply('Waitt...')
}
handler.help = ['owner', 'creator', 'pemilikbot']
handler.tags = ['info']

handler.command = /^(owner|creator|pemilikbot)$/i

module.exports = handler
