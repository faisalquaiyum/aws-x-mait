import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatbotRoutes from './routes/chatbotRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(
  cors({
    //  origin: 'http://localhost:5173', // Replace with your frontend URL
    origin: "https://aws-x-mait.vercel.app/",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
); 

// Use chatbot routes
app.use("/api", chatbotRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});