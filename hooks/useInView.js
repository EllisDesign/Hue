
// Dependencies
import { useEffect, useState } from 'react'

// Hook
export default function useInView (ref, opts) {
  const [ isRefInView, setIsRefInView ] = useState(false)

  useEffect( () => {
    const observerCb = ([ entry ]) => setIsRefInView(entry.isIntersecting)
    const observer = new IntersectionObserver(observerCb, opts)

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return isRefInView
}
