# 카페아웃 백엔드
**설명 :** 카페인 섭취 기록 앱 카페아웃 백엔드-서버 레포지토리입니다.


**작성일자 :** 2023.01.22



## 목표 및 현황

- **목표 :**
  - **22년 Q3 : 카페 데이터 크롤링 통해 DB 구축 / API 서버 배포 / API 명세서 작성**
  - **22년 Q4 : 중복 데이터 이슈, API서버 관련 유지 보수**
- **현황 :**
  - **23년 Q1 : 회원 관리 시스템 및 JWT 기반 통신 체계 개발**

## 구성

- **back-end** : ExpressJS 기반 API 서버
  - **서버** : `ExpressJS`
  - **DB** : `MongoDB Atlas` (M0-FreeTier)
    - **ODM :** `mongoose`
  - **API 명세서** : `Swagger`
  - **배포환경** : `AWS EC2` (t2.micro / Ubuntu22.04)
    - **모니터링** : `PM2`
  - **랜딩 페이지** : `html` `css` `js`

## 개발팀원

- **KUGODS 1기 개발 코어 김규민**  
  [![GitHub Badge](https://img.shields.io/badge/GitHub-181717?&logo=GitHub&logoColor=white&style=for-the-badge&link=https://github.com/KY00KIM)](https://github.com/KY00KIM)
- **KUGODS 1기 개발 크루 이성진**  
  [![GitHub Badge](https://img.shields.io/badge/GitHub-181717?&logo=GitHub&logoColor=white&style=for-the-badge&link=https://github.com/mobius29)](https://github.com/mobius29)
- **KUGODS 1기 개발 크루 김백규**  
  [![GitHub Badge](https://img.shields.io/badge/GitHub-181717?&logo=GitHub&logoColor=white&style=for-the-badge&link=https://github.com/centneuf0109)](https://github.com/centneuf0109)

- **KUGODS 1기 개발 크루 정혜정**  
  [![GitHub Badge](https://img.shields.io/badge/GitHub-181717?&logo=GitHub&logoColor=white&style=for-the-badge&link=https://github.com/Hyejeong33h)](https://github.com/Hyejeong33h)

## 실행 방법

- Execute Server
  ```bash
  npm run start:dev
  ```
- Prettier
  ```bash
  npm run format:check # find code which is not following prettier
  npm run format:fix # fix code which is not following prettier
  ```
- Eslint
  ```bash
  npm run lint:check # find code which is not following eslint
  npm run lint:fix # fix code which is not following eslint
  ```

### 커밋 규칙
커밋 메세지는 다음과 같은 형식으로 작성합니다.
```
Activity: Commit Message
```

- Activities
  - `int`: only for initial commit
  - `doc`: changes document or comment
  - `ftr`: add new feature
  - `mod`: modify existing feature
  - `fix`: fix an error or issue
  - `rfc`: refactor code
  - `add`: add new file or directory
  - `rmv`: remove existing file or directory
- Example
  - `int: initial commit`
  - `add: prettier and eslint`
  - `rfc: refactoring code by prettier`
