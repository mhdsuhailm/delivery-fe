const SuccessModal = ({ isOpen, onClose }) => {
if (!isOpen) return null;
const handleClose = () => {
  window.location.href = "https://api.whatsapp.com/send?phone=918072294374"
}
return ( <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm"> <div className="bg-white rounded-2xl w-80 p-6 shadow-xl text-center relative">


    <button
      onClick={onClose}
      className="absolute right-4 top-3 text-gray-500"
    >
      ✕
    </button>

    <h2 className="text-red-600 font-semibold text-lg mb-3">
      SUCCESS
    </h2>

    <p className="text-gray-600 mb-5">
      Your Order has been Placed
    </p>

    <div className="flex justify-center">
      <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center">
        <span className="text-green-500 text-3xl">✓</span>
      </div>
    </div>

  </div>
</div>

);
};

export default SuccessModal;
