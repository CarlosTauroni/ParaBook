<h1 align="center">Bienvenido a From Zero To Cloud - Storybook 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img alt="Node" src="https://img.shields.io/badge/Node-16.10.0-blue" />
  <img alt="VUE" src="https://img.shields.io/badge/VUE-2.6.11-green" />
	<img alt="Storybook" src="https://img.shields.io/badge/Storybook-6.3.11-pink" />
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
</p>

## Prerequisitos

- Node 16.10.0
- Vue 2.6.11
- Storybook 6.3.11

## Instalación y ejecución del proyecto

El proyecto ya trae configurado todos los paquetes necesarios para su funcionamiento, la instalación rápida requiere que se descargue el proyecto a un directorio y ejecute los siguientes comandos.

```sh
npm install
npm run storybook
```

Automáticamente se levantará el catálogo de componentes de manera local en la url: [http://localhost:6006/?path=/story/introducci%C3%B3n--page](http://localhost:6006/?path=/story/introducci%C3%B3n--page)

## Instalación manual paso a paso

En caso de querer realizar una instalación manual de un catálogo de componentes los pasos a seguir son:

Ubicarse en la carpeta donde se quiera instalar el proyecto, se ejecutan los siguientes comandos, donde el primero instalará de manera global el cliente de VUE. (si usted ya lo tiene instalado puede saltarse la primera línea)

```sh
npm install -g @vue/cli
vue create <nombre del proyecto>
npm run serve
```

En este punto deberá arrancarse una aplicación starter de VUE JS con la página de inicio, este será nuestro proyecto donde desarrollaremos los componentes funcionales, la manera de trabajar que recomiendo es la creación del mismo scafolding que tengamos pensado para el Storybook, o al menos un scafolding con una estructura similar.

```sh
src
|__components
|   |__comp 1
|   | |__comp 1.css
|   | |__comp 1.vue
|   |__comp 2
|   |__comp 3
|__pages
   |__page 1
   |__page 2
```

Tras crear unos cuantos componentes pasamos a la instalación de la librería de Storybook. Para añadir la librería y empezar a montar el catálogo hay que ejecutar los siguientes comandos:

```sh
npx sb init
npm run storybook
```

Esto añade nuevas carpeta al proyecto, pero la que más nos va a interesar es la que se añade dentro de la carpeta src, en la cual comenzaremos a desarrollar la estructura de nuestro catálogo.

```sh
src
|__components
|   |__comp 1
|   | |__comp 1.css
|   | |__comp 1.vue
|   |__comp 2
|   |__comp 3
|__pages
|   |__page 1
|   |__page 2
|__stories
```

Cabe señalar que internamente dentro de esa carpeta stories lo que usaremos serán ficheros mdx para escribir la documentación de cada uno de nuestros componentes y es dentro de estos ficheros donde se creará la estructura de carpetas que mostrará nuestro catálogo.

Dentro de cada fichero de .story.mdx debemos importar:

```js
//Importamos la libreria de MDX
import { Meta, Story } from '@storybook/addon-docs';

//Importamos nuestro componente de la aplicación
import ComponenteX from '../components/componentX/ComponentX.vue';

//Añadimos la estructura de carpeta y título de nuestro componente
<Meta title="Nombre Carpeta/Nombre Subcarpeta (si la hubiera)/ Nombre Componente" component={ComponenteX} />

//Definimos nuestra plantilla, podrán haber tantas plantillas como componentes queramos mostrar dentro del story
export const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ComponenteX },
  //Si tuvieramos que pasarle datos hay que declararlos aqui, tal y como lo haríamos con un componente VUE JS al que le queremos pasar infirmación
  template: '<ComponenteX />',
});

-- Documentación que se quiera insertar para explicar el correcto funcionamiento del componente --


<Story
  name="ComponenteX"
  args={{
    argumentos si los hubiera
  }}
>
  {Template.bind({})}
</Story>

```

A parte, el Storybook permite añadir e incluso crear addons al catálogo, en este tutorial no vamos a entrar en este tema porque daría para extenderse bastante, pero si indicar que al querer añadir un tema personalizado a este proyecto hemos hecho uno de uno de esos addons.

Para instalar el addon de theming necesiataremos el paquete de themas que adjunta la herramienta, para instalarla utilizaremos el siguiente comando:

```sh
yarn add --dev @storybook/addons @storybook/theming
```
El enlace explicativo a todos los modificadores que tiene este addon puede encontrarse en un link dentro de las referencias.

## Referencias

[Tutorial Storybook para VUE](https://storybook.js.org/tutorials/intro-to-storybook/vue/es/get-started/)

[Storybook Theming](https://storybook.js.org/docs/vue/configure/theming)

## Autor

👤 **Carlos Alberto Tauroni Hernández**

🏢 **PARADIGMA DIGITAL**