import React from "react";
import {useNavigate} from 'react-router-dom';

function Account() {
  const [emailInput, setEmailInput] = React.useState('')
  const [passwordInput, setPasswordInput] = React.useState('')

  const createAccount = (email, password) => {
    if (email !== "" && password !== "") {
      fetch('http://localhost:3500/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: "",
          email: email,
          password: password
        })
      })
    }
  }

  const navigate = useNavigate()

  function onButtonClick(url) {
    navigate(url)
  }
  

  return (
    <main className="account">
      <form action="">
        <img height="48" src="https://p3-ofp.static.pub/fes/cms/2023/03/22/8hjmcte754uauw07ypikjkjtx0m5ib450914.svg" alt="Lenovo" /><br />
        <h2>Faça login ou crie uma conta</h2><br />
        
        <p>Bem-vindo! Insira seu e-mail para começar a fazer login ou criar uma nova conta.</p><br />
        <div>
          <input type="email" placeholder="Email" onChange={(e) => setEmailInput(e.target.value)}/>
          <i className="fi fi-rr-envelope"></i>
        </div>
        <div>
          <input type="password" placeholder="Senha"  onChange={(e) => setPasswordInput(e.target.value)}/>
          <i className="fi fi-rr-key"></i>
        </div>
        <button type="submit" onClick={(e) => {e.preventDefault(); onButtonClick("/account/user")}}>Login</button><br />
        <button type="submit" onClick={(e) => {e.preventDefault(); createAccount(emailInput, passwordInput)}}>Criar Conta</button>
      </form>
      <div className="account-image">
        <img src="https://www.lenovopartnerhub.com/documents/126533/126535/WomanInCity_G990909516_960x640+%281%29.webp/fabae71b-1461-e15a-f9d4-90164b601421?t=1663990610803" alt="background" style={{height:"100%"}}/>
      </div>
    </main>
  );
}

export default Account;