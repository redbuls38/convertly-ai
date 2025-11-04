export default function Hero() {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '70vh',
      backgroundColor: '#f5f5f5',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Convertly.ai</h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '600px', marginBottom: '2rem' }}>
        Create AI-powered product pages, headlines, and descriptions in seconds.
      </p>
      <button style={{
        padding: '1rem 2rem',
        fontSize: '1rem',
        backgroundColor: '#ff4d4d',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        Try Free
      </button>
    </section>
  );
}
