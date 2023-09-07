const mongoose = require('mongoose')
const Pessoas = mongoose.model('Pessoas') //pega o objeto da Model

exports.get = async () => { //pega todas colecoes ativas da base
    const result = await Pessoas.find({active:true}) //aguarda o banco responder
    return result;
}

exports.create = async(data) => {
    let pessoas = Pessoas(data) //recebe o json e cria o modelo
    await pessoas.save();
}

exports.delete = async (id) => {
    await Pessoas.findByIdAndUpdate(
        id, {
            $set: {
                active: false
            }
        }
    )
}

exports.getById = async (id) => {
    const result = await Pessoas.findOne({_id: id},
        "_id nome documento endereco telefone active"
    );

    return result;
}


exports.update = async (id, data) => {
    await Pessoas.findByIdAndUpdate(id, {
        $set: {
            nome: data.nome,
            documento: data.documento,
            endereco:data.endereco,
            telefone:data.telefone,
            active: data.active

        }
    })
}