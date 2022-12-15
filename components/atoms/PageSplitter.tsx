import { HTMLAttributes, useRef } from 'react';
import { LazyMotionWrapper } from 'components';
import { m, useInView } from 'framer-motion';
import { lineAnim, liItem } from 'anims/anims';
interface PageSplitterI extends HTMLAttributes<HTMLDivElement> {
    text?: string;
}

export default function PageSplitter({
    text = 'SEE WHAT WE HAVE WRITTEN LATELY',
    ...rest
}: PageSplitterI): JSX.Element {
    const spanRef = useRef<HTMLParagraphElement>(null);
    const inView = useInView(spanRef, { amount: 'all', once: false, margin: '-100px 0px' });

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
