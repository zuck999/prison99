import axios from 'axios';
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


function Login() {
    

    const navigate = useNavigate();

    const [loader , setLoader] = useState(false);

    const [input , setInput] = useState({
        email:"",
        password:""
    });

    function changeEventHandler(e){
        setInput({...input , [e.target.name]:e.target.value});
    }

    async function  logoutHandler(e){
        setLoader(true);
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/v1/user/login',input,{
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true
            });
            if(res.data.success){
                setInput({
                    email:"",
                    password:""
                });
                navigate('/');
            }

        } catch (error) {
            console.log(error)

        }finally{
            setLoader(false);
        }
    }

  return (
    <>

<div className='flex items-center w-screen h-screen justify-center'>
    <form onSubmit={logoutHandler} className='shadow-xl shadow-rose-100 flex flex-col gap-5 p-8 rounded-lg'>

        <div>
            <h1 className='text-center font-bold'>LOGO</h1>
            <p className='text-center px-14'>login to see friends</p>
        </div>

        <div>
        <span className="py-2 font-medium">email</span>
        <Input type="email" value={input.email} name="email" onChange={changeEventHandler} className="focus-visible:ring-transparent"/>
        </div>

        <div>
        <span className="py-2 font-medium">password</span>
        <Input type="password" value={input.password} name='password' onChange={changeEventHandler}  className="focus-visible:ring-transparent"/>
        </div>

        {
            loader ? (
                <Button>
                    <Loader2 className="animate-spin"/>
                </Button>
            ):(
                <Button type="submit">Submit</Button>
            )
        }

        <span>don't have an account? <Link className='text-blue-600' to="/signup">signup</Link></span>

    </form>
</div>
      
    </>
  )

}

export default Login
