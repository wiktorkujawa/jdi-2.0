import dynamic from 'next/dynamic'
import React from 'react'
import { Page } from '@/payload-types'

const DynamicTemplate = (theme: string, templateType: string) =>
    dynamic(() => import(`./${theme}/components/templates/${templateType}`));
  
const DynamicTemplateComponent = ({ 
    theme, 
    templateType, 
    data 
}: { 
    theme: string, 
    templateType: string, 
    data: Page 
}) => {
    const TemplateComponent = DynamicTemplate(theme, templateType) as React.ComponentType<{ data: Page }>;
    return <TemplateComponent data={data} />;
};

export default DynamicTemplateComponent; 