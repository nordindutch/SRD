import React from "react"
import { Link } from "gatsby"


export default function Layout({ children }) {
  return (
    <div className="grid-container">
      {children}
    </div>
  )
}