"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/contact.module.css";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
// import { roboto } from "@/config/fonts";
import Image from "next/image";
// import { p } from "framer-motion/client";

const ContactCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.cardContainer} ${isVisible ? styles.show : styles.hide}`} >
          <div className={styles.firstSectionCard}>
              <Image 
                width={1000}
                height={1000}
                src={`/contact/MEP2.png`}
                alt={'mep-logo'}
                className="object-fill"
              />
              <div className={styles.followUs}>
                <p className={styles.titleFollowUs}>Follow Us</p>
                <div className={styles.socialMedia}>
                    <a
                        href={'https://www.linkedin.com/company/collectif-engineering-pllc/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.logo}
                      >
                        <FaLinkedinIn size={36} />
                    </a>
                    <a
                        href={'https://www.instagram.com/collectifmep/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.logo}
                      >
                        <IoLogoInstagram size={36} />
                    </a>
                  </div>
                  <p className={styles.descriptionLeftSideText}>
                    Copyright © 2024 COLLECTIF Engineering PLLC
                  </p>
              </div>
          </div>
          <div className={styles.SecondSectionCard}>
              <div className={styles.contactUs}>
                <h1 className={styles.titleAddress}>CONTACT US</h1>
                <p>
                  Whether you are embarking on a new development or renovating an existing space, drop us
                  a line. Let’s design the future together.
                </p>
                 <a
                    href={`mailto:connect@collectif.nyc`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    connect@collectif.nyc
                </a>
                <p>
                  +1 646.610.0343
                </p>
              </div>
              <div className={`${styles.address} ${'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'}`}>
                <div>
                  <p className={styles.titleAddress}>NEW YORK</p>
                  <p>27 W 20th Street Suite 204 New York, NY 10001</p>
                </div>
                <div>
                  <p className={styles.titleAddress}>SAN JUAN</p>
                  <p>1607 Ave. Ponce de Leon STE GME 6 San Juan, PR 00909</p>
                </div>
                <div>
                  <p className={styles.titleAddress}>MIAMI</p>
                  <p>701 Brickell Ave Suite 1550 Miami, FL 33131</p>
                </div>
                <div>
                  <p className={styles.titleAddress}>NEW JERSEY</p>
                  <p>1585 Springfield Ave Suite 2 Maplewood, NJ 07040</p>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ContactCard;
