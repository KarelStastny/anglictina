import React from 'react'
import { Link } from "react-router-dom"
import { UseEnglish } from '../../context/EnglishContext'

const Navbar = () => {
    const {loggedUser} = UseEnglish()

  return (
    <nav className="bg-indigo-900 p-3">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md">Home</Link>
        </li>
        <li>
          <Link to="/login" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md">Přihlášení</Link>
        </li>
        {loggedUser && 
        <li>
        <Link to="/exercise" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md">Procvičování</Link>
      </li>
        }
          {loggedUser && 
        <li>
          <Link to="/user" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md">Uživatel</Link>
        </li>}
      </ul>
    </nav>
  )
}

export default Navbar
