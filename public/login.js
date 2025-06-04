document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagemLogin");

  mensagem.innerText = ""; // Limpa mensagens anteriores

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, senha })
    });

    const data = await response.json();

    if (response.ok) {
      mensagem.style.color = "green";
      mensagem.innerText = "Login bem-sucedido!";
      
      setTimeout(() => {
        window.location.href = "/calculo.html";
      }, 1000);
    } else {
      mensagem.style.color = "red";
      mensagem.innerText = data.message || "Erro no login.";
    }

  } catch (err) {
    mensagem.style.color = "red";
    mensagem.innerText = "Erro ao conectar com o servidor.";
    console.error("Erro na requisição:", err);
  }
});

// Mostrar/ocultar senha
const toggleSenha = document.getElementById("toggleSenha");
const campoSenha = document.getElementById("senha");

if (toggleSenha && campoSenha) {
  toggleSenha.addEventListener("click", () => {
    const visivel = campoSenha.type === "text";
    campoSenha.type = visivel ? "password" : "text";

    toggleSenha.classList.toggle("fa-eye", visivel);
    toggleSenha.classList.toggle("fa-eye-slash", !visivel);
  });
}
