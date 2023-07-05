const generateLeroLero = require("lerolero")

module.exports = {
  name: 'sabio_mirilo',
  description: 'Mirilo, preso no metaverso conversando com orangotangos do governo, desenvolveu grande sabedoria...',
  async execute({interaction, client}) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(generateLeroLero());
  },
};
