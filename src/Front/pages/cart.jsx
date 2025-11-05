import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from "../../redux/feacture/cartSlice";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const cart = useSelector((state) => state.cart?.cartItems || []);
  const dispatch = useDispatch();

  const totalAmount = cart.reduce((acc, item) => {
    const price =
      typeof item.price === "string"
        ? Number(item.price.replace(/[^0-9.]/g, ""))
        : Number(item.price || 0);
    return acc + price * item.quantity;
  }, 0);

  // ✅ Empty Cart
  if (cart.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-linear-to-b from-black via-[#0b0b22] to-[#1a0d24] flex flex-col items-center justify-center text-white"
      >
        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Cart"
          className="w-32 mb-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-yellow-400 mb-2"
        >
          Your Cart is Empty 🛒
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 mb-4"
        >
          Add your favorite products and make your shopping shine ✨
        </motion.p>
        <motion.a
          href="/product"
          whileHover={{ scale: 1.05 }}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition font-medium"
        >
          View Products
        </motion.a>
      </motion.div>
    );
  }

  // ✅ Cart Page
  return (
    <div className="min-h-screen bg-linear-to-b from-black via-[#0b0b22] to-[#1a0d24] text-white py-10 px-6 pt-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-10 text-yellow-400 drop-shadow-[0_0_6px_#FFD700]"
        >
          Your Shopping Cart
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left - Cart Items */}
          <div className="md:col-span-2 space-y-6">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col md:flex-row items-center bg-[#121212]/80 border border-yellow-600/30 p-4 rounded-lg shadow-md hover:shadow-yellow-500/20 transition-all duration-300"
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={item.img}
                    alt={item.title}
                    className="w-28 h-28 object-contain rounded-md mb-4 md:mb-0 border border-yellow-600/40"
                  />
                  <div className="flex-1 md:ml-6">
                    <h3 className="text-lg font-semibold text-yellow-300">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <p className="text-red-400 font-medium">₹{item.price}</p>
                      {item.oldPrice && (
                        <p className="text-gray-500 line-through text-sm">
                          ₹{item.oldPrice}
                        </p>
                      )}
                      {item.tag && (
                        <span className="text-xs bg-yellow-500 text-black px-2 py-0.5 rounded">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 mt-3">
                      <button
                        onClick={() => dispatch(decrementQuantity(item))}
                        className="px-3 py-1 border border-yellow-600 rounded hover:bg-yellow-600/20 transition"
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(incrementQuantity(item))}
                        className="px-3 py-1 border border-yellow-600 rounded hover:bg-yellow-600/20 transition"
                      >
                        +
                      </button>

                      <button
                        onClick={() => dispatch(removeFromCart(item))}
                        className="ml-4 text-sm text-gray-300 hover:text-red-500 transition"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => dispatch(clearCart())}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md mt-4 transition font-medium"
            >
              Clear Cart
            </motion.button>
          </div>

          {/* Right - Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-[#121212]/80 p-6 rounded-lg border border-yellow-600/30 shadow-lg hover:shadow-yellow-400/10 transition"
          >
            <h3 className="text-2xl font-bold mb-4 text-yellow-300 text-center">
              🔮 Order Summary 🔮
            </h3>
            <div className="flex justify-between mb-2">
              <span>Total Items</span>
              <span>{cart.length}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{totalAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-4 border-t border-gray-700 pt-2">
              <span className="font-semibold">Total Amount</span>
              <span className="text-red-400 font-bold">
                ₹{totalAmount.toLocaleString()}
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded-md font-semibold transition"
            >
              Proceed to Checkout
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;