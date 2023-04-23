import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import {
  scrolltoservices,
  scrolltoaboutus,
  scrolltocontactus,
} from "./scrollTo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub,faInstagram,faTwitter,faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [toggled, setToggled] = useState(false);

  const togglesocialmedia = () => {
    if (toggled) setToggled(false);
    else setToggled(true);
  };

  return (
    <>
      <nav className={styles.header}>
        <div className={styles.logosection}>
          <Link href="/" className={styles.logocontent}>
            <h1>LANDING PAGE</h1>
          </Link>
        </div>
        <div className={styles.buttonsection}>
          <button className={styles.socialbtn}
          onClick={togglesocialmedia}>
            social media {"  "}
            {toggled ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </button>
          <button onClick={scrolltoservices}>services</button>
          <button onClick={scrolltoaboutus}>about us</button>
          <button onClick={scrolltocontactus}>contact</button>
          {toggled ? (
            <div className={styles.socialmedia}>
              <Link
                href="https://www.instagram.com/"
                className={styles.socialLink}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link
                href="https://www.twitter.com/"
                className={styles.socialLink}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link
                href="https://www.youtube.com/"
                className={styles.socialLink}
              >
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
              <Link
                href="https://github.com/tomengineer27"
                className={styles.socialLink}
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
}

export default Header;
