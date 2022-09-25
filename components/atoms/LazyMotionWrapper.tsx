import { ReactHTML } from 'react';
import { LazyMotion, domAnimation, HTMLMotionProps } from 'framer-motion';

type htmlTags = keyof ReactHTML;

export default function LazyMotionWrapper({ children }: HTMLMotionProps<htmlTags>): JSX.Element {
    return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
