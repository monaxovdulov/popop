export const Loading = () => {
  return (
    <div className="min-h-dvh w-full flex flex-col items-center justify-center gap-12 bg-background">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
        OpaTon
      </h1>
      
      <div className="flex gap-4">
        {['woman', 'dog', 'man'].map((char) => (
          <div 
            key={char}
            className="w-24 h-24 relative animate-pulse"
          >
            <img
              src={`/${char}.png`}
              alt={char}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}; 