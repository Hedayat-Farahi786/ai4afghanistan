'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarAlt, FaUser, FaClock, FaArrowLeft, FaShare, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Blog1 from '@/assets/img/blog/blog1.jpg'
import Blog2 from '@/assets/img/blog/blog2.jpeg'
import Blog3 from '@/assets/img/blog/blog3.webp'

const BlogSingle = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const blogPost = {
    id: 1,
    title: "Empowering Afghan Youth Through AI Education Programs",
    content: `
      <p>In the heart of Afghanistan, a revolutionary movement is taking place. Despite the challenges facing the nation, young Afghans are embracing artificial intelligence and technology as tools for empowerment and change. Our comprehensive AI education programs are not just teaching technical skills – they're fostering hope, creativity, and innovation.</p>
      
      <h3>The Power of Education</h3>
      <p>Education has always been a powerful force for transformation, and in the context of Afghanistan, it takes on even greater significance. Our AI education programs are designed to be accessible, practical, and immediately applicable to real-world challenges that Afghan youth face daily.</p>
      
      <p>Through our structured curriculum, students learn everything from basic programming concepts to advanced machine learning algorithms. But more importantly, they learn to think critically, solve problems creatively, and envision a future where technology serves humanity.</p>
      
      <h3>Real Impact, Real Stories</h3>
      <p>The impact of our programs extends far beyond the classroom. Students who complete our courses often go on to create their own tech startups, develop solutions for local problems, or secure positions with international technology companies.</p>
      
      <p>One of our graduates, Fatima, developed an AI-powered app that helps farmers optimize their crop yields using local weather data and soil conditions. Another student, Ahmad, created a machine learning model that assists in medical diagnosis in remote areas where specialist doctors are scarce.</p>
      
      <h3>Building Tomorrow's Leaders</h3>
      <p>Our vision extends beyond individual success stories. We're building a generation of tech leaders who will drive Afghanistan's digital transformation. These young innovators are not just consumers of technology – they're creators, entrepreneurs, and change-makers.</p>
      
      <p>The program emphasizes not just technical skills, but also leadership, communication, and ethical considerations in AI development. We believe that the future of AI should be inclusive, responsible, and beneficial for all of humanity.</p>
      
      <h3>Looking Forward</h3>
      <p>As we continue to expand our programs, we remain committed to our core mission: empowering Afghan youth through education and technology. Every student who joins our program becomes part of a larger movement – a movement that believes in the power of knowledge to transform lives and communities.</p>
      
      <p>The future of Afghanistan is bright, and it's being written by the young minds we're privileged to teach and mentor every day.</p>
    `,
    author: "Ahmad Sirat",
    date: "October 16, 2024",
    readTime: "5 min read",
    image: Blog1,
    category: "Education"
  }

  const relatedPosts = [
    {
      id: 2,
      title: "Building Tomorrow's Tech Leaders: Student Success Stories",
      image: Blog2,
      date: "October 14, 2024",
      slug: "/blog-single"
    },
    {
      id: 3,
      title: "The Future of AI Education in Afghanistan: Our Vision",
      image: Blog3,
      date: "October 12, 2024",
      slug: "/blog-single"
    }
  ]

  return (
    <>
      <style jsx global>{`
        .blog-single-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          padding: 120px 0 80px;
        }
        
        .blog-single-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .blog-single-content {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 60px;
          align-items: start;
        }
        
        .blog-main {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transform: translateY(30px);
          opacity: 0;
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .blog-sidebar {
          transform: translateX(30px);
          opacity: 0;
          animation: slideRight 0.8s ease-out 0.2s forwards;
        }
        
        @keyframes slideUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slideRight {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .blog-header-image {
          position: relative;
          height: 400px;
          overflow: hidden;
        }
        
        .blog-header-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        
        .blog-category-badge {
          position: absolute;
          top: 30px;
          left: 30px;
          background: rgba(8, 154, 69, 0.95);
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          backdrop-filter: blur(10px);
          animation: fadeInScale 0.6s ease-out 0.4s both;
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .blog-content-wrapper {
          padding: 50px;
        }
        
        .blog-back-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #089a45;
          text-decoration: none;
          font-weight: 600;
          margin-bottom: 30px;
          transition: all 0.3s ease;
          opacity: 0;
          animation: fadeIn 0.6s ease-out 0.6s forwards;
        }
        
        .blog-back-link:hover {
          color: #174555;
          gap: 15px;
        }
        
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        
        .blog-title {
          color: #174555;
          font-size: 36px;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 25px;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.8s forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .blog-meta {
          display: flex;
          align-items: center;
          gap: 30px;
          margin-bottom: 40px;
          padding-bottom: 25px;
          border-bottom: 1px solid #eee;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 1s forwards;
        }
        
        .blog-meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;
          font-size: 14px;
          font-weight: 500;
        }
        
        .blog-meta-icon {
          color: #089a45;
          font-size: 14px;
        }
        
        .blog-text {
          color: #444;
          font-size: 16px;
          line-height: 1.8;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 1.2s forwards;
        }
        
        .blog-text h3 {
          color: #174555;
          font-size: 24px;
          font-weight: 600;
          margin: 35px 0 20px;
        }
        
        .blog-text p {
          margin-bottom: 20px;
        }
        
        .blog-share {
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          margin-bottom: 30px;
        }
        
        .blog-share h4 {
          color: #174555;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        
        .share-buttons {
          display: flex;
          gap: 15px;
        }
        
        .share-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: white;
          transition: all 0.3s ease;
          font-size: 16px;
        }
        
        .share-btn.facebook { background: #3b5998; }
        .share-btn.twitter { background: #1da1f2; }
        .share-btn.linkedin { background: #0077b5; }
        
        .share-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        
        .related-posts {
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }
        
        .related-posts h4 {
          color: #174555;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 25px;
        }
        
        .related-post {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #f0f0f0;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .related-post:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }
        
        .related-post:hover {
          transform: translateX(5px);
        }
        
        .related-post-image {
          width: 80px;
          height: 60px;
          border-radius: 8px;
          overflow: hidden;
          flex-shrink: 0;
        }
        
        .related-post-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .related-post-content h5 {
          color: #174555;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 5px;
        }
        
        .related-post-date {
          color: #666;
          font-size: 12px;
        }
        
        @media (max-width: 768px) {
          .blog-single-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .blog-content-wrapper {
            padding: 30px 25px;
          }
          
          .blog-title {
            font-size: 28px;
          }
          
          .blog-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
          
          .blog-sidebar {
            transform: none;
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      <div className="blog-single-page">
        <div className="blog-single-container">
          <div className="blog-single-content">
            <article className="blog-main">
              <div className="blog-header-image">
                <Image 
                  src={blogPost.image} 
                  alt={blogPost.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 70vw"
                  priority
                />
                <span className="blog-category-badge">{blogPost.category}</span>
              </div>
              
              <div className="blog-content-wrapper">
                <Link href="/#blog" className="blog-back-link">
                  <FaArrowLeft />
                  Back to Blog
                </Link>
                
                <h1 className="blog-title">{blogPost.title}</h1>
                
                <div className="blog-meta">
                  <div className="blog-meta-item">
                    <FaCalendarAlt className="blog-meta-icon" />
                    <span>{blogPost.date}</span>
                  </div>
                  <div className="blog-meta-item">
                    <FaUser className="blog-meta-icon" />
                    <span>{blogPost.author}</span>
                  </div>
                  <div className="blog-meta-item">
                    <FaClock className="blog-meta-icon" />
                    <span>{blogPost.readTime}</span>
                  </div>
                </div>
                
                <div 
                  className="blog-text"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </div>
            </article>
            
            <aside className="blog-sidebar">
              <div className="blog-share">
                <h4>Share This Post</h4>
                <div className="share-buttons">
                  <a href="#" className="share-btn facebook">
                    <FaFacebook />
                  </a>
                  <a href="#" className="share-btn twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" className="share-btn linkedin">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
              
              <div className="related-posts">
                <h4>Related Posts</h4>
                {relatedPosts.map((post) => (
                  <Link key={post.id} href={post.slug} className="related-post">
                    <div className="related-post-image">
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        width={80}
                        height={60}
                      />
                    </div>
                    <div className="related-post-content">
                      <h5>{post.title}</h5>
                      <div className="related-post-date">{post.date}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogSingle