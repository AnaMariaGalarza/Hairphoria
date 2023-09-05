export let profesionales = [
  {
    nombre: "Mario Volkmar",
    horario: {
      Lunes: [8, 9, 10, 11, 14, 15],
      Martes: [8, 9, 10, 11, 14, 15],
      Miércoles: [8, 9, 10, 12, 13, 14],
      Jueves: [8, 9, 10, 11, 14, 15],
    },
    categorias: ["Manos y Pies Perfectos", "Cabello Radiante", "Piel Perfecta"],
    ciudad: "Medellin",
  },
  {
    nombre: "Mayerly Avendaño",
    horario: {
      Lunes: [9, 10, 12, 14, 16],
      Miércoles: [9, 10, 12, 14, 16],
      Jueves: [9, 10, 12, 14, 16],
      Viernes: [9, 10, 12, 14, 16],
    },
    categorias: ["Cabello Radiante", "Piel Perfecta"],
    ciudad: "Bogotá",
  },
  {
    nombre: "Nayelly Pantoja",
    horario: {
      Martes: [10, 11, 13, 14, 15, 16],
      Miércoles: [10, 11, 13, 14, 15, 16],
      Jueves: [10, 11, 13, 14, 15, 16],
      Viernes: [10, 11, 13, 14, 15, 16],
      Sábado: [10, 11, 13, 14, 15, 16],
      Domingo: [10, 11, 13, 14, 15, 16],
    },
    categorias: ["Mirada Perfecta", "Piel Perfecta", "Relajación Total"],
    ciudad: "Barranquilla",
  },
  {
    nombre: "Yohana Zapata",
    horario: {
      Martes: [8, 9, 10, 13, 14, 15],
      Miércoles: [8, 9, 10, 13, 14, 15],
      Jueves: [8, 9, 10, 13, 14, 15],
      Sábado: [8, 9, 10, 13, 14, 15],
      Domingo: [8, 9, 10, 13, 14, 15],
    },
    categorias: ["Mirada Perfecta", "Relajación Total", "Maquillaje Profesional"],
    ciudad: "Cali",
  },
  {
    nombre: "Ana Maria Galarza",
    horario: {
      Martes: [9, 10, 11, 13, 14, 16],
      Miércoles: [9, 10, 11, 13, 14, 16],
      Jueves: [9, 10, 11, 13, 14, 16],
      Sábado: [9, 10, 11, 13, 14, 16],
      Domingo: [9, 10, 11, 13, 14, 16],
    },
    categorias: ["Maquillaje Profesional", "Barbería", "Depilación"],
    ciudad: "Cali",
  },
  {
    nombre: "Gonzalo Volante",
    horario: {
      Lunes: [11, 12, 13, 15, 16],
      Martes: [11, 12, 13, 15, 16],
      Miércoles: [11, 12, 13, 15, 16],
      Jueves: [11, 12, 13, 15, 16],
      Viernes: [11, 12, 13, 15, 16],
      Sábado: [11, 12, 13, 15, 16],
    },
    categorias: ["Barbería", "Depilación", "Manos y Pies Perfectos",],
    ciudad: "Valledupar",
  },
  {
    nombre: "Carlos Hernandez",
    horario: {
      Lunes: [8, 9, 10, 11, 14, 15],
      Miércoles: [8, 9, 10, 11, 14, 15],
      Jueves: [8, 9, 10, 11, 14, 15],
      Viernes: [8, 9, 10, 11, 14, 15],
      Sábado: [8, 9, 10, 11, 14, 15],
      Domingo: [8, 9, 10, 11, 14, 15],
    },
    categorias: ["Mirada Perfecta", "Maquillaje Profesional", "Barbería"],
    ciudad: "Barranquilla",
  },
];

export let categorias = [
  {
    nombre: "Manos y Pies Perfectos",
    img: "/src/assets/seccionesImagenes/categorias/Manicure.png",
    ciudad: ["Valledupar", "Medellin", "Cali"],
  },
  {
    nombre: "Cabello Radiante",
    img: "/src/assets/seccionesImagenes/categorias/CorteCabelloLargo.png",
    ciudad: ["Barranquilla", "Medellin", "Bogotá"],
  },
  {
    nombre: "Piel Perfecta",
    img: "/src/assets/seccionesImagenes/categorias/Mascarillas.png",
    ciudad: ["Valledupar", "Medellin", "Bogotá", "Barranquilla"],
  },
  {
    nombre: "Relajación Total",
    img: "/src/assets/seccionesImagenes/categorias/Spa.png",
    ciudad: ["Medellin", "Bogotá", "Cali"],
  },
  {
    nombre: "Maquillaje Profesional",
    img: "/src/assets/seccionesImagenes/categorias/Maquillaje.png",
    ciudad: ["Medellin", "Bogotá", "Barranquilla"],
  },
  {
    nombre: "Barberia",
    img: "/src/assets/seccionesImagenes/categorias/Barberia.png",
    ciudad: ["Cali", "Bogotá", "Barranquilla", "Valledupar"],
  },
  {
    nombre: "Depilación",
    img: "/src/assets/seccionesImagenes/categorias/depilacion.jpg",
    ciudad: ["Medellin", "Bogotá", "Valledupar"],
  },

  {
    nombre: "Mirada Perfecta",
    img: "/src/assets/seccionesImagenes/categorias/cejasypestanas.jpg",
    ciudad: ["Medellin", "Cali", "Barranquilla", "Valledupar"],
  },
];

export let usuarios = [
  
]

export let servicios = [
  {
    servicio: "Manicura clásica",
    descripcion:
      "La manicura clásica incluye limado, pulido y esmaltado de uñas en las manos.",
    precio: "$15",
    palabras_clave: ["Uñas", "manos", "limado", "pulido", "esmaltado"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/Manos-Pies/ManicuraClasica.png",
    categoria: "Manos y Pies Perfectos",
    masInfo:
      "Dale a tus manos el cuidado que se merecen con nuestra manicura clásica. Nuestro servicio incluye un limado preciso de las uñas, pulido para dejarlas suaves y un esmaltado impecable. Tus uñas lucirán perfectas y hermosas. Nuestro equipo de profesionales te brindará un tratamiento completo y de alta calidad para que te sientas renovada y segura. ¡Ven y disfruta de unas manos radiantes con nuestra manicura clásica!",
  },
  {
    servicio: "Pedicura clásica",
    descripcion:
      "La pedicura clásica incluye limado, pulido y esmaltado de uñas en los pies.",
    precio: "$20",
    palabras_clave: ["Uñas", "pies", "limado", "pulido", "esmaltado"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/Manos-Pies/PedicuraClasica.png",
    categoria: "Manos y Pies Perfectos",
    masInfo:
      "Relaja tus pies con nuestra pedicura clásica. Nuestro servicio incluye un limado preciso de las uñas, pulido para dejarlas suaves y un esmaltado impecable. Tus pies lucirán suaves y radiantes. Nuestro equipo de profesionales te brindará un tratamiento completo y de alta calidad para que te sientas renovada y segura. ¡Ven y disfruta de unos pies hermosos con nuestra pedicura clásica!",
  },
  {
    servicio: "Manicura spa",
    descripcion:
      "La manicura spa es una experiencia relajante que incluye limado, pulido, esmaltado y un tratamiento de spa para tus manos.",
    precio: "$25",
    palabras_clave: ["Uñas", "manos", "exfoliación", "masaje", "esmaltado"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/Manos-Pies/ManicuraSpa.png",
    categoria: "Manos y Pies Perfectos",
    masInfo:
      "Disfruta de una experiencia relajante con nuestra manicura spa. Nuestro servicio incluye un limado preciso de las uñas, pulido para dejarlas suaves, un esmaltado impecable y un tratamiento de spa indulgente para tus manos. Te mimaremos y embelleceremos tus manos para que te sientas renovada y segura. ¡Ven y disfruta de unas manos radiantes con nuestra manicura spa!",
  },
  {
    servicio: "Pedicura spa",
    descripcion:
      "La pedicura spa es un tratamiento indulgente que incluye limado, pulido, esmaltado y un tratamiento de spa para tus pies.",
    precio: "$30",
    palabras_clave: ["Uñas", "pies", "exfoliación", "masaje", "esmaltado"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/Manos-Pies/PedicuraSpa.png",
    categoria: "Manos y Pies Perfectos",
    masInfo:
      "Mima tus pies con nuestra pedicura spa. Nuestro servicio incluye un limado preciso de las uñas, pulido para dejarlas suaves, un esmaltado impecable y un tratamiento de spa indulgente para tus pies cansados. Te proporcionaremos un cuidado completo y de alta calidad para que te sientas renovada y segura. ¡Ven y disfruta de unos pies hermosos con nuestra pedicura spa!",
  },
  {
    servicio: "Manicura en gel",
    descripcion:
      "La manicura en gel ofrece un acabado duradero que incluye limado, pulido, esmaltado y la aplicación de gel en tus uñas.",
    precio: "$30",
    palabras_clave: ["Uñas", "manos", "gel", "limado", "pulido"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/Manos-Pies/ManicuraEnGel.png",
    categoria: "Manos y Pies Perfectos",
    masInfo:
      "Acaba con nuestra manicura en gel. Nuestro servicio incluye un limado preciso de las uñas, pulido para dejarlas suaves, un esmaltado impecable y la aplicación de gel para un acabado duradero. Tus uñas lucirán impecables por más tiempo. Nuestro equipo de profesionales te brindará un tratamiento completo y de alta calidad para que te sientas renovada y segura. ¡Ven y disfruta de unas manos radiantes con nuestra manicura en gel!",
  },
  {
    servicio: "Pedicura en gel",
    descripcion:
      "La pedicura en gel ofrece un acabado duradero que incluye limado, pulido, esmaltado y la aplicación de gel en tus uñas de los pies.",
    precio: "$35",
    palabras_clave: ["Uñas", "pies", "gel", "limado", "pulido"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/Manos-Pies/PedicuraEnGel.png",
    categoria: "Manos y Pies Perfectos",
    masInfo:
      "Mantén tus pies perfectos con nuestra pedicura en gel. Nuestro servicio incluye un limado preciso de las uñas, pulido para dejarlas suaves, un esmaltado impecable y la aplicación de gel para un acabado duradero. Lucirás pies hermosos y tus uñas se mantendrán impecables por más tiempo. Nuestro equipo de profesionales te brindará un tratamiento completo y de alta calidad para que te sientas renovada y segura. ¡Ven y disfruta de unos pies radiantes con nuestra pedicura en gel!",
  },
  {
    servicio: "Manicura francesa",
    descripcion:
      "La manicura francesa ofrece un estilo clásico y sofisticado que incluye limado, pulido, esmaltado y un diseño francés en tus uñas.",
    precio: "$20",
    palabras_clave: ["Uñas", "manos", "francesa", "limado", "pulido"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/Manos-Pies/ManicuraFrancesa.png",
    categoria: "Manos y Pies Perfectos",
    masInfo:
      "Añade elegancia y sofisticación a tus manos con nuestra manicura francesa. Nuestro servicio incluye un limado preciso de las uñas, pulido para dejarlas suaves, un esmaltado impecable y un diseño francés clásico y refinado. Tus uñas lucirán bellas y con estilo. Nuestro equipo de profesionales te brindará un tratamiento completo y de alta calidad para que te sientas renovada y segura. ¡Ven y disfruta de unas manos radiantes con nuestra manicura francesa!",
  },
  {
    servicio: "Pedicura francesa",
    descripcion:
      "La pedicura francesa ofrece un toque chic para tus pies con limado, pulido, esmaltado y un diseño francés en tus uñas de los pies.",
    precio: "$25",
    palabras_clave: ["Uñas", "pies", "francesa", "limado", "pulido"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/Manos-Pies/PedicuraFrancesa.jpg",
    categoria: "Manos y Pies Perfectos",
    masInfo:
      "Añade belleza y estilo a cada paso con nuestra pedicura francesa. Nuestro servicio incluye un limado preciso de las uñas, pulido para dejarlas suaves, un esmaltado impecable y un diseño francés que te dará un toque chic. Tus pies lucirán hermosos y con un estilo único. Nuestro equipo de profesionales te brindará un tratamiento completo y de alta calidad para que te sientas renovada y segura. ¡Ven y disfruta de unos pies radiantes con nuestra pedicura francesa!",
  },

  {
    servicio: "Corte de cabello",
    descripcion:
      "Renueva tu look con nuestro corte personalizado. Estilo y frescura en cada corte.",
    precio: "$30",
    palabras_clave: ["Cabello", "corte", "estilo", "personalizado"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/CabelloRadiante/CorteDeCabello.png",
    categoria: "Cabello Radiante",
    masInfo:
      "¡Cambia tu estilo con nuestro corte de cabello! Nuestro servicio de corte personalizado te brindará un look renovado y fresco. Nuestros expertos estilistas se encargarán de darle forma y estilo a tu cabello, resaltando tus mejores características. Si buscas un cambio de imagen o simplemente un retoque, nuestro equipo profesional estará encantado de ayudarte. ¡Ven y descubre el poder de un corte de cabello perfecto!",
  },
  {
    servicio: "Peinado",
    descripcion:
      "Luce un peinado espectacular para cualquier ocasión. Tu cabello será el centro de atención.",
    precio: "$40",
    palabras_clave: ["Cabello", "peinado", "evento", "ocasión"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/CabelloRadiante/Peinado.jpg",
    categoria: "Cabello Radiante",
    masInfo:
      "¡Destaca con un peinado espectacular para cualquier ocasión! Nuestro servicio de peinado te permitirá lucir un cabello radiante que captará todas las miradas. Ya sea que necesites un peinado elegante para un evento especial o un look deslumbrante para una ocasión especial, nuestro equipo de estilistas expertos se encargará de crear el peinado perfecto para ti. Ven y déjanos hacer magia con tu cabello.",
  },
  {
    servicio: "Tinte de cabello",
    descripcion:
      "Cambia el color de tu cabello con calidad y estilo. ¡Un cambio que te encantará!",
    precio: "Desde $60 (dependiendo del largo del cabello)",
    palabras_clave: ["Cabello", "tinte", "color", "cambio"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/CabelloRadiante/Tinte.png",
    categoria: "Cabello Radiante",
    masInfo:
      "¡Dale un nuevo color a tu cabello con nuestro servicio de tinte! Ya sea que estés buscando un cambio sutil o una transformación audaz, nuestros expertos estilistas te ayudarán a elegir el tono perfecto para ti. Utilizamos productos de alta calidad que cuidan y protegen tu cabello durante el proceso de tintura. Ven y déjate sorprender por el resultado. ¡Te encantará el cambio!",
  },
  {
    servicio: "Mechas",
    descripcion:
      "Añade dimensión y luminosidad a tu cabello. Destaca con un look radiante.",
    precio: "Desde $80 (dependiendo del largo del cabello)",
    palabras_clave: ["Cabello", "mechas", "dimensión", "luminosidad"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/CabelloRadiante/Mechas.png",
    categoria: "Cabello Radiante",
    masInfo:
      "¡Destaca con mechas en tu cabello! Nuestro servicio de mechas te permitirá agregar dimensión y luminosidad a tu cabello, resaltando tus rasgos faciales y brindando un look radiante. Nuestros estilistas expertos te asesorarán sobre las mejores opciones de color y estilo para lograr el efecto deseado. Ven y descubre cómo unas mechas bien hechas pueden transformar por completo tu look.",
  },
  {
    servicio: "Tratamiento capilar",
    descripcion:
      "Nutre y fortalece tu cabello con nuestro tratamiento especializado. Cabello saludable y brillante.",
    precio: "Desde $40 (dependiendo del largo del cabello)",
    palabras_clave: ["Cabello", "tratamiento", "nutrición", "fortalecimiento"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/CabelloRadiante/TratamientoCapilar.png",
    categoria: "Cabello Radiante",
    masInfo:
      "¡Dale a tu cabello el cuidado que se merece con nuestro tratamiento capilar! Nuestro servicio de tratamiento especializado nutrirá y fortalecerá tu cabello, dejándolo saludable y brillante. Utilizamos productos de alta calidad y técnicas avanzadas para proporcionar una hidratación profunda y reparar cualquier daño. Nuestros expertos estilistas te ayudarán a determinar el tratamiento adecuado para tus necesidades. ¡Ven y dale a tu cabello un respiro de belleza!",
  },
  {
    servicio: "Extensiones de cabello",
    descripcion:
      "Añade longitud y volumen a tu cabello. Transforma tu look en segundos.",
    precio:
      "Consultar precio en el salón de belleza. Depende del tipo y cantidad de extensiones.",
    palabras_clave: ["Cabello", "extensiones", "longitud", "volumen"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/CabelloRadiante/ExtensionesDeCabello.jpg",
    categoria: "Cabello Radiante",
    masInfo:
      "¿Quieres lucir un cabello largo y con volumen? Nuestro servicio de extensiones de cabello es la solución perfecta. Añade longitud y volumen a tu cabello de forma instantánea y transforma por completo tu look. Nuestros expertos estilistas te asesorarán sobre el tipo de extensiones más adecuado para ti y te brindarán un resultado natural y hermoso. Consulta en nuestro salón de belleza el precio y las opciones disponibles. ¡Ven y descubre cómo unas extensiones pueden hacer maravillas por tu cabello!",
  },
  {
    servicio: "Lavado y secado",
    descripcion:
      "Disfruta de un cabello limpio y radiante. Un cuidado completo para tu cabello.",
    precio: "Desde $20 (dependiendo del largo del cabello)",
    palabras_clave: ["Cabello", "lavado", "secado"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/CabelloRadiante/LavadoYSecado.jpg",
    categoria: "Cabello Radiante",
    masInfo:
      "Mantén tu cabello limpio y radiante con nuestro servicio de lavado y secado. Nuestro equipo de expertos se encargará de proporcionar un lavado suave y cuidadoso para eliminar cualquier residuo y dejar tu cabello fresco y revitalizado. Luego, te ofrecemos un secado profesional que realza la belleza natural de tu cabello. Disfruta de un cuidado completo para tu cabello y siéntete lista para enfrentar el día con confianza. ¡Ven y experimenta el lujo de un cabello limpio y radiante!",
  },
  {
    servicio: "Limpieza facial",
    descripcion:
      "Limpia y purifica tu piel en profundidad. Una piel radiante y saludable.",
    precio: "$40",
    palabras_clave: ["Piel", "rostro", "limpieza", "purificación"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/PielPerfecta/LimpiezaFacial.png",
    categoria: "Piel Perfecta",
    masInfo:
      "Mantén tu piel limpia y saludable con nuestro servicio de limpieza facial. Nuestros profesionales se encargarán de limpiar y purificar tu piel en profundidad, eliminando impurezas y residuos acumulados. Disfruta de una piel radiante y fresca después de cada sesión. ¡Ven y experimenta los beneficios de una limpieza facial profesional!",
  },
  {
    servicio: "Exfoliación facial",
    descripcion:
      "Elimina células muertas y revitaliza tu piel. Un rostro luminoso y suave.",
    precio: "$30",
    palabras_clave: ["Piel", "rostro", "exfoliación", "revitalización"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/PielPerfecta/ExfoliacionFacial.png",
    categoria: "Piel Perfecta",
    masInfo:
      "Revitaliza tu piel con nuestro servicio de exfoliación facial. Elimina las células muertas y promueve la regeneración celular para obtener un rostro luminoso y suave. Nuestros productos y técnicas de exfoliación suave dejarán tu piel renovada y lista para lucir su mejor aspecto. ¡Ven y déjanos cuidar de tu piel con este tratamiento revitalizante!",
  },
  {
    servicio: "Mascarilla facial",
    descripcion:
      "Nutre e hidrata tu piel con nuestras mascarillas especializadas. Un cuidado indulgente.",
    precio: "$20",
    palabras_clave: ["Piel", "rostro", "mascarilla", "nutrición"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/PielPerfecta/MascarillaFacial.png",
    categoria: "Piel Perfecta",
    masInfo:
      "Bríndale a tu piel un cuidado indulgente con nuestras mascarillas faciales especializadas. Cada mascarilla está formulada para nutrir e hidratar tu piel, dejándola suave, radiante y revitalizada. Nuestros expertos te asesorarán sobre la mascarilla más adecuada para tu tipo de piel y necesidades específicas. ¡Ven y disfruta de un momento de cuidado y relajación para tu piel!",
  },
  {
    servicio: "Tratamiento anti-edad",
    descripcion:
      "Combate los signos del envejecimiento. Rejuvenece tu piel con efectividad.",
    precio: "$60",
    palabras_clave: ["Piel", "rostro", "anti-edad", "envejecimiento"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/PielPerfecta/TratamientoAnti-edad.jpg",
    categoria: "Piel Perfecta",
    masInfo:
      "Rejuvenece tu piel y combate los signos del envejecimiento con nuestro tratamiento anti-edad. Nuestros productos y técnicas especializadas ayudarán a reducir las arrugas, las líneas de expresión y a mejorar la firmeza de tu piel. Disfruta de una apariencia más joven y radiante con nuestros tratamientos efectivos y personalizados. ¡Ven y descubre el poder de rejuvenecer tu piel!",
  },
  {
    servicio: "Tratamiento para el acné",
    descripcion:
      "Mejora la apariencia de la piel propensa al acné. Un tratamiento especializado para una piel más clara.",
    precio: "$50",
    palabras_clave: ["Piel", "rostro", "acné", "mejora"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/PielPerfecta/TratamientoParaElAcne.jpg",
    categoria: "Piel Perfecta",
    masInfo:
      "Si luchas contra el acné, nuestro tratamiento especializado puede ayudarte a mejorar la apariencia de tu piel. Nuestros expertos evaluarán tu tipo de acné y te ofrecerán soluciones efectivas para reducir las imperfecciones y lograr una piel más clara y saludable. Confía en nuestro conocimiento y experiencia para brindarte resultados visibles. ¡Ven y descubre cómo podemos transformar tu piel propensa al acné!",
  },
  {
    servicio: "Masaje facial",
    descripcion:
      "Relaja y tonifica los músculos faciales. Un momento de bienestar y cuidado.",
    precio: "$30",
    palabras_clave: ["Piel", "rostro", "masaje", "relajación"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/PielPerfecta/MasajeFacial.png",
    categoria: "Piel Perfecta",
    masInfo:
      "Relaja y tonifica los músculos faciales con nuestro masaje facial. Nuestros terapeutas especializados aplicarán técnicas suaves para aliviar la tensión y promover la circulación sanguínea en tu rostro. Disfruta de un momento de bienestar y cuidado mientras mejoras la apariencia y salud de tu piel. ¡Ven y déjanos brindarte un masaje facial revitalizante!",
  },
  {
    servicio: "Depilación facial",
    descripcion:
      "Elimina el vello no deseado del rostro. Piel suave y sin preocupaciones.",
    precio: "Desde $10 (dependiendo del área)",
    palabras_clave: ["Piel", "rostro", "depilación", "vello"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/PielPerfecta/DepilacionFacial.png",
    categoria: "Piel Perfecta",
    masInfo:
      "Despídete del vello no deseado en tu rostro con nuestro servicio de depilación facial. Nuestros especialistas utilizarán técnicas seguras y eficientes para eliminar el vello de áreas específicas, dejando tu piel suave y sin preocupaciones. Los precios varían según el área a tratar, así que no dudes en consultarnos para obtener más información. ¡Ven y disfruta de una piel libre de vello en tu rostro!",
  },
  {
    servicio: "Peeling facial rejuvenecedor",
    descripcion:
      "Obtén una piel perfecta con nuestro peeling facial. Elimina células muertas y revela una tez radiante y rejuvenecida.",
    precio: "Desde $40 (dependiendo del tipo de peeling)",
    palabras_clave: ["Piel", "rostro", "peeling facial"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/PielPerfecta/PeelingFacial.png",
    categoria: "Piel Perfecta",
    masInfo:
      "Experimenta una transformación en tu piel con nuestro peeling facial rejuvenecedor. Nuestros expertos en cuidado de la piel utilizan técnicas avanzadas para eliminar suavemente las células muertas y promover la regeneración celular. El resultado es una tez radiante, suave y rejuvenecida. Personalizamos el tratamiento según las necesidades específicas de tu piel. Los precios varían según el tipo de peeling seleccionado. Ven y descubre cómo puedes lucir una piel perfecta con nuestro peeling facial de alta calidad.",
  },
  {
    servicio: "Masaje descontracturante",
    descripcion:
      "Alivia la tensión muscular con nuestro masaje efectivo. Libera el estrés y recupera tu bienestar.",
    precio: "Desde $70 (dependiendo de la duración)",
    palabras_clave: ["Masaje", "descontracturante", "tensión", "muscular"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/RelajacionTotal/MasajeDescontracturante.png",
    categoria: "Relajación Total",
    masInfo:
      "Libera la tensión muscular y alivia el estrés con nuestro masaje descontracturante. Nuestros terapeutas utilizarán técnicas efectivas para eliminar las contracturas y restablecer el equilibrio en tu cuerpo. Los precios varían según la duración del masaje. Ven y recupera tu bienestar físico y mental.",
  },
  {
    servicio: "Cacao rejuvenecedor",
    descripcion:
      "Recupérate después del ejercicio con nuestro masaje especializado. Un cuidado óptimo para deportistas.",
    precio: "Desde $70 (dependiendo de la duración)",
    palabras_clave: ["Masaje", "deportivo", "recuperación", "ejercicio"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/RelajacionTotal/CacaoRejuvenecedor.png",
    categoria: "Relajación Total",
    masInfo:
      "Optimiza tu recuperación después del ejercicio con nuestro masaje deportivo especializado. Nuestros terapeutas utilizarán técnicas específicas para aliviar la tensión muscular, reducir la fatiga y mejorar la circulación. Los precios varían según la duración del masaje. Ven y experimenta un cuidado óptimo para tu cuerpo de deportista.",
  },
  {
    servicio: "Reflexología podal",
    descripcion:
      "Estimula puntos específicos en los pies para mejorar tu bienestar general. Bienestar a través de los pies.",
    precio: "Desde $40 (dependiendo de la duración)",
    palabras_clave: ["Reflexología", "podal", "pies", "bienestar"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/RelajacionTotal/ReflexologiaPodal.jpg",
    categoria: "Relajación Total",
    masInfo:
      "Experimenta el bienestar a través de tus pies con nuestra reflexología podal. Estimulamos puntos específicos en los pies que se corresponden con diferentes áreas del cuerpo para promover la relajación, aliviar el estrés y mejorar tu bienestar general. Los precios varían según la duración del tratamiento. Ven y déjate llevar por una experiencia de relajación profunda.",
  },
  {
    servicio: "Piedras Volcanicas",
    descripcion:
      "Disfruta de los beneficios terapéuticos de los aceites esenciales. Un viaje de aromas relajantes.",
    precio: "Desde $50 (dependiendo de la duración)",
    palabras_clave: ["Aromaterapia", "aceites esenciales", "terapéutico"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/RelajacionTotal/PiedrasVolcanicas.png",
    categoria: "Relajación Total",
    masInfo:
      "Sumérgete en un viaje de aromas relajantes con nuestra aromaterapia. Los aceites esenciales cuidadosamente seleccionados te brindarán beneficios terapéuticos, mejorando tu bienestar físico y emocional. Los precios varían según la duración de la sesión. Ven y disfruta de una experiencia sensorial que estimulará tus sentidos y promoverá la relajación profunda.",
  },
  {
    servicio: "Baño de vapor",
    descripcion:
      "Elimina toxinas y relaja los músculos. Una experiencia revitalizante para tu cuerpo.",
    precio: "Desde $30 (dependiendo de la duración)",
    palabras_clave: ["Baño de vapor", "toxinas", "relajación"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/RelajacionTotal/BañoDeVapor.png",
    categoria: "Relajación Total",
    masInfo:
      "Renueva tu cuerpo y mente con nuestro baño de vapor. El calor y la humedad eliminarán las toxinas de tu cuerpo, aliviarán la tensión muscular y te brindarán una experiencia de relajación profunda. Los precios varían según la duración del baño de vapor. Ven y déjate envolver por la sensación revitalizante de nuestro baño de vapor.",
  },
  {
    servicio: "Tratamiento Capilar",
    descripcion:
      "Mejora la circulación y fortalece el sistema inmunológico. Un momento de purificación y relajación.",
    precio: "Desde $30 (dependiendo de la duración)",
    palabras_clave: ["Sauna", "circulación", "sistema inmunológico"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/RelajacionTotal/TratamientoCapilar.png",
    categoria: "Relajación Total",
    masInfo:
      "Sumérgete en nuestra sauna y disfruta de un momento de purificación y relajación. El calor seco mejorará tu circulación, ayudará a eliminar toxinas y fortalecerá tu sistema inmunológico. Los precios varían según la duración de la sesión de sauna. Ven y experimenta los beneficios para la salud y el bienestar que ofrece nuestra sauna.",
  },
  {
    servicio: "Ritual del amor",
    descripcion:
      "Relaja los músculos y mejora la circulación. Un baño revitalizante para tu cuerpo.",
    precio: "Desde $40 (dependiendo de la duración)",
    palabras_clave: ["Hidromasaje", "músculos", "circulación"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/RelajacionTotal/RitualDelAmorParejas.png",
    categoria: "Relajación Total",
    masInfo:
      "Sumérgete en un baño revitalizante con nuestro hidromasaje. Los chorros de agua y las burbujas te brindarán un masaje relajante, aliviarán la tensión muscular y mejorarán la circulación. Los precios varían según la duración del hidromasaje. Ven y disfruta de un momento de relajación y renovación para tu cuerpo.",
  },
  {
    servicio: "Maquillaje natural",
    descripcion:
      "Luce un maquillaje fresco y natural para el día a día. Destaca tu belleza auténtica.",
    precio: "$40+ (dependiendo del estilo y complejidad)",
    palabras_clave: ["Piel", "rostro", "maquillaje", "natural"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/Maquillaje/MaquillajeNatural.png",
    categoria: "Maquillaje Profesional",
    masInfo:
      "Si buscas un look fresco y natural para tu día a día, nuestro servicio de maquillaje natural es perfecto para ti. Destaca tu belleza auténtica con un maquillaje que resalte tus rasgos sin aparentar maquillaje excesivo. Nuestros maquilladores profesionales utilizarán productos de alta calidad para lograr un acabado impecable y duradero. Ven y descubre cómo puedes lucir radiante con un maquillaje natural y fresco.",
  },
  {
    servicio: "Maquillaje glamoroso",
    descripcion:
      "Deslumbra en eventos especiales con un maquillaje de alta calidad. ¡Brilla con confianza!",
    precio: "$50+ (dependiendo del estilo y complejidad)",
    palabras_clave: ["Piel", "rostro", "maquillaje", "glamoroso"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/maquillaje/MaquillajeGlamuroso.png",
    categoria: "Maquillaje Profesional",
    masInfo:
      "Si tienes un evento especial y quieres deslumbrar, nuestro servicio de maquillaje glamoroso es ideal para ti. Nuestros maquilladores profesionales te ayudarán a crear un look de alta calidad que te hará brillar con confianza. Utilizamos productos de maquillaje de primer nivel y técnicas avanzadas para lograr un resultado impactante y duradero. Ven y descubre cómo un maquillaje glamoroso puede elevar tu estilo y hacer que te sientas segura y radiante.",
  },
  {
    servicio: "Maquillaje de novia",
    descripcion:
      "Luce radiante en tu día especial con un maquillaje personalizado. Un look inolvidable.",
    precio: "$100+ (dependiendo del estilo y complejidad)",
    palabras_clave: ["Piel", "rostro", "maquillaje", "novia"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/maquillaje/MaquillajeNovia.png",
    categoria: "Maquillaje Profesional",
    masInfo:
      "En tu día de boda, quieres lucir radiante y deslumbrante. Nuestro servicio de maquillaje de novia está diseñado para crear un look personalizado que resalte tu belleza en este día especial. Nuestros maquilladores profesionales trabajarán contigo para crear un maquillaje que refleje tu estilo y realce tus mejores rasgos. Utilizamos productos de larga duración para asegurarnos de que tu maquillaje se mantenga impecable durante todo el evento. Ven y descubre cómo un maquillaje de novia puede hacer que te sientas hermosa e inolvidable en tu gran día.",
  },
  {
    servicio: "Maquillaje de noche",
    descripcion:
      "Consigue un look impactante para salidas nocturnas. Un maquillaje de alto impacto.",
    precio: "$50+ (dependiendo del estilo y complejidad)",
    palabras_clave: ["Piel", "rostro", "maquillaje", "noche"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/maquillaje/MaquillajeDeNoche.png",
    categoria: "Maquillaje Profesional",
    masInfo:
      "Si quieres destacar en tus salidas nocturnas, nuestro servicio de maquillaje de noche es perfecto para ti. Nuestros maquilladores profesionales te ayudarán a crear un look impactante y de alto impacto que resalte tus mejores rasgos. Utilizamos productos de maquillaje de calidad y técnicas avanzadas para lograr un resultado deslumbrante. Ven y descubre cómo un maquillaje de noche puede transformar tu apariencia y hacer que brilles en cualquier evento nocturno.",
  },
  {
    servicio: "Maquillaje para hombres",
    descripcion:
      "Mejora tu apariencia con un maquillaje discreto y natural. Destaca tu mejor versión.",
    precio: "$40+ (dependiendo del estilo y complejidad)",
    palabras_clave: ["Piel", "rostro", "maquillaje", "hombres"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/Maquillaje/MaquillajeParaHombres.jpg",
    categoria: "Maquillaje Profesional",
    masInfo:
      "El maquillaje no es solo para mujeres. Nuestro servicio de maquillaje para hombres está diseñado para mejorar tu apariencia de manera discreta y natural. Ya sea que necesites cubrir imperfecciones, resaltar tus rasgos o darle un toque de frescura a tu rostro, nuestros maquilladores profesionales te brindarán un servicio personalizado y adaptado a tus necesidades. Descubre cómo un maquillaje discreto y natural puede resaltar tu mejor versión y hacerte sentir más confiado.",
  },
  {
    servicio: "Clase de automaquillaje",
    descripcion:
      "Aprende a maquillarte como un profesional. Descubre tus habilidades de maquillaje.",
    precio: "$50+ (dependiendo del contenido y duración)",
    palabras_clave: ["Maquillaje", "clase", "automaquillaje"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/maquillaje/ClaseDeAutomaquillaje.jpg",
    categoria: "Maquillaje Profesional",
    masInfo:
      "Si quieres aprender a maquillarte como un profesional y descubrir tus habilidades de maquillaje, nuestra clase de automaquillaje es perfecta para ti. Nuestros maquilladores profesionales te enseñarán las técnicas y trucos necesarios para lograr diferentes looks de maquillaje. Aprenderás a aplicar productos de manera adecuada, mezclar colores, resaltar tus rasgos y mucho más. Ven y descubre cómo puedes desarrollar tus habilidades de maquillaje y crear looks increíbles por ti mismo.",
  },
  {
    servicio: "Afeitado clásico",
    descripcion:
      "El afeitado clásico es un tratamiento tradicional y meticuloso que se realiza utilizando una navaja de afeitar afilada.",
    precio: "$15",
    palabras_clave: ["Barberia", "rostro", "barba"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/barberia/AfeitadoClásico.png",
    categoria: "Barberia",
    masInfo:
      "Comienza con la aplicación de productos pre-afeitado para suavizar la piel y levantar los vellos. Luego, se aplica una crema de afeitar espumosa y se realiza el afeitado con precisión, siguiendo la dirección del crecimiento del vello. Se finaliza con la aplicación de productos para calmar y refrescar la piel, dejándola suave y libre de vello",
  },
  {
    servicio: "Corte de barba",
    descripcion:
      "El corte de barba es un servicio en el que se recorta y da forma a la barba para lograr un estilo deseado.  El corte de barba ofrece un aspecto pulido y bien cuidado.",
    precio: "$10",
    palabras_clave: ["Barberia", "rostro", "barba", "corte"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/barberia/CorteBarba.png",
    categoria: "Barberia",
    masInfo:
      "Un barbero experto utiliza tijeras, recortadoras o navajas de afeitar para cortar los vellos en longitud uniforme y definir la forma de la barba. Se puede ajustar la línea de la barba, eliminar vellos sueltos y desiguales, y crear contornos limpios.",
  },
  {
    servicio: "Recorte de barba",
    descripcion:
      "El recorte de barba se enfoca en mantener y dar forma a una barba ya existente. El recorte de barba es ideal para mantener una barba prolija y bien arreglada, sin perder su forma o volumen.",
    precio: "$15",
    palabras_clave: ["Barberia", "rostro", "barba", "corte"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/barberia/RecorteBarba.png",
    categoria: "Barberia",
    masInfo:
      "Se recortan los vellos para mantener una longitud uniforme y eliminar las puntas abiertas. También se ajustan los contornos de la barba para mantener una apariencia definida.",
  },
  {
    servicio: "Tratamiento de acondicionamiento de barba",
    descripcion:
      "El tratamiento de acondicionamiento de barba se centra en hidratar y nutrir el cabello facial, así como la piel debajo de la barba. También ayuda a prevenir la picazón y la irritación de la piel, promoviendo una barba más saludable y con aspecto revitalizado. Este tratamiento es especialmente beneficioso para barbas largas o ásperas.",
    precio: "$15",
    palabras_clave: ["Barberia", "rostro", "barba", "tratamiento"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/barberia/AcondicionamientoBarba.png",
    categoria: "Barberia",
    masInfo:
      "Se recortan los vellos para mantener una longitud uniforme y eliminar las puntas abiertas. También se ajustan los contornos de la barba para mantener una apariencia definida.",
  },
  {
    servicio: "Afeitado de Contornos",
    descripcion:
      "El afeitado de contornos se enfoca en definir y dar forma a los bordes de la barba y el vello facial. Este tratamiento resalta los rasgos faciales y proporciona un acabado pulido y bien definido a la barba.",
    precio: "$5",
    palabras_clave: ["Barberia", "rostro", "barba", "afeitar"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/barberia/AfeitadoContornos.png",
    categoria: "Barberia",
    masInfo:
      "Se utiliza una navaja de afeitar o recortadora para recortar los vellos en las áreas del cuello, mejillas y líneas de la mandíbula, creando contornos nítidos y limpios.",
  },
  {
    servicio: "Tinte de barba",
    descripcion:
      "El tinte de barba es un procedimiento en el que se aplica color a la barba para modificar su tono o cubrir canas.El tinte de barba puede resaltar y definir el estilo de la barba, creando un aspecto más uniforme y bien cuidado. Es una opción popular para aquellos que desean un cambio de color o desean disimular las canas en la barba.",
    precio: "$15",
    palabras_clave: ["Barberia", "rostro", "barba", "tinte"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/barberia/TinteBarba.png",
    categoria: "Barberia",
    masInfo:
      "Se utiliza una navaja de afeitar o recortadora para recortar los vellos en las áreas del cuello, mejillas y líneas de la mandíbula, creando contornos nítidos y limpios.",
  },
  {
    servicio: "Depilación con cera caliente",
    descripcion:
      "Retirar el vello con cera es uno de los tipos de depilación más comunes y con óptimos resultados, de ahí su popularidad, pese a que el proceso resulta un poco doloroso, se extrae el vello desde la raíz, por eso tarda más en salir y cuando vuelve a nacer, es más fino.",
    precio: "$35",
    palabras_clave: ["dapilación", "cuerpo", "pierna", "piel"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/depilacion/DepilacionCeraCaliente.png",
    categoria: "Depilación",
    masInfo:
      "Consiste en aplicar cera caliente en la zona del cuerpo donde se desea eliminar el vello, ya que las altas temperaturas abren los poros con facilidad.",
  },
  {
    servicio: "Depilación con cera tibia",
    descripcion:
      "Se utiliza de la misma forma que la cera caliente pero sus componentes son diversos, con sustancias como la miel o la manzanilla para tratar la piel lo más suave posible.",
    precio: "$30",
    palabras_clave: ["dapilación", "cuerpo", "pierna", "piel"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/depilacion/DepilacionCeraTibia.png",
    categoria: "Depilación",
    masInfo:
      "Se elimina con la ayuda de tiras de algodón y luego con ayuda de agua tibía se procede a retirar los excesos.",
  },

  {
    servicio: "Depilación Láser",
    descripcion:
      "Eliminar el vello con láser de manera definitiva es otro de los tipos de depilación más populares. Vale aclarar que se requiere más de una sesión con láser para lograr que el vello deje de crecer, a estas se les llama sesiones de mantenimiento. Este tratamiento se aplica en diferentes áreas del cuerpo.",
    precio: "$90",
    palabras_clave: ["dapilación", "laser", "pierna", "piel"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/depilacion/DepilacionLaser.png",
    categoria: "Depilación",
    masInfo:
      " Se utiliza un láser para tratar los folículos pilosos de la piel, solo que a diferencia de la depilación eléctrica, aquí se emplea calor para ocasionar el daño en el folículo.",
  },
  {
    servicio: "Depilación Eléctrica",
    descripcion:
      "Una de las formas de depilación más eficaz que existe cuando se busca eliminar de manera definitiva el vello. Aunque se puede aplicar en cualquier zona del cuerpo, se recomienda para eliminar el vello facial.",
    precio: "$100",
    palabras_clave: ["dapilación", "cuerpo", "pierna", "piel"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/depilacion/DepilacionElectrica.png",
    categoria: "Depilación",
    masInfo:
      "Esta y consiste en introducir una microaguja en los poros, donde se aplica una pequeña descarga eléctrica para destruir el folículo piloso. Esto hace que pierda su capacidad de regenerarse.",
  },

  {
    servicio: "Depilación con Crema Depilatoria",
    descripcion:
      "Aunque se utilice el término genérico de cremas, nuestro proceso es implemantado en forma de espuma y gel. Nuestros productos contienen sustancias como miel y proteinas de la leche.",
    precio: "$30",
    palabras_clave: ["dapilación", "cuerpo", "pierna", "piel"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/depilacion/DepilacionCrema.png",
    categoria: "Depilación",
    masInfo:
      "Esta y consiste en introducir una microaguja en los poros, donde se aplica una pequeña descarga eléctrica para destruir el folículo piloso. Esto hace que pierda su capacidad de regenerarse.",
  },

  {
    servicio: "Depilación con hilo",
    descripcion:
      "Es uno de los métodos de depilación más antiguos que existen y es apto para todo tipo de piel. La ventaja de esta técnica consiste en que es mucho menos dolorosa e invasiva. Por esa razón, es la más recomendada para el cuidado personal. Comúnmente se emplea para darle forma a las cejas.",
    precio: "$15",
    palabras_clave: ["dapilación", "cejas", "vello", "piel"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/miradaPerfecta/DepilacionHilo.png",
    categoria: "Mirada Perfecta",
    masInfo:
      "Se emplea hilo de algodón o seda para enroscar una línea de vello y así se arranca desde la raíz.",
  },
  {
    servicio: "Carboxiterapia",
    descripcion:
      "Un modo de oxigenar y revitalizar los tejidos de la región periocular es la carboxiterapia. Este tratamiento es idóneo para las ojeras moradas, a las que se les inyecta dióxido de carbono medicinal.",
    precio: "$100",
    palabras_clave: ["mirada", "cejas", "ojos", "rejuvenecimiento"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/miradaPerfecta/Carboxiterapia.png",
    categoria: "Mirada Perfecta",
    masInfo:
      "El resultado es la estimulación de las células que crean colágeno y el drenaje de toxinas. La ejecución es simple y de rápida recuperación.",
  },
  {
    servicio: "Ultherapy",
    descripcion:
      "Si de rejuvenecer la mirada se trata, entonces la alternativa se llama ultherapy. Aparte de la capacidad tensora, el procedimiento eleva las cejas y cambia la apariencia de mirada cansada. Los resultados se extienden hasta un año.",
    precio: "$120",
    palabras_clave: ["mirada", "cejas", "ojos", "rejuvenecimiento"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/miradaPerfecta/Ultherapy.png",
    categoria: "Mirada Perfecta",
    masInfo:
      "Con energía de ultrasonido microfocalizada se calientan los tejidos profundos del contorno de los ojos. Al producirse una termorregulación, comienza la reparación.",
  },
  {
    servicio: "Hilos tensores",
    descripcion:
      "Los hilos tensores son empleados por los cirujanos plásticos para eliminar la flacidez en los pómulos y las ojeras.",
    precio: "$200",
    palabras_clave: ["mirada", "cejas", "ojos", "rejuvenecimiento"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/miradaPerfecta/HilosTensores.png",
    categoria: "Mirada Perfecta",
    masInfo:
      "Son suturas de sujeción interna, introducidas en la zona temporal, de manera que se mantengan ocultas detrás del cabello.",
  },
  {
    servicio: "Radiofrecuencia BeOxy",
    descripcion:
      "Para atenuar las arrugas y las ojeras, prueba los parches BeOxy con radiofrecuencia. El efecto tensor es instantáneo. También hidrata, activa las fibras de colágeno, beneficia la circulación, oxigena y promueve la formación de glucosamina que aumenta el grosor de la piel.",
    precio: "$130",
    palabras_clave: ["mirada", "cejas", "ojos", "rejuvenecimiento"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/miradaPerfecta/RadiofrecuenciaBeOxy.png",
    categoria: "Mirada Perfecta",
    masInfo:
      " La técnica inicia con la limpieza del área y el suministro de un sérum, para luego conectar el equipo y poner los parches. Por último, el esteticista esparce un contorno antiage.",
  },
  {
    servicio: "Toxina botulínica",
    descripcion:
      "Llamada popularmente bótox, es de los tratamientos cosméticos más frecuentes para alisar el rostro. La función de la toxina botulínica es invisibilizar las arrugas.",
    precio: "$150",
    palabras_clave: ["mirada", "cejas", "ojos", "rejuvenecimiento"],
    img: "/src/assets/seccionesImagenes/categorias/servicios/miradaPerfecta/ToxinaBotulínica.png",
    categoria: "Mirada Perfecta",
    masInfo:
      "Con inyecciones moderadas mejoras el aspecto del contorno de los ojos. Es un procedimiento mínimamente doloroso y realizable en pocos minutos. Los resultados duran hasta 6 meses.",
  },
];

export let turnos = {};
