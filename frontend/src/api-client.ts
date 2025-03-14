import { RegisterFormData } from "./Pages/Register";
import { SignInFormData } from "./Pages/SignIn";

const API_BASE_URL=import.meta.env.VITE_API_BASE_URL ||"";






export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include",
    
    
  });
  // console.log("response.json")
  if (!response.ok) {
    throw new Error("Token invalid");
  }

  return response.json();
  
};

export const register = async (formData: RegisterFormData) => {
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
      method: "POST",
      credentials: "include",
      
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // console.log(response);
    const responseBody = await response.json();
    
  
    if (!response.ok) {
      throw new Error(responseBody.message);
    }
  };

  export const signIn=async(formData:SignInFormData)=>{
    const response =await fetch(`${API_BASE_URL}/api/auth/login`,{
        method:"POST",
        credentials:"include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    console.log(response);
    const body=await response.json();
    if(!response.ok){
        throw new Error(body.message);
    }
    return body;
}

export const signOut=async()=>{
    const response=await fetch(`${API_BASE_URL}/api/auth/logout`,{
        credentials:"include",
        method:"POST",
    })
    if(!response.ok){
        throw new Error("Unable to sign out");
    }
}

export const addMyHotel = async (hotelFormData: FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/my-hotels`, {
    method: "POST",
    credentials: "include",
    body: hotelFormData,
  });

  if (!response.ok) {
    throw new Error("Failed to add hotel");
  }
  // console.log("hiii")

  return response.json();
};