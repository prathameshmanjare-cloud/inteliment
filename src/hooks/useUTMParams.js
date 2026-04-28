import { useEffect, useRef } from 'react'

export function useUTMParams() {
  const params = useRef({})

  useEffect(() => {
    const stored = sessionStorage.getItem('utm_params')
    if (stored) {
      params.current = JSON.parse(stored)
      return
    }

    const search = new URLSearchParams(window.location.search)
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
    const captured = {}

    utmKeys.forEach((key) => {
      const val = search.get(key)
      if (val) captured[key] = val
    })

    if (Object.keys(captured).length > 0) {
      params.current = captured
      sessionStorage.setItem('utm_params', JSON.stringify(captured))
    }
  }, [])

  return params.current
}
