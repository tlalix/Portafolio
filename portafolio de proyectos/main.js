var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true
});

typewriter.typeString("Desrrolladora Frontend Jr.")
  .pauseFor(2500)
  .deleteAll()
  .typeString('crear ciencia para crear arte')
  .pauseFor(2500)
  .deleteChars(23)
  .typeString('<strong>crear para crear</strong>')
  .pauseFor(2500)
  .start();