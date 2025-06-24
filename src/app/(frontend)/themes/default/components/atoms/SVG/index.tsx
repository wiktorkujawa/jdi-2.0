import { FC, SVGProps } from 'react'
import dynamic from 'next/dynamic'

interface IconsClasses {
  [key: string]: string;
}

const iconsClasses: IconsClasses = {
  linkedin: 'fill-linkedin',
  github: 'dark:fill-white'
};

const DynamicComponent = (name: string) => dynamic(() => import(`@/public/assets/svg/${name}.svg`));

const SVG: FC<SVGProps<SVGSVGElement> & { name: string }> = ({ name, className, ...props }) => {
  const Icon = DynamicComponent(name) as React.ComponentType<SVGProps<SVGSVGElement>>
  return (
    <Icon {...props} className={`${iconsClasses[name] || ''} ${className || ''}`} />
  )
}

export default SVG