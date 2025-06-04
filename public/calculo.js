function calcularDifalBaseUnica() {
    const valor = parseFloat(document.getElementById("valorNota").value);
    const aliqInter = parseFloat(document.getElementById("aliqInter").value);
    const aliqIntra = parseFloat(document.getElementById("aliqIntra").value);
    const fcpPercentual = parseFloat(document.getElementById("fcp").value);
  
    const resultado = document.getElementById("resultado");
  
    if (isNaN(valor) || isNaN(aliqInter) || isNaN(aliqIntra) || isNaN(fcpPercentual)) {
      resultado.innerText = "Preencha todos os campos.";
      return;
    }
  
    const icmsDestino = valor * (aliqIntra / 100);
    const icmsOrigem = valor * (aliqInter / 100);
    const difal = icmsDestino - icmsOrigem;
    const fcp = valor * (fcpPercentual / 100);
    const total = difal + fcp;
  
    resultado.innerHTML =
      `ICMS Destino: R$ ${icmsDestino.toFixed(2)}<br>` +
      `ICMS Origem: R$ ${icmsOrigem.toFixed(2)}<br>` +
      `DIFAL: R$ ${difal.toFixed(2)}<br>` +
      `FCP: R$ ${fcp.toFixed(2)}<br>` +
      `<strong>Total a Recolher (DIFAL + FCP): R$ ${total.toFixed(2)}</strong>`;
  }
  
  function calcularDifalBaseDupla() {
    const valorNota = parseFloat(document.getElementById("valorNotaDupla").value);
    const aliqInter = parseFloat(document.getElementById("aliqInterDupla").value);
    const aliqIntra = parseFloat(document.getElementById("aliqIntraDupla").value);
    const fcpPercentual = parseFloat(document.getElementById("fcpDupla").value);
  
    const resultado = document.getElementById("resultadoDupla");
  
    if (
      isNaN(valorNota) ||
      isNaN(aliqInter) ||
      isNaN(aliqIntra) ||
      isNaN(fcpPercentual)
    ) {
      resultado.innerText = "Preencha todos os campos.";
      return;
    }
  
    const icmsOrigem = valorNota * (aliqInter / 100);
    const divisor = 1 - (aliqIntra / 100); 
    const base = (valorNota - icmsOrigem) / divisor;
  
    const icmsDestino = base * (aliqIntra / 100);
    const fcp = base * (fcpPercentual / 100);
    const difal = icmsDestino - icmsOrigem;
    const total = difal + fcp;
  
    resultado.innerHTML =
      `Valor da Nota Fiscal: R$ ${valorNota.toFixed(2)}<br>` +
      `Alíquota Interestadual (${aliqInter}%): R$ ${icmsOrigem.toFixed(2)}<br>` +
      `Base de Cálculo: R$ ${base.toFixed(2)}<br>` +
      `ICMS Destino (${aliqIntra}%): R$ ${icmsDestino.toFixed(2)}<br>` +
      `FCP (${fcpPercentual}%): R$ ${fcp.toFixed(2)}<br>` +
      `DIFAL: R$ ${difal.toFixed(2)}<br>` +
      `<strong>Total a Recolher (DIFAL + FCP): R$ ${total.toFixed(2)}</strong>`;
  }

function calcularDifalBaseDuplaAL_GO_SC() {
  const valorNota = parseFloat(document.getElementById("valorNotaEspecial").value);
  const aliqInter = parseFloat(document.getElementById("aliqInterEspecial").value);
  const aliqIntra = parseFloat(document.getElementById("aliqIntraEspecial").value);
  const fcpPercentual = parseFloat(document.getElementById("fcpEspecial").value);

  const resultado = document.getElementById("resultadoEspecial");

  if (
    isNaN(valorNota) ||
    isNaN(aliqInter) ||
    isNaN(aliqIntra) ||
    isNaN(fcpPercentual)
  ) {
    resultado.innerText = "Preencha todos os campos.";
    return;
  }

  const divisor = 1 - (aliqIntra / 100);
  const base = valorNota / divisor;

  const difal = base * ((aliqIntra - aliqInter) / 100);
  const fcp = base * (fcpPercentual / 100);
  const total = difal + fcp;

  resultado.innerHTML =
    `Valor da Nota Fiscal: R$ ${valorNota.toFixed(2)}<br>` +
    `Base de Cálculo: R$ ${base.toFixed(2)}<br>` +
    `DIFAL (${aliqIntra}% - ${aliqInter}%): R$ ${difal.toFixed(2)}<br>` +
    `FCP (${fcpPercentual}%): R$ ${fcp.toFixed(2)}<br>` +
    `<strong>Total a Recolher: R$ ${total.toFixed(2)}</strong>`;
}

function calcularDifalBaseDuplaSE() {
  const valorNota = parseFloat(document.getElementById("valorNotaSE").value);
  const aliqInter = parseFloat(document.getElementById("aliqInterSE").value);
  const aliqIntra = parseFloat(document.getElementById("aliqIntraSE").value);
  const fcpPercentual = parseFloat(document.getElementById("fcpSE").value);

  const resultado = document.getElementById("resultadoSE");

  if (
    isNaN(valorNota) ||
    isNaN(aliqInter) ||
    isNaN(aliqIntra) ||
    isNaN(fcpPercentual)
  ) {
    resultado.innerText = "Preencha todos os campos.";
    return;
  }

  if (aliqIntra <= aliqInter) {
    resultado.innerText = "A alíquota interna deve ser maior que a interestadual.";
    return;
  }

  const diferencaAliq = aliqIntra - aliqInter;
  const divisor = 1 - (diferencaAliq / 100);
  const base = valorNota / divisor;

  const difal = base * (diferencaAliq / 100);
  const fcp = base * (fcpPercentual / 100);
  const total = difal + fcp;

  resultado.innerHTML =
    `Valor da Nota Fiscal: R$ ${valorNota.toFixed(2)}<br>` +
    `Base de Cálculo Ajustada: R$ ${base.toFixed(2)}<br>` +
    `DIFAL (${aliqIntra}% - ${aliqInter}%): R$ ${difal.toFixed(2)}<br>` +
    `FCP (${fcpPercentual}%): R$ ${fcp.toFixed(2)}<br>` +
    `<strong>Total a Recolher (DIFAL + FCP): R$ ${total.toFixed(2)}</strong>`;
}

function calcularDifalBaseDuplaAM_PB_PE() {
  const valorNota = parseFloat(document.getElementById("valorNotaAM").value);
  const aliqInter = parseFloat(document.getElementById("aliqInterAM").value);
  const aliqIntra = parseFloat(document.getElementById("aliqIntraAM").value);
  const fcpPercentual = parseFloat(document.getElementById("fcpAM").value);

  const resultado = document.getElementById("resultadoAM");

  if (
    isNaN(valorNota) ||
    isNaN(aliqInter) ||
    isNaN(aliqIntra) ||
    isNaN(fcpPercentual)
  ) {
    resultado.innerText = "Preencha todos os campos.";
    return;
  }

  const icmsOrigem = valorNota * (aliqInter / 100);
  const divisor = 1 - (aliqIntra / 100);
  const base = (valorNota - icmsOrigem) / divisor;

  const diferencaAliq = aliqIntra - aliqInter;
  const difal = base * (diferencaAliq / 100);
  const fcp = base * (fcpPercentual / 100);
  const total = difal + fcp;

  resultado.innerHTML =
    `Valor da Nota Fiscal: R$ ${valorNota.toFixed(2)}<br>` +
    `Alíquotal Interestadual (${aliqInter}%): R$ ${icmsOrigem.toFixed(2)}<br>` +
    `Base de Cálculo Ajustada: R$ ${base.toFixed(2)}<br>` +
    `DIFAL (${aliqIntra}% - ${aliqInter}%): R$ ${difal.toFixed(2)}<br>` +
    `FCP (${fcpPercentual}%): R$ ${fcp.toFixed(2)}<br>` +
    `<strong>Total a Recolher (DIFAL + FCP): R$ ${total.toFixed(2)}</strong>`;
}