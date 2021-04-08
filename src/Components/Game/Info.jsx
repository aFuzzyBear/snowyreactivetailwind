import React from 'react'

import{StatusPanel,MovesPanel} from './Panels'


export function InfoPanel (props){
    return(
        <div className="info-panel">
            <StatusPanel>
                {props.status}
            </StatusPanel>
            <MovesPanel>
                {props.moves}
            </MovesPanel>
        </div>
    )
    
}