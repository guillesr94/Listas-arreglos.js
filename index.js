// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let lista = ["arroz","galletitas","leche","agua","pan"];
// - Modifica la lista de la compra y añádele "Aceite de Girasol"
lista.push("aceite de girasol");

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
lista.pop()

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let peliculas = [
    {titulo:"Había una vez en Hollywood",
    director:"Quentin Tarantino",
    fecha:2019},
    {titulo:"Star wars: episodio III",
    director:"George Lucas",
    fecha:2005},
    {titulo:"Ted Bundy: durmiendo con el asesino",
    director:"Joe Berlinger",
    fecha:2019},
]
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let peliculasMayores2010 = peliculas.filter(pelicula=>{
  if(pelicula.fecha>2010){
   return true
}})

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let director = peliculas.map(p=>{
 return p.director
})
// console.log(director)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let titulo = peliculas.map(p=> {
  return p.titulo
})
let nuevaLista = director.concat(titulo);
// console.log(nuevaLista)


// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación);
let listaPropagacion = [...director,...titulo]
console.log(listaPropagacion)