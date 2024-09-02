// dart.js

// 페이지 로드 후 DOM 요소를 가져옵니다.
window.onload = function() {
    // 각 점수 버튼 요소를 가져옵니다.
    const onePointButton = document.getElementById('onePoint');
    const twoPointButton = document.getElementById('twoPoint');
    const threePointButton = document.getElementById('threePoint');
    const fourPointButton = document.getElementById('fourPoint');
    const fivePointButton = document.getElementById('fivePoint');
    // const scoreBoard = document.querySelector('.scoreBoard');
    
    // 점수를 추적하는 변수
    let score = 0;

    // 점수 업데이트 함수
    function updateScore(score) {
         // 점수 업데이트
        let message = '';
        if (score >= 3) {
            message = '합격';
        } else {
            message = '불합격';
        }

        console.log('점수 : ' + score);
        console.log('결과 : ' + message);

    
    }

    // 각 버튼에 클릭 이벤트 리스너를 추가
    onePointButton.addEventListener('click', () => updateScore(1));
    twoPointButton.addEventListener('click', () => updateScore(2));
    threePointButton.addEventListener('click', () => updateScore(3));
    fourPointButton.addEventListener('click', () => updateScore(4));
    fivePointButton.addEventListener('click', () => updateScore(5));
    // scoreBoard.addEventListener('click', () => updateScore(0));
};
