# API REST
Se creo una API REST con funciones CRUD para su funcionamiento

## Iniciar localmente
```
> El proyecto se ejecuta sobre el puerto process.env.PORT o 3000

* Instalacion de depedencias
```bash
npm i 
```
* Ejecucion del proyecto (se ejecuta en puerto 3000 por defecto)
```bash
npm run start
```

# Endpoints

Get All TvShows
```
GET      /tvshow
```

Get a single User by Id
```
GET      /tvshow/:id
```

Create a new TvShow
```
POST     /tvshow
```

Update an existing TvShow by Id
```
PUT      /tvshow/:id
```

Delete an existing TvShow by Id
```
DELETE   /tvshow/:id
```