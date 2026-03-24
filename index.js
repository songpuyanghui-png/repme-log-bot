import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith('!log')) {
    const content = message.content.replace('!log', '').trim();

    if (!content) {
      message.reply('内容書いて');
      return;
    }

    await message.author.send(`ログ保存:\n${content}`);
    await message.delete();
  }
});

client.login(process.env.TOKEN);
