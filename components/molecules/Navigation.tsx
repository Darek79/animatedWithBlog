import { LazyMotionWrapper, SearchIconSVG, ImageWrapped, Box, Hamburger } from 'components';
import Link from 'next/link';
import Image from 'next/image';
import daigo from 'public/daigo_white.svg';
import { navigationArray } from 'utils/pageArrays';
import { ulItem, liItem } from 'Variants/variants';
import { m } from 'framer-motion';
import { useStore } from 'Mobx/context';

export default function Navigation(): JSX.Element {
    const { mainStore } = useStore();
    return (
        <Box className="flex items-center justify-between w-full h-[70px] text-pageWhite">
            <Link href="/">
                <a style={{ width: '100px', height: '100%' }}>
                    <ImageWrapped
                        className="w-[100px] h-full"
                        imageComp={<Image src={daigo} alt="logo" layout="fill" objectFit="contain" />}
                    />
                </a>
            </Link>
            <LazyMotionWrapper>
                <m.ul
                    className="hidden md:flex gap-x-5 items-center ml-auto navItem"
                    variants={ulItem}
                    initial="inactive"
                    animate="active"
                >
                    <li className="w-fit h-fit bg-inherit overflow-hidden">
                        <Link href="/#">
                            <m.p variants={liItem} className="h-full w-fit">
                                {navigationArray[0]}
                            </m.p>
                        </Link>
                    </li>
                    <li className="w-fit h-fit bg-inherit overflow-hidden">
                        <Link href="/#">
                            <m.p variants={liItem} className="h-full w-fit">
                                {navigationArray[1]}
                            </m.p>
                        </Link>
                    </li>
                    <li className="w-fit h-fit bg-inherit overflow-hidden" onClick={() => mainStore.searchHandler()}>
                        <m.p variants={liItem} key="test0" className="h-full w-fit flex gap-1 items-center">
                            {navigationArray[3]}
                            <SearchIconSVG className="iconSize" />
                        </m.p>
                    </li>
                    <li className="w-fit h-fit bg-inherit overflow-hidden">
                        <Link href="/#">
                            <m.p variants={liItem} key="test0" className="h-full w-fit">
                                {navigationArray[2]}
                            </m.p>
                        </Link>
                    </li>
                </m.ul>
            </LazyMotionWrapper>
            <div className="flex md:hidden items-center gap-3">
                <SearchIconSVG className="w-7 h-7 cursor-pointer  ml-auto" onClick={() => mainStore.searchHandler()} />
                <Hamburger className="w-8 h-8  cursor-pointer md:hidden z-50" />
            </div>
        </Box>
    );
}
