export const hoverVariant = {
    whileTap: {
        scale: 0.7,
    },
    whileHover: { rotate: 45, scale: 1.2 },
};

export const ulItem = {
    active: {
        transition: {
            when: 'afterChildren',
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
    inactive: {},
};

export const liItem = {
    active: {
        y: '0%',
        transition: {
            duration: 0.2,
        },
    },
    inactive: {
        y: '100%',
        transition: {
            duration: 0.2,
        },
    },
};

export const whileTap = {
    scale: 0.8,
};

export const variantsSidebar = {
    active: {
        x: '0%',
        transition: {
            circIn: [0.15, 0.45, 0.65, 0.45],
        },
    },
    inactive: {
        x: '-100%',
    },
    exit: {
        x: '-100%',
        transition: {
            circOut: [0.15, 0.45, 0.65, 0.45],
        },
    },
};

export const ulItemSidebar = {
    active: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
    inactive: {
        opacity: 0,
    },
    exit: {
        opacity: 0,
    },
};
export const navItemsSidebar = {
    active: {
        y: 0,
        opacity: 1,
        color: '#fafafa',

        transition: {
            duration: 1,
        },
    },
    inactive: {
        y: 20,
        opacity: 0,
        color: '#202833',
        transition: {
            duration: 0.2,
        },
    },
    exit: {
        opacity: 0,
        color: '#202833',
        transition: {
            duration: 0.2,
        },
    },
};
