import { HTMLAttributes, createElement } from 'react';

interface PageStructureI extends HTMLAttributes<HTMLElement> {
    htmlTag: 'nav' | 'main' | 'footer';
}

export default function PageStructure({ htmlTag, children, ...rest }: PageStructureI): JSX.Element {
    return createElement(htmlTag, { ...rest }, children);
}
