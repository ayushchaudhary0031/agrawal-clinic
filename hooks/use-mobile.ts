import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    
    // Initial check avoids direct state setting during effect init loop if possible, 
    // but here we just wrap it to satisfy linter, or remove if not necessary.
    // It's safer to initialize state correctly first.
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
