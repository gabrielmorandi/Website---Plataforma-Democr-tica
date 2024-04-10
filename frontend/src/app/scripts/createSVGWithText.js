const createSVGWithText = async (text) => {
  try {
    // Carregar o conteúdo do arquivo SVG
    const response = await fetch('Template.svg');
    const svgContent = await response.text();

    // Crie um elemento SVG a partir do conteúdo do arquivo SVG
    const parser = new DOMParser();
    const svgDocument = parser.parseFromString(svgContent, "image/svg+xml");
    const svg = svgDocument.documentElement;

    // Crie um elemento de texto
    const svgText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    svgText.setAttribute("x", "50");
    svgText.setAttribute("y", "50");
    svgText.setAttribute("font-family", "Arial");
    svgText.setAttribute("font-size", "32");
    svgText.setAttribute("fill", "black");

    // Define o texto do elemento de texto
    svgText.textContent = text;

    // Adicione o elemento de texto ao SVG
    svg.appendChild(svgText);

    // Converte o SVG em uma string XML
    const svgString = new XMLSerializer().serializeToString(svg);

    // Codifica a string SVG em base64
    const svgBase64 = btoa(svgString);

    // Cria um blob com a string SVG codificada em base64
    const blob = new Blob([svgString], { type: 'image/svg+xml' });

    // Cria um URL para o blob
    const url = URL.createObjectURL(blob);

    return url;
  } catch (error) {
    console.error('Erro ao criar SVG com texto:', error);
    throw error;
  }
};

export default createSVGWithText;
