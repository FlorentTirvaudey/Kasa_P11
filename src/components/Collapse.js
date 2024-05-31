import "../styles/Collapse.css"

import { useState } from "react";

function Collapse(props) {

    const [isIconChange, setIsIconChange] = useState(true);

    const changeIcon = () => {
        setIsIconChange(!isIconChange);
    }

    return (
            <div className='collapse'>
                    <div className='collapse_bloc'>
                        <p>{props.title}</p>
                        <span onClick={changeIcon}>
                            <i id="icon" className={`fa-solid ${isIconChange ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                        </span>
                    </div>
                    <div className='collapse_content' style={{
                        display: isIconChange ? "none" : "block",
                    }}>
                        <p>{props.content}</p>
                    </div>
            </div>
    )
}

export default Collapse