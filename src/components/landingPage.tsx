import { ReactElement } from "react"
import { Off50 } from "./off50"


export const LandingPage = (): ReactElement => {

    const styles: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        gap: "0px",
        width: "100%",
        maxWidth: "100%",
        height: "auto",
        minHeight: "100vh",
        background: "#33CAAF",
    }

    return (
        <div style={styles}>
            <Off50 />
        </div>
    )
}