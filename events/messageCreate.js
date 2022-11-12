module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.content === "hi") {
      await message.reply({
        files: [
          "https://tenor.com/view/hi-hey-hello-there-kitten-cute-gif-16697937",
        ],
      });
    }
  },
};
