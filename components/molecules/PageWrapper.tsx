import { HTMLAttributes } from 'react';

export default function PageWrapper({ children }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    return (
        <div className="bg-navBg grid grid-cols-mobile md:grid-cols-desktop">
            <div className="col-span-2 md:col-start-2 justify-self-center w-full md:col-end-3 max-w-screen-2xl ">
                {children}
            </div>
        </div>
    );
}
