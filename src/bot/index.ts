import { cfg } from '../../config';
import {
    Client,
    Collection,
    CommandInteraction,
    Events,
    GatewayIntentBits,
    Interaction,
    SlashCommandBuilder,
} from 'discord.js';
import { Help } from '../modules/helpers';
import { ping } from '../commands/utility/ping';
import { server } from '../commands/utility/server';
import { user } from '../commands/utility/user';

// Deconstruction of helpers.
const { Log } = Help;

class IwataSensei {
    private readonly _CFG: {} = {};
    private commands = new Collection();
    public async entry(): Promise<void> {
        const TOKEN = cfg.TOKEN;
        const { ClientReady, InteractionCreate } = Events;

        // Create Client
        const client = new Client({
            intents: [GatewayIntentBits.Guilds], //, GatewayIntentBits.GuildMessages
        });

        // Ready Client
        client.once(ClientReady, (readyClient) => {
            console.log(Log(`Logged in as ${client.user?.tag}!`));
        });

        //  TEMP
        client['commands'] = new Collection();

        // Commands
        // Utilities
        [user, ping, server].forEach((cmd) => {
            const { name } = cmd.data;
            const { data } = cmd;
            if (data) {
                this.commands.set(name, cmd);
            } else {
                console.log(Log('[Warning] cmd is missing a required data or execute property: '), cmd);
            }
        });

        // Handle interactions
        client.on(InteractionCreate, async (interaction) => {
            if (!interaction.isCommand()) return;
            if (!interaction.isChatInputCommand()) return;

            console.log(Log('Interaction: '), interaction);

            const command = this.commands.get(interaction.commandName);

            if (!command) {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        ephemeral: true,
                    });
                }
            }
        });

        // Login
        client.login(TOKEN);
    }
}

const app = new IwataSensei();

app.entry();
