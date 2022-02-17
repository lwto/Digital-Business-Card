import React from 'react'
import profile from "../images/profile.png"
export default function Info(){
  return(
    <div className="info">
      <img src={profile} alt="" />
      <h1>Laura Smith</h1>
      <h3>Frontend Developer</h3>
      <p>laurasmith.website</p>
      <button><i class="fa-solid fa-envelope"></i> Email</button>
    </div>

  )
}