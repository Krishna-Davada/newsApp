import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    pagesize: 5,
    country: 'in',
    category: 'general',
  };

  static propTypes = {
    pagesize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    console.log('Hello, I am the constructor from the News component.');
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = 'newsApp - ' + this.capitalize(this.props.category);
  }

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    this.props.setProgress(0);
    const { page } = this.state;
    const { country, pagesize, category } = this.props;
    const apiKey = import.meta.env.VITE_NEWS_API;
    console.log('API Key:', apiKey); // Debugging line

    if (!apiKey) {
      console.error('API key is missing');
      return;
    }

    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pagesize}`;
    this.setState({ loading: true });

    try {
      let data = await fetch(url);
      this.props.setProgress(30);
      let parsedData = await data.json();
      this.props.setProgress(50);
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
      this.props.setProgress(100);
    } catch (error) {
      console.error('Error fetching news:', error);
      this.setState({ loading: false });
    }
  };

  fetchMoreData = async () => {
    const { page } = this.state;
    const { country, pagesize, category } = this.props;
    const apiKey = import.meta.env.VITE_NEWS_API;

    if (!apiKey) {
      console.error('API key is missing');
      return;
    }

    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page + 1}&pageSize=${pagesize}`;
    this.setState({ page: page + 1 });

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
      });
    } catch (error) {
      console.error('Error fetching more news:', error);
    }
  };

  render() {
    return (
      <div className="container my-4">
        <h1 className="text-center">newsApp - Top {this.capitalize(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element, index) => (
                <div className="col-md-4" key={`${element.url}-${index}`}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ''}
                    description={element.description ? element.description.slice(0, 88) : ''}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
