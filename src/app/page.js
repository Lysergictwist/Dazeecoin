'use client'; // Ensure it's a Client Component

export default function Home() {
  const handleMouseOver = (e) => {
    e.target.style.transform = 'scale(1.05)';
  };

  const handleMouseOut = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  const handleShelterClick = () => {
    alert('Redirecting to Shelter Registration...');
  };

  const handleGenericClick = (button) => {
    alert(`Redirecting to ${button}...`);
  };

  return (
    <div style={{ textAlign: 'center', padding: '0', margin: '0', fontFamily: 'Arial, sans-serif' }}>
      {/* Header Section with Black Background */}
      <div
        style={{
          backgroundColor: '#000', // Black background
          color: '#fff', // White text
          padding: '20px 0',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          borderBottom: '2px solid #87cefa',
          position: 'sticky',
          top: '0',
          zIndex: '1000',
        }}
      >
        {/* Large Register Shelter Button */}
        <button
          style={{
            backgroundColor: '#007BFF',
            color: '#fff',
            fontSize: '2rem',
            fontWeight: 'bold',
            padding: '20px 50px',
            borderRadius: '50px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.2s ease',
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handleShelterClick}
        >
          Register Your Shelter
        </button>

        {/* DZ Price and LP Price Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
            gap: '20px',
          }}
        >
          <div
            style={{
              backgroundColor: '#ffcccb',
              borderRadius: '10px',
              padding: '10px 20px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              border: '2px solid #ff7f7f',
              flex: '1',
              maxWidth: '200px',
            }}
          >
            <p style={{ margin: '0', fontWeight: 'bold', fontSize: '1rem', color: '#600' }}>
              DazeeCoin Price
            </p>
            <p style={{ margin: '0', fontSize: '1.2rem', color: '#900' }}>$0.00</p>
          </div>

          <div
            style={{
              backgroundColor: '#add8e6',
              borderRadius: '10px',
              padding: '10px 20px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              border: '2px solid #87cefa',
              flex: '1',
              maxWidth: '200px',
            }}
          >
            <p style={{ margin: '0', fontWeight: 'bold', fontSize: '1rem', color: '#004080' }}>
              Liquidity Pool
            </p>
            <p style={{ margin: '0', fontSize: '1.2rem', color: '#003060' }}>$0.00</p>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <main style={{ padding: '20px' }}>
        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Welcome to DazeeCoin</h1>
          <p style={{ fontSize: '1.5rem', color: 'gray' }}>
            Empowering pet adoption and care through blockchain technology
          </p>
        </div>

        {/* Mission Statement */}
        <section style={{ marginTop: '30px', padding: '0 20px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Mission</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.5', maxWidth: '600px', margin: '0 auto', marginBottom: '30px' }}>
            DazeeCoin is dedicated to reducing pet overpopulation by incentivizing pet adoption
            and care through blockchain technology. We aim to create a system where shelters,
            veterinarians, and pet owners are rewarded for doing what’s best for animals in need.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <button
              style={{
                backgroundColor: '#40E0D0',
                color: 'black',
                border: 'none',
                padding: '15px 30px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                borderRadius: '10px',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s ease',
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => handleGenericClick('Buy DazeeCoin')}
            >
              Buy DazeeCoin
            </button>

            <button
              style={{
                backgroundColor: '#40E0D0',
                color: 'black',
                border: 'none',
                padding: '15px 30px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                borderRadius: '10px',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s ease',
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => handleGenericClick('Roadmap')}
            >
              Roadmap
            </button>

            <button
              style={{
                backgroundColor: '#40E0D0',
                color: 'black',
                border: 'none',
                padding: '15px 30px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                borderRadius: '10px',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s ease',
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
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