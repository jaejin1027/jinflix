import React from "react";
import SearchPresenter from "./SearchPresenter";


export default class extends React.Component{
    state = {
        movieResults: null, //누군가 검색 시도 시, 양쪽 영화,티비 결과를 둘다 보여주기 위해
        tvResults: null,
        searchTerm: null,
        error: null,
        loading: false
    };

    render() {
        const { movieResults, tvResults, searchTerm, error, loading } = this.state;
        return (
            <SearchPresenter movieResults={movieResults} tvResults={tvResults} searchTerm={searchTerm} error={error} loading={loading}/>
        )
    };  
}