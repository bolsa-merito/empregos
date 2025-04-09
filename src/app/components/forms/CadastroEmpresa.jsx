import { ButtonPrimary } from "../common/Buttons"
import { InputText } from "../common/Inputs"

function CadastroEmpresa() {
    return (
        <div>
            <h1>Cadastro empresa</h1>
            <form action="">
                <InputText textLabel={"Seu melhor email"} placeholderText={"exemplo@exemplo.com"}/>
                <InputText textLabel={"Senha"} placeholderText={"Digite sua senha"}/>
                <InputText textLabel={"Repita sua senha"} placeholderText={"Repita a sua senha"}/>
            </form>
            <ButtonPrimary>
                <p>Salvar</p>
            </ButtonPrimary>
        </div>
    )
}

export {CadastroEmpresa}