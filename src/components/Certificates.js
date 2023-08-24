import {useEffect, useState} from "react";
import Certificate from "./certificate";
function Certificates(){
    const [certificates, setCertificates] = useState([]);
    useEffect(()=>{
         fetch("http://localhost:3030/certificates")
         .then(resp => resp.json())
         .then(data => setCertificates(data))   
    },[])
 return (
    <div id="cert-container">
        <div className="top">
            <h2>Visit <span style={{color:"SkyBlue"}}>Gallery</span></h2>
            <h3>Certificates</h3>
        </div>
        <div className="bottom">
         {certificates.map(certificate=>{
             return <Certificate key={certificate.id} title={certificate.title} date={certificate.date} issuer={certificate.issuer} description={certificate.description} />
         })}
        </div>
    </div>
 )
}
export default Certificates;