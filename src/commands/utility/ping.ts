import { SlashCommandBuilder } from 'discord.js';

const ping = {
    data: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
    async execute(interaction: any) {
        // @todo define the any
        await interaction.reply('Pong!');
    },
};

export { ping };
