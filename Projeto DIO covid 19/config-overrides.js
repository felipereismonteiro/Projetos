//Sobreescrevendo a configuração padrão do React
const { useBabelRc, override } = require('customize-cra')
module.exports = override(useBabelRc())