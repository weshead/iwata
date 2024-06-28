// CFG
import { CONFIG } from '../../config';
// Modules
import { Client, GatewayIntentBits } from 'discord.js';
import { Help } from '../modules/helpers';
// Deconstruction of helpers.
const { Log } = Help;

class IwataSensei {
    private readonly _CFG: {} = {};

    // constructor() {}

    public async entry(): Promise<void> {
        const TOKEN = CONFIG.TOKEN;

        ///
        const client = new Client({
            intents: [GatewayIntentBits.Guilds],
        });

        ///
        client.once('ready', () => {
            console.log(Log(`Logged in as ${client.user?.tag}!`));
        });

        ///
        client.on('messageCreate', (message) => {
            if (message.content === 'ping') {
                message.channel.send('Pong!');
            }
        });
        ///
        client.login(TOKEN);
    }
}

const app = new IwataSensei();

app.entry();
