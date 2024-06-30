const cfg: {
    APP_UUID: string;
    SOURCE: {
        CC: string[];
        MODES: string[];
        CPU_IQ: string[];
        CHARACTERS: string[];
        TIRES: string[];
        VEHICLES: {
            [key: string]: string[];
        };
        GLIDERS: string[];
    };
    TOKEN: string;
} = {
    APP_UUID: 'iwata',
    SOURCE: {
        CC: ['150', '200', 'Mirror'],
        MODES: ['NORMAL', 'FRANTIC'],
        CPU_IQ: ['NORMAL', 'HARD', 'EASY'],
        CHARACTERS: ['Mario', 'Luigi', 'Peach'],
        TIRES: ['Standard', 'Monster', 'Roller'],
        VEHICLES: {
            KARTS: ['Standard', 'Mach 8', 'Landship'],
            STANDARD_BIKES: ['Standard', 'Varmint', 'Scooty'],
            SUPER_BIKES: ['Comet', 'Sport', 'Jet'],
            ATVS: ['Standard', 'Rattler', 'Inkstriker'],
        },
        GLIDERS: ['Super Glider', 'Cloud', 'Waddle'],
    },
    TOKEN: process.env.TOKEN!,
};

export { cfg };
