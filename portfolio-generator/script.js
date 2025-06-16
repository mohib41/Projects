function generatePortfolio() {
  const input = document.getElementById("markdown-input").value;
  const htmlContent = marked.parse(input);
  document.getElementById("preview").innerHTML = htmlContent;
}
