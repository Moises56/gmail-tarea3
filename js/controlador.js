var recibidos = [
    {
        emisor: 'Juan Perez',
        correoEmisor: 'jperez@gmail.com',
        asunto: 'Tarea primer parcial',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '10:00am',
        leido: true,
        destacado: true,
        spam:false
    },
    {
        emisor: 'Swam Jewel',
        correoEmisor: 'swamjewel@gmail.com',
        asunto: 'Prueba primer parcial',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '11:00am',
        leido: false,
        destacado: false,
        spam:true
    },
    {
        emisor: 'Theockles Capua',
        correoEmisor: 'theocklescapua@gmail.com',
        asunto: 'Proyecto primer parcial',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '12:00am',
        leido: false,
        destacado: false,
        spam:false
    }
]

var enviados = [
    {
        receptor: 'Pedro Martinez',
        emailReceptor: 'pmartinez@gmail.com',
        asunto: 'Saludos desde Intibucá',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '13:00am'
    },
    {
        receptor: 'Maria Rodriguez',
        emailReceptor: 'marodriguez@gmail.com',
        asunto: 'Saludos desde Tegucigalpa',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '14:00am'
    },
    {
        receptor: 'Crixus Port',
        emailReceptor: 'crixport@gmail.com',
        asunto: 'Saludos desde El Paraiso',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        hora: '15:00am'
    }
]

var papelera = [];
if (localStorage.getItem("papelera") == null) {
    localStorage.setItem("papelera", JSON.stringify(papelera)); //*de JSON a cadena
  } else {
    papelera = JSON.parse(localStorage.getItem("papelera"));
    }


// console.log('mensjes Recibidos', recibidos);
// console.log('mensjes Enviados', enviados);

//* LocalStorage

var localStorage = window.localStorage;
var indiceSelecionado = '';

if (localStorage.getItem('recibidos') == null){
    localStorage.setItem('recibidos', JSON.stringify(recibidos));
  }else{
      recibidos = JSON.parse(localStorage.getItem('recibidos'))
  }
  //TODO ******************************************* */
  if (localStorage.getItem('enviados') === null) {
      localStorage.setItem('enviados', JSON.stringify(enviados))
  } else {
      enviados = JSON.parse(localStorage.getItem('enviados'))
  }
  
  //TODO ******************************************* */


//* gebnerar mensajes recibidos
function msjRecibidos(){
    // console.log(recibidos);
    document.getElementById('msj-recibidos').innerHTML = ''; 
    recibidos.forEach(function(reci, i) {
    
        spam = reci.spam;
        destaca = reci.destacado;
        lei = reci.leido;

        let dest = '' 
        let leido = ''
        if (spam == false) {
            if (destaca == true) {
                dest = "destacado" //*agrega la clase css
                
            }
            if (lei == true) {
                leido = "leido" //*agrega la clase css
            }
            
            mens = reci.mensaje
            msj = mens.substring(0,20);
            // console.log(msj);
            
            document.getElementById('msj-recibidos').innerHTML += 
            `<tr> 
                <td id="emisor" data-label="consola " class="nombres ${leido}">
                <i class="far fa-eye" onclick="views(${i})"></i>
                    <i class="far fa-star estrella ${dest} " onclick="destacado(${i})"></i>
                    <i class="fas fa-exclamation-triangle" onclick="span(${i})"></i>
                    <b>${reci.emisor}</b>
                </td>
                <td  data-label="precio" class="nombres ${leido}"><span id="asunto"><b>${reci.asunto}</b></span> <b>-</b> <span id="mensaje">${msj}</span></td>
                <td id="hora" data-label="fechas" class="hora">${reci.hora}
                    <i class="far fa-trash-alt" onclick="eliminarMjs(${i})"></i>
                </td>
            </tr>
            `
        }
    });
}
msjRecibidos();


//* gebnerar mensajes  Envidos
function msjEnviados(){
    document.getElementById('msj-recibidos').innerHTML = ''; 
    enviados.forEach(function(envi, e) {
        // console.log(envi.destacado);
        mens = envi.mensaje
        msj = mens.substring(0,20);
                document.getElementById('msj-recibidos').innerHTML += 
                `<tr> 
                    <td data-label="consola " class="nombres">
                        <b>${envi.receptor}</b>
                    </td>
                    <td data-label="precio" class="nombres"><b>${envi.asunto}</b> <b>-</b> ${msj}</td>
                    <td data-label="fechas" class="hora">${envi.hora}
                    <i class="far fa-trash-alt" onclick="eliminarMjsEnv(${e})"></i>
                    </td>
                </tr>
                `
            
        });
}

//* gebnerar mensajes Destacados
function msjDestacados(){
    document.getElementById('msj-recibidos').innerHTML = ''; 
    recib = recibidos;
    // console.log(recib);
    for (const i in recib) {
        reci = recib[i].destacado
        
        des = "destacado"
        if (reci == true) {
            dest = "destacado" //*agrega la clase css
    
            document.getElementById('msj-recibidos').innerHTML += 
            `<tr> 
            <td data-label="consola " class="nombres">
                <i class="far fa-star estrella ${des}" onclick="destacado(${i})"></i>
                <b>${recib[i].emisor}</b>
                </td>
                <td data-label="precio" class="nombres"><b>${recib[i].asunto}</b> <b>-</b> ${msj}</td>
                <td data-label="fechas" class="hora">${recib[i].hora}
                <i class="far fa-trash-alt" onclick="eliminarMjs(${i})"></i>
                </td>
                </tr>
                `
            }
    }

}

//* gebnerar mensajes Span
function msjSpan(){
    document.getElementById('msj-recibidos').innerHTML = ''; 
    spamm= recibidos;
    // console.log(spamm);
    for (const i in spamm) {
        spams = spamm[i].spam
        // console.log(spamm[i].emisor);
        des = "destacado"
        if (spams == true) {

            mens = spamm[i].mensaje
            msj = mens.substring(0,20);
            document.getElementById('msj-recibidos').innerHTML += 
            `<tr> 
                <td data-label="consola " class="nombres">
                <i class="fas fa-exclamation-triangle" onclick="span(${i})"></i>
                <b>${spamm[i].emisor}</b></td>
                <td data-label="precio" class="nombres">
                    <b>${spamm[i].asunto}</b> <b>-</b> ${msj}
                </td>
                <td data-label="fechas" class="hora">${spamm[i].hora}
                    <i class="far fa-trash-alt" onclick="eliminarMjs(${i})"></i>
                </td>
            </tr>
                `
            }
    }
}

//* gebnerar mensajes en papelera
function msjPapelera(){
    // console.log(papelera == '');
    if (papelera == '') {
        alert('No hay mensajes en la papelera...')
    }else{
    document.getElementById('msj-recibidos').innerHTML = '';
    
    // console.log(papelera);
        papelera.forEach(function(pap, p){
        
            console.log(pap.emisor);

            document.getElementById('msj-recibidos').innerHTML += 
            ` <td data-label="consola" class="nombres">
                ${pap.emisor}
                </td>
                <td data-label="precio">${pap.mensaje}.</td>
                <td data-label="fechas" class="hora">${pap.hora}
                    <i class="far fa-trash-alt" onclick="eliminarMjsPapelera(${p})"></i>
            </td>
            `
        });
    }
}


//***FUNCIONES ONCLICK */


function eliminarMjsEnv(e){
    console.log('eliminar', enviados[e]);
    enviados.splice(e, 1);
    msjEnviados();
    localStorage.setItem('enviados', JSON.stringify(enviados))
}


function eliminarMjs(i){
    // console.log('delete',i);
    //* almacenado json con el indice a la variable papel
    papel = recibidos[i]

    //*Eliminar json de recibidos
     recibidos.splice(i, 1);
     msjRecibidos();
     localStorage.setItem('recibidos', JSON.stringify(recibidos));

     //*Guardar Json a papelara
    var pape= {
            emisor: papel.emisor,
            correoEmisor: papel.correoEmisor,
            asunto: papel.asunto,
            mensaje: papel.mensaje,
            hora: papel.hora,
            leido: papel.leido,
            destacado: papel.destacado, 
            spam:  papel.spam
        }
     papelera.push(pape)
     localStorage.setItem('papelera', JSON.stringify(papelera))
     console.log(papelera);

}

function eliminarMjsPapelera(p){
    console.log('eliminar', enviados[p]);
    papelera.splice(p, 1);
    msjPapelera();
    localStorage.setItem('papelera', JSON.stringify(papelera))

}

//*Mensajes destacados
function destacado(i){
    // console.log(recibidos[i].destacado);
    if (recibidos[i].destacado == true) {
        recibidos[i].destacado = false
    }else{
        recibidos[i].destacado = true
    }
    localStorage.setItem('recibidos', JSON.stringify(recibidos));
    msjRecibidos();
}

function span(i){
    console.log(i);
    // console.log(recibidos[i].spam);
    if (recibidos[i].spam == true) {
        recibidos[i].spam = false
    }else{
        recibidos[i].spam = true
    }
    localStorage.setItem('recibidos', JSON.stringify(recibidos));
    msjRecibidos();
}

function views(i){
    // console.log(recibidos[i].leido);
    if (recibidos[i].leido == true) {
        recibidos[i].leido = false
    }else{
        recibidos[i].leido = true
    }
    localStorage.setItem('recibidos', JSON.stringify(recibidos));
    msjRecibidos();

}

//*Mostrar venta Redactar mensaje
function btnRedactar(){
    // console.log('abrir ventana redactar-uy');
    var x = document.getElementById('redactarMsj');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}


//* Guardar un mensaje enviado
function msjNuevo(){
    var tiempo = new Date()
    if(tiempo > 12){
        var hora = tiempo.getHours()+':'+tiempo.getMinutes()+'pm'
    }else{  
        var  hora = tiempo.getHours()+':'+tiempo.getMinutes()+'am'
    }
    console.log(hora);

    enviar = {
        receptor: document.getElementById('receptor').value,
        emailReceptor: document.getElementById('emailReceptor').value,
        asunto: document.getElementById('asunt').value,
        mensaje: document.getElementById('mensaj').value,
        hora: hora 
    }
    enviados.push(enviar);
    localStorage.setItem("enviados", JSON.stringify(enviados));
    msjEnviados();
    console.log(enviar);
}


 
 