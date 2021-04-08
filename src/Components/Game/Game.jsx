import React from 'react'
import Board from './Board'
import { calculateWinner, getPosition } from './functions'
import { InfoPanel } from './Info'
import Table from './Table'

export default class Game extends React.Component{
    constructor(props){
        super(props)
        this.state={
            history:[{
                player:"",
                index:0,
                squares: Array(9).fill(null)
            }],
            XisNext: true,
            stepNum: 0,
        }
    }
    jumpTo(step){
        this.setState({
            stepNum:step,
            XisNext : (step % 2) === 0 
        })
    }
    handleClick(i){
        const history = this.state.history.slice(0,this.state.stepNum + 1)
        const current = history[this.state.stepNum]
        const squares = current.squares.slice()
        if(calculateWinner(squares) || squares[i]) return
        const index = i
        squares[i] = this.state.XisNext ? '❌' : '✔️'
        this.setState({
            history:history.concat([{
                player:squares[i],
                index:index,
                squares:squares,
            }]),
            stepNum:history.length,
            XisNext: !this.state.XisNext,
            
            
        })
     
    }

    render(){
        const history = this.state.history
        const current = history[this.state.stepNum]
        const winner = calculateWinner(current.squares)
        let player = current.player
        let status = winner ? `Winner 🎉Player ${ player } ` : `Next Player: ${this.state.XisNext ? '❌' : '✔️'}`

        const tableData = history.map((obj)=>{
                let {player,index} = obj
                return(
                    <>
                    <tr key={index}>
                        <td>{player}</td>
                        <td>{getPosition(index).col}</td>
                        <td>{getPosition(index).row}</td>
                    </tr>
                    </>
                )
            })
        
        

        const moves = history.map((step,move)=>{
            const desc = move ? `Go to Move: #${move}` : 'Go to Game Start'
            return(
                <li key={move} className="hover:bg-white bg-opacity-90">
                    <button onClick={()=> this.jumpTo(move)}>
                        {desc}
                    </button>
                </li>
            )
        })
        
        return(
            <div className="game">
                <div className="game-board">
                    <Board
                      squares={current.squares}
                      onClick={(i)=>this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                   <InfoPanel status={status} moves={moves}/>
                </div>
                <div className="table w-40 bg-green-500">
                    <Table>
                        {tableData}
                    </Table>
                </div>
            </div>
        )
    }
}