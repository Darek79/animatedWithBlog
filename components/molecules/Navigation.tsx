import { LazyMotionWrapper, SearchIconSVG, ImageWrapped, Box, Hamburger } from 'components';
import Link from 'next/link';
import Image from 'next/image';
import daigo from 'public/daigo_white.svg';
import { navigationArray } from 'utils/pageArrays';
import { ulItem, liItem } from 'Variants/variants';
import { m } from 'framer-motion';

export default function Navigation(): JSX.Element {
    return (
        <Box className="flex items-center w-full h-[70px] text-pageWhite">
            <ImageWrapped
                className="w-[100px] h-full"
                imageComp={<Image src={daigo} layout="fill" objectFit="contain" />}
            />
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
                    <li className="w-fit h-fit bg-inherit overflow-hidden">
                        <Link href="/#">
                            <m.p variants={liItem} key="test0" className="h-full w-fit flex gap-1 items-center">
                                {navigationArray[2]}
                                <SearchIconSVG className="iconSize" />
                            </m.p>
                        </Link>
                    </li>
                    <li className="w-fit h-fit bg-inherit overflow-hidden">
                        <Link href="/#">
                            <m.p variants={liItem} key="test0" className="h-full w-fit">
                                {navigationArray[3]}
                            </m.p>
                        </Link>
                    </li>
                </m.ul>
                <Hamburger className="w-fit h-8 ml-auto cursor-pointer md:hidden z-50" />
            </LazyMotionWrapper>
        </Box>
    );
}
