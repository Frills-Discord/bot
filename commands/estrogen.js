const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("estrogen")
    .setDescription("yummy estrogen"),
  async execute(interaction) {
    await interaction.reply({
      files: ["https://media.tenor.com/IdcZ5SN-fPEAAAAi/estrogen-estro.gif"],
    });
  },
};
