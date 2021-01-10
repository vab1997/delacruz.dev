---
title: "Los 4 mayores errores que he cometido durante mi carrera como programador"
date: "2021-01-10"
draft: false
summary: "Comparto contigo los mayores errores que he cometido durante mis quince años de carrera como programador y qué he aprendido de ellos."
imageSrc: /images/blog-images/daniela-holzer-u_3rD02dmkw-unsplash.jpg?q=1
---

Uno tiene ya una edad y cuando miro atrás pienso: "mira que he llegado a ser gilipollas". No me cae muy bien el Dani del pasado. Si lo tuviera delante, le diría cuatro cosas. Pero como eso no puede ser, al menos quiero reflexionar sobre los que considero que han sido los mayores errores de mi carrera como programador.

Si lees este artículo y te identificas con algún comportamiento, espero que te ayude como me hubiese gustado que me ayudase a mí hace años.

## Solidificar mis conocimientos de fundamentos de programación al principio de mi carrera

Yo suelo decir que aunque comencé a trabajar de programador hace quince años, en realidad los primeros no los aproveché mucho. Estudié Ingeniería de Telecomunicaciones, pero no se me dio muy bien. Tardé bastante en acabar la carrera. No me gustaba, trabajaba a tiempo parcial y me costó encontrar la motivación hasta el último año. Ese año fue el que hice más asignaturas de programación y descubrí que aquello sí me gustaba. Me planteé estudiar Ingeniería Informática al terminar, pero llevaba tantos años estudiando que estaba harto y no seguí.

Durante mis primeros años, tuve suerte encontrando trabajo. Estamos hablando de los primeros años 2000, con el boom de la [burbuja puntocom](https://es.wikipedia.org/wiki/Burbuja_puntocom) el mercado tenía un déficit de ingenieros y gente de otras especialidades se dedicaban al desarrollo de software. He llegado a ver a licenciados en pedagogía trabajando conmigo y empezar a aprender a programar el primer día. Tal era la situación que se conseguía trabajo sin saber programar. Las consultoras le tiraban la caña a lo que sea y las startups no existían en Barcelona. Eran otros tiempos.

En ese escenario, me costó encontrar a personas que me mentoreasen. Más bien era al revés. Como yo tenía cierta base (endeble) de programación, era alguien recién salido de la carrera quien ayudaba y desatascaba a mucha gente. Esa situación me hizo **pensar que era mejor de lo que era en realidad** y no me preocupé mucho en seguir formándome.

¡Error! Tardé bastantes años en darme cuenta de que necesitaba reforzar mis conocimientos fundamentales sobre programación e ingeniería de software. Por ponerte un ejemplo de lo que hablo, la primera vez que oí hablar del concepto de complejidad formal o [Big O notation](https://en.wikipedia.org/wiki/Big_O_notation) fue durante una entrevista de trabajo hace cinco años. Eso no se estudia en telecos.

A pesar de que he ido progresando y he tenido mucha suerte, han pasado varios años y siento que tengo lagunas importantes de conocimiento que estoy tratando de llenar. Aunque ha sido tarde, me he esforzado en aprender sobre algoritmos, estructuras de datos y otros conceptos que debería haber solidificado al principio de mi carrera.

Tanto si te acabas de graduar como si vienes de un Bootcamp, **asegúrate de que los primeros años de carrera trabajas con personas que te ayuden a consolidar estos conocimientos**. Aprender el lenguaje y el framework de moda está bien para pasar la entrevista, pero a largo plazo los fundamentos serán lo que te dará valor trabajando con cualquier lenguaje.

## Responsabilizar a los demás de la calidad de mi código

En un proyecto me encargué de una parte bastante delicada y compleja de implementar, que me llevó varios meses de trabajo tener funcionando. No es necesario entrar en detalles, pero era una funcionalidad que permitía realizar búsquedas cruzadas a partir de los datos de cualquier otra entidad. Mi implementación funcionaba, pero era frágil y estaba acoplada a la estructura de datos de todas las entidades por las que se permitía buscar.

Eran los años anteriores a las metodologías ágiles, Extreme Programming y todos estos conceptos que hoy entendemos como naturales. Así que en mi equipo todo el mundo trabajaba solo y se responsabilizaba de las tareas de principio a fin. Así que poca gente conocía cómo funcionaba lo que yo hice y además era complicado. El código y los requerimientos.

Los problemas comenzaron en cuanto se puso en producción. Funcionaba, pero a la que alguien cambiaba algo en otra parte del código, al estar mi parte conectada a las demás, se rompía. Y me pasé meses frustrado **echándole la culpa a los demás por no probar manualmente esa funcionalidad antes de tocar nada**. Ese fue mi error.

Recuerdo a mi manager que en aquellos tiempos me preguntaba: "¿Por qué se rompe esto siempre?" Y yo no sabía qué contestar. Nunca le pregunté si él conocía la respuesta, quizá quería hacerme coaching, pero nunca me lo dijo. Hoy sé que la respuesta era **"Porque no he escrito ningun test automático"**.

Cuando desarrollas una funcionalidad, no sólo tienes que hacer que funcione. También es tu responsabilidad asegurarte de **comunicar cómo funciona**. Y los **test automáticos** son la mejor forma de comunicar cómo funciona una pieza de software que conozco. Aunque hagas pair programming, si las personas que han participado en ese desarrollo no escriben test, tendrán el mismo problema.

Yo no escribí test, porque entonces no sabía ni cómo hacerlo, así que ni se me pasó por la cabeza. La base de código era grande y el resto del equipo ni siquiera sabía qué era aquello ni cómo funcionaba. Pero si hubiese escrito tests automáticos que se ejecutasen como parte de la build, esos test habrían comunicado si mi funcionalidad se rompía.

Lección aprendida: desarrollar tu código con calidad no sólo es hacerlo bonito y legible, sino sólido y a prueba de fallos. Las pruebas automáticas comunican cómo funciona una pieza de software en el momento que importa: cuando se está cambiando. Te avisan cuando algo se rompe y te dan seguridad cuando cambias algo. Es tu responsabilidad.

## Evitar conflictos

Esto ha sido una de las lecciones más duras que he aprendido y sin duda la que más problemas ha causado a los que me rodeaban. Soy una persona que, por mi carácter, evito el conflicto de forma natural. Afirmar esto sobre uno mismo es mucho más complicado de lo que parece, porque primero necesitas reconocerlo y luego tomar conciencia de ello. No ha sido fácil y me ha llevado años darme cuenta. Pero saberlo fue un gran paso. Ojalá lo hubiese sabido antes.

Desarrollar software es una actividad social. Se trabaja en equipo, así que pasas la mayoría del tiempo tratando con personas, no con máquinas. Tus compañeros, managers, responsables de producto... no importa. Pero el trabajo de todo el mundo influye en los demás. Y se producen conflictos. Es inevitable.

Existen diferentes [estilos para gestionar conflictos](https://en.wikipedia.org/wiki/Conflict_management_style) y cada tiene el suyo de forma natural. El mío es _Avoidance_. Lo evito y lo pospongo, o incluso niego que exista. Este estilo puede ser beneficioso en algunas situaciones y en el corto plazo, pero a largo plazo solo hace que las situaciones sean mucho peores por no haberlo gestionado a tiempo.

He sufrido mucho por estar siempre aplazando gestionar conflictos. Porque siempre llega un punto en el que se hace tan grave que te tienes que enfrentar a él. En mi caso, mi relación con otras personas se iba degradando hasta que explotaba por cualquier tontería. Como no podía enfrentarme a esa persona directamente, me desahogaba quejándome a su entorno, a su manager o al mío. Esperaba que alguien hiciese algo por solucionarlo, para no tener que enfrentarme al problema.

¿Cómo he ido arreglando el desastre de persona que he sido en los primeros años de mi vida? Con tiempo y tomando conciencia de ello. Tuve la suerte de tener gente que me ayudó, dándome feedback durante mucho tiempo. Al principio me costó entender a qué se referían. Piensa que era mi forma natural de enfrentarme a los problemas. No sólo en el trabajo, sino en la vida. Pero a medida que se iban dando situaciones o ejemplos concretos, lo fui comprendiendo. Y me fui dando cuenta de cómo cambiaba mi estado de ánimo frente a un conflicto.

Aprendí a **dar feedback** y también a **pedirlo regularmente**. He estado años trabajando en mejorar esta parte de mi carácter de forma activa. Leyendo, formándome y estando atento a cualquier oportunidad para ponerlo en práctica. Lo he comunicado abiertamente al surgir la oportunidad. Incluso lo comento en entrevistas de trabajo. Abrirme así no fue fácil, pero hace que las personas que tienen mayor empatía me ayuden.

Creo que trabajar esta parte de mi carácter ha ido dando sus frutos. Cuando he pedido feedback durante los últimos años, la gente no me percibe como alguien que evita el conflicto, sino que lo afronta. Así que aunque yo sé que el monstruito sigue ahí dentro, parece que he conseguido domesticarlo.

## Pensar que mi forma de hacer las cosas es la única correcta

Como te he explicado antes, me costó varios años encontrar un buen mentor. Pero tuve la suerte de dar con uno. Cuando le conocí, me pareció que era _realmente_ bueno. Hablaba con mucha seguridad y me enseñaba formas de hacer las cosas que ni me había planteado. Nunca había conocido a nadie así. Le puse en un pedestal. Era mi profeta.

Cuando dejé de trabajar con él, intenté predicar su evangelio. Quise proponer en mi nuevo equipo iniciativas y soluciones que él me había enseñado. Yo consideraba que era la mejor forma posible de hacer las cosas. La mejor que había visto en todos mis años de carrera. La única posible.

Pero fracasé. El equipo no compraba todas las ideas y eso me generó mucha frustración. No lo entendían. Tardé un tiempo en entender que el problema no eran las soluciones en sí, sino cómo las comuniqué al equipo. Yo ya tenía experiencia solucionando aquellos problemas y tenía la solución. "Ya lo he hecho. Esto se resuelve así". Salté del problema a la solución sin pasar por el proceso de hacer partícipe a todo el mundo. No tuve la paciencia de trabajar en el espacio del problema hasta que todo el mundo estuviese en la misma página.

Otro de mis errores fue pensar que mi forma de resolverlo era la única posible. Mis compañeros tenían menos experiencia, pero mucho talento. Si hubiese tenido más paciencia, podríamos haber llegado a otra solución que cumpliese los mismos principios, pero que fuese nuestra.

A partir de aquella experiencia, **he aprendido a separar lo que hace a una solución buena, de la implementación**. Cuando veo código de otros, trato de reprimir mi primer impulso de decir: "Yo no lo haría así". En su lugar, pienso: **"¿Esto cumple con los requisitos que debería tener una buena solución?"**. Si falta alguno, pregunto a esa persona si ha pensado en eso, no discuto la implementación. Y entre los dos llegamos a una solución mejor, aunque no se parezca en nada a la que ambos habíamos pensado en un principio.

## Conclusiones

Equivocarse forma parte del aprendizaje, pero no hay aprendizaje sin reflexión. Esta lista de errores es la que he elaborado hoy, pero a lo mejor dentro de unos años es diferente.

Hacer una retrospectiva personal sobre cómo te están yendo las cosas en tu carrera es un buen ejercicio que hacer de forma periódica. Si necesitas ayuda, empieza pidiendo feedback a tus compañeros y allegados. No siempre es fácil darte cuenta de lo que no haces bien. Ni encontrar a alguien lo suficientemente valiente para que te lo diga con honestidad.

Espero que el artículo te haya ayudado. O al menos, entretenido. Si necesitas a alguien que te ayude a aprender de tus errores, puedes contactar conmigo. Y si te ha gustado el artículo, [compártelo](http://www.twitter.com/share?url=https%3A%2F%2Fdelacruz.dev%2Fblog%2Ferrores-en-mi-carrera-como-programador&text=Los%204%20mayores%20errores%20que%20he%20cometido%20durante%20mi%20carrera%20como%20programador) y me harás un poco más feliz 😄.

<small>Foto de la cabecera de [Daniela Holzer](https://unsplash.com/@matscha?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) en [Unsplash](https://unsplash.com/@matscha?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)</small>
