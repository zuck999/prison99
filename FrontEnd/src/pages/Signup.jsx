import axios from 'axios';
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

function Signup() {

    const navicate = useNavigate(); 

    const [loder , setLoder] = useState(false);

    const [input , setInput] = useState({
        name:"",
        email:"",
        password:""
    });

    function changeEventHandler(e){
        setInput({...input , [e.target.name]:e.target.value});
    }

    async function  signupHandler(e){
        e.preventDefault();
        try {
            setLoder(true);
            console.log("input>>",input);
            const res = await axios.post('http://localhost:8000/api/v1/user/register',input,{
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true
            });
            console.log(res);
            if(res.data.success){
                navicate('/login')
                setInput({
                    name:'',
                    email:"",
                    password:""
                });
            }
        } catch (error) {
            console.log(error);
        }finally{
            setLoder(false);
        }
    }

  return (
    <>

<div className='flex items-center w-screen h-screen justify-center'>
    <form onSubmit={signupHandler} className='shadow-xl shadow-rose-100 flex flex-col gap-5 p-8 rounded-lg'>
        <div>
            <h1 className='text-center font-bold'>LOGO</h1>
            <p className='text-center px-14'>e-commerce</p>
        </div>

        <div >
        <span className="py-2 font-medium ">username</span>
        <Input type="text" value={input.name} name="name" onChange={changeEventHandler}  className="focus-visible:ring-transparent"/>
        </div>



        <div>
        <span className="py-2 font-medium">email</span>
        <Input type="email" value={input.email} name="email" onChange={changeEventHandler} className="focus-visible:ring-transparent"/>
        </div>


        <div>
        <span className="py-2 font-medium">password</span>
        <Input type="password" value={input.password} name='password' onChange={changeEventHandler} className="focus-visible:ring-transparent"/>
        </div>


        {
            loder ? (
                <Button>
                    <Loader2 className='animate-spin'/>
                </Button>
            ):(
                <Button type="submit">Submit</Button>
            )
        }

        <span>already has an account? <Link className='text-blue-600' to="/login">login</Link></span>

    </form>
</div>
      
    </>
  )
}

export default Signup;

