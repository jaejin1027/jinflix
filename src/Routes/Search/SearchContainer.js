import { moviesApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";


export default class extends React.Component{
    state = {
        movieResults: null, //누군가 검색 시도 시, 양쪽 영화,티비 결과를 둘다 보여주기 위해
        tvResults: null,
        searchTerm: "code",
        error: null,
        loading: false
    };

    componentDidMount() {
        this.handlSubmit(); //시뮬
    }

    handlSubmit = () => {
        const {searchTerm} = this.state;
        if(searchTerm !== ""){
          this.searchByTerm();
        }
    };

    searchByTerm = async () => {
        const {searchTerm} = this.state;
        try {
            const movieResults = await moviesApi.search(searchTerm);
            const tvResults = await tvApi.search(searchTerm);
            console.log(movieResults, tvResults);
            this.setState(
                {
                    loading: true
                }
            );

        } catch {
            this.setState(
                {
                    error: "Can't find results."
                }
            );
        } finally {
            this.setState(
                {
                    loading: false
                }
            );

        }


    }

    render() {
        const { movieResults, tvResults, searchTerm, error, loading } = this.state;
        return (
            <SearchPresenter movieResults={movieResults} tvResults={tvResults} searchTerm={searchTerm} error={error} loading={loading}/>
        )
    };  
}