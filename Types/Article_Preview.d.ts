export interface ARTICLE_PREVIEW {
    data: Data;
}
export interface Data {
    blogPostCollection: BlogPostCollection;
}
export interface BlogPostCollection {
    items: ItemsEntity[];
}
export interface ItemsEntity {
    blogImg: BlogImg;
    blogTxtPreviewTitle: string;
    blogTxtPreviewDescription: string;
    blogTxtPreviewAuthor: string;
    slug: string;
}
export interface BlogImg {
    width: number;
    height: number;
    fileName: string;
    description?: null;
    url: string;
}
