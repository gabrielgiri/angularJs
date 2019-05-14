angular.module("peliculas",[])
    .controller("movies", ["$scope",function(m){
        m.titulo = "Buscador de Peliculas";
        m.nombre = "Gabriel";
        m.nuevaPeli = {};
        m.peliculas = [
            {
                titulo: "No country for old man",
                fecha: "2008",
                director: "James Cameron",
                oscars: "4"
            },
            {
                titulo: "Memento",
                fecha: "1997",
                director: "James Cameron",
                oscars: "0"
            },
            {
                titulo: "Volver al futuro",
                fecha: "1985",
                director: "Zemectik",
                oscars: "4"
            },
            {
                titulo: "Titanic",
                fecha: "1997",
                director: "James Cameron",
                oscars: "4"
            },
            {
                titulo: "El Padrino",
                fecha: "1972",
                director: "Ford Coppola",
                oscars: "4"
            },
            {
                titulo: "El rey leon",
                fecha: "1994",
                director: "James Cameron",
                oscars: "3"
            }
        ];
        m.agregarPelicula = function(){
            m.peliculas.push(m.nuevaPeli);
            m.nuevaPeli = {};
        }
    }]);