import { moviesApi, tvApi } from "api";
import React from "react";
import reset from "styled-reset";
import DetailPresenter from "./DetailPresenter";


export default class extends React.Component{
    constructor(props){
        super(props);
        const {
            location: {pathname}
        } = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        };
    }
    

    async componentDidMount(){
        const {
            match: {
                params: {id}
            },
            history: {push}
        } = this.props;
        const { isMovie } = this.state;
        const parseId = parseInt(id);
        if(isNaN(parseId)){
            return push("/");//return없이 해주면 사용자를 다른 페이지로 보내고 콘솔로그가 실행된다. 
        }//왜냐면 자바스크립트가 함수를 끝내지 않았기 떄문이다.
        //console.log(this.props)
        let result= null;
        try {
            if(isMovie){
                const request = await moviesApi.movieDetail(parseId);
                result = request.data;
            } else {
                const request = await tvApi.showDetail(parseId);
                result = request.data;
            }
            console.log(result)

        } catch {
            this.setState({error: "Can'find anything."});
 
        } finally {
            this.setState({loading:false, result});

        }
    }

    render() {
        //console.log(this.props)
        const { result, error, loading } = this.state;
        return (
            <DetailPresenter result={result} error={error} loading={loading}/>
        )
    };  
}
