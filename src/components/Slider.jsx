import React from "react";
import CardSlider from "./CardSlider";
function Slider({movies}){
    const getMoviesfromRange=(from,to)=>{
        return movies.slice(from,to);
    }
    return <div>
        <CardSlider title="Trending Now" data={getMoviesfromRange(0,10)}/>
        <CardSlider title="New Releases" data={getMoviesfromRange(10,20)}/>
        <CardSlider title="BlockBusters" data={getMoviesfromRange(20,30)}/>
        <CardSlider title="Popular on MovieFlix" data={getMoviesfromRange(30,40)}/>
        <CardSlider title="Action Movies" data={getMoviesfromRange(40,50)}/>
        <CardSlider title="MovieFlix Original Movies" data={getMoviesfromRange(50,60)}/>
    </div>
}
export default Slider;