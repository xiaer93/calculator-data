'use client'

import React from 'react'
import { ContentNode } from '@orange-calculator/shared'

interface ContentRendererProps {
  nodes: ContentNode[]
}

export function ContentRenderer({ nodes }: ContentRendererProps) {
  if (!nodes || nodes.length === 0) {
    return null
  }

  return (
    <div className="space-y-8">
      {nodes.map((node, index) => {
        switch (node.type) {
          case 'markdown':
            return (
              <div
                key={index}
                className="prose prose-blue max-w-none"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(node.content) }}
              />
            )

          case 'component':
            // Component nodes are not implemented in MVP
            return (
              <div key={index} className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  Component nodes are not yet supported: {node.component}
                </p>
              </div>
            )

          case 'data':
            // Data nodes are not implemented in MVP
            return (
              <div key={index} className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  Data nodes are not yet supported: {node.path}
                </p>
              </div>
            )

          default:
            return null
        }
      })}
    </div>
  )
}

function renderMarkdown(content: string): string {
  // Simple markdown to HTML conversion
  // In production, use a proper markdown library like react-markdown
  let html = content

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')

  // Italic
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>')

  // Code blocks
  html = html.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')

  // Inline code
  html = html.replace(/`([^`]+)`/gim, '<code class="px-1 py-0.5 bg-gray-100 rounded text-sm">$1</code>')

  // Tables
  html = html.replace(/\|(.+)\|/gim, (match) => {
    const cells = match.split('|').filter(cell => cell.trim())
    if (cells.every(cell => cell.trim() === '---' || cell.trim().match(/^[:\-]+$/))) {
      return '' // Skip separator lines
    }
    return '<tr>' + cells.map(cell => `<td>${cell.trim()}</td>`).join('') + '</tr>'
  })
  html = html.replace(/(<tr>.*<\/tr>\n?)+/gim, '<table class="min-w-full divide-y divide-gray-200">$&</table>')

  // Line breaks
  html = html.replace(/\n\n/g, '</p><p>')
  html = '<p>' + html + '</p>'

  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/g, '')
  html = html.replace(/<p>(<h[1-6]>)/g, '$1')
  html = html.replace(/(<\/h[1-6]>)<\/p>/g, '$1')
  html = html.replace(/<p>(<table>)/g, '$1')
  html = html.replace(/(<\/table>)<\/p>/g, '$1')
  html = html.replace(/<p>(<pre>)/g, '$1')
  html = html.replace(/(<\/pre>)<\/p>/g, '$1')

  return html
}
