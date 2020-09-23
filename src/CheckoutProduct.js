import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import FlipMove from "react-flip-move";
import { useStateValue } from "./StateProvider";
import ClearIcon from "@material-ui/icons/Clear";
import { IconButton } from "@material-ui/core";
import { Button, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

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

const CheckoutProduct = forwardRef(
  ({ inOrder, id, image, title, rating, price }, ref) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [{ basket }, dispatch] = useStateValue();
    const handleClick = () => {
      setOpen(true);
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
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
        <div className="checkoutProduct" ref={ref}>
          <img src={image} className="checkoutProduct__img" alt="" />
          <div className="checkoutProduct__info">
            <div className="title">
              <p className="checkoutProduct__title">
                <strong>{title}</strong>
              </p>
              {!inOrder && (
                <span className="cross">
                  <IconButton onClick={handleClick}>
                    <ClearIcon />
                  </IconButton>
                </span>
              )}
            </div>
            <p className="checkoutProduct__price">
              <small>₹</small>
              <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>🌟</p>
                ))}
            </div>
            {!inOrder && (
              <button onClick={handleClick}>Remove from Cart</button>
            )}
          </div>
        </div>
        <div>
          <Snackbar
            bodyStyle={{ backgroundColor: "teal", color: "coral" }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            autoHideDuration={1500}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              maxSnack={3}
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
              <strong>
                <h3 className="imggg">{`Removed ${title} from the Cart`}</h3>
              </strong>
            </Alert>
          </Snackbar>
        </div>
      </>
    );
  }
);

export default CheckoutProduct;
