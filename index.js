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

app.get('/test', (req, res) => {
    //send response html element
    res.send(`<!DOCTYPE html>
<html lang="he">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>התקנה הושלמה</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f4f4f9; color: #333; margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; }
        .container { text-align: center; background: #fff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 20px 40px; max-width: 400px; }
        h1 { color: #4CAF50; font-size: 2rem; margin-bottom: 20px; }
        p { font-size: 1rem; margin-bottom: 20px; }
    </style>
</head>
<body>
    <div class="container" dir="rtl">
        <h1>התקנה הושלמה בהצלחה!</h1>
        <p>תודה שהתקנת את המערכת שלנו.</p>
        <p>עכשיו נשאר רק להוסיף את המאקרו לאקסל.</p>
    </div>
</body>
</html>
`);
});

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`API is running on http://localhost:${PORT}`);
});
