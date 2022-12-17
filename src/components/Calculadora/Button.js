import styles from './Button.module.css'

function Button({ valor, action }){
    return (
        <button onClick={action}>
            <p>{valor}</p>
        </button>
    );
}

export default Button;