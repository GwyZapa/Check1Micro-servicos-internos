const repository = require("../repositories/departamento-repository")

//const validationContract = require('.../util/validator') //pra poder fazer a validação precisa criar um require dela

//role = "manager"
exports.get = async (req, res, next) => {
    try{
    const data = await repository.get();

    console.log('Data retrieved from DB: ', data);
    if (data == null)
        res.status(204).send()

    res.status(200).send(data);
    }catch (error) {
        console.error('Error in GET request:',error);
        res.status(500).send({
            message:"Erro no servidor, favor contactar o administrador."
        });
    }
}

//role = "manager, atendente", ex se tentar acessar o método get() receberia o erro 403 pq n tem o acesso liberado
exports.post = async (req, res, next) => {
    //let contract = new validationContract();
    console.log('Entrou no post')
    await repository.create(req.body)
    console.log('req.body: ', req.body);
    res.status(201).send("Criado com sucesso!")


}

exports.getById = async (req, res, next) => {
    const id = req.params.id;
    await repository.getById(id);

    if (data == null)
        res.status(404).send()
    res.status(200).send(data)

}

exports.update = async (req, res, next) => {

    //http://localhost:3000/produto/IDHASH
    const id = req.params.id; //Na rota daremos o apelido deste id
    await repository.update(id, res.body);

    //Enviar um e-mail que sofreu uma alteração 

    res.status(200).send("Atualizado com sucesso");
}

exports.delete = async (req, res, next) => {
    const id = req.params.id;
    await repository.delete(id);
    res.status(200).send("o item de id:  Deletado com sucesso!");
}