import Image from 'next/image';
import Link from 'next/link';
import daigo from 'public/daigo_white.svg';
import { Box, ImageWrapped, SubscribeForm, FooterList, FooterListItem } from 'components';
import { about, features, memeberShip, social } from 'utils/pageArrays';

export default function Footer(): JSX.Element {
    return (
        <>
            <Box className="w-full md:w-3/4 lg:w-1/2">
                <ImageWrapped
                    className="w-[150px] h-[100px]"
                    imageComp={<Image src={daigo} alt="logo" layout="fill" objectFit="contain" />}
                />
                <SubscribeForm className="overflow-hidden" />
            </Box>
            <Box className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 w-full">
                <FooterList className="text-pageWhite text-size24 md:text-size32" title="Social">
                    <ul className="grid gap-y-3">
                        {social.map(el => (
                            <li key={el.link} className="flex gap-2 items-center text-base hover:underline">
                                <ImageWrapped
                                    className="relative flex items-center"
                                    imageComp={<Image alt={el.link} src={el.img} />}
                                />

                                <Link href={`/${el.link}`}>{el.link}</Link>
                            </li>
                        ))}
                    </ul>
                </FooterList>
                <FooterList className="text-pageWhite text-size24 md:text-size32" title="About">
                    <FooterListItem className="text-pageWhite text-base grid gap-y-3" listArray={about} />
                </FooterList>
                <FooterList className="text-pageWhite text-size24 md:text-size32" title="Features">
                    <FooterListItem className="text-pageWhite text-base grid gap-y-3" listArray={features} />
                </FooterList>
                <FooterList className="text-pageWhite text-size24 md:text-size32" title="Membership">
                    <FooterListItem className="text-pageWhite text-base grid gap-y-3" listArray={memeberShip} />
                </FooterList>
            </Box>
        </>
    );
}
