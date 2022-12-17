import styles from './Screen.module.css'

function Screen({ valorCima, valorBaixo }){
    return(        
        <div id={styles.mostrador}>
            <div id={styles.cima}>
                {valorCima}
            </div>
            <div id={styles.baixo}>
                <div id={styles.baixoEsquerda}>
                    
                </div>
                <div id={styles.baixoDireita}>
                    {valorBaixo}
                </div>
            </div>
        </div>
    )
}

export default Screen