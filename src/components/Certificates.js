import {useEffect, useState} from "react";
function Certificates(){
    const [certificates, setCertificates] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8000/certificates")
        .then(res=> res.json())
        .then(data=> setCertificates(data))
    },[])
        
    return(
        <div id="cert-container">
            <div id="title-container">
                <h1>Visit <span style={{color:"lightblue"}}>Gallery</span></h1>
                <h2>Certificates</h2>

            </div>
            <div id="certificates">
              {certificates.map((certificate) =>(
                 <div key={certificate.id}>
                     <h2>{certificate.title}</h2>
                     <h4>{certificate.issuer}</h4>
                     <h4>{certificate.date}</h4>
                     <p>{certificate.description}</p>
                 </div>
              )
                
              )}   
            </div>
        </div>
    )
}
export default Certificates;