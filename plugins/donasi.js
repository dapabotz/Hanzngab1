let handler = async m => m.reply(`
╭─「 Donasi • BOT 」
│ • gopay [085157072227]
│ • DANA [085157072227]
│ • OVO  [085157072227]
│ • Saweria [bit.ly/Donasiyuk22]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
