import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['2349035269262', '𒆜𝔑𝔢𝔤𝔯𝔬𝔩𝔦𝔱𝔢𒆜', true],
  ['2349138085579', 'TrÎçkhh]', true],
  ['2349035391852', '𒆜__𝙏𝙞𝙢𝙩𝙝𝙚𝙣𝙚𝙜𝙧𝙤__𒆜', true],
] //Number of owners

//global.pairingNumber = "" //put your bot number here
 
global.mods = ['2349035269262','2349138085579'] 
global.prems = ['2349035269262','2349138085579','2349035391852]
global.allowed = ['917605902011', '2349138085579', '2349035269262']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'Kûrâmâ'
global.premium = 'true'
global.packname = 'kurama' 
global.author = 'bruhh' 
global.menuvid = 'https://i.imgur.com/dUoUXRN.mp4'
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/asli_guru69\n' 
global.dygp = 'https://wa.me2349035269262?text=Hey+𒆜𝔑𝔢𝔤𝔯𝔬𝔩𝔦𝔱𝔢𒆜'
global.fgsc = 'https://github.com/TheHonorendOnes/GURU-BOT' 
global.fgyt = 'https://youtube.com/@Asliguru'
global.fgpyp = 'https://youtube.com/@Asliguru'
global.fglog = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg' 
global.thumb = fs.readFileSync('./Assets/Gurulogo.jpg')


global.wait = '*⌛ _Kûrâmâ_*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' 

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
