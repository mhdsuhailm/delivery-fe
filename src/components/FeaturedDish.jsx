// const FeaturedDishes = ({ menuData = [] }) => {

//   const featured = menuData.filter(item => item.bestseller);

//   if (featured.length === 0) return null;

//   return (
//     <div className="max-w-3xl mx-auto px-4 mt-6 space-y-5">

//       {featured.map((item) => (
//         <div
//           key={item._id}
//           className="flex items-center justify-between rounded-2xl p-5 bg-gradient-to-r from-[#0A5855] to-[#0E1F1E]"
//         >

//           {/* LEFT SIDE */}
//           <div className="flex-1 pr-4">

//             <h2 className="text-xl font-semibold text-[#E7D3A3] leading-tight">
//               {item.name}
//             </h2>

//             <p className="text-sm text-[#CFC6A4] mt-2 leading-relaxed max-w-xs">
//               {item.description}
//             </p>

//             {/* MOST LOVED */}
//             <div className="flex items-center gap-2 mt-3">
//               <img
//                 src="/heart.png"
//                 alt="heart"
//                 className="w-4 h-4"
//               />

//               <span className="text-sm text-[#D4AF37]">
//                 Most Loved
//               </span>
//             </div>

//           </div>

//           {/* RIGHT IMAGE */}
//           {/* RIGHT IMAGE */}
// <div className="flex-shrink-0 w-36 h-32 overflow-hidden rounded-lg">
//   <img
//     src={item.image}
//     alt={item.name}
//     className="w-full h-full object-cover"
//   />
// </div>

//         </div>
//       ))}

//     </div>
//   );
// };

// export default FeaturedDishes;
const FeaturedDishes = ({ menuData = [] }) => {

  const featured = menuData.filter((item) => item.bestseller);

  if (featured.length === 0) return null;

  return (
    <div className="flex flex-col items-center gap-5 mt-6">

      {featured.map((item) => (
        <div
          key={item._id}
          className="w-[350px] h-[200px] rounded-[16px] flex justify-between p-[16px]"
          style={{
            background: "linear-gradient(180deg, #0A5855 0%, #0E1F1E 75%)"
          }}
        >

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-between">

            {/* NAME */}
            <h2
              className="w-[139px] text-[20px] leading-[20px] font-bold"
              style={{
                fontFamily: "Playfair Display SC",
                color: "#E3C98F",
                letterSpacing: "0.5%"
              }}
            >
              {item.name}
            </h2>

            {/* DESCRIPTION */}
            <p
              className="w-[139px] text-[8px]"
              style={{
                fontFamily: "Plus Jakarta Sans",
                color: "#E3C98F",
                lineHeight: "100%"
              }}
            >
              {item.description}
            </p>

            {/* MOST LOVED */}
            <div className="flex items-center gap-2">
              <img
                src="/heart.png"
                alt="heart"
                className="w-[14px] h-[14px]"
              />

              <span
                className="text-[10px]"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  color: "#E3C98F"
                }}
              >
                Most Loved
              </span>
            </div>

          </div>

          {/* IMAGE */}
          <div className="w-[140px] h-[168px] rounded-[10px] overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      ))}

    </div>
  );
};

export default FeaturedDishes;