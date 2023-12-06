let handler = async (m, { conn, text, usedPrefix: _p }) => {
  let user = global.db.data.users[m.sender]
  let message = `
♧︎︎︎𝙷𝙰𝙻𝙾 𝙺𝙰𝙺 𝙰𝙺𝚄 𝙰𝙳𝙰𝙻𝙰𝙷 𝙳𝙴𝚅𝙸𝙽𝙰 𝚆𝙰𝙱𝙾𝚃 𝙼𝚄𝙻𝚃𝙸 𝙳𝙴𝚅𝙸𝙲𝙴 𝙰𝙳𝙰 𝚈𝙰𝙽𝙶 𝙱𝙸𝚂𝙰 𝙳𝙸 𝙱𝙰𝙽𝚃𝚄?㋛︎ *@${m.sender.split("@")[0]}*`
conn.sendPresenceUpdate("composing", m.chat)
conn.sendMessage(m.chat, {
text: message,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: "Ketik .menu untuk menampilkan fitur bot",
thumbnailUrl: 'https://telegra.ph/file/81520d042c9948b21c9ff.jpg',
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
}

handler.customPrefix = /^(pp|p)$/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}