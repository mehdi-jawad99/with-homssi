import React, { Component } from 'react'
import Head from './Team/Head'
import Team from './Team/Team'

class Cv extends Component{
    render(){
    return(
        <div className='container list-group'>
            <Head what='Our Group'/>
            <Team />
        </div>
    )}
}
export default Cv;