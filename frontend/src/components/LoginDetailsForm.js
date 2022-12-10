import React from 'react'
import { IoMdClose } from "react-icons/io";
import { MdOutlineDone } from "react-icons/md";
import './Form.css'

export default function LoginDetailsForm({formData ,handleInput,setFormOpen,setNext}) {
  return (
    <div className='form'>
            <h3>Add User | Login Details</h3>
            <input type="text" name="userName"  placeholder="UserName *" value={formData.userName} onChange={handleInput('userName')} />
            <input
              type="text"
              name="firstName"
              
              placeholder="FirstName *"
              value={formData.firstName} onChange={handleInput('firstName')} 
            />
            <input type="text" name="lastName"  placeholder="LastName *"  value={formData.lastName} onChange={handleInput('lastName')}  />
            <input type="email" name="email"  placeholder="Email *"  value={formData.email} onChange={handleInput('email')}/>
            <input type="phone" name="phone"  placeholder="Phone *"  value={formData.phone} onChange={handleInput('phone')} />
            <input
              type="text"
              placeholder="DOB -YYYY/MM/DD"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              value={formData.dob} onChange={handleInput('dob')} 
            />
            <input type="text" name="gender"  placeholder="Gender *"  value={formData.gender} onChange={handleInput('gender')} />
            <input
              type="password"
              name="password"
              
              placeholder="Password"
              value={formData.password} onChange={handleInput('password')}
            />
            <input
              type="text"
              name="Cpassword"
              
              placeholder="Confirm password"
              value={formData.confirmPassword} onChange={handleInput('confirmPassword')}
            />
            <div className="buttons" style={{ padding: "10px", display: "flex" }} >
              <button onClick={() => setFormOpen(false)}>
                <IoMdClose className="icon" />
                close
              </button>
              <button onClick={()=>setNext(true)}>
                <MdOutlineDone className="icon" />
                Procced
              </button>
            </div>
    </div>
  )
}
