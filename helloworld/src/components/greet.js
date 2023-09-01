import React from 'react'

// function Great() {
//     return <h1 > hello i am thanush </h1>
// }

const Great=(props)=>
{
 return (<div><h1 > hello i am {props.name} </h1>
{props.children}
<p>hello friends</p></div>
   )

}
export default Great;