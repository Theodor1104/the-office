'use client'

interface MarqueeProps {
  text: string
  className?: string
}

export default function Marquee({ text, className = '' }: MarqueeProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="inline-flex animate-marquee">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="mx-8">
            {text}
          </span>
        ))}
      </div>
      <div className="inline-flex animate-marquee" aria-hidden>
        {[...Array(4)].map((_, i) => (
          <span key={i} className="mx-8">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
