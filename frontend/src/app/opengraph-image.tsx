import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Etornam C. Tsyawo - Food Systems Expert & Speaker';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              marginBottom: 20,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Etornam C. Tsyawo
          </div>
          <div
            style={{
              fontSize: 36,
              opacity: 0.95,
              fontWeight: '500',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Food Systems Expert & Speaker
          </div>
          <div
            style={{
              fontSize: 24,
              marginTop: 30,
              opacity: 0.9,
              maxWidth: '900px',
            }}
          >
            Specializing in Consumer Food Systems, Nutrient Optimization & Sustainable Practices
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
