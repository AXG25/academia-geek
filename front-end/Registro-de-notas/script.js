const formulario = document.getElementById('formulario');
let arreglo = [];

formulario.addEventListener('submit', e => {
  e.preventDefault();

  let est = document.getElementById('nom').value;
  let per1 = document.getElementById('p1').value;
  let per2 = document.getElementById('p2').value;
  let per3 = document.getElementById('p3').value;

  //console.log(est, per1, per2, per3);

  crearRegistro(est, per1, per2, per3);
  guardarDatos()
})

const crearRegistro = (nom, p1, p2, p3) => {
    let registro = {
        nombre: nom,
        periodo1: p1,
        periodo2: p2,
        periodo3: p3 
    }

    arreglo.push(registro);
    //console.log(arreglo)
}
  const guardarDatos = () => {
      localStorage.setItem('notas',JSON.stringify(arreglo))
  }
