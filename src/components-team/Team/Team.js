import React, { Component } from 'react'
import TeamMembers from './TeamMembers'
import memberInfi from '../memberinfi'

class Team extends Component{
    constructor(){
        super()
        this.state = {
            info: memberInfi
        }

    }
    mapping(x){
        const members = x.map(e => <TeamMembers
            key = {e.id}
            img={e.img}
            name={e.name}
            postion={e.postion}
            num={e.num}
            email={e.email}/>)
            return members
    }
    render(){
    
    




    return(
        <div className='row'>
            {this.mapping(this.state.info)}
        </div>
    )}
}
export default Team;