const GeolangASTBuilder = require('../src-generated/GeolangASTBuilder.js');
const GeolangMain = require('../src-generated/GeolangMain.js');

if(typeof window === 'undefined') {

} else {
    window.GeolangMain = GeolangMain;
}