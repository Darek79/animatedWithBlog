import { createElement } from 'react';
import type { HTMLAttributes } from 'react';

export default function Box({ children, ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    return createElement('div', { ...rest }, children);
}
