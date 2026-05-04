import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001; // Usaremos a 3001 para não conflitar com o Next.js (3000)

app.use(cors());
app.use(express.json());

const produtos = [
  {
    id: 1,
    nome: "Photocard Personalizado",
    preco: "Sob consulta",
    imagem: "https://via.placeholder.com/150"
  }
];

app.get('/api/produtos', (req, res) => {
  res.json(produtos);
});

app.listen(port, () => {
  console.log(`🚀 Server rodando em http://localhost:${port}`);
});