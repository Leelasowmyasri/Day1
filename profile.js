import { useContext,useEffect,useState } from "react";
import { cartContext } from "./App";
import Navigation from "./Navigation";

function Profile(){
     const {globalUserObject,setGlobaluserObject,globalIsLogin,setGlobalIsLogin,}=useContext(cartContext);
     const logoutAction=()=>{setGlobalIsLogin(false);}
     useEffect(()=>{
        const name =localStorage.getItem("name");
        const btanch = localStorage.getItem("branch");
        console.log(name);
     })
    return(
        <div>
        <Navigation />
         <div className="container">
         <div className="card" style={{width:'350px',padding:'30px'}}>
         <div>
         <h2>Profile</h2>
         <p>Your details</p>
            <p><b>College ID</b></p>
            <p>{globalUserObject.collegeIdVal}</p>
            <p><b>Password</b></p>
            <p><b>
            {globalUserObject.passwordVal}
            </b></p>
            <p><b>Email</b></p> 
            <p>{globalUserObject.emailVal}</p>
            <p><b>Branch</b></p>
            <p>{globalUserObject.branchVal}</p>
            <p><b>Year</b></p> 
            <p>{globalUserObject.yearVal}</p>
            <p><b>Gender</b></p> 
            <p>{globalUserObject.genderVal}</p>
            <button className="btn btn-secondary" onClick={logoutAction}>Log Out</button>

         </div>
</div>
</div>
</div>
    );
}
export default Profile;                      