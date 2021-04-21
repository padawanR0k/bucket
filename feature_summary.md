
### 버킷 리스트 데이터 구조
- 루트 (유저 id) - 유저 (*USER*)
- depth1
	- ([휴식, 공부])
	- (*버킷 category*)
- depth2
	- ([휴식-여행, 휴식-취미], [공부-자격증, 공부-학력])
	- (*버킷 sub category*)
- dpeth3
	- ({group})
	- (*버킷 아이템 그룹*)
	- bucket item의 group 키값이 동일할 것들이 같은 카드내에 들어가게 된다.
	- 카드의 뒷면에 보이는 게시글에 대해 1대1로 매칭됨
- depth4
	- (체크박스 부모id를 가지고 있을 수 있음)
	- 버킷 아이템
	- bucket item의 parent 키값이 존재하는 경우 해당 item 하위로 (depth5로 들어간다.)
	- 존재하지 않는 경우, 해당 item이 상위 bucket item 임
- depth5
	- 하위 버킷 아이템


### 주요 기능 로직
- 버킷 아이템 그룹 desc 내용 저장
	- [POST, PUT] 글 작성, 수정
		1. rich text 작성기로 마크다운 내용 작성
		2. 마크다운 문법으로 된 문자열을 서버로 전송
		3. 서버에서는 blob 타입으로 변환하여 blob타입 컬럼에 저장
	- [GET] 글조회
		1. 마크다운 내용 조회
		2. dom에 그리는 과정에서 html태그로 변환
		3. dangrouslyHTML 로 렌더링
