'use client'; // Ensure it's a Client Component

export default function Home() {
  const handleMouseOver = (e) => {
    e.target.classList.add('scale-105');
  };

  const handleMouseOut = (e) => {
    e.target.classList.remove('scale-105');
  };

  const handleShelterClick = () => {
    alert('Redirecting to Shelter Registration...');
  };

  const handleGenericClick = (button) => {
    alert(`Redirecting to ${button}...`);
  };

  return (
    <div className="text-center p-0 m-0 font-sans">
      {/* Header Section with Black Background */}
      <div className="bg-black text-white py-5 shadow-md border-b-2 border-blue-300 sticky top-0 z-50">
        {/* Large Register Shelter Button */}
        <button
          className="bg-blue-500 text-white text-2xl font-bold py-5 px-10 rounded-full shadow-lg hover:scale-105 transition-transform"
          onClick={handleShelterClick}
        >
          Register Your Shelter
        </button>

        {/* DZ Price and LP Price Buttons */}
        <div className="flex justify-center items-center mt-5 gap-5">
          <div className="bg-red-100 rounded-md p-4 shadow-md border-2 border-red-300 flex-1 max-w-xs">
            <p className="m-0 font-bold text-sm text-red-800">DazeeCoin Price</p>
            <p className="m-0 text-lg text-red-900">$0.00</p>
          </div>

          <div className="bg-blue-100 rounded-md p-4 shadow-md border-2 border-blue-300 flex-1 max-w-xs">
            <p className="m-0 font-bold text-sm text-blue-800">Liquidity Pool</p>
            <p className="m-0 text-lg text-blue-900">$0.00</p>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <main className="p-5">
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Welcome to DazeeCoin</h1>
          <p className="text-lg text-gray-600">
            Empowering pet adoption and care through blockchain technology
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mt-8 px-5">
          <h2 className="text-2xl mb-5">Our Mission</h2>
          <p className="text-base leading-7 max-w-2xl mx-auto mb-8">
            DazeeCoin is dedicated to reducing pet overpopulation by incentivizing pet adoption
            and care through blockchain technology. We aim to create a system where shelters,
            veterinarians, and pet owners are rewarded for doing what’s best for animals in need.
          </p>

          {/* Action Buttons */}
          <div className="flex justify-center gap-5 flex-wrap">
            <button
              className="bg-teal-400 text-black border-none py-4 px-6 text-lg font-bold rounded-lg shadow-md hover:scale-105 transition-transform"
              onClick={() => handleGenericClick('Buy DazeeCoin')}
            >
              Buy DazeeCoin
            </button>

            <button
              className="bg-teal-400 text-black border-none py-4 px-6 text-lg font-bold rounded-lg shadow-md hover:scale-105 transition-transform"
              onClick={() => handleGenericClick('Roadmap')}
            >
              Roadmap
            </button>

            <button
              className="bg-teal-400 text-black border-none py-4 px-6 text-lg font-bold rounded-lg shadow-md hover:scale-105 transition-transform"
              onClick={() => handleGenericClick('Our Story')}
            >
              Our Story
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
