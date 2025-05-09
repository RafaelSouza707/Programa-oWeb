const itens = ["Guarabira", "Belém", "Sapé"];

const html = `<ol>
  ${itens.map(item => `<li>${item}</li>`).join('')}
</ol>`;

console.log(html);
