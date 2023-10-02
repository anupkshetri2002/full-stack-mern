import {Link} from 'react-router-dom'
import { useState } from 'react'

export default function SignUp() {
  const [formData, setFormData ]= useState({});
  const [error,setError] = useState(null);
  const handleChange= (e) =>{
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
 
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();
  
   
    // console.log(JSON.stringify(formData));
    const res = await fetch('/api/auth/signup',{
      
      method : 'POST',
      headers: {
        
        'Content-Type': 'application/json',
        
      },
      
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
  };
 //console.log(formData);
  
  return (
    <div className='p-3 max-w-lg mx-auto'>
       <h1 className='text-4xl text-center font-semibold my-7'>Sign Up</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input type='text' placeholder='username' className=' border p-3 rounded-lg' id="username" onChange={handleChange} />
          <input type='email' placeholder='email' className=' border p-3 rounded-lg' id="email" onChange={handleChange} />
          <input type='password' placeholder='password' className=' border p-3 rounded-lg' id="password"  onChange={handleChange} />
          <button className='bg-slate-600 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign up</button>
        </form>
        <div className='flex gap-2 mt-5'>
          <p>Already Have an Account?</p>
          <Link to={"/SignIn"}>
            <span className='text-blue-600'>Sign in</span>
          </Link>
        </div>
        {error && <div className='text-sm text-red-600'>{error}</div>}
    </div>
  )
  }
