import { useState } from "react";

function Collapse(props) {

    const [isIconChange, setIsIconChange] = useState(true);

    const changeIcon = () => {
        setIsIconChange(!isIconChange);
    }

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "1fr" ,
            gap: "20px"
        }}>
            <div style={{
                width: "100%"
            }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: "#FF6060",
                        color: "white",
                        padding: "0px 10px",
                        borderRadius: "5px",
                        height: "30px"
                    }}>
                        <p style={{
                            fontWeight: "bold"
                        }}>{props.title}</p>
                        <span onClick={changeIcon}>
                            <i id="icon" className={`fa-solid ${isIconChange ? "fa-chevron-up" : "fa-chevron-down"}`} style={{
                                cursor: "pointer"
                            }}></i>
                        </span>
                    </div>
                    <div style={{
                        display: isIconChange ? "none" : "block",
                        padding: "10px"
                    }}>
                        <p>{props.content}</p>
                    </div>
            </div>
        </div>
    )
}

export default Collapse