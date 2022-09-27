import { HTMLAttributes } from 'react';
import Link from 'next/link';

export default function FooterList({ children, title, ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    return (
        <section {...rest}>
            <h2 className="mb-3 underline underline-offset-2">{title}</h2>
            {children}
        </section>
    );
}
