/** @type {import('tailwindcss').Config} */

module.exports = {
    mode: 'jit',
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                Bellefair: "'Bellefair', serif",
                Marcellus: "'Marcellus', serif",
            },
            colors: {
                navBg: '#202833',
                pageWhite: '#fafafa',
            },
            spacing: {
                formButton: '0.938rem',
                spacing10: '0.625rem',
                spacing20: '1.25rem',
                spacing30: '1.875rem',
                spacing35: '2.188rem',
                spacing38: '2.375rem',
                spacing40: '2.5rem',
                spacing60: '3.75rem',
                spacing70: '4.375rem',
                spacing100: '6.25rem',
                spacing300: '18.75rem',
                switcherHeight: '3.75rem',
                secondaryHeight: '2.5rem',
                inputSwitcherHeight: '80%',
                inputSwitcherWidth: '99%',
                messageW: '41.25rem',
                messageH: '20.5rem',
                agreementW: '62.5rem',
                agreementH: '44.5rem',
                profileInfoW: '41.25rem',
                profileInfoH: '43.31rem',
            },
            maxWidth: {
                profileInfoW: '41.25rem',
                agreementW: '62.5rem',
            },
            gridTemplateColumns: {
                mobile: '1fr',
                tablet: '1fr',
                desktop: 'auto minmax(10%,600px) minmax(10%,840px) auto',
            },
            lineHeight: {
                title: '3.25rem',
            },
            backgroundImage: {
                bgImg: "url('../public/bgPawel.jpg')",
            },
            fontSize: {
                size10: '0.625rem',
                size11: '0.688rem',
                size12: '0.75rem',
                size18: '1.125rem',
                size20: '1.25rem',
                size22: '1.375rem',
                size24: '1.5rem',
                size26: '1.625rem',
                size28: '1.75rem',
                size30: '1.875rem',
                size34: '2.125rem',
                size36: '2.25rem',
                size38: '2.375rem',
                size40: '2.5rem',
                size50: '3.125rem',
                size70: '4.375rem',
                size76: '4.8rem',
            },
            boxShadow: {
                settingsEdit: '0px 20px 40px 0px rgba(0, 0, 0, 0.2)',
                homepageShadow: ' 0 10px 40px 0 rgba(0, 0, 0, 0.2)',
            },
            opacity: {
                'opacity-15': '0.15',
            },
            borderRadius: {
                default: '1rem',
                'b-15': '0.938rem',
            },
            borderWidth: {
                default: '1px',
            },
        },
    },
};
