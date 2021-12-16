import { useNavigate } from 'react-router-dom';
import './style.scss';
import logo from '../../images/logo.png'

function App() {

    let nav = useNavigate();

    function toRegister() {
        nav("/Registro")
    }

    return (
        <div className="app">
            <div className="bg-login">
                <div className="box-login">
                    <div className="lado-esquerdo-login">
                        <img src={logo} />
                    </div>

                    <div className="lado-direito-login">
                        <p className="title-login">Crie sua conta</p>

                        <input className='input-login' type="email" placeholder='Email' />
                        <input className='input-login' type="password" placeholder='Senha' />

                        <div className='cta-login' variant='contained'>Cadastrar </div>

                        <p className='ou'>ou</p>

                        <p onClick={toRegister} className='cadastre-se'>Cadastre-se</p>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default App;