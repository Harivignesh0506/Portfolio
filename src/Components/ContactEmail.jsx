import React, { useState } from 'react'

const initialState ={
    EmailName: "",
    Name: "",
    phoneNumber: "",
    description: "",
};

const Create = () => {

    const[formData,setFormData] = useState(initialState); 

const handlechange = (event) =>{
    const{name,value} = event.target
    setFormData((prevFormdata) =>({...prevFormdata,[name]:value}));
};

const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData);
    setFormData(initialState);
    
};




  return (
    

        <form
        onSubmit={handleSubmit}
        onReset={()=>setFormData(initialState)}
        className="flex flex-col gap-2 "
        >

            <div className=''>
            <input
            className="p-2 border border-blue-600 outline-none rounded mr-2" 
            type="text"
            placeholder='Enter Email Name'
            name='EmailName'
            value={formData.productName}
            onChange={handlechange}
            required
            />

            <input
              className="p-2 border border-blue-600 outline-none rounded" 
              type="text"
              name='Name'
              placeholder='Enter Name'
              value={formData.stock}
              onChange={handlechange}
              required
              />

            </div>
           
          <div>
          <input 
            className="p-2 border border-blue-600 outline-none rounded mr-2"
            type="number"
            name='phoneNumber'
            placeholder='Enter PhoneNumber'
            value={formData.price}
            onChange={handlechange}
            required
             />

          
              
              <input
               className="p-2 border border-blue-600 outline-none rounded" 
               type="text"
               name='description'
               placeholder='Enter the Description'
               value={formData.description}
               onChange={handlechange}
               required
               />
          </div>

        <button type="submit" className="px-4 py-2 bg-blue-300 rounded">submit</button>
        <button type="reset" className="px-4 py-2 bg-blue-300 rounded">reset</button>

        </form>



    
  )
}

export default Create