import { useState, useRef } from 'react'; 

import TextBox from '../components/TextBox';
import * as PgS from './style.js';
import * as S from '../styles/style.js';

import { ReactComponent as Myo } from '../assets/myo.svg';

function LoginPopUp() {
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
    <PgS.LoginPopUp>
      <div style = {{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <TextBox text = "이메일" type = "text" 
          value = {userEmail} onChange = {(e) => setUserEmail(e.target.value)} ref = {userEmailRef}/>

        <TextBox text = "비밀번호" type = "password" 
          value = {userPassword} onChange = {(e) => setUserPassword(e.target.value)} ref = {userPasswordRef}/>
      </div>

      <S.GreenBtn onClick = {LoginHandler} disabled = {!userEmail || !userPassword}>로그인</S.GreenBtn>
      
      {errorMsg && (
        <p style = {{color: '#C23A3A', marginTop: '38px'}}>{errorMsg}</p>
      )}
    </PgS.LoginPopUp>
  );
}

function Login() {
  return (
    <PgS.LoginDiv>
      <div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <Myo style = {{ width: '150px', height: '150px' }}></Myo>
        <PgS.LoginH1>반가워요, MEMYO를 시작해 볼까요?</PgS.LoginH1>
      </div>
      <LoginPopUp />
    </PgS.LoginDiv>
  );
}

export default Login; 
