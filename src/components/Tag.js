function Tag (props) {
    return (
        <div style={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "15px",
            padding: "2px",
            backgroundColor: "#FF6060",
            color: "white",
            fontWeight: "bold",
            borderRadius: "5px",
            fontSize: "0.7em"
        }}>
            <p>{props.tag}</p>
        </div>
    )
}

export default Tag