import styles from './Calculator.module.css'
import Screen from './Screen'
import Button from './Button'
import {useState} from 'react'
import { MdOutlineBackspace } from 'react-icons/md';

function Calculator(){
    
    const [valorCima, setValorCima] = useState()
    const  [valorBaixo, setValorBaixo] = useState("0")
    const [conta, setConta] = useState("0")

    function alterarValorDisplay(umValor){
        if (valorBaixo === "0"){
            if(umValor !== "corrigir" && umValor !== "limpar" && umValor !== "limpar tudo")
            setValorBaixo(umValor)
            setConta(umValor)
        }
        else if (umValor === "limpar"){
            setValorBaixo("0")
            setConta("0")
        }
        else if (umValor === "corrigir"){
            setValorBaixo(valorBaixo.substring(0, valorBaixo.length - 1))
            setConta(conta.substring(0, conta.length - 1))
        }
        else if (umValor === "limpar tudo"){
            setConta("0")
            setValorBaixo("0")
            setValorCima()
        }
        else if (umValor === "x"){
            setValorBaixo(valorBaixo+"x")
            setConta(conta+"*")
        }
        else if (umValor === "%"){
            setValorBaixo(valorBaixo+"%")
            setConta(conta+"/100*")
        }
        
        else{
            setValorBaixo(valorBaixo+umValor)
            setConta(conta+umValor)
        }
    }

    function calcular(){
        setValorCima(valorBaixo)
        console.log(conta)
        let resultado = eval(conta)
        setValorBaixo(resultado)
        setConta(resultado)
    }

    return (
        <section id={styles.areaCalculadora}>
            <div id={styles.calculadora}>
                <Screen valorCima={valorCima} valorBaixo={valorBaixo}/>
                <div id={styles.areaBotoes}>
                    <Button valor='C' action={() => {alterarValorDisplay("limpar")}}/>
                    <Button valor='CE' action={() => {alterarValorDisplay("limpar tudo")}}/>
                    <Button valor='%' action={() => {alterarValorDisplay("%")}}/>
                    <Button valor='/' action={() => {alterarValorDisplay("/")}}/>
                    <Button valor='7' action={() => {alterarValorDisplay("7")}}/>
                    <Button valor='8' action={() => {alterarValorDisplay("8")}}/>
                    <Button valor='9' action={() => {alterarValorDisplay("9")}}/>
                    <Button valor='x' action={() => {alterarValorDisplay("x")}}/>
                    <Button valor='4' action={() => {alterarValorDisplay("4")}}/>
                    <Button valor='5' action={() => {alterarValorDisplay("5")}}/>
                    <Button valor='6' action={() => {alterarValorDisplay("6")}}/>
                    <Button valor='-' action={() => {alterarValorDisplay("-")}}/>
                    <Button valor='1' action={() => {alterarValorDisplay("1")}}/>
                    <Button valor='2' action={() => {alterarValorDisplay("2")}}/>
                    <Button valor='3' action={() => {alterarValorDisplay("3")}}/>
                    <Button valor='+' action={() => {alterarValorDisplay("+")}}/>
                    <Button valor='.' action={() => {alterarValorDisplay(".")}}/>
                    <Button valor='0' action={() => {alterarValorDisplay("0")}}/>
                    <Button valor={<MdOutlineBackspace />} action={() => {alterarValorDisplay("corrigir")}}/>
                    <Button valor='=' action={() => {calcular()}}/>
                </div>
            </div>
        </section>
    );
}

export default Calculator;