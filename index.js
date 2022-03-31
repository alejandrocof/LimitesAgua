
const tablaHead = document.querySelector( 'thead');
const tablaBody = document.querySelector( 'tbody');
let   inputVal;

const addRow = ( param, index ) => {

    const maxNOM201=Number(param.maxNOM201);
    const maxNOM127=Number(param.maxNOM127);
    const maxNOM = Math.max( maxNOM201, maxNOM127);

    const tr = document.createElement('tr');

    const nombre = document.createElement('td');
    nombre.innerText=`${param.nombre}`;
    
    const valor = document.createElement('td');
    //valor.setAttribute('width','50px');
    //valor.setAttribute('style','width:10%');
    const inputValor = document.createElement('input');
    inputValor.setAttribute('type', 'number' );
    inputValor.setAttribute('min', 0 );
    inputValor.setAttribute('step', 0.1 );
    inputValor.setAttribute('id', index );
    inputValor.setAttribute('class', 'inputVal' );
    inputValor.setAttribute('style', 'text-align:right; width:100%; box-sizing: border-box;' );
    //inputValor.setAttribute('width','100%');
    inputValor.setAttribute('box-sizing','border-box');
    if( maxNOM>0){
        const decimals = Math.floor(Math.log10(maxNOM));
        const step = Math.pow(10,decimals)/2;
        inputValor.setAttribute('step', step );
    }
    valor.appendChild(inputValor);

    const unidades = document.createElement('td');
    unidades.setAttribute('style', 'text-align:left' );
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
    tr.appendChild(valor);
    tr.appendChild(unidades);
    tr.appendChild(nom201);
    tr.appendChild(nom127);
    
    tablaBody.appendChild(tr);
}

const initTable = () => {
    const tr = document.createElement('tr');

    const nombre = document.createElement('th');
    //nombre.setAttribute('style','width:40%');
    nombre.innerText=`Nombre`;

    const valor = document.createElement('th');
    //valor.setAttribute('width','50px');
    //valor.setAttribute('style','width:15%');
    valor.innerText=`Valor`;

    const unidades = document.createElement('th');
    //unidades.setAttribute('style','width:15%');
    unidades.innerText=`Unidades`;

    const nom201 = document.createElement('th');
    //nom201.setAttribute('style','width:15%');
    nom201.innerText=`NOM201`;

    const nom127 = document.createElement('th');
    //nom127.setAttribute('style','width:15%');
    nom127.innerText=`NOM127`;

    tr.appendChild(nombre);
    tr.appendChild(valor);
    tr.appendChild(unidades);
    tr.appendChild(nom201);
    tr.appendChild(nom127);
    tablaHead.appendChild(tr);

    maximos.forEach( addRow );

    inputVal = document.querySelectorAll( '.inputVal' );


}

initTable();

inputVal.forEach( item => {
    item.addEventListener('change', (input) => {
        const max201=maximos[input.target.id].maxNOM201;
        const max127=maximos[input.target.id].maxNOM127;
        const nom201 = document.querySelector( `#NOM201_${input.target.id}`);
        const nom127 = document.querySelector( `#NOM127_${input.target.id}`);
        
        //console.log(max201);
        if(!!input.target.value){
            const val=Number(input.target.value);
            if(!!max201){
                if( val > max201 ){
                    nom201.setAttribute('style', 'background-color:#ff9090' );
                }
                else{
                    nom201.setAttribute('style', 'background-color:#90ff90' );
                }
            }
            
            if( !!max127 ){
                if( val > max127 ){
                    nom127.setAttribute('style', 'background-color:#ff9090' );
                }
                else{
                    nom127.setAttribute('style', 'background-color:#90ff90' );
                }
            }
        }
        else{
            nom201.setAttribute('style', 'background-color:#f0f0f0' );
            nom127.setAttribute('style', 'background-color:#f0f0f0' );
        }
        
        
    } )
});







