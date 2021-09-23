import React, { Component } from 'react'

export default class newsbar extends Component {
    render() {
        let {title,description,imageUrl,newsUrl,author,publishedAt,name}= this.props;
        return (
            <div>
               <div className="card" >
                   <div>
               <span className=" badge rounded-pill bg-danger" style={{display:'flex',position:'absolute',justifyContent:'flex-end',right:'0'}}>
                {name}
                </span>
                </div>
                    <img src={imageUrl?imageUrl:'https://image.shutterstock.com/image-vector/no-image-available-sign-absence-260nw-373244122.jpg'} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">{!author?'Unknown':author} on {new Date(publishedAt).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-primary">Read more</a>
                    </div>
               </div>
            </div>
        )
    }
}

