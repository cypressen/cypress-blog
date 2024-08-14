import { type ReactNode } from 'react'
export interface LinkItemType {
    href: string;
    icon: string;
    title: string;
}

export interface SideCommentType {
    sideComment: boolean;
    setSideComment: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface HasReactNodeChildren {
    children: ReactNode
}

export interface Post {
    data: {
        // Maybe we can use optional properties instead of Index Signature
        [x: string]: any;
        title: string;
        description: string;
        pubDate: Date;
        categories: string[];
        tags: string[];
    };
    slug: string;
}

export interface Page<T> {
    url: {
        current: string;
        prev: string | undefined;
        next: string | undefined;
        first: string | undefined;
        last: string | undefined;
    };
    data: T[];
    start: number;
    end: number;
    total: number;
    size: number;
    currentPage: number;
    lastPage: number;
}