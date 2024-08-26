import React from 'react'
import "./styles.css"
const Features = (props) => {
  return (
    <>
       <header className='heading'>Features</header>
        <div className="main">
            <div className="left">
                <img src="cv2.jpeg" alt="" />
            </div>
            <div className="right">
                <h3 className={`text-${props.mode === "light" ? "dark" : "light"}`}>Easy to Customize</h3>
                <p className='small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illum explicabo aliquid, tenetur fugit laborum earum facilis non, perferendis sapiente quisquam. Qui quaerat recusandae laboriosam placeat. Magni quasi deserunt voluptatum quae exercitationem, praesentium natus.</p>
            </div>
        </div>

        <div className="mainly">
          <div className='left'>
            <h3 className={`text-${props.mode === "light" ? "dark" : "light"}`}>Join the 2000+ Resum<span>o</span> family</h3>
            <p className='bigtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempora veritatis sed illo consectetur voluptate possimus quos debitis doloribus incidunt?</p>
          <button className='create'>Create Resume for free</button>
          </div >
          <div className='right'><img src="/src/assets/african.jpeg" alt="" /></div>
        </div>
        <hr style={{borderWidth:"2px"}} className={`text-${props.mode === "light" ? "dark" : "light"}`} />
    </>
  )
}

export default Features
