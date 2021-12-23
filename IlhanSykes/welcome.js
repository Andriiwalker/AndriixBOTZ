// SILAHKAN KALIAN ATUR SESUAI KEINGINAN KALIAN :)
// NO ENC ALL FITUR? CHAT ME 🥴
// BY HANN SYKES | YOUTUBE : HannSykes
/*++++++++++++++++++++++++++++++++++++++++++++*/

// UCAPAN WELCOME
const ucapan = (num, mdata, pushname) => {
	return `Hello, @${num.split('@')[0]} 👋
Selamat Datang Di *_${mdata.subject}_*

- GROUP INTRODUCTION -
• Nama : 
• Askot :
• Umur :
• Hobi :
- DONT FORGET READ RULES GRUP! -

~ Thanks`
}

exports.ucapan = ucapan

// FOOTER WELCOME
const footerwelkam = `JANGAN LUPA INTRO!`
exports.footerwelkam = footerwelkam


// UCAPAN GOODBYE
const goodbye = (num, mdata, pushname) => {
  return `Good Bye! @${num.split('@')[0]}`
  }
exports.goodbye = goodbye


// FOOTER GOODBYE
const footergoodbye = `SEMOGA TENANG DI ALAM SANA`
exports.footergoodbye = footergoodbye