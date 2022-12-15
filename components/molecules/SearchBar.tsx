import { MotionBox, ClosingX, Article } from 'components';
import { useEffect, useRef, KeyboardEvent, useState, FormEvent } from 'react';
import { AnimatePresence } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { useStore } from 'Mobx/context';
import { searchbarAnim, searchItemAnim } from 'Variants/variants';

function SearchBar(): JSX.Element {
    const { mainStore } = useStore();
    const [index, setIndex] = useState<boolean>(false);
    const indexRef = useRef<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    useEffect(() => {
        if (mainStore.searchOpen) {
            inputRef.current?.focus();
        }
    }, [mainStore, mainStore.searchOpen]);

    function getInputText(event: KeyboardEvent<HTMLInputElement>): void {
        if (event.key === 'Enter' && inputRef.current && inputRef.current?.value.length >= 5) {
            indexRef.current = mainStore.articleArray.findIndex(el =>
                el.blogTxtPreviewTitle.toLowerCase().includes(inputRef.current?.value.toLowerCase() as string)
            );
            setIndex(true);
            formRef.current?.reset();
        }
    }
    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }
    function clearSearch() {
        mainStore.searchHandler();
        setIndex(false);
    }

    return (
        <MotionBox
            className="fixed top-0 left-0 z-50 w-full min-h-screen bg-black/50 px-5"
            variants={searchbarAnim}
            initial={false}
            animate={mainStore.searchOpen ? 'open' : 'closed'}
        >
            <div className="w-full h-fit top-[70px] md:top-[90px] bg-navBg relative">
                <div className="p-5 h-full flex items-center justify-between">
                    <form ref={formRef} onSubmit={onSubmit}>
                        <label htmlFor="search">
                            <input
                                ref={inputRef}
                                className="appearance-none placeholder:text-pageWhite text-size34 outline-none pl-3 w-1/2 bg-navBg text-pageWhite"
                                placeholder="SEARCH"
                                type="text"
                                name="search"
                                onKeyDown={getInputText}
                            />
                        </label>
                        <p className="px-3 text-slate-400 text-sm md:text-base uppercase">
                            please type at least 3 characters
                        </p>
                    </form>
                    <ClosingX className="w-10 h-10 cursor-pointer stroke-2 stroke-pageWhite" onClick={clearSearch} />
                </div>
            </div>
            <AnimatePresence initial={false}>
                {index && (
                    <MotionBox
                        variants={searchItemAnim}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        key="search_item"
                        transition={{ duration: 1 }}
                        className="relative top-[90px] md:top-[110px] w-full h-[450px]   flex"
                    >
                        <div className="w-[330px] h-full m-auto bg-navBg p-3">
                            <Article
                                onClick={clearSearch}
                                aspect="square"
                                className="gridArticlePreviewClass"
                                withoutDescription
                                title={mainStore.articleArray[indexRef.current].blogTxtPreviewTitle}
                                time={mainStore.articleArray[indexRef.current].blogTxtPreviewAuthor}
                                href={`/blog/${mainStore.articleArray[indexRef.current].slug}`}
                                src={mainStore.articleArray[indexRef.current].blogImg.url}
                                alt={mainStore.articleArray[indexRef.current].blogImg.fileName}
                                priority={true}
                            />
                        </div>
                    </MotionBox>
                )}
            </AnimatePresence>
        </MotionBox>
    );
}
export default observer(SearchBar);
