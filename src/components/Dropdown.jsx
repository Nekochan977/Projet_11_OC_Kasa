import { useState } from "react"
import "../styles/Dropdown.css"

function DropDown(props) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    return (
      <div className="dropdown-container">
        <button className="dropdown-btn" onClick={handleOpen}>
          {props.type}
          <i className={`fa-solid ${open ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </button>
        {open && (
          <div className="dropdown-content active">
            {typeof props.text === "object" ? (
              <ul className="equipmentList">
                {props.text.map((text, i) => (
                  <li className="equipmentItem" key={text + i}>
                    {text}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="dropdown-text">{props.text}</p>
            )}
          </div>
        )}
      </div>
    );
}

export default DropDown