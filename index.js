const customExpress = require('./config/customExpress');
const conexao = require('./infra/conexao');
const Tabelas = require('./infra/tabelas');

conexao.connect((erro) => {
    if(erro){
        console.log(erro)
    } else {
        Tabelas.init(conexao);

        app.listen(3000, () => {
            console.log('Server running on port 3000')
        });
    }
});
const app = customExpress();


