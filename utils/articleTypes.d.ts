export interface BLOG_PATHS {
    data: Data;
}
export interface Data {
    blogPostCollection: BlogPostCollection;
}
export interface BlogPostCollection {
    items?: ItemsEntity[];
}
export interface ItemsEntity {
    slug: string;
}

export interface BLOG_PREVIEW {
    data: Data;
}
export interface Data {
    blogPostCollection: BlogPostCollection;
}
export interface BlogPostCollection {
    items?: ItemsEntity[];
}
export interface ItemsEntity {
    blogImg: BlogImg;
    blogTxtPreview: BlogTxtPreview;
    slug: string;
}
export interface BlogImg {
    width: number;
    height: number;
    fileName: string;
    description: string;
    url: string;
}
export interface BlogTxtPreview {
    json: Json;
}
export interface Json {
    data: Data1;
    content?: ContentEntity[];
    nodeType: string;
}
export interface Data1 {}
export interface ContentEntity {
    data: Data1;
    content?: ContentEntity1[];
    nodeType: string;
}
export interface ContentEntity1 {
    data: Data1;
    marks?: null[] | null;
    value: string;
    nodeType: string;
}

export interface BLOG_ARTICLE {
    data: Data;
}
export interface Data {
    blogPostCollection: BlogPostCollection;
}
export interface BlogPostCollection {
    items?: ItemsEntity[] | null;
}
export interface ItemsEntity {
    blogImg: BlogImg;
    blogTxtPreview: BlogTxtPreview;
    blogTxt: BlogTxt;
}
export interface BlogImg {
    width: number;
    height: number;
    fileName: string;
    description: string;
    url: string;
}
export interface BlogTxtPreview {
    json: Json;
}
export interface Json {
    data: Data1;
    content?: ContentEntity[] | null;
    nodeType: string;
}
export interface Data1 {}
export interface ContentEntity {
    data: Data1;
    content?: ContentEntity1[] | null;
    nodeType: string;
}
export interface ContentEntity1 {
    data: Data1;
    marks?: null[] | null;
    value: string;
    nodeType: string;
}
export interface BlogTxt {
    json: Json1;
}
export interface Json1 {
    data: Data1;
    content?: ContentEntity2[] | null;
    nodeType: string;
}
export interface ContentEntity2 {
    data: Data2;
    content?: (ContentEntity3 | null)[] | null;
    nodeType: string;
}
export interface Data2 {
    target?: Target | null;
}
export interface Target {
    sys: Sys;
}
export interface Sys {
    id: string;
    type: string;
    linkType: string;
}
export interface ContentEntity3 {
    data: Data1;
    marks?: null[] | null;
    value?: string | null;
    nodeType: string;
    content?: ContentEntity1[] ;
}
