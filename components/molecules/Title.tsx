import { LazyMotionWrapper } from 'components';
import { m } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { liItem } from 'Variants/variants';
interface TitleI extends HTMLMotionProps<'header'> {
    title?: string;
}

export default function Title({ title, ...rest }: TitleI): JSX.Element {
    return (
        <LazyMotionWrapper>
            <m.header {...rest}>
                <h2 className="text-pageWhite text-[calc(8vw+5vw)] lg:text-[8.75rem] xl:text-[10rem] font-Bellefair leading-none uppercase text-center">
                    {title}
                </h2>
            </m.header>
        </LazyMotionWrapper>
    );
}
