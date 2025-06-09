function calcularDifalBaseUnica() {
  const valor = parseFloat(document.getElementById("valorNota").value);
  const aliqInter = parseFloat(document.getElementById("aliqInter").value);
  const aliqIntra = parseFloat(document.getElementById("aliqIntra").value);
  const fcpPercentual = parseFloat(document.getElementById("fcp").value);

  const resultado = document.getElementById("resultado");

  if (isNaN(valor) || isNaN(aliqInter) || isNaN(aliqIntra) || isNaN(fcpPercentual)) {
    Swal.fire({
      icon: 'warning',
      title: 'Campos obrigatórios',
      text: 'Preencha todos os campos antes de calcular.',
      confirmButtonText: 'OK'
    });
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
    Swal.fire({
      icon: 'warning',
      title: 'Campos obrigatórios',
      text: 'Preencha todos os campos antes de calcular.',
      confirmButtonText: 'OK'
    });
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
    Swal.fire({
      icon: 'warning',
      title: 'Campos obrigatórios',
      text: 'Preencha todos os campos antes de calcular.',
      confirmButtonText: 'OK'
    });
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
    Swal.fire({
      icon: 'warning',
      title: 'Campos obrigatórios',
      text: 'Preencha todos os campos antes de calcular.',
      confirmButtonText: 'OK'
    });
    return;
  }

  if (aliqIntra <= aliqInter) {
    Swal.fire({
      icon: 'error',
      title: 'Alíquota inválida',
      text: 'A alíquota interna deve ser maior que a interestadual.',
      confirmButtonText: 'Corrigir'
    });
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
    Swal.fire({
      icon: 'warning',
      title: 'Campos obrigatórios',
      text: 'Preencha todos os campos antes de calcular.',
      confirmButtonText: 'OK'
    });
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
    `Alíquota Interestadual (${aliqInter}%): R$ ${icmsOrigem.toFixed(2)}<br>` +
    `Base de Cálculo Ajustada: R$ ${base.toFixed(2)}<br>` +
    `DIFAL (${aliqIntra}% - ${aliqInter}%): R$ ${difal.toFixed(2)}<br>` +
    `FCP (${fcpPercentual}%): R$ ${fcp.toFixed(2)}<br>` +
    `<strong>Total a Recolher (DIFAL + FCP): R$ ${total.toFixed(2)}</strong>`;
}


function mostrarTabelaICMS() {
  Swal.fire({
    title: 'Alíquotas Internas de ICMS por Estado (2025)',
    html: `
      <div style="max-height:400px; overflow:auto; text-align:left">
        <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; width: 100%; font-size: 14px;">
          <thead style="background-color: #f2f2f2;">
            <tr>
              <th>Estado</th>
              <th>Alíquota Interna</th>
              <th>Observações</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Acre</td><td>19,00%</td><td>—</td></tr>
            <tr><td>Alagoas</td><td>20,00%</td><td>19% + 1% FECOEP</td></tr>
            <tr><td>Amapá</td><td>18,00%</td><td>—</td></tr>
            <tr><td>Amazonas</td><td>20,00%</td><td>—</td></tr>
            <tr><td>Bahia</td><td>20,50%</td><td>—</td></tr>
            <tr><td>Ceará</td><td>20,00%</td><td>—</td></tr>
            <tr><td>Distrito Federal</td><td>20,00%</td><td>—</td></tr>
            <tr><td>Espírito Santo</td><td>17,00%</td><td>—</td></tr>
            <tr><td>Goiás</td><td>19,00%</td><td>—</td></tr>
            <tr><td><strong>Maranhão</strong></td><td><strong>23,00%</strong></td><td>Lei nº 12.426/2024</td></tr>
            <tr><td>Mato Grosso</td><td>17,00%</td><td>—</td></tr>
            <tr><td>Mato Grosso do Sul</td><td>17,00%</td><td>—</td></tr>
            <tr><td>Minas Gerais</td><td>18,00%</td><td>—</td></tr>
            <tr><td>Pará</td><td>19,00%</td><td>—</td></tr>
            <tr><td>Paraíba</td><td>20,00%</td><td>—</td></tr>
            <tr><td>Paraná</td><td>19,50%</td><td>—</td></tr>
            <tr><td>Pernambuco</td><td>20,50%</td><td>—</td></tr>
            <tr><td><strong>Piauí</strong></td><td><strong>22,50%</strong></td><td>Lei nº 8.558/2024</td></tr>
            <tr><td>Rio de Janeiro</td><td>22,00%</td><td>20% + 2% FECP</td></tr>
            <tr><td><strong>Rio Grande do Norte</strong></td><td><strong>20,00%</strong></td><td>Lei nº 11.999/2024</td></tr>
            <tr><td>Rio Grande do Sul</td><td>17,00%</td><td>—</td></tr>
            <tr><td>Rondônia</td><td>19,50%</td><td>—</td></tr>
            <tr><td>Roraima</td><td>20,00%</td><td>—</td></tr>
            <tr><td>Santa Catarina</td><td>17,00%</td><td>—</td></tr>
            <tr><td>São Paulo</td><td>18,00%</td><td>—</td></tr>
            <tr><td>Sergipe</td><td>20,00%</td><td>19% + 1% FECOEP</td></tr>
            <tr><td>Tocantins</td><td>20,00%</td><td>—</td></tr>
          </tbody>
        </table>
      </div>
    `,
    width: 800,
    confirmButtonText: 'Fechar',
  });
}

function mostrarTabelaInterestadual() {
  Swal.fire({
    title: 'Tabela de Alíquotas Interestaduais (Origem x Destino)',
    html: `
      <div style="overflow: auto; max-height: 80vh;">
        <img src="/img/tabela-interestadual.JPG" 
             alt="Tabela Interestadual ICMS" 
             style="max-width: 100%; transition: transform 0.3s ease; cursor: zoom-in;"
             id="imgTabelaInterestadual"
             onclick="toggleZoomTabela()" />
      </div>
    `,
    width: 900,
    confirmButtonText: 'Fechar',
    didOpen: () => {
      window.toggleZoomTabela = function () {
        const img = document.getElementById('imgTabelaInterestadual');
        const isZoomed = img.style.transform === 'scale(2)';
        img.style.transform = isZoomed ? 'scale(1)' : 'scale(2)';
        img.style.cursor = isZoomed ? 'zoom-in' : 'zoom-out';
      };
    }
  });
}

function mostrarLinksGnre() {
  Swal.fire({
    title: 'Emissão de GNRE por Estado',
    html: `
      <div style="text-align: left; font-size: 15px;">
        <p><strong>ES:</strong> <a href="https://internet.sefaz.es.gov.br/agenciavirtual/area_publica/e-dua/icms.php" target="_blank">https://internet.sefaz.es.gov.br</a> <strong>(Código 386-7) </strong></p> 
        <p><strong>SP:</strong> <a href="https://www4.fazenda.sp.gov.br/DareICMS/DareAvulso" target="_blank">https://www4.fazenda.sp.gov.br</a> <strong> (Código 10101) </strong></p>
        <p><strong>Demais estados:</strong> <a href="https://www.gnre.pe.gov.br:444/gnre/v/guia/index" target="_blank">https://www.gnre.pe.gov.br</a> <strong>(Código 100102)</strong></p>
      </div>
    `,
    width: 600,
    confirmButtonText: 'Fechar',
  });
}
function mostrarDiagramaVendasInterEstaduais() {
  Swal.fire({
    title: 'Diagrama - Vendas Interestaduais (Base Única ou Dupla?)',
    html: `
      <div style="overflow: auto; max-height: 80vh;">
        <img src="/img/DiagramaVendasInterEstaduais.PNG" 
             alt="Diagrama DIFAL" 
             style="max-width: 100%; transition: transform 0.3s ease; cursor: zoom-in;" 
             id="imgDiagramaDifal" 
             onclick="toggleZoomDiagrama()" />
      </div>
    `,
    width: 900,
    confirmButtonText: 'Fechar',
    didOpen: () => {
      window.toggleZoomDiagrama = function () {
        const img = document.getElementById('imgDiagramaDifal');
        const isZoomed = img.style.transform === 'scale(2)';
        img.style.transform = isZoomed ? 'scale(1)' : 'scale(2)';
        img.style.cursor = isZoomed ? 'zoom-in' : 'zoom-out';
      };
    }
  });
}
