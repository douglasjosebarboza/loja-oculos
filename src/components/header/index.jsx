import Footer from '../footer/'
import './style.css'

export default function Header() {
    return (
        <header>
            <div>
                <img src="../../assets/imgs/logo.png" alt="Logo" />
                <nav>
                    <ul>
                        <li><a href="#">Produtos</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}