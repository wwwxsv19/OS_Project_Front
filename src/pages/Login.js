import '../App.css';
import TextBox from '../components/TextBox'

function LoginPopUp() {
  return (
    <div className = "loginPopUp">
      <TextBox text = "userEmail" style = {{marginBottom: '30px'}}/>
      <TextBox text = "userPassword" />
      <button className = "greenBtn" style={{marginTop: '70px'}}>로그인</button>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1>반가워요, 메모를 시작해 볼까요?</h1>
      <LoginPopUp />
    </div>
  );
}

export default Login;
