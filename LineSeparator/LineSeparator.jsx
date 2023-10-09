const LineSeparator = ({height, color}) =>{
    /*define default values in case props aren't defined*/
    const defaultStyle = {
        backgroundColor: "red",
        width: "100%",
        height: "10px",
    };
    
    /*evaluate if props were given off, if they were then default values are overriden with props*/
    const divStyle = {
        ...defaultStyle,
        backgroundColor: color !== undefined ? color : defaultStyle.backgroundColor, /*!== strict inequality, takes also in account the type of variable*/
        height: height !== undefined ? `${height}px` : defaultStyle.height,
    };

    return (
        <div style={divStyle}></div>
    );
}

export default LineSeparator;