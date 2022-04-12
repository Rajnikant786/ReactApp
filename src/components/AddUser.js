import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const navigate = useNavigate

const AddUser = () => {

    const [name , setName ] = useState('');
    const [username , setUsername ] = useState('');
    const [email , setEmail ] = useState('');
    const [submitError , setSubmitError] = useState('');
    const [submitSuccess , setSubmitSuccess] = useState('');

    useEffect(() => {
        console.log("useEffect hook call")
        setSubmitError('')
        setSubmitSuccess('')
    },[])

    const handleInputOnChange = (e) =>{
        // debugger
        switch(e.target.name){
            case 'name' :
                if(e.target.value){
                    setName({value:e.target.value, error: ''})
                }else{
                    setName({value: '', error: 'Please enter your valid name'});
                }
                break;
            case 'username':
                if(e.target.value){
                    setUsername({value:e.target.value, error: ''})
                }else{
                    setUsername({value: '', error: 'Please enter your valid username'});
                }
                break;
            case 'email':
                const emailRegex  = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                // if(e.target.value){
                //     setEmail({value:e.target.value, error: ''})
                // }else{
                //     setEmail({value: '', error: 'Please enter your valid email'});
                // }
                if(emailRegex.test(e.target.value)){
                    setEmail({value:e.target.value, error: ''})
                }else{
                    setEmail({value: '', error: 'Please enter your valid email'});
                }
                break;
            default:
                console.log("Nothing insert input field...")
        }
    }

    // ==== form submit ======
    const handleSubmitBtn = (e) => {
        e.preventDefault();
        console.log("form submit ...")
        if(name.value && !name.error && username.value && !username.error && email.value && !email.error){
            console.log("Match api call")
            setSubmitError('')
            setSubmitSuccess('')
            axios.post('https://jsonplaceholder.typicode.com/users',{
                user: {
                    name,
                    username,
                    email
                }
            }).then(res => {
                console.log('Updated results is : ' , res.data)
                // setUserInfo(res.data);
                // if(res.data){
                    setSubmitSuccess('Data inserted successfully And Id is :- '+res.data.id)
                // }

                // setSubmitSuccess('')

                setName({value:'', error: ''})
                setUsername({value:'' , error: ''})
                setEmail({value: '', error: ''})
                
            })
        }else{
            setSubmitError('Please enter valid data. All fields are required ....')
        }
    }


    return (
        <>
        <div className="card">
            <div className="card_header">
                Add User
                <button className="backBtn" onClick={ () => { navigate (-1) } } type="button">Back</button>
            </div>
            <div className="card_body">
                <form>
                    {submitError && <p className="alert alert_danger">{submitError}</p>}
                    {submitSuccess && <p className="alert alert_success">{submitSuccess}</p>}
                    <div>
                        <input type="text" placeholder = "Enter Your Name" name="name" onBlur={handleInputOnChange} />
                        {name.error && <p className="error">{name.error}</p>}
                    </div>
                    <div>
                        <input type="text" placeholder = "Enter Your Username" name="username" onBlur={handleInputOnChange} />
                        {username.error && <p className="error">{username.error}</p>}
                    </div>
                    <div>
                        <input type="text" placeholder = "Enter Your Email" name="email" onChange={handleInputOnChange} />
                        {email.error && <p className="error">{email.error}</p>}
                    </div>
                    <div>
                        <button type="submit" className="submitBtn" onClick={handleSubmitBtn}>Submit</button>                        
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default AddUser;
