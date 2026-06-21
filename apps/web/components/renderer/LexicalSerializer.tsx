import React from 'react'

interface LexicalNode {
  type: string
  text?: string
  value?: number
  format?: number | string
  style?: string
  url?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fields?: any
  children?: LexicalNode[]
  [k: string]: unknown
}

interface LexicalSerializerProps {
  content: { root: LexicalNode } | null | undefined
}

export function LexicalSerializer({ content }: LexicalSerializerProps) {
  if (!content?.root?.children) return null

  return (
    <>
      {content.root.children.map((node, index) => (
        <LexicalNodeRenderer key={index} node={node} />
      ))}
    </>
  )
}

function LexicalNodeRenderer({ node }: { node: LexicalNode }) {
  if (!node) return null

  // Handle text nodes
  if (node.type === 'text') {
    let text: React.ReactNode = node.text || ''
    
    // Simple formatting based on bitmask (Lexical uses format bits)
    // 1: bold, 2: italic, 4: strikethrough, 8: underline, 16: code
    const format = typeof node.format === 'number' ? node.format : 0
    
    if (format & 1) text = <strong key="bold">{text}</strong>
    if (format & 2) text = <em key="italic">{text}</em>
    if (format & 4) text = <s key="strike">{text}</s>
    if (format & 8) text = <u key="underline">{text}</u>
    if (format & 16) text = <code key="code">{text}</code>
    
    return <>{text}</>
  }

  // Handle elements
  switch (node.type) {
    case 'paragraph':
      return (
        <p>
          {node.children?.map((child, i) => (
            <LexicalNodeRenderer key={i} node={child} />
          ))}
        </p>
      )
    case 'heading':
      const Tag = (node.tag || 'h2') as React.ElementType
      return (
        <Tag>
          {node.children?.map((child, i) => (
            <LexicalNodeRenderer key={i} node={child} />
          ))}
        </Tag>
      )
    case 'list':
      const ListTag = node.listType === 'number' ? 'ol' : 'ul'
      const isChecklist = node.listType === 'check'
      return (
        <ListTag className={isChecklist ? 'list-none pl-0' : ''}>
          {node.children?.map((child, i) => (
            <LexicalNodeRenderer key={i} node={{ ...child, isChecklist }} />
          ))}
        </ListTag>
      )
    case 'listitem':
      if (node.isChecklist || node.checked !== undefined) {
        return (
          <li className="flex items-start gap-3 my-2">
            <input 
              type="checkbox" 
              checked={!!node.checked} 
              readOnly 
              className="mt-1.5 w-4 h-4 rounded border-gray-300 text-teal focus:ring-teal flex-shrink-0"
            />
            <span className="flex-1">
              {node.children?.map((child, i) => (
                <LexicalNodeRenderer key={i} node={child} />
              ))}
            </span>
          </li>
        )
      }
      return (
        <li>
          {node.children?.map((child, i) => (
            <LexicalNodeRenderer key={i} node={child} />
          ))}
        </li>
      )
    case 'link':
    case 'autolink':
      let linkHref = node.fields?.url || node.url || '#'
      if (node.fields?.linkType === 'internal' && node.fields?.doc?.value) {
        const docValue = node.fields.doc.value
        const relationTo = node.fields.doc.relationTo
        if (relationTo === 'blogs') linkHref = `/blogs/${docValue.slug}`
        else if (relationTo === 'services') linkHref = `/services/${docValue.slug}`
        else if (relationTo === 'pages') linkHref = `/${docValue.slug}`
      }
      return (
        <a href={linkHref} target={node.fields?.newTab ? '_blank' : '_self'} rel={node.fields?.newTab ? 'noopener noreferrer' : ''}>
          {node.children?.map((child, i) => (
            <LexicalNodeRenderer key={i} node={child} />
          ))}
        </a>
      )
    case 'relationship':
      if (!node.value || typeof node.value !== 'object') return null
      const relTo = node.relationTo as string
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const relData = node.value as any
      
      let relHref = '#'
      if (relTo === 'blogs') relHref = `/blogs/${relData.slug}`
      else if (relTo === 'services') relHref = `/services/${relData.slug}`
      else if (relTo === 'pages') relHref = `/${relData.slug}`
      else relHref = `/${relData.slug || ''}`
      
      return (
        <div className="my-8 p-6 border border-border/60 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors group">
          <a href={relHref} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 no-underline !text-text-dark group-hover:!text-teal">
             <div className="flex-1">
                <p className="!m-0 !font-bold !text-lg">{relData.title || relData.name || 'Related Content'}</p>
                {relData.category && <p className="!m-0 mt-2 text-sm text-text-muted uppercase tracking-wider font-semibold !text-teal">{relData.category}</p>}
             </div>
             <span className="!text-teal text-sm font-medium whitespace-nowrap bg-white px-4 py-2 rounded-full border border-border/50 group-hover:border-teal/30">Read &rarr;</span>
          </a>
        </div>
      )
    case 'quote':
      return (
        <blockquote>
          {node.children?.map((child, i) => (
            <LexicalNodeRenderer key={i} node={child} />
          ))}
        </blockquote>
      )
    default:
      // Fallback for unknown nodes that have children
      if (node.children) {
        return (
          <>
            {node.children.map((child, i) => (
              <LexicalNodeRenderer key={i} node={child} />
            ))}
          </>
        )
      }
      return null
  }
}
