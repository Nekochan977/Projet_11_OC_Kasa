import { useState } from "react"
import "../styles/Dropdown.css"

function DropDown(props) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
      }
    return (
      <div className="dropdown-container">
        <button
          className="dropdown-btn"
          onClick={handleOpen}
        >
         {props.type}
         {open ? <i className="fa-solid fa-chevron-up"></i>
        : <i className="fa-solid fa-chevron-down"></i>}
         
        </button>
        {open ? <div className="dropdown-content active">
          <p className="dropdown-text">
            {props.text}
          </p>
        </div>
        : ""}
        
      </div>
    )
}

export default DropDown