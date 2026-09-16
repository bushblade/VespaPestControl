function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** Render a paragraph string with **bold** and [label](url) link support to safe HTML. */
export function renderInline(text: string): string {
  const escaped = escapeHtml(text)
  const withLinks = escaped.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener">$1</a>',
  )
  return withLinks.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
}
