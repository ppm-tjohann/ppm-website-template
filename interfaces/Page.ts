import { StrapiResponseData } from './StrapiResponse'
import Seo from './Seo'
import { ReactElement } from 'react'
import { button, header } from './Shared'
import { StrapiImage } from './StrapiImage'



export interface DefaultProps extends ReactElement {
    id: number,
    __component: string,
    key: number,
}

export interface ContentProps extends ReactElement {
    key: number,
    id: number,
    __component: 'blocks.content',
    buttons: button[],
    header: header | null,
    text: string,
}

export interface ContentMediaProps extends Omit<ContentProps, '__component'> {
    __component: 'blocks.content-media',
    images: { data: StrapiImage[] },
    background: 'default' | 'primary' | 'secondary',
    textPosition: 'left' | 'right',
}

export interface SingleTeaserProps {
    id: number,
    __component: 'blocks.single-teaser',
    page: Page,
}

export interface VideoProps extends ReactElement {
    id: number,
    __component: 'blocks.video',
}

export type ContentBlocks = SingleTeaserProps | ContentProps | VideoProps | ContentMediaProps

interface PageAttributes {
    name: string,
    slug: string,
    hasBreadcrumbs: boolean,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    seo: Seo,
    teaser: Object | null,
    content: ContentBlocks[],
}

export interface Page extends Omit<StrapiResponseData, 'attributes'> {
    attributes: PageAttributes
}


