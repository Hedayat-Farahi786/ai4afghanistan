"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaClock,
  FaArrowLeft,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Blog1 from "@/assets/img/blog/blog1.jpg";
import Blog2 from "@/assets/img/blog/blog2.jpeg";
import Blog3 from "@/assets/img/blog/blog3.png";

const blogData = [
  {
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
    category: "Education",
  },
  {
    id: 2,
    title: "Building Tomorrow's Tech Leaders: Student Success Stories",
    content: `
      <p>Every success story begins with a dream, and at AI4Afghanistan, we've had the privilege of witnessing countless dreams transform into reality. Our students don't just learn to code – they learn to innovate, lead, and create solutions that matter.</p>
      
      <h3>From Students to Entrepreneurs</h3>
      <p>The journey from student to tech leader is never straightforward, but it's always inspiring. Take Mariam, who joined our program with no prior coding experience. Today, she runs a successful tech startup that develops educational apps for children in rural Afghanistan.</p>
      
      <p>Her story is not unique. Across our network of graduates, we see young Afghans who have taken the skills they learned in our classrooms and applied them to solve real-world problems. They're building apps, creating websites, developing AI models, and starting companies.</p>
      
      <h3>Global Opportunities</h3>
      <p>Our graduates aren't just making an impact locally – they're competing on the global stage. Several of our alumni have secured positions with international tech companies, working remotely from Afghanistan or relocating to tech hubs around the world.</p>
      
      <p>This global reach demonstrates that talent knows no borders. When given the right opportunities and training, Afghan youth can compete with the best in the world.</p>
      
      <h3>Giving Back</h3>
      <p>Perhaps most inspiring is how our graduates give back to their communities. Many return as mentors, teachers, and advisors, helping the next generation of students navigate their own journeys into technology.</p>
      
      <p>This cycle of learning and giving back creates a sustainable ecosystem of growth and innovation that extends far beyond our initial programs.</p>
    `,
    author: "Hedayat Farahi",
    date: "October 14, 2024",
    readTime: "7 min read",
    image: Blog2,
    category: "Success Stories",
  },
  {
    id: 3,
    title: "The Future of AI Education in Afghanistan: Our Vision",
    content: `
      <p>As we look toward the future, we see unlimited potential for AI education in Afghanistan. Our vision extends beyond individual programs to encompass a comprehensive transformation of how technology education is delivered and accessed across the country.</p>
      
      <h3>Expanding Access</h3>
      <p>Our immediate goal is to make AI education accessible to every young Afghan who wants to learn. This means developing online platforms, mobile learning solutions, and community-based programs that can reach students in even the most remote areas.</p>
      
      <p>We're working on innovative delivery methods that don't require high-speed internet or expensive equipment, ensuring that geographic and economic barriers don't prevent talented individuals from accessing quality education.</p>
      
      <h3>Building Infrastructure</h3>
      <p>Education is only as strong as the infrastructure that supports it. We're investing in creating learning centers, providing equipment, and training local instructors who can carry our mission forward in their own communities.</p>
      
      <p>This infrastructure development is crucial for creating sustainable, long-term impact that doesn't depend on external support.</p>
      
      <h3>Partnerships and Collaboration</h3>
      <p>The future of AI education in Afghanistan will be built through partnerships – with international organizations, tech companies, educational institutions, and local communities. These collaborations bring together resources, expertise, and opportunities that no single organization could provide alone.</p>
      
      <p>We're actively building these partnerships to create pathways for our students that extend from their first coding lesson to their first job and beyond.</p>
      
      <h3>A Digital Afghanistan</h3>
      <p>Our ultimate vision is of a digitally empowered Afghanistan, where technology serves as a bridge to opportunity, innovation drives economic growth, and young Afghans are recognized as leaders in the global tech community.</p>
      
      <p>This vision is ambitious, but it's also achievable. Every student we teach, every program we launch, and every success story we celebrate brings us one step closer to this future.</p>
    `,
    author: "Fatima Ahmadi",
    date: "October 12, 2024",
    readTime: "6 min read",
    image: Blog3,
    category: "Vision",
  },
];

const BlogSingle = () => {
  const params = useParams();
  const [, setIsLoaded] = useState(false);
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const id = parseInt(params.id as string);
    const post = blogData.find((post) => post.id === id);
    setBlogPost(post || blogData[0]);
    setIsLoaded(true);
  }, [params.id]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  const relatedPosts = blogData
    .filter((post) => post.id !== blogPost.id)
    .slice(0, 2);

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
        
        @media (max-width: 768px) {
          .header-area.homepage1 {
            top: 20px !important;
            width: calc(100% - 20px) !important;
            border-radius: 15px !important;
          }
          
          .header-area.homepage1.sticky {
            width: calc(100% - 20px) !important;
            border-radius: 15px !important;
            top: 5px !important;
          }
          
          .header-elements {
            border-radius: 15px !important;
          }
        }
        
        @media (max-width: 576px) {
          .header-area.homepage1 {
            top: 15px !important;
            width: calc(100% - 16px) !important;
            border-radius: 12px !important;
          }
          
          .header-area.homepage1.sticky {
            width: calc(100% - 16px) !important;
            border-radius: 12px !important;
            top: 3px !important;
          }
          
          .header-elements {
            border-radius: 12px !important;
          }
        }

        .header-area.homepage1 .main-menu ul li a {
          color: #ffffff !important;
        }

        .header-area.homepage1 .header-btn1 {
          background: #089a45 !important;
          color: #ffffff !important;
        }

        .blog-single-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          padding: 160px 0 80px;
        }

        .blog-single-container {
          width: 80%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
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
          color: #fafafa !important;
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
          to {
            opacity: 1;
          }
        }

        .blog-title {
          color: #174555;
          font-size: 28px;
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
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #089a45 !important;
          transition: all 0.3s ease;
          font-size: 16px;
          background: rgba(8, 154, 69, 0.1);
          border: 1px solid rgba(8, 154, 69, 0.2);
        }

        .share-btn:hover {
          color: #fafafa !important;
          background: #089a45;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(8, 154, 69, 0.3);
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

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .blog-single-container {
            width: 90%;
          }
          
          .blog-single-content {
            grid-template-columns: 1fr 250px;
            gap: 40px;
          }
          
          .blog-content-wrapper {
            padding: 40px;
          }
        }
        
        @media (max-width: 768px) {
          .blog-single-container {
            width: 95%;
            padding: 0 10px;
          }
          
          .blog-single-page {
            padding: 140px 0 60px;
          }
          
          .blog-back-link {
            font-size: 14px;
            margin-bottom: 25px !important;
          }
          
          .blog-single-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .blog-header-image {
            height: 250px;
          }
          
          .blog-category-badge {
            top: 20px;
            left: 20px;
            padding: 6px 16px;
            font-size: 12px;
          }
          
          .blog-content-wrapper {
            padding: 25px 20px;
          }
          
          .blog-title {
            font-size: 22px;
            margin-bottom: 20px;
          }
          
          .blog-meta {
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 30px;
            padding-bottom: 20px;
          }
          
          .blog-meta-item {
            font-size: 13px;
          }
          
          .blog-text {
            font-size: 15px;
            line-height: 1.7;
          }
          
          .blog-text h3 {
            font-size: 20px;
            margin: 25px 0 15px;
          }
          
          .blog-share {
            padding: 25px;
          }
          
          .blog-share h4 {
            font-size: 16px;
            margin-bottom: 15px;
          }
          
          .share-buttons {
            gap: 12px;
          }
          
          .share-btn {
            width: 38px;
            height: 38px;
            font-size: 14px;
          }
          
          .related-posts {
            padding: 25px;
          }
          
          .related-posts h4 {
            font-size: 16px;
            margin-bottom: 20px;
          }
          
          .related-post {
            gap: 12px;
            margin-bottom: 15px;
            padding-bottom: 15px;
          }
          
          .related-post-image {
            width: 70px;
            height: 50px;
          }
          
          .related-post-content h5 {
            font-size: 13px;
          }
          
          .related-post-date {
            font-size: 11px;
          }
          
          .blog-sidebar {
            transform: none;
            animation: none;
            opacity: 1;
          }
        }
        
        /* Mobile Styles */
        @media (max-width: 576px) {
          .blog-single-container {
            width: 90%;
            padding: 0 8px;
          }
          
          .blog-single-page {
            padding: 130px 0 50px;
          }
          
          .blog-back-link {
            font-size: 13px;
            gap: 8px;
            margin-bottom: 20px !important;
          }
          
          .blog-single-content {
            gap: 25px;
          }
          
          .blog-header-image {
            height: 200px;
          }
          
          .blog-category-badge {
            top: 15px;
            left: 15px;
            padding: 5px 12px;
            font-size: 11px;
          }
          
          .blog-content-wrapper {
            padding: 20px 15px;
          }
          
          .blog-title {
            font-size: 18px;
            margin-bottom: 18px;
          }
          
          .blog-meta {
            gap: 12px;
            margin-bottom: 25px;
            padding-bottom: 18px;
          }
          
          .blog-meta-item {
            font-size: 12px;
          }
          
          .blog-text {
            font-size: 14px;
            line-height: 1.6;
          }
          
          .blog-text h3 {
            font-size: 18px;
            margin: 20px 0 12px;
          }
          
          .blog-text p {
            margin-bottom: 15px;
          }
          
          .blog-share {
            padding: 20px;
            border-radius: 12px;
          }
          
          .blog-share h4 {
            font-size: 14px;
            margin-bottom: 12px;
          }
          
          .share-buttons {
            gap: 10px;
          }
          
          .share-btn {
            width: 34px;
            height: 34px;
            font-size: 13px;
            border-radius: 10px;
          }
          
          .related-posts {
            padding: 20px;
            border-radius: 12px;
          }
          
          .related-posts h4 {
            font-size: 14px;
            margin-bottom: 15px;
          }
          
          .related-post {
            gap: 10px;
            margin-bottom: 12px;
            padding-bottom: 12px;
          }
          
          .related-post-image {
            width: 60px;
            height: 45px;
          }
          
          .related-post-content h5 {
            font-size: 12px;
            margin-bottom: 3px;
          }
          
          .related-post-date {
            font-size: 10px;
          }
        }
      `}</style>

      <div className="blog-single-page">
        <div className="blog-single-container">
          <Link
            href="/blogs"
            className="blog-back-link"
            style={{ marginBottom: "30px", display: "inline-flex" }}
          >
            <FaArrowLeft />
            Back to Blogs
          </Link>
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
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="related-post"
                  >
                    <div className="related-post-image">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={80}
                        height={60}
                        loading="lazy"
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
  );
};

export default BlogSingle;
