import './style.css'

export function SectionCapa() {
    return (
        <section id='capa'>
            <div className='limitar-secao'>
                <p>Preços baixos em</p>
                <h1>Óculos de grau e de sol</h1>
                <p>Você só encontra aqui</p>
            </div>
        </section>
    )
}

export function SectionProdutos() {
    return (
        <section id='produtos'>
            <div className='limitar-secao'>
                <h2>Nossos produtos</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                <div className='container-cards'>
                    <div className='card'>
                        <h3>Óculos de grau</h3>
                        <img src="/public/oculos01.png" alt="Óculos de grau" />
                        <p>R$ 500,00</p>
                    </div>
                    <div className='card'>
                        <h3>Óculos transition</h3>
                        <img src="/public/oculos02.png" alt="Óculos de grau" />
                        <p>R$ 750,00</p>
                    </div>
                    <div className='card'>
                        <h3>Óculos de sol</h3>
                        <img src="/public/oculos03.png" alt="Óculos de grau" />
                        <p>R$ 700,00</p>
                    </div>
                    <div className='card'>
                        <h3>Óculos infantil</h3>
                        <img src="/public/oculos04.png" alt="Óculos de grau" />
                        <p>R$ 500,00</p>
                    </div>
                </div>
                    <p>Todos os nossos produtos incluem:</p>
                    <ul>
                        <li>Garantia de 1 ano</li>
                        <li>Manutenção preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>
            </div>
        </section>
    )
}

export function SectionSobre() {
    return (
        <section id='sobre'>
            <div className='limitar-secao'>
                <h1>QUEM SOMOS NÓS?</h1>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                <div className='container-cards'>
                    <img className='card' src="/public/loja.png" alt="" />
                    <div className='card text'>
                        <h3>Nossas Filiais</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className='card text'>
                        <h3>Atendimento flexível</h3>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    <img className='card' src="/public/atendimento.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export function SectionContato() {
    return (
        <section id='contato'>
            <div className='limitar-secao'>
                <h2>Fale conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className='container-contatos'>
                    <div>
                        <h4>Contato</h4>
                        <figure>
                            <img src="/public/local.png" alt="" />
                            <figcaption>Nova Iguaçu, RJ</figcaption>
                        </figure>
                        <figure>
                            <img src="/public/telefone.png" alt="" />
                            <figcaption>(21) 9999-9999</figcaption>
                        </figure>
                        <figure>
                            <img src="/public/email.png" alt="" />
                            <figcaption>contato@oticavida.com</figcaption>
                        </figure>
                    </div>
                    <div>
                        <h4>Nossas Redes Sociais</h4>
                        <figure>
                            <img src="/public/fb.png" alt="" />
                            <figcaption>/OticaVida</figcaption>
                        </figure>
                        <figure>
                            <img src="/public/ig.png" alt="" />
                            <figcaption>@oticavidarj</figcaption>
                        </figure>
                        <figure>
                            <img src="/public/tt.png" alt="" />
                            <figcaption>@oticavidarj</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}