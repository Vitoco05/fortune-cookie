const FortuneCookies = ({data}) => {

    return (
        
       <article className="phrase">
        <h3>{data.phrase}</h3>
        <div className="author--detail">
        <p>Autor: {data.author}</p>
        </div>        
       </article> 
    )
}

export default FortuneCookies