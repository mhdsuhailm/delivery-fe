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

const Menu = ({
  groupedData = {},
  onSelect,
  cart,
  addToCart,
  removeFromCart
}) => {
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
            />
          ))}

        </div>
      ))}
    </div>
  );
};

export default Menu;