const got = require("got")

module.exports = {
  name: 'coisas_do_rericke',
  description: 'Envia coisa boa hehe',
  async execute({interaction, client}) {
    const files = JSON.parse((await got.post('https://api.waifu.pics/many/nsfw/trap', {
      json: {}
    })).body).files
		await interaction.reply("♥️ Chegando 🥵");
		await interaction.followUp({files: files.slice(0, 10)});
		await interaction.followUp({files: files.slice(10, 20)});
		await interaction.followUp({files: files.slice(20, 30)});
  },
};

// async function getTraps() {
//   const files = JSON.parse((await got.post('https://api.waifu.pics/many/nsfw/trap', {
//     json: {}
//   })).body).files
//   for (let i=0; i<files.length; i++) {
//     // console.log(i)
//     // console.log(typeof (await got.get(files[i])).body)
//     // fs.writeFileSync(`./traps_images/${files[i].split("/")[3]}`, Buffer.from((await got.get(files[i])).body, "utf-8"))
//     // https.get(files[i], (response) => {
//     //   console.log(Object.keys(response))
//     //   fs.writeFileSync(`./traps_images/${files[i].split("/")[3]}`, response.pipe())
//     // });
//     cp.exec(`curl -o ./traps_images/${files[i].split("/")[3]} ${files[i]}`)
//   }
// }

// for (let j=0; j<99; j++) {
//   getTraps()
// }
