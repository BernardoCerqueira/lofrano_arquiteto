import { Spinner } from "reactstrap";

export default function Loading(){
    return(
        <div style={{height: "100vh", display: "flex", flexDirection: "column", placeItems: "center", placeContent: "center", gap: "1.5rem"}}>
            <h1>Carregando...</h1>
            <Spinner/>
        </div>
    )
}