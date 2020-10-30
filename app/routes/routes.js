module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('page')
    })
    app.post('/marcar', function(req, res) {

        const dados = req.body

        console.log(dados)

        res.redirect('https://api.whatsapp.com/send?phone=5567992943882&text=Olá me chamo '+ dados.nome +', encontrei seu numero na internet e gostaria de marcar um horario para fazer '+ dados.servico)
    })
}