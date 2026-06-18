function formatExplanation(text) {
  if (!text) return '';
  if (text.includes('<p>') || text.includes('<ul>') || text.includes('<h4>')) return text;
  const blocks = text.split(/\n{2,}/);
  return blocks.map((b) => {
    b = b.trim();
    if (!b) return '';
    const lines = b.split('\n');
    if (lines.every((l) => /^[-•]\s/.test(l.trim()))) {
      const items = lines.map((l) => {
        const content = l.replace(/^[-•]\s*/, '');
        return `<li>${highlightCode(content)}</li>`;
      }).join('');
      return `<ul>${items}</ul>`;
    }
    if (lines.every((l) => /^\d+[.)]\s/.test(l.trim()))) {
      const items = lines.map((l) => {
        const content = l.replace(/^\d+[.)]\s*/, '');
        return `<li>${highlightCode(content)}</li>`;
      }).join('');
      return `<ol>${items}</ol>`;
    }
    return `<p>${lines.map((l) => highlightCode(l)).join('<br>')}</p>`;
  }).join('');
}

function highlightCode(text) {
  return text
    .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
    .replace(/(&lt;\/?[\w-]+[\s\S]*?&gt;)/g, '<code class="inline-code">$1</code>')
    .replace(/(&amp;[\w#]+;)/g, '<code class="inline-code">$1</code>');
}

export default function RichExplanation({ text, lang }) {
  const html = formatExplanation(text);
  return (
    <div
      className="rich-explanation space-y-4  sm:text-lg leading-relaxed sm:leading-loose"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}