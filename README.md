## [BUCKET_LIST by Jinh](http://jinh.kr/bucket/) 클론 + 고도화
- [x] 기존에 html, js, css로 작성한 프로젝트 -> 리액트를 사용해 재사용 가능한 컴포넌트화
- [ ] 단순히 정적파일들을 서빙했던 부분들을 DB로 구성
- [ ] 회원가입 기능 추가


## 폴더 구조

```
├── db
├── front
└── server
```

- db
	- docker
	- mysql
- front
	- react
- server
	- nodejs (express)

## To Do List
- [ ] 프론트 프로젝트 설계 및 개발
- [ ] DB 생성 및 설계
	- [링크](https://www.erdcloud.com/d/SdfFqcTkFWDh8PurM)
- [ ] backend API 설계 및 개발
- [ ] 도메인 구매
- [ ] AWS 배포


## scripts

### front 서버 실행

```shell
cd front && yarn start
```

### back 서버 실행

```shell
```

### db 서버 실행

```shell
cd front && yarn start
```

#### 도커 실행

```shell
docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=4321 \
-v /{YOUR_PATH}/db:/var/lib/mysql \
--name db_bklist mysql:latest \
--character-set-server=utf8mb4 \
--collation-server=utf8mb4_unicode_ci
```
- `run -d -p`
	- 내 컨테이너를 localhost:3306 포트에 연결하여 실행한 뒤, 컨테이너 아이디를 출력함
- `-e`
	- 연결 비밀번호를 4321로 설정
- `-v`
	- 로컬 폴더에 컨테이너 볼륨을 연결함 (컨테이너가 리부팅되도 db데이터가 유지되게 하기 위해)

### 참조한 링크
- [가장 빨리 만나는 Docker 20장 - 28. run](http://pyrasis.com/book/DockerForTheReallyImpatient/Chapter20/28)
- [BUCKET_LIST by Jinh](http://jinh.kr/bucket/)
</details>

