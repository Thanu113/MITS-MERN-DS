import React from 'react'
import Parent from '../components/Parent'

const About = () => {
    const element=<div>Hello Thanu</div>;{/*JSX Code*/}
  return (
    <div>
        <p>{element}</p>{/*{you can write any Java Script code inside"{}"}*/}
      <Parent/>
    </div>
  )
}

export default About
