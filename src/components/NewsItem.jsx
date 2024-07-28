import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
      <div className="card">
        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:0}}>
        <span className="badge rounded-pill bg-danger">
    {source}
  </span>
        </div>
     
        <img src={!imageUrl ? "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg" : imageUrl} className="card-img-top" alt="News Image" style={{height:'250px'}} />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>    
          <p className="card-text">
              <small className="text-danger text-body-secondary">
                By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}
              </small>
          </p>
          <a href={newsUrl} target='__blank' className="btn btn-dark btn-sm">Read More</a>
        </div>
      </div>      
    </div>
   )
  }
}

export default NewsItem
