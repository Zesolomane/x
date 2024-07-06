import React from 'react'
import {redirect} from 'react-router-dom';
const CustomCard = ({bg_col, span_col_num, span_row_num, row_start, col_start, children, height, width}) => {
  const deleteCard = (id) => {
    alert('Are you sure');
  }

  return (
    <div className={`${bg_col} ${span_col_num} ${span_row_num} ${row_start} ${col_start} ${height} ${width} p-[10px] box-border rounded h-[auto] flex flex-grow`}>
        <div className="bg-slate-200 box-border rounded h-5/6 p-[5px] flex-grow"> 
          {children }
          <div>
            <button onClick={()=> {
                return redirect('/editPage');
            }}>
            </button>  
            <button onClick={deleteCard}> </button>
          </div>
        </div>
        
    </div>
  )
}

export default CustomCard