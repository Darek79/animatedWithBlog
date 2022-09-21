import Image, { ImageProps } from 'next/image';
import { ReactNode } from 'react';
import type { HTMLAttributes } from 'react';

interface ImageWrappedI extends HTMLAttributes<HTMLDivElement> {
    imageComp: ReactNode;
}

export default function ImageWrapped({ imageComp, ...rest }: ImageWrappedI): JSX.Element {
    return (
        <div style={{ position: 'relative' }} {...rest}>
            {imageComp}
        </div>
    );
}
