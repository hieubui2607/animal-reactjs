import React, { useEffect, useState} from 'react'
import userApi from '../../api/userApi'
import GroupInput from '../Input'
import './Form.scss'

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { loginAct } from "../../reducers/authState/authAction";

const Form = () => {
    const [formData, setFormData] = useState({name: "", email: "",})
    const [invalidName, setInvalidName] = useState("")
    const [invalidEmail, setInvalidEmail] = useState("")
    const [checkSubmit, setCheckSubmit] = useState({name: false, email: false})
    const dispatch = useDispatch();
    const history = useNavigate();
    const user = useSelector((state) => state);

    
    const ValidatorEmail = () => {
        if(formData.email === " ") {
            setInvalidEmail("Secret Key cannot be left blank.")
            setCheckSubmit({...checkSubmit, email: false})
        } else {
            setInvalidEmail('')
            setCheckSubmit({...checkSubmit, email: true})
        }
    }   

    const ValidatorName = () => {
        if(formData.name === " ") {
            setInvalidName("API Key cannot be left blank.")
            setCheckSubmit({...checkSubmit, name: false})
        } else {
            setInvalidName("")
            setCheckSubmit({...checkSubmit, name: true})
        }
    }   

    const handleSubmit = (e) => {
        e.preventDefault();
        if(checkSubmit.name && checkSubmit.email){
            const loginApiKey = async () => {
                const config = {
                    headers: { "Content-Type": "multipart/form-data" },
                };
                    const params = new FormData();
                    params.append("grant_type", "client_credentials");
                    params.append("client_id", formData.name)
                    params.append("client_secret", formData.email)
                    await userApi.check(params, config).then((res) => {
                        localStorage.setItem('access_token', res.access_token)
                        dispatch(loginAct({ ...user, token_access:res.access_token }));
                        history("/animals")
                    })
                    .catch((err) => {
                      console.log(err)
                    });
            }
            loginApiKey()
        }
    }

    return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <div className="card-item">
            <h3 className='card-item_title'>Login to home</h3>
                <GroupInput title="API Key*">
                    <input className={invalidName === "" ? "inputform-control" : "inputform-control_danger"} type="text" placeholder='Full Name' value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} onBlur={ValidatorName}/>
                    <p className='validate-danger'>{invalidName}</p>
                </GroupInput>
                <GroupInput title="Secret Key*">
                    <input className={invalidEmail === "" ? "inputform-control" : "inputform-control_danger"} type="text" placeholder='example@gmail.com' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} onBlur={ValidatorEmail}/>
                    <p className='validate-danger'>{invalidEmail}</p>
                </GroupInput>
            <button type='submit' className='buttonbtnprimary-color'>Log In</button>
        </div>
    </form>
    )
}

export default Form 