const fs = require("fs");
const https = require('node:https');

require('dotenv').config()

let lastTimeCalled = new Date(2022, 0, 1,  9, 0);
let credentials = JSON.parse(fs.readFileSync("./credentials.json"));
async function getMembers () {

  let promisse = new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.vrchat.cloud',
      port: 443,
      path: `/api/1/groups/${process.env.VR_CHAT_GROUP_ID}/members`,
      method: 'GET',
      headers: {
        "User-Agent": "canalhas_group_bot/1.0 kenedyhenrique.buenosilva@gmail.com",
        Cookie: `auth=${credentials.auth}; twoFactorAuth=${credentials.twoFactorAuth};`
      }
    };

    const req = https.request(options, (res) => {
      // console.log('statusCode:', res.statusCode);
      // console.log('headers:', res.headers);
      let data = [];

      res.on('data', (chunck) => {
        data.push(chunck);
      });
      res.on('end', () => {
        resolve(JSON.parse(Buffer.concat(data).toString()));
      })
    });

    req.on('error', (e) => {
      reject(e);
    });
    req.end();
  })

  return promisse;
}

let user;
async function getUser () {
  let promisse = new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.vrchat.cloud',
      port: 443,
      path: `/api/1/auth/user`,
      method: 'GET',
      headers: {
        "User-Agent": "canalhas_group_bot/1.0 kenedyhenrique.buenosilva@gmail.com",
        Cookie: `auth=${credentials.auth}; twoFactorAuth=${credentials.twoFactorAuth};`
      }
    };

    const req = https.request(options, (res) => {
      // console.log('statusCode:', res.statusCode);
      // console.log('headers:', res.headers);
      let data = [];

      res.on('data', (chunck) => {
        data.push(chunck);
      });
      res.on('end', () => {
        resolve(JSON.parse(Buffer.concat(data).toString()));
      })
    });

    req.on('error', (e) => {
      reject(e);
    });
    req.end();
  })

  return promisse;
}

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes*60000);
}

const statusEnum = {
  online: "Em jogo",
  offline: "Offline",
  active: "No site"
}
function getUserStatus (userId) {
  if (user.onlineFriends.includes(userId)) return statusEnum.online;
  if (user.activeFriends.includes(userId)) return statusEnum.active;
  if (user.offlineFriends.includes(userId)) return statusEnum.offline;
  return "Alvorada não possui adicionado, portanto, não foi possível usar o endpoint /auth/user pra pegar a informação, o /users/<user_id> não será usado devido seu alto preço.";
}

module.exports = {
  name: 'canalhas',
  description: 'Pega info dos canalhas',
  async execute({interaction, client }) {
    if(new Date() < addMinutes(lastTimeCalled, 1)) {
      interaction.reply(`Espere ${(addMinutes(lastTimeCalled, 1) - new Date()) / 1000} segundos até poder fazer essa ação novamente!`)
    } else {
      lastTimeCalled = new Date();
      await interaction.reply("ALPHA\n\n")
      let members
      try {
        members = await getMembers();
      } catch (err) {
        interaction.reply("Erro quando pegando os membros do grupo");
        return -1;
      }
      let membersText = ""
      let date, brDate, temporaryMembersText, userStatus;
      user = await getUser();
      for (let i=0; i<members.length; i++) {

        date = new Date(members[i].joinedAt)
        brDate = (date.getDate() + 1) + '/' + date.getMonth() + '/' +  date.getFullYear()
        userStatus = getUserStatus(members[i].userId);
        temporaryMembersText = `Canalha: ${members[i].user.displayName}\nEstá representando: ${members[i].isRepresenting ? "✅" : "❌"}\nEntrou em: ${brDate}\nNotificações ligadas: ${members[i].isSubscribedToAnnouncements ? "✅" : "❌"}\nStatus: ${userStatus}\n\n`

        if ((membersText + temporaryMembersText).length > 2000) {
          await interaction.followUp(membersText)
          membersText = ""
        } else {
          membersText += temporaryMembersText
          if (i == members.length - 1) {
            console.log("followUp")
            await interaction.followUp(membersText)
          }
        }
      }
    }
  }
};
