import React from "react";

const Modal = ({ isOpen, onClose, trailerKey }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute w-full h-full -z-10 top-4 right-4 text-white text-2xl "
        >
          &times;
        </button>
      <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">

        {/* Trailer Video */}
        <iframe
          className="w-full h-[500px]"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;