import styles from "../../../styles/input.module.css"

function Cursos() {
    return (
        <div>
            <div>
                <h1>Área de Estudo</h1>
                {/* TODO recber os dados da api */}
                <div>
                    <div className={styles.inputRadio}>
                        <input type="radio" name="area" id="todos-os-cursos" value={"todos-os-cursos"}/>
                        <label htmlFor="todos-os-cursos">Todos os cursos</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input type="radio" name="area" id="enfermagem" value={"enfermagem"}/>
                        <label htmlFor="enfermagem">Enfermagem</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input type="radio" name="area" id="administração" value={"administração"}/>
                        <label htmlFor="administração">Administração</label>
                    </div>
                </div>
            </div>
            <div>
                <h1>Area selecionada acima</h1>
            </div>
        </div>
    )
}

export default Cursos;