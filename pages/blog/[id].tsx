import type { NextPage, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { HTMLAttributes } from 'react';
import { PageWrapper, Sidebar, PageStructure, Navigation, MotionBox, Footer, Box, SearchBar } from 'components';
import { client } from 'utils/appolloClient';
import { gql, ApolloQueryResult } from '@apollo/client';
import type { BLOG_ITEM } from 'Types/Blog_Item';
import type { BLOG_PATHS } from 'Types/Blog_Paths';

const Heading = ({ children }: HTMLAttributes<HTMLElement>) => <h2 className="hArticle">{children}</h2>;
const ParagraphPreview = ({ children }: HTMLAttributes<HTMLElement>) => <p className="pArticle">{children}</p>;

/* eslint-disable */
const options = {
    renderNode: {
        [BLOCKS.HEADING_3]: (node: any, children: any) => <Heading>{children}</Heading>,
        [BLOCKS.HEADING_4]: (node: any, children: any) => <Heading>{children}</Heading>,
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => <ParagraphPreview>{children}</ParagraphPreview>,
    },
};
/* eslint-enable */

const BlogPost: NextPage<BLOG_ITEM> = ({ blogPostCollection }) => {
    return (
        <PageWrapper>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar />
            <SearchBar />
            <PageStructure htmlTag="nav" className="px-5 flex justify-between">
                <Navigation />
            </PageStructure>
            <PageStructure htmlTag="main" className="bg-navBg">
                <MotionBox className="bg-bgImg px-5 py-10 w-full aspect9_16 md:flex gap-8">
                    <MotionBox className="text-pageWhite relative">
                        <h2 className="text-[12vw] sm:text-[8vw] md:text-[3.2rem] lg:text-[4rem] xl:text-[5.5rem] leading-none">
                            {blogPostCollection.items[0].blogTxtPreviewTitle}
                        </h2>
                        <p className="text-[5vw] sm:text-[4vw] md:text-[1.1rem] lg:text-[1.7rem] mt-5 last-of-type:text-base last-of-type:underline last-of-type:lg:absolute last-of-type:bottom-0 last-of-type:underline-offset-2">
                            {blogPostCollection.items[0].blogTxtPreviewDescription}
                        </p>
                        <p className="articleAuthor">{blogPostCollection.items[0].blogTxtPreviewAuthor}</p>
                    </MotionBox>
                    <MotionBox className="aspect6_9 md:aspect8_5 mt-10 md:mt-0 relative w-full">
                        <Image
                            src={blogPostCollection.items[0].blogImg.url}
                            alt={blogPostCollection.items[0].blogImg.fileName}
                            layout="fill"
                            priority={true}
                        />
                    </MotionBox>
                </MotionBox>
                <Box className="px-5 grid gap-y-5 text-pageWhite pt-10 pb-40">
                    {blogPostCollection.items[0].blogTxt &&
                        documentToReactComponents(blogPostCollection.items[0].blogTxt.json as Document, options)}
                </Box>
            </PageStructure>
            <PageStructure htmlTag="footer" className="bg-navBg px-5">
                <Footer />
            </PageStructure>
        </PageWrapper>
    );
};

export default BlogPost;

export async function getStaticPaths() {
    const {
        data: {
            blogPostCollection: { items },
        },
    }: ApolloQueryResult<BLOG_PATHS> = await client.query({
        query: gql`
            query BlogPaths {
                blogPostCollection {
                    items {
                        slug
                    }
                }
            }
        `,
    });
    const paths: { params: { id: string } }[] = items.map(el => ({
        params: { id: el.slug },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
    const {
        data: { blogPostCollection },
    }: ApolloQueryResult<BLOG_ITEM> = await client.query({
        query: gql`
            query BlogItem($slugID: String) {
                blogPostCollection(where: { slug: $slugID }) {
                    items {
                        blogTxtPreviewTitle
                        blogTxtPreviewDescription
                        blogTxtPreviewAuthor
                        blogTxt {
                            json
                        }
                        blogImg {
                            url
                            fileName
                        }
                        slug
                    }
                }
            }
        `,
        variables: { slugID: ctx.params?.id },
    });
    return {
        props: { blogPostCollection },
    };
}
