import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar';
import CheckoutSection from '../../components/CheckoutSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import { useSelector } from "react-redux";
import Logo from '../../images/logo2.png'

const CheckoutPage =() => {

    const cartList = useSelector((state) => state.cart.cart);

    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={'Checkout'} /> 
            <CheckoutSection cartList={cartList}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default CheckoutPage;