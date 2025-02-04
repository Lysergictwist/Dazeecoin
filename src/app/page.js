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

        {/* About DazeeCoin */}
        <section className="mt-8 px-5">
          <h2 className="text-2xl mb-5">Why We Created DazeeCoin</h2>
          <p className="text-base leading-7 max-w-2xl mx-auto mb-8">
            DazeeCoin was created out of a deep passion for animals and a vision for how blockchain technology can
            empower shelters, pet owners, and communities to support animal welfare in a sustainable way. Too many pets
            end up in shelters, and many struggle to find homes or receive proper care due to limited funding and
            awareness. We saw an opportunity to change this by leveraging crypto incentives and decentralized support
            to make pet adoption and care more rewarding for everyone involved.
          </p>

          <h2 className="text-2xl mb-5">The Impact We Aim to Make</h2>
          <ul className="text-base leading-7 max-w-2xl mx-auto mb-8 list-disc list-inside">
            <li>✅ <strong>Encouraging Adoptions:</strong> Every adoption earns the pet owner a reward in DazeeCoin.</li>
            <li>✅ <strong>Supporting Shelters & Vets:</strong> A portion of transaction fees is allocated to registered shelters and veterinary clinics.</li>
            <li>✅ <strong>Building a Digital Paw Print:</strong> With PawPrintz, pet medical records can be stored securely and accessed privately.</li>
            <li>✅ <strong>Creating a Stronger Community:</strong> Incentives make it easier for people to connect with reputable shelters and pet owners.</li>
            <li>✅ <strong>Fueling the Future of Pet Care:</strong> Future goals include vet payment integrations, DazeeCoin loyalty programs, and gamified pet care rewards.</li>
          </ul>

          <h2 className="text-2xl mb-5">A Passion Project With Purpose</h2>
          <p className="text-base leading-7 max-w-2xl mx-auto mb-8">
            Unlike many crypto projects built purely for speculation, DazeeCoin is a passion-driven initiative designed to
            create real, lasting impact. We are committed to transparency, ethical blockchain use, and making pet care
            better for everyone. By combining technology, community, and a love for animals, we are setting out to change
            how pet adoption and care are incentivized forever.
          </p>

          <p className="text-base font-bold leading-7 max-w-2xl mx-auto mb-8 text-center">
            Join us on this journey to give pets the forever homes they deserve—one DazeeCoin at a time.
          </p>
        </section>
      </main>
    </div>
  );
}
