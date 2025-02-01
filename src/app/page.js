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
    <div style={{ textAlign: 'center', padding: '0', margin: '0', fontFamily: 'Arial, sans-serif' }}>
      {/* Fixed Header */}
      <header
        style={{
          position: 'fixed',
          top: '0',
          width: '100%',
          backgroundColor: '#fff',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          zIndex: '1000',
          padding: '10px 0',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          {/* DZ Price */}
          <div
            style={{
              backgroundColor: '#ffcccb',
              borderRadius: '10px',
              padding: '10px 20px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              border: '2px solid #ff7f7f',
            }}
          >
            <p style={{ margin: '0', fontWeight: 'bold', fontSize: '1rem', color: '#600' }}>DazeeCoin Price</p>
            <p style={{ margin: '0', fontSize: '1.2rem', color: '#900' }}>$0.00</p>
          </div>

          {/* LP Price */}
          <div
            style={{
              backgroundColor: '#add8e6',
              borderRadius: '10px',
              padding: '10px 20px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              border: '2px solid #87cefa',
            }}
          >
            <p style={{ margin: '0', fontWeight: 'bold', fontSize: '1rem', color: '#004080' }}>Liquidity Pool</p>
            <p style={{ margin: '0', fontSize: '1.2rem', color: '#003060' }}>$0.00</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ marginTop: '100px', padding: '20px' }}>
        {/* Welcome Section */}
        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Welcome to DazeeCoin</h1>
          <p style={{ fontSize: '1.5rem', color: 'gray' }}>
            Empowering pet adoption and care through blockchain technology
          </p>
        </div>

        {/* Buttons Section */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '30px' }}>
          <button
            style={{
              backgroundColor: '#B2EBF2',
              color: 'black',
              border: 'none',
              padding: '15px 30px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, transform 0.2s ease',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleClick}
          >
            Register Your Shelter
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
              transition: 'background-color 0.3s ease, transform 0.2s ease',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Learn More About Our Mission
          </button>
        </div>

        {/* Mission Statement */}
        <section style={{ marginTop: '30px', padding: '0 20px' }}>
          <h2 style={{ fontSize: '2rem' }}>Our Mission</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.5', maxWidth: '600px', margin: '0 auto' }}>
            DazeeCoin is dedicated to reducing pet overpopulation by incentivizing pet adoption
            and care through blockchain technology. We aim to create a system where shelters,
            veterinarians, and pet owners are rewarded for doing what’s best for animals in need.
          </p>
        </section>
      </main>
    </div>
  );
}