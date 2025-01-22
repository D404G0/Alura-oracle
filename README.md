# Repositorio: Lógica de Programación con JavaScript y HTML

## 💻 Proyecto de Aprendizaje con Oracle y Alura

Este proyecto forma parte del curso de aprendizaje ofrecido por **Oracle** en la plataforma **Alura**. Es un paso importante para desarrollar habilidades fundamentales en programación web utilizando JavaScript y HTML.

---

## 📝 Descripción

El objetivo principal de este proyecto es implementar una lógica sencilla donde el usuario intenta adivinar un número secreto generado de forma aleatoria. Este ejercicio permite practicar conceptos básicos de programación como:

- 📥 **Declaración y uso de variables**
- ❓ **Uso de estructuras condicionales (if)**
- 🔔 **Interacción con el usuario mediante alert y prompt**
- 🔄 **Modificación de valores de variables**
- 🔢 **Uso de bucles para iteración**

El código es accesible y adecuado para quienes se inician en la programación, complementado con ejemplos y ejercicios adicionales del curso.

---

## 📂 Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **Carpeta `ejemplos`**: Contiene los ejemplos proporcionados en el curso, incluyendo el código original del juego.
- **Carpeta `ejercicios`**: Incluye los ejercicios propuestos en la clase, cada uno resuelto en un archivo `.js` con su respectivo archivo `.html` para facilitar su visualización.
- **Archivo `index.html`**: Es la página principal donde se ejecuta el juego completo.
- **Archivo `holamundo.js`**: Contiene la implementación del juego principal con la lógica descrita.

---

## 🎯 Características del Proyecto

- **Interacción dinámica**: Solicita un número al usuario y responde con mensajes personalizados según su respuesta.
- **Generación aleatoria**: Define un número secreto dentro de un rango establecido por el usuario.
- **Control de intentos**: Permite al usuario establecer un número máximo de intentos, verificando que no supere un límite razonable.
- **Mensajes adaptativos**: Informa si el número ingresado es mayor o menor que el número secreto.
- **Simplicidad**: Ideal para principiantes que buscan entender conceptos básicos de programación.

---

## 🚀 Cómo Usar este Proyecto

Para ejecutar este proyecto, sigue estos pasos:

1. Clona este repositorio en tu ordenador.
2. Abre el archivo `index.html` en tu navegador favorito.
3. Accede a la consola del navegador para interactuar con el juego.

¡Diviértete adivinando el número secreto!

---

## 🔍 Cómo Funciona el Código

El código principal del proyecto sigue estos pasos:

1. Solicita al usuario que introduzca un rango máximo para generar un número secreto aleatorio entre 1 y ese rango.
2. Pide al usuario que defina el número máximo de intentos permitidos para adivinar el número secreto, asegurándose de que este no supere la mitad del rango establecido.
3. Dentro de un bucle, el usuario ingresa un número para intentar adivinar el número secreto.
   - Si el número ingresado coincide con el número secreto, muestra un mensaje de éxito y finaliza el juego.
   - Si el número de intentos alcanza el máximo definido, muestra un mensaje indicando que el usuario ha perdido y revela el número secreto.
   - Si el número ingresado es menor o mayor que el número secreto, proporciona pistas para ayudar al usuario a adivinar.
4. Si el usuario introduce valores no válidos o no cumple con las condiciones iniciales, se le solicita que lo intente nuevamente.
