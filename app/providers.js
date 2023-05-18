'use client'

import { ThemeProvider } from 'next-themes'

export function ThemeProviders({ children }) {
  return <ThemeProvider attribute='class' defaultTheme='dark'>{children}</ThemeProvider>
}