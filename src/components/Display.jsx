import React from 'react'

function Display({data}) {
  return (
    <div>
         <div className="flex justify-center">
            
        <table className="w-[60%] bg-purple-800 text-white rounded-[30px]">
          <thead>
            <tr>
              <th className=' py-2'>site</th>
              <th className=' py-2'>name</th>
              <th className='py-2'>password</th>
            </tr>
          </thead>
          <tbody className="bg-purple-200 text-black ">
            {data.map((item,index)=>{
              return <tr className='font-bold' key={index}>
              
            
              <td className="text-center  w-32">{item.site}</td>
              <td className="text-center w-32">{item.username}</td>
             <td className="text-center w-32">{item.password}</td>
         </tr>
              })}
            
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Display
