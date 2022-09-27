import { HTMLAttributes, useRef } from 'react';
import { LazyMotionWrapper, Box, MotionBox } from 'components';
import { m, useInView } from 'framer-motion';
interface PageSplitterI extends HTMLAttributes<HTMLDivElement> {
    text?: string;
}

const lineAnim = {
    active: {
        x: '0%',
        transition: {
            duration: 1,
        },
    },
    inactive: {
        x: '-100%',
    },
};

export const liItem = {
    active: {
        y: '0%',
        transition: {
            duration: 0.5,
            delay: 0.3,
        },
    },
    inactive: {
        y: '100%',
        transition: {
            duration: 0.2,
        },
    },
};

export default function PageSplitter({ text = "SEE WHAT WE'VE WRITTEN LATELY", ...rest }: PageSplitterI): JSX.Element {
    const spanRef = useRef<HTMLParagraphElement>(null);
    const inView = useInView(spanRef, { amount: 'all', once: true });

    return (
        <LazyMotionWrapper>
            <div {...rest} ref={spanRef}>
                <m.p
                    initial={false}
                    animate={inView ? lineAnim.active : lineAnim.inactive}
                    className="w-full h-1 border-t-default border-pageWhite"
                />
                <m.p
                    animate={inView ? liItem.active : liItem.inactive}
                    className="text-pageWhite col-span-2 text-size20 md:text-size30"
                >
                    {text}
                </m.p>
            </div>
        </LazyMotionWrapper>
    );
}
