import express from 'express';
import cors from 'cors';
import carroRoutes from './routes/carroRoutes.js';
import funcionarioRoutes from './routes/funcionarioRoutes.js';
import combustivelRoutes from './routes/combustivelRoutes.js';
import manutencaoRoutes from './routes/manutencaoRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/carros', carroRoutes);
app.use('/funcionarios', funcionarioRoutes);
app.use('/combustivel', combustivelRoutes);
app.use('/manutencao', manutencaoRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
