// import { useParams } from 'react-router-dom'
// import { useState } from 'react'
// import Header from '../components/Header'
// import Menu from '../components/Menu'
// import DishModal from '../components/DishModal'
// import { menuData } from '../data/menuData'
// import OrderDrawer from '../components/OrderDrawer'
// import DishCard from '../components/DishCard'
// // const MenuPage = () => {
// //   const { type } = useParams();
// //   const [selectedDish, setSelectedDish] = useState(null);

// //   const currentMenu = menuData[type] || [];

// //   return (
// //     <div className="bg-gray-100 min-h-screen">
// //       <Header mealType={type} />

// //       <Menu
// //         data={currentMenu}
// //         onSelect={setSelectedDish}
// //       />

// //       <DishModal
// //         selected={selectedDish}
// //         onClose={() => setSelectedDish(null)}
// //       />
// //     </div>
// //   );
// // };
// const MenuPage = () => {
//   const { type } = usePaarams()
//   const [selectedDish, setSelectedDish] = useState(null)

//   const currentMenu = menuData[type] || []
//   const [cart, setCart] = useState({})
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false)

//   const totalItems = Object.values(cart).reduce(
//     (sum, item) => sum + item.quantity,
//     0
//   )
//   const addToCart = item => {
//     setCart(prev => {
//       const existing = prev[item.id]

//       return {
//         ...prev,
//         [item.id]: {
//           ...item,
//           quantity: existing ? existing.quantity + 1 : 1
//         }
//       }
//     })
//   }

//   const removeFromCart = item => {
//     setCart(prev => {
//       const existing = prev[item.id]
//       if (!existing) return prev

//       if (existing.quantity === 1) {
//         const newCart = { ...prev }
//         delete newCart[item.id]
//         return newCart
//       }

//       return {
//         ...prev,
//         [item.id]: {
//           ...existing,
//           quantity: existing.quantity - 1
//         }
//       }
//     })
//   }
//   return (
//     // <div className="bg-[#05080f] min-h-screen pb-20">
//     <div className='min-h-screen pb-24 bg-[#F8F6F1]'>
//       <Header mealType={type} />

//       <div className='max-w-2xl mx-auto px-4'>
//         {/* Category Header */}
//         {/* <div className="py-6">
//           <h2 className="text-red-600 font-bold uppercase tracking-widest text-xs">Curated Selection</h2>
//           <div className="text-white text-4xl font-black">For You.</div>
//         </div> */}

//         <Menu
//           data={currentMenu}
//           onSelect={setSelectedDish}
//           cart={cart}
//           addToCart={addToCart}
//           removeFromCart={removeFromCart}
//         />
//       </div>

//       <DishModal
//         selected={selectedDish}
//         onClose={() => setSelectedDish(null)}
//       />
//       {/* <OrderDrawer
//   cart={cart}
//   isOpen={isDrawerOpen}
//   onClose={() => setIsDrawerOpen(false)}
// /> */}
//       <OrderDrawer
//         cart={cart}
//         isOpen={isDrawerOpen}
//         onClose={() => setIsDrawerOpen(false)}
//         addToCart={addToCart}
//       />

      {/* Floating Action Button for Cart */}
      {/* <div className="fixed bottom-6 right-6 left-6 z-40 sm:w-80 sm:left-auto">
        <button className="w-full bg-red-600 hover:bg-red-500 text-white py-4 rounded-2xl shadow-2xl shadow-red-900/50 flex justify-between px-8 items-center transition-transform active:scale-95">
          <span className="font-black uppercase tracking-tighter">View Order</span>
          <span className="bg-white/20 px-3 py-1 rounded-lg text-sm font-bold">4 Items</span>
        </button>
        <button className="w-full bg-[#0F172A] text-white py-4 rounded-2xl shadow-lg flex justify-between px-8 items-center hover:bg-black transition">
            <span className="font-semibold">View Order</span>
            <span className="bg-[#C8A951] text-black px-3 py-1 rounded-lg text-sm font-bold">
                4 Items
            </span>
        </button>
      </div> */}
      // <div className='fixed bottom-6 left-4 right-4 sm:right-6 sm:left-auto sm:w-80'>
      //   <button
      //     onClick={() => setIsDrawerOpen(true)}
      //     className='w-full bg-[#0F172A] text-white py-4 rounded-2xl shadow-lg flex justify-between px-6 items-center'
      //   >
      //     <span className='font-semibold'>View Order</span>
      //     {/* <span className="bg-[#C8A951] text-black px-3 py-1 rounded-lg text-sm font-bold">
      //       {Object.keys(cart).length} Items
      //       </span> */}
      //     <span className='bg-[#C8A951] text-black px-3 py-1 rounded-lg text-sm font-bold'>
      //       {totalItems} Items
      //     </span>
      //   </button>
      // </div>
    // </div>
//   )
// }

// export default MenuPage
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Header from "../components/Header";
// import Menu from "../components/Menu";
// import DishModal from "../components/DishModal";

// const MenuPage = () => {
//   const { type } = useParams();
//   const [menuData, setMenuData] = useState([]);
//   const [selectedDish, setSelectedDish] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/menu?type=${type}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setMenuData(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [type]);

//   // Group by category
//   const grouped = menuData.reduce((acc, item) => {
//     if (!acc[item.category]) {
//       acc[item.category] = [];
//     }
//     acc[item.category].push(item);
//     return acc;
//   }, {});

//   // return (

//   //   <div className="bg-[#F8F6F1] min-h-screen">
//   //     <Header mealType={type} />

//   //     <div className="max-w-3xl mx-auto px-4 py-6">

//   //       {loading && (
//   //         <p className="text-center text-gray-500">Loading menu...</p>
//   //       )}

//   //       {!loading &&
//   //         Object.keys(grouped).map((category) => (
//   //           <div key={category} className="mb-8">
//   //             <h2 className="text-2xl font-bold mb-4 text-[#0F172A]">
//   //               {category}
//   //             </h2>

//   //             {grouped[category].map((item) => (
//   //               <Menu
//   //                 key={item._id}
//   //                 item={item}
//   //                 onSelect={setSelectedDish}
//   //               />
//   //             ))}
//   //           </div>
//   //         ))}

//   //     </div>

//   //     <DishModal
//   //       selected={selectedDish}
//   //       onClose={() => setSelectedDish(null)}
//   //     />
//   //   </div>
//   // );
//   return (
//   <div className="bg-[#F8F6F1] min-h-screen">
//     <Header mealType={type} />

//     <div className="max-w-3xl mx-auto px-4 py-6">

//       {loading && (
//         <p className="text-center text-gray-500">Loading menu...</p>
//       )}

//       {!loading && (
//         <Menu
//           groupedData={grouped}
//           onSelect={setSelectedDish}
//         />
//       )}

//     </div>

//     <DishModal
//       selected={selectedDish}
//       onClose={() => setSelectedDish(null)}
//     />
    
//   </div>
// );
// };

// export default MenuPage;
import { useParams,useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import DishModal from "../components/DishModal";
import OrderDrawer from "../components/OrderDrawer";
import FeaturedDishes from "../components/FeaturedDish";

const MenuPage = () => {
  const { type } = useParams();
  const [searchParams] = useSearchParams()
const token = searchParams.get("token")

  const [menuData, setMenuData] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);
  const [loading, setLoading] = useState(true);

  const [cart, setCart] = useState({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    fetch(`https://delivery-be-taz7.onrender.com/api/menu`)
    // fetch(`http://localhost:5000/api/menu`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API RESPONSE:", data);
        setMenuData(data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [type]);

  // ✅ Group by category
  const grouped = menuData.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  // ✅ Add to Cart (IMPORTANT: use _id now)
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev[item.id];

      return {
        ...prev,
        [item.id]: {
          ...item,
          portion_id: item.portion_id,
          quantity: existing ? existing.quantity + 1 : 1,
        },
      };
    });
  };

  // ✅ Remove from Cart
  const removeFromCart = (item) => {
    setCart((prev) => {
      const existing = prev[item.id];
      if (!existing) return prev;

      if (existing.quantity === 1) {
        const updated = { ...prev };
        delete updated[item.id];
        return updated;
      }

      return {
        ...prev,
        [item.id]: {
          ...existing,
          quantity: existing.quantity - 1,
        },
      };
    });
  };

  // ✅ Total Items
  const totalItems = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    // <div className="bg-[#F8F6F1] min-h-screen pb-24">
    <div className="bg-gradient-to-b from-[#052e2b] to-[#021d1b] min-h-screen">
    <Header mealType={type} />

      <div className="max-w-3xl mx-auto px-4 py-6">

        {loading && (
          <p className="text-center text-gray-500">Loading menu...</p>
        )}

        {!loading && (
          <FeaturedDishes menuData={menuData} />
        )}

        {!loading && (
          <Menu
            groupedData={grouped}
            onSelect={setSelectedDish}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        )}

      </div>

      <DishModal
        selected={selectedDish}
        onClose={() => setSelectedDish(null)}
      />

      {/* ✅ Order Drawer */}
      <OrderDrawer
        cart={cart}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        token={token}
      />

      {/* ✅ Floating View Order Button */}
      {/* {totalItems > 0 && (
        <div className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:w-80 z-40">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="w-full bg-[#0F172A] text-white py-4 rounded-2xl shadow-lg flex justify-between px-6 items-center hover:bg-black transition"
          >
            <span className="font-semibold">View Order</span>
            <span className="bg-[#C8A951] text-black px-3 py-1 rounded-lg text-sm font-bold">
              {totalItems} Items
            </span>
          </button>
        </div>
      )} */}
      {totalItems > 0 && (
  <div className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:w-80 z-40">
    <button
      onClick={() => setIsDrawerOpen(true)}
      className="w-full bg-gradient-to-r from-[#0A5855] to-[#0E1F1E] text-white py-4 rounded-2xl shadow-lg flex justify-between px-6 items-center border border-[#C8A95155] hover:opacity-90 transition"
    >
      <span className="font-semibold">View Order</span>

      <span className="bg-[#D4AF37] text-black px-3 py-1 rounded-lg text-sm font-bold">
        {totalItems} Items
      </span>
    </button>
  </div>
)}
    </div>
  );
};

export default MenuPage;