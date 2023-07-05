const fs = require("fs");
new Date("09 Jul 2023 15:37:01 GMT").toString()
let credentials = JSON.parse(fs.readFileSync("./credentials.json"));

function getFromSetCookieHeaderValueStringRemainingMinutes (setCookieHeaderValueString) {
  let string = setCookieHeaderValueString.slice(setCookieHeaderValueString.indexOf("Expires")+8);
  string = string.slice(0, string.indexOf(";"));
  cookieExpirationDate = new Date(string)
  if (new Date() > cookieExpirationDate) {
    return "EXPIROU"
  } else {
    return (((new Date() - cookieExpirationDate) / 1000 ) / 60).toString().slice(1) + " minutos";
  }
}

module.exports = {
  name: 'tempo_restante_tokens_do_vrchat',
  description: 'Informa o tempo restante até os tokens expirarem',
  execute({interaction}) {
    interaction.reply(`Tempo para expiração dos tokens (Da conta do Alvorada) que são usados no canalhinha:\nLogin - ${getFromSetCookieHeaderValueStringRemainingMinutes(credentials.loginEndpointSetCookieHeaderValue)}\n2FA - ${getFromSetCookieHeaderValueStringRemainingMinutes(credentials.email2faEndpointSetCookieHeaderValue)}`);
  }
};
