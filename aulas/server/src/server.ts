import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());


//GET: Buscar ou listar uma informacao
//POST: Criar alguma nova informacao
//PUT: Atualizar alguma informacao
//DELETE: Deletar uma informacao existente

//Corpo (request body): Dados para criacao ou atualizacao de registro
//Route params: identificar qual recurso eu quero atualizar ou deletar
//Query params: paginacao, filtros, ordenacao



app.listen(3333);