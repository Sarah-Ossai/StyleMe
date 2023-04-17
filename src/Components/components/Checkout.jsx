import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import CheckoutHeader from "./CheckoutHeader";

const Checkout = ({ onClearCart }) => {
  const SHIPPING_FEE = 10; // fixed shipping fee
  const TAX_RATE = 0.1;
  const [totalPrice, setTotalPrice] = useState(0);
  const [shipping, setShipping] = useState(SHIPPING_FEE);
  const [tax, setTax] = useState(TAX_RATE);
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [phoneNo, setphoneNo] = useState("");

  const [email, setEmail] = useState("");

  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [selectedShipping, setSelectedShipping] = useState("");

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneNo = (event) => {
    setphoneNo(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleState = (event) => {
    setState(event.target.value);
  };
  const handleZipCode = (event) => {
    setZipCode(event.target.value);
  };
  const handleCity = (event) => {
    setCity(event.target.value);
  };
  const handleShippingOptionChange = (event) => {
    setSelectedShipping(event.target.value);
  };

  useEffect(() => {
    if (cartItems) {
      const newTotalPrice = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      setTotalPrice(newTotalPrice);
    }
  }, [cartItems]);

  const handleCheckout = (event) => {
    event.preventDefault();
    const form = event.target.form;
    if (form.checkValidity() && selectedShipping) {
      Swal.fire({
        title: "ORDER RECEIVED",
        icon: "success",
        
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);     } else {
        toast.error('Please fill out all form fields completely')
    }
  };
  

  const totalPayment = totalPrice + shipping + (totalPrice * TAX_RATE) / 100;

  return (
    <div>
        <CheckoutHeader/>
      <div className="checkoutDetails  py-32 px-7 md:px-24">
        <h2 className="font-bold text-lg text-gray-700 mb-4 text-4xl py-5">
          Checkout
        </h2>
        <form className="flex gap-14 flex-col md:flex-row" noValidate>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800">
              Billing Details
            </h1>

            <div>
              <div className="grid">
                <div className="my-4 grid gap-2">
                  <label
                    htmlFor="firstname"
                    className="mr-2 text-gray-700 font-medium"
                  >
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    className="outline-gray-500 border border-gray-400 w-full p-1"
                    value={firstName}
                    onChange={handleFirstName}
                    required
                  />
                </div>
                <div className="my-4 grid gap-2">
                  <label
                    htmlFor="lastname"
                    className="mr-2 text-gray-700 font-medium"
                  >
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    className="outline-gray-500 border border-gray-400 w-full p-1"
                    value={lastName}
                    onChange={handleLastName}
                    required
                  />
                </div>
                <div className="my-4 grid gap-2">
                  <label
                    htmlFor="phoneno"
                    className="mr-2 text-gray-700 font-medium"
                  >
                    Phone No <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="telephone"
                    name="phone"
                    className="outline-gray-500 border border-gray-400 w-full p-1"
                    value={phoneNo}
                    onChange={handlePhoneNo}
                    required
                  />
                </div>
                <div className="my-4 grid gap-2">
                  <label
                    htmlFor="email"
                    className="mr-2 text-gray-700 font-medium"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="outline-gray-500 border border-gray-400 w-full p-1"
                    value={email}
                    onChange={handleEmail}
                    required
                  />
                </div>
                <div className="my-4 grid gap-2">
                  <label
                    htmlFor="country"
                    className="mr-2 text-gray-700 font-medium"
                  >
                    Country <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="country"
                    name="country"
                    className="outline-gray-500 border border-gray-400 w-full p-1"
                    value={country}
                    onChange={handleCountry}
                    required
                  />
                </div>
                <div className="my-4 grid gap-2">
                  <label
                    htmlFor="state"
                    className="mr-2 text-gray-700 font-medium"
                  >
                    State <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    required
                    className="outline-gray-500 border border-gray-400 w-full p-1"
                    value={state}
                    onChange={handleState}

                  />
                </div>
             
                    <div className="my-4 grid gap-2">
                      <label
                        htmlFor="city"
                        className="mr-2 text-gray-700 font-medium"
                      >
                        City <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        className="outline-gray-500 border border-gray-400 w-full p-1"
                        value={city}
                        onChange={handleCity}
                      />
                    </div>
                    <div className="my-4 grid gap-2">
                  <label
                    htmlFor="address"
                    className="mr-2 text-gray-700 font-medium"
                  >
                    Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    className="outline-gray-500 border border-gray-400 w-full p-1"
                    value={address}
                    onChange={handleAddress}
                  />
                </div>

                <div className="my-4 grid gap-2">
                  <label
                    htmlFor="zipCode"
                    className="mr-2 text-gray-700 font-medium"
                  >
                    Zip Code <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    required
                    className="outline-gray-500 border border-gray-400 w-full p-1"
                    value={zipCode}
                    onChange={handleZipCode}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-gray-800">Your Order</h2>
            <div>
              <ul className="flex-col flex gap-5">
                {cartItems.map((item) => (
                  <li key={item.id} className="mb-2 flex gap-5">
                    <img
                      src={item.img}
                      alt="cart-item"
                      className="w-[70px] h-[70px] flex-2 object-cover"
                    />
                    <div className="flex-2">
                      <span className="mr-2 font-bold text-black">
                        {item.title}
                      </span>

                      <div className="text-gray-500 flex items-center">
                        <div>Quantity: {item.quantity}</div>
                      </div>
                    </div>
                    <div className="flex-1  text-right ">
                      <p className="text-gray-700 font-medium">
                        $ {item.price}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-gray-600">
              <div className="flex justify-between items-center my-4 ">
                <span className="text-gray-700 font-medium">Subtotal:</span>
                <span className="text-red-700 font-bold">$ {totalPrice}</span>
              </div>
              <div className="flex justify-between items-center my-4 ">
                <span className="text-gray-700 font-medium">Tax:</span>
                <span className="text-red-700 font-bold">{TAX_RATE}%</span>
              </div>
              <div className="my-4">
                <label
                  htmlFor="shipping"
                  className="mr-2 text-gray-700 font-medium"
                >
                  Shipping:
                </label>
                <select
                  id="shipping"
                  name="shipping"
                  value={shipping}
                  onChange={(event) => setShipping(Number(event.target.value))}
                  className="outline-gray-400 border border-gray-400"
                >
                  <option value="10">Express ($10)</option>
                  <option value="0">Free</option>
                </select>
                <br />

                <br />

                <div className="flex justify-between mb-5">
                  <span className="text-gray-700 font-medium">
                    Total Payment:
                  </span>
                  <span className="text-red-700 font-bold">
                    ${totalPayment.toFixed(2)}
                  </span>
                </div>

                <div>
                  <div>
                    <div className="flex gap-2 text-black text-[18px] font-medium">
                      <input
                        type="radio"
                        id="bank-transfer"
                        name="payment-method"
                        value="bank-transfer"
                        onChange={handleShippingOptionChange}

                      />
                      <label htmlFor="bank-transfer">
                        Direct Bank Transfer
                      </label>
                    </div>
                    <br />
                    <div className="flex gap-2 text-black text-[18px] font-medium">
                      <input
                        type="radio"
                        id="check-payment"
                        name="payment-method"
                        value="check-payment"
                        onChange={handleShippingOptionChange}

                      />
                      <label htmlFor="check-payment">Check Payment</label>
                    </div>
                    <br />
                    <div className="flex gap-2 text-black text-[18px] font-medium">
                      <input
                        type="radio"
                        id="cash-on-delivery"
                        name="payment-method"
                        value="cash-on-delivery"
                        onChange={handleShippingOptionChange}

                      />
                      <label htmlFor="cash-on-delivery">Cash On Delivery</label>
                    </div>
                  </div>

                  <br />
                  <p className="text-lg">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>
                </div>
                <br />
                <button
                  className="bg-red-600 text-white py-2 px-4 rounded-lg w-1/2"
                  onClick={handleCheckout}
                >
                  Submit Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />

      <Footer />
    </div>
  );
};
export default Checkout;
