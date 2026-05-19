interface ImagePlaceholderProps {
  label?: string
  aspect?: string
  src?: string
  alt?: string
}

export default function ImagePlaceholder({ label, aspect = 'aspect-video', src, alt }: ImagePlaceholderProps) {
  if (src) {
    return (
      <div className={`w-full ${aspect} rounded-2xl overflow-hidden bg-[#f0f0f0]`}>
        <img src={src} alt={alt ?? label ?? ''} className="w-full h-full object-cover" />
      </div>
    )
  }
  return (
    <div className={`w-full ${aspect} rounded-2xl bg-[#f0f0f0] flex items-center justify-center`}>
      <p className="text-xs text-[#0a0a0a]/25 text-center px-4">{label ?? 'Image'}</p>
    </div>
  )
}
