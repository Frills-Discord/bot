module.exports = {
  name: "messageCreate",
  async execute(message) {
    const content = message.content.toLowerCase().trim();
    if (content === "hi") {
      await message.reply(
        "https://tenor.com/view/hi-hey-hello-there-kitten-cute-gif-16697937"
      );
    }
  },
};
