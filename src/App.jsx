import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 15;

  state = {
    progress: 10,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar height={3} color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pagesize={this.pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pagesize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pagesize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pagesize={this.pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pagesize={this.pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pagesize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pagesize={this.pageSize} country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
