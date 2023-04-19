const express = require ("express")
const router = express.Router()

const app = express ()
const porta = 3333

const mulheres = [
   {
        nome:'Milena Rocha',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQE2GC0JlnK4UA/profile-displayphoto-shrink_800_800/0/1674867152717?e=1687392000&v=beta&t=KAM_cfwlJvllnXslBfqxyw3sIqO05i5Yjzql9LYif_Y',
        minibio: 'Graduação em análise e desenvolvimento de sistemas,CTFL (Certified Tester Foundation Level)'
   },
   {
        nome: 'Iana Chan',
        imagem:'https://img.freepik.com/fotos-gratis/mulher-de-negocios-elegante-e-confiante-sorrindo_176420-19466.jpg',
        minibio: 'fundadora da programaria'
   },
   {
        nome: 'Nina da Hora',
        imagem: 'https://diariodocomercio.com.br/wp-content/uploads/2020/03/mulheres-profissionas0303.jpg',
        minibio:'hacker antirracistas'
   }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}


function mostraPorta () {
    console.log ("Servidor criado e rodando na porta ", porta);
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)