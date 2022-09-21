import { LazyMotionWrapper, ClosingX } from 'components';
import { observer } from 'mobx-react-lite';
import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from 'Mobx/context';
import type { HTMLAttributes } from 'react';

const variants = {
    active: {
        x: '0%',
    },
    inactive: {
        x: '-100%',
    },
    exit: {
        x: '-100%',
    },
};

function Sidebar({ children, ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    const { mainStore } = useStore();
    return (
        <>
            {console.log(mainStore.sidebarOpen, '-----------')}
            <AnimatePresence>
                {mainStore.sidebarOpen && (
                    <motion.div
                        key="sidebar"
                        className="fixed top-0 bg-navBg w-full h-screen p-5"
                        initial="inactive"
                        animate="active"
                        exit="exit"
                        variants={variants}
                    >
                        <ClosingX
                            className="stroke-white w-8 h-8 ml-auto cursor-pointer"
                            clickFn={() => mainStore.sidebarHandler()}
                        />
                        <p>test</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default observer(Sidebar);
