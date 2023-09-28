import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";



const LogIn = () => {
    const[data,setdata]=useState(null)
console.log(data)

const auth=getAuth(app)
const googleProvider = new GoogleAuthProvider();

const handleGoogleSign=()=>{
    
    signInWithPopup(auth, googleProvider)
    .then(result=>{
         const user=result.user;
        //  console.log(user)
         setdata(user);
    })

    .catch(error=>{
        console.log(error)
    })
}



    return (
        <div>
             
            <div className="w-[20%] mx-auto mt-48">
            <button onClick={handleGoogleSign} className="bg-red-300 p-2 rounded-lg">Login with google</button>
            </div>

            {
                data&& 
                <div> 
                    <p className="font-bold text-center text-[4xl]"> {data.displayName}</p>
                </div>
            }
        </div>
    );
};

export default LogIn;