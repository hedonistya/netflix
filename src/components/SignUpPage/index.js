import React, {useState, useContext} from "react";
import logo from "../../logo.svg";
import {
  SIMContent,
  SIMContainer,
  SIMBackground,
  ImageBackground,
  SIMForm,
  SIMLabel,
  SIMInput,
  SIMLink,
  SIMButton,
  Nav,
  NavLogo,
  NavbarContainer
} from "../SignInPage/SignInPageStyle";
import {NavLogoLink} from "../Navbar/NavbarStyle";
import {useHistory} from "react-router-dom";
import {FirebaseContext} from "../../firebase/firebase";


const SignUpMain = () => {
  const history = useHistory();
  const {firebase} = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === '' || currentPassword === '' || emailAddress === '';

  const handleSignUp = (event) => {
    event.preventDefault(); // принимает значение

    if (password === currentPassword){
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress, password) // записывает введенные данные
        .then(() => {
          history.push('/main'); // переход на другую страницу
        })
        .catch((error) => { // проверка на ошибки
          setEmailAddress('');
          setPassword('');
          setCurrentPassword('');
          setError(alert(error));
        });
    }
    else {
      alert("Error password");
    }
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoLink to='/'>
            <NavLogo alt="Netflix" src={logo}/>
          </NavLogoLink>

        </NavbarContainer>
      </Nav>
      <SIMContainer>
        <SIMBackground>
          <ImageBackground/>
        </SIMBackground>
        <SIMContent>
          <SIMForm onSubmit={handleSignUp} method="POST">
            <SIMLabel>Sign Up</SIMLabel>
            <SIMInput placeholder='Email' value={emailAddress} onChange={({target}) => setEmailAddress(target.value)}/>
            <SIMInput placeholder='Password' value={password} onChange={({target}) => setPassword(target.value)}
                      autoComplete="off"/>
            <SIMInput placeholder='Password' value={currentPassword}
                      onChange={({target}) => setCurrentPassword(target.value)} autoComplete="off"/>
            <SIMButton disabled={isInvalid} type="submit">Sign Up</SIMButton>
            <SIMLink to='/signin'>Sign In now</SIMLink>
          </SIMForm>
        </SIMContent>
      </SIMContainer>
    </>
  );
};

export default SignUpMain;