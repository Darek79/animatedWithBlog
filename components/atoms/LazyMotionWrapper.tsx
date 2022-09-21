import { HTMLAttributes } from 'react';
import { LazyMotion, domAnimation, LazyProps } from 'framer-motion';

export default function LazyMotionWrapper({ children }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
