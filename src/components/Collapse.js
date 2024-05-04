import collapse from "../assets/collapse.json"

function Collapse() {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "1fr" ,
            gap: "20px"
        }}>
            {collapse.map((data) => (
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
                            }}>{data.title}</p>
                            <i class="fa-solid fa-chevron-up" style={{
                                cursor: "pointer"
                            }}></i>
                        </div>
                        <div style={{
                            display: "none",
                            padding: "10px"
                        }}>
                            <p>{data.content}</p>
                        </div>
                </div>
            ))}
        </div>
    )
}

export default Collapse