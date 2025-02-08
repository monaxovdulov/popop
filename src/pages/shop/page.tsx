export const ShopPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 space-y-4">
        <h1 className="text-2xl font-bold text-white">Coming soon...</h1>
        <p className="text-white/60">We are working on an update.</p>
        <button 
          onClick={() => window.location.reload()}
          className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto hover:bg-purple-500 active:bg-purple-700 transition-colors"
        >
          <svg 
            className="w-8 h-8 text-white" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 12a9 9 0 01-9 9" />
            <path d="M3 12a9 9 0 019-9" />
            <path d="M12 21a9 9 0 01-9-9" />
            <path d="M12 3a9 9 0 019 9" />
          </svg>
        </button>
      </div>
    </div>
  );
}; 