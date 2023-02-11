import { useState } from 'react';
import axios from 'axios';

type user = {
    name:string,
    password: string,
    email: string
}


function FormCreateUser(){

    const [newUser, setNewUser] = useState<user>({
        name: '',
        password: '',
        email:''
    });

    async function handleClick(){
        try {
            const postUser = await axios.post<user>('http://localhost:3001/user', newUser);
            console.log(postUser.data);
        } catch (error) {
            if(axios.isAxiosError(error)) {
                console.log(error?.response);
                return error.message;
            }
            console.log(error);
        }
    };

    return(<>
    <div id='loginForm'>
        <h2>Create User</h2>
        <span>
            <input 
                type="text" 
                name="" id="" 
                placeholder='user' 
                onChange={(e)=> setNewUser({...newUser, name: e.target.value})}/>
        </span>
        <span>
            <input 
                type="text" 
                name="inputName" 
                id="userName" 
                placeholder='Password'
                onChange={(e)=> setNewUser({...newUser, password: e.target.value})}/>
        </span>
        <span>
            <input 
                type="text" 
                name="inputName" 
                id="userName" 
                placeholder='email'
                onChange={(e)=> setNewUser({...newUser, email: e.target.value})}/>
        </span>
        <button onClick={handleClick}>Create</button>
    </div>
    </>)
};

export default FormCreateUser;