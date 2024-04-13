import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const containerStyle = {
  backgroundColor: "#ffffff",
  color: "#000",
  padding: "20px",
  maxWidth: "600px",
  margin: "0 auto",
};

const headingStyle = {
  fontFamily: '"DM Serif Display", serif',
};

const subheadingStyle = {
  fontFamily: "Raleway, sans-serif",
  opacity: 0.5,
  fontSize: "16px",
};

const formStyle = {
  marginTop: "20px",
};

const labelStyle = {
  display: "block",
  marginBottom: "5px",
  fontFamily: "Raleway, sans-serif",
  marginTop: "20px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  fontSize: "16px",
  fontFamily: "Raleway, sans-serif",
  boxSizing: "border-box",
  border: "1px solid #ccc",
  borderRadius: "6px",
};

const Appointment = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(name, email, date);
    
    toast.success('Appointment Confirmed',{
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      setDate('')
    setName('')   
    setEmail('')
    e.preventDefault();

  };
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Book an Appointment</h1>
      <p style={subheadingStyle}>
        Select a time slot below to book your appointment:
      </p>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={labelStyle}>Name:</div>
        <input
          type="text"
          placeholder="Enter your name"
          required
          style={{ ...inputStyle, padding: isMobile ? "8px" : "10px" }}
          value={name}
          onChange={handleName}
        />
        <div style={labelStyle}>Email:</div>
        <input
          type="email"
          placeholder="Enter your email"
          required
          style={{ ...inputStyle, padding: isMobile ? "8px" : "10px" }}
          value={email}
          onChange={handleEmail}
        />
        <div style={labelStyle}>Date & Time:</div>
        <input
          type="datetime-local"
          required
          style={{ ...inputStyle, padding: isMobile ? "8px" : "10px" }}
          value={date}
          onChange={handleDate}
        />
        <button
          type="submit"
          style={{ marginTop: "25px" }}
          className="appointment"
        >
          Book Appointment
        </button>
      </form>
      <ToastContainer position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition: Bounce />
    </div>
  );
};

export default Appointment;
