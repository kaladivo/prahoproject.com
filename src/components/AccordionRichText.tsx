'use client'

import { useEffect, useRef } from 'react'

type Props = {
  children: React.ReactNode
}

export function AccordionRichText({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const richTextDiv = container.querySelector('.rich-text')
    if (!richTextDiv) return

    const nodes = Array.from(richTextDiv.childNodes)
    const sections: { heading: HTMLElement; content: Node[] }[] = []
    let currentContent: Node[] = []

    for (const node of nodes) {
      if (
        node instanceof HTMLElement &&
        (node.tagName === 'H2' || node.tagName === 'H3')
      ) {
        if (sections.length > 0) {
          sections[sections.length - 1].content = currentContent
        }
        sections.push({ heading: node, content: [] })
        currentContent = []
      } else if (sections.length > 0) {
        currentContent.push(node)
      }
    }

    if (sections.length > 0) {
      sections[sections.length - 1].content = currentContent
    }

    // Only transform if there are enough sections for accordion to make sense
    if (sections.length < 2) return

    // Clear the rich text container
    richTextDiv.innerHTML = ''

    for (const section of sections) {
      const details = document.createElement('details')
      const summary = document.createElement('summary')
      summary.textContent = section.heading.textContent
      details.appendChild(summary)

      const contentDiv = document.createElement('div')
      for (const node of section.content) {
        contentDiv.appendChild(node)
      }
      details.appendChild(contentDiv)
      richTextDiv.appendChild(details)
    }
  }, [])

  return <div ref={containerRef}>{children}</div>
}
