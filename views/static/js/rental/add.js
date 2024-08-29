document.getElementById('price').addEventListener('input', function (e) {
    let value = e.target.value;

    // 숫자만 남기기
    value = value.replace(/[^0-9]/g, '');

    // 숫자로 변환
    let numberValue = parseInt(value, 10);

    // 빈 값이면 처리하지 않음
    if (isNaN(numberValue)) {
        e.target.value = '';
        return;
    }

    // 최대값만 제한 (최소값 제한은 폼 제출 시 처리)
    if (numberValue > 10000000) {
        numberValue = 10000000;
    }

    // 천 단위마다 콤마 추가하여 표시
    e.target.value = new Intl.NumberFormat().format(numberValue);
});

document.getElementById('price').addEventListener('blur', function (e) {
    let value = e.target.value.replace(/[^0-9]/g, '');
    let numberValue = parseInt(value, 10);

    // 입력 필드 포커스가 벗어났을 때 최소값 확인
    if (!isNaN(numberValue) && numberValue < 10000) {
        e.target.value = '10,000'; // 최소값 1만으로 설정
    }
});
document.querySelector('form[name="addfrm"]').addEventListener('submit', function (e) {
    const file1 = document.getElementById('file1');
    const zipcode = document.getElementById('zipcode').value;
    const priceInput = document.getElementById('price'); // priceInput 변수를 선언


    // 가격 필드에서 쉼표 제거
    priceInput.value = priceInput.value.replace(/,/g, '');

    // 첨부파일 1가지를 필수로 확인
    if (!file1.value) {
        e.preventDefault(); // 폼 제출 방지
        alert('첨부파일을 최소 1개 이상 선택하세요.');
        file1.focus();
        return;
    }

    // 서울시 우편번호 유효성 검사 (01000 - 08999)
    if (!/^0[1-8]\d{3}$/.test(zipcode)) {
        e.preventDefault(); // 폼 제출 방지
        alert('유효한 서울시 우편번호를 입력하세요.');
        document.getElementById('zipcode').focus();
    }
});