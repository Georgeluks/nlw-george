import React from 'react';
import PageHeader from '../../components/PageHeader';

import whatsIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses sao os proffys disponives.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Materia</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Horario</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
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
            </main>
        </div>
    )
}

export default TeacherList;