import React from 'react'


function TeamMembers(props){
    return(
        <div className='col-md-4 col-sm-6 border'>
            <div className='card'>
            <div className='card-header'>
                <img style={{maxWidth:'100%'}} src={props.img} alt={props.name}/>
            </div>
            <div className='card-body' style={{backgroundColor: props.email ?'white':'black'}}>
                <h3>{props.name}</h3>
                <h5>{props.postion}</h5>  
                <div>{props.num}</div>
                <div>{props.email}</div>
            </div>
            </div>
        </div>
    )
}
export default TeamMembers;