import { Html, Head, Main, NextScript } from 'next/document';
import { useEffect } from 'react';

export default function Document() {

    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true.toString()} />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bellefair&family=Marcellus&display=swap"
                    rel="stylesheet"
                />
                <script
                    defer={true}
                    dangerouslySetInnerHTML={{
                        __html: `(function(window, document, dataLayerName, id) {
                            window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
                            function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"}
                            var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
                            var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
                            tags.async=!0,tags.src="https://dkdevtech.containers.piwik.pro/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
                            !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
                            })(window, document, 'dataLayer', 'cd040d5e-8eb4-4c4c-acba-cf70d3d56428');`,
                    }}
                ></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
