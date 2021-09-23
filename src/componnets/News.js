import React, { Component } from 'react'
import Newsbar  from './Newsbar'
import Spinner from './Spinner';
// import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    cpatise=(str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    static defaultProps = {
       country: 'in',
       pagesize: '8',
       category: 'general'
    }
    static propTypes={
        // country: propTypes.string,
        // pagesize: propTypes.number,
        // category: propTypes.string
    }
    constructor(props){
        super(props);
        this.state={
            article: [],
            loading: true,
            page: 1,
            totalResults:0
        }
        document.title =` ${this.cpatise(this.props.category)}-NewsMonkey`;
    }
    fetchData= async()=>{
        this.setState({page:this.state.page+1});
        const url=`http://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f5d4436f6c48479c869f6fd9f46d0ad4&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        let data= await fetch(url);
        let parseddata=await data.json();
        this.setState({article:this.state.article.concat(parseddata.articles),  totalResults:parseddata.totalResults});
       }
    
    async update(){
        const url=`http://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f5d4436f6c48479c869f6fd9f46d0ad4&page=1&total&pagesize=${this.props.pagesize}`;
        this.props.setProgress(10);
        this.setState({loading:true})
        let data= await fetch(url);
        this.props.setProgress(50);
        let parseddata=await data.json();
        this.setState({article:parseddata.articles,  totalResults:parseddata.totalResults,loading:false});
        this.props.setProgress(100);
       }
    async componentDidMount(){
        this.update();
    }
    // handleNextClick=async()=>{
    //     this.setState({page:this.state.page+1});
    //     this.update();
    // }
    
    // handlePreviousClick=async()=>{
    //     this.setState({page:this.state.page-1});
    //     this.update();
    // }
    render(){
        return (
            <>
                <h1 className="text-center" style={{marginLeft:'75px',marginRight:'75px',marginTop:'45px',marginBottom:"34px", border:"2px solid red",color:"red"}}>New-Monkey top headlines on {this.cpatise(this.props.category)}</h1>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.article.length} 
                    next={this.fetchData}
                    hasMore={this.state.article.length!=this.state.totalResults}
                    loader={<Spinner/>}>
                <div className="container my-3">
                 <div className="row">
                  { this.state.article.map((element)=>{
                    return <div className='col-md-3' key={element.url}> 
                    <Newsbar title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} name={element.source.name}/>
                    </div >
               })}
               </div>
               </div>
               </InfiniteScroll>
            </>
        )
    }
}
