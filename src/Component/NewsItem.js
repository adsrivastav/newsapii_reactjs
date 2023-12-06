import React from 'react'

const NewsItem =(props)=> {
   
        let { title, description, imageUrl, newsUrl,author, date,source } = props;
        return (

           <div>
                <div className="card" /*style={{width: "18rem"}}*/ style={{margin: "1.5rem 4rem"}}>
                    <img src={imageUrl ? imageUrl : "https://www.shutterstock.com/image-vector/breaking-news-background-planet-260nw-667420906.jpg"} className="card-img-top" alt="..." />
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
    {source}
  
  </span>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>

        )
    
}
export default NewsItem
