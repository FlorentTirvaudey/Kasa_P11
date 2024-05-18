function Tag (props) {
    return (
        <div style={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            height: "25px",
            backgroundColor: "#FF6060",
            color: "white",
            fontWeight: "bold",
            borderRadius: "5px",
            fontSize: "0.8em"
        }}>
            <p>{props.tag}</p>
        </div>
    )
}

export default Tag