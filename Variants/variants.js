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
