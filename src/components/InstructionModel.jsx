import { useState } from "react";

const InstructionModal = ({ selected, onClose, onSubmit }) => {
  const [text, setText] = useState("");

  if (!selected) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-[#0E3B36] rounded-2xl p-6 w-full max-w-md">

        <h2 className="text-xl text-[#F5E6C5] font-bold">
          Special Instructions
        </h2>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your instruction for chef..."
          className="w-full mt-4 p-3 rounded-lg bg-black text-white"
        />

        <button
          onClick={() => {
            onSubmit(selected, text);
            onClose();
          }}
          className="mt-4 w-full bg-[#D4AF37] text-black py-2 rounded-lg"
        >
          Submit
        </button>

        <button
          onClick={onClose}
          className="mt-2 w-full text-white"
        >
          Cancel
        </button>

      </div>
    </div>
  );
};
export default InstructionModal;