'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarAlt, FaUser, FaClock, FaArrowRight, FaArrowLeft, FaSearch } from 'react-icons/fa'
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

const BlogsPage = () => {
  const [, setHoveredCard] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Education', 'Success Stories', 'Vision']
  
  const filteredBlogs = blogData.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleCardClick = (slug: string) => {
    setTimeout(() => {
      window.location.href = slug
    }, 150)
  }

  return (
    <>
      <style jsx global>{`
        .header-area.homepage1 {
          background: transparent !important;
          position: absolute !important;
          top: 50px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: calc(100% - 40px) !important;
          max-width: 1200px !important;
          border-radius: 20px !important;
        }
        
        .header-elements {
          background: rgba(23, 69, 85, 0.9) !important;
          border-radius: 20px !important;
        }
        
        .header-area.homepage1.sticky {
          background: rgba(23, 69, 85, 0.9) !important;
          position: fixed !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: calc(100% - 40px) !important;
          max-width: 1200px !important;
          border-radius: 20px !important;
          top: 10px !important;
        }
        
        .header-area.homepage1 .main-menu ul li a {
          color: #ffffff !important;
        }
        
        .header-area.homepage1 .header-btn1 {
          background: #089a45 !important;
          color: #ffffff !important;
        }
        
        .blogs-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          padding: 120px 0 80px;
        }
        
        .blogs-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .blogs-back {
          margin-top: 30px;
          margin-bottom: 30px;
        }
        
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #089a45;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .back-link:hover {
          color: #174555;
          gap: 15px;
        }
        
        .blogs-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .blogs-filters {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          gap: 20px;
        }
        
        .search-box {
          position: relative;
          flex: 1;
          max-width: 400px;
        }
        
        .search-input {
          width: 100%;
          padding: 12px 16px 12px 50px !important;
          border: 1px solid #174555 !important;
          border-radius: 25px;
          font-size: 14px;
          background: white;
          color: #174555;
          transition: all 0.3s ease;
        }
        
        .search-input::placeholder {
          color: #999;
        }
        
        .search-input:focus {
          outline: none;
          border-color: #089a45;
        }
        
        .search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #174555;
        }
        
        .category-filters {
          display: flex;
          gap: 10px;
        }
        
        .category-btn {
          padding: 8px 16px;
          border: 2px solid #e9ecef;
          background: white;
          color: #666;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .category-btn.active {
          background: #089a45 !important;
          border-color: #089a45 !important;
          color: #fafafa !important;
          box-shadow: 0 4px 12px rgba(8, 154, 69, 0.3);
          transform: translateY(-1px);
        }
        
        .category-btn:hover {
          border-color: #089a45;
          color: #089a45;
        }
        
        .category-btn.active:hover {
          color: #fafafa;
        }
        
        .blogs-title {
          color: #174555;
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        
        .blogs-description {
          color: #666;
          font-size: 18px;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .blogs-results {
          margin-bottom: 20px;
          color: #666;
          font-size: 14px;
        }
        
        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }
        
        .blogs-grid .blog-card {
          max-width: 400px;
          width: 100%;
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
          border: 1px solid rgba(8, 154, 69, 0.1);
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
        
        @media (max-width: 768px) {
          .blogs-page {
            padding: 80px 0 60px;
          }
          
          .blogs-container {
            padding: 0 16px;
          }
          
          .blogs-title {
            font-size: 32px;
          }
          
          .blogs-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .blogs-filters {
            flex-direction: column;
            align-items: stretch;
          }
          
          .category-filters {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>

      <div className="blogs-page">
        <div className="blogs-container">
          <div className="blogs-back">
            <Link href="/#blog" className="back-link">
              <FaArrowLeft />
              Back to Home
            </Link>
          </div>
          
          <div className="blogs-header">
            <h1 className="blogs-title">All Blog Posts</h1>
            <p className="blogs-description">
              Explore our complete collection of stories, insights, and updates about AI education and innovation in Afghanistan.
            </p>
          </div>
          
          <div className="blogs-filters">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search blogs..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="blogs-results">
            Showing {filteredBlogs.length} of {blogData.length} posts
          </div>
          
          <div className="blogs-grid">
            {filteredBlogs.map((post) => (
              <article 
                key={post.id} 
                className="blog-card"
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
      </div>
    </>
  )
}

export default BlogsPage