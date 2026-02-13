import React from 'react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { RichText } from '@payloadcms/richtext-lexical/react'

type Props = {
  data: SerializedEditorState
  className?: string
}

export function RichTextContent({ data, className = '' }: Props) {
  return (
    <div className={`rich-text ${className}`}>
      <RichText data={data} />
    </div>
  )
}
