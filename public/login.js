document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ usuario, senha })
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Login realizado com sucesso!",
          showConfirmButton: false,
          timer: 1500
        });

        setTimeout(() => {
          window.location.href = "/calculo.html";
        }, 1600);
      } else {
        Swal.fire({
          icon: "error",
          title: "Erro",
          text: data.message || "Usuário ou senha incorretos."
        });
      }

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Erro de conexão",
        text: "Não foi possível conectar ao servidor."
      });
      console.error("Erro na requisição:", err);
    }
  });

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
});
