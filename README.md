# [Server-IPN-JavaScript]
##  Índice
* [1. Introducción](#1-introducción)
* [2. Requisitos previos](#2-requisitos-previos)
* [3. Despliegue](#3-despliegue)
* [4. Datos de conexión](#4-datos-de-conexión)
* [5. Transacción de prueba](#5-transacción-de-prueba)
* [6. Implementación de la IPN](#6-implementación-de-la-ipn)
* [7. Personalización](#7-personalización)
* [8. Consideraciones](#8-consideraciones)
## 1. Introducción
En este manual podrás encontrar una guía paso a paso para configurar un proyecto de **[JavaScript]** con la respuesta de la IPN. Te proporcionaremos instrucciones detalladas y credenciales de prueba para la instalación y configuración del proyecto, permitiéndote trabajar y experimentar de manera segura en tu propio entorno local.
Este manual está diseñado para ayudarte a comprender el flujo de la integración de la pasarela para ayudarte a aprovechar al máximo tu proyecto y facilitar tu experiencia de desarrollo.

<p align="center">
  <img src="https://github.com/izipay-pe/Imagenes/blob/main/formulario_popin/Imagen-Formulario-Popin.png?raw=true" alt="Popin" width="250"/>
</p>

<a name="Requisitos_Previos"></a>
 
## 2. Requisitos previos
* Comprender el flujo de comunicación de la pasarela. [Información Aquí](https://secure.micuentaweb.pe/doc/es-PE/rest/V4.0/javascript/guide/start.html)
* Extraer credenciales del Back Office Vendedor. [Guía Aquí](https://github.com/izipay-pe/obtener-credenciales-de-conexion)
  
> [!NOTE]
> Tener en cuenta que, para que el desarrollo de tu proyecto, eres libre de emplear tus herramientas preferidas.

## 3. Despliegue
### Clonar el proyecto:
  ```sh
  git clone [https://github.com/izipay-pe/Server-IPN-JavaScript.git]
  ```
### Ejecutar proyecto
* Ingrese a la carpeta raíz del proyecto desde el terminal.

* A continuación, instale Express y Morgan para poder ejecutar y ver las consultas en el servidor.
```bash
npm i express morgan
 ```
* Para poder probar si el servidor está operativo, ejecute el comando.
```bash
npm run start
```
<p align="center">
  <img src="https://i.postimg.cc/Bb11T1J7/ejecutarproyecto.jpg" alt="Formulario" width="350"/>
</p>


## 4. Subirlo al servidor web

Para este ejemplo se utilizó reenvío de puertos en Visual Studio Code, siga los siguientes pasos.

  * paso 1: creamos nuestro app, donde se subirá el proyecto.
          ![crear app](/src/imagenes-readme/crear-app.png)

  * paso 2: ingresamos un nombre para nuestro aplicativo y elegimos el servidor que más se adecue a nuestro proyecto, finalizamos dándole click a botón `"Create app"`.
          ![nombre app](/src/imagenes-readme/nombre-app.png)

  * paso 3: ingresamos a `"Deploy"`.
        ![deploy app](/src/imagenes-readme/deploy.png)

  * paso 4: Seleccionamos el método con el que subiremos el proyecto, tenemos 2 opciones:  
        ![deploy app](/src/imagenes-readme/metodo-deploy.png)    

    - 4.1.- Heroku CLI: seguir los pasos que indica.
      ![deploy app](/src/imagenes-readme/heroku-cli.png) 

    - 4.2.- Repositorio GitHub: se sincroniza con tu repositorio, buscas el nombre de tu proyecto y le das conectar.
      ![deploy app](/src/imagenes-readme/repositorio-git.png) 

      - cuando encuentre tu repositorio verificas tu rama y finalizas dándole click en el botón `"Deploy Branch"`
        ![deploy app](/src/imagenes-readme/finalizar.png) 

  * paso 5: Para visualizar nuestro proyecto le damos click en `"View"`.
      ![deploy app](/src/imagenes-readme/ver-IPN.png)  

    - A la ruta que se muestra añadimos nuestra ruta endpoin `"/respuesta/IPN"`, debería quedar de la siguiente manera:

      ```bash
      https://izpay-prueba.herokuapp.com/respuesta/IPN
      ```



## 5.- Configurar la URL de notificación al final del pago

  * Ingresar a su back office vendedor [aquí](https://secure.micuentaweb.pe/vads-merchant/) e ingresar a la siguiente ruta: `Configuración -> Reglas de notificaciones -> Url de notificación al final del pago`, una ves ingrese su endpoint, Guarda y acepta el mensaje de confirmación.

      ![Regla de Notificación](/src/imagenes-readme/rconfigurar-endpoint.png)
  

