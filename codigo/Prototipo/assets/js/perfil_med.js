const nomeh1 = document.querySelector("#name_perfil");
const idadeh4 = document.querySelector("#idade_perfil");
const emailh4 = document.querySelector("#email_perfil");
const telefoneh4 = document.querySelector("#telefone_perfil");
//const ceph4 = document.querySelector("#cep_perfil"); // Adicionado elemento para exibir o CEP
const expecializacaoh4 = document.querySelector("#expecializacao_perfil");

function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const dataNasc = new Date(dataNascimento);
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mes = hoje.getMonth() - dataNasc.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
        idade--;
    }
    return idade;
}

function exibirDetalhesDepartamento() {
    const id = sessionStorage.getItem("idDepartamento");
    
    if (id !== null) {
        let departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];
        let departamento = departamentos.find((d) => { return d.id == id; } );

        if (departamento) {
            nomeh1.innerText = departamento.nome;
            idadeh4.innerText = `Idade: ${calcularIdade(departamento.data_nascimento)}`;
            emailh4.innerText = `Email: ${departamento.email}`;
            telefoneh4.innerText = `Telefone: ${departamento.telefone}`;
            //ceph4.innerText = departamento.cep;
            expecializacaoh4.innerText = `Especialização: ${departamento.especialidade}`;
        } else {
            console.error("Departamento não encontrado para o ID:", id);
        }
    } else {
        console.error("ID de departamento do usuário não definido no localStorage. O usuário deve fazer login primeiro.");
    }
}

window.addEventListener("load", () => {
    exibirDetalhesDepartamento();
});