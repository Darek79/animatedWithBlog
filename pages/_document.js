import { Html, Head, Main, NextScript } from 'next/document';
import { useEffect } from 'react';
import PiwikPro from '@piwikpro/react-piwik-pro';

export default function Document() {
    useEffect(() => {
        if (window) {
            PiwikPro.initialize('cd040d5e-8eb4-4c4c-acba-cf70d3d56428', 'https://dkdevtech.containers.piwik.pro');
        }
    }, []);

    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true.toString()} />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bellefair&family=Marcellus&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
