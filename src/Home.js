import React, { useState } from "react";
import "./Home.css";
import Product from "./Product";
import FlipMove from "react-flip-move";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/fall-animation/fall-animation.scss";
import Discover from "./Discover";
import "react-awesome-slider/dist/styles.css";

function Home() {
  const id = Math.floor(Math.random() * 10000000000000000000);

  return (
    <div className="home">
      <div className="home__container">
        <AwesomeSlider cssModule={AwesomeSliderStyles}>
          <img
            data-src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/1500-600._CB404152881_.jpg"
            alt=""
            id="home__image"
            className="home__image"
          />
          <img
            data-src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GW_Availablenow/RV1_GWAvailableNow/P38983965_IN_WLME_SamsungGalaxy_M51_With_Bank_PC_1500x600_2._CB403769220_.jpg"
            alt=""
            id="home__image"
            className="home__image"
          />
          <img
            data-src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Shoes/September/SSW/GW/GW_PC_1500x600._CB404931378_.jpg"
            alt=""
            id="home__image"
            className="home__image"
          />
          <img
            data-src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Banners/XCM_Manual_ORIGIN_1262629_1338382_IN_1_3354545_1500x600_1X_en_IN._CB405622018_.jpg"
            alt=""
            id="home__image"
            className="home__image"
          />
          <img
            id="home__image"
            data-src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC/LPG/LPG_Hero_PC_1500x600._CB407755280_.jpg"
            className="home__image"
            alt=""
          />
          <img
            id="home__image"
            data-src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
            className="home__image"
            alt=""
          />
          <img
            id="home__image"
            data-src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/September/GWBanners/Control/DesktopHero_1500x600._CB405007888_.jpg"
            className="home__image"
            alt=""
          />
          <img
            id="home__image"
            data-src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/MonsterSeries/V203057508_SamsungM_M21_M31_GW_tall_hero_1500x600._CB410822764_.jpg"
            className="home__image"
            alt=""
          />
        </AwesomeSlider>
        <FlipMove duration={555} appearAnimation="elevator">
          <div className="home__row">
            <Product
              id={id}
              first="isFirst"
              price={14993.8}
              rating={5}
              isSection={true}
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/April/MSO/DCQC_TV_186x116_5._SY116_CB434051404_.jpg"
              title="Top picks for your home"
            />
            <Product
              id={id}
              first="isFirst"
              price={14993.8}
              rating={4}
              isSection={true}
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/Covid/Donation_186x116._SY116_CB435243930_.jpg"
              title="Donations, recharges, bills, medicines & more"
            />
            <Product
              id={id}
              first="isFirst"
              price={14993.8}
              rating={4}
              isSection={true}
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-1_186x116._SY116_CB430773131_.jpg"
              title="Home essentials | Amazon Brands & more"
            />
            <Product
              id={id}
              first="isFirst"
              price={14993.8}
              rating={5}
              isSection={true}
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/062020/Bloggers/pc-379-X-304._SY304_CB405459140_.jpg"
              title="Building future​​​​ one byte at a time​​​ | Programmers Day"
            />
          </div>
          <div className="home__row">
            <Product
              id={id}
              image="https://m.media-amazon.com/images/I/71ivrWiYkLL._AC_UY218_.jpg"
              price={14993.8}
              rating={5}
              title="Nintendo Switch with Neon Blue and Neon Red Joy-Console"
            />
            <Product
              id={id}
              image="https://m.media-amazon.com/images/I/41Y8JD3pDRL._AC_UL320_.jpg"
              price={5999.99}
              rating={4}
              title="Oxelo Classic Waveboard Blue Black"
            />
          </div>
          <div className="home__row">
            <Discover />
          </div>
          <div className="home__row">
            <Product
              id={id}
              image="https://m.media-amazon.com/images/I/71NDtDpCrtL._AC_UY218_.jpg"
              price={79999.99}
              rating={4}
              title="Lenovo Yoga C640 81UE0034IN 13.3-inch FHD IPS Convertible Laptop (10th Gen CORE I5-10210U/8GB/512GB SSD/Windows 10/Microsoft Office/Integrated Graphics), Iron Grey"
            />
            <Product
              id={id}
              image="https://m.media-amazon.com/images/I/51jWA6kPFeL._AC_UY218_.jpg"
              price={26500.0}
              rating={5}
              title="CHIST Gaming Desktop Intel Core i5/8Gb/120Gb/500Gb/NVIDIA GTX710 2Gb/20 fullHD "
            />
            <Product
              id={id}
              image="https://m.media-amazon.com/images/I/71RW-dl0szL._AC_UY218_.jpg"
              price={47999.99}
              rating={4}
              title="Xbox One X Cyberpunk 2077 Limited Edition Bundle (1TB)"
            />
          </div>
          <div className="home__row">
            <Product
              id={id}
              price={14993.8}
              rating={4}
              isSection={true}
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Sports/PC_QC_EB_L._SY116_CB406080027_.jpg"
              title="Handpicked exercise & fitness essentials"
            />
            <Product
              id={id}
              price={14993.8}
              rating={5}
              isSection={true}
              image="https://images-eu.ssl-images-amazon.com/images/G/31/Launchpad/2019/FA/GW/1_372X232_option_2._SY116_CB408454446_.jpg"
              title="Up to 70% off | Direct from factory products"
            />
            <Product
              id={id}
              price={14993.8}
              rating={5}
              isSection={true}
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/INKC/ONSITE/379x304_engineersday-04._SY304_CB405352116_.jpg"
              title="Creating marvels for future | Engineers’ Day"
            />
            <Product
              id={id}
              price={14993.8}
              rating={5}
              isSection={true}
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/Gateway/July/MASK_186X116._SY116_CB428862138_.jpg"
              title="Unique finds from Indian startups"
            />
          </div>
          <div className="home__row">
            <Product
              id={id}
              image="https://m.media-amazon.com/images/I/91Vg-6MEI2L._AC_UY218_.jpg"
              price={82499.99}
              rating={5}
              title="Samsung 21.5 inch (54.6 cm) LED Bezel Less Computer Monitor - Full HD, Super Slim AH-IPS Panel "
            />
          </div>
          <div className="home__row">
            <Product
              id={id}
              image="https://m.media-amazon.com/images/I/71ncRs6HzyL._AC_UY218_.jpg"
              price={37999.99}
              rating={4}
              title="OnePlus 7T (Glacier Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 3800mAH Battery)"
            />
            <Product
              id={id}
              image="https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY218_.jpg"
              price={17500.0}
              rating={4}
              title="Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)"
            />
            <Product
              id={id}
              image="https://images-eu.ssl-images-amazon.com/images/I/31+QsRttUnL._AC_SY200_.jpg"
              price={1599.0}
              rating={4}
              title="Redmi Smart Band - Black (Direct USB Charging, 5ATM Water Resistant, Full Touch Color Display, App Notifications, Music Control)"
            />
          </div>
          <div className="home__row">
            <Product
              id={id}
              price={14993.8}
              rating={4}
              isSection={true}
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Covid19/Dashboard/V201712426_IN_CEPC_GW_essentials_May20_rush_dbqc_1x_9._SY116_CB431284897_.jpg"
              title="Stay entertained while you work"
            />
            <Product
              id={id}
              price={14993.8}
              rating={5}
              isSection={true}
              image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg"
              title="For efficient home working"
            />
            <Product
              id={id}
              price={14993.8}
              rating={5}
              isSection={true}
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/WRS__Masksstore_PCQC/1X4._SY116_CB429488904_.jpg"
              title="Pick from these types of masks"
            />
            <Product
              id={id}
              price={14993.8}
              rating={5}
              isSection={true}
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg"
              title="Shop by Category"
            />
          </div>
          <div className="home__row">
            <Product
              id={id}
              image="https://m.media-amazon.com/images/I/51o5RmQtroL._AC_UY218_.jpg"
              price={70500.0}
              rating={5}
              title="Apple iPhone 11 (128GB) - White"
            />
            <Product
              id={id}
              image="https://m.media-amazon.com/images/I/61d-phh4GfL._AC_UY218_.jpg"
              price={19500.0}
              rating={4}
              title="Samsung Galaxy M31s (Mirage Blue, 6GB RAM, 128GB Storage)"
            />
          </div>
        </FlipMove>
      </div>
    </div>
  );
}

export default Home;

//!clone-74fb5.web.app
