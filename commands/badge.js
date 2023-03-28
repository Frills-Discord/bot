const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("badge")
    .setDescription("Claim your badge!"),
  async execute(interaction) {
    interaction.reply({
      content: link(
        "Get Badge",
        "https://discord.com/developers/active-developer"
      ),
      ephemeral: true,
    });
  },
};

function link(display, link) {
  return `[${display}](${link})`;
}
