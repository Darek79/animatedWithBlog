import type {HTMLAttributes} from 'react'
import { LazyMotionWrapper } from 'components';
import daigo from 'public/daigo_white.svg';

export default function Navigation({ children, ...rest }: HTMLAttributes<HTMLElement>): JSX.Element {
    return <nav {...rest}>{children}</nav>;
}
