const mongoose = require('mongoose')
const Departamento = mongoose.model('Departamento') //pega o objeto da Model

exports.get = async () => { //pega todas colecoes ativas da base
    const result = await Departamento.find({active:true}) //aguarda o banco responder
    return result;
}

exports.create = async(data) => {
    let departamento = Departamento(data) //recebe o json e cria o modelo
    await departamento.save();
}

exports.delete = async (id) => {
    await Departamento.findByIdAndUpdate(
        id, {
            $set: {
                active: false
            }
        }
    )
}

exports.getById = async (id) => {
    const result = await Departamento.findOne({_id: id},
        "_id codigo nome setor active"
    );

    return result;
}


exports.update = async (id, data) => {
    await Departamento.findByIdAndUpdate(id, {
        $set: {
            codigo: data.codigo,
            nome: data.nome,
            setor: data.setor,
            active: data.active

        }
    })
}