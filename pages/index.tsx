import type { NextPage } from 'next';
import Head from 'next/head';
import {
    PageStructure,
    Article,
    Box,
    Sidebar,
    Navigation,
    Title,
    SubscribeForm,
    MotionBox,
    PageWrapper,
    PageSplitter,
    Footer,
    SearchBar,
} from 'components';
import { client } from 'utils/appolloClient';
import { gql, ApolloQueryResult } from '@apollo/client';
import type { ARTICLE_PREVIEW, Data } from 'Types/Article_Preview';
import { ulItem } from 'Variants/variants';
import { useEffect } from 'react';
import { useStore } from 'Mobx/context';

const heroAnim = {
    active: {
        y: 0,
        transition: {
            duration: 0.8,
        },
    },
    inactive: {
        y: 20,
    },
};

const Home: NextPage<{ result: Data }> = ({ result }) => {
    const { mainStore } = useStore();
    useEffect(() => {
        if (result.blogPostCollection.items.length) {
            mainStore.setArticleArray(result.blogPostCollection.items);
        }
    }, [mainStore, result.blogPostCollection.items]);
    return (
        <PageWrapper>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar />
            <SearchBar />
            <PageStructure htmlTag="nav" className="px-5">
                <Navigation />
            </PageStructure>
            <PageStructure htmlTag="main" className="bg-navBg">
                <MotionBox
                    variants={ulItem}
                    initial="inactive"
                    animate="active"
                    className="grid md:grid-cols-six gap-x-5 px-5 md:grid-rows-six bg-bgImg overflow-hidden pt-10 pb-40"
                >
                    <Title
                        className="relative overflow-hidden md:col-span-full md:row-start-1 md:row-end-3 self-center"
                        titleClasses="text-pageWhite text-[calc(8vw+5vw)] lg:text-[6rem] font-Bellefair leading-none uppercase text-center"
                        variants={heroAnim}
                        title="Lorem Ipsum"
                    />
                    <MotionBox className="md:row-start-3 md:col-span-6" variants={heroAnim}>
                        <Article
                            aspect="square"
                            title={result.blogPostCollection.items[0].blogTxtPreviewTitle}
                            description={result.blogPostCollection.items[0].blogTxtPreviewDescription}
                            time={result.blogPostCollection.items[0].blogTxtPreviewAuthor}
                            className="artilceItemMain"
                            href={`/blog/${result.blogPostCollection.items[0].slug}`}
                            src={result.blogPostCollection.items[0].blogImg.url}
                            alt={result.blogPostCollection.items[0].blogImg.fileName}
                            priority={true}
                        />
                    </MotionBox>
                    <Box className="grid grid-cols-2 md:gap-y-10 mt-10 md:mt-0 gap-5 md:row-start-3 md:col-start-7 md:col-span-6">
                        <MotionBox className="col-span-2 w-full hidden md:block" variants={heroAnim}>
                            <SubscribeForm className="lg:w-3/4" transparent />
                        </MotionBox>
                        <MotionBox variants={heroAnim}>
                            <Article
                                aspect="square"
                                className="gridArticlePreviewClass"
                                withoutDescription
                                title={result.blogPostCollection.items[1].blogTxtPreviewTitle}
                                time={result.blogPostCollection.items[1].blogTxtPreviewAuthor}
                                href={`/blog/${result.blogPostCollection.items[1].slug}`}
                                src={result.blogPostCollection.items[1].blogImg.url}
                                alt={result.blogPostCollection.items[1].blogImg.fileName}
                                priority={true}
                            />
                        </MotionBox>
                        <MotionBox variants={heroAnim}>
                            <Article
                                aspect="square"
                                className="gridArticlePreviewClass"
                                withoutDescription
                                title={result.blogPostCollection.items[2].blogTxtPreviewTitle}
                                time={result.blogPostCollection.items[2].blogTxtPreviewAuthor}
                                href={`/blog/${result.blogPostCollection.items[2].slug}`}
                                src={result.blogPostCollection.items[2].blogImg.url}
                                alt={result.blogPostCollection.items[2].blogImg.fileName}
                                priority={true}
                            />
                        </MotionBox>
                        <MotionBox variants={heroAnim}>
                            <Article
                                aspect="square"
                                className="gridArticlePreviewClass"
                                withoutDescription
                                title={result.blogPostCollection.items[3].blogTxtPreviewTitle}
                                time={result.blogPostCollection.items[3].blogTxtPreviewAuthor}
                                href={`/blog/${result.blogPostCollection.items[3].slug}`}
                                src={result.blogPostCollection.items[3].blogImg.url}
                                alt={result.blogPostCollection.items[3].blogImg.fileName}
                            />
                        </MotionBox>
                        <MotionBox variants={heroAnim}>
                            <Article
                                aspect="square"
                                className="gridArticlePreviewClass"
                                withoutDescription
                                title={result.blogPostCollection.items[4].blogTxtPreviewTitle}
                                time={result.blogPostCollection.items[4].blogTxtPreviewAuthor}
                                href={`/blog/${result.blogPostCollection.items[4].slug}`}
                                src={result.blogPostCollection.items[4].blogImg.url}
                                alt={result.blogPostCollection.items[4].blogImg.fileName}
                            />
                        </MotionBox>
                    </Box>
                </MotionBox>
                <Box className="-translate-y-20 px-5">
                    <PageSplitter className="overflow-hidden w-full h-fit col-span-2" />
                    <Box className="w-full grid grid-cols-2 gap-5 mt-5">
                        <Article
                            aspect="mixed"
                            className="gridArticlePreviewClass"
                            withoutDescription
                            title={result.blogPostCollection.items[3].blogTxtPreviewTitle}
                            time={result.blogPostCollection.items[3].blogTxtPreviewAuthor}
                            href={`/blog/${result.blogPostCollection.items[3].slug}`}
                            src={result.blogPostCollection.items[3].blogImg.url}
                            alt={result.blogPostCollection.items[3].blogImg.fileName}
                        />
                        <Article
                            aspect="square"
                            className="gridArticlePreviewClass"
                            title={result.blogPostCollection.items[0].blogTxtPreviewTitle}
                            time={result.blogPostCollection.items[0].blogTxtPreviewAuthor}
                            href={`/blog/${result.blogPostCollection.items[0].slug}`}
                            src={result.blogPostCollection.items[0].blogImg.url}
                            alt={result.blogPostCollection.items[0].blogImg.fileName}
                        />
                        <Box className="grid w-full grid-cols-2 md:grid-cols-4 gap-x-5 col-span-2 md:mt-10">
                            <Article
                                aspect="mixed"
                                className="gridArticlePreviewClass"
                                title={result.blogPostCollection.items[1].blogTxtPreviewTitle}
                                time={result.blogPostCollection.items[1].blogTxtPreviewAuthor}
                                href={`/blog/${result.blogPostCollection.items[1].slug}`}
                                src={result.blogPostCollection.items[1].blogImg.url}
                                alt={result.blogPostCollection.items[1].blogImg.fileName}
                            />
                            <Article
                                aspect="mixed"
                                className="gridArticlePreviewClass"
                                title={result.blogPostCollection.items[2].blogTxtPreviewTitle}
                                time={result.blogPostCollection.items[2].blogTxtPreviewAuthor}
                                href={`/blog/${result.blogPostCollection.items[2].slug}`}
                                src={result.blogPostCollection.items[2].blogImg.url}
                                alt={result.blogPostCollection.items[2].blogImg.fileName}
                            />
                            <Article
                                aspect="mixed"
                                className="gridArticlePreviewClass"
                                title={result.blogPostCollection.items[3].blogTxtPreviewTitle}
                                time={result.blogPostCollection.items[3].blogTxtPreviewAuthor}
                                href={`/blog/${result.blogPostCollection.items[3].slug}`}
                                src={result.blogPostCollection.items[3].blogImg.url}
                                alt={result.blogPostCollection.items[3].blogImg.fileName}
                            />
                            <Article
                                aspect="mixed"
                                className="gridArticlePreviewClass"
                                title={result.blogPostCollection.items[4].blogTxtPreviewTitle}
                                time={result.blogPostCollection.items[4].blogTxtPreviewAuthor}
                                href={`/blog/${result.blogPostCollection.items[4].slug}`}
                                src={result.blogPostCollection.items[4].blogImg.url}
                                alt={result.blogPostCollection.items[4].blogImg.fileName}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className="-translate-y-10 px-5">
                    <Box className="bg-bgImg bg-left-bottom grid grid-cols-2 gap-3 px-2 py-4">
                        <PageSplitter className="overflow-hidden w-full h-fit col-span-2" />
                        <Article
                            aspect="story"
                            className="gridArticlePreviewClass"
                            title={result.blogPostCollection.items[2].blogTxtPreviewTitle}
                            time={result.blogPostCollection.items[2].blogTxtPreviewAuthor}
                            href={`/blog/${result.blogPostCollection.items[2].slug}`}
                            src={result.blogPostCollection.items[2].blogImg.url}
                            alt={result.blogPostCollection.items[2].blogImg.fileName}
                        />
                        <Article
                            aspect="square"
                            className="gridArticlePreviewClass"
                            title={result.blogPostCollection.items[4].blogTxtPreviewTitle}
                            time={result.blogPostCollection.items[4].blogTxtPreviewAuthor}
                            href={`/blog/${result.blogPostCollection.items[4].slug}`}
                            src={result.blogPostCollection.items[4].blogImg.url}
                            alt={result.blogPostCollection.items[4].blogImg.fileName}
                        />
                    </Box>
                </Box>
            </PageStructure>
            <PageStructure htmlTag="footer" className="bg-navBg px-5 -translate-y-10 lg:flex">
                <Footer />
            </PageStructure>
        </PageWrapper>
    );
};

export default Home;

export async function getStaticProps() {
    const result: ApolloQueryResult<ARTICLE_PREVIEW> = await client.query({
        query: gql`
            query BlogPost {
                blogPostCollection(skip: 0, limit: 5) {
                    items {
                        blogImg {
                            width
                            height
                            fileName
                            description
                            url
                        }
                        blogTxtPreviewTitle
                        blogTxtPreviewDescription
                        blogTxtPreviewAuthor
                        slug
                    }
                }
            }
        `,
    });

    return {
        props: { result: result.data },
    };
}
