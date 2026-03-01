'use client'

import { useEffect } from 'react'

import './css/style.css'

export default function CssLoader() {
  useEffect(() => {
    document.body.dataset.themeStylesReady = 'true'
  }, [])
  return null
}