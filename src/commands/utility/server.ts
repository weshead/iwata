import { SlashCommandBuilder } from 'discord.js';
const server = {
    data: new SlashCommandBuilder().setName('server').setDescription('Provides information about the server.'),
    async execute(interaction: any) {
        // interaction.guild is the object representing the Guild in which the command was run
        await interaction.reply(
            `This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`
        );
    },
};
export { server };
