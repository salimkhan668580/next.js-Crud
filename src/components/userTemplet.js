"use client"
function UserTemplet({item}) {
 
  return (
    <div>
      {item.map((user,index)=>(
   <div div key={user._id}>
     <h1>{user.username}</h1>
        <h1>{user.email}</h1>
      </div>
      ))}
    </div>
  )
}

export default UserTemplet