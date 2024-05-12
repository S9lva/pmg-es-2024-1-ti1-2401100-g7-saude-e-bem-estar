const armazenaDadosPac = () => {
    const dados = {
        historicoFamiliar: document.getElementById('historico_familiar').value,
        outraDoenca: document.getElementById('outra_doenca').value,
        condicaoAtual: document.getElementById('condicao_atual').value,
        outraCondicao: document.getElementById('outra_condicao').value,
        doencaPassada: document.getElementById('doenca_passada').value,
        outraDoencaPassada: document.getElementById('outra_doenca_passada').value,
        historicoAlergias: document.getElementById('historico_alergias').value,
        medicamentosAtuais: document.getElementById('medicamentos_atuais').value,
        habitos: document.querySelector('input[name="habitos"]:checked').value,
        atividadeFisica: document.querySelector('input[name="atividade_fisica"]:checked').value,
        restricaoAlimentar: document.getElementById('restricao_alimentar').value,
        preocupacoes: document.getElementById('preocupacoes').value,
        dataNascimento: document.getElementById('data_nascimento').value
    };

    // Armazena os dados no localStorage
    localStorage.setItem('dadosFormulario', JSON.stringify(dados));

    // Exibe uma mensagem de sucesso para o usuário
    const mensagemSucesso = document.createElement('div');
    mensagemSucesso.textContent = 'Seus dados foram cadastrados com sucesso!';
    mensagemSucesso.style.color = 'green';
    mensagemSucesso.style.marginTop = '10px';
    document.querySelector('.container').appendChild(mensagemSucesso);

    // Limpa o formulário após o cadastro
    document.querySelector('form').reset();

    // Define um tempo limite para a mensagem de sucesso desaparecer
    setTimeout(() => {
        mensagemSucesso.remove();
    }, 3000); // A mensagem desaparecerá após 3 segundos
};

const mostrarCampoOutro = (select, campoOutroId) => {
    const campoOutro = document.getElementById(campoOutroId);
    campoOutro.style.display = select.value === 'outra' ? 'block' : 'none';
};

// Oculta os campos de "Especifique a outra doença" e "Especifique a outra condição" inicialmente
document.getElementById('outra_doenca').style.display = 'none';
document.getElementById('outra_condicao').style.display = 'none';
document.getElementById('outra_doenca_passada').style.display = 'none';