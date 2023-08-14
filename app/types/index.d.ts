import type { IBlogGalleryImage } from "./blog";

export interface IWork {
    handle: string;
    appUrl: string;
    logo: string;
    title: string;
    subTitle: string;
    summary: string;
    blogData: {
        id: string;
        device: 'mobile' | 'desktop';
        imagePreviews: IBlogGalleryImage[];
        htmlContent: string;
    }[];
}