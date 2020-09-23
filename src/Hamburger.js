import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Hamburger.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";

const category = [
  "Amazon Originals",
  "Amazon Music",
  "Kindle E-readers",
  "Sunglasses",
  "Mobiles",
  "Televisions",
  "Laptops",
  "Cameras",
  "Amazon Fashion",
  "Apparel",
  "Watches",
  "Jewellery",
  "Shoes",
  "Books",
  "Movies & TV Shows",
  "Music",
  "Video Games",
  "Home & Kitchen",
  "Pet Supplies",
  "Car & Motorbike",
  "Toys & Baby Products",
  "Sports",
  "Beauty & Health",
  "Beauty",
  "Health",
  "Personal Care Appliances",
  "Household Supplies",
  "TV & Entertainment",
  "Home Entertainment",
  "Musical Instruments",
  "Office Supplies",
  "Accessories",
  "Fashion Accessories",
  "Luggage",
  "Travel Accessories",
];

function Hamburger() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <Menu
      width={"20%"}
      customBurgerIcon={
        <img src="https://raw.githubusercontent.com/HARSHITHV25/Amazon-clone-app/7acacad66cd2a30ff9d3bee29916116c951d565e/public/menu.svg" />
      }
      customCrossIcon={
        <img
          className="dark"
          src="https://raw.githubusercontent.com/HARSHITHV25/Amazon-clone-app/7acacad66cd2a30ff9d3bee29916116c951d565e/public/close.svg"
        />
      }
    >
      <div className="menu__head">
        <Avatar src={user?.photoURL} />
        <h4>
          {" "}
          {user ? (
            <span>
              Hello,{" "}
              {user.email
                .substring(0, user.email.lastIndexOf("@"))
                .toUpperCase()}
            </span>
          ) : (
            <Link to="/login">
              {" "}
              <p className="signin">Hello, Sign In</p>{" "}
            </Link>
          )}
        </h4>
      </div>
      <div className="menu__category">
        <h4 contentEditable="false">Shop By Category</h4>
        {category.map((item) => (
          <a id="home" className="menu__item" href="/">
            <span>{item}</span>
            <ChevronRightIcon className="right" />
          </a>
        ))}
      </div>
    </Menu>
  );
}

export default Hamburger;
