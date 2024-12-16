import UserTemplet from "@/components/userTemplet";
import dbConnect from "@/dbConnect";



async function allUsers(){
  const res=await fetch('http://localhost:3000/api/user');
  const data=await res.json();
  return data.userData;
}
  async  function Home() {
    const allusers=await allUsers();

  const submitHandler=async(formData)=>{
    "use server"
   try {
    console.log(formData)
    await dbConnect()
    const res= await fetch("http://localhost:3000/api/user",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
       body:JSON.stringify({
         username:formData.get('username'),
         email:formData.get('email')
       })
    })
    console.log("data received")
   } catch (error) {
    console.log(error)
   }
  }


  return (

    <div  >
      <h1>Home page</h1> 
      <UserTemplet item={allusers}/>  
     <div>
       <form action={submitHandler}>
         <input type="text" name="username" placeholder="Enter name" />
         <input type="email" name="email" placeholder="Enter name your email" />
         <button type="submit">Add User</button>
       </form>
     </div>
      </div>
  )
}
export default Home