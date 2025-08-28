export default function FloatingChat() {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <div className="flex flex-col gap-3">
        <a
          href="https://wa.me/302101234567"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Συνομιλία στο WhatsApp"
          className="rounded-full bg-green-500 text-white w-14 h-14 shadow-soft flex items-center justify-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300"
        >
          {/* Εικονίδιο WhatsApp */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.54 0 .24 5.3.24 11.84c0 2.1.54 4.17 1.57 6L0 24l6.29-1.64a11.8 11.8 0 0 0 5.77 1.49h.02c6.53 0 11.83-5.3 11.83-11.82 0-3.16-1.23-6.12-3.39-8.25zM12.08 21.5h-.02a9.7 9.7 0 0 1-4.95-1.35l-.35-.2-3.73.97 1-3.63-.23-.37a9.7 9.7 0 0 1-1.5-5.13c0-5.35 4.36-9.7 9.72-9.7 2.6 0 5.05 1.02 6.88 2.86a9.62 9.62 0 0 1 2.84 6.86c0 5.35-4.36 9.7-9.66 9.7zm5.32-7.27c-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.68.16-.2.3-.78.95-.96 1.14-.18.2-.36.22-.65.08-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.45-1.72-1.62-2-.17-.29-.02-.45.13-.6.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.06-.38-.02-.54-.08-.15-.67-1.64-.92-2.23-.24-.58-.49-.5-.68-.51-.18-.01-.38-.01-.58-.01-.2 0-.54.08-.82.38-.28.3-1.08 1.06-1.08 2.6 0 1.54 1.1 3.02 1.26 3.23.15.2 2.16 3.31 5.23 4.64.73.32 1.3.51 1.74.65.73.23 1.39.2 1.91.12.58-.09 1.73-.71 1.97-1.39.24-.68.24-1.26.17-1.39-.07-.13-.26-.21-.55-.36z" />
          </svg>
        </a>
        <a
          href="https://m.me/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Συνομιλία στο Messenger"
          className="rounded-full bg-blue-500 text-white w-14 h-14 shadow-soft flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
        >
          {/* Εικονίδιο Messenger */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M12 0C5.373 0 0 4.912 0 10.971c0 3.455 1.797 6.54 4.617 8.48v4.08l4.228-2.325c.93.258 1.918.4 2.955.4 6.627 0 12-4.912 12-10.971C23.8 4.912 18.627 0 12 0zm1.192 14.834l-3.098-3.31-5.96 3.31 6.51-6.97 3.064 3.31 5.994-3.31-6.51 6.97z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
