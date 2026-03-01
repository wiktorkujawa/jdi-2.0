'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const DynamicCssLoader = (theme: string) =>
  dynamic(() => import(`./${theme}/CssLoader`), { ssr: false })

const StyleMapper = ({ theme }: { theme: string }) => {
  const CssLoader = DynamicCssLoader(theme)
  return React.createElement(CssLoader, null)
}

export default StyleMapper