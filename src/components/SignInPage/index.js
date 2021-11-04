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
import {FirebaseContext} from "../../firebase/firebase";
import {useHistory} from "react-router-dom";

const SignInMain = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {firebase} = useContext(FirebaseContext);
  const history = useHistory();

  const isInvalid = password === '' || emailAddress === '';

  const handleSignIn = (event) => {
    event.preventDefault(); // записывает значение

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password) // авторизация
      .then(() => {
        history.push('/main'); // переход на другую страницу
      })
      .catch((error) => { // отлавливает ошиби
        setEmailAddress('');
        setPassword('');
        setError(alert(error));
      })
  };

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
          <SIMForm onSubmit={handleSignIn} method="POST">
            <SIMLabel>Sign In</SIMLabel>
            <SIMInput placeholder='Email' value={emailAddress} onChange={({target}) => setEmailAddress(target.value)}/>
            <SIMInput placeholder='Password' value={password} onChange={({target}) => setPassword(target.value)}
                      type="password" autoComplete="off"/>
            <SIMButton disabled={isInvalid} type="submit">Sign In</SIMButton>
            <SIMLink to='/signup'>Sign Up now</SIMLink>
          </SIMForm>
        </SIMContent>
      </SIMContainer>
    </>
  );
};

export default SignInMain;