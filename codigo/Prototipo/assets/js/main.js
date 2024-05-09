/*funcionalidade do carrosel*/
const myCarousel = document.querySelector('#carouselExampleDark')

const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  touch: false
})

const nomeInput = document.getElementById("nome");
const crmInput = document.getElementById("crm");
const especialidadeInput = document.getElementById("especialidade");
const telefoneInput = document.getElementById("telefone");
const emailInput = document.getElementById("email");
const datanascimentoInput = document.getElementById("data_nascimento");

function armazenaDados() {

  let departamento = new Object();
  departamento.id = obterID();
  departamento.nome = nomeInput.value.trim();
  departamento.crm = crmInput.value.trim();
  departamento.especialidade = especialidadeInput.value.trim();
  departamento.telefone = telefoneInput.value.trim();
  departamento.email = especialidadeInput.value.trim();
  departamento.data_nascimento = datanascimentoInput.value;


  let departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];
  departamentos.push(departamento);  
  localStorage.setItem("departamentos", JSON.stringify(departamentos));

  form.reset(); // Limpa o Formulário
  window.location.href = "index.html"; // Redireciona (Volta) para página inicial
}
/**
 * Função para obter um identificador único (ID) à partir do armazenamento local (localStorage) do navegador.
 * A função lê o último ID armazenado no localStorage, incrementa-o em 1 e, em seguida,
 * armazena o novo ID de volta no localStorage para uso futuro.
 @returns {number} um identificador único no formato de número inteiro.
 */

function obterID() {
  
  let id = parseInt(localStorage.getItem("id")) || 0;
  id += 1;
  localStorage.setItem("id", id);

  return id;
}