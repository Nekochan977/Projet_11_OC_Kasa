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
        </button>
        {open ? <div className="dropdown-content">
          <p className="p-4 rounded">
            {props.text}
          </p>
        </div>
        : ""}
        
      </div>
    )
}

export default DropDown