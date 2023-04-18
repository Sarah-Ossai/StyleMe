import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from "react-router-dom";
import { HourglassBottomOutlined } from "@mui/icons-material";

const Cart = ({ cartItems = [], setCartItem, setCartItems, handleCartUpdate }) => {
  const history = useNavigate();

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
  }, 0);
  const handleDeleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete this item from your cart?")) {
      const updatedCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCartItems);
      setCartItem((prevCartItems) => prevCartItems.filter((item) => item.id !== id));
      handleCartUpdate(updatedCartItems);
    }

  };
  

  
  

  const handleCheckout = () => {
    window.scrollTo(0, 0);

    history('/checkout', { state: { cartItems } }) 
    
   };

  return (
    <div>
        <div className="bg-white fixed absolute h-screen -top-2  md:top-0 right-0 w-96 p-4 z-10 overflow-y-auto pb-24">
          <div className="flex justify-between pb-5">
            <h2 className="font-bold text-lg text-gray-700 mb-4">Cart</h2>
          </div>
          {cartItems.length === 0 ? (
            <div className="text-center ">
            <p className="text-black text-xl font-medium">Your cart is empty.</p>
            <br/>
            <br/>
            <HourglassBottomOutlined className="text-gray-400" style={{fontSize: "4em"}}/>
            <br/>
            <br/>
            <p className="text-gray-600">Select an item from the product list</p>
            </div>
            
          ) : (
            <ul className="flex-col flex gap-5">
              {cartItems.map((item) => (
                <li key={item.id} className="mb-2 flex gap-5">
                  <img
                    src={item.img}
                    alt="cart-item"
                    className="w-[70px] h-[70px] flex-2 object-cover"
                  />
                  <div className="flex-2">
                    <span className="mr-2 font-bold text-black">{item.title}</span>
                    <p className="text-gray-700 font-medium">$ {item.price}</p>
                    <div className="text-gray-500 flex items-center">
                      <div>Quantity: {item.quantity}</div>
                    </div>
                  </div>
                  <div className="flex-1 flex justify-end ">
                    <button
                      className="text-red-500"
                      onClick={() => handleDeleteItem(item.id)}
                      >
                      <DeleteForeverIcon />
                    </button>
                  
                  </div>
                </li>
              ))}
            </ul>
          )}
          {cartItems.length > 0 && (
            <div>
              <div className="flex justify-between items-center my-4">
                <span className="text-gray-700 font-medium">Total:</span>
                <span className="text-red-700 font-bold">$ {totalPrice}</span>
              </div>
              <button className="bg-red-600 text-white py-2 px-4 rounded-lg w-full" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          )}
        </div>

    </div>
  );
};

export default Cart;
