export default function Footer() {
  return (
    <footer className="py-12 mt-16 border-t border-[#f0f0f0]">
      <div className="w-full px-14 flex items-center justify-between">
        <p className="text-[13px] text-[#ccc]">© 2025 Xiaoming Zhang</p>
        <div className="flex items-center gap-6">
          <a href="mailto:zxiaoming1124@gmail.com" className="text-[13px] text-[#bbb] hover:text-[#111] transition-colors">Email</a>
          <a href="https://linkedin.com/in/xiaoming-zhang-7b3583301" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#bbb] hover:text-[#111] transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
