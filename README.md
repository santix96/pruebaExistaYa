# Prueba ExistaYa Heroes

Este es un proyecto realizado para la empresa ExistaYa en cali

## Tecnologias

Para este proyecto se diseño una API de consultas de heroes con Express.js, base de datos MySql y FrontEnd en angular
en la parte visual se utilizaron frameworks de estilos como lo son Bootstrap y Angular material
## Poner en marcha nuestro proyecto

Una vez clonado el proyecto debemos crear una nueva tabla en mysql llamada `prueba_existaya` y poner a correr nuestro servidor de base de datos.
- Accedemos a la ruta `./pruebaExistaYa/src/api` desde la consola de comandos
- Ejecutamos `npm i` para instalar dependencias,
- Configuramos los datos de acceso a nuestra base de datos, para esto accedemos al archivo `./config/config.json`, aca debemos ingresar todos los datos de conexion.
- Ejecutamos `sequelize db:migrate` para realizar la migracion de modelos en la base de datos
- Desde mysql  Importamos los datos de las tablas desde el archivo .sql `./pruebaExistaYa/src/asstes/db/heros.sql`
- Ejecutamos `npm start` para poner en marcha nuestro servidor

Ahora desde otra consola accedemos a la ruta `./pruebaExistaYa`
- Ejecutamos el comando `npm i` para instalar dependencias
- Ejecutamos `ng serve` para poner en marcha nuestra vista
- Ya podemos acceder a nuestra pagina web desde el navegador por la ruta `http://localhost:4200/``

## Cosas por terminar

Tube varios inconvenientes en el desarrollo del proyecto, sobretodo con la configuracion de dependencias necesarias para hacer funcionar angular, y los componenetes de Angular-material, por este motivo no avance tanto como lo tenia planeado.
Elementos pendientes:
- Organizar visualizacion de las imagenes en general
- Organizar colores de las barras de progreso
- Estructurar footer
- Estilos de fuentes en general
- Organizar card de votacion
Entre otros...
