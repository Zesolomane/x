import React from 'react'
import { BiAdjust } from "react-icons/bi";

const NewsUpdates = ({bg}) => {
  return (
    <>
        <div className="bg-black text-xl font-bold w-full p-1 mx-auto text-white mx-auto">
           
                <p>News and Updates</p>
                <div className="flex box-border">
                    <h1 className="size">Follow what's brand <br/>
                        new in digital design.</h1> 
                </div>
                
                <div className="flex flex-wrap box-border mx-auto px-4">

                    <div className="mx-auto p-10 flex-1">
                        <div className="border-box p-20 border-solid border-b-2 border-gray-500 max-h-5 ">
                            <p>w.news1 </p>
                        </div>
                        <div className="border-box p-20 border-solid border-b-2 border-gray-500 max-h-5 ">
                            <p><BiAdjust /></p>
                        </div>
                        <div className="border-box p-20 border-solid border-b-2 border-gray-500 max-h-5">
                            <p><BiAdjust /></p>
                        </div>
                        <div className="border-box p-20 border-solid border-b-2 border-gray-500 max-h-5">
                            <p><BiAdjust /></p>
                        </div>
                      
                        
                    </div>
                    <div className=" mx-auto my-0 p-10 flex-1">
                        <div className="border-box p-20 border-solid border-b-2 border-gray-500 max-h-7">
                            <p>w.news2</p>
                        </div>
                        <div className="border-box p-20 border-solid border-b-2 border-gray-500 max-h-7">
                            <p>w.news</p>
                        </div>
                        <div className="border-box p-20 border-solid border-b-2 border-gray-500 max-h-7">
                            <p>w.news</p>
                        </div>
                        <div className="border-box p-20 border-solid border-b-2 border-gray-500 max-h-7">
                            <p>w.news</p>
                        </div>

                    </div>
                    <div className="mx-auto my-0 p-10 flex-1">
                        <div className="border-box p-20 border-solid border-b-2 border-gray-500 max-h-7">
                            <p>w.news3</p>
                        </div>
                        <div>
                            <div className="backgroundProp"></div>
                            <p>
                                The Best Of The Web {`-`} 2023 <br/>
                                Meet the nominees who carved their way into the Best of The Web 2023
                            </p>
                        </div>
                        
                    </div>
                </div>
            
        </div>
    </>
  )
}

export default NewsUpdates