import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SuccessModal from "./SuccessModal";

const OrderDrawer = ({
  cart,
  isOpen,
  onClose,
  addToCart,
  removeFromCart,
  token
}) => {

  const [showSuccess, setShowSuccess] = useState(false);

  const items = Object.values(cart || {});

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;

  const handleCheckout = async () => {

    const orderData = {
      customerName: "Walk-in Customer",
      phone: "9999999999",
      tableNumber: "T1",
      items
    };

    try {

      const response = await fetch(
        // "https://food-be-eyck.onrender.com/api/orders",
        "https://delivery-be-taz7.onrender.com/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(orderData)
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server error:", errorText);
        alert("Server error occurred");
        return;
      }

      const data = await response.json();
      console.log("Order saved:", data);

      onClose();
      setShowSuccess(true);

    } catch (err) {
      console.error(err);
      alert("Order failed");
    }
  };

  // if (!isOpen) return null;
  if (!isOpen && !showSuccess) return null;

  return (
    <>
      {/* ORDER SUMMARY MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative bg-white w-[320px] rounded-2xl shadow-xl p-6">

          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-red-600 font-bold">
              ORDER SUMMARY
            </h2>

            <button
              onClick={onClose}
              className="text-gray-500"
            >
              ✕
            </button>
          </div>

          {/* Items */}
          {items.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center mb-3"
            >
              <span className="text-sm text-gray-700">
                {item.name}
              </span>

              <div className="flex items-center gap-2">

                {/* Quantity */}
                <div className="flex items-center bg-[#D4AF37] text-white rounded-full px-2">

                  <button
                    onClick={() => removeFromCart(item)}
                    className="px-1"
                  >
                    <Minus size={12} />
                  </button>

                  <span className="px-2 text-sm">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => addToCart(item)}
                    className="px-1"
                  >
                    <Plus size={12} />
                  </button>

                </div>

                {/* Price */}
                <span className="text-sm font-semibold">
                  ₹{item.price * item.quantity}
                </span>

              </div>
            </div>
          ))}

          {/* Totals */}
          <div className="border-t mt-4 pt-3 text-sm">

            <div className="flex justify-between mb-1">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between mb-1">
              <span>GST (5%)</span>
              <span>₹{gst}</span>
            </div>

            <div className="flex justify-between font-bold mt-2">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-5">

            <button
              onClick={onClose}
              className="border border-red-500 text-red-500 px-4 py-1 rounded-full text-sm"
            >
              Cancel
            </button>

            <button
              onClick={handleCheckout}
              className="bg-red-500 text-white px-4 py-1 rounded-full text-sm"
            >
              Confirm
            </button>

          </div>

        </div>
      </div>

      {/* SUCCESS MODAL */}
      {/* <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      /> */}
      <SuccessModal
  isOpen={showSuccess}
  onClose={() => {
    setShowSuccess(false);
    window.location.href = "https://api.whatsapp.com/send?phone=15551456693";
  }}
/>
    </>
  );
};

export default OrderDrawer;