import React from 'react'
import { IoBookmark } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import './Form.css'

export default function PersonalDetails({formData ,handleInput,setFormOpen,upload}) {
  return (
    <div className='form'>
            <h3>Add User | Profile Details</h3>
            <input
              type="text"
              name="address"
              placeholder="Address Lane 1"
              ovalue={formData.address}  onChange={handleInput('address')} 
            />
            <input type="text" name="landmark" placeholder="Landmark"  value={formData.landmark} onChange={handleInput('landmark')} />
            <input type="text" name="city" placeholder="City" value={formData.city}  onChange={handleInput('city')}   />
            <input type="text" name="state" placeholder="State" value={formData.state}  onChange={handleInput('state')} />
            <input type="text" name="country" placeholder="Country" value={formData.country}  onChange={handleInput('country')}  />
            <input type="text" name="zipcode" placeholder="Zipcode" value={formData.zipcode}  onChange={handleInput('zipcode')}   />
            <div
              className="buttons"
              style={{ padding: "10px", display: "flex" }}
            >
              <button onClick={() => setFormOpen(false)}>
                {" "}
                <IoMdClose className="icon" />
                close
              </button>
              <button type="submit" onClick={upload}>
                <IoBookmark className="icon" /> Save
              </button>
            </div>
    </div>
  )
}
