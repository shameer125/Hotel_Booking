import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/slices/cartSlice";

import "./style.scss";

const CheckWrap = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const carts = useSelector((state) => state.cart.cart);

  const [value, setValue] = useState({
    email: "user@gmail.com",
    password: "123456",
    card_holder: "Jhon Doe",
    card_number: "589622144",
    cvv: "856226",
    expire_date: "",
    remember: false,
  });

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const [validator] = React.useState(
    new SimpleReactValidator({
      className: "errorMessage",
    }),
  );

  const submitForm = (e) => {
    e.preventDefault();

    if (!carts || carts.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    if (validator.allValid()) {
      validator.hideMessages();

      const userRegex = /^user+.*/gm;
      const email = value.email;

if (email.match(userRegex)) {
  dispatch(clearCart()); 
  toast.success("Order Recived sucessfully!");
  push("/order_received");
}
    } else {
      validator.showMessages();
      toast.error("Empty field is not allowed!");
    }
  };

  return (
    <div className="cardbp mt-20">
      <form onSubmit={submitForm}>
        <div className="row g-3">
          <div className="col-sm-6 col-12">
            <TextField
              fullWidth
              label="Card holder Name"
              name="card_holder"
              value={value.card_holder}
              onChange={changeHandler}
              type="text"
              InputLabelProps={{ shrink: true }}
              className="formInput radiusNone"
            />
          </div>

          <div className="col-sm-6 col-12">
            <TextField
              fullWidth
              label="Card Number"
              name="card_number"
              value={value.card_number}
              onChange={changeHandler}
              type="number"
              InputLabelProps={{ shrink: true }}
              className="formInput radiusNone"
            />
          </div>

          <div className="col-sm-6 col-12">
            <TextField
              fullWidth
              label="CVV"
              name="cvv"
              value={value.cvv}
              onChange={changeHandler}
              type="text"
              InputLabelProps={{ shrink: true }}
              className="formInput radiusNone"
            />
          </div>

          <div className="col-sm-6 col-12">
            <TextField
              fullWidth
              label="Expire Date"
              name="expire_date"
              value={value.expire_date}
              onChange={changeHandler}
              type="date"
              InputLabelProps={{ shrink: true }}
              className="formInput radiusNone"
            />
          </div>

          <div className="col-12">
            <Button
              fullWidth
              className="cBtn cBtnLarge cBtnTheme mt-20 ml-15"
              type="submit"
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckWrap;
