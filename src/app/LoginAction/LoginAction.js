'use server'

import { signIn } from "../api/auth";


const LoginAction = async (formData) => {

   //  console.log(formData);

    
     await signIn('credentials', {
        username: formData.username,
        password: formData.password,
        redirectTo: '/'
     })

    
 

   
};

export default LoginAction;