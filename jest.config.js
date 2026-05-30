module.exports = {
  collectCoverage: true,
  // Ajusta esta ruta según dónde estén tus archivos JS
  collectCoverageFrom: [
    "src_1/src/**/*.js",
    "!**/node_modules/**"
  ],
  coverageDirectory: "coverage-inicial" // Carpeta donde se guardará el HTML
};