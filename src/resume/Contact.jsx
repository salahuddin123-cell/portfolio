import React, { useState } from 'react'
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [info,setinfo]=useState({})
  
    const onSubmit = async(data) => {
    //  data.preventDefault()
    setinfo(data)
    
     const response=await fetch('https://reactfirebasesite-3796a-default-rtdb.firebaseio.com/userdata.json',
    { method:'POST',
     Headers:{
         "content-type":"application/json",
     },
     body:JSON.stringify(info)
    }

     )
    if(response){
      alert("thank you I will contact you.")

    }else{
        alert("please fill the data")
    }
        
    }
    return (
        <>

        <div className="contact">
         <form className="form" onSubmit={handleSubmit(onSubmit)}>
         <div className="mb-3">
    <label for="fname" className="form-label">First name :</label><br />
    <input type="text"  className="form-control s" id="fname" {...register("fname", { required: true, maxLength: 10 })} className="required input_field" />
    {errors.fname && <p>Please check the First Name</p>}
  </div>
  <div class="mb-3">
    <label for="lname" class="form-label">Last name : </label><br />
    <input type="text" class="form-control s"  id="lname"{...register("lname", { required: true, maxLength: 10 })} className="required input_field" />
    {errors.lname && <p>Please check the last Name</p>}
  </div>
  <div class="mb-3">
    <label for="Email1" class="form-label">Email address :</label><br />
    <input type="email" class="form-control s" id="Email1" {...register("email",
                                {
                                    required: true,
                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                })} className="validate-email required input_field" />
     {errors.email && <p>Please check the Email</p>} 
    
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

  
        </div>
        
   
    
        </>
    )
}

export default Contact
