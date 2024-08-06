
// Dependencies
import { useEffect, useState } from 'react'

// Hook
export default function useReveal (ref, opts) {
  const [ isRefInView, setIsRefInView ] = useState(false)

  useEffect( () => {
    const observerCb = ([ entry ]) => {
      if ( entry.isIntersecting && !isRefInView ) {
        setIsRefInView(true)
        observer.disconnect()
      }
    }
    const observer = new IntersectionObserver(observerCb, opts)

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return isRefInView
}
