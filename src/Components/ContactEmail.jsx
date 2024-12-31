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
    <div className='w-full h-screen flex justify-center items-center'>

        <form
        onSubmit={handleSubmit}
        onReset={()=>setFormData(initialState)}
        className="flex flex-col gap-2"
        >
            <input
            className="p-2 border border-blue-600 outline-none rounded" 
            type="text"
            placeholder='Enter Email Name'
            name='EmailName'
            value={formData.productName}
            onChange={handlechange}
            required
            />
            <input 
            className="p-2 border border-blue-600 outline-none rounded"
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
              name='Name'
              placeholder='Enter Name'
              value={formData.stock}
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

        <button type="submit" className="px-4 py-2 bg-blue-300 rounded">submit</button>
        <button type="reset" className="px-4 py-2 bg-blue-300 rounded">reset</button>

        </form>



    </div>
  )
}

export default Create