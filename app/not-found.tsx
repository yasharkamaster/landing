import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000000',
        color: '#FFFFFF',
        gap: 16,
      }}
    >
      <h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1>
      <p style={{ color: 'rgba(255,255,255,0.55)' }}>Page not found</p>
      <Link href="/" style={{ color: '#F6350D', fontWeight: 600 }}>
        Back to landing pages
      </Link>
    </main>
  );
}
