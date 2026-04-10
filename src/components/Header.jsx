// const Header = ({ mealType }) => {
//   return (
//     <div className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#E5E7EB]">
//       <div className="max-w-3xl mx-auto px-4 py-6 text-center">
//         <h1 className="text-3xl font-bold tracking-wide text-[#0F172A]">
//           Hotel <span className="text-[#C8A951]">Crescent</span>
//         </h1>

//         <p className="text-xs uppercase tracking-[0.4em] text-[#C8A951] mt-2 font-semibold">
//           {mealType || "Menu"}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Header;
const Header = ({ mealType }) => {
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-b from-[#0C3B36] to-[#021E1B] pt-8 pb-6">

      <div className="max-w-3xl mx-auto px-4 text-center">

        {/* HOTEL LOGO */}
        <img
          src="/logo.png"
          alt="Crescent Restaurant"
          className="mx-auto w-40"
        />

        {/* TAGLINE */}
        <p className="text-xs text-[#CFC6A4] mt-2 tracking-wide">
          An Icon of Timeless Taste in Chennai
        </p>

        {/* TITLE WITH LINES */}
        <div className="flex items-center justify-center gap-4 mt-6">

          {/* LEFT LINE */}
          <img
            src="/line1.png"
            alt="line"
            className="w-16 opacity-80"
          />

          {/* MEAL TYPE */}
          <h2 className="text-1xl font-semibold text-[#D4AF37] tracking-widest"
          style={{ fontFamily: "Playfair Display SC", lineHeight: "16px" }}
>
            {mealType?.toUpperCase()} FEAST
          </h2>

          {/* RIGHT LINE */}
          <img
            src="/line1.png"
            alt="line"
            className="w-16 opacity-80 rotate-180"
          />

        </div>

      </div>
    </div>
  );
};

export default Header;