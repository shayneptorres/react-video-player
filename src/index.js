import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyDkLuKVZXxWs3MH0cRXoGn8eA1Z8mVrAtA"



class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch("Good Mythical Morning")
    }

    videoSearch(searchText){
        YTSearch({key:API_KEY,term:searchText},(data) =>{
            this.setState({
                videos:data,
                selectedVideo: data[0]
            })
        });
    }

    render(){
        return (
            <div>
                <SearchBar
                    onSearchSubmit={(term) => this.videoSearch(term)}
                />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                videos = {this.state.videos} />
            </div>
        );
    }
}

React.render(<App/>, document.querySelector(".container"));