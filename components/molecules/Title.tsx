import { LazyMotionWrapper } from 'components';
import { m } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
interface TitleI extends HTMLMotionProps<'header'> {
    title?: string;
    titleClasses?: string;
}

export default function Title({ title, titleClasses, ...rest }: TitleI): JSX.Element {
    return (
        <LazyMotionWrapper>
            <m.header {...rest}>
                <h2 className={titleClasses}>{title}</h2>
            </m.header>
        </LazyMotionWrapper>
    );
}
