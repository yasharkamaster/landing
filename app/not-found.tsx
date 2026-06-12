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
        background: '#0D0D0D',
        color: '#F5F0E8',
        gap: 16,
      }}
    >
      <h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1>
      <p style={{ color: 'rgba(245,240,232,0.55)' }}>Page not found</p>
      <Link href="/" style={{ color: '#EA580C', fontWeight: 600 }}>
        Back to landing pages
      </Link>
    </main>
  );
}
