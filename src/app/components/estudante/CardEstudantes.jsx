import styles from '../../styles/cardEstudanteStyle.module.css';

export default function CardEstudante({children}){
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

function Banner() {
    return (
        <div className={styles.banner}>
            <img  src="https://s4.static.brasilescola.uol.com.br/be/2023/08/dia-do-estudante.jpg" alt="banner estudante" />
        </div>
    )
}

function Nome() {
    return (
        <h2 className={styles.nomeEstudante} style={{fontSize: 16}}>Nome</h2>
    )
}

function Descricao() {
    return (
        <div>
            <div className={styles.descricao}>Descrição Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, expedita.</div>
        </div>
    )
}

function ButtonMostrarMais() {
    return (
        <button>
            Ver mais
        </button>
    )
}

function CompactDescription() {
    return (
        <div className={styles.compactDescription}>
            <Descricao/>
            <div>
                <ButtonMostrarMais/>
            </div>
        </div>
    )
}

CardEstudante.Nome = Nome;
CardEstudante.Banner = Banner;
CardEstudante.Descricao = Descricao;
CardEstudante.ButtonMostrarMais = ButtonMostrarMais;
CardEstudante.CompactDescription = CompactDescription;