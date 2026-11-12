import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

import { buttonVariants } from '@/components/ui/button'
import { ToggleTheme } from '@/components/ui/toggle-theme'

const STORAGE_KEY = 'theme'

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
  try {
    localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
  } catch {}
}

export function SiteHeader() {
  // Unknown until mounted; the icon follows the `.dark` class on <html> meanwhile.
  const [dark, setDark] = useState<boolean>()

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link to="/" className="font-semibold">
          Lite Starter
        </Link>
        <ToggleTheme
          toggled={dark}
          className={buttonVariants({ variant: 'ghost', size: 'icon' })}
          onClick={() => {
            const next = !document.documentElement.classList.contains('dark')
            applyTheme(next)
            setDark(next)
          }}
        />
      </div>
    </header>
  )
}

/** Inline script run before paint to set the theme class and avoid a flash. */
export const themeScript = `(function(){try{var t=localStorage.getItem('${STORAGE_KEY}');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;var e=document.documentElement;e.classList.toggle('dark',d);e.style.colorScheme=d?'dark':'light'}catch(_){}})()`
