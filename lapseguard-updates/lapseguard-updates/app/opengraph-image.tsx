import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'LapseGuard \u2014 Never miss a license, permit, or insurance renewal';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background:
            'radial-gradient(circle at 15% 10%, rgba(41,84,255,0.35), transparent 55%), #0B0E14',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: '#2954FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path d="M12 2 4 5v6c0 5 3.4 8.6 8 11 4.6-2.4 8-6 8-11V5l-8-3Z" fill="white" />
            </svg>
          </div>
          <span style={{ color: 'white', fontSize: 32, fontWeight: 700 }}>LapseGuard</span>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 60,
            fontWeight: 700,
            color: 'white',
            lineHeight: 1.15,
            maxWidth: 920,
          }}
        >
          Never miss a renewal. Ever again.
        </div>
        <div style={{ marginTop: 24, fontSize: 26, color: '#AEB4C4', maxWidth: 820 }}>
          Licenses, certifications, permits, and insurance — tracked automatically.
        </div>
      </div>
    ),
    { ...size }
  );
}
