import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Speaking Services - Etornam C. Tsyawo';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

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
              fontSize: 64,
              fontWeight: 'bold',
              marginBottom: 20,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Speaking Services
          </div>
          <div
            style={{
              fontSize: 32,
              opacity: 0.95,
              fontWeight: '500',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              marginBottom: 30,
            }}
          >
            Etornam C. Tsyawo
          </div>
          <div
            style={{
              fontSize: 22,
              opacity: 0.9,
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            Expert speaker on Food Systems Transformation • Evidence-Based Nutrition • Consumer Food Empowerment
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
