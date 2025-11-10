const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

// Criando a conexão com o banco de dados
const sequelize = new Sequelize('db_atvd_pontuada', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Definindo o modelo Contato
const Contato = sequelize.define('Contato', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mensagem: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

// Rota de teste
app.get('/', (req, res) => {
    res.send('API da Farmácia está funcionando! 🚀');
});

// Rota para criar um novo contato
app.post('/contatos', async (req, res) => {
    try {
        const { nome, email, telefone, mensagem } = req.body;
        const novoContato = await Contato.create({ nome, email, telefone, mensagem });
        res.status(201).json(novoContato);
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return res.status(409).json({
                message: 'Erro de validação: ' +
                    error.errors.map(e => e.message).join(', ')
            });
        }
        res.status(500).json({ message: 'Erro ao criar contato.' });
    }
});

// Rota para listar todos os contatos
app.get('/contatos', async (req, res) => {
    try {
        const contatos = await Contato.findAll();
        res.json(contatos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar contatos.' });
    }
});

// Sincroniza com o banco e inicia o servidor
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`🚀 API rodando em http://localhost:${port}`);
        console.log('✅ Conectado ao banco de dados MySQL.');
    });
}).catch(err => {
    console.error('❌ Erro ao conectar ao banco de dados:', err);
});
