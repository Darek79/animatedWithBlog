import { ImageWrapped, Box } from 'components';
import Link from 'next/link';
import classnames from 'classnames';
import Image, { ImageProps } from 'next/image';
import { HTMLAttributes } from 'react';

interface ArticleI extends HTMLAttributes<HTMLDivElement> {
    href: string;
    src: ImageProps['src'];
    alt: ImageProps['alt'];
    priority?: ImageProps['priority'];
    withoutDescription?: boolean;
    withoutTime?: boolean;
    description?: string;
    time?: string;
    aspect: 'square' | 'story' | 'mixed';
}

export default function Article({
    withoutDescription,
    withoutTime,
    title,
    description,
    time,
    src,
    href,
    aspect,
    priority,
    ...rest
}: ArticleI): JSX.Element {
    const descriptionClasses = classnames({
        articleDescription: !withoutDescription,
        hidden: withoutDescription,
    });
    const timeClasses = classnames({
        articleAuthor: !withoutTime,
        hidden: withoutTime,
    });

    const imgClasses = classnames({
        'w-full duration-700 hover:scale-105': true,
        aspect1_1: aspect === 'square',
        'aspect6_9 ': aspect === 'story',
        'aspect1_1 md:aspect6_9': aspect === 'mixed',
    });

    return (
        <article {...rest}>
            <Link href={href}>
                <a>
                    <Box className="overflow-hidden w-full">
                        <ImageWrapped
                            className={imgClasses}
                            imageComp={
                                <Image
                                    src={src}
                                    alt="front"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                    priority={priority}
                                />
                            }
                        />
                    </Box>
                    <h2 className="hover:underline hover:decoration-2 text-inherit pt-3">{title}</h2>
                    <p className={descriptionClasses}>{description}</p>
                </a>
            </Link>
            <p className={timeClasses}>{time}</p>
        </article>
    );
}

// className="relative grid gap-y-3 mt-5"
// className="text-size40 text-pageWhite leading-none"
