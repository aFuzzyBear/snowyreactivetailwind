import React from 'react'

export const StatusPanel = ({children})=>{
    return(
        <div className="test">
            {children}
        </div>
    )
 }
 export const MovesPanel = ({children}) => {
     return(
         <ol className="list-none">
             {children}
         </ol>
     )
 }