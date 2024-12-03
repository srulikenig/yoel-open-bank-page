const express = require('express');
const { poalim, poalimIski, mercantile, mercantileIski, mizrahi, pagi } = require('./open-bank-page');

const app = express();
app.use(express.json()); // מאפשר קריאת JSON מגוף הבקשה

const PORT = 3000;


// הגדרת נתיב להפעלת הפונקציה
app.get('/open-bank', async (req, res) => {
    const { userCode, password, bank, zheut } = req.query;

    if (!userCode || !password || !bank) {
        return res.status(400).send({ error: 'Missing required fields: userCode, password, bank' });
    }

    try {
        switch (bank) {
            case 'poalim':
                await poalim(userCode, password);
                break;
            case 'poalimIski':
                await poalimIski(userCode, password);
                break;
            case 'mercantile':
                await mercantile(userCode, password, zheut);
                break;
            case 'mercantileIski':
                await mercantileIski(userCode, password, zheut);
                break;
            case 'mizrahi':
                await mizrahi(userCode, password);
                break;
            case 'pagi':
                await pagi(userCode, password);
                break;
            default:
                break;
        }
        res.send({ success: true, message: 'Process completed successfully' });
    } catch (error) {
        console.error(error);
        res.status(400).send({ success: false, error: 'An error occurred while processing' });
    }
});


// הפעלת השרת
app.listen(PORT, () => {
    console.log(`API is running on http://localhost:${PORT}`);
});
