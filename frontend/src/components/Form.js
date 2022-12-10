import React, { useEffect, useState } from "react";
import "./Form.css";
import LoginDetailsForm from "./LoginDetailsForm";
import PersonalDetails from "./PersonalDetails";

export default function Form({setFormOpen ,api }) {

  
  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
    address: "",
    landmark: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
  });
  const handleInput = input=>(e)=>{
     setFormData({...formData,[input]:e.target.value})
}

  const [next, setNext] = useState(false);

  useEffect(()=>{
    api()
  },[])

  const upload = async (e) => {
    e.preventDefault()
   try {
    const { userName,
      firstName,
      lastName,
      email,
      phone,
      dob,
      gender,
      password,
      confirmPassword,
      address,
      landmark,
      city,
      state,
      country,
      zipcode,} =formData
    
      let data = await fetch("/insertCustomer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify({
        userName,
        firstName,
        lastName,
        email,
        phone,
        dob,
        gender,
        password,
        confirmPassword,
        address,
        landmark,
        city,
        state,
        country,
        zipcode,
    }),
      });
      console.log(data)
      if (data.ok) {
        alert("Done ,Customer Registerd");
        setFormOpen(false)
      } 
      else{
        alert("This number or email is already exist")
      }
   } catch (error) {
      alert(error)
   }
  };







  return (
    <div className="allForm">
     
        {next ? (
            <PersonalDetails formData={formData} handleInput={handleInput} setFormOpen={setFormOpen} upload={upload}/>
        ) : (
            <LoginDetailsForm formData={formData} handleInput={handleInput} setFormOpen={setFormOpen} setNext={setNext}/>
        )}
    </div>
  );
}
