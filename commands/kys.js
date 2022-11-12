const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kys")
    .setDescription("Tells a user to k*ll themselves")
    .addMentionableOption((option) =>
      option
        .setName("user")
        .setDescription("The user to k*ll")
        .setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getMentionable("user");
    await interaction.reply(`${user} kill yourself`);
  },
};
