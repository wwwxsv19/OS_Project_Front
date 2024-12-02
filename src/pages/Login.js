import { useState, useRef } from 'react'; 
import TextBox from '../components/TextBox';
import * as PgS from "./style.js";
import * as S from "../styles/style.js";

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
    /* 텍스트 삽입이 될 것처럼 커서가 들어감. readonly 넣어야겠음 */
    <PgS.LoginPopUp>
      <TextBox text = "userEmail" type = "text" style = {{marginBottom: '30px'}} 
        value = {userEmail} onChange = {(e) => setUserEmail(e.target.value)} ref = {userEmailRef}/>

      <TextBox text = "userPassword" type = "password" 
        value = {userPassword} onChange = {(e) => setUserPassword(e.target.value)} ref = {userPasswordRef}/>
      
      <S.GreenBtn style = {{marginTop: '70px'}} onClick = {LoginHandler}>로그인</S.GreenBtn>
      
      {errorMsg && (
        <p style = {{color: '#C23A3A', marginTop: '38px'}}>{errorMsg}</p>
      )}
    </PgS.LoginPopUp>
  );
}

function Login() {
  return (
    <PgS.LoginDiv>
      <PgS.LoginH1>반가워요, 메모를 시작해 볼까요?</PgS.LoginH1>
      <LoginPopUp />
    </PgS.LoginDiv>
  );
}

export default Login;
