module.exports = {
  collectCoverage: true,
  // Ajusta esta ruta según dónde estén tus archivos JS
  collectCoverageFrom: [
    "src/utils/**/*.js", 
    "src/components/**/*.js",
    "!**/node_modules/**"
  ],
  coverageDirectory: "coverage-inicial" // Carpeta donde se guardará el HTML
};