import { ReactElement } from "react"


export const Background = (): ReactElement => {

    const styles: React.CSSProperties = {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100vh",
        background: "#33CAAF",
    }

    return (
        <div style={styles}>
            Background test
        </div>
    )
}