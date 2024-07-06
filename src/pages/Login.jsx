import React from 'react'
import CustomCard from '../components/CustomCard';
import CustomGallery from '../components/CustomGallery';
const Login = () => {
  return (
    <div>
       <CustomGallery>
               
               <div className="m-5  w-1/2 mx-auto ">
                   <CustomCard bg_col="bg-red-900" width="w-5/6" > 
                       <form method="POST" action="">
                           <label for="">Placeholder</label>
                           <br/>
                           <input type="text" id="" name=""/>
                           <br/>
                           <label for="">Placeholder</label>
                           <br/>
                           <input type="text" id="" name=""/>
                           <br/>
                           <button type="Submit">Submit</button>
                       </form>
                   </CustomCard>  
               </div>
           </CustomGallery> 
    </div>
  )
}

export default Login
