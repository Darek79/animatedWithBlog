import { LazyMotion, domAnimation, m, HTMLMotionProps } from 'framer-motion';

export default function MotionBox({ children, ...rest }: HTMLMotionProps<'div'>): JSX.Element {
    return (
        <LazyMotion features={domAnimation}>
            <m.div {...rest}>{children}</m.div>
        </LazyMotion>
    );
}
