'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa'

import team1 from '@/assets/img/team/vl-team-1.1.jpg'
import team2 from '@/assets/img/team/vl-team-1.2.jpg'
import placeholder from '@/assets/img/team/placeholder.png'

const teamMemberData = [
  {
    name: "Ahmad Siyar Sirat",
    role: "Chair, Founder",
    description: "Leads the organization, oversees strategic direction, chairs board meetings, and represents AI for Afghanistan globally.",
    image: team1,
    fullBio: {
      background: "Ahmad Siyar Sirat is the visionary Chair and Founder of AI4Afghanistan, bringing over 15 years of experience in technology leadership, strategic planning, and organizational development to advance Afghanistan's AI capabilities.",
      education: "Ahmad holds advanced degrees in Computer Science and Business Administration from leading international institutions. He has completed executive education programs at MIT and Stanford, with specialized certifications in AI, machine learning, and organizational leadership.",
      experience: "Before founding AI4Afghanistan, Ahmad served in senior technology roles at various international organizations, focusing on digital transformation and capacity building in emerging markets. His expertise spans software development, AI research, and educational technology implementation.",
      achievements: [
        "Founded and chairs AI4Afghanistan's board of directors",
        "Established strategic partnerships with 20+ international organizations",
        "Led development of comprehensive AI education framework",
        "Speaker at 50+ global technology and education conferences",
        "Mentors over 100 emerging leaders in Afghanistan's tech ecosystem"
      ]
    },
    social: {
      instagram: "https://instagram.com/ahmadsiyar",
      linkedin: "https://linkedin.com/in/ahmadsiyar",
      email: "sirat@ai4afghanistan.org"
    }
  },
  {
    name: "Farshad Azimi",
    role: "Deputy Chair, Co-Founder",
    description: "Ensures leadership continuity, represents the organization when required, and contributes to strategic decisions and governance.",
    image: placeholder,
    fullBio: {
      background: "Farshad Azimi serves as Deputy Chair and Co-Founder of AI4Afghanistan, providing strategic leadership and ensuring organizational continuity in advancing AI education initiatives across Afghanistan.",
      education: "Farshad holds degrees in Engineering and Management from Kabul University and has completed advanced leadership programs at Harvard Business School. He maintains certifications in project management and non-profit governance.",
      experience: "With over 12 years of experience in technology management and educational program development, Farshad has worked extensively in capacity building and institutional development in challenging environments, including roles with international NGOs and development agencies.",
      achievements: [
        "Co-founded AI4Afghanistan with strategic vision and planning",
        "Ensures leadership continuity and organizational stability",
        "Contributes to major strategic decisions and policy development",
        "Represents the organization in key stakeholder meetings",
        "Supports governance and compliance initiatives across all programs"
      ]
    },
    social: {
      instagram: "https://instagram.com/farshadazimi",
      linkedin: "https://linkedin.com/in/farshadazimi",
      email: "farshad@ai4afghanistan.org"
    }
  },
  {
    name: "Sayed Amir Ziwari",
    role: "Treasurer, Co-Founder",
    description: "Administers financial systems, ensures transparency and compliance, and supports planning, budgeting, reporting, and documentation processes.",
    image: placeholder,
    fullBio: {
      background: "Sayed Amir Ziwari serves as Treasurer and Co-Founder of AI4Afghanistan, overseeing financial management, ensuring fiscal responsibility, and maintaining transparency in all organizational financial operations.",
      education: "Amir holds degrees in Finance and Accounting from the American University of Afghanistan, with additional certifications in non-profit financial management and international accounting standards from ACCA and CPA programs.",
      experience: "With over 10 years of experience in financial management and organizational administration, Amir has worked with various non-profit organizations and international agencies, specializing in financial systems, compliance, and resource management in complex operational environments.",
      achievements: [
        "Manages organizational financial systems and processes",
        "Ensures 100% compliance with financial regulations and standards",
        "Oversees budgeting, planning, and comprehensive financial reporting",
        "Maintains complete transparency in all financial operations",
        "Supports strategic financial planning and optimal resource allocation"
      ]
    },
    social: {
      instagram: "https://instagram.com/amirziwari",
      linkedin: "https://linkedin.com/in/amirziwari",
      email: "amir@ai4afghanistan.org"
    }
  },
  {
    name: "Hedayatullah Farahi",
    role: "Head of Research & Innovation, Co-Founder",
    description: "Advances applied AI research and innovation to develop practical solutions for Afghanistan's key sector challenges.",
    image: team2,
    fullBio: {
      background: "Hedayatullah Farahi leads AI4Afghanistan's research and innovation initiatives as Head of Research & Innovation and Co-Founder, driving the development of practical AI solutions for Afghanistan's most pressing challenges.",
      education: "Hedayat holds advanced degrees in Computer Science and Artificial Intelligence from top-tier universities. He has published extensively in peer-reviewed journals and maintains active research collaborations with international institutions.",
      experience: "With over 8 years of experience in AI research, software development, and innovation management, Hedayat has contributed to groundbreaking research projects and has extensive experience in both academic and industry settings, focusing on practical AI applications.",
      achievements: [
        "Leads applied AI research initiatives for local challenges",
        "Develops innovative solutions for key sector problems",
        "Published 25+ research papers on AI applications in developing regions",
        "Mentors 200+ students and researchers in AI methodologies",
        "Collaborates with 15+ international research institutions"
      ]
    },
    social: {
      instagram: "https://instagram.com/hedayatfarahi",
      linkedin: "https://linkedin.com/in/hedayatullah",
      email: "hedayat@ai4afghanistan.org"
    }
  }
]

const TeamMemberSingle = () => {
  const params = useParams()
  const [member, setMember] = useState(null)

  useEffect(() => {
    const id = parseInt(params.id as string)
    const memberIndex = id - 1 // Convert to 0-based index
    const foundMember = teamMemberData[memberIndex]
    setMember(foundMember || teamMemberData[0])
  }, [params.id])

  if (!member) {
    return <div>Loading...</div>
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
        
        .team-single-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          padding: 120px 0 80px;
        }
        
        .team-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .team-back {
          margin-bottom: 40px;
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
        
        .team-content {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 60px;
          align-items: start;
        }
        
        .team-sidebar {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          text-align: center;
          position: sticky;
          top: 120px;
        }
        
        .member-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          margin: 0 auto 25px;
          overflow: hidden;
          border: 4px solid #089a45;
        }
        
        .member-name {
          color: #174555;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        
        .member-position {
          color: #089a45;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 25px;
        }
        
        .member-expertise {
          margin-bottom: 30px;
        }
        
        .member-social-section {
          margin-bottom: 30px;
        }
        
        .social-title {
          color: #174555;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 15px;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 15px;
        }
        
        .social-link {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(8, 154, 69, 0.1) !important;
          color: #089a45 !important;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 18px;
        }
        
        .social-link:hover {
          background: #089a45 !important;
          color: #fafafa !important;
          transform: translateY(-2px);
        }
        
        .social-link * {
          color: inherit !important;
        }
        
        .team-main {
          background: white;
          border-radius: 20px;
          padding: 50px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }
        
        .member-bio {
          color: #444;
          font-size: 16px;
          line-height: 1.8;
        }
        
        .member-bio h3 {
          color: #174555;
          font-size: 24px;
          font-weight: 600;
          margin: 35px 0 20px;
        }
        
        .member-bio p {
          margin-bottom: 20px;
        }
        
        .member-bio ul {
          margin: 20px 0;
          padding-left: 20px;
        }
        
        .member-bio li {
          margin-bottom: 8px;
          color: #444;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .team-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .team-sidebar {
            position: static;
          }
          
          .team-main {
            padding: 30px 25px;
          }
        }
      `}</style>

      <div className="team-single-page">
        <div className="team-container">
          <div className="team-back">
            <Link href="/#team" className="back-link">
              <FaArrowLeft />
              Back to Team
            </Link>
          </div>
          
          <div className="team-content">
            <aside className="team-sidebar">
              <div className="member-image">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  width={200}
                  height={200}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              <h1 className="member-name">{member.name}</h1>
              <p className="member-position">{member.role}</p>
              
              <div className="member-social-section">
                <h4 className="social-title">Connect</h4>
                <div className="social-links">
                  {member.social.instagram && (
                    <a href={member.social.instagram} className="social-link" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="social-link" target="_blank" rel="noopener noreferrer">
                      <FaTwitter />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="social-link">
                      <FaEnvelope />
                    </a>
                  )}
                </div>
              </div>
              

            </aside>
            
            <main className="team-main">
              <div className="member-bio">
                <h3>Professional Background</h3>
                <p>{member.fullBio.background}</p>
                
                <h3>Education & Qualifications</h3>
                <p>{member.fullBio.education}</p>
                
                <h3>Professional Experience</h3>
                <p>{member.fullBio.experience}</p>
                
                <h3>Key Achievements</h3>
                <ul>
                  {member.fullBio.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamMemberSingle