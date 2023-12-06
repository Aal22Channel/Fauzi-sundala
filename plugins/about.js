let handler = async (m, { conn }) => {
  let aboutID = `😺 Devina-md atau Devina wabot multi device, adalah bot WhatsApp yang cerdas dan sangat berguna untuk membantu Anda dalam menjawab pertanyaan dan memberikan solusi yang tepat dalam waktu yang singkat. Dikembangkan oleh Devv Offc, bot ini menggunakan sumber asli base Botcahx yang terus diperbarui oleh Devv Offc untuk memberikan pengalaman berinteraksi yang lebih mudah dan menyenangkan.

Dengan kemampuannya yang luas dalam menjawab pertanyaan dan memberikan solusi, Bot Devina-md dapat membantu Anda dalam berbagai hal seperti, mencari informasi tentang produk atau layanan, mengatur jadwal, dan banyak lagi. Bot Devina-md juga dapat memberikan jawaban yang akurat dan cepat sehingga Anda tidak perlu lagi menunggu lama untuk mendapatkan jawaban yang Anda butuhkan.

Sebagai produk yang dikembangkan dan diperbarui oleh Devv offc, Bot Devina-md selalu menerima pembaruan fitur-fitur terbaru untuk memberikan layanan yang semakin baik dan canggih. Dengan Bot Devina-md, Anda tidak perlu khawatir tentang kualitas layanan yang diberikan karena bot ini selalu siap memberikan solusi yang terbaik bagi pengguna WhatsApp. Jadi, tunggu apa lagi? Gunakan Bot Devina-md sekarang dan nikmati kemudahan serta kenyamanan dalam berinteraksi dengan bot cerdas ini di WhatsApp!`

  let aboutEN = `🐱 Devina-md is a smart WhatsApp bot that is very useful for helping you answer questions and provide accurate solutions in a short amount of time. Developed by Devv Offc, this bot uses the original source of Botcahx that is constantly updated by Devv Offc to provide an easier and more enjoyable interactive experience.

With its broad ability to answer questions and provide solutions, Bot Devina-md can assist you in various things such as searching for information about products or services, scheduling appointments, and much more. Bot Devina-md can also provide accurate and quick answers so you no longer have to wait long to get the answers you need.

As a product developed and updated by Devv-offc, Bot Devina-md always receives the latest feature updates to provide better and more advanced services. With Bot Devina-md, you don't have to worry about the quality of the service provided because this bot is always ready to provide the best solutions for WhatsApp users. So, what are you waiting for? Use Bot Devina-md now and enjoy the ease and convenience of interacting with this smart bot on WhatsApp!`
  
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  let about = `${aboutID}\n\n${aboutEN}`

  let url = "https://telegra.ph/file/81520d042c9948b21c9ff.jpg"

  conn.sendFile(m.chat, url, 'about.jpg', about, m)
}

handler.help = ['about', 'detile', 'aboutbot', 'tentang', 'detail']
handler.tags = ['info']
handler.command = /^(about|detile|tentang|detail)$/i
handler.register = true

module.exports = handler