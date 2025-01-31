'use client'; // Ensure it's a Client Component

export default function Home() {
  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = '#80DEEA'; // Slightly darker shade on hover
    e.target.style.transform = 'scale(1.05)';
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = '#B2EBF2';
    e.target.style.transform = 'scale(1)';
  };

  const handleClick = () => {
    alert('Redirecting to Shelter Registration...');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', position: 'relative' }}>
      {/* DazeeCoin Price Ticker */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          backgroundColor: '#ffcccb',
          borderRadius: '15px',
          padding: '10px 20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
          border: '2px solid #ff7f7f',
        }}
      >
        <p style={{ margin: '0', fontWeight: 'bold', fontSize: '1rem', color: '#600' }}>
          DazeeCoin Price
        </p>
        <p style={{ margin: '0', fontSize: '1.2rem', color: '#900' }}>$0.00</p>
      </div>

      {/* Liquidity Pool Ticker */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          backgroundColor: '#add8e6',
          borderRadius: '15px',
          padding: '10px 20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
          border: '2px solid #87cefa',
        }}
      >
        <p style={{ margin: '0', fontWeight: 'bold', fontSize: '1rem', color: '#004080' }}>
          Liquidity Pool
        </p>
        <p style={{ margin: '0', fontSize: '1.2rem', color: '#003060' }}>$0.00</p>
      </div>

      {/* Header Section */}
      <header>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Welcome to DazeeCoin</h1>
        <p style={{ fontSize: '1.5rem', color: 'gray' }}>
          Empowering pet adoption and care through blockchain technology
        </p>

        {/* Register Shelter Button */}
        <div style={{ marginTop: '20px' }}>
          <button
            style={{
              backgroundColor: '#B2EBF2', // Lighter Tiffany Blue
              color: 'black', // Black text
              border: 'none',
              padding: '20px 40px',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              borderRadius: '50px',
              cursor: 'pointer',
              boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
              transition: 'background-color 0.3s ease, transform 0.2s ease',
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleClick}
          >
            Register Your Shelter
          </button>
        </div>
      </header>

      {/* Mission Statement */}
      <section style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '2rem' }}>Our Mission</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.5', maxWidth: '600px', margin: '0 auto' }}>
          DazeeCoin is dedicated to reducing pet overpopulation by incentivizing pet adoption
          and care through blockchain technology. We aim to create a system where shelters,
          veterinarians, and pet owners are rewarded for doing what’s best for animals in need.
        </p>
      </section>

      {/* Action Buttons Section */}
      <section style={{ marginTop: '50px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {/* Button: Buy DazeeCoin */}
          <button
            style={{
              backgroundColor: '#40E0D0', // Tiffany Blue
              color: 'black', // Black text
              border: 'none',
              padding: '15px 30px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, transform 0.2s ease',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Buy DazeeCoin
          </button>

          {/* Button: Learn More About Our Mission */}
          <button
            style={{
              backgroundColor: '#40E0D0', // Tiffany Blue
              color: 'black', // Black text
              border: 'none',
              padding: '15px 30px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, transform 0.2s ease',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Learn More About Our Mission
          </button>

          {/* Button: Roadmap and Plan */}
          <button
            style={{
              backgroundColor: '#40E0D0', // Tiffany Blue
              color: 'black', // Black text
              border: 'none',
              padding: '15px 30px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, transform 0.2s ease',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Roadmap and Plan
          </button>
        </div>
      </section>
    </div>
  );
}