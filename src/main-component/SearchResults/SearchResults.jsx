import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import PageTitle from "../../components/pagetitle/PageTitle";
import Navbar from "../../components/Navbar";
import SearchRooms from "../../components/SearchRooms/SearchRooms";
import api from "../../api";
import Scrollbar from "../../components/scrollbar";
import Logo from "../../images/logo2.png";
import Footer from "../../components/footer";

import { addToCart } from "../../store/slices/cartSlice";

const SearchResults = () => {
  const dispatch = useDispatch();

  const products = api();

  const addToCartProduct = (product, qty = 1) => {
    dispatch(addToCart({ ...product, qty }));
  };

  return (
    <Fragment>
      <Navbar hclass={"wpo-header-style-3"} Logo={Logo} />
      <PageTitle pageTitle={"Hotel Booking Search"}  />

      <section className="wpo-shop-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SearchRooms
                addToCartProduct={addToCartProduct}
                products={products}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default SearchResults;
