$(document).ready(function () {
  // 아이디
  $('#user-id').on('keyup', function () {
    var id = $(this).val();
    var reg = /^(?=.*?[a-z]).{6,20}$/;
    var reg_false = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\{\}\[\]\/?.,;:|\)*~`!^\-_+<>₩@\#$%&\\\=\(\'\"]/;

    if (false === reg.test(id)) {
      $('.id-message').html('영문 소문자를 사용하여 6~15자의 아이디를 입력해주세요.');
      $('.id-message').attr('style', 'color: #ff5b56');
      return false;
    } else if (reg_false.test(id)) {
      $('.id-message').html('한글과 특수문자는 사용할 수 없습니다.');
      $('.id-message').attr('style', 'color: #ff5b56');
      return false;
    } else if (/(\w)\1\1\1/.test(id)) {
      $('.id-message').html('같은 문자를 4번 이상 사용하실 수 없습니다.');
      $('.id-message').attr('style', 'color: #ff5b56');
      return false;
    } else if (id.search(/\s/) != -1) {
      $('.id-message').html('공백 없이 입력해주세요.');
      $('.id-message').attr('style', 'color: #ff5b56');
      return false;
    } else {
      $('.id-message').empty();
      return true;
    }
  });

  $('#user-id').on('change keyup paste', function () {
    var id = $(this).val();
    var btnId = $('#btn-id');
    var reg = /^(?=.*?[a-z]).{6,20}$/;
    var reg_false = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\{\}\[\]\/?.,;:|\)*~`!^\-_+<>₩@\#$%&\\\=\(\'\"]/;

    if (id.length < 6) {
      btnId.attr('disabled', true);
    } else if (false === reg.test(id)) {
      btnId.attr('disabled', true);
    } else if (reg_false.test(id)) {
      btnId.attr('disabled', true);
    } else if (/(\w)\1\1\1/.test(id)) {
      btnId.attr('disabled', true);
    } else if (id.search(/\s/) != -1) {
      btnId.attr('disabled', true);
    } else {
      btnId.attr('disabled', false);
    }
  });

  // 비밀번호
  $('#user-pwd').on('keyup', function () {
    var pw = $('#user-pwd').val();
    var id = $('#user-id').val();
    var num = pw.search(/[0-9]/g);
    var eng = pw.search(/[a-z]/gi);
    var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    // 비번
    if (pw.length < 6 || pw.length > 20) {
      $('.pwd-message').html('영문자, 숫자, 특수문자 중 2가지 이상을 조합하여 8~20자로 입력해주세요.');
      $('.pwd-message').attr('style', 'color: #ff5b56');
      return false;
    } else if ((num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0)) {
      $('.pwd-message').html('영문자, 숫자, 특수문자 중 2가지 이상을 조합하여 8~20자로 입력해주세요.');
      return false;
    } else if (pw.search(/\s/) != -1) {
      $('.pwd-message').html('공백 없이 입력해주세요.');
      return false;
    } else if (/(\w)\1\1\1/.test(pw)) {
      $('.pwd-message').html('같은 문자를 4번 이상 사용하실 수 없습니다.');
      return false;
    } else if (pw.search(id) > -1) {
      $('.pwd-message').html('비밀번호에 아이디가 포함되었습니다.');
      return false;
    } else {
      $('.pwd-message').empty();
    }
  });
  $('.input-container i').on('click', function () {
    if ($(this).hasClass('xi-eye-off')) {
      $(this).attr('class', 'xi-eye');
      $('#user-pwd').attr('type', 'text');
    } else {
      $(this).attr('class', 'xi-eye-off');
      $('#user-pwd').attr('type', 'password');
    }
  });

  /* 비밀번호 재확인 진행시
  let pwd1 = $('#user-pwd').val()
  let pwd2 = $('#user-pwd_chk').val()
  if( pwd1 !="" || pwd2 !=""){
    if(pwd1 == pwd2){
      $('.pwd-message').html('사용 가능한 비밀번호입니다.');
      $('.pwd-message').attr('style', 'color: #66bc69');
    }else{
      $('.pwd-message').html('비밀번호 확인이 필요합니다.');
      $('.pwd-message').attr('style', 'color: #ff5b56');
    }
  }
  */

  // 도메인
  $('#select-direct').on('keyup', function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[^0-9a-zA-Z-_/.]/g, ''),
    );
  });
  $('.domain select').bind({
    click: function (e) {
      $(this).addClass('on');
      $('option.disabled').prop('disabled', true);
    },
    change: function (e) {
      if ($(this).val() == 'direct') {
        $('#select-direct').show();
      } else {
        $('#select-direct').hide();
      }
    },
  });

  // 전화번호
  $('#user-tel, #user-sms').on('keyup', function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[^0-9]/g, ''),
    );
  });
  $('#user-tel').on('change keyup paste', function () {
    var currentVal = $(this).val();
    var btnTel = $('#btn-tel');

    if (currentVal.length < 11) {
      btnTel.attr('disabled', true);
    } else {
      btnTel.attr('disabled', false);
    }
  });

  var count = 0;
  $('#btn-tel').on('click', function () {
    $('#btn-sms').attr('disabled', false);
    $('.sms').css('display', 'flex');

    var num = 60 * 3;
    var Interval = setInterval(countdown, 1000);

    function countdown() {
      var min = num / 60;
      min = Math.floor(min);
      var sec = num - 60 * min;

      if (num == 0) {
        clearInterval(Interval); // num 이 0초가 되었을대 clearInterval 타이머 종료 but/재전송(인정번호받기) 2번클릭시 문제발생 해결필요
        $('#btn-sms').attr('disabled', true);
      }
      num--;

      $('.timer').html(min + ':' + sec);
    }
  });

  // 약관동의
  $('.agree-box #check-all').on('click', function () {
    $(this).parents('.agree-box').find('input:checkbox').prop('checked', $(this).is(':checked'));
  });
  $('.agree-box .normal').on('click', function () {
    let is_checked = true;

    $('.normal').each(function () {
      is_checked = is_checked && $(this).is(':checked');
    });
    $('#check-all').prop('checked', is_checked);
  });
});

function Signup() {
  var btnSignup = $('#btn-signup');

  if ($('#user-id').val().length < 6) {
    alert('아이디를 확인해주세요.');
    $('#user-id').focus();
    return false;
  }
  if ($('#user-pwd').val().length < 8) {
    alert('비밀번호를 확인해주세요.');
    $('#user-pwd').focus();
    return false;
  }

  if ($('#user-email').val() == '') {
    alert('이메일 다시 확인해주세요.');
    $('#user-email').focus();
    return false;
  }
  if ($('#select-direct').css('display') == 'block') {
    if ($('#select-direct').val() == '') {
      alert('이메일 다시 확인해주세요.');
      $('#select-direct').focus();
      return false;
    }
  }

  if ($('#user-tel').val().length < 11) {
    alert('휴대폰 번호를 다시 확인해주세요.');
    $(this).focus();
    return false;
  }
  if ($('#user-sms').val().length < 6) {
    alert('휴대폰 번호 인증이 필요합니다.');
    $(this).focus();
    return false;
  }

  var allCheckBox = $('input:checkbox[name=essential]');
  var count_checked = allCheckBox.filter(':checked').length;

  if (count_checked == 0) {
    alert('약관동의 필수사항을 확인해주세요.');
  } else if (count_checked != allCheckBox.length) {
    alert('약관동의 필수사항을 확인해주세요.');
  } else {
    alert('통과');
    // btnSignup.attr('disabled',true);
    return true;
  }
}

/*회원가입폼 제작

1. 아이디 중복확인
  - 이메일경우 인증번호 진행
  - 조건에 맞게 작성했는지 검사
  - 조건에 맞지 않다면 다시 작성하라는 문구 or 경고팝업창 뜨도록

2. 비밀번호 유효성검사
- 조건대로 작성했는지
- 연속된 4자리 혹은 동일한 4자리 이상의 숫자나 문자를 제외하여 입력하도록 검사
- 아이디와 연속된 4자리 이상 겹치는지 검사 
- 2차 비밀번호 확인칸에 같은 비번으로 작성했는지 검사 (재확인칸 할 경우)

3. 휴대폰 인증번호
  - 인증번호받기 클릭 (번호 입력시 버튼 활성화)
  - 인증번호 적을 input, 타이머, 문자재발송칸 생성
  - 3분 타이머와 제한시간내 작성 못할경우 재인증 요청 경고

4. 이메일
  - 도메인 미선택시 경고
  - 직접입력시 '.' 꼭 들어가야함
  
5.약관동의
  - 디자인 고민중ex) [필수] 개인정보수집동의 자세히(밑줄) -> 자세히 클릭시 수집목적 관련 안내에 대한 팝업오픈?
  
 */
