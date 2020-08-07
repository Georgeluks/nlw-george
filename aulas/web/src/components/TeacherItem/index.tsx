import React from 'react';

import whatsIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://pbs.twimg.com/profile_images/1102366016359878656/Krw1ApwQ.png" alt="Olavete"/>
                    <div>
                        <strong>Prof. Olavo de Carvalho</strong>
                        <span>Filosofia</span>
                    </div>
                </header>

            <p>
                Olavo Luiz Pimentel de Carvalho é um ensaísta brasileiro, influenciador digital e ideólogo que foi jornalista e astrólogo. Autoproclamado filósofo, é um representante do conservadorismo no Brasil.
            </p>

            <footer>
                <p>Preco/Hora
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsIcon} alt="WhatsApp"/>
                        Entrar em Contato.
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;