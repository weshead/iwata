import { ClientEvents } from 'discord.js';

declare module 'discord.js' {
    interface Client {
        on<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
    }
}
