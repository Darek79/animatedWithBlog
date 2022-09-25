import { LazyMotionWrapper, ClosingX } from 'components';
import { observer } from 'mobx-react-lite';
import { AnimatePresence, motion, useTransform, useMotionValue } from 'framer-motion';
import { hoverVariant } from 'Variants/variants';
import { useStore } from 'Mobx/context';
import type { HTMLAttributes } from 'react';
import Link from 'next/link';
import { navigationArray } from 'utils/pageArrays';

const variants = {
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

const ulItem = {
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
const navItems = {
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

function Sidebar({ children, ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    const { mainStore } = useStore();
    return (
        <AnimatePresence>
            {mainStore.sidebarOpen && (
                <motion.div
                    key="sidebar"
                    className="fixed top-0 bg-navBg w-full h-screen p-5 z-[9999]"
                    initial="inactive"
                    animate="active"
                    variants={variants}
                    exit="exit"
                >
                    <motion.div
                        whileTap={hoverVariant.whileTap}
                        whileHover={hoverVariant.whileHover}
                        className="w-fit ml-auto"
                        onClick={() => mainStore.sidebarHandler()}
                    >
                        <ClosingX className="stroke-white w-8 h-8 cursor-pointer" />
                    </motion.div>
                    <motion.ul className="grid gap-1" variants={ulItem}>
                        {navigationArray.map((el, i) => (
                            <motion.li
                                className="m-auto text-size40 text-center uppercase"
                                whileTap={{ scale: 0.8 }}
                                key={el}
                                variants={navItems}
                            >
                                <Link href={`/${el.toLocaleLowerCase()}`}>{el}</Link>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default observer(Sidebar);
