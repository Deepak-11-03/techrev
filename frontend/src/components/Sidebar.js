import React, { useState, useEffect } from "react";
import "./CustomerInfo.css";
import {MdPersonOutline, MdOutlineAddBox } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";

import Form from "./Form";

// MdOutlineAddBox

export default function Sidebar() {
  const [customer, setCustomer] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState("");
  const [ formOpen ,setFormOpen] =useState(false)
  const [details ,setDetails] =useState(false)
  const [fullDetails,setFullDetails] =useState({})
  

  useEffect(() => {
    api();
  }, []);

  const api = async () => {
    try {
      let data = await fetch("/selectCustomers", {
        method: "GET",
      });
      data = await data.json();
      setCustomer(data);
    } catch (err) {
      console.log(err);
    }
  };

    const deleteApi =async(id)=>{
      try {
        let data = await fetch(`/deleteCustomer/${id}` , {
          method: "DELETE",
        });
        if(data.ok){
          alert('deleted')
        }
        else{
          alert("something wrong")
        }
      } catch (err) {
        console.log(err);
      }
    }




  const viewDetails = (person) => {
    setDetails(true)
    setFullDetails(person)
  };

  const searchData = (value) => {
    setSearch(value);
    if (search !== "") {
      const filteredData = customer.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setFilterData(filteredData);
    } else {
      setFilterData(customer);
    }
   
  };

  return (
    <>
    <div className="main">
      <div className="allCustomers">
        <div className="controls">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search here..."
          autoComplete="off"
          onChange={(e) => searchData(e.target.value)}
        />
        <i onClick={()=>setFormOpen(true)} title="add"><MdOutlineAddBox style={{"fontSize":"20px","cursor":"pointer"}}/></i>
        </div>
        <div className="contacts">
          {search.length > 1
            ? filterData.map((person) => (
                <div key={person._id} className="info-box">
                  <div onClick={() => viewDetails(person)}>
                    <span>{person.image}</span>
                    <div>
                      <h5>
                        {person.firstName} {person.lastName}
                      </h5>
                      <span>{person.email}</span>
                    </div>
                  </div>
                </div>
              ))
            : customer.map((person) => (
                <div key={person._id} className="info-box">
                  <div onClick={() => viewDetails(person)}>
                    <span>{person.image}</span>
                    <div>
                      <h5>
                        {person.firstName} {person.lastName}
                      </h5>
                      <span>{person.email}</span>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <div className="details">{details ? (
        <div className="container">
            <div className="profile">
            <h1>{fullDetails.firstName}</h1>
            <div>
            <span><MdPersonOutline/> {fullDetails.userName}</span>
            <span><HiOutlineMail/> {fullDetails.email}</span>
            <span><HiOutlinePhone/> {fullDetails.phone}</span>
            </div>
            <button>Edit</button>
            <button onClick={()=>deleteApi(fullDetails._id)}>Delete Customer</button>
            <br />
            <hr />
            </div>
        </div>
      ): (<div className="container">"click to see Details"</div>) }</div>
    </div>
    {formOpen && 
      <div className="popup">   
        <Form setFormOpen={setFormOpen} api={api}/>
        </div>    
    }

    </>
  );
}

