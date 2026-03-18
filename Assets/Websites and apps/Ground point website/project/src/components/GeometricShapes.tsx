function GeometricShapes() {
  return (
    <>
      <div className="absolute top-1/4 left-12 animate-float">
        <div className="w-16 h-16 border border-white rotate-45 opacity-30"></div>
      </div>

      <div className="absolute top-1/3 right-24 animate-float-delayed">
        <div className="w-12 h-12 border border-white opacity-20"></div>
      </div>

      <div className="absolute bottom-1/4 left-1/4 animate-pulse">
        <div className="w-8 h-8 border border-white rotate-45 opacity-25"></div>
      </div>

      <div className="absolute top-1/2 right-1/3 animate-spin-slow">
        <div className="w-20 h-20 border border-white rotate-45 opacity-15"></div>
      </div>
    </>
  );
}

export default GeometricShapes;
