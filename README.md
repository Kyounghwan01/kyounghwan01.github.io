# 개발 블로그

## 클론, 포크 환영합니다.

클론, 포크하시기 전에 스타 꾹 눌러주시면 감사하겠습니다! (~~많은 분들이 클론해가시는데.. ㅜㅜ~~)
클론하시면 로컬환경으로 블로그를 볼수있지만, 배포는 안될것입니다. (권한문제)
포크하시고, ssh 계정 문제 해결하신후에 commit이 됩니다.

## 블로그 주소

https://kyounghwan01.github.io/blog/

## 목적

- 오류와 해결한 과정을 기록합니다.
- 회사 개발하면서 얻은 인사이트를 기록합니다.
- 그 외, 공부한 것들을 기록합니다.

1. blog/react로 접근가능하도록 코딩 -> getBuild 함수 수정

- ga잡히는 것 확인

2. blog 리포 내리고 접근 가능한지 확인
3. 접근 가능하면 이 리포로 갈아타고 접근 불가능하명,,,,,,,redirect밖에 없네


https://github.com/stories24/stories24.github.io
```html
  
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>도메인 변경으로 인한 포워딩</title>
    <script type='text/javascript'>
        var dest = "https://blog.stories.pe.kr";
        var origin = location.origin;
        var href = location.href;
        var destination = href.replace(origin, dest);
        location.href = destination;
    </script>
</head>

<body>
    도메인 변경으로 인한 포워딩 합니다.
</body>

</html>
```
