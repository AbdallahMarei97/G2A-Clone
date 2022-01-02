import React,{useState} from 'react'
import "./coupon.css"
import Swal from 'sweetalert2'

function Coupon() {
    const [couponAmount,setCouponAmount] = useState("");
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("loggedUser")));
    const [totalPrice,setTotalPrice] = useState(user.cartItems.reduce((total,item) => total + item.quantity * item.price, 0))

    const handleCouponChange = (e) => {
        setCouponAmount(e.target.value);
    }

    const handleCouponSubmit = (e) => {
        e.preventDefault();
        if(totalPrice === user.cartItems.reduce((total,item) => total + item.quantity * item.price, 0)){
            if(couponAmount === "a1997"){
                setTotalPrice(totalPrice - totalPrice * 0.1)
                Swal.fire({
                    icon: "success",
                    title: "Good Job",
                    text: "Thank you for using the coupon",
                  });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Wrong coupon",
                  });
            }

        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Wrong coupon",
              });
        }
    }
    return (
        <div className='coupon-form-container'>
            <form onSubmit={handleCouponSubmit}>
            <div>
          <label>Enter Coupon</label>
          <input
            type="text"
            value={couponAmount}
            required
            onChange={handleCouponChange}
          />
        </div>
        <button type='submit' className='coupon-btn '>Add Coupon</button>
            </form>
            <p className='coupon-total-price'>Total Price: ${totalPrice}</p>
        </div>
    )
}

export default Coupon
