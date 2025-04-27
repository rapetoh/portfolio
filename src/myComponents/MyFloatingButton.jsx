import { useState } from 'react';
import { MessageCircle } from 'lucide-react'; // optional, for a nice icon

const FloatingButton = () => {
  return (
    <div className="fixed bottom-5 right-5">
      <button
        onClick={() => window.location.href = "#blog"} // or any link you want
        className="flex items-center gap-2 bg-[#599db0] hover:bg-[#57c6e5] text-white text px-4 py-3 rounded-full shadow-lg"
      >
                Behind the code
      </button>
    </div>
  );
};

export default FloatingButton;
