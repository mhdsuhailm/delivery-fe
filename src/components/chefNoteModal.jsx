const ChefNoteModal = ({ selected, onClose }) => {
  if (!selected) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#0E3B36] rounded-3xl max-w-md w-full shadow-2xl border border-[#C8A95133] p-6">

        <h2 className="text-2xl font-bold text-[#F5E6C5]">
          Chef’s Note
        </h2>

        <p className="text-[#CFC6A4] mt-4">
          {selected.chef_note || "No instructions available"}
        </p>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-[#D4AF37] text-black py-3 rounded-xl font-semibold"
        >
          Close
        </button>

      </div>
    </div>
  );
};

export default ChefNoteModal;