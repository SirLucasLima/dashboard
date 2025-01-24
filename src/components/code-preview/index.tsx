import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

import { myTheme } from '@/config/my-theme'

import { StyledCodePreview } from './styled-code-preview'
import type { CodePreviewProps } from './types-code-preview'

export function CodePreview({ content }: CodePreviewProps) {
  const [codeHtml, setCodeHtml] = useState('')

  useEffect(() => {
    async function getTheme() {
      const html = await codeToHtml(content, {
        lang: 'markdown',
        theme: myTheme,
      })

      setCodeHtml(html)
    }
    getTheme()
  }, [content])

  return (
    <>
      <StyledCodePreview dangerouslySetInnerHTML={{ __html: codeHtml }} />
    </>
  )
}
