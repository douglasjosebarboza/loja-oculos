import './style.css'

export default function Header() {
    return (
        <header>
            <div className='limitar-secao'>
                <img src="/logo.png" alt="Logo" />
                <nav>
                    <ul type='none'>
                        <li><a href="#produtos">Produtos</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
