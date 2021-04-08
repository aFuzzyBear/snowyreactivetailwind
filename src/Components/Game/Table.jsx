import React from 'react'

export default class Table extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){



        return(
            <table className="">
                <colgroup>
                    <col/>
                </colgroup>
                <thead>
                    <tr>
                         <th>Player</th>
                         <th>Column</th>
                          <th>Row</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>   
            </table>
        )
    }
}