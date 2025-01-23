import React from "react";
import manImg from "../assets/images/man Image.png";
import tShirtImg from "../assets/images/tshit.png";
import shoesImg from "../assets/images/shoes.png";
import "./shoesAnimation.css";


export const Off50 = () => {

    const mainDiv: React.CSSProperties = {
        display: "block",
        width: "30%",
        maxWidth: "420px",
        height: "auto",
        minHeight: "100vh",
        backgroundColor: "#fafff0",
    }

    const itensContainer: React.CSSProperties = {
        boxShadow: "1px 1px 50px rgba(159, 144, 133, 0.5)",
        backgroundColor: "#FAFFF0",
        padding: "40px",
        position: "relative",
        width: "calc(100% - 100px)",
        marginLeft: "50px",
        marginTop: "50px",
    }

    const itensGrid: React.CSSProperties = {
        display: "grid",
        gridTemplateRows: "repeat(5, 72px)",
        gridTemplateColumns: "1fr 1fr",
        height: "auto",
        width: "100%",
    }

    const manPhoto: React.CSSProperties = {
        backgroundImage: `url(${manImg})`,
        backgroundSize: "cover",
        gridRow: "span 3",
        backgroundColor: "yellow"
    }
    const off_50: React.CSSProperties = {
        gridRow: "span 2",
        backgroundColor: "#25FD1E",
    }
    const baseStyle: React.CSSProperties = {
        color: "#000",
        textWrap: "pretty",
        textAlign: "center",
    };

    const off_50_paragraph: React.CSSProperties = {
        ...baseStyle, // Reutiliza o estilo base
        fontSize: "42px",
        fontWeight: "800",
        marginTop: "21px",
        lineHeight: "52.5px",
        paddingBottom: "0px"
    };

    const off_50_off: React.CSSProperties = {
        ...baseStyle, // Reutiliza o estilo base nesse caso tbm, assim ambas as linhas podem utilizar a mesma base do stilo e não preciso reescrever o mesmo código em dois lugares
        fontWeight: "800",
        fontVariant: "all-small-caps",
        padding: "0px",
        fontSize: "30px",
        lineHeight: "33px",
    };

    const off_50_small: React.CSSProperties = {
        fontSize: "12px",
        fontVariant: "all-petite-caps",
        lineHeight: "15px",
        fontWeight: "500",
        textAlign: "center",
        display: "block",
        width: "100%",
        height: "auto",
        marginTop: "6px",
        boxSizing: "border-box",
        textWrap: "pretty",
        padding: "0px 18px",
    }

    const shoes: React.CSSProperties = {
        gridRow: "span 2",
        backgroundColor: "#CA69A4",
        color: "white",
        maxWidth: "144px",
        position: "relative",
    }

    const imageStyle: React.CSSProperties = {
        width: "355px",
        position: "absolute",
        top: "50px",
        left: "-70%",
        transform: "rotate(-7.3deg)"
    }

    const tShirt: React.CSSProperties = {
        backgroundImage: `url(${tShirtImg})`,
        backgroundPosition: "center",
        backgroundSize: "220px",
        backgroundRepeat: "no-repeat",
        gridRow: "span 3",
        backgroundColor: "#33CAAF",
    }


    return (
        <div style={mainDiv}>
            <div style={itensContainer}>
                <div style={itensGrid}>
                    <div style={manPhoto}>
                    </div>

                    <div style={off_50}>
                        <p style={off_50_paragraph}>50%</p>
                        <p style={off_50_off}>off</p>
                        <small style={off_50_small}>on selected merchandise</small>
                    </div>

                    <div style={tShirt}>

                    </div>

                    <div style={shoes}>
                        <img src={shoesImg} style={imageStyle} className="shoes-animation" />
                    </div>

                </div>
            </div>
        </div>
    )
}