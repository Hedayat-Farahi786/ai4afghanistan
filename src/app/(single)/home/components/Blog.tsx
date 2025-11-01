'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarAlt, FaUser, FaArrowRight, FaClock } from 'react-icons/fa'

import Blog1 from '@/assets/img/blog/blog1.jpg'
import Blog2 from '@/assets/img/blog/blog2.jpeg'
import Blog3 from '@/assets/img/blog/blog3.webp'

const blogData = [
  {
    id: 1,
    title: "Empowering Afghan Youth Through AI Education Programs",
    excerpt: "Discover how our comprehensive AI curriculum is transforming young minds and creating future tech leaders in Afghanistan.",
    author: "Ahmad Sirat",
    date: "October 16, 2024",
    readTime: "5 min read",
    image: Blog1,
    category: "Education",
    slug: "/blog/1"
  },
  {
    id: 2,
    title: "Building Tomorrow's Tech Leaders: Student Success Stories",
    excerpt: "Meet our graduates who are now working in tech companies and making a difference in their communities worldwide.",
    author: "Hedayat Farahi",
    date: "October 14, 2024",
    readTime: "7 min read",
    image: Blog2,
    category: "Success Stories",
    slug: "/blog/2"
  },
  {
    id: 3,
    title: "The Future of AI Education in Afghanistan: Our Vision",
    excerpt: "Learn about our roadmap for expanding AI education and creating sustainable tech opportunities across Afghanistan.",
    author: "Fatima Ahmadi",
    date: "October 12, 2024",
    readTime: "6 min read",
    image: Blog3,
    category: "Vision",
    slug: "/blog/3"
  }
]

const Blog = () => {
  const [, setHoveredCard] = useState<number | null>(null)
  
  const handleCardClick = (slug: string) => {
    // Add a small delay for the click animation
    setTimeout(() => {
      window.location.href = slug
    }, 150)
  }

  return (
    <>
      <style jsx global>{`
        .blog-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          position: relative;
          overflow: hidden;
        }
        .blog-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(8, 154, 69, 0.03) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(23, 69, 85, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }
        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }
        .blog-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .blog-subtitle {
          color: #174555;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
          position: relative;
          display: inline-block;
        }
        .blog-subtitle::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 2px;
          background: #089a45;
        }
        .blog-title {
          color: #174555;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .blog-description {
          color: #666;
          font-size: 16px;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }
        .blog-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 520px;
          display: flex;
          flex-direction: column;
          border: 1px solid #174555 !important;
          position: relative;
          cursor: pointer;
        }
        .blog-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 60px rgba(8, 154, 69, 0.15);
          border-color: #089a45;
        }
        .blog-card:active {
          transform: translateY(-8px) scale(0.98);
          transition: all 0.15s ease;
        }
        .blog-image-container {
          position: relative;
          height: 240px;
          overflow: hidden;
        }
        .blog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .blog-card:hover .blog-image {
          transform: scale(1.08);
        }
        .blog-category {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(8, 154, 69, 0.9);
          color: #fafafa !important;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          backdrop-filter: blur(10px);
        }
        .blog-content {
          padding: 32px 28px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .blog-meta {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .blog-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #666;
          font-size: 13px;
          font-weight: 500;
        }
        .blog-meta-icon {
          color: #089a45;
          font-size: 12px;
        }
        .blog-card-title {
          color: #174555;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          min-height: 56px;
        }
        .blog-card-title:hover {
          color: #089a45;
        }
        .blog-excerpt {
          color: #666;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 24px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          flex-grow: 1;
        }
        .blog-read-more {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #089a45;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          margin-top: auto;
          width: fit-content;
        }
        .blog-read-more:hover {
          color: #174555;
          gap: 12px;
        }
        .blog-read-more-icon {
          transition: transform 0.3s ease;
          font-size: 12px;
        }
        .blog-read-more:hover .blog-read-more-icon {
          transform: translateX(4px);
        }
        
        .blog-section-header {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 10px;
        }
        
        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: ##E6F5EC !important;
          color: #089a45 !important;
          padding: 6px 12px;
          border-radius: 15px;
          text-decoration: none;
          font-weight: 500;
          font-size: 12px;
          transition: all 0.3s ease;
          white-space: nowrap;
          opacity: 1;
        }
        
        .view-all-btn:hover {
          background: #089a45 !important;
          color: #fafafa !important;
          transform: translateY(-1px);
        }
        
        .view-all-icon {
          transition: transform 0.3s ease;
        }
        
        .view-all-btn:hover .view-all-icon {
          transform: translateX(4px);
        }
        
        @media (max-width: 768px) {
          .blog-section {
            padding: 60px 0;
          }
          .blog-container {
            padding: 0 16px;
          }
          .blog-header {
            margin-bottom: 50px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
            gap: 30px;
            margin-top: 40px;
          }
          .blog-card {
            height: auto;
            min-height: 480px;
          }
          .blog-image-container {
            height: 200px;
          }
          .blog-content {
            padding: 24px 20px;
          }
          .blog-meta {
            gap: 16px;
          }
        }
        
        .blog-card-loading {
          position: relative;
          overflow: hidden;
        }
        .blog-card-loading::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(8, 154, 69, 0.1), transparent);
          animation: shimmer 1.5s infinite;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .blog-card:active::after {
          opacity: 1;
        }
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @media (max-width: 480px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .blog-card {
            margin: 0 8px;
          }
          .blog-image-container {
            height: 180px;
          }
          .blog-content {
            padding: 20px 16px;
          }
        }
      `}</style>
      
      <section id="blog" className="blog-section">
        <div className="blog-container">
          <div className="blog-header">
            <h5 className="blog-subtitle">Latest Updates</h5>
            <h2 className="blog-title">AI Education & Innovation Stories</h2>
            <p className="blog-description">
              Discover how AI4Afghanistan is transforming lives through technology education. 
              Read about our programs, student success stories, and the future of AI in Afghanistan.
            </p>
          </div>
          
          <div className="blog-section-header">
            <Link href="/blogs" className="view-all-btn">
              View All
              <FaArrowRight className="view-all-icon" />
            </Link>
          </div>
          
          <div className="blog-grid">
            {blogData.map((post) => (
              <article 
                key={post.id} 
                className="blog-card blog-card-loading"
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(post.slug)}
              >
                <div className="blog-image-container">
                  <Link href={post.slug}>
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      className="blog-image"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Link>
                  <span className="blog-category">{post.category}</span>
                </div>
                
                <div className="blog-content">
                  <div className="blog-meta">
                    <div className="blog-meta-item">
                      <FaCalendarAlt className="blog-meta-icon" />
                      <span>{post.date}</span>
                    </div>
                    <div className="blog-meta-item">
                      <FaUser className="blog-meta-icon" />
                      <span>{post.author}</span>
                    </div>
                    <div className="blog-meta-item">
                      <FaClock className="blog-meta-icon" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="blog-card-title">
                    <Link href={post.slug}>{post.title}</Link>
                  </h3>
                  
                  <p className="blog-excerpt">{post.excerpt}</p>
                  
                  <Link href={post.slug} className="blog-read-more">
                    Read More
                    <FaArrowRight className="blog-read-more-icon" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog