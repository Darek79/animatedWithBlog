import { HTMLAttributes } from 'react';

export default function FooterList({ children, title, ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    return (
        <section {...rest}>
            <h2 className="mb-3 underline underline-offset-2">{title}</h2>
            {children}
        </section>
    );
}
