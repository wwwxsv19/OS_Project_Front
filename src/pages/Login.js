import { useState, useRef } from 'react'; 

import * as S from './style.js';

import TextBox from '../components/TextBox';
import GreenButton from '../components/button/GreenButton.js';

import { ReactComponent as Myo } from '../assets/icons/myo.svg';

function LoginPopUpDiv() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const userEmailRef = useRef(null);
  const userPasswordRef = useRef(null);

  const LoginHandler = () => {
    if (userEmail && userPassword) {
      console.log(userEmail);
      console.log(userPassword);

      return ;
    }
    setErrorMsg("로그인 정보가 올바르지 않아요!");

    if (!userEmail) {
      userEmailRef.current.focus();
    } else if (!userPassword) {
      userPasswordRef.current.focus();
    }
  };

  return (
    <S.LoginPopUpDiv>
      <S.LoginPopUpTextBoxListDiv>
        <TextBox text = "이메일" type = "text" 
          value = {userEmail} onChange = {(e) => setUserEmail(e.target.value)} ref = {userEmailRef}/>

        <TextBox text = "비밀번호" type = "password" 
          value = {userPassword} onChange = {(e) => setUserPassword(e.target.value)} ref = {userPasswordRef}/>
      </S.LoginPopUpTextBoxListDiv>

      <GreenButton text = {"로그인"} onClick = {LoginHandler} disabled = {!userEmail || !userPassword}>로그인</GreenButton>
      
      {errorMsg && (
        <S.LoginErrorP>{errorMsg}</S.LoginErrorP>
      )}
    </S.LoginPopUpDiv>
  );
}

function Login() {
  return (
    <S.LoginDiv>
      <S.LoginTextP>
        <Myo style = {{ width: '150px', height: '150px' }}></Myo>
        <S.LoginH1>반가워요, MEMYO를 시작해 볼까요?</S.LoginH1>
      </S.LoginTextP>
      <LoginPopUpDiv />
    </S.LoginDiv>
  );
}

export default Login; 
