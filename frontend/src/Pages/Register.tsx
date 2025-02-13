import { useForm } from "react-hook-form";

export type RegisterFormData={
    firstName:string
    lastName:string;
    email:string;
    password:string;
    confirmPassword:string;
}




function Register() {

    const {register,watch,handleSubmit,formState:{errors}} =useForm<RegisterFormData>();

    const onSubmit= handleSubmit((data)=>{
        console.log(data);
    })

    
  return (
    <div>
    
       <form onSubmit={onSubmit} className=" flex flex-col gap-5">
        <h2 className="text-3xl text-bold">Create your account</h2>
        <div className="flex flex-col md:flex-row gap-5">
            <label htmlFor="" className="text-gray-700 font-bold text-sm flex-1 ">FirstName
            <input type="text"  className=" border rounded w-full py-1 px-2 font-normal"
            {...register("firstName",{required:"this field is required"})}  />
            {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
            </label>
            <label htmlFor="" className="text-gray-700 font-bold text-sm flex-1 ">LastName
            <input type="text" className=" border rounded w-full py-1 px-2 font-normal" 
            {...register("lastName",{required:"this field is required"})} />
            {
                errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>
            }
            </label>

        </div>
        <label htmlFor="" className="text-gray-700 font-bold text-sm flex-1 ">Email
            <input type="email" className=" border rounded w-full py-1 px-2 font-normal" 
            {...register("email",{required:"this field is required"})} />
            {
                errors.email && <span className="text-red-500">{errors.email.message}</span>
            }
        </label >
            <label htmlFor="" className="text-gray-700 font-bold text-sm flex-1 ">Password
            <input type="password" className=" border rounded w-full py-1 px-2 font-normal"
            {...register("password",{required:"this field is required",minLength:{value:6,message:"Password must be atleast 5 characters"}})} />
            {errors.password && <span className="text-red-500">{errors.password.message} </span>}
            </label>
            <label htmlFor="" className="text-gray-700 font-bold text-sm flex-1 ">Confirm Password
            <input type="password" className=" border rounded w-full py-1 px-2 font-normal"
            {...register("confirmPassword",
                {validate:(val)=>
                    {if(!val){
               return "this field is required"
            }
            else if(watch("password")!==val){
                return "your password do not match";

            }
        }
})} />
            {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message} </span>}
            </label>
            
            <span>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl"
        >
          Create Account
        </button>
      </span>
       </form>
       </div>
  )
}

export default Register;