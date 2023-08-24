export default function Certificate({issuer, date, title, description }){
    return(
        <div id="cert-cont">
        <div className="issuer">
            <h3>{issuer}</h3>
            <h5>Issued on {date}</h5>

        </div>
        <div className="cert-details">
            <h3 id="title">{title}</h3>
            <p>{description}</p>

        </div>
        </div>
    )
}