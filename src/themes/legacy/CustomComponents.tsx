import { Page } from "@/payload-types"
import dynamic from "next/dynamic";

const DynamicComponent = (blockType: string) =>
    dynamic(() => import(`./components/organisms/${blockType}`));

export const CustomComponents = ({ blocks }: { blocks: Page['customComponents'] }) => {
    return <>
    {blocks?.map((component) => {
        const TemplateComponent = DynamicComponent(component.blockType) as React.ComponentType<typeof component>;
        return <TemplateComponent key={component.id} {...component} />
    })}
    </>
} 