import { LazyMotionWrapper } from 'components';
import { m } from 'framer-motion';
import { liItem } from 'Variants/variants';
interface TitleI {
    title?: string;
}

export default function Title({ title }: TitleI): JSX.Element {
    return (
        <LazyMotionWrapper>
            <header className="relative overflow-hidden">
                <h2 className="text-pageWhite text-[calc(8vw+5vw)] font-Bellefair leading-none uppercase text-center">{title}</h2>
            </header>
        </LazyMotionWrapper>
    );
}
