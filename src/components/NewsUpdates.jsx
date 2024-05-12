import React from 'react'
import { BiAdjust } from "react-icons/bi";

const NewsUpdates = () => {
  return (
    <>
        <div className="bg-gray border-solid border-b-2 border-gray-500">
            <div className="w-11/12 mx-auto box-border p-1">
                <p>News and Updates</p>
                <div className="flex flex-row box-border">
                    <h1 className="size">Follow what's brand <br/>
                        new in digital design.</h1> 
                </div>
                <div className="flex flex-row box-border ">
                    <div className="w-3/4 mx-auto my-0 p-10">
                        <div className="border-box p-20 border-solid border-b-2 border-gray-500 max-h-5">
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
                    <div className="w-3/4 mx-auto my-0 p-10">
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
                    <div className="w-3/4 mx-auto my-0 p-10">
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
        </div>
    </>
  )
}

export default NewsUpdates