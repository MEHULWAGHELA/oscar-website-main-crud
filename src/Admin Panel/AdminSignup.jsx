import React, { useState } from 'react'
import "./AdminSignup.css"
import axios from 'axios';
import { Outlet } from 'react-router-dom';

function AdminSignup() {
    const [obj, setobj] = useState({ name: "", password: "" });

    const set = (e) => {
        obj[e.target.name] = e.target.value
        console.log(obj)
    }

    const save = () => {
        axios.post("http://localhost:1000/api/adminform/login", obj).then((res) => {
            if (res.data.message == "name or Password not present") {
                window.alert(res.data.message)
            }
            else if (res.data.message == "Invalid Username or password..please ensure to enter correct information") {
                window.alert(res.data.message)
            }
            else if (res.data.message == "Login successful") {
                localStorage.setItem('token', res.data.data.token)
                window.location.href = "/home"
            }
            else {
                window.alert(res.data.message)
            }
        })
    }
    return (
        <div>
            <div id='adminform' className="w-25 ">
                <form action="" className='rounded-2 p-3'>
                    <div className='py-2'>
                        <label htmlFor="" className="form-label">Admin Username</label>
                        <input type="text" name="name" className="form-control" onChange={set} />
                    </div>
                    <div className='py-2'>
                        <label htmlFor="" className="form-label">Admin Password</label>
                        <input type="text" name='password' className="form-control" onChange={set} />
                    </div>
                    <div className="text-center py-2">
                        <button type='buttoN' className="btn btn-outline-primary" onClick={save}>
                            Login
                        </button>
                        <a href="" className='my-2 d-block'>Forgot your password?</a>
                    </div>
                </form>
            </div>
            <Outlet />
        </div>
    )
}

export default AdminSignup