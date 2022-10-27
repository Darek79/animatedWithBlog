export interface BLOG_PATHS {
    blogPostCollection: BlogPostCollection;
}
export interface BlogPostCollection {
    items: ItemsEntity[];
}
export interface ItemsEntity {
    slug: string;
}
