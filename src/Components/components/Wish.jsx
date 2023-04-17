import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { HourglassBottomOutlined } from "@mui/icons-material";

const Wish = ({
  wishItems = [],
  prevCartItems = [], // initialize prevCartItems as an empty array if it is undefined/null
  setCartItem,
  setWishItem,
  setWishItems,
  setCartCount,
   handleWishUpdate,
   onAddToCartFromWish
}) => {

  
  const [, setValue] = useState(1);

 
  const handleAddToCartFromWishlist = (item) => {

    const itemIndex = wishItems.findIndex((wItem) => wItem.id === item.id);
    if (itemIndex === -1) {
      setCartItem([
        ...prevCartItems,
        {
          id: item.id,
          img: item.img,
          title: item.title,
          price: item.price,
          quantity: 1
        },
      ]);
      setCartCount((prevCount) => prevCount + 1);
  
      const updatedWishItems = wishItems.filter((wItem) => wItem.id !== item.id); 
      setWishItems(updatedWishItems);
      setWishItem((prevWishItems) => prevWishItems.filter((wItem) => wItem.id !== item.id)); 
      handleWishUpdate(updatedWishItems);
    } else {
      const updatedCartItems = [...prevCartItems];
      const itemToUpdate = updatedCartItems[itemIndex];
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
        setCartItem(updatedCartItems);
      }
    }
  
    const updatedWishItems = wishItems.filter((wItem) => wItem.id !== item.id); // fix here
    setWishItems(updatedWishItems);
    setWishItem((prevWishItems) => prevWishItems.filter((wItem) => wItem.id !== item.id)); // fix here
    handleWishUpdate([...updatedWishItems]);
    onAddToCartFromWish([
      item.id,
      item.img,
      item.title,
      item.price
    ]);
    setValue(1);
  };
  
  
    


  const handleDeleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete this item from your cart?")) {
      const updatedWishItems = wishItems.filter((item) => item.id !== id);
      setWishItems(updatedWishItems);
      setWishItem((prevWishItems) => prevWishItems.filter((item) => item.id !== id));
      handleWishUpdate(updatedWishItems);
    }

  };
  

  
  


  

  // Calculate the total price of all items in the cart
  const totalPrice = wishItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <div className="bg-white fixed absolute h-screen -top-2  md:top-0 right-0 w-96 p-4 z-10 overflow-y-auto pb-24">
        <div className="flex justify-between pb-5">
          <h2 className="font-bold text-lg text-gray-700 mb-4">Wishlist</h2>
        </div>
        {wishItems.length === 0 ? (
      <div className="text-center ">
      <p className="text-black text-xl font-medium">Your wishlist is empty.</p>
      <br/>
      <br/>
      <HourglassBottomOutlined className="text-gray-400" style={{fontSize: "4em"}}/>
      <br/>
      <br/>
      <p className="text-gray-600">Select an item from the product list</p>
      </div>        ) : (
          <ul className="flex-col flex gap-5">
            {wishItems.map((item) => (
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
                  <p className="text-gray-700 font-medium">$ {item.price}</p>
                  <div className="text-gray-500 flex items-center">
                    <div>Quantity: {item.quantity}</div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col pr-3 gap-2 place-items-end ">
                  <button
                    className="text-green-500"
                    onClick={() => handleAddToCartFromWishlist(item)} 
                    >
                    <ShoppingCartCheckoutIcon />
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() => handleDeleteItem(item.id)}>
                    <DeleteForeverIcon />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        {wishItems.length > 0 && (
          <div>
            <div className="flex justify-between items-center my-4">
              <span className="text-gray-700 font-medium">Total:</span>
              <span className="text-red-700 font-bold">$ {totalPrice}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wish;
