const DefaultArticle = (props)=>{
    return(
    <article className="column is-4-desktop is-4-tablet is-12-mobile is-relative">
        <figure className="mb-16">
            <a href={props.url} rel="noreferrer" target="_blank">
                <img src={props.src} alt={props.alt}/>
            </a>
        </figure>
        <h3 className={"h4 mt-4"}>
            <a href={props.url} rel="noreferrer" target="_blank" className="has-text-black link-overall">
                {props.title}
            </a>
        </h3>
    </article>
    )
}
export default DefaultArticle;