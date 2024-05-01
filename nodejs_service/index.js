const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const apiPort = 6002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World! - from nodejs count letters service!!');
})

app.post('/api/countletters', (req, res) => {
    function stringLength(str) {
        let s = String(str);
        return s.length;
    }
    console.log(req.body.inputString);
    let result = stringLength(req.body.inputString);
    return res.status(200).json({
        success: true,
        value: `${result}`
    });
});

app.post('/api/repeat', (req, res) => {
    function stringLength(str) {
        let out = '';
        let c = '';
        for (let char of str) {

          if (/[0-9]/.zztest(char)) {
            console.log(char);
            while (char--) {
                out+=c;    
            }
          }
          else
            c = char;
        }
        console.log(out); 

        return out ;
    }
    
    console.log(req.body.inputString);
    let result = stringLength(req.body.inputString);
    return res.status(200).json({
        success: true,
        value: `${result}`
    });
});



app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));



