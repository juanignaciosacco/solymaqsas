const btnIngAbout = document.querySelector("#btnInglesAboutUs");
const btnEspAbout = document.querySelector("#btnEspAboutUs");
const txtAboutUsEsp = document.querySelector("#aboutUsEsp");
const txtAboutUsIng = document.querySelector("#aboutUsIng");
const txtProcesoGestionEsp = document.querySelector("#procesoDeGestionEsp");
const txtProcesoGestionIng = document.querySelector("#procesoDeGestionIng");

btnIngAbout.onclick = () => {
    txtAboutUsIng.style.display = 'block';
    txtProcesoGestionIng.style.display = 'block';
    txtAboutUsEsp.style.display = 'none';
    txtProcesoGestionEsp.style.display = 'none';
}

btnEspAbout.onclick = () => {
    txtAboutUsEsp.style.display = 'block';
    txtProcesoGestionEsp.style.display = 'block';
    txtProcesoGestionIng.style.display = 'none';
    txtAboutUsIng.style.display = 'none';
}