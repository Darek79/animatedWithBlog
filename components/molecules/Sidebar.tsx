import { ClosingX } from 'components';
import { observer } from 'mobx-react-lite';
import { AnimatePresence, motion } from 'framer-motion';
import { hoverVariant } from 'Variants/variants';
import { useStore } from 'Mobx/context';
import Link from 'next/link';
import { navigationArray } from 'utils/pageArrays';
import { variantsSidebar, ulItemSidebar, navItemsSidebar } from 'Variants/variants';

function Sidebar(): JSX.Element {
    const { mainStore } = useStore();
    return (
        <AnimatePresence>
            {mainStore.sidebarOpen && (
                <motion.div
                    key="sidebar"
                    className="fixed top-0 bg-navBg w-full h-screen p-5 z-[9999]"
                    initial="inactive"
                    animate="active"
                    variants={variantsSidebar}
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
                    <motion.ul className="grid gap-1" variants={ulItemSidebar}>
                        {navigationArray.map(el => (
                            <motion.li
                                className="m-auto text-size40 text-center uppercase"
                                whileTap={{ scale: 0.8 }}
                                key={el}
                                variants={navItemsSidebar}
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
