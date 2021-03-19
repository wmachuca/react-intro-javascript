const apiKey = 'Z5LzXTWbMtSxFn9znkiV82DobUnJts1i';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json())
    .then(({ data, meta }) => {
        console.table(meta);
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);

/* 
    El FetchAPI, es una funcion implicita en los navegadores para hacer consumo de API expuestas,
    podemos usarlo sin necesidad de hacer instalación de complementos alguno, y funciona de manera bastante
    simple, unicamente indicando que en una variable deseo usar un elemento fecth con el enpoint del consumo,
    esto me retorna una promesa que podremos controlar como cualquier promesa declarada anteriormente.

    Otro dato es que las promesas declaradas pueden encadenarse en vez de anidarse, puesto que esto mejora su
    legibilidad y puede dar una sensación de orden del código mas agradable, haciendo que la salida del then
    de una promesa sea la entrada del then de la siguiente promesa.

    En cuanto al catch, uno solo puede hacer el manejo de todos los errores generados en el encadenamiento de
    las promesas, no importa cuantas sean.
*/