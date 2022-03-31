
const tablaHead = document.querySelector( 'thead');
const tablaBody = document.querySelector( 'tbody');
let   inputVal;

const addTable = ( param, index ) => {
    const tr = document.createElement('tr');

    const nombre = document.createElement('td');
    nombre.innerText=`${param.nombre}`;
    
    const valor = document.createElement('td');
    const inputValor = document.createElement('input');
    inputValor.setAttribute('type', 'number' );
    inputValor.setAttribute('min', 0 );
    inputValor.setAttribute('step', 0.1 );
    inputValor.setAttribute('id', index );
    inputValor.setAttribute('class', 'inputVal' );
    valor.appendChild(inputValor);

    const unidades = document.createElement('td');
    inputValor.setAttribute('style', 'text-align:left' );
    unidades.innerText=`${param.unidades}`;

    const nom201 = document.createElement('td');
    nom201.setAttribute('style', 'background-color:#f0f0f0' );
    nom201.setAttribute('id', `NOM201_${index}` );
    nom201.innerText=`${param.maxNOM201}`;

    const nom127 = document.createElement('td');
    nom127.setAttribute('style', 'background-color:#f0f0f0' );
    nom127.setAttribute('id', `NOM127_${index}` );
    nom127.innerText=`${param.maxNOM127}`;

    tr.appendChild(nombre);
    tr.appendChild(inputValor);
    tr.appendChild(unidades);
    tr.appendChild(nom201);
    tr.appendChild(nom127);
    
    tablaBody.appendChild(tr);
}

const initTable = () => {
    const tr = document.createElement('tr');

    const nombre = document.createElement('th');
    nombre.innerText=`Nombre`;

    const valor = document.createElement('th');
    valor.innerText=`Valor`;

    const unidades = document.createElement('th');
    unidades.innerText=`Unidades`;

    const nom201 = document.createElement('th');
    nom201.innerText=`NOM201`;

    const nom127 = document.createElement('th');
    nom127.innerText=`NOM127`;

    tr.appendChild(nombre);
    tr.appendChild(valor);
    tr.appendChild(unidades);
    tr.appendChild(nom201);
    tr.appendChild(nom127);
    tablaHead.appendChild(tr);

    maximos.forEach( addTable );

    inputVal = document.querySelectorAll( '.inputVal' );


}

initTable();

inputVal.forEach( item => {
    item.addEventListener('change', (input) => {
        const max201=maximos[input.target.id].maxNOM201;
        const max127=maximos[input.target.id].maxNOM127;
        const nom201 = document.querySelector( `#NOM201_${input.target.id}`);
        const nom127 = document.querySelector( `#NOM127_${input.target.id}`);
        const val=Number(input.target.value);
        if(val > max201 ){
            nom201.setAttribute('style', 'background-color:#ff9090' );
        }
        else{
            nom201.setAttribute('style', 'background-color:#90ff90' );
        }
        if(val > max127 ){
            nom127.setAttribute('style', 'background-color:#ff9090' );
        }
        else{
            nom127.setAttribute('style', 'background-color:#90ff90' );
        }
    } )
});

// origen: "Organolépticas y físicas",
//         nombre: "Olor",
//         maxNOM201: "Inodoro",
//         maxNOM127: "Agradable",
//         unidaes: ""






