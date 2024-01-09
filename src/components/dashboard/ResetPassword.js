import React,{useState,useEffect} from "react";
import API from "../../API/API";

export default function ResetPassword() {
  const [Password,setPassword]=useState()
  const [new_password,setnew_password]=useState()
  const [confirm_new_password,setconfirm_new_password]=useState()
  const [errorhandle,seterrorhandle]=useState("")
  const [Loading,setLoading]=useState(false)

  const submit=(e)=>{
    e.preventDefault()
    if(new_password == confirm_new_password){
      setLoading(true)
        API.fetchPost({password:Password,new_password},'/resetpassword')
        .then(x=>(seterrorhandle(x.data),setLoading(false)))
        .catch(x=>console.log(x))
    }else{
      setLoading(false)
      seterrorhandle('password not matched!')
    }
  }
  return (
    <div className="my-2 sm:mx-[30%]">
      <form onSubmit={submit} className="flex flex-col gap-2">
        <input
          type={"text"}
          placeholder={"Current Password"}
          className="shadow-secondary shadow-md rounded-lg p-2"
          onChange={e=>setPassword(e.target.value)}
        />
        <input
          type={"text"}
          placeholder={"New Password"}
          className="shadow-secondary shadow-md rounded-lg p-2"
          onChange={e=>setnew_password(e.target.value)}
        />
        <input
          type={"text"}
          placeholder={"New Password"}
          className="shadow-secondary shadow-md rounded-lg p-2"
          onChange={e=>setconfirm_new_password(e.target.value)}
        />
        {/* <input type={"text"} placeholder={"not"} className="invisible" /> */}
        {errorhandle&&errorhandle}
        {Loading?"Loading...":<input
          type={"submit"}
          placeholder={"Submit"}
          className="shadow-secondary shadow-md rounded-lg p-2 bg-primary text-texting font-bold "
        />}
      </form>
    </div>
  );
}
