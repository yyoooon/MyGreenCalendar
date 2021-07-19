# MyGreenCalendar (진행중)

Html, css, Javascript, Json

제5회 정부혁신제안 끝장개발대회-탄소저감 해결방안 해커톤에 참가해 진행한 프로젝트 입니다.  (기획, 디자인, 프론트개발 참여)

- 마이그린캘린더는 공공기관과 민간기업에서 주최하는 환경 캠페인, 이벤트, 봉사, 지원사업등 산발되어 있던 정보들을 
  한 곳에 모아 보여주는 **큐레이션 웹 서비스**입니다.
- 모든 환경 참여 활동 이벤트를 한번에 모아볼 수 있으며 개인에 맞는 **맞춤형 활동**을 추천합니다.
- 참여하고 있는 활동이나 참여할 활동을 **캘린더에 저장**해 편하게 일정을 관리할 수 있습니다

[자세한 기획 설명 페이지 링크](https://www.notion.so/My-Green-Calendar-861dd92979964e9a9699aa0536b9229f)  
[시연 영상 링크](https://www.youtube.com/watch?v=VQpOeU1g18s)


</br>

### 메인페이지

<img src="https://user-images.githubusercontent.com/81611808/122341790-d3badd80-cf7e-11eb-9ef3-a6a226d4012f.png" width="50%">

### 캠페인 메뉴(나머지 메뉴 모두 동일)

<img src="https://user-images.githubusercontent.com/81611808/122341781-d1588380-cf7e-11eb-8c06-26aa30858b3f.png" width="50%">

### 관심 목록

<img src="https://user-images.githubusercontent.com/81611808/122341769-cf8ec000-cf7e-11eb-8a7b-3bdd1728e6af.png" width="50%">

### 캘린더

<img src="https://user-images.githubusercontent.com/81611808/122341752-ca317580-cf7e-11eb-8d86-642d0bd47c1e.png" width="50%">
</br>


## 구현 사항

현재 프로토타입 단계까지 진행했습니다

- Json에 저장한 데이터를 Js파일에 fetch API로 가져와 컨텐츠를 만듦
- 각 컨텐츠의 좋아요 버튼을 누르면 정도를 정할 수 있는 팝업이 뜨고, 점수가 컨텐츠에 표시됨
- 캘린더 저장 버튼 인터랙션 구현
- 필터 기능 일부 구현 (공공, 민간)

</br>

## Improvement

- 리액트로 다시 구현 해볼 것
- 좋아요 버튼을 누른 컨텐츠들을 관심 목록 페이지에 관심 정도 순으로 추가시키기
- 캘린더 저장 버튼을 누른 컨텐츠들을 내 캘린더 페이지에 추가하고 달력에 표시하기
- 나머지 필터 기능 모두 구현 (지역, 정렬)
- 큐레이션을 위한 웹 크롤링, 데이터 가져오기
- 로그인, 관심 키워드 선택 기능 구현하기
- 개인 데이터 기반 맞춤형 추천 기능 구현하기

</br>

## Usage

- 폴더를 다운 받고 **beforelogin.html**파일을 실행시킵니다
- 서버를 사용해 실행해야합니다 (CORS Error)

</br>
