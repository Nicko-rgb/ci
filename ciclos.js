var i = 0;
  var txt = 'Buenas tardes, profesor y estimados compañeros. Nos sentimos honrado de estar ante ustedes hoy para discutir un tema esencial que tiene gran importancia en el mundo del desarrollo de software: el Ciclo de Vida del Desarrollo de Software (SDLC). Nuestro propósito hoy es informar y definir el SDLC y su papel crucial en el desarrollo de software.'
  var speed = 25;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();


  
  var a = 0;
  var txt = '1. Definición de ciclo de vida de desarrollo de software (SDLC): El ciclo de vida de desarrollo de software, comúnmente conocido como SDLC, es un marco estructurado que describe todo el proceso de planificación, desarrollo y mantenimiento de software. Sirve de guía, asegurando la ejecución de cada fase con precisión y eficiencia.<br> Es un conjunto de actividades que se realizan para crear y mantener el código fuente del programa.'
  var speed = 25;

  function typeWriter() {
    if (a < txt.length) {
      document.getElementById("deme").innerHTML += txt.charAt(a);
      a++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
