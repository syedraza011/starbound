import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="top">
            <footer></footer>
            <h3>
              <Link href="/about" About Us>
                About Us
              </Link>
            </h3>
          </div>
          <div className="both">
            <div className="left">
              <h3>Social Media</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="https://vanlifecustoms.com">Youtube</a>
                </li>
                <li>
                  <a href="https://www.contravans.com/camper-van-repair-services">
                    facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.contravans.com/camper-van-repair-services">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.travellers-autobarnrv.com/car-deals-and-campervan-specials">
                    instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="right">
              <h3>Contact Us</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.google.com/maps/dir//Legacy+West,+5908+Headquarters+Dr,+Plano,+TX+75024/@33.0810585,-96.8613826,13z/data=!3m1!5s0x864c3cb9ef318e9d:0x41ee042d076131ae!4m8!4m7!1m0!1m5!1m1!1s0x864c3cb3b7db18f1:0xd61719f6b7b65199!2m2!1d-96.8263461!2d33.0810576">
                    🏠 5908 Headquarters Dr, Plano, TX 75024
                  </a>
                </li>
                <li>
                  <a href="https://voice.google.com/u/0/about">
                    📱800-480-1111
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="bottom">
            <div className="social-icons">
              <a href="https://www.linkedin.com">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://twitter.com">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i className="fa fa-youtube"></i>
              </a>
              <a href="https://www.pinterest.com/">
                <i className="fa fa-pinterest"></i>
              </a>
              <div className="col-md-12">
                <p>&copy;Starbound 2023</p>
                <p>All right reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
