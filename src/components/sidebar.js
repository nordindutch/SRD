import React from "react"
import { Link } from "gatsby"

export default function Sidebar({children}) {

  return (<div className="sidebar-block">
      <ul>
      
                <Link to="../"><li>Home</li></Link>
            
          {children}
      </ul>
  </div>
  
  )
}
