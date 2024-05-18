function Collapse(props) {
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
                        <i className="fa-solid fa-chevron-up" style={{
                            cursor: "pointer"
                        }}></i>
                    </div>
                    <div style={{
                        display: "block",
                        padding: "10px"
                    }}>
                        <p>{props.content}</p>
                    </div>
            </div>
        </div>
    )
}

export default Collapse