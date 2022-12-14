import { Page } from './Page'



export interface button {
    id: number,
    name: string | null,
    internalLink: { data: Page | null },
    externalLink: string | null,
    variant: 'contained' | 'outlined' | 'text',
    color: 'primary' | 'secondary',
}

export interface header {
    id: number,
    overline: string | null,
    headline: string | null,
    subline: string | null,
    component: 'h1' | 'h2' | 'h3' | 'h4',
    variant?: 'h1' | 'h2' | 'h3' | 'h4',
}