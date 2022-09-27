import { ImageWrapped, Box } from 'components';
import Link from 'next/link';
import classnames from 'classnames';
import Image, { ImageProps } from 'next/image';
import frontTop from 'public/frontTop.jpeg';
import { HTMLAttributes } from 'react';

interface ArticleI extends HTMLAttributes<HTMLDivElement> {
    href: string;
    src: ImageProps['src'];
    alt: ImageProps['alt'];
    withoutDescription?: boolean;
    description?: string;
    aspect: 'square' | 'story' | 'mixed';
}

export default function Article({
    children,
    withoutDescription,
    description,
    href,
    src,
    alt,
    aspect,
    ...rest
}: ArticleI): JSX.Element {
    const descriptionClasses = classnames({
        articleDescription: !withoutDescription,
        hidden: withoutDescription,
    });

    const imgClasses = classnames({
        'w-full duration-200 hover:scale-110': true,
        'aspect-square': aspect === 'square',
        'aspect-[6/9]': aspect === 'story',
        'aspect-square md:aspect-[6/9]': aspect === 'mixed',
    });

    return (
        <article {...rest}>
            <Link href={href}>
                <>
                    <Box className="overflow-hidden w-full">
                        <ImageWrapped
                            className={imgClasses}
                            imageComp={
                                <Image
                                    src={frontTop}
                                    alt="front"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            }
                        />
                    </Box>
                    <h2 className="hover:underline hover:decoration-2 text-inherit pt-3">{description}</h2>

                    {children}
                </>
            </Link>
            <Box className={descriptionClasses}>
                <p>by Liza Harber and Daryl Wehner in Creative</p>
                <time>Featured — October, 2021</time>
            </Box>
        </article>
    );
}

// className="relative grid gap-y-3 mt-5"
// className="text-size40 text-pageWhite leading-none"
