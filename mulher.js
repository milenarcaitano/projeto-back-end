const express = require ("express")
const router = express.Router()

const app = express ()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome:'Milena Rocha',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQE2GC0JlnK4UA/profile-displayphoto-shrink_800_800/0/1674867152717?e=1687392000&v=beta&t=KAM_cfwlJvllnXslBfqxyw3sIqO05i5Yjzql9LYif_Y',
        minibio: 'Graduação em análise e desenvolvimento de sistemas,CTFL (Certified Tester Foundation Level), que me possibilitou medir e aprovar meus conhecimentos técnicos.'
    })
}

function mostraPorta () {
    console.log ("Servidor criado e rodando na porta ", porta);
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)



