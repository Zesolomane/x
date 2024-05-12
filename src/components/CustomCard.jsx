import React from 'react'
import {redirect} from 'react-router-dom';
const CustomCard = ({bg_col, span_col_num, span_row_num, row_start, col_start, children, height}) => {
  const deleteCard = (id) => {
    alert('Are you sure');
  }

  return (
    <div className={`${bg_col} ${span_col_num} ${span_row_num} ${row_start} ${col_start} ${height}  p-[10px] box-border rounded h-[auto] flex flex-grow`}>
        <div className="bg-slate-200 box-border rounded h-5/6 p-[5px] flex-grow"> 
          {children }
          <div>
            <button onClick={()=> {
                return redirect('/editPage');
            }}> Click me to go to the edit page
            </button>  
            <button onClick={deleteCard}> Some text</button>
          </div>
        </div>
        
    </div>
  )
}

export default CustomCard