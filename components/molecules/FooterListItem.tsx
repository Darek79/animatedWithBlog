import type { HTMLAttributes } from 'react';
import Link from 'next/link';
interface FooterListItemI extends HTMLAttributes<HTMLUListElement> {
    listArray: string[];
}

export default function FooterListItem({ listArray, ...rest }: FooterListItemI): JSX.Element {
    return (
        <ul {...rest}>
            {listArray.map(el => (
                <li key={el} className="hover:underline">
                    <Link href={`/${el.toLocaleLowerCase()}`}>{el}</Link>
                </li>
            ))}
        </ul>
    );
}
