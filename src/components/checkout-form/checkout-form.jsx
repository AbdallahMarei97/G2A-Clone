import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./checkout-form.css"
import Swal from 'sweetalert2'

function CheckoutForm({setLoggedUser}) {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("loggedUser")))
    const navigate = useNavigate();
    const [checkoutInfo,setCheckoutInfo] = useState({
        mobile: "",
        address: "",
        country: "",
        city: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCheckoutInfo({ ...checkoutInfo, [name]: value });
      };

    const handleCheckout = (e) => {
        e.preventDefault();
        user.cartItems.length = 0;
        localStorage.setItem("loggedUser", JSON.stringify(user));
        const allUsers = JSON.parse(localStorage.getItem("users"));
        const filteredAllUsers = allUsers.filter((data) => user.id !== data.id);
        filteredAllUsers.push(user);
        localStorage.setItem("users", JSON.stringify(filteredAllUsers));
        setUser(JSON.parse(localStorage.getItem("loggedUser")));
        setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")));
        Swal.fire({
          icon: "success",
          title: "Thank you",
          text: "Thank you for purchasing from us",
        }).then((result) => {
          navigate("/")
        }
        );
    }

    return (
        <div className='checkout-form-container'>
            <form onSubmit={handleCheckout}>
            <div>
          <label>Full Name</label>
          <input
            type="text"
            value={user.firstName + " " + user.lastName}
            readOnly
          />
        </div>
        <div>
          <label>Email</label>
          <input type="text" value={user.email} readOnly />
        </div>
        <div>
          <label>Mobile Number</label>
          <input
            name="mobile"
            type="tel"
            value={checkoutInfo.mobile}
            onChange={handleChange}
            required
            min="10"
          />
        </div>
        <div>
          <label>Country</label>
          <input
            name="country"
            type="text"
            value={checkoutInfo.country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>City</label>
          <input
            name="city"
            type="text"
            value={checkoutInfo.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address</label>
          <input
            name="address"
            type="text"
            value={checkoutInfo.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit' className='checkout-btn'>Confirm Purchase</button>
            </form>
        </div>
    )
}

export default CheckoutForm
