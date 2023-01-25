import React from "react";
import DefaultArticle from "./DeufaultArticle";
function BestOfInternet(props){


    return(
        <div style={{display:"flex"}}>
            <DefaultArticle alt={props.articlesItems[0].name} src={props.articlesItems[0].image_uri} url={props.articlesItems[0].original_url} title={props.articlesItems[0].name}></DefaultArticle>
            <DefaultArticle alt={props.articlesItems[1].name} src={props.articlesItems[1].image_uri} url={props.articlesItems[1].original_url} title={props.articlesItems[1].name}></DefaultArticle>
            <DefaultArticle alt={props.articlesItems[2].name} src={props.articlesItems[2].image_uri} url={props.articlesItems[2].original_url} title={props.articlesItems[2].name}></DefaultArticle>
        </div>
        )
}
export default BestOfInternet;