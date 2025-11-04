import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Generate AI-powered product pages in seconds</h2>
        <p>Try Convertly.ai free — create headlines, descriptions, and full landing pages with one click.</p>
        <button style={{ padding: '1rem 2rem', marginTop: '1rem' }}>Try 3 free generations</button>
      </section>
    </div>
  );
}
