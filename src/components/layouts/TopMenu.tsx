import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaAngleDown } from 'react-icons/fa6'
import demo1Img from '@/assets/img/demo/vl-demo1.1.png'
import demo2Img from '@/assets/img/demo/vl-demo-1.2.png'
import demo3Img from '@/assets/img/demo/vl-demo-1.3.png'
import demo4Img from '@/assets/img/demo/vl-demo-1.4.png'
import demo5Img from '@/assets/img/demo/vl-demo-1.5.png'
import { Col, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const TopMenu = () => {
  return (
    <ul>
      <li>
        <a href="#">Home <FaAngleDown className="fa-solid fa-angle-down align-bottom" /></a>
        <div className="tp-submenu">
          <Row>
            <Col lg={12}>
              <div className="d-flex">
                <div className="homemenu-thumb">
                  <div className="img1">
                    <Image src={demo1Img} width={229} height={317} alt='demo1Img' />
                  </div>
                  <div className="homemenu-btn">
                    <Link className="header-btn1 mb-20" href="/home">Multi Page <span><FaArrowRight /></span></Link>
                    <Link className="header-btn1" href="/home-single">One Page <span><FaArrowRight /></span></Link>
                  </div>
                  <h4 className="home-thumb-title">Disaster Relief</h4>
                </div>

                <div className="homemenu-thumb">
                  <div className="img1">
                    <Image src={demo2Img} width={229} height={317} alt='demo2Img' />
                  </div>
                  <div className="homemenu-btn">
                    <Link className="header-btn1 mb-20" href="/multi-page/animal-rescue">Multi Page <span><FaArrowRight /></span></Link>
                    <Link className="header-btn1" href="/animal-rescue">One Page <span><FaArrowRight /></span></Link>
                  </div>
                  <h4 className="home-thumb-title">Animal Rescue and Welfare</h4>
                </div>
                <div className="homemenu-thumb">
                  <div className="img1">
                    <Image src={demo3Img} width={229} height={317} alt='demo3Img' />
                  </div>
                  <div className="homemenu-btn">
                    <Link className="header-btn1 mb-20" href="/multi-page/water-aid">Multi Page <span><FaArrowRight /></span></Link>
                    <Link className="header-btn1" href="/water-aid">One Page <span><FaArrowRight /></span></Link>
                  </div>
                  <h4 className="home-thumb-title">Water aid</h4>
                </div>
                <div className="homemenu-thumb">
                  <div className="img1">
                    <Image src={demo4Img} width={229} height={317} alt='demo4Img' />
                  </div>
                  <div className="homemenu-btn">
                    <Link className="header-btn1 mb-20" href="/multi-page/senior-citizen">Multi Page <span><FaArrowRight /></span></Link>
                    <Link className="header-btn1" href="/senior-citizen">One Page <span><FaArrowRight /></span></Link>
                  </div>
                  <h4 className="home-thumb-title">Senior Citizen</h4>
                </div>
                <div className="homemenu-thumb">
                  <div className="img1">
                    <Image src={demo5Img} width={229} height={317} alt='demo5Img' />
                  </div>
                  <div className="homemenu-btn">
                    <Link className="header-btn1 mb-20" href="/multi-page/human-rights">Multi Page <span><FaArrowRight /></span></Link>
                    <Link className="header-btn1" href="/human-rights">One Page <span><FaArrowRight /></span></Link>
                  </div>
                  <h4 className="home-thumb-title"> Human Rights Advocacy</h4>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </li>
      <li><Link href="/about">About</Link></li>
      <li><a href="#">Events <FaAngleDown className="fa-solid fa-angle-down align-bottom" /></a>
        <ul className="dropdown-padding">
          <li><Link href="/event">Events</Link></li>
          <li><Link href="/event-left">Events Left</Link></li>
          <li><Link href="/event-right">Events Right</Link></li>
          <li><Link href="/event-single">Events Single</Link></li>
        </ul>
      </li>
      <li><a href="#">Blogs <FaAngleDown className="fa-solid fa-angle-down align-bottom" /></a>
        <ul className="dropdown-padding">
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/blog-left">Blog Left</Link></li>
          <li><Link href="/blog-right">Blog Right</Link></li>
          <li><Link href="/blog-single">Blog Single</Link></li>
        </ul>
      </li>
      <li><a href="#">Pages <FaAngleDown className="fa-solid fa-angle-down align-bottom" /></a>
        <ul className="dropdown-padding">
          <li><Link href="/pages/service">Our Services</Link></li>
          <li><Link href="/pages/team">Our Volunteers</Link></li>
          <li><Link href="/pages/faq">FAQ</Link></li>
          <li><Link href="/pages/contacts">Contact</Link></li>
          <li><Link href="/pages/error-404">404</Link></li>
        </ul>
      </li>
      <li><a href="#">Causes <FaAngleDown className="fa-solid fa-angle-down align-bottom" /></a>
        <ul className="dropdown-padding">
          <li><Link href="/cause">Causes</Link></li>
          <li><Link href="/cause-left">Causes Left</Link></li>
          <li><Link href="/cause-right">Causes Right</Link></li>
          <li><Link href="/cause-single">Causes Single</Link></li>
        </ul>
      </li>
    </ul>
  )
}

export default TopMenu