import React, { useState, useEffect } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import { Button, IconButton, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import Start from "@material-ui/icons";
import { Link } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function Product({
  id,
  image,
  title,
  rating,
  price,
  first,
  isSection = false,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, dispatch] = useStateValue();
  const handleClick = (e) => {
    setOpen(true);
    dispatch({
      type: actionTypes.SET_ITEMS,
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <div className={`product ${first === "isFirst" && "first"}`}>
        <div className="product__info">
          {!isSection ? (
            <p>{title}</p>
          ) : (
            <p className="strong">
              <strong>
                <em>{title}</em>
              </strong>
            </p>
          )}
          {!isSection && (
            <p className="product__price">
              <small>₹</small>
              <strong>{price}</strong>
            </p>
          )}
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
        <img
          src={image}
          className={`imagesssss ${isSection && "section"}`}
          alt=""
        />
        {!isSection ? (
          <button onClick={handleClick}>Add to Cart</button>
        ) : (
          <Link to="/" className="seemore">
            See More
          </Link>
        )}
      </div>
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="warning"
            maxSnack={5}
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          >
            <Link to="/cart">
              <center>
                <strong>
                  <h3 className="imggg">{`Added ${title} to the Cart`}</h3>
                </strong>
              </center>
              <center>
                <img className="imgg" src={image} alt="" />
              </center>
              <center>
                <strong>
                  <h2>₹{price}</h2>
                </strong>
              </center>
            </Link>
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}

export default Product;
