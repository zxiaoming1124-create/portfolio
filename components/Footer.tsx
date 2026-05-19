export default function Footer() {
  return (
    <footer className="py-12 mt-32">
      <div className="max-w-5xl mx-auto px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-[13px] text-[#bbb]">© 2025 Xiaoming Zhang</p>
        <div className="flex items-center gap-6">
          <a href="mailto:zxiaoming1124@gmail.com" className="text-[13px] text-[#999] hover:text-[#111] transition-colors">Email</a>
          <a href="https://linkedin.com/in/xiaoming-zhang-7b3583301" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#999] hover:text-[#111] transition-colors">LinkedIn</a>
          <a href="#" className="text-[13px] text-[#999] hover:text-[#111] transition-colors">Resume</a>
        </div>
      </div>
    </footer>
  )
}
