import { useForm } from "react-hook-form";

export type RegisterFormData={
    firstName:string
    lastName:string;
    email:string;
    password:string;
    confirmPassword:string;
}




function Register() {

    const {register} =useForm<RegisterFormData>();

    
  return (
    <div>
       <form action="">
        <div>
            <span>
            <label htmlFor="">FirstName</label>
            <input type="text"   />
            </span>
            <span>
                <label htmlFor="">LastName</label>
                <input type="text" />
            </span>

        </div>
       </form>
    </div>
  )
}

export default Register