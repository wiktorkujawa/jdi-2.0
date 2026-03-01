import React, { ReactNode } from 'react'

import dynamic from 'next/dynamic'
import StyleMapper from './ThemeCssLoader';

const DynamicComponent = (theme: string) => dynamic(() => import(`./${theme}/ThemeLayout`))

const DynamicTheme = ({ theme, children }: { theme: string; children: ReactNode }) => {
  return (
    <>
      <StyleMapper theme={theme} />
      {React.createElement(DynamicComponent(theme), {}, children)}
    </>
  )
}

export default DynamicTheme
