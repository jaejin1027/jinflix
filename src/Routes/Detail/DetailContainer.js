import React from "react";
import DetailPresenter from "./DetailPresenter";


export default class extends React.Component{
    state = {
        result: null,
        error: null,
        loading: true
    };

    async componentDidMount(){
        const {
            match: {
                params: {id}
            },
            history: {push}
        } = this.props;
        const parseId = parseInt(id);
        if(isNaN(parseId)){
            return push("/");//return없이 해주면 사용자를 다른 페이지로 보내고 콘솔로그가 실행된다. 
        }//왜냐면 자바스크립트가 함수를 끝내지 않았기 떄문이다.
        //console.log(this.props)
    }

    render() {
        //console.log(this.props)
        const { result, error, loading } = this.state;
        return (
            <DetailPresenter result={result} error={error} loading={loading}/>
        )
    };  
}
