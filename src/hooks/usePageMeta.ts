import { useEffect } from 'react'

interface PageMeta {
  title: string
  description: string
  image?: string
}

const setMeta = (attribute: 'name' | 'property', key: string, value: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', value)
}

export function usePageMeta({ title, description, image }: PageMeta) {
  useEffect(() => {
    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    if (image) {
      setMeta('property', 'og:image', image)
      setMeta('name', 'twitter:image', image)
    }
  }, [title, description, image])
}
