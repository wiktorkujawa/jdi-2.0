import { Page } from "@/payload-types";

export interface CustomPage {
    id?: string | null;
    title?: string | null;
    slug?: string | null;
  }


type CustomComponents = NonNullable<Page['customComponents']>;
export type BlockProps<T extends CustomComponents[number]['blockType']> = Extract<CustomComponents[number], { blockType: T }>;