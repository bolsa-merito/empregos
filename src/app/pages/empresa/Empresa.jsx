import { Link } from "react-router";
import CardEstudante from "../../components/estudante/CardEstudantes";
import { ButtonPrimary } from "../../components/common/Buttons";
import { InputText } from "../../components/common/Inputs";

function CardEstudanteView() {
    return (
        <CardEstudante>
            <CardEstudante.Banner/>
            <div style={{padding: 16}}>
                <CardEstudante.Nome/>
                <CardEstudante.CompactDescription/>
            </div>
        </CardEstudante>
    )
}

export const Empresa = () => {
    return (
        <div>
            <Link to={'/'}>&lt;</Link>
            <div>Empresa</div>
            <div style={{display: "flex", flexDirection: "column", gap: 8}}>  
                <CardEstudanteView/>
            </div>
            {/* Testando os componentes */}
            <ButtonPrimary>
                <p>Salvar</p>
            </ButtonPrimary>
            <InputText textLabel={"Nome"} placeholderText={"Digite seu nome"}/>
        </div>
    )
}
