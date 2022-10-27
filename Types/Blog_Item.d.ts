export interface BLOG_ITEM {
    blogPostCollection: BlogPostCollection;
}
export interface BlogPostCollection {
    items: ItemsEntity[];
}
export interface ItemsEntity {
    blogTxtPreviewTitle: string;
    blogTxtPreviewDescription: string;
    blogTxtPreviewAuthor: string;
    blogTxt: BlogTxt;
    blogImg: BlogImg;
    slug: string;
}
export interface BlogTxt {
    json: Json;
}
export interface Json {
    data: unknown;
    content?: ContentEntity[];
    nodeType: string;
}
export interface ContentEntity {
    data: unknown;
    content?: ContentEntity1[];
    nodeType: string;
}
export interface ContentEntity1 {
    data: unknown;
    marks?: [];
    value: string;
    nodeType: string;
    content?: ContentEntity2[];
}
export interface ContentEntity2 {
    data: unknown;
    marks?: [];
    value: string;
    nodeType: string;
}
export interface BlogImg {
    url: string;
    fileName: string;
}
