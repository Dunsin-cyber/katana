import React, { useState, useEffect } from "react";
import { useClient } from "@/context";
import { projects } from "./index";

const Modal = () => {
  const { isModalOpen, setIsModalOpen, activeId } = useClient();
  const [sliceCount, setSliceCount] = useState(1);
  const [slices, setSlices] = useState([]);
  const [pricePerSlice, setPricePerSlice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(100); // Example price
  const [imageSlices, setImageSlices] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const data = projects.filter((p) => p.id === activeId);

  useEffect(() => {
    if (isModalOpen) {
      loadImageSlices(data[0].src, sliceCount);
    }
  }, [isModalOpen, sliceCount]);

  const loadImageSlices = (imageSrc, count) => {
    const img = new Image();
    img.src = `/dummyPic/${imageSrc}`;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const sliceWidth = img.width / count;
      const slicesArray = [];

      for (let i = 0; i < count; i++) {
        canvas.width = sliceWidth;
        canvas.height = img.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img,
          i * sliceWidth,
          0,
          sliceWidth,
          img.height,
          0,
          0,
          sliceWidth,
          img.height
        );

        slicesArray.push(canvas.toDataURL());
      }

      setImageSlices(slicesArray);
      setImageLoaded(true);
    };
  };

  const handleSlice = () => {
    const calculatedSlices = Array.from({ length: sliceCount }, (_, i) => ({
      id: i + 1,
      price: Number((totalPrice / sliceCount).toFixed(2)),
    }));
    setSlices(calculatedSlices);
  };

  return (
    <div className="relative">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gradient-to-br from-[#2C120D] to-[#6E3B3B] text-white rounded-lg shadow-lg p-8 w-[90%] max-w-lg">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{data[0].title}</h2>
              <button
                className="text-gray-300 hover:text-white transition"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="mb-6">
              <p className="mb-4">{data[0].description}</p>
              <img
                src={`/dummyPic/${data[0]?.src}`}
                alt={data[0].title}
                className="rounded-md shadow-md w-full"
              />
              <a
                href={data[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD700] underline hover:text-white"
              >
                Visit {data[0].title}
              </a>
            </div>

            {/* Slicing Options */}
            <div className="mb-6">
              <label className="block mb-2 text-sm">Number of Slices:</label>
              <input
                type="number"
                min="1"
                className="w-full p-2 rounded-md text-white"
                value={sliceCount}
                onChange={(e) => setSliceCount(parseInt(e.target.value) || 1)}
              />
              <button
                onClick={handleSlice}
                className="bg-[#FFD700] text-black py-2 px-4 mt-4 rounded-full hover:scale-105 transition"
              >
                Slice It
              </button>
            </div>

            {/* Sliced Pieces */}
            {imageLoaded && slices.length > 0 && (
              <div>
                <h3 className="text-lg font-bold mb-2">Sliced Pieces:</h3>
                <div className="grid grid-cols-2 gap-4">
                  {slices.map((slice, index) => (
                    <div
                      key={slice.id}
                      className="bg-[#F0E68C] text-black p-4 rounded-md text-center"
                    >
                      <img
                        src={imageSlices[index]}
                        alt={`Slice ${slice.id}`}
                        className="mb-2"
                      />
                      <p>Slice {slice.id}</p>
                      <p>Price: ${slice.price}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4">
                  Price per slice: <strong>${pricePerSlice}</strong>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
