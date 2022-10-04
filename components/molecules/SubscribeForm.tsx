import { Box, LazyMotionWrapper, ImageWrapped } from 'components';
import { m, AnimatePresence } from 'framer-motion';
import { FormEvent, useRef, useState, useEffect, HTMLAttributes } from 'react';
import classname from 'classnames';
import spinner from 'public/RollingSpinner.svg';
import Image from 'next/image';
import { whileTap } from 'Variants/variants';

interface Properties extends HTMLFormControlsCollection {
    subscribe?: HTMLInputElement;
}

interface Data {
    readonly elements: Properties;
}

const messageAnim = {
    open: {
        y: '0%',
        transition: {
            duration: 0.5,
        },
    },
    closed: {
        y: '-100%',
        transition: {
            duration: 0.5,
        },
    },
};

interface SubscribeFormI extends HTMLAttributes<HTMLDivElement> {
    transparent?: boolean;
}

export default function SubscribeForm({ transparent, ...rest }: SubscribeFormI): JSX.Element {
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const formRef = useRef<HTMLFormElement>(null);
    const emailRef = useRef<string | undefined>('');
    function formSubmit(event: FormEvent<Data>) {
        event.preventDefault();

        setLoading(p => !p);
        emailRef.current = event.currentTarget.elements.subscribe?.value;

        formRef.current?.reset();
    }

    useEffect(() => {
        if (loading) {
            fetch(`api/nodemailer?email=${emailRef.current}`)
                .then(res => res.json())
                .then(d => {
                    setMessage(d.message);
                    setLoading(p => !p);
                });
        }
    }, [loading]);

    const inputClasses = classname({
        'appearance-none outline-none border-none text-pageWhite': true,
        'bg-transparent': transparent,
        'bg-navBg': !transparent,
    });

    return (
        <Box {...rest}>
            <p className="text-pageWhite col-span-2 relative w-[80%] text-size18 mb-4">
                GET THE EMAIL NEWSLETTER AND UNLOCK ACCESS TO MEMBERS-ONLY CONTENT AND UPDATES
            </p>
            <form className="flex justify-between col-span-2 border-b-2 w-full" onSubmit={formSubmit} ref={formRef}>
                <label htmlFor="subscribe">
                    <input
                        name="subscribe"
                        type="email"
                        required={true}
                        placeholder="Your email address"
                        className={inputClasses}
                    />
                </label>
                <div className="relative flex w-fit">
                    <AnimatePresence>
                        {!loading ? (
                            <LazyMotionWrapper>
                                <m.button whileTap={whileTap} className="text-pageWhite" type="submit">
                                    Subscribe
                                </m.button>
                            </LazyMotionWrapper>
                        ) : (
                            <ImageWrapped
                                className="w-5 -translate-x-5"
                                imageComp={<Image alt="spinner" src={spinner} />}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </form>
            <div className="overflow-hidden w-full col-span-2 h-fit">
                <LazyMotionWrapper>
                    <m.div initial={false} animate={message ? messageAnim.open : messageAnim.closed}>
                        <p className="text-pageWhite text-size18">{message}</p>
                    </m.div>
                </LazyMotionWrapper>
            </div>
        </Box>
    );
}
