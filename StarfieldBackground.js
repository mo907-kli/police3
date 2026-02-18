export function StarfieldBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1]">
      <div 
        className="w-full h-full"
        style={{
          backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: '0.03'
        }}
      />
    </div>
  );
}