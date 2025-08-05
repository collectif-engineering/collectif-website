"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/contact.module.css";
import Image from "next/image";

const ContactCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  const todayDate = new Date()
  const year = todayDate.getFullYear()
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300
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
            <div className={styles.headerFirstSection}>
                <span className={styles.textContent}>
                  Whether you are embarking on a new development or renovating an existing space, drop us
                  a line. Let’s design the future together.
                </span>
            </div>
            <div className={styles.contentFirstSection}>
              <div className={styles.contactUs}>
                <div className={styles.boxContant1}>
                  <span>Email</span>
                  <a
                      href={`mailto:connect@collectif.nyc`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.logo}
                  >
                      connect@collectif.nyc
                  </a>
                </div>
                <div className={styles.boxContant2}>
                  <span>Phone</span>
                  <a href="tel:+16466100343" className={styles.logo}>
                    +1 646.610.0343
                  </a>
                </div>
                <div className={styles.boxContant2}>
                  <span>Social Media</span>
                    <div className={styles.socialMedia}>
                        <a
                            href={'https://www.linkedin.com/company/collectif-engineering-pllc/'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.logo}
                          >
                            LinkedIn
                        </a>
                        <span>|</span>
                        <a
                            href={'https://www.instagram.com/collectifmep/'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.logo}
                          >
                            Instagram
                        </a>
                      </div>
                </div>
              </div>
              <div className={`${styles.address} ${'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`}>
                <div>
                  <p className={styles.titleAddress}>NEW YORK</p>
                  <p> 27 W 20th Street Suite 204</p>
                  <p> New York, NY 10001 </p>
                </div>
                <div>
                  <p className={styles.titleAddress}>SAN JUAN</p>
                  <p> 1607 Ave. Ponce de Leon STE GME 6</p> 
                  <p> San Juan, PR 00909 </p>
                </div>
                <div>
                  <p className={styles.titleAddress}>MIAMI</p>
                  <p> 701 Brickell Ave Suite 1550</p>
                  <p> Miami, FL 33131</p>
                </div>
                <div>
                  <p className={styles.titleAddress}>NEW JERSEY</p>
                  <p> 1585 Springfield Ave Suite 2 </p>
                  <p> Maplewood, NJ 07040</p>
                </div>
              </div>
            </div>
          </div>
           <div className={styles.SecondSectionCard}>
              <Image 
                width={100}
                height={100}
                src={`/contact/logo-contact.png`}
                alt={'mep-logo'}
                className="object-fill"
              />
              <div className={styles.followUs}>
                  <p className={styles.descriptionLeftSideText}>
                    {`Copyright © ${year} COLLECTIF Engineering PLLC`}
                  </p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ContactCard;
