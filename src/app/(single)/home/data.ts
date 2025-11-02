import { StaticImageData } from "next/image"
import blogThumb1 from '@/assets/img/blog/vl-blog-sm-thumb-1.1.png'
import blogThumb2 from '@/assets/img/blog/vl-blog-sm-thumb-1.2.png'
import blogThumb3 from '@/assets/img/blog/vl-blog-sm-thumb-1.3.png'
import testimonial1 from '@/assets/img/testimonial/vl-testimonial-auth-1.1.png'
import testimonial2 from '@/assets/img/testimonial/vl-testimonial-auth-1.2.png'
import testimonial3 from '@/assets/img/testimonial/vl-testimonial-auth-1.3.png'
import team1 from '@/assets/img/team/vl-team-1.1.jpg'
import team2 from '@/assets/img/team/vl-team-1.2.jpg'

import placeholder from '@/assets/img/team/placeholder.png'

type TabType = {
  title: string
  time: string
  image: StaticImageData
  detailsUrl: string
  icon: string
}
type TestimonialType = {
  name: string
  role: string
  image: StaticImageData
  quote: string
  rating: number
}

type TeamType = {
  name: string
  role: string
  description: string
  image: StaticImageData
  instagram?: string
  linkedin?: string
  twitter?: string
  email?: string
}


export const tab1Data: TabType[] = [
  {
    title: "Unity Giving Community Charity Event",
    time: "11:00 AM",
    image: blogThumb1,
    detailsUrl: "/event-single",
    icon: "assets/img/icons/vl-clock-1.1.svg"
  },
  {
    title: "Spread the Love Charity Art Exhibition",
    time: "11:00 AM",
    image: blogThumb2,
    detailsUrl: "/event-single",
    icon: "assets/img/icons/vl-clock-1.1.svg"
  },
  {
    title: "Shine for a Cause Charity Dinner & Auction",
    time: "11:00 AM",
    image: blogThumb3,
    detailsUrl: "/event-single",
    icon: "assets/img/icons/vl-clock-1.1.svg"
  }
]
export const tab2Data: TabType[] = [
  {
    title: "Unity Giving Community Charity Event",
    time: "11:00 AM",
    image: blogThumb1,
    detailsUrl: "/event-single",
    icon: "assets/img/icons/vl-clock-1.1.svg"
  },
  {
    title: "Spread the Love Charity Art Exhibition",
    time: "11:00 AM",
    image: blogThumb2,
    detailsUrl: "/event-single",
    icon: "assets/img/icons/vl-clock-1.1.svg"
  },
  {
    title: "Shine for a Cause Charity Dinner & Auction",
    time: "11:00 AM",
    image: blogThumb3,
    detailsUrl: "/event-single",
    icon: "assets/img/icons/vl-clock-1.1.svg"
  }
]
export const tab3Data: TabType[] = [
  {
    title: "Unity Giving Community Charity Event",
    time: "11:00 AM",
    image: blogThumb1,
    detailsUrl: "/event-single",
    icon: "assets/img/icons/vl-clock-1.1.svg"
  },
  {
    title: "Spread the Love Charity Art Exhibition",
    time: "11:00 AM",
    image: blogThumb2,
    detailsUrl: "/event-single",
    icon: "assets/img/icons/vl-clock-1.1.svg"
  },
  {
    title: "Shine for a Cause Charity Dinner & Auction",
    time: "11:00 AM",
    image: blogThumb3,
    detailsUrl: "/event-single",
    icon: "assets/img/icons/vl-clock-1.1.svg"
  }
]
export const tab4Data: TabType[] = [
  {
    title: "Unity Giving Community Charity Event",
    time: "11:00 AM",
    image: blogThumb1,
    detailsUrl: "/event-single",
    icon: "assets/img/icons/vl-clock-1.1.svg"
  },
  {
    title: "Spread the Love Charity Art Exhibition",
    time: "11:00 AM",
    image: blogThumb2,
    detailsUrl: "/event-single",
    icon: "assets/img/icons/vl-clock-1.1.svg"
  },
  {
    title: "Shine for a Cause Charity Dinner & Auction",
    time: "11:00 AM",
    image: blogThumb3,
    detailsUrl: "/event-single",
    icon: "assets/img/icons/vl-clock-1.1.svg"
  }
]

export const testimonialData: TestimonialType[] = [
  {
    name: "Johnnie Lind",
    role: "Volunteer",
    image: testimonial1,
    quote: "The support we received after the disaster was nothing short of life-changing. When everything we had was lost, the kindness and quick response from this organization.",
    rating: 5
  },
  {
    name: "Cecelia Tremblay",
    role: "Volunteer",
    image: testimonial2,
    quote: "From food and shelter to emotional support, they stood by us every step of the way. Thanks to their efforts, my family and I were able to rebuild not only our home but.",
    rating: 5
  },
  {
    name: "Johnnie Lind",
    role: "Volunteer",
    image: testimonial3,
    quote: "The support we received after the disaster was nothing short of life-changing. When everything we had was lost, the kindness and quick response from this organization.",
    rating: 5
  },
  {
    name: "Sharon McClure",
    role: "Volunteer",
    image: testimonial3,
    quote: "My family and I were able to rebuild not only our home but also a sense of security and future. We are forever grateful to the volunteers & donors who made this possible.",
    rating: 5
  },
  {
    name: "Johnnie Lind",
    role: "Volunteer",
    image: testimonial1,
    quote: "The support we received after the disaster was nothing short of life-changing. When everything we had was lost, the kindness and quick response from this organization.",
    rating: 5
  }
]

export const teamData: TeamType[] = [
  {
    name: "Ahmad Siyar Sirat",
    role: "Chair, Founder",
    description: "Leads the organization, oversees strategic direction, chairs board meetings, and represents AI for Afghanistan globally.",
    image: team1,
    instagram: "https://instagram.com/ahmadsiyar",
    linkedin: "https://linkedin.com/in/ahmadsiyar",
    email: "sirat@ai4afghanistan.org"
  },
  {
    name: "Hedayatullah Farahi",
    role: "Head of Research & Innovation, Co-Founder",
    description: "Advances applied AI research and innovation to develop practical solutions for Afghanistan's key sector challenges.",
    image: team2,
    instagram: "https://instagram.com/hedayatfarahi",
    linkedin: "https://linkedin.com/in/hedayatullah",
    email: "hedayat@ai4afghanistan.org"
  },
  {
    name: "Farshad Azimi",
    role: "Deputy Chair, Co-Founder",
    description: "Ensures leadership continuity, represents the organization when required, and contributes to strategic decisions and governance.",
    image: placeholder,
    instagram: "https://instagram.com/farshadazimi",
    linkedin: "https://linkedin.com/in/farshadazimi",
    email: "farshad@ai4afghanistan.org"
  },
  {
    name: "Sayed Amir Ziwari",
    role: "Treasurer, Co-Founder",
    description: "Administers financial systems, ensures transparency and compliance, and supports planning, budgeting, reporting, and documentation processes.",
    image: placeholder,
    instagram: "https://instagram.com/amirziwari",
    linkedin: "https://linkedin.com/in/amirziwari",
    email: "amir@ai4afghanistan.org"
  },
  {
    name: "Mir Mazhar Kawyani",
    role: "Head of Education & Capacity Building, Co-Founder",
    description: "Directs AI education programs, curriculum development, and capacity-building initiatives to support Afghanistan's emerging AI talent.",
    image: placeholder,
    instagram: "https://instagram.com/mazharkawyani",
    linkedin: "https://linkedin.com/in/mazharkawyani",
    email: "mazhar@ai4afghanistan.org"
  },
  {
    name: "Waheedullah Hakim",
    role: "Head of Partnerships & Cooperation, Co-Founder",
    description: "Fosters Afghanistan's AI ecosystem through academic exchanges, joint initiatives, research partnerships, and international collaboration networks.",
    image: placeholder,
    instagram: "https://instagram.com/waheedhakim",
    linkedin: "https://linkedin.com/in/waheedhakim",
    email: "waheed@ai4afghanistan.org"
  },
  {
    name: "Muhammad Mustafa Halim",
    role: "Head of Fundraising & Resource Mobilization, Co-Founder",
    description: "Develops funding strategies, maintains donor relations, and mobilizes financial resources to advance long-term organizational sustainability.",
    image: placeholder,
    instagram: "https://instagram.com/mustafahalim",
    linkedin: "https://linkedin.com/in/mustafahalim",
    email: "mustafa@ai4afghanistan.org"
  }
]