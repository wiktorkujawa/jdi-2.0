import React, { ReactNode } from 'react'

import dynamic from 'next/dynamic'

const DynamicComponent = (theme: string) => dynamic(() => import(`./${theme}/ThemeLayout`))

const DynamicTheme = ({ theme, children }: { theme: string; children: ReactNode }) => {
  return React.createElement(DynamicComponent(theme), {}, children)
}

export default DynamicTheme
