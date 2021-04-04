import HomeContainer from "./HomeContainer";

export default HomeContainer;

//- 컨테이너 : data를 가지고, state(상태값)가지고, api를 불러와서 모든 로직을 처리함 (데이터 담당)
//- 프리젠터 : 컨테이너가 처리한 데이터들을 보여주는 역할을 하는 함수형 컴포넌트. state(상태값), api, 클래스를 다루지않음 (스타일 담당)