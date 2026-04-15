// import DishCard from "./DishCard";

// const Menu = ({
//   groupedData = {},
//   onSelect,
//   cart,
//   addToCart,
//   removeFromCart
// }) => {
//   return (
//     <div className="p-4">
//       {Object.keys(groupedData).map((category) => (
//         <div key={category} className="mb-6">
//           <h2 className="text-2xl font-bold text-[#0F172A] mb-6 border-l-4 border-[#C8A951] pl-4">
//             {category}
//           </h2>

//           {groupedData[category].map((item) => (
//             <DishCard
//               key={item._id}
//               item={item}
//               onSelect={onSelect}
//               cart={cart}
//               addToCart={addToCart}
//               removeFromCart={removeFromCart}
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Menu;
import DishCard from "./DishCard";
import { useState } from "react";
import ChefNoteModal from "./chefNoteModal";
import InstructionModal from "./InstructionModel";

const Menu = ({
  groupedData = {},
  onSelect,
  cart,
  addToCart,
  removeFromCart,
  addInstruction
}) => {
  const [selectedDish, setSelectedDish] = useState(null);
const [showChefNote, setShowChefNote] = useState(false);
const [showInstruction, setShowInstruction] = useState(false);
const handleInstructionSubmit = async (dish, text) => {
  try {
    await fetch("/api/order-items/instruction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        itemId: dish.id,
        special_instruction: text,
      }),
    });
  } catch (err) {
    console.log(err);
  }
};
  return (
    <div className="p-4">
      {Object.keys(groupedData).map((category) => (
        <div key={category} className="mb-8">

          <h2 className="text-xl font-semibold text-[#E7D3A3]  border-b border-[#C8A95133] pb-2">
            {category}
          </h2>

          {groupedData[category].map((item) => (
            <DishCard
              key={item._id}
              item={item}
              onSelect={onSelect}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              onShowChefNote={(dish) => {
                setSelectedDish(dish);
                setShowChefNote(true);}}
              addInstruction={addInstruction} 
              onShowInstruction={(dish) => {
                setSelectedDish(dish);
                setShowInstruction(true);
              }}
            />
          ))}

        </div>
      ))}
      {showChefNote && (
        <ChefNoteModal
          selected={selectedDish}
          onClose={() => setShowChefNote(false)}
        />
      )}
      {showInstruction && (
  <InstructionModal
    selected={selectedDish}
    onClose={() => setShowInstruction(false)}
    onSubmit={handleInstructionSubmit}
  />
)}
    </div>
  );
};

export default Menu;