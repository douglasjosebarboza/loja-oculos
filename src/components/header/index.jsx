import './style.css'

export default function Header() {
    return (
        <header>
            <div className='limitar-secao'>
                <img src="/public/logo.png" alt="Logo" />
                <nav>
                    <ul type='none'>
                        <li><a href="#">Produtos</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}