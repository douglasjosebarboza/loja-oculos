import { SectionCapa, SectionContato, SectionProdutos, SectionSobre } from '../sections'
import './style.css'

export default function Main() {
    return (
        <main>
            <SectionCapa />
            <SectionProdutos />
            <SectionSobre />
            <SectionContato />
        </main>
    )
}