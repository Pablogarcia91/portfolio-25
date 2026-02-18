import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Pablo García - Product Designer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          padding: '64px',
          background: '#fafafa',
          position: 'relative',
        }}
      >
        {/* Mesh gradient blobs */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-80px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,180,100,0.55) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(180,120,255,0.5) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            right: '200px',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(100,200,255,0.45) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '300px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,120,160,0.35) 0%, transparent 70%)',
          }}
        />

        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
          <p style={{ margin: 0, fontSize: '20px', color: 'rgba(0,0,0,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            pgarciadesign.org
          </p>
          <p style={{ margin: 0, fontSize: '64px', fontWeight: 600, color: '#111', lineHeight: 1.1 }}>
            Pablo García
          </p>
          <p style={{ margin: 0, fontSize: '28px', color: 'rgba(0,0,0,0.45)' }}>
            Product Designer
          </p>
        </div>
      </div>
    ),
    { ...size }
  )
}
