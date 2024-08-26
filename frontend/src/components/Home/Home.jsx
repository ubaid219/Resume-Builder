import React from 'react'
import Body from "./Body"
import Features from "./Features"

const Home = (props) => {
  return (
    <>
     <Body mode={props.mode}/>
     <Features mode={props.mode}/>
      
    </>
  )
}

export default Home
