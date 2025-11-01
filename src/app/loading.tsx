'use client'
import Image from 'next/image'

export default function Loading() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#174555'}}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px'}}>
        <Image
          src='/logo-loader.png'
          alt='AI4Afghanistan Logo'
          width={120}
          height={120}
          priority
          fetchPriority="high"
          style={{animation: 'fadeIn 0.3s ease-out'}}
        />
        <div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#089a45',
            animation: 'bounce 1.4s infinite ease-in-out both',
            animationDelay: '0s'
          }} />
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#089a45',
            animation: 'bounce 1.4s infinite ease-in-out both',
            animationDelay: '0.16s'
          }} />
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#089a45',
            animation: 'bounce 1.4s infinite ease-in-out both',
            animationDelay: '0.32s'
          }} />
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
