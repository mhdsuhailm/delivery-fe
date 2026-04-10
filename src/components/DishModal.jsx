// const DishModal = ({ selected, onClose }) => {
//   if (!selected) return null;

//   return (
//     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden">
//         <img
//           src={selected.image}
//           alt={selected.name}
//           className="w-full h-56 object-cover"
//         />

//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-[#0F172A]">
//             {selected.name}
//           </h2>

//           <p className="text-gray-600 mt-2">
//             {selected.description}
//           </p>

//           <p className="text-xl font-bold text-[#C8A951] mt-4">
//             ₹{selected.price}
//           </p>

//           <button
//             onClick={onClose}
//             className="mt-6 w-full bg-[#0F172A] text-white py-3 rounded-xl font-semibold hover:bg-black transition"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DishModal;
const DishModal = ({ selected, onClose }) => {
  if (!selected) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#0E3B36] rounded-3xl max-w-md w-full shadow-2xl border border-[#C8A95133] overflow-hidden">

        <img
          src={selected.image}
          alt={selected.name}
          className="w-full h-56 object-cover"
        />

        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#F5E6C5]">
            {selected.name}
          </h2>

          <p className="text-[#CFC6A4] mt-2">
            {selected.description}
          </p>

          <p className="text-xl font-bold text-[#D4AF37] mt-4">
            ₹{selected.price}
          </p>

          <button
            onClick={onClose}
            className="mt-6 w-full bg-[#D4AF37] text-black py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default DishModal;