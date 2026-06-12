import Link from 'next/link';
import { landings } from '@/lib/landings';

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#0D0D0D',
        color: '#F5F0E8',
        padding: 'clamp(48px, 8vw, 96px) clamp(24px, 5vw, 64px)',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <p
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#EA580C',
            marginBottom: 16,
          }}
        >
          HypeX
        </p>
        <h1
          style={{
            fontSize: 'clamp(32px, 6vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Landing Pages
        </h1>
        <p style={{ color: 'rgba(245,240,232,0.55)', marginBottom: 40, lineHeight: 1.6 }}>
          Select an industry vertical to view the LeadMatrix / Axiom OS landing page.
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
          {landings.map((landing) => (
            <li key={landing.slug}>
              <Link
                href={landing.href}
                style={{
                  display: 'block',
                  padding: '20px 24px',
                  background: '#181818',
                  border: '1px solid rgba(234,88,12,0.2)',
                  borderRadius: 12,
                  color: '#F5F0E8',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
              >
                {landing.title.replace(/ \| HypeX$/, '').replace(/ — HypeX$/, '')}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
