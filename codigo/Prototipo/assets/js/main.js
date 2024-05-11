/*funcionalidade do carrosel
const myCarousel = document.querySelector('#carouselExampleDark')

const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  touch: false
})
//Fim funcionalidade carrosel
*/
// Funcionalidade de armazenar dados
const nomeInput = document.getElementById("nome");
const crmInput = document.getElementById("crm");
const especialidadeInput = document.getElementById("especialidade");
const telefoneInput = document.getElementById("telefone");
const emailInput = document.getElementById("email");
const datanascimentoInput = document.getElementById("data_nascimento");
const senhaInput = document.getElementById("senha");
const form = document.querySelector("form");

function armazenaDados() {

  let departamento = new Object();
  departamento.id = obterID();
  departamento.nome = nomeInput.value.trim();
  departamento.crm = crmInput.value.trim();
  departamento.especialidade = especialidadeInput.value.trim();
  departamento.telefone = telefoneInput.value.trim();
  departamento.email = emailInput.value.trim();
  departamento.senha = senhaInput.value.trim();
  departamento.data_nascimento = datanascimentoInput.value;
  
  let departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];
  departamentos.push(departamento);  
  localStorage.setItem("departamentos", JSON.stringify(departamentos));

  form.reset(); 
  window.location.href = "Login_Med.html";
  alert("Cadastro bem-sucedido!");
}
/**
 @returns {number}
 */

function obterID() {
  
  let id = parseInt(localStorage.getItem("id")) || 0;
  id += 1;
  localStorage.setItem("id", id);

  return id;
}
// Fim funcionalidade de armazenar dados

// Funcionalidade de login 
function Login() {
  const email = emailInput.value.trim();
  const password = senhaInput.value.trim();

  const departamentos = JSON.parse(localStorage.getItem("departamentos")) || [];

  const foundDepartment = departamentos.find(departamento => departamento.email === email && departamento.senha === password);

  if (foundDepartment) {
      window.location.href = "Perfil_Med.html";
      alert("Login bem-sucedido!");
  } else {
      alert("E-mail ou senha incorretos. Por favor, tente novamente.");
      console.log('load')
  }
}

// Fim funcionalidade de login 

