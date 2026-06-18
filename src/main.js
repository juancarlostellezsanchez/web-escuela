/* ==========================================================================
   ESCUELA 0736 QUETZALCÓATL - LÓGICA PRINCIPAL (JAVASCRIPT)
   Enrutador SPA, Carrusel, Catálogo de Materias, Portal Alumno y Portal Maestro
   ========================================================================== */

// 1. ESTRUCTURAS DE DATOS DE LA APLICACIÓN

// Catálogo General de Materias (Para la sección pública)
const CATALOGO_MATERIAS = [
  {
    id: "mat",
    title: "Matemáticas",
    category: "ciencias",
    level: "Todos los niveles",
    hours: 5,
    type: "Obligatoria",
    desc: "Desarrollo del pensamiento lógico matemático, enfocado en álgebra, geometría y resolución de problemas prácticos.",
    objectives: [
      "Comprender conceptos matemáticos fundamentales.",
      "Resolver problemas mediante el pensamiento lógico.",
      "Aplicar matemáticas a situaciones de la vida real."
    ],
    teacher: {
      name: "Prof. Sergio Hernandez Benitez",
      degree: "Profesor de Matemáticas",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    }
  },
  {
    id: "esp",
    title: "Español",
    category: "humanidades",
    level: "Todos los niveles",
    hours: 5,
    type: "Obligatoria",
    desc: "Estudio de la lengua materna, comprensión lectora, redacción y literatura enfocada en desarrollar habilidades de comunicación efectiva.",
    objectives: [
      "Mejorar la ortografía y gramática.",
      "Desarrollar un hábito de lectura y comprensión crítica.",
      "Expresarse de forma clara de manera escrita y oral."
    ],
    teacher: {
      name: "Profa. Corina Magañan Perez",
      degree: "Profesora de Español",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
    }
  },
  {
    id: "quim",
    title: "Química",
    category: "ciencias",
    level: "3° de Secundaria",
    hours: 4,
    type: "Obligatoria",
    desc: "Introducción a la ciencia que estudia la materia, sus propiedades, su composición y las transformaciones que experimenta.",
    objectives: [
      "Conocer la tabla periódica y elementos básicos.",
      "Entender reacciones químicas y sus aplicaciones.",
      "Realizar experimentos básicos y seguros."
    ],
    teacher: {
      name: "Prof. Ruben Gonzalez",
      degree: "Profesor de Química",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    }
  },
  {
    id: "ig",
    title: "Igualdades de Género",
    category: "humanidades",
    level: "Todos los niveles",
    hours: 2,
    type: "Obligatoria",
    desc: "Fomento de la equidad, el respeto y la construcción de relaciones sanas entre todas las personas, rompiendo estereotipos de género.",
    objectives: [
      "Promover la igualdad y no discriminación.",
      "Comprender la importancia del respeto mutuo.",
      "Desarrollar relaciones saludables y equitativas."
    ],
    teacher: {
      name: "Prof. Ricardo Manzano",
      degree: "Profesor de Igualdad y Equidad",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    }
  },
  {
    id: "ef",
    title: "Educación Física",
    category: "artes",
    level: "Todos los niveles",
    hours: 2,
    type: "Obligatoria",
    desc: "Desarrollo motriz, acondicionamiento físico, deportes y promoción de un estilo de vida activo y saludable.",
    objectives: [
      "Mejorar la condición física general.",
      "Aprender fundamentos de diferentes deportes.",
      "Fomentar el trabajo en equipo y la disciplina."
    ],
    teacher: {
      name: "Prof. Victor",
      degree: "Profesor de Educación Física",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    }
  },
  {
    id: "tut",
    title: "Tutoría",
    category: "humanidades",
    level: "Todos los niveles",
    hours: 1,
    type: "Obligatoria",
    desc: "Acompañamiento socioemocional y académico para el bienestar integral de los estudiantes, apoyándolos en su desarrollo personal.",
    objectives: [
      "Brindar seguimiento académico personalizado.",
      "Fomentar habilidades socioemocionales.",
      "Ayudar en la orientación vocacional y toma de decisiones."
    ],
    teacher: {
      name: "Profa. Alejandra Hernandez",
      degree: "Tutora",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
    }
  },
  {
    id: "tec",
    title: "Tecnología",
    category: "tecnologia",
    level: "Todos los niveles",
    hours: 3,
    type: "Obligatoria",
    desc: "Introducción a las herramientas tecnológicas, ofimática y principios básicos de creación técnica aplicados al entorno escolar.",
    objectives: [
      "Usar herramientas digitales de forma productiva.",
      "Conocer el funcionamiento básico de sistemas técnicos.",
      "Desarrollar proyectos tecnológicos sencillos."
    ],
    teacher: {
      name: "Profa. Abigail Eunice Martinez Ramirez",
      degree: "Profesora de Tecnología",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
    }
  },
  {
    id: "hist",
    title: "Historia",
    category: "humanidades",
    level: "Todos los niveles",
    hours: 3,
    type: "Obligatoria",
    desc: "Análisis del pasado de México y el mundo para comprender nuestro presente, fomentando el pensamiento crítico.",
    objectives: [
      "Comprender los principales procesos históricos.",
      "Desarrollar pensamiento crítico y análisis de fuentes.",
      "Valorar el patrimonio histórico y cultural."
    ],
    teacher: {
      name: "Profa. Patricia",
      degree: "Profesora de Historia",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150"
    }
  },
  {
    id: "art",
    title: "Artes",
    category: "artes",
    level: "Todos los niveles",
    hours: 2,
    type: "Obligatoria",
    desc: "Expresión creativa a través de la música, pintura, danza o teatro, desarrollando la sensibilidad artística de los jóvenes.",
    objectives: [
      "Experimentar con diferentes técnicas artísticas.",
      "Desarrollar creatividad e imaginación.",
      "Apreciar diferentes manifestaciones culturales."
    ],
    teacher: {
      name: "Profa. Patricia",
      degree: "Profesora de Artes",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150"
    }
  },
  {
    id: "ing",
    title: "Inglés",
    category: "humanidades",
    level: "Todos los niveles",
    hours: 3,
    type: "Obligatoria",
    desc: "Aprendizaje de una segunda lengua como herramienta de comunicación global, centrado en vocabulario, gramática y práctica conversacional.",
    objectives: [
      "Desarrollar habilidades de escucha y pronunciación.",
      "Aprender vocabulario y gramática básica e intermedia.",
      "Expresarse en situaciones cotidianas en inglés."
    ],
    teacher: {
      name: "Profa. Amalia Hernandez",
      degree: "Profesora de Inglés",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
    }
  },
  {
    id: "fce",
    title: "Formación Cívica y Ética",
    category: "humanidades",
    level: "Todos los niveles",
    hours: 2,
    type: "Obligatoria",
    desc: "Reflexión sobre valores cívicos, derechos humanos y responsabilidades ciudadanas para formar personas íntegras y participativas.",
    objectives: [
      "Conocer los derechos y deberes ciudadanos.",
      "Fomentar la participación cívica y ética.",
      "Resolver conflictos de manera pacífica y dialogada."
    ],
    teacher: {
      name: "Profa. Lucia Juarez Salinas",
      degree: "Profesora de Formación Cívica",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
    }
  }
];

// Datos del Alumno Demo que inicia sesión
const ESTUDIANTE_ACTIVO = {
  email: "alumno@liceo.edu",
  nombre: "Santiago Ortega Gómez",
  grado: "3° de Secundaria",
  grupo: "A",
  promedio: 9.0,
  asistencias: "95%",
  reportes: 0,
  materiasCursadas: [
    {
      id: "mat",
      title: "Matemáticas",
      code: "MAT-301",
      grade: 9.0,
      p1: 8.8,
      p2: 9.2,
      p3: 9.0,
      homework: 9.2,
      project: 9.0,
      participation: 9,
      attendance: "96%",
      progress: 88,
      teacherId: "sergio-hernandez",
      teacherName: "Prof. Sergio Hernandez Benitez",
      teacherImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
      hours: "5 hrs/sem"
    },
    {
      id: "esp",
      title: "Español",
      code: "ESP-302",
      grade: 10.0,
      p1: 10.0,
      p2: 10.0,
      p3: 10.0,
      homework: 10.0,
      project: 10.0,
      participation: 10,
      attendance: "98%",
      progress: 95,
      teacherId: "corina-maganan",
      teacherName: "Profa. Corina Magañan Perez",
      teacherImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
      hours: "5 hrs/sem"
    },
    {
      id: "quim",
      title: "Química",
      code: "QUI-301",
      grade: 8.5,
      p1: 8.0,
      p2: 9.0,
      p3: 8.5,
      homework: 8.5,
      project: 8.5,
      participation: 9,
      attendance: "92%",
      progress: 80,
      teacherId: "ruben-gonzalez",
      teacherName: "Prof. Ruben Gonzalez",
      teacherImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      hours: "4 hrs/sem"
    },
    {
      id: "ig",
      title: "Igualdades de Género",
      code: "IGE-303",
      grade: 9.5,
      p1: 9.6,
      p2: 9.4,
      p3: 9.5,
      homework: 9.5,
      project: 9.5,
      participation: 10,
      attendance: "94%",
      progress: 90,
      teacherId: "ricardo-manzano",
      teacherName: "Prof. Ricardo Manzano",
      teacherImg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
      hours: "2 hrs/sem"
    },
    {
      id: "ef",
      title: "Educación Física",
      code: "EFI-301",
      grade: 10.0,
      p1: 10.0,
      p2: 10.0,
      p3: 10.0,
      homework: 10.0,
      project: 10.0,
      participation: 10,
      attendance: "96%",
      progress: 85,
      teacherId: "victor",
      teacherName: "Prof. Victor",
      teacherImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
      hours: "2 hrs/sem"
    },
    {
      id: "tut",
      title: "Tutoría",
      code: "TUT-301",
      grade: 9.5,
      p1: 9.5,
      p2: 9.5,
      p3: 9.5,
      homework: 9.5,
      project: 9.5,
      participation: 10,
      attendance: "100%",
      progress: 95,
      teacherId: "alejandra-hernandez",
      teacherName: "Profa. Alejandra Hernandez",
      teacherImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
      hours: "1 hrs/sem"
    },
    {
      id: "tec",
      title: "Tecnología",
      code: "TEC-301",
      grade: 8.5,
      p1: 8.0,
      p2: 9.0,
      p3: 8.5,
      homework: 8.5,
      project: 8.5,
      participation: 8,
      attendance: "90%",
      progress: 85,
      teacherId: "abigail-martinez",
      teacherName: "Profa. Abigail Eunice Martinez Ramirez",
      teacherImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
      hours: "3 hrs/sem"
    },
    {
      id: "hist",
      title: "Historia",
      code: "HIS-301",
      grade: 9.0,
      p1: 8.8,
      p2: 9.2,
      p3: 9.0,
      homework: 9.0,
      project: 9.0,
      participation: 9,
      attendance: "95%",
      progress: 90,
      teacherId: "patricia-hist",
      teacherName: "Profa. Patricia",
      teacherImg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
      hours: "3 hrs/sem"
    },
    {
      id: "art",
      title: "Artes",
      code: "ART-301",
      grade: 10.0,
      p1: 10.0,
      p2: 10.0,
      p3: 10.0,
      homework: 10.0,
      project: 10.0,
      participation: 10,
      attendance: "100%",
      progress: 100,
      teacherId: "patricia-art",
      teacherName: "Profa. Patricia",
      teacherImg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
      hours: "2 hrs/sem"
    },
    {
      id: "ing",
      title: "Inglés",
      code: "ING-301",
      grade: 9.5,
      p1: 9.6,
      p2: 9.4,
      p3: 9.5,
      homework: 9.5,
      project: 9.5,
      participation: 10,
      attendance: "98%",
      progress: 95,
      teacherId: "amalia-hernandez",
      teacherName: "Profa. Amalia Hernandez",
      teacherImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
      hours: "3 hrs/sem"
    },
    {
      id: "fce",
      title: "Formación Cívica y Ética",
      code: "FCE-301",
      grade: 5.5,
      p1: 5.0,
      p2: 6.0,
      p3: 5.5,
      homework: 5.5,
      project: 5.0,
      participation: 6,
      attendance: "92%",
      progress: 55,
      teacherId: "lucia-juarez",
      teacherName: "Profa. Lucia Juarez Salinas",
      teacherImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
      hours: "2 hrs/sem"
    }
  ],
  profesores: [
    {
      id: "sergio-hernandez",
      name: "Prof. Sergio Hernandez Benitez",
      subject: "Matemáticas",
      email: "s.hernandez@escuela0736.edu.mx",
      ratingAvg: 4.6,
      ratingCount: 42,
      userRating: 0,
      userComment: "",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: "corina-maganan",
      name: "Profa. Corina Magañan Perez",
      subject: "Español",
      email: "c.maganan@escuela0736.edu.mx",
      ratingAvg: 4.8,
      ratingCount: 38,
      userRating: 0,
      userComment: "",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: "ruben-gonzalez",
      name: "Prof. Ruben Gonzalez",
      subject: "Química",
      email: "r.gonzalez@escuela0736.edu.mx",
      ratingAvg: 4.5,
      ratingCount: 50,
      userRating: 0,
      userComment: "",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: "ricardo-manzano",
      name: "Prof. Ricardo Manzano",
      subject: "Igualdades de Género",
      email: "r.manzano@escuela0736.edu.mx",
      ratingAvg: 4.9,
      ratingCount: 29,
      userRating: 0,
      userComment: "",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: "victor",
      name: "Prof. Victor",
      subject: "Educación Física",
      email: "victor@escuela0736.edu.mx",
      ratingAvg: 4.7,
      ratingCount: 55,
      userRating: 0,
      userComment: "",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: "alejandra-hernandez",
      name: "Profa. Alejandra Hernandez",
      subject: "Tutoría",
      email: "a.hernandez@escuela0736.edu.mx",
      ratingAvg: 4.8,
      ratingCount: 35,
      userRating: 0,
      userComment: "",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: "abigail-martinez",
      name: "Profa. Abigail Eunice Martinez Ramirez",
      subject: "Tecnología",
      email: "a.martinez@escuela0736.edu.mx",
      ratingAvg: 4.6,
      ratingCount: 40,
      userRating: 0,
      userComment: "",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: "patricia-hist",
      name: "Profa. Patricia",
      subject: "Historia",
      email: "patricia.h@escuela0736.edu.mx",
      ratingAvg: 4.7,
      ratingCount: 45,
      userRating: 0,
      userComment: "",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: "patricia-art",
      name: "Profa. Patricia",
      subject: "Artes",
      email: "patricia.a@escuela0736.edu.mx",
      ratingAvg: 4.9,
      ratingCount: 50,
      userRating: 0,
      userComment: "",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: "amalia-hernandez",
      name: "Profa. Amalia Hernandez",
      subject: "Inglés",
      email: "amalia.h@escuela0736.edu.mx",
      ratingAvg: 4.8,
      ratingCount: 38,
      userRating: 0,
      userComment: "",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: "lucia-juarez",
      name: "Profa. Lucia Juarez Salinas",
      subject: "Formación Cívica y Ética",
      email: "l.juarez@escuela0736.edu.mx",
      ratingAvg: 4.7,
      ratingCount: 42,
      userRating: 0,
      userComment: "",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
    }
  ]
};

// Datos del Maestro Demo que inicia sesión
const DOCENTE_ACTIVO = {
  email: "maestro@liceo.edu",
  nombre: "Prof. Sergio Hernandez Benitez",
  departamento: "Ciencias Exactas",
  materiasAsignadas: [
    {
      materiaId: "mat",
      title: "Matemáticas",
      code: "MAT-301",
      hours: "5 hrs/sem",
      schedule: "Lun/Mar/Jue/Vie 08:30",
      studentCount: 5,
      alumnos: [
        { id: "al-1", name: "Santiago Ortega Gómez",  matricula: "LB-24089", p1: 10.0, p2: 10.0, p3: 10.0, homework: 10.0, project: 10.0, attendance: "98%", generalGrade: 10.0, participation: 10 },
        { id: "al-2", name: "Valentina Paz Mendoza",  matricula: "LB-24102", p1: 9.0,  p2: 9.5,  p3: 9.0,  homework: 9.5,  project: 9.0,  attendance: "95%", generalGrade: 9.2,  participation: 9.2 },
        { id: "al-3", name: "Mateo Ruiz Torres",      matricula: "LB-24054", p1: 8.5,  p2: 9.0,  p3: 8.5,  homework: 9.0,  project: 8.5,  attendance: "91%", generalGrade: 8.8,  participation: 9.0 },
        { id: "al-4", name: "Isabella Herrera Vega",  matricula: "LB-24115", p1: 9.5,  p2: 10.0, p3: 9.8,  homework: 10.0, project: 9.5,  attendance: "99%", generalGrade: 9.8,  participation: 10.0 },
        { id: "al-5", name: "Sebastián Castro Lara",  matricula: "LB-24067", p1: 7.5,  p2: 8.0,  p3: 7.5,  homework: 8.0,  project: 7.5,  attendance: "89%", generalGrade: 7.9,  participation: 9.0 }
      ]
    },
    {
      materiaId: "mat2",
      title: "Matemáticas — 2° Grado",
      code: "MAT-201",
      hours: "5 hrs/sem",
      schedule: "Lun/Mar/Jue/Vie 10:30",
      studentCount: 5,
      alumnos: [
        { id: "al-6",  name: "Emiliano Salinas Cruz",   matricula: "LB-25031", p1: 8.0, p2: 8.5, p3: 8.5, homework: 9.0, project: 8.0, attendance: "96%", generalGrade: 8.5, participation: 9.0 },
        { id: "al-7",  name: "Camila Flores Ríos",      matricula: "LB-25044", p1: 9.0, p2: 9.0, p3: 9.0, homework: 9.0, project: 9.0, attendance: "93%", generalGrade: 9.0, participation: 9.0 },
        { id: "al-8",  name: "Rodrigo Méndez Peña",     matricula: "LB-25058", p1: 7.0, p2: 7.5, p3: 7.0, homework: 8.0, project: 7.5, attendance: "88%", generalGrade: 7.5, participation: 8.0 },
        { id: "al-9",  name: "Sofía Vargas Moreno",     matricula: "LB-25063", p1: 9.5, p2: 9.5, p3: 9.5, homework: 9.5, project: 9.5, attendance: "97%", generalGrade: 9.5, participation: 9.5 },
        { id: "al-10", name: "Diego Alvarado Jiménez",  matricula: "LB-25079", p1: 8.0, p2: 8.0, p3: 8.0, homework: 8.5, project: 8.0, attendance: "90%", generalGrade: 8.2, participation: 8.7 }
      ]
    },
    {
      materiaId: "mat1",
      title: "Matemáticas — 1° Grado",
      code: "MAT-101",
      hours: "5 hrs/sem",
      schedule: "Mié/Vie 12:00",
      studentCount: 5,
      alumnos: [
        { id: "al-11", name: "Andrea Bustamante Mora",  matricula: "LB-26011", p1: 9.5, p2: 10.0, p3: 10.0, homework: 10.0, project: 9.5, attendance: "100%", generalGrade: 9.8, participation: 10.0 },
        { id: "al-12", name: "Carlos Ibarra Soto",      matricula: "LB-26022", p1: 7.0, p2: 7.0,  p3: 7.0,  homework: 7.5,  project: 7.0,  attendance: "85%",  generalGrade: 7.2, participation: 7.7 },
        { id: "al-13", name: "Valeria Luna Espinoza",   matricula: "LB-26035", p1: 8.5, p2: 9.0,  p3: 8.5,  homework: 9.0,  project: 9.0,  attendance: "94%",  generalGrade: 8.9, participation: 9.4 },
        { id: "al-14", name: "Fernando Ríos Guzmán",    matricula: "LB-26047", p1: 8.0, p2: 8.0,  p3: 8.0,  homework: 8.5,  project: 8.5,  attendance: "91%",  generalGrade: 8.3, participation: 8.8 },
        { id: "al-15", name: "Daniela Núñez Ramírez",   matricula: "LB-26059", p1: 9.0, p2: 9.5,  p3: 9.5,  homework: 9.5,  project: 9.0,  attendance: "98%",  generalGrade: 9.4, participation: 9.9 }
      ]
    }
  ]
};;

// Datos del Administrador Demo
const ADMIN_DATA = {
  email: "admin@liceo.edu",
  nombre: "Administrador Sistema",
  password: "admin2026"
};

// Variable para rastrear la sesión (se guarda en memoria o localStorage del navegador)
let isLoggedIn = false;
let userRole = null; // 'alumno', 'maestro' o 'admin'
let userSessionData = null;

// ==========================================================================
// 2. ENRUTADOR DEL SITIO (SPA ROUTER)
// ==========================================================================

const SECTIONS = ["inicio", "nosotros", "catalogo", "contacto", "login", "portal", "portal-maestro", "portal-admin", "clase-virtual"];

function navigateTo(targetHash) {
  let cleanHash = targetHash.replace("#", "") || "inicio";
  
  // Seguridad de rutas: si intenta ir a portales y no está conectado
  if ((cleanHash === "portal" || cleanHash === "portal-maestro" || cleanHash === "portal-admin") && !isLoggedIn) {
    cleanHash = "login";
    window.location.hash = "login";
  }

  // Si está conectado, enviar al dashboard respectivo si entra a login
  if (cleanHash === "login" && isLoggedIn) {
    if (userRole === "alumno") cleanHash = "portal";
    else if (userRole === "maestro") cleanHash = "portal-maestro";
    else if (userRole === "admin") cleanHash = "portal-admin";
    window.location.hash = cleanHash;
  }

  // Bloqueo cruzado entre roles
  if (cleanHash === "portal" && userRole !== "alumno" && isLoggedIn) {
    cleanHash = userRole === "maestro" ? "portal-maestro" : "portal-admin";
    window.location.hash = cleanHash;
  }
  if (cleanHash === "portal-maestro" && userRole !== "maestro" && isLoggedIn) {
    cleanHash = userRole === "alumno" ? "portal" : "portal-admin";
    window.location.hash = cleanHash;
  }
  if (cleanHash === "portal-admin" && userRole !== "admin" && isLoggedIn) {
    cleanHash = userRole === "alumno" ? "portal" : "portal-maestro";
    window.location.hash = cleanHash;
  }

  // Activar la sección correspondiente
  SECTIONS.forEach(secId => {
    const el = document.getElementById(secId);
    if (el) {
      if (secId === cleanHash) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    }
  });

  // Actualizar menús de navegación activa
  updateActiveNavLink(cleanHash);

  // Subir scroll al tope
  window.scrollTo(0, 0);

  // Si la sección cargada es el Inicio, disparar contadores animados
  if (cleanHash === "inicio") {
    animateCounters();
  }

  // Cerrar menú móvil en cada navegación
  closeMobileMenu();
}

function updateActiveNavLink(activeSection) {
  // Desktop Nav Links
  const navLinks = document.querySelectorAll(".nav-link, .nav-btn-link");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href && href.replace("#", "") === activeSection) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Mobile Drawer Links
  const mobLinks = document.querySelectorAll(".mobile-nav-link, .mobile-nav-btn");
  mobLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href && href.replace("#", "") === activeSection) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Escuchador de navegación
window.addEventListener("hashchange", () => {
  navigateTo(window.location.hash);
});

// Carga inicial
window.addEventListener("DOMContentLoaded", () => {
  // Cargar estado de sesión guardado
  const savedSession = sessionStorage.getItem("liceo_student_session");
  const savedRole = sessionStorage.getItem("liceo_session_role");
  
  if (savedSession && savedRole) {
    isLoggedIn = true;
    userRole = savedRole;
    userSessionData = JSON.parse(savedSession);
    
    // Cargar datos guardados en LocalStorage según el rol
    if (userRole === "alumno") {
      const savedRatings = localStorage.getItem(`ratings_${userSessionData.email}`);
      if (savedRatings) {
        userSessionData.profesores = JSON.parse(savedRatings);
      }
      const savedStudentData = localStorage.getItem(`student_data_${userSessionData.email}`);
      if (savedStudentData) {
        const parsed = JSON.parse(savedStudentData);
        userSessionData.promedio = parsed.promedio;
        userSessionData.asistencias = parsed.asistencias;
        userSessionData.materiasCursadas = parsed.materiasCursadas;
      }
      renderStudentSubjects();
      renderStudentTeachersEvaluation();
      renderStudentDashboardHeader();
      renderStudentGradesSummary();
    } else if (userRole === "maestro") {
      const savedParticipation = localStorage.getItem(`participation_v2_${userSessionData.email}`);
      if (savedParticipation) {
        userSessionData.materiasAsignadas = JSON.parse(savedParticipation);
      }
      renderTeacherDashboard();
    } else if (userRole === "admin") {
      // Admin: load persisted lists from localStorage
      loadAdminData();
      renderAdminDashboard();
    }
    
    toggleHeaderPortalUI(true, userRole);
  }

  // Redirigir según hash o cargar Inicio
  navigateTo(window.location.hash || "#inicio");

  // Inicializar componentes
  initMobileMenu();
  initHeroSlider();
  initPublicCatalog();
  initContactForm();
  initLoginForm();
  initPortalSubTabs();
  initVirtualClassroom();
  initTeacherPDFDownload();
  initStudentPDFDownload();
});


// ==========================================================================
// 3. MENÚ DE NAVEGACIÓN MÓVIL
// ==========================================================================

const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileNavDrawer = document.getElementById("mobile-nav-drawer");
const hamburgerIcon = document.getElementById("hamburger-icon");

function initMobileMenu() {
  if (mobileMenuToggle && mobileNavDrawer) {
    mobileMenuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = mobileNavDrawer.style.display === "flex";
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Cerrar al dar click fuera
    document.addEventListener("click", (e) => {
      if (mobileNavDrawer && !mobileNavDrawer.contains(e.target) && e.target !== mobileMenuToggle) {
        closeMobileMenu();
      }
    });
  }
}

function openMobileMenu() {
  mobileNavDrawer.style.display = "flex";
  hamburgerIcon.className = "fa-solid fa-xmark";
}

function closeMobileMenu() {
  if (mobileNavDrawer) {
    mobileNavDrawer.style.display = "none";
    hamburgerIcon.className = "fa-solid fa-bars";
  }
}


// ==========================================================================
// 4. CARRUSEL HERO (IMAGE SLIDER)
// ==========================================================================

function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slider .slide");
  const dots = document.querySelectorAll(".hero-slider .dot");
  const prevBtn = document.getElementById("slider-btn-prev");
  const nextBtn = document.getElementById("slider-btn-next");
  
  if (slides.length === 0) return;

  // Ajustar la velocidad del video de fondo a 0.25x para mayor suavidad
  const bgVideo = document.querySelector(".hero-slider .slide-video-bg");
  if (bgVideo) {
    bgVideo.playbackRate = 0.25;
  }

  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    if (slideInterval) clearInterval(slideInterval);
  }

  if (nextBtn) nextBtn.addEventListener("click", () => { nextSlide(); startAutoplay(); });
  if (prevBtn) prevBtn.addEventListener("click", () => { prevSlide(); startAutoplay(); });

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      showSlide(idx);
      startAutoplay();
    });
  });

  const slider = document.querySelector(".hero-slider");
  if (slider) {
    slider.addEventListener("mouseenter", stopAutoplay);
    slider.addEventListener("mouseleave", startAutoplay);
  }

  startAutoplay();
}


// ==========================================================================
// 5. ANIMACIÓN DE CONTADORES DE ESTADÍSTICAS
// ==========================================================================

let countersAnimated = false;

function animateCounters() {
  if (countersAnimated) return;

  const statNumbers = document.querySelectorAll(".stat-number");
  if (statNumbers.length === 0) return;

  countersAnimated = true;

  statNumbers.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const speed = 100;
    const increment = target / speed;
    let count = 0;

    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target + (counter.id === "stat-satisfaction" ? "%" : "+");
      }
    };

    updateCount();
  });
}


// ==========================================================================
// 6. CATÁLOGO PÚBLICO DE MATERIAS
// ==========================================================================

const subjectsContainer = document.getElementById("subjects-container");
const catalogSearchInput = document.getElementById("catalog-search-input");
const catalogFilters = document.getElementById("catalog-filters");
const emptyStateContainer = document.getElementById("empty-state-container");

const subjectModal = document.getElementById("subject-modal");
const btnCloseModal = document.getElementById("btn-close-modal");
const modalSubCategory = document.getElementById("modal-sub-category");
const modalSubTitle = document.getElementById("modal-sub-title");
const modalSubLevel = document.getElementById("modal-sub-level");
const modalSubDesc = document.getElementById("modal-sub-desc");
const modalSubObjectives = document.getElementById("modal-sub-objectives");
const modalSubHours = document.getElementById("modal-sub-hours");
const modalSubType = document.getElementById("modal-sub-type");
const modalTeacherImg = document.getElementById("modal-teacher-img");
const modalTeacherName = document.getElementById("modal-teacher-name");
const modalTeacherDegree = document.getElementById("modal-teacher-degree");

let activeCategoryFilter = "todas";
let activeSearchQuery = "";

function initPublicCatalog() {
  if (!subjectsContainer) return;

  renderCatalog();

  if (catalogFilters) {
    catalogFilters.addEventListener("click", (e) => {
      if (e.target.classList.contains("filter-btn")) {
        const filterBtns = catalogFilters.querySelectorAll(".filter-btn");
        filterBtns.forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");

        activeCategoryFilter = e.target.getAttribute("data-category");
        renderCatalog();
      }
    });
  }

  if (catalogSearchInput) {
    catalogSearchInput.addEventListener("input", (e) => {
      activeSearchQuery = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }

  if (btnCloseModal) btnCloseModal.addEventListener("click", closeModal);
  if (subjectModal) {
    subjectModal.addEventListener("click", (e) => {
      if (e.target === subjectModal) closeModal();
    });
  }
}

function renderCatalog() {
  if (!subjectsContainer) return;

  const filtered = CATALOGO_MATERIAS.filter(sub => {
    const matchesCategory = activeCategoryFilter === "todas" || sub.category === activeCategoryFilter;
    const matchesSearch = sub.title.toLowerCase().includes(activeSearchQuery) || 
                          sub.desc.toLowerCase().includes(activeSearchQuery) || 
                          sub.teacher.name.toLowerCase().includes(activeSearchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    subjectsContainer.innerHTML = "";
    if (emptyStateContainer) emptyStateContainer.classList.remove("hidden");
    return;
  }

  if (emptyStateContainer) emptyStateContainer.classList.add("hidden");

  subjectsContainer.innerHTML = filtered.map(sub => {
    let catClass = `cat-${sub.category}`;
    let catText = getCategoryFriendlyName(sub.category);

    return `
      <article class="subject-card" data-id="${sub.id}">
        <div class="sub-header ${catClass}">
          <div class="sub-header-content">
            <span class="sub-badge">${catText}</span>
            <h3>${sub.title}</h3>
          </div>
        </div>
        <div class="sub-body">
          <p>${sub.desc}</p>
          <div class="sub-meta">
            <span><i class="fa-regular fa-clock"></i> ${sub.hours} hrs semanales</span>
            <span><i class="fa-solid fa-graduation-cap"></i> ${sub.level}</span>
          </div>
        </div>
        <div class="sub-footer">
          <button class="btn btn-secondary-light btn-block btn-small view-details-btn" data-id="${sub.id}">
            <i class="fa-solid fa-circle-info"></i> Ver Detalles
          </button>
        </div>
      </article>
    `;
  }).join("");

  const detailButtons = subjectsContainer.querySelectorAll(".view-details-btn");
  detailButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const subId = btn.getAttribute("data-id");
      openSubjectModal(subId);
    });
  });
}

function getCategoryFriendlyName(cat) {
  switch (cat) {
    case "tecnologia": return "Tecnología e Ingeniería";
    case "ciencias": return "Ciencias";
    case "humanidades": return "Humanidades";
    case "artes": return "Artes y Deporte";
    default: return cat;
  }
}

function openSubjectModal(subjectId) {
  const sub = CATALOGO_MATERIAS.find(item => item.id === subjectId);
  if (!sub) return;

  modalSubCategory.innerText = getCategoryFriendlyName(sub.category);
  modalSubCategory.className = `modal-badge cat-${sub.category}`;
  modalSubTitle.innerText = sub.title;
  modalSubLevel.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> Grado: <strong>${sub.level}</strong>`;
  modalSubDesc.innerText = sub.desc;
  
  modalSubObjectives.innerHTML = sub.objectives.map(obj => `<li>${obj}</li>`).join("");
  
  modalSubHours.innerText = `${sub.hours} horas`;
  modalSubType.innerText = sub.type;
  
  modalTeacherImg.src = sub.teacher.img;
  modalTeacherImg.alt = `Foto de ${sub.teacher.name}`;
  modalTeacherName.innerText = sub.teacher.name;
  modalTeacherDegree.innerText = sub.teacher.degree;

  if (subjectModal) subjectModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (subjectModal) subjectModal.classList.remove("active");
  document.body.style.overflow = "";
}


// ==========================================================================
// 7. FORMULARIO DE CONTACTO (VALIDACIÓN PREMIUM)
// ==========================================================================

const contactForm = document.getElementById("contact-school-form");
const toastNotification = document.getElementById("form-toast");
const btnCloseToast = document.getElementById("btn-close-toast");

function initContactForm() {
  if (!contactForm) return;

  const inputs = contactForm.querySelectorAll("input[required], select[required]");

  inputs.forEach(input => {
    input.addEventListener("blur", () => validateField(input));
    input.addEventListener("input", () => {
      const group = input.closest(".input-group");
      if (group && group.classList.contains("error")) {
        validateField(input);
      }
    });
  });

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isFormValid = true;
    inputs.forEach(input => {
      const isValid = validateField(input);
      if (!isValid) isFormValid = false;
    });

    if (isFormValid) {
      submitContactForm();
    }
  });

  if (btnCloseToast) {
    btnCloseToast.addEventListener("click", hideToast);
  }
}

function validateField(input) {
  const group = input.closest(".input-group");
  if (!group) return true;

  let isValid = true;
  const val = input.value.trim();

  if (input.type === "tel") {
    const phoneRegex = /^[0-9]{10}$/;
    isValid = phoneRegex.test(val);
  } else if (input.type === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValid = emailRegex.test(val);
  } else {
    isValid = val !== "";
  }

  if (isValid) {
    group.classList.remove("error");
    group.classList.add("success");
  } else {
    group.classList.remove("success");
    group.classList.add("error");
  }

  return isValid;
}

function submitContactForm() {
  const submitBtn = document.getElementById("btn-submit-contact");
  if (!submitBtn) return;

  const btnText = submitBtn.querySelector(".btn-text");
  const btnLoading = submitBtn.querySelector(".btn-loading");

  submitBtn.disabled = true;
  if (btnText) btnText.style.display = "none";
  if (btnLoading) btnLoading.style.display = "inline-flex";

  setTimeout(() => {
    submitBtn.disabled = false;
    if (btnText) btnText.style.display = "inline-flex";
    if (btnLoading) btnLoading.style.display = "none";

    showToast(
      "¡Solicitud Recibida!",
      "Tu pre-registro y mensaje han sido registrados. Un asesor te enviará un correo.",
      "success"
    );

    contactForm.reset();
    const groups = contactForm.querySelectorAll(".input-group");
    groups.forEach(g => g.classList.remove("success", "error"));

  }, 1500);
}

function showToast(title, desc, type = "success") {
  if (!toastNotification) return;

  const toastTitle = document.getElementById("toast-title");
  const toastDesc = document.getElementById("toast-desc");
  const toastIconBox = document.getElementById("toast-icon-box");

  if (toastTitle) toastTitle.innerText = title;
  if (toastDesc) toastDesc.innerText = desc;

  if (toastIconBox) {
    if (type === "success") {
      toastIconBox.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      toastIconBox.style.backgroundColor = "rgba(16, 185, 129, 0.15)";
      toastIconBox.style.color = "var(--secondary)";
    } else {
      toastIconBox.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>';
      toastIconBox.style.backgroundColor = "rgba(239, 68, 68, 0.15)";
      toastIconBox.style.color = "#ef4444";
    }
  }

  toastNotification.classList.add("active");
  setTimeout(hideToast, 6000);
}

function hideToast() {
  if (toastNotification) {
    toastNotification.classList.remove("active");
  }
}


// ==========================================================================
// 8. ACCESO Y PORTAL ESCOLAR (LOGIN Y PERFIL DE ALUMNO/MAESTRO)
// ==========================================================================

const loginForm = document.getElementById("student-login-form");
const btnTogglePass = document.getElementById("btn-toggle-pass");
const loginEmail = document.getElementById("login-email");
const loginPass = document.getElementById("login-password");
const loginAuthError = document.getElementById("login-auth-error");

function initLoginForm() {
  if (!loginForm) return;

  if (btnTogglePass && loginPass) {
    btnTogglePass.addEventListener("click", () => {
      const isPass = loginPass.type === "password";
      loginPass.type = isPass ? "text" : "password";
      const eyeIcon = btnTogglePass.querySelector("#eye-icon");
      if (eyeIcon) {
        eyeIcon.className = isPass ? "fa-regular fa-eye" : "fa-regular fa-eye-slash";
      }
    });
  }

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailVal = loginEmail.value.trim().toLowerCase();
    const passVal = loginPass.value;

    loginAuthError.classList.add("hidden");
    let hasError = false;

    if (!emailVal || !emailVal.includes("@")) {
      loginEmail.closest(".input-group").classList.add("error");
      hasError = true;
    } else {
      loginEmail.closest(".input-group").classList.remove("error");
    }

    if (!passVal) {
      loginPass.closest(".input-group").classList.add("error");
      hasError = true;
    } else {
      loginPass.closest(".input-group").classList.remove("error");
    }

    if (hasError) return;

    // Obtener la base de datos de alumnos creada/editada por el administrador
    let customStudents = [];
    const savedCustom = localStorage.getItem("admin_alumnos_v2");
    if (savedCustom) {
      customStudents = JSON.parse(savedCustom);
    }

    const customStudent = customStudents.find(a => a.email && a.email.toLowerCase() === emailVal);

    // Obtener la base de datos de maestros creada/editada por el administrador
    let customTeachers = [];
    const savedCustomTeachers = localStorage.getItem("admin_maestros_v2");
    if (savedCustomTeachers) {
      customTeachers = JSON.parse(savedCustomTeachers);
    }

    const customTeacher = customTeachers.find(t => t.email && t.email.toLowerCase() === emailVal);

    // Validación según credenciales de Alumno, Maestro o Admin
    if (emailVal === ESTUDIANTE_ACTIVO.email && passVal === "123456") {
      performLoginAction("alumno");
    } else if (customStudent && passVal === (customStudent.password || "123456")) {
      // Registrar al estudiante temporalmente en ESTUDIANTE_ACTIVO de memoria para que inicie sesión
      ESTUDIANTE_ACTIVO.email = customStudent.email;
      ESTUDIANTE_ACTIVO.nombre = customStudent.nombre;
      ESTUDIANTE_ACTIVO.grado = customStudent.grado;
      ESTUDIANTE_ACTIVO.grupo = customStudent.grupo;
      ESTUDIANTE_ACTIVO.promedio = parseFloat(customStudent.promedio || 0);
      ESTUDIANTE_ACTIVO.matricula = customStudent.matricula;
      // Guardar el código live en sessionStorage/localStorage para que lo use en la clase virtual
      sessionStorage.setItem("custom_student_code_live", customStudent.codeLive || "LIVE301");
      performLoginAction("alumno");
    } else if (emailVal === DOCENTE_ACTIVO.email && passVal === "123456") {
      performLoginAction("maestro");
    } else if (customTeacher && passVal === (customTeacher.password || "123456")) {
      // Sincronizar datos del maestro para iniciar sesión
      DOCENTE_ACTIVO.email = customTeacher.email;
      DOCENTE_ACTIVO.nombre = customTeacher.nombre;
      DOCENTE_ACTIVO.departamento = customTeacher.departamento;
      performLoginAction("maestro");
    } else if (emailVal === ADMIN_DATA.email && passVal === ADMIN_DATA.password) {
      performLoginAction("admin");
    } else {
      loginAuthError.classList.remove("hidden");
      loginPass.value = "";
    }
  });

  // Cerrar Sesión (Logout para todos los roles)
  const logoutButtons = [
    document.getElementById("btn-logout"),
    document.getElementById("mob-btn-logout"),
    document.getElementById("btn-logout-teacher"),
    document.getElementById("mob-btn-logout-teacher"),
    document.getElementById("btn-logout-admin"),
    document.getElementById("mob-btn-logout-admin")
  ];

  logoutButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener("click", performLogoutAction);
    }
  });
}

function performLoginAction(role) {
  const submitBtn = document.getElementById("btn-submit-login");
  const btnText = submitBtn.querySelector(".btn-text");
  const btnLoading = submitBtn.querySelector(".btn-loading");

  submitBtn.disabled = true;
  if (btnText) btnText.style.display = "none";
  if (btnLoading) btnLoading.style.display = "inline-flex";

  setTimeout(() => {
    submitBtn.disabled = false;
    if (btnText) btnText.style.display = "inline-flex";
    if (btnLoading) btnLoading.style.display = "none";

    isLoggedIn = true;
    userRole = role;

    if (role === "alumno") {
      userSessionData = JSON.parse(JSON.stringify(ESTUDIANTE_ACTIVO));
      
      const savedRatings = localStorage.getItem(`ratings_${userSessionData.email}`);
      if (savedRatings) {
        userSessionData.profesores = JSON.parse(savedRatings);
      }
      
      const savedStudentData = localStorage.getItem(`student_data_${userSessionData.email}`);
      if (savedStudentData) {
        const parsed = JSON.parse(savedStudentData);
        userSessionData.promedio = parsed.promedio;
        userSessionData.asistencias = parsed.asistencias;
        userSessionData.materiasCursadas = parsed.materiasCursadas;
      }
      
      sessionStorage.setItem("liceo_student_session", JSON.stringify(userSessionData));
      sessionStorage.setItem("liceo_session_role", "alumno");

      toggleHeaderPortalUI(true, "alumno");
      loginForm.reset();
      window.location.hash = "portal";
      
      renderStudentSubjects();
      renderStudentTeachersEvaluation();
      renderStudentDashboardHeader();
      renderStudentGradesSummary();
      
    } else if (role === "maestro") {
      userSessionData = JSON.parse(JSON.stringify(DOCENTE_ACTIVO));
      
      const savedParticipation = localStorage.getItem(`participation_v2_${userSessionData.email}`);
      if (savedParticipation) {
        userSessionData.materiasAsignadas = JSON.parse(savedParticipation);
      }

      sessionStorage.setItem("liceo_student_session", JSON.stringify(userSessionData));
      sessionStorage.setItem("liceo_session_role", "maestro");

      toggleHeaderPortalUI(true, "maestro");
      loginForm.reset();
      window.location.hash = "portal-maestro";
      
      renderTeacherDashboard();
    } else if (role === "admin") {
      userSessionData = JSON.parse(JSON.stringify(ADMIN_DATA));

      sessionStorage.setItem("liceo_student_session", JSON.stringify(userSessionData));
      sessionStorage.setItem("liceo_session_role", "admin");

      toggleHeaderPortalUI(true, "admin");
      loginForm.reset();
      
      loadAdminData();
      renderAdminDashboard();
      
      window.location.hash = "portal-admin";
    }

    showToast(
      "¡Acceso Correcto!",
      `Bienvenido de vuelta, ${userSessionData.nombre}.`,
      "success"
    );

  }, 1200);
}

function performLogoutAction() {
  isLoggedIn = false;
  userRole = null;
  userSessionData = null;
  sessionStorage.removeItem("liceo_student_session");
  sessionStorage.removeItem("liceo_session_role");

  toggleHeaderPortalUI(false);
  window.location.hash = "inicio";

  showToast(
    "Sesión Finalizada",
    "Has salido del portal escolar de forma segura.",
    "success"
  );
}

function toggleHeaderPortalUI(showPortal, role) {
  const desktopMenu = document.getElementById("desktop-menu");
  const portalMenu = document.getElementById("portal-menu");
  const portalMaestroMenu = document.getElementById("portal-maestro-menu");
  const portalAdminMenu = document.getElementById("portal-admin-menu");
  const mobilePortalContainer = document.getElementById("mobile-portal-container");
  const mobilePortalMaestroContainer = document.getElementById("mobile-portal-maestro-container");
  const mobilePortalAdminContainer = document.getElementById("mobile-portal-admin-container");
  const mobileNavListContainer = document.getElementById("mobile-nav-list-container");
  
  const portalStudentName = document.getElementById("portal-student-name");
  const portalTeacherNameNav = document.getElementById("portal-teacher-name-nav");
  const portalAdminNameNav = document.getElementById("portal-admin-name-nav");
  const mobStudentName = document.getElementById("mob-student-name");
  const mobTeacherName = document.getElementById("mob-teacher-name");
  const mobAdminName = document.getElementById("mob-admin-name");

  // Hide all portal menus first
  const allPortalMenus = [portalMenu, portalMaestroMenu, portalAdminMenu];
  const allMobilePortals = [mobilePortalContainer, mobilePortalMaestroContainer, mobilePortalAdminContainer];

  if (showPortal && userSessionData) {
    if (desktopMenu) desktopMenu.classList.add("hidden");
    if (mobileNavListContainer) mobileNavListContainer.classList.add("hidden");

    allPortalMenus.forEach(m => { if (m) m.classList.add("hidden"); });
    allMobilePortals.forEach(m => { if (m) m.classList.add("hidden"); });

    if (role === "alumno") {
      if (portalMenu) {
        portalMenu.classList.remove("hidden");
        if (portalStudentName) portalStudentName.innerText = userSessionData.nombre.split(" ")[0];
      }
      if (mobilePortalContainer) {
        mobilePortalContainer.classList.remove("hidden");
        if (mobStudentName) mobStudentName.innerText = userSessionData.nombre;
      }
    } else if (role === "maestro") {
      if (portalMaestroMenu) {
        portalMaestroMenu.classList.remove("hidden");
        if (portalTeacherNameNav) portalTeacherNameNav.innerText = userSessionData.nombre.split(" ").slice(-2)[0] || userSessionData.nombre;
      }
      if (mobilePortalMaestroContainer) {
        mobilePortalMaestroContainer.classList.remove("hidden");
        if (mobTeacherName) mobTeacherName.innerText = userSessionData.nombre;
      }
    } else if (role === "admin") {
      if (portalAdminMenu) {
        portalAdminMenu.classList.remove("hidden");
        if (portalAdminNameNav) portalAdminNameNav.innerText = "Admin";
      }
      if (mobilePortalAdminContainer) {
        mobilePortalAdminContainer.classList.remove("hidden");
        if (mobAdminName) mobAdminName.innerText = "Administrador";
      }
    }
  } else {
    if (desktopMenu) desktopMenu.classList.remove("hidden");
    allPortalMenus.forEach(m => { if (m) m.classList.add("hidden"); });
    if (mobileNavListContainer) mobileNavListContainer.classList.remove("hidden");
    allMobilePortals.forEach(m => { if (m) m.classList.add("hidden"); });
  }
}


// ==========================================================================
// 9. NAVEGACIÓN Y COMPONENTES DEL DASHBOARD DE ALUMNOS
// ==========================================================================

const portalTabButtons = document.querySelectorAll(".portal-tab-btn");
const portalTabContents = document.querySelectorAll(".portal-tab-content");

function initPortalSubTabs() {
  portalTabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-portal-tab");

      portalTabButtons.forEach(b => b.classList.remove("active"));
      portalTabContents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      
      const targetContent = document.getElementById(`portal-tab-${tabId}`);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
}

function renderStudentSubjects() {
  const subjectsListContainer = document.getElementById("student-subjects-list");
  if (!subjectsListContainer || !userSessionData) return;

  const countBadge = document.getElementById("enrolled-subjects-count");
  if (countBadge) {
    countBadge.innerText = `${userSessionData.materiasCursadas.length} Materias en Curso`;
  }

  subjectsListContainer.innerHTML = userSessionData.materiasCursadas.map(sub => {
    const isReprobada = sub.grade < 6.0;
    const gradeClass = !isReprobada ? "grade-pill-success" : "grade-pill-danger";
    return `
      <div class="student-subject-card">
        <div class="student-subject-card-header">
          <div>
            <span class="sub-code-tag">${sub.code}</span>
            <h4 class="m-t-2">${sub.title}</h4>
          </div>
          <span class="${gradeClass}">Calif: ${sub.grade.toFixed(1)}</span>
        </div>
        
        <p>Curso enfocado en el desarrollo de competencias de nivel ${userSessionData.grado}.</p>
        
        <div class="student-subject-meta">
          <span><i class="fa-regular fa-clock"></i> Carga: ${sub.hours}</span>
          <span><i class="fa-solid fa-circle-check text-emerald"></i> Asistencia: ${sub.attendance}</span>
        </div>

        <div class="student-subject-teacher">
          <img src="${sub.teacherImg}" alt="${sub.teacherName}">
          <div>
            <span>Profesor:</span>
            <strong>${sub.teacherName}</strong>
          </div>
        </div>

        <div class="student-subject-progress">
          <div class="progress-bar-label">
            <span>Avance del Temario</span>
            <span>${sub.progress}%</span>
          </div>
          <div class="progress-bar-outer">
            <div class="progress-bar-inner" style="width: ${sub.progress}%"></div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function renderStudentDashboardHeader() {
  if (!userSessionData || userRole !== "alumno") return;

  const displayName = document.getElementById("student-display-name");
  if (displayName) displayName.innerText = userSessionData.nombre;

  const promedio = document.getElementById("student-promedio");
  if (promedio) promedio.innerText = typeof userSessionData.promedio === 'number' ? userSessionData.promedio.toFixed(1) : userSessionData.promedio;

  const reportes = document.getElementById("student-reportes");
  if (reportes) reportes.innerText = userSessionData.reportes;

  const asistencia = document.getElementById("student-asistencia");
  if (asistencia) asistencia.innerText = userSessionData.asistencias;

  const grado = document.getElementById("student-grado");
  if (grado) grado.innerText = userSessionData.grado;

  const grupo = document.getElementById("student-grupo");
  if (grupo) grupo.innerText = userSessionData.grupo;
}

function renderStudentGradesSummary() {
  const tbody = document.getElementById("student-grades-summary-tbody");
  if (!tbody || !userSessionData) return;

  tbody.innerHTML = userSessionData.materiasCursadas.map(sub => {
    const isReprobada = sub.grade < 6.0;
    const statusClass = !isReprobada ? "grade-pill-success" : "grade-pill-danger";
    const statusText = !isReprobada ? "Aprobado" : "Reprobado";
    const rowClass = isReprobada ? "row-reprobado" : "";
    const cellHighlightClass = isReprobada ? "reprobado-highlight" : "";

    const valP1 = typeof sub.p1 === "number" ? sub.p1.toFixed(1) : "-";
    const valP2 = typeof sub.p2 === "number" ? sub.p2.toFixed(1) : "-";
    const valP3 = typeof sub.p3 === "number" ? sub.p3.toFixed(1) : "-";
    const valHomework = typeof sub.homework === "number" ? sub.homework.toFixed(1) : "-";
    const valProject = typeof sub.project === "number" ? sub.project.toFixed(1) : "-";
    const valPart = typeof sub.participation === "number" ? sub.participation.toFixed(1) : "-";
    const valAttendance = sub.attendance || "-";

    return `
      <tr class="${rowClass}">
        <td><strong>${sub.title}</strong><br><span style="font-size: 0.75rem; color: var(--text-muted);">${sub.code}</span></td>
        <td class="text-center font-mono">${valP1}</td>
        <td class="text-center font-mono">${valP2}</td>
        <td class="text-center font-mono">${valP3}</td>
        <td class="text-center font-mono">${valHomework}</td>
        <td class="text-center font-mono">${valProject}</td>
        <td class="text-center font-mono">${valPart}</td>
        <td class="text-center font-mono">${valAttendance}</td>
        <td class="text-center ${cellHighlightClass}"><span class="${statusClass}">${sub.grade.toFixed(1)}</span></td>
        <td class="text-center ${cellHighlightClass}" style="font-weight: 600; color: ${!isReprobada ? 'var(--secondary)' : '#ef4444'};">${statusText}</td>
      </tr>
    `;
  }).join("");
}

function renderStudentTeachersEvaluation() {
  const evalListContainer = document.getElementById("student-teachers-eval-list");
  if (!evalListContainer || !userSessionData) return;

  evalListContainer.innerHTML = userSessionData.profesores.map(teacher => {
    const isAlreadyRated = teacher.userRating > 0;
    
    let starsHtml = "";
    for (let star = 1; star <= 5; star++) {
      let activeClass = "";
      if (isAlreadyRated && star <= teacher.userRating) {
        activeClass = "active";
      }
      starsHtml += `
        <button type="button" 
                class="rating-star-btn ${activeClass}" 
                data-star-val="${star}" 
                data-teacher-id="${teacher.id}" 
                ${isAlreadyRated ? 'disabled' : ''}
                aria-label="Calificar con ${star} estrellas">
          <i class="fa-solid fa-star"></i>
        </button>
      `;
    }

    return `
      <div class="student-teacher-card" id="teacher-eval-card-${teacher.id}">
        <div class="eval-teacher-avatar-wrapper">
          <img src="${teacher.img}" alt="Foto de ${teacher.name}" class="eval-teacher-avatar">
        </div>
        <div class="eval-teacher-info-col">
          <h4>${teacher.name}</h4>
          <span class="teacher-sub-tag">${teacher.subject}</span>
          <span class="teacher-email"><i class="fa-regular fa-envelope"></i> ${teacher.email}</span>
          
          <div class="teacher-rating-stats" id="teacher-stats-${teacher.id}">
            <i class="fa-solid fa-star-half-stroke"></i> 
            <span>Puntaje Promedio: <strong class="text-gold" id="teacher-avg-${teacher.id}">${teacher.ratingAvg.toFixed(1)}</strong> (${teacher.ratingCount} evaluaciones)</span>
          </div>

          <div class="star-rating-widget">
            <label>${isAlreadyRated ? 'Tu Calificación Registrada:' : 'Evalúa el desempeño de tu docente:'}</label>
            <div class="rating-stars-container" id="stars-container-${teacher.id}">
              ${starsHtml}
            </div>

            ${
              isAlreadyRated 
              ? `
                <div class="eval-success-alert active" style="margin-top: 0.5rem;">
                  <i class="fa-solid fa-circle-check"></i>
                  <span>¡Gracias! Calificaste con ${teacher.userRating} estrellas. ${teacher.userComment ? `Feedback: "${teacher.userComment}"` : ''}</span>
                </div>
              `
              : `
                <textarea class="eval-comment-box" 
                          id="comment-${teacher.id}" 
                          rows="2" 
                          placeholder="Escribe un comentario opcional sobre tu experiencia académica..."></textarea>
                <button type="button" 
                        class="btn btn-primary btn-small eval-submit-btn m-t-1" 
                        id="btn-eval-${teacher.id}" 
                        data-teacher-id="${teacher.id}">
                  Enviar Calificación
                </button>
                <div class="eval-success-alert" id="alert-success-${teacher.id}">
                  <i class="fa-solid fa-circle-check"></i>
                  <span class="alert-text">Evaluación enviada con éxito.</span>
                </div>
              `
            }
          </div>
        </div>
      </div>
    `;
  }).join("");

  const starButtons = evalListContainer.querySelectorAll(".rating-star-btn");
  starButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const teacherId = btn.getAttribute("data-teacher-id");
      const starVal = parseInt(btn.getAttribute("data-star-val"));
      highlightStars(teacherId, starVal);
    });
  });

  const submitEvalButtons = evalListContainer.querySelectorAll(".eval-submit-btn");
  submitEvalButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const teacherId = btn.getAttribute("data-teacher-id");
      submitTeacherRating(teacherId);
    });
  });
}

function highlightStars(teacherId, ratingVal) {
  const container = document.getElementById(`stars-container-${teacherId}`);
  if (!container) return;

  const stars = container.querySelectorAll(".rating-star-btn");
  stars.forEach((starBtn, index) => {
    const starNum = index + 1;
    if (starNum <= ratingVal) {
      starBtn.classList.add("active");
    } else {
      starBtn.classList.remove("active");
    }
  });

  const submitBtn = document.getElementById(`btn-eval-${teacherId}`);
  if (submitBtn) {
    submitBtn.setAttribute("data-selected-rating", ratingVal);
  }
}

function submitTeacherRating(teacherId) {
  const submitBtn = document.getElementById(`btn-eval-${teacherId}`);
  if (!submitBtn || !userSessionData) return;

  const ratingValAttr = submitBtn.getAttribute("data-selected-rating");
  const ratingVal = ratingValAttr ? parseInt(ratingValAttr) : 0;

  if (ratingVal === 0) {
    showToast("Error de Calificación", "Por favor selecciona al menos 1 estrella antes de enviar.", "error");
    return;
  }

  const commentBox = document.getElementById(`comment-${teacherId}`);
  const commentText = commentBox ? commentBox.value.trim() : "";

  const teacher = userSessionData.profesores.find(t => t.id === teacherId);
  if (!teacher) return;

  submitBtn.disabled = true;
  if (commentBox) commentBox.disabled = true;
  
  const starsContainer = document.getElementById(`stars-container-${teacherId}`);
  if (starsContainer) {
    const starButtons = starsContainer.querySelectorAll(".rating-star-btn");
    starButtons.forEach(btn => btn.disabled = true);
  }

  setTimeout(() => {
    teacher.userRating = ratingVal;
    teacher.userComment = commentText;

    const newCount = teacher.ratingCount + 1;
    const newAvg = ((teacher.ratingAvg * teacher.ratingCount) + ratingVal) / newCount;

    teacher.ratingCount = newCount;
    teacher.ratingAvg = newAvg;

    sessionStorage.setItem("liceo_student_session", JSON.stringify(userSessionData));
    localStorage.setItem(`ratings_${userSessionData.email}`, JSON.stringify(userSessionData.profesores));

    const avgLabel = document.getElementById(`teacher-avg-${teacherId}`);
    const statsContainer = document.getElementById(`teacher-stats-${teacherId}`);
    if (avgLabel) avgLabel.innerText = newAvg.toFixed(1);
    if (statsContainer) {
      statsContainer.innerHTML = `
        <i class="fa-solid fa-star-half-stroke"></i> 
        <span>Puntaje Promedio: <strong class="text-gold">${newAvg.toFixed(1)}</strong> (${newCount} evaluaciones)</span>
      `;
    }

    submitBtn.style.display = "none";
    if (commentBox) commentBox.style.display = "none";
    
    const successAlert = document.getElementById(`alert-success-${teacherId}`);
    if (successAlert) {
      const textSpan = successAlert.querySelector(".alert-text");
      if (textSpan) {
        textSpan.innerHTML = `¡Gracias! Calificaste con <strong>${ratingVal} estrellas</strong>. ${commentText ? `Feedback: "${commentText}"` : ''}`;
      }
      successAlert.classList.add("active");
    }

    showToast(
      "Evaluación Registrada",
      `Gracias por calificar a ${teacher.name} con ${ratingVal} estrellas.`,
      "success"
    );

  }, 800);
}


// ==========================================================================
// 10. PORTAL DE MAESTROS - LÓGICA INTERACTIVA DE CALIFICACIONES DE PARTICIPACIÓN
// ==========================================================================

let teacherSelectedSubjectId = null;

function renderTeacherDashboard() {
  if (!userSessionData || userRole !== "maestro") return;

  // Renderizar banner de bienvenida del maestro
  const displayName = document.getElementById("teacher-display-name");
  if (displayName) displayName.innerText = userSessionData.nombre;

  // Cargar calificación promedio cruzada evaluada por los alumnos
  let ratingValue = 4.8;
  const studentRatings = localStorage.getItem("ratings_alumno@liceo.edu");
  if (studentRatings) {
    const list = JSON.parse(studentRatings);
    // Buscar la calificación que los alumnos dieron al Prof. Sergio Hernandez
    const sergio = list.find(t => t.id === "sergio-hernandez");
    if (sergio) {
      ratingValue = sergio.ratingAvg;
    }
  }
  
  const profileRating = document.getElementById("teacher-profile-rating");
  if (profileRating) profileRating.innerText = ratingValue.toFixed(1);

  // Renderizar lista de materias asignadas a cargo
  const subjectsList = document.getElementById("teacher-subjects-list");
  const assignedCountLabel = document.getElementById("teacher-assigned-count");
  
  if (assignedCountLabel) {
    assignedCountLabel.innerText = userSessionData.materiasAsignadas.length;
  }

  // Contar cantidad total de alumnos únicos a cargo
  const totalStudentsSet = new Set();
  userSessionData.materiasAsignadas.forEach(sub => {
    sub.alumnos.forEach(st => totalStudentsSet.add(st.name));
  });
  
  const totalStudentsLabel = document.getElementById("teacher-total-students-count");
  if (totalStudentsLabel) {
    totalStudentsLabel.innerText = totalStudentsSet.size;
  }

  if (subjectsList) {
    subjectsList.innerHTML = userSessionData.materiasAsignadas.map((sub, idx) => {
      return `
        <div class="teacher-subject-card ${idx === 0 ? 'active' : ''}" data-materia-id="${sub.materiaId}">
          <div class="active-indicator-dot"></div>
          <div class="teacher-subject-card-header">
            <h4>${sub.title}</h4>
            <span class="student-count-badge">${sub.studentCount} Alumnos</span>
          </div>
          <div class="teacher-subject-meta-info">
            <span><i class="fa-regular fa-clock"></i> ${sub.hours}</span>
            <span><i class="fa-regular fa-calendar"></i> ${sub.schedule}</span>
          </div>
        </div>
      `;
    }).join("");

    const cards = subjectsList.querySelectorAll(".teacher-subject-card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        
        const matId = card.getAttribute("data-materia-id");
        selectTeacherSubject(matId);
      });
    });
  }

  // Cargar primera materia automáticamente
  if (userSessionData.materiasAsignadas.length > 0) {
    selectTeacherSubject(userSessionData.materiasAsignadas[0].materiaId);
  }
}

function selectTeacherSubject(materiaId) {
  teacherSelectedSubjectId = materiaId;
  const sub = userSessionData.materiasAsignadas.find(m => m.materiaId === materiaId);
  if (!sub) return;

  const selectedTitle = document.getElementById("teacher-selected-subject-title");
  const codeBadge = document.getElementById("teacher-subject-code-badge");
  if (selectedTitle) selectedTitle.innerText = sub.title;
  if (codeBadge) codeBadge.innerText = sub.code;

  // Configurar panel de Clase Virtual
  const vcConfigCard = document.getElementById("teacher-vc-config-card");
  const vcConfigPlaceholder = document.getElementById("teacher-vc-config-placeholder");
  const vcConfigSubjectTitle = document.getElementById("vc-config-subject-title");
  
  if (vcConfigCard && vcConfigPlaceholder && vcConfigSubjectTitle) {
    vcConfigPlaceholder.style.display = "none";
    vcConfigCard.style.display = "block";
    vcConfigSubjectTitle.innerText = `${sub.title} (${sub.code})`;
    
    // Cargar enlace si existe
    const savedLink = localStorage.getItem("vc_link_" + sub.title.trim());
    const platformInput = document.getElementById("teacher-vc-platform");
    const urlInput = document.getElementById("teacher-vc-url");
    
    if (platformInput && urlInput) {
      if (savedLink) {
        const parsed = JSON.parse(savedLink);
        platformInput.value = parsed.platform || "zoom";
        urlInput.value = parsed.url || "";
      } else {
        platformInput.value = "zoom";
        urlInput.value = "";
      }
    }
    
    // Configurar botón guardar
    const btnSave = document.getElementById("btn-save-vc-link");
    if (btnSave) {
      const newBtnSave = btnSave.cloneNode(true);
      btnSave.parentNode.replaceChild(newBtnSave, btnSave);
      newBtnSave.addEventListener("click", () => {
        const platform = platformInput.value;
        const url = urlInput.value.trim();
        
        if (url && !url.startsWith("http://") && !url.startsWith("https://")) {
          showToast("Enlace Inválido", "El enlace de la reunión debe comenzar con http:// o https://", "error");
          return;
        }
        
        localStorage.setItem("vc_link_" + sub.title.trim(), JSON.stringify({ platform, url }));
        showToast("Enlace Guardado", `Enlace de videollamada para ${sub.title} guardado con éxito.`, "success");
      });
    }
  }

  // Cargar criterios de evaluación y pesos
  if (!sub.pesos) {
    sub.pesos = { p1: 20, p2: 20, p3: 20, homework: 10, project: 10, participation: 10, attendance: 10 };
  }

  const w_p1Input = document.getElementById("weight-p1");
  const w_p2Input = document.getElementById("weight-p2");
  const w_p3Input = document.getElementById("weight-p3");
  const w_homeworkInput = document.getElementById("weight-homework");
  const w_projectInput = document.getElementById("weight-project");
  const w_partInput = document.getElementById("weight-participation");
  const w_attInput = document.getElementById("weight-attendance");

  if (w_p1Input && w_p2Input && w_p3Input && w_homeworkInput && w_projectInput && w_partInput && w_attInput) {
    w_p1Input.value = sub.pesos.p1;
    w_p2Input.value = sub.pesos.p2;
    w_p3Input.value = sub.pesos.p3;
    w_homeworkInput.value = sub.pesos.homework;
    w_projectInput.value = sub.pesos.project;
    w_partInput.value = sub.pesos.participation;
    w_attInput.value = sub.pesos.attendance;

    const handleWeightChange = () => {
      const w_p1 = parseFloat(w_p1Input.value) || 0;
      const w_p2 = parseFloat(w_p2Input.value) || 0;
      const w_p3 = parseFloat(w_p3Input.value) || 0;
      const w_homework = parseFloat(w_homeworkInput.value) || 0;
      const w_project = parseFloat(w_projectInput.value) || 0;
      const w_part = parseFloat(w_partInput.value) || 0;
      const w_att = parseFloat(w_attInput.value) || 0;

      const total = w_p1 + w_p2 + w_p3 + w_homework + w_project + w_part + w_att;
      const totalDisplay = document.getElementById("weight-total-display");
      if (totalDisplay) {
        totalDisplay.innerText = `${total}%`;
        if (total === 100) {
          totalDisplay.style.color = "var(--secondary)";
          totalDisplay.style.backgroundColor = "rgba(16,185,129,0.1)";
          totalDisplay.style.borderColor = "var(--secondary)";
        } else {
          totalDisplay.style.color = "#ef4444";
          totalDisplay.style.backgroundColor = "rgba(239,68,68,0.1)";
          totalDisplay.style.borderColor = "#ef4444";
        }
      }

      // Persistir pesos en la materia
      sub.pesos = { p1: w_p1, p2: w_p2, p3: w_p3, homework: w_homework, project: w_project, participation: w_part, attendance: w_att };
      sessionStorage.setItem("liceo_student_session", JSON.stringify(userSessionData));
      localStorage.setItem(`participation_v2_${userSessionData.email}`, JSON.stringify(userSessionData.materiasAsignadas));

      // Recalcular promedios ponderados en tiempo real para todos los estudiantes renderizados
      sub.alumnos.forEach(st => {
        const p1Input = document.getElementById(`p1-input-${st.id}`);
        if (p1Input) {
          const p1 = parseFloat(p1Input.value) || 0;
          const p2 = parseFloat(document.getElementById(`p2-input-${st.id}`).value) || 0;
          const p3 = parseFloat(document.getElementById(`p3-input-${st.id}`).value) || 0;
          const homework = parseFloat(document.getElementById(`homework-input-${st.id}`).value) || 0;
          const project = parseFloat(document.getElementById(`project-input-${st.id}`).value) || 0;
          const part = parseFloat(document.getElementById(`part-select-${st.id}`).value) || 0;
          const attendance = parseFloat(document.getElementById(`attendance-input-${st.id}`).value) || 0;

          const weightedAvg = (
            (p1 * w_p1) + 
            (p2 * w_p2) + 
            (p3 * w_p3) + 
            (homework * w_homework) + 
            (project * w_project) + 
            (part * w_part) + 
            ((attendance / 10) * w_att)
          ) / 100;

          const gradeInput = document.getElementById(`grade-input-${st.id}`);
          if (gradeInput) {
            gradeInput.value = weightedAvg.toFixed(1);
          }
        }
      });
    };

    [w_p1Input, w_p2Input, w_p3Input, w_homeworkInput, w_projectInput, w_partInput, w_attInput].forEach(el => {
      el.oninput = handleWeightChange;
      el.onchange = handleWeightChange;
    });

    // Disparar la lógica de pesos una vez para colorear el total
    handleWeightChange();
  }

  renderTeacherStudentsList(sub);
  calculateTeacherGroupStats(sub);
}

function renderTeacherStudentsList(subject) {
  const listBody = document.getElementById("teacher-students-list-body");
  if (!listBody) return;

  // Avatar representativo según estudiante (mujeres y hombres con fotos únicas)
  const avatarMap = {
    "Santiago":  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100",
    "Valentina": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    "Mateo":     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    "Isabella":  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
    "Sebastián": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
    "Emiliano":  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100",
    "Camila":    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100",
    "Rodrigo":   "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=100",
    "Sofía":     "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100",
    "Diego":     "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100",
    "Andrea":    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
    "Carlos":    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=100",
    "Valeria":   "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=100",
    "Fernando":  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    "Daniela":   "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=100"
  };

  listBody.innerHTML = subject.alumnos.map(st => {
    // Inicialización de seguridad para datos de sesiones previas en localStorage
    if (st.p1 === undefined) st.p1 = 9.0;
    if (st.p2 === undefined) st.p2 = 9.0;
    if (st.p3 === undefined) st.p3 = 9.0;
    if (st.homework === undefined) st.homework = 9.0;
    if (st.project === undefined) st.project = 9.0;
    if (st.participation === undefined) st.participation = 9.0;
    if (st.generalGrade === undefined) st.generalGrade = 9.0;

    let selectOptions = "";
    const roundedPart = Math.round(st.participation);
    for (let i = 1; i <= 10; i++) {
      selectOptions += `<option value="${i}" ${roundedPart === i ? 'selected' : ''}>${i}</option>`;
    }

    const firstName = st.name.split(" ")[0];
    let avatarPhoto = avatarMap[firstName] || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100";

    const attPercent = parseInt(st.attendance) || 0;

    return `
      <tr id="teacher-student-row-${st.id}">
        <td>
          <div class="student-table-profile">
            <img class="student-table-avatar" src="${avatarPhoto}" alt="Foto de ${st.name}">
            <span class="student-table-name" style="font-size: 0.85rem; font-weight: 600;">${st.name}</span>
          </div>
        </td>
        <td class="text-center font-mono" style="font-size: 0.75rem;">${st.matricula}</td>
        <td class="text-center">
          <input type="number" class="participation-score-select text-center" id="p1-input-${st.id}" value="${st.p1.toFixed(1)}" min="0" max="10" step="0.1" style="width: 50px; padding: 0.35rem 0.2rem; font-size: 0.8rem;">
        </td>
        <td class="text-center">
          <input type="number" class="participation-score-select text-center" id="p2-input-${st.id}" value="${st.p2.toFixed(1)}" min="0" max="10" step="0.1" style="width: 50px; padding: 0.35rem 0.2rem; font-size: 0.8rem;">
        </td>
        <td class="text-center">
          <input type="number" class="participation-score-select text-center" id="p3-input-${st.id}" value="${st.p3.toFixed(1)}" min="0" max="10" step="0.1" style="width: 50px; padding: 0.35rem 0.2rem; font-size: 0.8rem;">
        </td>
        <td class="text-center">
          <input type="number" class="participation-score-select text-center" id="homework-input-${st.id}" value="${st.homework.toFixed(1)}" min="0" max="10" step="0.1" style="width: 50px; padding: 0.35rem 0.2rem; font-size: 0.8rem;">
        </td>
        <td class="text-center">
          <input type="number" class="participation-score-select text-center" id="project-input-${st.id}" value="${st.project.toFixed(1)}" min="0" max="10" step="0.1" style="width: 50px; padding: 0.35rem 0.2rem; font-size: 0.8rem;">
        </td>
        <td class="text-center">
          <select class="participation-score-select" id="part-select-${st.id}" data-student-id="${st.id}" style="width: 50px; padding: 0.35rem 0.2rem; font-size: 0.8rem;">
            ${selectOptions}
          </select>
        </td>
        <td class="text-center">
          <div class="attendance-grading-wrapper" style="display: inline-flex; align-items: center; gap: 0.15rem; justify-content: center;">
            <input type="number" class="participation-score-select text-center" id="attendance-input-${st.id}" value="${attPercent}" min="0" max="100" style="width: 48px; padding: 0.35rem 0.2rem; font-size: 0.8rem;">
            <span style="font-weight: 600; font-size: 0.75rem; color: var(--text-muted);">%</span>
          </div>
        </td>
        <td class="text-center">
          <input type="number" class="participation-score-select text-center" id="grade-input-${st.id}" value="${st.generalGrade.toFixed(1)}" min="0" max="10" step="0.1" style="width: 50px; padding: 0.35rem 0.2rem; font-size: 0.8rem; font-weight: 700; color: var(--primary);">
        </td>
        <td class="text-center">
          <button class="participation-save-btn" id="part-btn-${st.id}" data-student-id="${st.id}" style="padding: 0.35rem 0.5rem; font-size: 0.75rem; width: 100%;">
            <i class="fa-regular fa-floppy-disk"></i> Guardar
          </button>
        </td>
      </tr>
    `;
  }).join("");

  // Configurar cálculo de promedio en tiempo real
  subject.alumnos.forEach(st => {
    const fields = [
      `p1-input-${st.id}`,
      `p2-input-${st.id}`,
      `p3-input-${st.id}`,
      `homework-input-${st.id}`,
      `project-input-${st.id}`,
      `part-select-${st.id}`
    ];

    const updateRowAverage = () => {
      const p1 = parseFloat(document.getElementById(`p1-input-${st.id}`).value) || 0;
      const p2 = parseFloat(document.getElementById(`p2-input-${st.id}`).value) || 0;
      const p3 = parseFloat(document.getElementById(`p3-input-${st.id}`).value) || 0;
      const homework = parseFloat(document.getElementById(`homework-input-${st.id}`).value) || 0;
      const project = parseFloat(document.getElementById(`project-input-${st.id}`).value) || 0;
      const part = parseFloat(document.getElementById(`part-select-${st.id}`).value) || 0;

      const avg = (p1 + p2 + p3 + homework + project + part) / 6;
      const gradeInput = document.getElementById(`grade-input-${st.id}`);
      if (gradeInput) {
        gradeInput.value = avg.toFixed(1);
      }
    };

    fields.forEach(fieldId => {
      const el = document.getElementById(fieldId);
      if (el) {
        el.addEventListener("input", updateRowAverage);
        el.addEventListener("change", updateRowAverage);
      }
    });
  });

  const saveButtons = listBody.querySelectorAll(".participation-save-btn");
  saveButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const studentId = btn.getAttribute("data-student-id");
      saveStudentGrades(studentId);
    });
  });
}

function saveStudentGrades(studentId) {
  const sub = userSessionData.materiasAsignadas.find(m => m.materiaId === teacherSelectedSubjectId);
  if (!sub) return;

  const student = sub.alumnos.find(st => st.id === studentId);
  if (!student) return;

  const p1El = document.getElementById(`p1-input-${studentId}`);
  const p2El = document.getElementById(`p2-input-${studentId}`);
  const p3El = document.getElementById(`p3-input-${studentId}`);
  const homeworkEl = document.getElementById(`homework-input-${studentId}`);
  const projectEl = document.getElementById(`project-input-${studentId}`);
  const partEl = document.getElementById(`part-select-${studentId}`);
  const attEl = document.getElementById(`attendance-input-${studentId}`);
  const gradeEl = document.getElementById(`grade-input-${studentId}`);

  if (!p1El || !p2El || !p3El || !homeworkEl || !projectEl || !partEl || !attEl || !gradeEl) return;

  const p1 = parseFloat(p1El.value);
  const p2 = parseFloat(p2El.value);
  const p3 = parseFloat(p3El.value);
  const homework = parseFloat(homeworkEl.value);
  const project = parseFloat(projectEl.value);
  const participation = parseFloat(partEl.value);
  const attendanceVal = parseInt(attEl.value);
  const generalGrade = parseFloat(gradeEl.value);

  // Validaciones
  const validateGrade = (val, name) => {
    if (isNaN(val) || val < 0 || val > 10) {
      showToast("Error de Calificación", `Por favor ingresa una nota de ${name} válida entre 0 y 10.`, "error");
      return false;
    }
    return true;
  };

  if (!validateGrade(p1, "Examen P1")) return;
  if (!validateGrade(p2, "Examen P2")) return;
  if (!validateGrade(p3, "Examen P3")) return;
  if (!validateGrade(homework, "Tareas")) return;
  if (!validateGrade(project, "Proyectos")) return;
  if (isNaN(attendanceVal) || attendanceVal < 0 || attendanceVal > 100) {
    showToast("Error de Asistencia", "Por favor ingresa un porcentaje de asistencia válido entre 0 y 100.", "error");
    return;
  }
  if (!validateGrade(generalGrade, "Promedio General")) return;

  const btn = document.getElementById(`part-btn-${studentId}`);

  if (btn) btn.disabled = true;
  p1El.disabled = true;
  p2El.disabled = true;
  p3El.disabled = true;
  homeworkEl.disabled = true;
  projectEl.disabled = true;
  partEl.disabled = true;
  attEl.disabled = true;
  gradeEl.disabled = true;

  // Simulación de guardado (500ms)
  setTimeout(() => {
    student.p1 = p1;
    student.p2 = p2;
    student.p3 = p3;
    student.homework = homework;
    student.project = project;
    student.participation = participation;
    student.attendance = `${attendanceVal}%`;
    student.generalGrade = generalGrade;

    // Persistir en memoria de sesión y almacenamiento local del maestro
    sessionStorage.setItem("liceo_student_session", JSON.stringify(userSessionData));
    localStorage.setItem(`participation_v2_${userSessionData.email}`, JSON.stringify(userSessionData.materiasAsignadas));

    // Sincronizar cambios en el localStorage del alumno demo
    updateStudentPersistedData(student.name, teacherSelectedSubjectId, {
      p1, p2, p3, homework, project, participation, attendance: attendanceVal, generalGrade
    });

    if (btn) btn.disabled = false;
    p1El.disabled = false;
    p2El.disabled = false;
    p3El.disabled = false;
    homeworkEl.disabled = false;
    projectEl.disabled = false;
    partEl.disabled = false;
    attEl.disabled = false;
    gradeEl.disabled = false;

    calculateTeacherGroupStats(sub);

    showToast(
      "Calificaciones Guardadas",
      `Se actualizaron las notas de ${student.name} correctamente.`,
      "success"
    );
  }, 500);
}

function updateStudentPersistedData(studentName, subjectId, newGrades) {
  if (studentName === "Santiago Ortega Gómez") {
    const studentEmail = "alumno@liceo.edu";
    let studentData;
    const saved = localStorage.getItem(`student_data_${studentEmail}`);
    if (saved) {
      studentData = JSON.parse(saved);
    } else {
      studentData = JSON.parse(JSON.stringify(ESTUDIANTE_ACTIVO));
    }

    const sub = studentData.materiasCursadas.find(item => item.id === subjectId);
    if (sub) {
      sub.p1 = newGrades.p1;
      sub.p2 = newGrades.p2;
      sub.p3 = newGrades.p3;
      sub.homework = newGrades.homework;
      sub.project = newGrades.project;
      sub.participation = newGrades.participation;
      sub.attendance = `${newGrades.attendance}%`;
      sub.grade = newGrades.generalGrade;
    }

    // Recalcular promedios generales del alumno
    const validGrades = studentData.materiasCursadas.map(m => m.grade);
    const avgGrade = validGrades.reduce((sum, g) => sum + g, 0) / validGrades.length;
    studentData.promedio = avgGrade;

    const validAttendances = studentData.materiasCursadas.map(m => parseInt(m.attendance) || 0);
    const avgAttendance = validAttendances.reduce((sum, a) => sum + a, 0) / validAttendances.length;
    studentData.asistencias = `${Math.round(avgAttendance)}%`;

    localStorage.setItem(`student_data_${studentEmail}`, JSON.stringify(studentData));
  }
}

function calculateTeacherGroupStats(subject) {
  const totalStudents = subject.alumnos.length;
  if (totalStudents === 0) return;

  // Promedio de participación grupal
  const sumParticipation = subject.alumnos.reduce((sum, st) => sum + st.participation, 0);
  const avgParticipation = sumParticipation / totalStudents;

  // Promedio general grupal
  const sumGeneral = subject.alumnos.reduce((sum, st) => sum + st.generalGrade, 0);
  const avgGeneral = sumGeneral / totalStudents;

  const avgPartLabel = document.getElementById("teacher-group-participation-avg");
  if (avgPartLabel) avgPartLabel.innerText = `${avgParticipation.toFixed(1)} / 10`;

  const evaluatedCount = document.getElementById("teacher-group-evaluated-count");
  if (evaluatedCount) evaluatedCount.innerText = `${totalStudents} / ${totalStudents}`;

  // Actualizar promedio general en sidebar
  const avgGeneralLabel = document.getElementById("teacher-group-general-avg");
  if (avgGeneralLabel) {
    avgGeneralLabel.innerText = `${avgGeneral.toFixed(1)} / 10`;
  }

  const sidebarArea = document.querySelector(".portal-sidebar-area");
  if (sidebarArea) {
    const statRows = sidebarArea.querySelectorAll(".status-summary-row");
    statRows.forEach(row => {
      if (row.innerHTML.includes("Rendimiento Promedio Gral")) {
        const strongTag = row.querySelector("strong");
        if (strongTag && strongTag.id !== "teacher-group-general-avg") {
          strongTag.innerText = `${avgGeneral.toFixed(1)} / 10`;
        }
      }
    });
  }

  // Progreso de evaluación
  const percentText = document.getElementById("teacher-eval-percent-text");
  const percentBar = document.getElementById("teacher-eval-percent-bar");
  
  if (percentText) percentText.innerText = "100%";
  if (percentBar) percentBar.style.width = "100%";
}


// ==========================================================================
// 11. PANEL DE ADMINISTRADOR (CRUD + EVALUACIONES)
// ==========================================================================

// --- Admin Data Store (persisted in localStorage) ---
let adminMaterias = [];
let adminAlumnos = [];
let adminMaestros = [];

const ADMIN_LS_MATERIAS = "admin_materias_v2";
const ADMIN_LS_ALUMNOS  = "admin_alumnos_v2";
const ADMIN_LS_MAESTROS = "admin_maestros_v2";

const DEFAULT_TEACHER_IMG = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150";

function loadAdminData() {
  // Load or seed materias
  const savedMaterias = localStorage.getItem(ADMIN_LS_MATERIAS);
  if (savedMaterias) {
    adminMaterias = JSON.parse(savedMaterias);
  } else {
    // Seed from CATALOGO_MATERIAS
    adminMaterias = CATALOGO_MATERIAS.map(m => ({
      id: m.id,
      codigo: `${m.category.substring(0,3).toUpperCase()}-${Math.floor(Math.random()*900)+100}`,
      titulo: m.title,
      categoria: m.category,
      horas: m.hours,
      tipo: m.type,
      nivel: m.level,
      desc: m.desc
    }));
    localStorage.setItem(ADMIN_LS_MATERIAS, JSON.stringify(adminMaterias));
  }

  // Load or seed alumnos
  const savedAlumnos = localStorage.getItem(ADMIN_LS_ALUMNOS);
  if (savedAlumnos) {
    adminAlumnos = JSON.parse(savedAlumnos);
  } else {
    adminAlumnos = [
      { id: "al-1", matricula: "ES-24001", nombre: "Santiago Ortega Gómez", grado: "3° de Secundaria", grupo: "A", promedio: 9.4, email: "s.ortega@sec0736.edu.mx" },
      { id: "al-2", matricula: "ES-24002", nombre: "Valentina Paz",          grado: "3° de Secundaria", grupo: "A", promedio: 9.2, email: "v.paz@sec0736.edu.mx" },
      { id: "al-3", matricula: "ES-24003", nombre: "Mateo Ruiz",             grado: "3° de Secundaria", grupo: "B", promedio: 8.8, email: "m.ruiz@sec0736.edu.mx" },
      { id: "al-4", matricula: "ES-24004", nombre: "Isabella Herrera",       grado: "2° de Secundaria", grupo: "A", promedio: 9.8, email: "i.herrera@sec0736.edu.mx" },
      { id: "al-5", matricula: "ES-24005", nombre: "Sebastián Castro",       grado: "2° de Secundaria", grupo: "B", promedio: 7.9, email: "s.castro@sec0736.edu.mx" }
    ];
    localStorage.setItem(ADMIN_LS_ALUMNOS, JSON.stringify(adminAlumnos));
  }

  // Load or seed maestros
  const savedMaestros = localStorage.getItem(ADMIN_LS_MAESTROS);
  if (savedMaestros) {
    adminMaestros = JSON.parse(savedMaestros);
  } else {
    adminMaestros = [
      { id: "sergio-hernandez",  nombre: "Prof. Sergio Hernandez Benitez",     email: "s.hernandez@escuela0736.edu.mx",  titulo: "Lic. en Matemáticas (UNAM)",                    departamento: "Ciencias Exactas",       materia: "Matemáticas",             img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150" },
      { id: "corina-maganan",    nombre: "Profa. Corina Magañan Perez",        email: "c.maganan@escuela0736.edu.mx",    titulo: "Lic. en Lengua y Literatura Españolas (UV)",    departamento: "Humanidades e Idiomas",  materia: "Español",                 img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" },
      { id: "ruben-gonzalez",    nombre: "Prof. Ruben Gonzalez",              email: "r.gonzalez@escuela0736.edu.mx",   titulo: "Lic. en Química (BUAP)",                        departamento: "Ciencias Experimentales", materia: "Química",                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" },
      { id: "amalia-hernandez",  nombre: "Profa. Amalia Hernandez",           email: "amalia.h@escuela0736.edu.mx",     titulo: "Lic. en Lenguas Extranjeras (UAEM)",            departamento: "Humanidades e Idiomas",  materia: "Inglés",                  img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" },
      { id: "abigail-martinez",  nombre: "Profa. Abigail Eunice Martinez Ramirez", email: "a.martinez@escuela0736.edu.mx", titulo: "Ing. en Sistemas Computacionales (IPN)",     departamento: "Tecnología",             materia: "Tecnología",              img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" },
      { id: "lucia-juarez",      nombre: "Profa. Lucia Juarez Salinas",        email: "l.juarez@escuela0736.edu.mx",     titulo: "Lic. en Derecho y Ciencias Políticas (IBERO)",  departamento: "Humanidades e Idiomas",  materia: "Formación Cívica y Ética", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" },
      { id: "patricia-hist",     nombre: "Profa. Patricia Morales",           email: "patricia.h@escuela0736.edu.mx",   titulo: "Mtra. en Historia de México (UNAM)",            departamento: "Humanidades e Idiomas",  materia: "Historia",                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150" },
      { id: "victor",            nombre: "Prof. Victor Mendoza",              email: "victor@escuela0736.edu.mx",       titulo: "Lic. en Educación Física (ESEF)",               departamento: "Artes y Deportes",       materia: "Educación Física",        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150" },
      { id: "alejandra-hernandez", nombre: "Profa. Alejandra Hernandez",      email: "a.hernandez@escuela0736.edu.mx",  titulo: "Lic. en Psicología Educativa (UAM)",            departamento: "Orientación Escolar",    materia: "Tutoría",                 img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" },
      { id: "patricia-art",      nombre: "Profa. Patricia Morales",           email: "patricia.a@escuela0736.edu.mx",   titulo: "Mtra. en Artes Plásticas (ENAP-UNAM)",         departamento: "Artes y Deportes",       materia: "Artes",                   img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150" },
      { id: "ricardo-manzano",   nombre: "Prof. Ricardo Manzano",            email: "r.manzano@escuela0736.edu.mx",    titulo: "Mtr. en Género y Educación (UPN)",              departamento: "Humanidades e Idiomas",  materia: "Igualdades de Género",    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150" }
    ];
    localStorage.setItem(ADMIN_LS_MAESTROS, JSON.stringify(adminMaestros));
  }
}

function saveAdminData() {
  localStorage.setItem(ADMIN_LS_MATERIAS, JSON.stringify(adminMaterias));
  localStorage.setItem(ADMIN_LS_ALUMNOS,  JSON.stringify(adminAlumnos));
  localStorage.setItem(ADMIN_LS_MAESTROS, JSON.stringify(adminMaestros));
  updateAdminStats();
}

function updateAdminStats() {
  const elMat = document.getElementById("admin-stat-materias");
  const elAl  = document.getElementById("admin-stat-alumnos");
  const elMae = document.getElementById("admin-stat-maestros");
  if (elMat) elMat.innerText = adminMaterias.length;
  if (elAl)  elAl.innerText  = adminAlumnos.length;
  if (elMae) elMae.innerText = adminMaestros.length;
}

// --- Admin Tab Navigation ---
function renderAdminDashboard() {
  updateAdminStats();
  renderAdminMaterias();
  renderAdminAlumnos();
  renderAdminMaestros();
  renderAdminEvaluaciones();
  initAdminTabs();
  initAdminForms();
}

function initAdminTabs() {
  const tabBtns = document.querySelectorAll(".admin-tab-btn");
  const tabContents = document.querySelectorAll(".admin-tab-content");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-admin-tab");
      tabBtns.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      const target = document.getElementById(`admin-tab-${tabId}`);
      if (target) target.classList.add("active");

      // Re-render evaluaciones on tab switch for freshness
      if (tabId === "evaluaciones") renderAdminEvaluaciones();
    });
  });
}

// --- Category label helper ---
function categoryLabel(cat) {
  const map = { tecnologia: "Tecnología", ciencias: "Ciencias", humanidades: "Humanidades", artes: "Artes y Deportes" };
  return map[cat] || cat;
}

// --- MATERIAS CRUD ---
function renderAdminMaterias() {
  const tbody = document.getElementById("admin-materias-tbody");
  if (!tbody) return;
  if (adminMaterias.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--text-muted);">No hay materias registradas. Agrega la primera.</td></tr>`;
    return;
  }
  tbody.innerHTML = adminMaterias.map(m => `
    <tr id="mat-row-${m.id}">
      <td><strong>${m.codigo || "-"}</strong></td>
      <td>${m.titulo}</td>
      <td><span style="font-size:0.78rem;background:var(--bg-light);padding:0.2rem 0.6rem;border-radius:99px;">${categoryLabel(m.categoria)}</span></td>
      <td class="text-center">${m.horas}h</td>
      <td>${m.tipo || "Obligatoria"}</td>
      <td>${m.nivel || "-"}</td>
      <td>
        <div class="admin-table-actions">
          <button class="admin-action-btn admin-btn-edit" onclick="editMateria('${m.id}')"><i class="fa-solid fa-pen"></i> Editar</button>
          <button class="admin-action-btn admin-btn-delete" onclick="deleteMateria('${m.id}')"><i class="fa-solid fa-trash"></i> Eliminar</button>
        </div>
      </td>
    </tr>
  `).join("");
}

window.editMateria = function(id) {
  const m = adminMaterias.find(x => x.id === id);
  if (!m) return;
  document.getElementById("materia-edit-id").value = m.id;
  document.getElementById("f-materia-titulo").value = m.titulo;
  document.getElementById("f-materia-codigo").value = m.codigo || "";
  document.getElementById("f-materia-categoria").value = m.categoria;
  document.getElementById("f-materia-horas").value = m.horas;
  document.getElementById("f-materia-nivel").value = m.nivel || "";
  document.getElementById("f-materia-tipo").value = m.tipo || "Obligatoria";
  document.getElementById("f-materia-desc").value = m.desc || "";
  document.getElementById("form-materia-title").innerHTML = '<i class="fa-solid fa-pen"></i> Editar Materia';
  showFormPanel("materia");
};

window.deleteMateria = function(id) {
  if (!confirm("¿Eliminar esta materia? Esta acción no se puede deshacer.")) return;
  const row = document.getElementById(`mat-row-${id}`);
  if (row) { row.classList.add("row-shake"); }
  setTimeout(() => {
    adminMaterias = adminMaterias.filter(x => x.id !== id);
    saveAdminData();
    renderAdminMaterias();
    showToast("Materia Eliminada", "La materia ha sido removida del sistema.", "success");
  }, 450);
};

// --- ALUMNOS CRUD ---
function renderAdminAlumnos() {
  const tbody = document.getElementById("admin-alumnos-tbody");
  if (!tbody) return;
  if (adminAlumnos.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--text-muted);">No hay alumnos registrados.</td></tr>`;
    return;
  }
  tbody.innerHTML = adminAlumnos.map(a => `
    <tr id="al-row-${a.id}">
      <td><strong>${a.matricula}</strong></td>
      <td>${a.nombre}</td>
      <td>${a.grado}</td>
      <td>${a.grupo}</td>
      <td><span class="grade-pill-success">${parseFloat(a.promedio || 0).toFixed(1)}</span></td>
      <td style="font-size:0.8rem;">${a.email || "-"}</td>
      <td>
        <div class="admin-table-actions" style="display: flex; gap: 5px; flex-wrap: wrap;">
          <button class="admin-action-btn admin-btn-edit" onclick="editAlumno('${a.id}')"><i class="fa-solid fa-pen"></i> Editar</button>
          <button class="admin-action-btn" style="background-color: var(--primary); color: white;" onclick="downloadStudentBoletaFromAdmin('${a.id}')"><i class="fa-solid fa-file-pdf"></i> Boleta PDF</button>
          <button class="admin-action-btn admin-btn-delete" onclick="deleteAlumno('${a.id}')"><i class="fa-solid fa-trash"></i> Eliminar</button>
        </div>
      </td>
    </tr>
  `).join("");
}

window.editAlumno = function(id) {
  const a = adminAlumnos.find(x => x.id === id);
  if (!a) return;
  document.getElementById("alumno-edit-id").value = a.id;
  document.getElementById("f-alumno-nombre").value = a.nombre;
  document.getElementById("f-alumno-matricula").value = a.matricula;
  document.getElementById("f-alumno-grado").value = a.grado;
  document.getElementById("f-alumno-grupo").value = a.grupo;
  document.getElementById("f-alumno-email").value = a.email || "";
  document.getElementById("f-alumno-promedio").value = a.promedio || "";
  document.getElementById("f-alumno-password").value = a.password || "123456";
  document.getElementById("f-alumno-code-live").value = a.codeLive || "LIVE301";
  document.getElementById("form-alumno-title").innerHTML = '<i class="fa-solid fa-pen"></i> Editar Alumno';
  showFormPanel("alumno");
};

window.deleteAlumno = function(id) {
  if (!confirm("¿Eliminar este alumno del sistema?")) return;
  const row = document.getElementById(`al-row-${id}`);
  if (row) row.classList.add("row-shake");
  setTimeout(() => {
    adminAlumnos = adminAlumnos.filter(x => x.id !== id);
    saveAdminData();
    renderAdminAlumnos();
    showToast("Alumno Eliminado", "El registro del alumno ha sido removido.", "success");
  }, 450);
};

// --- MAESTROS CRUD ---
function renderAdminMaestros() {
  const grid = document.getElementById("admin-maestros-grid");
  if (!grid) return;
  if (adminMaestros.length === 0) {
    grid.innerHTML = `<div style="text-align:center;padding:3rem;color:var(--text-muted);grid-column:1/-1;">No hay maestros registrados.</div>`;
    return;
  }
  grid.innerHTML = adminMaestros.map(t => `
    <div class="admin-teacher-card" id="mae-card-${t.id}">
      <div class="admin-teacher-card-header">
        <img src="${t.img || DEFAULT_TEACHER_IMG}" alt="${t.nombre}" class="admin-teacher-avatar" onerror="this.src='${DEFAULT_TEACHER_IMG}'">
      </div>
      <div class="admin-teacher-card-body">
        <p class="admin-teacher-name">${t.nombre}</p>
        <p class="admin-teacher-degree">${t.titulo}</p>
        <div class="admin-teacher-meta">
          <span><i class="fa-solid fa-building-columns text-emerald"></i> ${t.departamento}</span>
          <span><i class="fa-solid fa-book text-blue"></i> ${t.materia || "Sin asignar"}</span>
          <span><i class="fa-regular fa-envelope"></i> ${t.email}</span>
        </div>
        <div class="admin-teacher-card-actions">
          <button class="admin-action-btn admin-btn-edit" style="flex:1;" onclick="editMaestro('${t.id}')"><i class="fa-solid fa-pen"></i> Editar</button>
          <button class="admin-action-btn admin-btn-delete" onclick="deleteMaestro('${t.id}')"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    </div>
  `).join("");
}

window.editMaestro = function(id) {
  const t = adminMaestros.find(x => x.id === id);
  if (!t) return;
  document.getElementById("maestro-edit-id").value = t.id;
  document.getElementById("f-maestro-nombre").value = t.nombre;
  document.getElementById("f-maestro-email").value = t.email;
  document.getElementById("f-maestro-titulo").value = t.titulo;
  document.getElementById("f-maestro-depto").value = t.departamento;
  document.getElementById("f-maestro-materia").value = t.materia || "";
  document.getElementById("f-maestro-img").value = t.img || "";
  document.getElementById("f-maestro-password").value = t.password || "123456";
  document.getElementById("form-maestro-title").innerHTML = '<i class="fa-solid fa-pen"></i> Editar Maestro';
  showFormPanel("maestro");
};

window.deleteMaestro = function(id) {
  if (!confirm("¿Eliminar este maestro del sistema?")) return;
  const card = document.getElementById(`mae-card-${id}`);
  if (card) { card.style.transition = "opacity 0.3s,transform 0.3s"; card.style.opacity = "0"; card.style.transform = "scale(0.9)"; }
  setTimeout(() => {
    adminMaestros = adminMaestros.filter(x => x.id !== id);
    saveAdminData();
    renderAdminMaestros();
    showToast("Maestro Eliminado", "El registro del docente ha sido removido.", "success");
  }, 350);
};

// --- EVALUACIONES (read-only results) ---
function renderAdminEvaluaciones() {
  renderEvalSummaryCards();
  renderEvalComments();
  renderParticipationRanking();
  renderSchoolWideStats();
  renderTeacherRatingsChartAndHonors();
}

function renderTeacherRatingsChartAndHonors() {
  const barsContainer = document.getElementById("admin-teacher-bars-container");
  const honorsList = document.getElementById("admin-teacher-honors-list");
  if (!barsContainer || !honorsList) return;

  // Compilar datos de calificaciones de maestros
  const teacherDataList = [];
  
  // Agregar maestros de adminMaestros y ESTUDIANTE_ACTIVO
  const allTeachersMap = {};
  adminMaestros.forEach(t => {
    allTeachersMap[t.id] = { id: t.id, name: t.nombre, img: t.img, department: t.departamento, ratings: [] };
  });

  ESTUDIANTE_ACTIVO.profesores.forEach(p => {
    if (!allTeachersMap[p.id]) {
      allTeachersMap[p.id] = { id: p.id, name: p.name, img: p.img, department: "Docente", ratings: [] };
    }
  });

  // Leer calificaciones de los alumnos desde localStorage
  const savedRatings = localStorage.getItem(`ratings_${ESTUDIANTE_ACTIVO.email}`);
  if (savedRatings) {
    const profs = JSON.parse(savedRatings);
    profs.forEach(p => {
      if (p.userRating > 0 && allTeachersMap[p.id]) {
        allTeachersMap[p.id].ratings.push(p.userRating);
      }
    });
  }

  // Si no hay votos, usar promedio por defecto (ratingAvg)
  ESTUDIANTE_ACTIVO.profesores.forEach(p => {
    if (allTeachersMap[p.id] && allTeachersMap[p.id].ratings.length === 0) {
      allTeachersMap[p.id].ratings.push(p.ratingAvg);
    }
  });

  // Convertir mapa a array y calcular promedios
  Object.values(allTeachersMap).forEach(t => {
    const avg = t.ratings.length > 0 ? t.ratings.reduce((a, b) => a + b, 0) / t.ratings.length : 0;
    teacherDataList.push({ ...t, average: parseFloat(avg.toFixed(2)) });
  });

  // Ordenar de mayor a menor promedio
  teacherDataList.sort((a, b) => b.average - a.average);

  // Renderizar Gráfico de Barras horizontales
  barsContainer.innerHTML = teacherDataList.map(t => {
    const percentage = (t.average / 5.0) * 100;
    // Colores según rango
    let barColor = "#ef4444"; // rojo
    if (t.average >= 4.7) barColor = "#f59e0b"; // oro
    else if (t.average >= 4.0) barColor = "var(--secondary)"; // verde emerald

    return `
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem;">
          <strong style="color: var(--primary);">${t.name}</strong>
          <span style="font-weight: bold; color: ${barColor};">${t.average.toFixed(1)} ★</span>
        </div>
        <div style="background: rgba(0,0,0,0.05); height: 10px; border-radius: 99px; width: 100%; overflow: hidden; position: relative;">
          <div style="width: ${percentage}%; background: ${barColor}; height: 100%; border-radius: 99px; transition: width 0.8s ease;"></div>
        </div>
      </div>
    `;
  }).join("");

  // Renderizar Cuadro de Menciones Honoríficas (Promedio >= 4.7★)
  const honorTeachers = teacherDataList.filter(t => t.average >= 4.7);

  if (honorTeachers.length === 0) {
    honorsList.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem; color: #92400e; font-size: 0.82rem;">
        <i class="fa-solid fa-hourglass-half" style="font-size: 1.8rem; margin-bottom: 8px; display: block; opacity: 0.7;"></i>
        Aún ningún maestro cumple el criterio del umbral de 4.7★.
      </div>
    `;
  } else {
    honorsList.innerHTML = honorTeachers.map(t => `
      <div style="display: flex; align-items: center; justify-content: space-between; background: white; border: 1px solid #fcd34d; padding: 0.75rem 1rem; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); border-left: 5px solid #f59e0b;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <img src="${t.img || DEFAULT_TEACHER_IMG}" style="width: 38px; height: 38px; border-radius: 50%; object-fit: cover; border: 2px solid #f59e0b;" onerror="this.src='${DEFAULT_TEACHER_IMG}'">
          <div>
            <h5 style="font-size: 0.85rem; color: var(--primary); margin: 0;">${t.name}</h5>
            <span style="font-size: 0.72rem; color: var(--text-muted);">${t.department}</span>
          </div>
        </div>
        <div style="text-align: right;">
          <span style="background: #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 99px; font-size: 0.75rem; font-weight: bold; border: 1px solid #fde68a; display: block;">Mención Honorífica</span>
          <strong style="color: #b45309; font-size: 0.85rem; display: block; margin-top: 3px;">${t.average.toFixed(2)} ★</strong>
        </div>
      </div>
    `).join("");
  }
}

function renderSchoolWideStats() {
  // Calcular promedios generales agrupados por grado
  const gradesData = {
    "1° de Secundaria": { sum: 0, count: 0 },
    "2° de Secundaria": { sum: 0, count: 0 },
    "3° de Secundaria": { sum: 0, count: 0 }
  };

  adminAlumnos.forEach(a => {
    const gradeKey = a.grado;
    const prom = parseFloat(a.promedio) || 0;
    if (gradesData[gradeKey]) {
      gradesData[gradeKey].sum += prom;
      gradesData[gradeKey].count += 1;
    }
  });

  const avg1 = gradesData["1° de Secundaria"].count > 0 ? gradesData["1° de Secundaria"].sum / gradesData["1° de Secundaria"].count : 0;
  const avg2 = gradesData["2° de Secundaria"].count > 0 ? gradesData["2° de Secundaria"].sum / gradesData["2° de Secundaria"].count : 0;
  const avg3 = gradesData["3° de Secundaria"].count > 0 ? gradesData["3° de Secundaria"].sum / gradesData["3° de Secundaria"].count : 0;

  // Actualizar valores en gráfico
  const val1 = document.getElementById("chart-val-1grade");
  const bar1 = document.getElementById("chart-bar-1grade");
  const val2 = document.getElementById("chart-val-2grade");
  const bar2 = document.getElementById("chart-bar-2grade");
  const val3 = document.getElementById("chart-val-3grade");
  const bar3 = document.getElementById("chart-bar-3grade");

  if (val1 && bar1) {
    val1.innerText = avg1.toFixed(1);
    bar1.style.height = `${(avg1 / 10.0) * 100}%`;
  }
  if (val2 && bar2) {
    val2.innerText = avg2.toFixed(1);
    bar2.style.height = `${(avg2 / 10.0) * 100}%`;
  }
  if (val3 && bar3) {
    val3.innerText = avg3.toFixed(1);
    bar3.style.height = `${(avg3 / 10.0) * 100}%`;
  }

  // Actualizar indicadores generales
  const totalStudents = adminAlumnos.length;
  const globalSum = adminAlumnos.reduce((s, a) => s + (parseFloat(a.promedio) || 0), 0);
  const globalAvg = totalStudents > 0 ? globalSum / totalStudents : 0;

  const schoolAvgVal = document.getElementById("school-general-avg-val");
  const schoolTotalVal = document.getElementById("school-total-students-val");
  const schoolBestVal = document.getElementById("school-best-grade-val");

  if (schoolAvgVal) schoolAvgVal.innerText = globalAvg.toFixed(2);
  if (schoolTotalVal) schoolTotalVal.innerText = totalStudents;

  if (schoolBestVal) {
    let bestGrade = "N/A";
    let maxAvg = -1;
    if (avg1 > maxAvg && avg1 > 0) { maxAvg = avg1; bestGrade = "1° de Secundaria"; }
    if (avg2 > maxAvg && avg2 > 0) { maxAvg = avg2; bestGrade = "2° de Secundaria"; }
    if (avg3 > maxAvg && avg3 > 0) { maxAvg = avg3; bestGrade = "3° de Secundaria"; }
    schoolBestVal.innerText = bestGrade;
  }
}

function renderEvalSummaryCards() {
  const container = document.getElementById("eval-summary-cards");
  if (!container) return;

  // Build aggregated ratings per teacher from localStorage
  const teacherRatings = {};
  adminMaestros.forEach(t => {
    teacherRatings[t.id] = { name: t.nombre, img: t.img, ratings: [], comments: [] };
  });

  // Also check by name from ESTUDIANTE_ACTIVO professors
  ESTUDIANTE_ACTIVO.profesores.forEach(p => {
    if (!teacherRatings[p.id]) {
      teacherRatings[p.id] = { name: p.name, img: p.img, ratings: [], comments: [] };
    }
  });

  // Read student ratings from localStorage (stored per-student)
  const savedRatings = localStorage.getItem(`ratings_${ESTUDIANTE_ACTIVO.email}`);
  if (savedRatings) {
    const profs = JSON.parse(savedRatings);
    profs.forEach(p => {
      if (p.userRating > 0) {
        if (!teacherRatings[p.id]) teacherRatings[p.id] = { name: p.name, img: p.img, ratings: [], comments: [] };
        teacherRatings[p.id].ratings.push(p.userRating);
        if (p.userComment) teacherRatings[p.id].comments.push({ comment: p.userComment, rating: p.userRating, studentName: ESTUDIANTE_ACTIVO.nombre });
      }
    });
  }

  // For teachers without student ratings, use their ratingAvg from ESTUDIANTE_ACTIVO
  ESTUDIANTE_ACTIVO.profesores.forEach(p => {
    if (teacherRatings[p.id] && teacherRatings[p.id].ratings.length === 0) {
      teacherRatings[p.id].ratings.push(p.ratingAvg);
    }
  });

  container.innerHTML = Object.entries(teacherRatings).map(([id, data]) => {
    if (!data.name) return "";
    const avgRating = data.ratings.length > 0 ? (data.ratings.reduce((a, b) => a + b, 0) / data.ratings.length).toFixed(1) : "N/A";
    const stars = data.ratings.length > 0 ? "★".repeat(Math.round(data.ratings.reduce((a,b) => a+b,0)/data.ratings.length)).padEnd(5,"☆").substring(0,5) : "☆☆☆☆☆";
    const votesLabel = ESTUDIANTE_ACTIVO.profesores.find(p => p.id === id)?.ratingCount || data.ratings.length;
    return `
      <div class="eval-summary-card">
        <img src="${data.img || DEFAULT_TEACHER_IMG}" alt="${data.name}" class="eval-summary-photo" onerror="this.src='${DEFAULT_TEACHER_IMG}'">
        <div class="eval-summary-info">
          <p class="eval-teacher-name">${data.name}</p>
          <div class="eval-stars-display">
            <span>${stars}</span>
            <span class="eval-score">${avgRating}</span>
          </div>
          <div class="eval-votes">${votesLabel} evaluaciones</div>
        </div>
      </div>
    `;
  }).join("");
}

function renderEvalComments() {
  const feed = document.getElementById("eval-comments-feed");
  if (!feed) return;

  const allComments = [];

  // Collect from localStorage student ratings
  const savedRatings = localStorage.getItem(`ratings_${ESTUDIANTE_ACTIVO.email}`);
  if (savedRatings) {
    const profs = JSON.parse(savedRatings);
    profs.forEach(p => {
      if (p.userComment && p.userComment.trim()) {
        allComments.push({
          teacherName: p.name,
          teacherImg: p.img,
          studentName: ESTUDIANTE_ACTIVO.nombre,
          comment: p.userComment,
          rating: p.userRating
        });
      }
    });
  }

  if (allComments.length === 0) {
    feed.innerHTML = `<div class="eval-no-comments"><i class="fa-regular fa-comment-slash" style="font-size:2rem;margin-bottom:0.5rem;display:block;"></i>Aún no hay comentarios escritos de alumnos. Los comentarios aparecerán aquí cuando los alumnos califiquen a sus maestros.</div>`;
    return;
  }

  feed.innerHTML = allComments.map(c => {
    const starsStr = "★".repeat(c.rating) + "☆".repeat(5 - c.rating);
    return `
      <div class="eval-comment-item">
        <div class="eval-comment-header">
          <img src="${c.teacherImg || DEFAULT_TEACHER_IMG}" alt="${c.teacherName}" class="eval-comment-avatar" onerror="this.src='${DEFAULT_TEACHER_IMG}'">
          <div class="eval-comment-meta">
            <div class="eval-comment-teacher">${c.teacherName}</div>
            <div class="eval-comment-student">Comentario de: ${c.studentName}</div>
          </div>
          <span class="eval-comment-stars">${starsStr}</span>
        </div>
        <p class="eval-comment-text">"${c.comment}"</p>
      </div>
    `;
  }).join("");
}

function renderParticipationRanking() {
  const tbody = document.getElementById("admin-participation-tbody");
  if (!tbody) return;

  const savedParticipation = localStorage.getItem(`participation_v2_${DOCENTE_ACTIVO.email}`);
  const materias = savedParticipation
    ? JSON.parse(savedParticipation)
    : DOCENTE_ACTIVO.materiasAsignadas;

  const ranked = materias.map(mat => {
    const evaluated = mat.alumnos.filter(a => a.participation > 0);
    const avg = evaluated.length > 0
      ? (evaluated.reduce((sum, a) => sum + a.participation, 0) / evaluated.length).toFixed(1)
      : "N/A";
    return { title: mat.title, code: mat.code, teacher: DOCENTE_ACTIVO.nombre, avg, count: `${evaluated.length}/${mat.alumnos.length}` };
  }).sort((a, b) => parseFloat(b.avg) - parseFloat(a.avg));

  tbody.innerHTML = ranked.map((r, i) => `
    <tr>
      <td class="text-center"><strong>${i + 1}</strong></td>
      <td><strong>${r.title}</strong><br><span style="font-size:0.75rem;color:var(--text-muted);">${r.code}</span></td>
      <td>${r.teacher}</td>
      <td class="text-center">
        <span class="grade-pill-success" style="${parseFloat(r.avg) >= 9 ? '' : 'background:rgba(245,158,11,0.15);color:#d97706;'}">${r.avg}</span>
      </td>
      <td class="text-center">${r.count}</td>
    </tr>
  `).join("");
}

// --- Form Panel toggle ---
function showFormPanel(entity) {
  const panel = document.getElementById(`form-panel-${entity}`);
  if (panel) panel.classList.remove("hidden");
}
function hideFormPanel(entity) {
  const panel = document.getElementById(`form-panel-${entity}`);
  if (panel) panel.classList.add("hidden");
}

// --- Init Admin Forms ---
function initAdminForms() {
  // === MATERIA FORM ===
  const btnAddMat    = document.getElementById("btn-add-materia");
  const btnCloseMat  = document.getElementById("btn-close-form-materia");
  const btnCancelMat = document.getElementById("btn-cancel-materia");
  const formMat      = document.getElementById("form-materia");

  if (btnAddMat && !btnAddMat.dataset.bound) {
    btnAddMat.dataset.bound = "1";
    btnAddMat.addEventListener("click", () => {
      formMat.reset();
      document.getElementById("materia-edit-id").value = "";
      document.getElementById("form-materia-title").innerHTML = '<i class="fa-solid fa-plus-circle"></i> Agregar Nueva Materia';
      showFormPanel("materia");
    });
  }
  if (btnCloseMat && !btnCloseMat.dataset.bound) {
    btnCloseMat.dataset.bound = "1";
    btnCloseMat.addEventListener("click", () => hideFormPanel("materia"));
  }
  if (btnCancelMat && !btnCancelMat.dataset.bound) {
    btnCancelMat.dataset.bound = "1";
    btnCancelMat.addEventListener("click", () => hideFormPanel("materia"));
  }
  if (formMat && !formMat.dataset.bound) {
    formMat.dataset.bound = "1";
    formMat.addEventListener("submit", (e) => {
      e.preventDefault();
      const titulo = document.getElementById("f-materia-titulo").value.trim();
      const codigo = document.getElementById("f-materia-codigo").value.trim();
      const categoria = document.getElementById("f-materia-categoria").value;
      const horas = parseInt(document.getElementById("f-materia-horas").value) || 1;
      const nivel = document.getElementById("f-materia-nivel").value.trim();
      const tipo = document.getElementById("f-materia-tipo").value;
      const desc = document.getElementById("f-materia-desc").value.trim();
      if (!titulo || !codigo || !categoria) {
        showToast("Campos Requeridos", "Por favor llena los campos obligatorios.", "error");
        return;
      }
      const editId = document.getElementById("materia-edit-id").value;
      if (editId) {
        const idx = adminMaterias.findIndex(x => x.id === editId);
        if (idx >= 0) adminMaterias[idx] = { ...adminMaterias[idx], titulo, codigo, categoria, horas, nivel, tipo, desc };
        showToast("Materia Actualizada", `"${titulo}" ha sido actualizada con éxito.`, "success");
      } else {
        adminMaterias.push({ id: `mat-${Date.now()}`, titulo, codigo, categoria, horas, nivel, tipo, desc });
        showToast("Materia Creada", `"${titulo}" fue añadida al catálogo.`, "success");
      }
      saveAdminData();
      renderAdminMaterias();
      hideFormPanel("materia");
      formMat.reset();
    });
  }

  // === ALUMNO FORM ===
  const btnAddAl    = document.getElementById("btn-add-alumno");
  const btnCloseAl  = document.getElementById("btn-close-form-alumno");
  const btnCancelAl = document.getElementById("btn-cancel-alumno");
  const formAl      = document.getElementById("form-alumno");

  if (btnAddAl && !btnAddAl.dataset.bound) {
    btnAddAl.dataset.bound = "1";
    btnAddAl.addEventListener("click", () => {
      formAl.reset();
      document.getElementById("alumno-edit-id").value = "";
      document.getElementById("form-alumno-title").innerHTML = '<i class="fa-solid fa-user-plus"></i> Registrar Nuevo Alumno';
      showFormPanel("alumno");
    });
  }
  if (btnCloseAl && !btnCloseAl.dataset.bound) {
    btnCloseAl.dataset.bound = "1";
    btnCloseAl.addEventListener("click", () => hideFormPanel("alumno"));
  }
  if (btnCancelAl && !btnCancelAl.dataset.bound) {
    btnCancelAl.dataset.bound = "1";
    btnCancelAl.addEventListener("click", () => hideFormPanel("alumno"));
  }
  if (formAl && !formAl.dataset.bound) {
    formAl.dataset.bound = "1";
    formAl.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("f-alumno-nombre").value.trim();
      const matricula = document.getElementById("f-alumno-matricula").value.trim();
      const grado = document.getElementById("f-alumno-grado").value;
      const grupo = document.getElementById("f-alumno-grupo").value;
      const email = document.getElementById("f-alumno-email").value.trim();
      const promedio = parseFloat(document.getElementById("f-alumno-promedio").value) || 0;
      const password = document.getElementById("f-alumno-password").value.trim();
      const codeLive = document.getElementById("f-alumno-code-live").value.trim();
      if (!nombre || !matricula || !grado || !password || !codeLive) {
        showToast("Campos Requeridos", "Por favor llena los campos obligatorios, incluyendo la contraseña y la clave en vivo.", "error");
        return;
      }
      const editId = document.getElementById("alumno-edit-id").value;
      if (editId) {
        const idx = adminAlumnos.findIndex(x => x.id === editId);
        if (idx >= 0) adminAlumnos[idx] = { ...adminAlumnos[idx], nombre, matricula, grado, grupo, email, promedio, password, codeLive };
        showToast("Alumno Actualizado", `"${nombre}" ha sido actualizado.`, "success");
      } else {
        adminAlumnos.push({ id: `al-${Date.now()}`, nombre, matricula, grado, grupo, email, promedio, password, codeLive });
        showToast("Alumno Registrado", `"${nombre}" fue añadido al sistema.`, "success");
      }
      saveAdminData();
      renderAdminAlumnos();
      hideFormPanel("alumno");
      formAl.reset();
    });
  }

  // === MAESTRO FORM ===
  const btnAddMae    = document.getElementById("btn-add-maestro");
  const btnCloseMae  = document.getElementById("btn-close-form-maestro");
  const btnCancelMae = document.getElementById("btn-cancel-maestro");
  const formMae      = document.getElementById("form-maestro");

  if (btnAddMae && !btnAddMae.dataset.bound) {
    btnAddMae.dataset.bound = "1";
    btnAddMae.addEventListener("click", () => {
      formMae.reset();
      document.getElementById("maestro-edit-id").value = "";
      document.getElementById("form-maestro-title").innerHTML = '<i class="fa-solid fa-user-tie"></i> Registrar Nuevo Maestro';
      showFormPanel("maestro");
    });
  }
  if (btnCloseMae && !btnCloseMae.dataset.bound) {
    btnCloseMae.dataset.bound = "1";
    btnCloseMae.addEventListener("click", () => hideFormPanel("maestro"));
  }
  if (btnCancelMae && !btnCancelMae.dataset.bound) {
    btnCancelMae.dataset.bound = "1";
    btnCancelMae.addEventListener("click", () => hideFormPanel("maestro"));
  }
  if (formMae && !formMae.dataset.bound) {
    formMae.dataset.bound = "1";
    formMae.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("f-maestro-nombre").value.trim();
      const email  = document.getElementById("f-maestro-email").value.trim();
      const titulo = document.getElementById("f-maestro-titulo").value.trim();
      const departamento = document.getElementById("f-maestro-depto").value;
      const materia = document.getElementById("f-maestro-materia").value.trim();
      const img    = document.getElementById("f-maestro-img").value.trim();
      const password = document.getElementById("f-maestro-password").value.trim();
      if (!nombre || !email || !titulo || !password) {
        showToast("Campos Requeridos", "Por favor llena los campos obligatorios, incluyendo la contraseña.", "error");
        return;
      }
      const editId = document.getElementById("maestro-edit-id").value;
      if (editId) {
        const idx = adminMaestros.findIndex(x => x.id === editId);
        if (idx >= 0) adminMaestros[idx] = { ...adminMaestros[idx], nombre, email, titulo, departamento, materia, img: img || adminMaestros[idx].img, password };
        showToast("Maestro Actualizado", `"${nombre}" ha sido actualizado.`, "success");
      } else {
        adminMaestros.push({ id: `mae-${Date.now()}`, nombre, email, titulo, departamento, materia, img: img || DEFAULT_TEACHER_IMG, password });
        showToast("Maestro Registrado", `"${nombre}" fue añadido al cuerpo docente.`, "success");
      }
      saveAdminData();
      renderAdminMaestros();
      hideFormPanel("maestro");
      formMae.reset();
    });
  }
}

// ==========================================================================
// 9. MÓDULO DE CLASE VIRTUAL
// ==========================================================================

// Horario de clases virtuales (basado en el horario escolar existente)
const VC_SCHEDULE = {
  // Lunes = 1, Martes = 2, Miércoles = 3, Jueves = 4, Viernes = 5
  1: [ // Lunes
    { subject: "Matemáticas", teacher: "Prof. Sergio Hernandez Benitez", teacherImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150", start: "07:30", end: "08:30", topic: "Ecuaciones de segundo grado" },
    { subject: "Matemáticas", teacher: "Prof. Sergio Hernandez Benitez", teacherImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150", start: "08:30", end: "09:30", topic: "Sistemas de ecuaciones lineales" },
    { subject: "Química", teacher: "Prof. Ruben Gonzalez", teacherImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150", start: "10:00", end: "11:30", topic: "Reacciones químicas y balanceo" },
    { subject: "Inglés", teacher: "Profa. Amalia Hernandez", teacherImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150", start: "11:30", end: "13:00", topic: "Present Perfect vs Past Simple" },
  ],
  2: [ // Martes
    { subject: "Historia", teacher: "Profa. Patricia", teacherImg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150", start: "07:30", end: "08:30", topic: "La Revolución Mexicana" },
    { subject: "Inglés", teacher: "Profa. Amalia Hernandez", teacherImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150", start: "08:30", end: "09:30", topic: "Vocabulary: Environment and Ecology" },
    { subject: "Inglés", teacher: "Profa. Amalia Hernandez", teacherImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150", start: "10:00", end: "11:30", topic: "Reading Comprehension Practice" },
    { subject: "Educación Física", teacher: "Prof. Victor", teacherImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150", start: "11:30", end: "13:00", topic: "Acondicionamiento físico y flexibilidad" },
  ],
  3: [ // Miércoles
    { subject: "Matemáticas", teacher: "Prof. Sergio Hernandez Benitez", teacherImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150", start: "07:30", end: "08:30", topic: "Funciones lineales y gráficas" },
    { subject: "Matemáticas", teacher: "Prof. Sergio Hernandez Benitez", teacherImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150", start: "08:30", end: "09:30", topic: "Ejercicios de repaso - Trimestre 2" },
    { subject: "Formación Cívica", teacher: "Profa. Lucia Juarez Salinas", teacherImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150", start: "10:00", end: "11:30", topic: "Derechos humanos y ciudadanía" },
    { subject: "Inglés", teacher: "Profa. Amalia Hernandez", teacherImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150", start: "11:30", end: "13:00", topic: "Writing Skills: Formal Emails" },
  ],
  4: [ // Jueves
    { subject: "Inglés", teacher: "Profa. Amalia Hernandez", teacherImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150", start: "07:30", end: "08:30", topic: "Listening Practice - TED Talks" },
    { subject: "Español", teacher: "Profa. Corina Magañan Perez", teacherImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150", start: "08:30", end: "09:30", topic: "Análisis literario - Poesía moderna" },
    { subject: "Matemáticas", teacher: "Prof. Sergio Hernandez Benitez", teacherImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150", start: "10:00", end: "11:30", topic: "Probabilidad y estadística básica" },
    { subject: "Artes", teacher: "Profa. Patricia", teacherImg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150", start: "11:30", end: "13:00", topic: "Técnicas de acuarela y composición" },
  ],
  5: [ // Viernes
    { subject: "Español", teacher: "Profa. Corina Magañan Perez", teacherImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150", start: "07:30", end: "08:30", topic: "Redacción de ensayos argumentativos" },
    { subject: "Química", teacher: "Prof. Ruben Gonzalez", teacherImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150", start: "08:30", end: "09:30", topic: "Tabla periódica y enlaces químicos" },
    { subject: "Historia", teacher: "Profa. Patricia", teacherImg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150", start: "10:00", end: "11:30", topic: "México contemporáneo" },
    { subject: "Educación Física", teacher: "Prof. Victor", teacherImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150", start: "11:30", end: "13:00", topic: "Deportes colectivos: Voleibol" },
  ]
};

// Credencial demo de clase virtual
const VC_DEMO_CODE = "VIRTUAL2026";
const VC_DEMO_MATRICULA = "LB-24089";

// Estado del módulo virtual
let vcLoggedIn = false;
let vcStudentName = "Santiago Ortega Gómez";
let vcClockInterval = null;
let vcChatMessages = [];
let vcChatSimInterval = null;
let vcHandRaised = false;
let vcCurrentDayClasses = [];

// Mensajes simulados de chat para dar vida a la clase
const VC_SIMULATED_MESSAGES = [
  { name: "Valentina Paz M.", role: "student", text: "Profesor, ¿puede repetir la fórmula?" },
  { name: "Mateo Ruiz T.", role: "student", text: "Ya entendí, muchas gracias 👍" },
  { name: "Isabella Herrera V.", role: "student", text: "¿Esto viene en el examen?" },
  { name: "Sebastián Castro L.", role: "student", text: "¡Muy interesante el tema de hoy!" },
  { name: "Valentina Paz M.", role: "student", text: "¿Podemos tener más ejemplos prácticos?" },
  { name: "Mateo Ruiz T.", role: "student", text: "Estoy tomando notas, muy buena explicación" },
  { name: "Isabella Herrera V.", role: "student", text: "Profesor, ¿la tarea es para mañana?" },
  { name: "Sebastián Castro L.", role: "student", text: "Se escucha muy bien la transmisión" },
  { name: "Valentina Paz M.", role: "student", text: "¿A qué hora es la siguiente clase?" },
  { name: "Mateo Ruiz T.", role: "student", text: "Gracias por la explicación clara 🙌" },
];

// Respuestas del profesor simuladas
const VC_TEACHER_RESPONSES = [
  "Muy buena pregunta, te lo explico…",
  "Correcto, así es como se resuelve.",
  "Recuerden que esto viene en el examen del trimestre.",
  "¿Todos pueden ver la presentación correctamente?",
  "Excelente participación, sigan así.",
  "La tarea es para el próximo lunes, revísenla en el portal.",
  "Voy a compartir un ejemplo más detallado en el pizarrón.",
  "¿Alguna otra duda antes de continuar?",
];

function initVirtualClassroom() {
  // Verificar si hay sesión VC guardada
  const savedVcSession = sessionStorage.getItem("vc_session");
  if (savedVcSession) {
    const data = JSON.parse(savedVcSession);
    vcLoggedIn = true;
    vcStudentName = data.studentName || "Santiago Ortega Gómez";
  }

  // --- Formulario de acceso ---
  const vcForm = document.getElementById("vc-access-form");
  if (vcForm) {
    vcForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleVcLogin();
    });
  }

  // --- Botón salir del aula ---
  const btnVcLogout = document.getElementById("btn-vc-logout");
  if (btnVcLogout) {
    btnVcLogout.addEventListener("click", () => {
      vcLoggedIn = false;
      sessionStorage.removeItem("vc_session");
      clearInterval(vcClockInterval);
      showVcView("access");
    });
  }

  // --- Botón volver del classroom al dashboard ---
  const btnVcBack = document.getElementById("btn-vc-back");
  if (btnVcBack) {
    btnVcBack.addEventListener("click", () => {
      stopChatSimulation();
      showVcView("dashboard");
    });
  }

  // --- Botón salir de la clase (leave) ---
  const btnVcLeave = document.getElementById("btn-vc-leave");
  if (btnVcLeave) {
    btnVcLeave.addEventListener("click", () => {
      stopChatSimulation();
      showVcView("dashboard");
    });
  }

  // --- Toggle chat ---
  const btnToggleChat = document.getElementById("btn-vc-toggle-chat");
  if (btnToggleChat) {
    btnToggleChat.addEventListener("click", () => {
      const chatPanel = document.getElementById("vc-chat-panel");
      if (chatPanel) {
        chatPanel.classList.toggle("vc-chat-hidden");
        btnToggleChat.classList.toggle("vc-hand-btn"); // visual feedback
      }
    });
  }

  // --- Levantar la mano ---
  const btnHand = document.getElementById("btn-vc-hand");
  if (btnHand) {
    btnHand.addEventListener("click", () => {
      vcHandRaised = !vcHandRaised;
      btnHand.classList.toggle("is-raised", vcHandRaised);
      if (vcHandRaised) {
        addVcChatMessage("Sistema", "system", `${vcStudentName} ha levantado la mano ✋`);
        // Auto-respuesta del profesor después de unos segundos
        setTimeout(() => {
          const currentTeacher = document.getElementById("vc-room-teacher")?.textContent || "Profesor";
          addVcChatMessage(currentTeacher, "teacher", `Dime, ${vcStudentName.split(" ")[0]}, ¿cuál es tu duda?`);
        }, 2500);
      } else {
        addVcChatMessage("Sistema", "system", `${vcStudentName} ha bajado la mano`);
      }
    });
  }

  // --- Enviar mensaje en chat ---
  const btnSendChat = document.getElementById("btn-vc-send-chat");
  const chatInput = document.getElementById("vc-chat-input");
  if (btnSendChat && chatInput) {
    btnSendChat.addEventListener("click", () => sendVcChatMessage(chatInput));
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendVcChatMessage(chatInput);
    });
  }

  // Si ya tiene sesión activa, mostrar dashboard directamente
  if (vcLoggedIn) {
    showVcView("dashboard");
  }
}

// ==========================================================================
// PORTAL ALUMNO - DESCARGA DE BOLETA EN PDF CON GRÁFICA DE CALIFICACIONES
// ==========================================================================

function initStudentPDFDownload() {
  const btn = document.getElementById("btn-download-student-boleta");
  if (btn) {
    btn.addEventListener("click", () => {
      downloadStudentBoletaPDF();
    });
  }
}

window.downloadStudentBoletaFromAdmin = function(studentId) {
  const targetStudent = adminAlumnos.find(x => x.id === studentId);
  if (!targetStudent) {
    showToast("Error", "No se encontró el alumno especificado.", "error");
    return;
  }

  // Si es el alumno demo de la sesión, usar sus materias detalladas
  let gradesArray = [];
  let studentAvg = parseFloat(targetStudent.promedio) || 0;
  let studentAsist = "95%";

  if (targetStudent.nombre === "Santiago Ortega Gómez") {
    // Leer sus datos detallados del localStorage o usar ESTUDIANTE_ACTIVO
    let detailedData;
    const saved = localStorage.getItem("student_data_alumno@liceo.edu");
    if (saved) {
      detailedData = JSON.parse(saved);
    } else {
      detailedData = ESTUDIANTE_ACTIVO;
    }
    gradesArray = detailedData.materiasCursadas;
    studentAvg = detailedData.promedio;
    studentAsist = detailedData.asistencias;
  } else {
    // Generar materias ficticias basadas en CATALOGO_MATERIAS para otros alumnos
    gradesArray = CATALOGO_MATERIAS.map(m => {
      // Calificaciones semi-aleatorias con promedio cercano al del alumno
      const base = studentAvg - 1 + Math.random() * 2;
      const finalGrade = Math.min(10, Math.max(5, base));
      return {
        title: m.title,
        p1: Math.min(10, Math.max(5, finalGrade - 0.5 + Math.random())),
        p2: Math.min(10, Math.max(5, finalGrade - 0.3 + Math.random())),
        p3: Math.min(10, Math.max(5, finalGrade - 0.2 + Math.random())),
        homework: Math.min(10, Math.max(5, finalGrade - 0.1 + Math.random())),
        project: Math.min(10, Math.max(5, finalGrade + Math.random() * 0.4)),
        attendance: `${Math.floor(Math.random() * 15) + 85}%`,
        grade: finalGrade
      };
    });
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('p', 'mm', 'a4');

  const primaryColor = [15, 23, 42];  
  const accentColor = [16, 185, 129]; 
  const lightBgColor = [248, 250, 252]; 
  const borderGrey = [226, 232, 240];  
  const textMuted = [100, 116, 139]; 

  const marginX = 15;
  const contentWidth = 210 - (2 * marginX);

  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 0, 210, 12, 'F');
  doc.setFillColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.rect(0, 12, 210, 2, 'F');

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text("ESCUELA SECUNDARIA 0736 QUETZALCÓATL", 105, 24, { align: "center" });

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10.5);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("BOLETA OFICIAL DE CALIFICACIONES - SEGUNDO TRIMESTRE (ADMIN)", 105, 29, { align: "center" });

  doc.setDrawColor(borderGrey[0], borderGrey[1], borderGrey[2]);
  doc.setLineWidth(0.5);
  doc.line(marginX, 32, 210 - marginX, 32);

  doc.setFontSize(9);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);

  doc.setFont("Helvetica", "bold");
  doc.text("Alumno:", marginX, 39);
  doc.setFont("Helvetica", "normal");
  doc.text(targetStudent.nombre, marginX + 16, 39);

  doc.setFont("Helvetica", "bold");
  doc.text("Grado y Grupo:", marginX, 44);
  doc.setFont("Helvetica", "normal");
  doc.text(`${targetStudent.grado} - Grupo "${targetStudent.grupo}"`, marginX + 26, 44);

  doc.setFont("Helvetica", "bold");
  doc.text("Matrícula:", marginX, 49);
  doc.setFont("Helvetica", "normal");
  doc.text(targetStudent.matricula, marginX + 18, 49); 

  const rightColX = 120;
  doc.setFont("Helvetica", "bold");
  doc.text("Ciclo Escolar:", rightColX, 39);
  doc.setFont("Helvetica", "normal");
  doc.text("2026-2027", rightColX + 22, 39);

  doc.setFont("Helvetica", "bold");
  doc.text("Fecha de Emisión:", rightColX, 44);
  doc.setFont("Helvetica", "normal");
  const now = new Date();
  doc.text(now.toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' }), rightColX + 29, 44);

  doc.setFont("Helvetica", "bold");
  doc.text("Estatus:", rightColX, 49);
  doc.setFont("Helvetica", "bold");
  doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.text("EXPEDIDA POR ADMINISTRACIÓN", rightColX + 14, 49);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);

  const bodyData = gradesArray.map((mc, idx) => {
    return [
      (idx + 1).toString(),
      mc.title,
      mc.p1 !== undefined ? mc.p1.toFixed(1) : "-",
      mc.p2 !== undefined ? mc.p2.toFixed(1) : "-",
      mc.p3 !== undefined ? mc.p3.toFixed(1) : "-",
      mc.homework !== undefined ? mc.homework.toFixed(1) : "-",
      mc.project !== undefined ? mc.project.toFixed(1) : "-",
      mc.attendance || "-",
      mc.grade !== undefined ? mc.grade.toFixed(1) : "-",
      mc.grade >= 6.0 ? "Aprobado" : "Reprobado"
    ];
  });

  doc.autoTable({
    startY: 54,
    head: [['#', 'Asignatura', 'Parcial 1', 'Parcial 2', 'Parcial 3', 'Tareas', 'Proy.', 'Asist.', 'Promedio', 'Estatus']],
    body: bodyData,
    theme: 'striped',
    headStyles: { fillColor: primaryColor, textColor: 255, fontStyle: 'bold', fontSize: 8.5, halign: 'center' },
    columnStyles: {
      0: { halign: 'center', cellWidth: 8 },
      1: { fontStyle: 'bold', cellWidth: 46 },
      2: { halign: 'center' },
      3: { halign: 'center' },
      4: { halign: 'center' },
      5: { halign: 'center' },
      6: { halign: 'center' },
      7: { halign: 'center', cellWidth: 15 },
      8: { halign: 'center', fontStyle: 'bold', textColor: primaryColor, cellWidth: 18 },
      9: { halign: 'center', fontStyle: 'bold' }
    },
    didParseCell: function (data) {
      if (data.column.index === 9 && data.cell.section === 'body') {
        if (data.cell.text[0] === 'Aprobado') {
          data.cell.styles.textColor = [16, 185, 129];
        } else {
          data.cell.styles.textColor = [239, 68, 68];
        }
      }
    },
    styles: { fontSize: 8, cellPadding: 2, valign: 'middle' },
    alternateRowStyles: { fillColor: [248, 250, 252] }
  });

  let currentY = doc.autoTable.previous.finalY + 8;

  if (currentY > 180) {
    doc.addPage();
    currentY = 25;
  }

  doc.setFillColor(lightBgColor[0], lightBgColor[1], lightBgColor[2]);
  doc.setDrawColor(borderGrey[0], borderGrey[1], borderGrey[2]);
  doc.setLineWidth(0.3);
  doc.rect(marginX, currentY, contentWidth, 52, 'DF');

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text("ANÁLISIS GRÁFICO DE RENDIMIENTO POR ASIGNATURA", marginX + 6, currentY + 7);

  const chartX = marginX + 22;
  const chartY = currentY + 44;
  const chartWidth = contentWidth - 32;
  const chartHeight = 30;

  doc.setDrawColor(100, 116, 139);
  doc.setLineWidth(0.5);
  doc.line(chartX, chartY, chartX + chartWidth, chartY); 
  doc.line(chartX, chartY, chartX, chartY - chartHeight); 

  doc.setFontSize(7.5);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("10.0", chartX - 7, chartY - chartHeight + 1);
  doc.text("5.0", chartX - 6, chartY - (chartHeight / 2) + 1);
  doc.text("0.0", chartX - 6, chartY + 1);

  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.25);
  doc.line(chartX, chartY - (chartHeight * 0.6), chartX + chartWidth, chartY - (chartHeight * 0.6));

  const numBar = gradesArray.length;
  const barGap = 2.5;
  const totalGapsWidth = barGap * (numBar - 1);
  const barWidth = (chartWidth - 8 - totalGapsWidth) / numBar;

  gradesArray.forEach((sub, i) => {
    const gradeVal = sub.grade || 0.0;
    const barHeight = (gradeVal / 10.0) * chartHeight;
    const itemX = chartX + 4 + i * (barWidth + barGap);

    if (gradeVal >= 6.0) {
      doc.setFillColor(accentColor[0], accentColor[1], accentColor[2]);
    } else {
      doc.setFillColor(239, 68, 68);
    }

    doc.rect(itemX, chartY - barHeight, barWidth, barHeight, 'F');

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(gradeVal.toFixed(1), itemX + (barWidth / 2), chartY - barHeight - 1.5, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(6.5);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    const abbrev = sub.title.substring(0, 4).toUpperCase();
    doc.text(abbrev, itemX + (barWidth / 2), chartY + 3.5, { align: "center" });
  });

  currentY += 60;

  if (currentY > 230) {
    doc.addPage();
    currentY = 25;
  }

  doc.setFillColor(lightBgColor[0], lightBgColor[1], lightBgColor[2]);
  doc.rect(marginX, currentY, contentWidth, 24, 'F');
  doc.rect(marginX, currentY, contentWidth, 24, 'S');

  const approvedCount = gradesArray.filter(s => s.grade >= 6.0).length;
  const reprovedCount = gradesArray.length - approvedCount;

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text("RESUMEN DE DESEMPEÑO ACADÉMICO (CONTROL ESCOLAR)", marginX + 5, currentY + 6);

  doc.setFontSize(8.5);
  doc.text("Promedio General:", marginX + 5, currentY + 14);
  doc.setFont("Helvetica", "normal");
  doc.text(`${studentAvg.toFixed(2)} / 10.0`, marginX + 35, currentY + 14);

  doc.setFont("Helvetica", "bold");
  doc.text("Asistencia Acumulada:", marginX + 68, currentY + 14);
  doc.setFont("Helvetica", "normal");
  doc.text(studentAsist, marginX + 102, currentY + 14);

  doc.setFont("Helvetica", "bold");
  doc.text("Asignaturas Aprobadas:", marginX + 130, currentY + 14);
  doc.setFont("Helvetica", "normal");
  doc.text(`${approvedCount} de ${gradesArray.length}`, marginX + 166, currentY + 14);

  doc.setFont("Helvetica", "bold");
  doc.text("Estatus Final del Ciclo:", marginX + 5, currentY + 20);
  doc.setFont("Helvetica", "normal");
  doc.text(reprovedCount === 0 ? "Aprobado (Pasa al siguiente grado)" : "En Regularización", marginX + 41, currentY + 20);

  currentY += 34;

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);

  doc.line(marginX + 15, currentY + 14, marginX + 70, currentY + 14);
  doc.text("Firma del Administrador del Sistema", marginX + 42.5, currentY + 18, { align: "center" });

  doc.line(125, currentY + 14, 180, currentY + 14);
  doc.text("Dra. Mariana Ortega", 152.5, currentY + 18, { align: "center" });
  doc.setFont("Helvetica", "bold");
  doc.text("Directora General", 152.5, currentY + 22, { align: "center" });

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("Documento oficial para uso exclusivo de Control Escolar de la Escuela Secundaria 0736 Quetzalcóatl.", 105, 285, { align: "center" });

  doc.save(`Boleta_Oficial_Secundar0736_Admin_${targetStudent.nombre.replace(/ /g, "_")}.pdf`);
  showToast("Boleta PDF Descargada", `Se generó la boleta oficial para ${targetStudent.nombre} con éxito.`, "success");
};

function downloadStudentBoletaPDF() {
  if (!isLoggedIn || !userSessionData || userRole !== "alumno") {
    showToast("Error de Acceso", "Debes iniciar sesión como alumno para realizar esta acción.", "error");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('p', 'mm', 'a4');

  // Colores Institucionales
  const primaryColor = [15, 23, 42];  // Slate 900
  const accentColor = [16, 185, 129]; // Emerald 500
  const lightBgColor = [248, 250, 252]; // Slate 50
  const borderGrey = [226, 232, 240];  // Slate 200
  const textMuted = [100, 116, 139]; // Slate 500

  const marginX = 15;
  const contentWidth = 210 - (2 * marginX);

  // --- Encabezado ---
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 0, 210, 12, 'F');
  doc.setFillColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.rect(0, 12, 210, 2, 'F');

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text("ESCUELA SECUNDARIA 0736 QUETZALCÓATL", 105, 24, { align: "center" });

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(10.5);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("BOLETA OFICIAL DE CALIFICACIONES - SEGUNDO TRIMESTRE", 105, 29, { align: "center" });

  doc.setDrawColor(borderGrey[0], borderGrey[1], borderGrey[2]);
  doc.setLineWidth(0.5);
  doc.line(marginX, 32, 210 - marginX, 32);

  // --- Información General del Alumno ---
  doc.setFontSize(9);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);

  // Columna Izquierda
  doc.setFont("Helvetica", "bold");
  doc.text("Alumno:", marginX, 39);
  doc.setFont("Helvetica", "normal");
  doc.text(userSessionData.nombre, marginX + 16, 39);

  doc.setFont("Helvetica", "bold");
  doc.text("Grado y Grupo:", marginX, 44);
  doc.setFont("Helvetica", "normal");
  doc.text(`${userSessionData.grado} - Grupo "${userSessionData.grupo}"`, marginX + 26, 44);

  doc.setFont("Helvetica", "bold");
  doc.text("Matrícula:", marginX, 49);
  doc.setFont("Helvetica", "normal");
  doc.text("LB-24089", marginX + 18, 49); // Matrícula de la demo estudiantil

  // Columna Derecha
  const rightColX = 120;
  doc.setFont("Helvetica", "bold");
  doc.text("Ciclo Escolar:", rightColX, 39);
  doc.setFont("Helvetica", "normal");
  doc.text("2026-2027", rightColX + 22, 39);

  doc.setFont("Helvetica", "bold");
  doc.text("Fecha de Emisión:", rightColX, 44);
  doc.setFont("Helvetica", "normal");
  const now = new Date();
  doc.text(now.toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' }), rightColX + 29, 44);

  doc.setFont("Helvetica", "bold");
  doc.text("Estatus:", rightColX, 49);
  doc.setFont("Helvetica", "bold");
  doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.text("ALUMNO REGULAR", rightColX + 14, 49);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);

  // --- Tabla de Calificaciones ---
  const bodyData = userSessionData.materiasCursadas.map((mc, idx) => {
    return [
      (idx + 1).toString(),
      mc.title,
      mc.p1 !== undefined ? mc.p1.toFixed(1) : "-",
      mc.p2 !== undefined ? mc.p2.toFixed(1) : "-",
      mc.p3 !== undefined ? mc.p3.toFixed(1) : "-",
      mc.homework !== undefined ? mc.homework.toFixed(1) : "-",
      mc.project !== undefined ? mc.project.toFixed(1) : "-",
      mc.attendance || "-",
      mc.grade !== undefined ? mc.grade.toFixed(1) : "-",
      mc.grade >= 6.0 ? "Aprobado" : "Reprobado"
    ];
  });

  doc.autoTable({
    startY: 54,
    head: [['#', 'Asignatura', 'Parcial 1', 'Parcial 2', 'Parcial 3', 'Tareas', 'Proy.', 'Asist.', 'Promedio', 'Estatus']],
    body: bodyData,
    theme: 'striped',
    headStyles: { fillColor: primaryColor, textColor: 255, fontStyle: 'bold', fontSize: 8.5, halign: 'center' },
    columnStyles: {
      0: { halign: 'center', cellWidth: 8 },
      1: { fontStyle: 'bold', cellWidth: 46 },
      2: { halign: 'center' },
      3: { halign: 'center' },
      4: { halign: 'center' },
      5: { halign: 'center' },
      6: { halign: 'center' },
      7: { halign: 'center', cellWidth: 15 },
      8: { halign: 'center', fontStyle: 'bold', textColor: primaryColor, cellWidth: 18 },
      9: { halign: 'center', fontStyle: 'bold' }
    },
    didParseCell: function (data) {
      if (data.column.index === 9 && data.cell.section === 'body') {
        if (data.cell.text[0] === 'Aprobado') {
          data.cell.styles.textColor = [16, 185, 129]; // verde
        } else {
          data.cell.styles.textColor = [239, 68, 68]; // rojo
        }
      }
    },
    styles: { fontSize: 8, cellPadding: 2, valign: 'middle' },
    alternateRowStyles: { fillColor: [248, 250, 252] }
  });

  let currentY = doc.lastAutoTable.finalY + 8;

  // --- Gráfica de Rendimiento Escolar (Dibujada a mano con jsPDF Shapes) ---
  if (currentY > 180) { // Si queda muy abajo, agregar página
    doc.addPage();
    currentY = 25;
  }

  // Contenedor de la gráfica
  doc.setFillColor(lightBgColor[0], lightBgColor[1], lightBgColor[2]);
  doc.setDrawColor(borderGrey[0], borderGrey[1], borderGrey[2]);
  doc.setLineWidth(0.3);
  doc.rect(marginX, currentY, contentWidth, 52, 'DF');

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text("ANÁLISIS GRÁFICO DE RENDIMIENTO POR ASIGNATURA", marginX + 6, currentY + 7);

  // Ejes de la gráfica
  const chartX = marginX + 22;
  const chartY = currentY + 44;
  const chartWidth = contentWidth - 32;
  const chartHeight = 30; // escala 0 a 10 (3mm por punto)

  doc.setDrawColor(100, 116, 139);
  doc.setLineWidth(0.5);
  doc.line(chartX, chartY, chartX + chartWidth, chartY); // Eje X
  doc.line(chartX, chartY, chartX, chartY - chartHeight); // Eje Y

  // Etiquetas de Eje Y (0, 5, 10)
  doc.setFontSize(7.5);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("10.0", chartX - 7, chartY - chartHeight + 1);
  doc.text("5.0", chartX - 6, chartY - (chartHeight / 2) + 1);
  doc.text("0.0", chartX - 6, chartY + 1);

  // Línea de aprobación (5.0 y 6.0) punteada de referencia
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.25);
  doc.line(chartX, chartY - (chartHeight * 0.6), chartX + chartWidth, chartY - (chartHeight * 0.6));

  // Dibujar las barras para cada materia cursada
  const subjects = userSessionData.materiasCursadas;
  const numBar = subjects.length;
  const barGap = 2.5;
  const totalGapsWidth = barGap * (numBar - 1);
  const barWidth = (chartWidth - 8 - totalGapsWidth) / numBar;

  subjects.forEach((sub, i) => {
    const gradeVal = sub.grade || 0.0;
    const barHeight = (gradeVal / 10.0) * chartHeight;
    const itemX = chartX + 4 + i * (barWidth + barGap);

    // Color de barra según aprobación
    if (gradeVal >= 6.0) {
      doc.setFillColor(accentColor[0], accentColor[1], accentColor[2]); // Verde
    } else {
      doc.setFillColor(239, 68, 68); // Rojo
    }

    doc.rect(itemX, chartY - barHeight, barWidth, barHeight, 'F');

    // Valor de la calificación encima de la barra
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(gradeVal.toFixed(1), itemX + (barWidth / 2), chartY - barHeight - 1.5, { align: "center" });

    // Abreviación de materia en Eje X
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(6.5);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    const abbrev = sub.title.substring(0, 4).toUpperCase();
    doc.text(abbrev, itemX + (barWidth / 2), chartY + 3.5, { align: "center" });
  });

  currentY += 60;

  // --- Sección de Resumen y Cuadro Firmas ---
  if (currentY > 230) {
    doc.addPage();
    currentY = 25;
  }

  // Cuadro de Resumen Estadístico
  doc.setFillColor(lightBgColor[0], lightBgColor[1], lightBgColor[2]);
  doc.rect(marginX, currentY, contentWidth, 24, 'F');
  doc.rect(marginX, currentY, contentWidth, 24, 'S');

  const approvedCount = subjects.filter(s => s.grade >= 6.0).length;
  const reprovedCount = subjects.length - approvedCount;

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text("RESUMEN DE DESEMPEÑO ACADÉMICO", marginX + 5, currentY + 6);

  doc.setFontSize(8.5);
  doc.text("Promedio General:", marginX + 5, currentY + 14);
  doc.setFont("Helvetica", "normal");
  doc.text(`${userSessionData.promedio} / 10.0`, marginX + 35, currentY + 14);

  doc.setFont("Helvetica", "bold");
  doc.text("Asistencia Acumulada:", marginX + 68, currentY + 14);
  doc.setFont("Helvetica", "normal");
  doc.text(userSessionData.asistencias, marginX + 102, currentY + 14);

  doc.setFont("Helvetica", "bold");
  doc.text("Asignaturas Aprobadas:", marginX + 130, currentY + 14);
  doc.setFont("Helvetica", "normal");
  doc.text(`${approvedCount} de ${subjects.length}`, marginX + 166, currentY + 14);

  doc.setFont("Helvetica", "bold");
  doc.text("Estatus Final del Ciclo:", marginX + 5, currentY + 20);
  doc.setFont("Helvetica", "normal");
  doc.text(reprovedCount === 0 ? "Aprobado (Pasa al siguiente grado)" : "En Regularización", marginX + 41, currentY + 20);

  currentY += 34;

  // Firmas y Validación Oficial
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);

  // Línea Firma Tutor
  doc.line(marginX + 15, currentY + 14, marginX + 70, currentY + 14);
  doc.text("Firma del Padre de Familia o Tutor", marginX + 42.5, currentY + 18, { align: "center" });

  // Línea Firma Dirección
  doc.line(125, currentY + 14, 180, currentY + 14);
  doc.text("Dra. Mariana Ortega", 152.5, currentY + 18, { align: "center" });
  doc.setFont("Helvetica", "bold");
  doc.text("Directora General", 152.5, currentY + 22, { align: "center" });

  // Sello Oficial de Validez al Pie
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("Documento oficial impreso por el estudiante. La firma del tutor avala el conocimiento de las evaluaciones.", 105, 285, { align: "center" });

  doc.save(`Boleta_Oficial_Secundar0736_${userSessionData.nombre.replace(/ /g, "_")}.pdf`);
  showToast("Boleta PDF Generada", "Tu boleta de calificaciones oficial se ha descargado con éxito.", "success");
}

// ==========================================================================
// PORTAL MAESTRO - DESCARGA DE REPORTES EN PDF CON ESTADÍSTICAS
// ==========================================================================

function initTeacherPDFDownload() {
  const btn = document.getElementById("btn-download-grades-pdf");
  if (btn) {
    btn.addEventListener("click", () => {
      downloadSubjectGradesPDF();
    });
  }
}

function downloadSubjectGradesPDF() {
  if (!userSessionData || userRole !== "maestro") {
    showToast("Error de Acceso", "Debes estar logueado como profesor para realizar esta acción.", "error");
    return;
  }
  
  if (!teacherSelectedSubjectId) {
    showToast("Materia no Seleccionada", "Por favor selecciona una materia primero.", "error");
    return;
  }

  const sub = userSessionData.materiasAsignadas.find(m => m.materiaId === teacherSelectedSubjectId);
  if (!sub || !sub.alumnos || sub.alumnos.length === 0) {
    showToast("Error", "No se encontraron alumnos registrados para esta materia.", "error");
    return;
  }

  // Cargar jsPDF de la ventana global
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('p', 'mm', 'a4');

  // Colores del tema institucional
  const tealColor = [15, 118, 110]; // Teal esmeralda
  const slateColor = [15, 23, 42];  // Slate pizarra
  const grayColor = [100, 116, 139]; // Gris texto secundario

  const marginX = 15;
  const contentWidth = 210 - (marginX * 2);

  // --- Encabezado Oficial del Reporte ---
  doc.setFillColor(tealColor[0], tealColor[1], tealColor[2]);
  doc.rect(0, 0, 210, 10, 'F');
  doc.setFillColor(245, 158, 11); // Dorado de realce
  doc.rect(0, 10, 210, 2, 'F');

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(slateColor[0], slateColor[1], slateColor[2]);
  doc.text("ESCUELA SECUNDARIA 0736 QUETZALCÓATL", 105, 22, { align: "center" });

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
  doc.text("REPORTE OFICIAL DE ENTREGABLE DE CALIFICACIONES - SEGUNDO TRIMESTRE", 105, 28, { align: "center" });

  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.5);
  doc.line(marginX, 32, 210 - marginX, 32);

  // --- Datos Generales y Metadatos ---
  doc.setFontSize(9);
  doc.setTextColor(slateColor[0], slateColor[1], slateColor[2]);
  
  // Columna 1
  doc.setFont("Helvetica", "bold");
  doc.text("Docente:", marginX, 39);
  doc.setFont("Helvetica", "normal");
  doc.text(userSessionData.nombre, marginX + 16, 39);

  doc.setFont("Helvetica", "bold");
  doc.text("Departamento:", marginX, 44);
  doc.setFont("Helvetica", "normal");
  doc.text(userSessionData.departamento || "Ciencias Exactas", marginX + 26, 44);

  doc.setFont("Helvetica", "bold");
  doc.text("Asignatura:", marginX, 49);
  doc.setFont("Helvetica", "normal");
  doc.text(`${sub.title} (${sub.code})`, marginX + 20, 49);

  // Columna 2
  const rightColX = 120;
  doc.setFont("Helvetica", "bold");
  doc.text("Ciclo Escolar:", rightColX, 39);
  doc.setFont("Helvetica", "normal");
  doc.text("2026-2027", rightColX + 22, 39);

  doc.setFont("Helvetica", "bold");
  doc.text("Horario:", rightColX, 44);
  doc.setFont("Helvetica", "normal");
  doc.text(sub.schedule || "Lun/Mar/Jue/Vie 08:30", rightColX + 14, 44);

  doc.setFont("Helvetica", "bold");
  doc.text("Fecha:", rightColX, 49);
  doc.setFont("Helvetica", "normal");
  const formattedDate = new Date().toLocaleDateString('es-MX', { 
    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' 
  });
  doc.text(formattedDate, rightColX + 12, 49);

  // --- Tabla de Estudiantes e Información de Calificaciones ---
  const bodyData = sub.alumnos.map((st, idx) => [
    (idx + 1).toString(),
    st.matricula || "-",
    st.name,
    st.p1 !== undefined ? st.p1.toFixed(1) : "-",
    st.p2 !== undefined ? st.p2.toFixed(1) : "-",
    st.p3 !== undefined ? st.p3.toFixed(1) : "-",
    st.homework !== undefined ? st.homework.toFixed(1) : "-",
    st.project !== undefined ? st.project.toFixed(1) : "-",
    st.participation !== undefined ? st.participation.toFixed(1) : "-",
    st.attendance || "0%",
    st.generalGrade !== undefined ? st.generalGrade.toFixed(1) : "-"
  ]);

  const pesos = sub.pesos || { p1: 20, p2: 20, p3: 20, homework: 10, project: 10, participation: 10, attendance: 10 };

  doc.setFontSize(8);
  doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
  doc.text(`Criterios de Evaluación ponderados: Ex. P1 (${pesos.p1}%), Ex. P2 (${pesos.p2}%), Ex. P3 (${pesos.p3}%), Tareas (${pesos.homework}%), Proy. (${pesos.project}%), Part. (${pesos.participation}%), Asist. (${pesos.attendance}%)`, marginX, 56);

  // AutoTable de calificaciones
  doc.autoTable({
    startY: 59,
    head: [['#', 'Matrícula', 'Alumno', 'Ex. P1', 'Ex. P2', 'Ex. P3', 'Tareas', 'Proy.', 'Part.', 'Asistencia', 'Promedio']],
    body: bodyData,
    theme: 'striped',
    headStyles: { fillColor: tealColor, textColor: 255, fontStyle: 'bold', fontSize: 8.5, halign: 'center' },
    columnStyles: {
      0: { halign: 'center', cellWidth: 8 },
      1: { halign: 'center', cellWidth: 20, fontStyle: 'bold' },
      2: { cellWidth: 45 },
      3: { halign: 'center' },
      4: { halign: 'center' },
      5: { halign: 'center' },
      6: { halign: 'center' },
      7: { halign: 'center' },
      8: { halign: 'center' },
      9: { halign: 'center', cellWidth: 18 },
      10: { halign: 'center', fontStyle: 'bold', textColor: slateColor, cellWidth: 18 }
    },
    styles: { fontSize: 8, cellPadding: 2.2, valign: 'middle' },
    alternateRowStyles: { fillColor: [248, 250, 252] }
  });

  let currentY = doc.lastAutoTable.finalY + 8;

  // --- Estadísticas y Métricas de Rendimiento Grupal ---
  const totalStudents = sub.alumnos.length;
  const sumParticipation = sub.alumnos.reduce((sum, st) => sum + st.participation, 0);
  const avgParticipation = sumParticipation / totalStudents;

  const sumGeneral = sub.alumnos.reduce((sum, st) => sum + st.generalGrade, 0);
  const avgGeneral = sumGeneral / totalStudents;

  const sumAttendance = sub.alumnos.reduce((sum, st) => sum + (parseInt(st.attendance) || 0), 0);
  const avgAttendance = sumAttendance / totalStudents;

  const passCount = sub.alumnos.filter(st => st.generalGrade >= 6.0).length;
  const passRate = (passCount / totalStudents) * 100;

  const gradesArray = sub.alumnos.map(st => st.generalGrade);
  const highestGrade = Math.max(...gradesArray);
  const lowestGrade = Math.min(...gradesArray);

  // Cuadro estadístico con sombreado y borde
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.3);
  doc.rect(marginX, currentY, contentWidth, 38, 'DF');

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(tealColor[0], tealColor[1], tealColor[2]);
  doc.text("RESUMEN ESTADÍSTICO Y RENDIMIENTO DEL GRUPO", marginX + 5, currentY + 6);

  doc.setFontSize(8.5);
  doc.setTextColor(slateColor[0], slateColor[1], slateColor[2]);

  // Fila 1 de Estadísticas
  doc.setFont("Helvetica", "bold");
  doc.text("Rendimiento Promedio Gral:", marginX + 5, currentY + 14);
  doc.setFont("Helvetica", "normal");
  doc.text(`${avgGeneral.toFixed(2)} / 10`, marginX + 48, currentY + 14);

  doc.setFont("Helvetica", "bold");
  doc.text("Asistencia Promedio:", marginX + 75, currentY + 14);
  doc.setFont("Helvetica", "normal");
  doc.text(`${avgAttendance.toFixed(1)}%`, marginX + 110, currentY + 14);

  doc.setFont("Helvetica", "bold");
  doc.text("Tasa de Aprobación:", marginX + 135, currentY + 14);
  doc.setFont("Helvetica", "normal");
  doc.text(`${passRate.toFixed(1)}% (${passCount}/${totalStudents} aprobados)`, marginX + 167, currentY + 14);

  // Fila 2 de Estadísticas
  doc.setFont("Helvetica", "bold");
  doc.text("Promedio Participación:", marginX + 5, currentY + 22);
  doc.setFont("Helvetica", "normal");
  doc.text(`${avgParticipation.toFixed(2)} / 10`, marginX + 41, currentY + 22);

  doc.setFont("Helvetica", "bold");
  doc.text("Calificación Más Alta:", marginX + 75, currentY + 22);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(16, 185, 129); // Verde éxito
  doc.text(`${highestGrade.toFixed(1)}`, marginX + 109, currentY + 22);
  doc.setTextColor(slateColor[0], slateColor[1], slateColor[2]);

  doc.setFont("Helvetica", "bold");
  doc.text("Calificación Más Baja:", marginX + 135, currentY + 22);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(239, 68, 68); // Rojo peligro
  doc.text(`${lowestGrade.toFixed(1)}`, marginX + 169, currentY + 22);
  doc.setTextColor(slateColor[0], slateColor[1], slateColor[2]);

  // Nota al pie del cuadro
  doc.setFont("Helvetica", "italic");
  doc.setFontSize(7.5);
  doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
  doc.text("Reporte estadístico autogenerado bajo las normas institucionales vigentes de la SEP.", marginX + 5, currentY + 32);

  currentY += 46;

  // --- Sección de Firmas y Validación ---
  if (currentY > 260) {
    doc.addPage();
    currentY = 25;
  }

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(slateColor[0], slateColor[1], slateColor[2]);

  // Firma Docente
  doc.setDrawColor(148, 163, 184);
  doc.line(marginX + 15, currentY + 15, marginX + 70, currentY + 15);
  doc.text("Firma del Docente Titular", marginX + 42.5, currentY + 19, { align: "center" });
  doc.setFont("Helvetica", "bold");
  doc.text(userSessionData.nombre, marginX + 42.5, currentY + 24, { align: "center" });

  // Firma Dirección
  doc.setFont("Helvetica", "normal");
  doc.line(125, currentY + 15, 180, currentY + 15);
  doc.text("Dirección Escolar / Sello", 152.5, currentY + 19, { align: "center" });
  doc.setFont("Helvetica", "bold");
  doc.text("Escuela Secundaria 0736", 152.5, currentY + 24, { align: "center" });

  // Pie de página de validez
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
  doc.text("La veracidad de este documento digital queda avalada por el registro institucional del ciclo escolar en curso.", 105, 287, { align: "center" });

  const cleanTitle = sub.title.replace(/[^a-zA-Z0-9]/g, "_");
  doc.save(`Calificaciones_${cleanTitle}_${sub.code}.pdf`);

  showToast("Reporte PDF Descargado", "Se ha generado y descargado el archivo PDF con éxito.", "success");
}

function handleVcLogin() {
  const codeInput = document.getElementById("vc-access-code");
  const matInput = document.getElementById("vc-matricula");
  const errorCode = document.getElementById("error-vc-code");
  const errorMat = document.getElementById("error-vc-matricula");
  const authError = document.getElementById("vc-auth-error");
  const btnSubmit = document.getElementById("btn-vc-access");

  let valid = true;

  // Limpiar errores
  codeInput.parentElement.classList.remove("has-error");
  matInput.parentElement.classList.remove("has-error");
  if (errorCode) errorCode.classList.remove("show");
  if (errorMat) errorMat.classList.remove("show");
  if (authError) authError.classList.add("hidden");

  if (!codeInput.value.trim()) {
    codeInput.parentElement.classList.add("has-error");
    if (errorCode) errorCode.classList.add("show");
    valid = false;
  }
  if (!matInput.value.trim()) {
    matInput.parentElement.classList.add("has-error");
    if (errorMat) errorMat.classList.add("show");
    valid = false;
  }

  if (!valid) return;

  // Simular carga
  if (btnSubmit) btnSubmit.classList.add("is-loading");

  setTimeout(() => {
    if (btnSubmit) btnSubmit.classList.remove("is-loading");

    // Verificar credenciales
    const code = codeInput.value.trim().toUpperCase();
    const mat = matInput.value.trim().toUpperCase();

    // Aceptar la demo hardcodeada O cualquier matrícula de alumnos existentes en DOCENTE_ACTIVO
    // Cargar alumnos administrados desde localStorage para permitirles entrar con su código
    let customStudents = [];
    const savedCustom = localStorage.getItem("admin_alumnos_v2");
    if (savedCustom) {
      customStudents = JSON.parse(savedCustom);
    }

    const currentCustom = customStudents.find(a => a.matricula.toUpperCase() === mat);
    const validCode = currentCustom ? (currentCustom.codeLive || "LIVE301").toUpperCase() : VC_DEMO_CODE;

    if (code !== validCode) {
      if (authError) authError.classList.remove("hidden");
      return;
    }

    const validMatriculas = customStudents.map(a => a.matricula.toUpperCase());
    DOCENTE_ACTIVO.materiasAsignadas.forEach(m => {
      m.alumnos.forEach(a => validMatriculas.push(a.matricula.toUpperCase()));
    });

    if (!validMatriculas.includes(mat)) {
      if (authError) authError.classList.remove("hidden");
      return;
    }

    // Buscar nombre del alumno
    let studentName = currentCustom ? currentCustom.nombre : "Alumno";
    if (!currentCustom) {
      DOCENTE_ACTIVO.materiasAsignadas.forEach(m => {
        m.alumnos.forEach(a => {
          if (a.matricula.toUpperCase() === mat) studentName = a.name;
        });
      });
    }

    // Login exitoso
    vcLoggedIn = true;
    vcStudentName = studentName;
    sessionStorage.setItem("vc_session", JSON.stringify({ studentName }));

    showToast("¡Acceso Concedido!", `Bienvenido al Aula Virtual, ${studentName.split(" ")[0]}.`, "success");
    showVcView("dashboard");
  }, 1500);
}

function showVcView(viewName) {
  const accessView = document.getElementById("vc-access-view");
  const dashboardView = document.getElementById("vc-dashboard-view");
  const classroomView = document.getElementById("vc-classroom-view");

  if (accessView) accessView.classList.toggle("hidden", viewName !== "access");
  if (dashboardView) dashboardView.classList.toggle("hidden", viewName !== "dashboard");
  if (classroomView) classroomView.classList.toggle("hidden", viewName !== "classroom");

  if (viewName === "dashboard") {
    renderVcDashboard();
    startVcClock();
  } else if (viewName === "classroom") {
    // Clock stays running
  } else {
    clearInterval(vcClockInterval);
  }
}

function renderVcDashboard() {
  // Actualizar nombre del estudiante
  const nameEl = document.getElementById("vc-student-name");
  if (nameEl) nameEl.textContent = vcStudentName;

  // Actualizar fecha y hora
  updateVcDateTime();

  // Obtener clases del día actual
  const now = new Date();
  let dayOfWeek = now.getDay(); // 0=dom, 1=lun, etc
  
  // Si es fin de semana (sábado o domingo), simular el lunes para fines de prueba
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    dayOfWeek = 1;
  }

  // Copiar las clases correspondientes de la agenda
  vcCurrentDayClasses = JSON.parse(JSON.stringify(VC_SCHEDULE[dayOfWeek] || []));

  // Clasificar clases y verificar si alguna está en vivo en el horario real
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  let liveCount = 0, upcomingCount = 0, endedCount = 0;
  let hasLiveClass = false;

  vcCurrentDayClasses.forEach(cls => {
    const [startH, startM] = cls.start.split(":").map(Number);
    const [endH, endM] = cls.end.split(":").map(Number);
    const startMinutes = startH * 60 + startM;
    const endMinutes = endH * 60 + endM;

    if (currentMinutes >= startMinutes && currentMinutes < endMinutes) {
      hasLiveClass = true;
    }
  });

  // Si no hay ninguna clase activa en vivo en este momento (p.ej. fuera de horario), 
  // adaptamos la primera clase del día para que esté "En Vivo" actualmente, facilitando las pruebas.
  if (!hasLiveClass && vcCurrentDayClasses.length > 0) {
    const startMins = currentMinutes - 20; // Empezó hace 20 minutos
    const endMins = currentMinutes + 40;  // Termina en 40 minutos

    const formatTime = (totalMins) => {
      const h = Math.floor((totalMins + 1440) % 1440 / 60);
      const m = Math.floor((totalMins + 1440) % 1440 % 60);
      return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
    };

    vcCurrentDayClasses[0].start = formatTime(startMins);
    vcCurrentDayClasses[0].end = formatTime(endMins);
  }

  const classCards = vcCurrentDayClasses.map((cls, idx) => {
    const [startH, startM] = cls.start.split(":").map(Number);
    const [endH, endM] = cls.end.split(":").map(Number);
    const startMinutes = startH * 60 + startM;
    const endMinutes = endH * 60 + endM;

    let status, statusBadge, cardClass, buttonHtml;
    const viewers = Math.floor(Math.random() * 18) + 12;

    if (currentMinutes >= startMinutes && currentMinutes < endMinutes) {
      status = "live";
      statusBadge = `<span class="vc-card-status-badge vc-badge-live"><span class="vc-live-dot"></span> En Vivo</span>`;
      cardClass = "is-live";
      buttonHtml = `<button class="vc-join-btn" onclick="joinVcClass(${idx})"><i class="fa-solid fa-video"></i> Entrar</button>`;
      liveCount++;
    } else if (currentMinutes < startMinutes) {
      status = "upcoming";
      statusBadge = `<span class="vc-card-status-badge vc-badge-upcoming"><i class="fa-regular fa-clock"></i> Próxima</span>`;
      cardClass = "is-upcoming";
      buttonHtml = `<button class="vc-join-btn" disabled><i class="fa-solid fa-lock"></i> Esperando</button>`;
      upcomingCount++;
    } else {
      status = "ended";
      statusBadge = `<span class="vc-card-status-badge vc-badge-ended"><i class="fa-regular fa-circle-check"></i> Finalizada</span>`;
      cardClass = "is-ended";
      buttonHtml = `<button class="vc-join-btn" disabled><i class="fa-solid fa-check"></i> Terminada</button>`;
      endedCount++;
    }

    return `
      <div class="vc-class-card ${cardClass}">
        <div class="vc-card-top">
          <div>
            <h4 class="vc-card-subject">${cls.subject}</h4>
            <p class="vc-card-teacher">${cls.teacher}</p>
          </div>
          ${statusBadge}
        </div>
        <div class="vc-card-details">
          <span><i class="fa-regular fa-clock"></i> ${cls.start} - ${cls.end}</span>
          <span><i class="fa-solid fa-chalkboard"></i> ${cls.topic}</span>
        </div>
        <div class="vc-card-bottom">
          <span class="vc-card-viewers"><i class="fa-solid fa-users"></i> ${status === "live" ? viewers : status === "upcoming" ? "—" : "0"} conectados</span>
          ${buttonHtml}
        </div>
      </div>
    `;
  });

  // Actualizar contadores
  const elLive = document.getElementById("vc-count-live");
  const elUpcoming = document.getElementById("vc-count-upcoming");
  const elEnded = document.getElementById("vc-count-ended");
  if (elLive) elLive.textContent = liveCount;
  if (elUpcoming) elUpcoming.textContent = upcomingCount;
  if (elEnded) elEnded.textContent = endedCount;

  // Renderizar grid
  const grid = document.getElementById("vc-classes-grid");
  if (grid) {
    if (vcCurrentDayClasses.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem;">
          <i class="fa-regular fa-calendar-xmark" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem; display: block;"></i>
          <h3 style="color: var(--text-muted); font-size: 1.2rem; margin-bottom: 0.5rem;">No hay clases programadas hoy</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Las clases virtuales están disponibles de lunes a viernes en horario escolar (7:30 AM - 1:00 PM).</p>
        </div>
      `;
    } else {
      grid.innerHTML = classCards.join("");
    }
  }
}

function joinVcClass(classIndex) {
  const cls = vcCurrentDayClasses[classIndex];

  if (!cls) return;

  // Configurar la sala de clase
  const roomSubject = document.getElementById("vc-room-subject");
  const roomTeacher = document.getElementById("vc-room-teacher");
  const roomTeacherImg = document.getElementById("vc-room-teacher-img");
  const roomSubjectLg = document.getElementById("vc-room-subject-lg");
  const roomTopic = document.getElementById("vc-room-topic");
  const viewerCount = document.getElementById("vc-viewers");

  if (roomSubject) roomSubject.textContent = cls.subject;
  if (roomTeacher) roomTeacher.textContent = cls.teacher;
  if (roomTeacherImg) roomTeacherImg.src = cls.teacherImg;
  if (roomSubjectLg) roomSubjectLg.textContent = cls.subject;
  if (roomTopic) roomTopic.textContent = `Tema: ${cls.topic}`;
  if (viewerCount) viewerCount.textContent = Math.floor(Math.random() * 18) + 12;

  // Configurar tarjeta de videollamada real
  const realCallCard = document.getElementById("vc-real-call-card");
  const btnJoinReal = document.getElementById("btn-vc-join-real");
  const realCallText = document.getElementById("vc-real-call-text");
  const realCallIcon = document.getElementById("vc-real-call-icon");

  if (realCallCard && btnJoinReal) {
    const savedLink = localStorage.getItem("vc_link_" + cls.subject.trim());
    if (savedLink) {
      const parsed = JSON.parse(savedLink);
      if (parsed.url) {
        realCallCard.classList.remove("hidden");
        btnJoinReal.href = parsed.url;
        
        let platformName = "Zoom";
        let iconHtml = '<i class="fa-solid fa-video"></i>';
        
        if (parsed.platform === "meet") {
          platformName = "Google Meet";
          iconHtml = '<i class="fa-brands fa-google text-emerald"></i>';
        } else if (parsed.platform === "teams") {
          platformName = "Microsoft Teams";
          iconHtml = '<i class="fa-solid fa-users text-indigo"></i>';
        } else if (parsed.platform === "zoom") {
          platformName = "Zoom";
          iconHtml = '<i class="fa-solid fa-video text-blue"></i>';
        } else {
          platformName = "Videollamada";
          iconHtml = '<i class="fa-solid fa-link"></i>';
        }
        
        if (realCallText) {
          realCallText.innerText = `El profesor está dictando la clase en vivo mediante ${platformName}.`;
        }
        if (realCallIcon) {
          realCallIcon.innerHTML = iconHtml;
        }
        btnJoinReal.innerHTML = `<i class="fa-solid fa-video"></i> Unirse en ${platformName}`;
      } else {
        realCallCard.classList.add("hidden");
      }
    } else {
      // Si no hay enlace guardado, mostrar enlace demo genérico para Matemáticas
      if (cls.subject === "Matemáticas") {
        realCallCard.classList.remove("hidden");
        btnJoinReal.href = "https://zoom.us/j/1234567890?pwd=DEMO_MEETING_PASSWORD";
        if (realCallText) {
          realCallText.innerText = "Clase de Matemáticas activa en vivo. (Enlace de demostración)";
        }
        if (realCallIcon) {
          realCallIcon.innerHTML = '<i class="fa-solid fa-video text-blue"></i>';
        }
        btnJoinReal.innerHTML = '<i class="fa-solid fa-video"></i> Unirse en Zoom (Demo)';
      } else {
        realCallCard.classList.add("hidden");
      }
    }
  }

  // Resetear estado del chat
  vcChatMessages = [];
  vcHandRaised = false;
  const handBtn = document.getElementById("btn-vc-hand");
  if (handBtn) handBtn.classList.remove("is-raised");

  // Limpiar chat anterior
  const chatMessagesEl = document.getElementById("vc-chat-messages");
  if (chatMessagesEl) chatMessagesEl.innerHTML = "";
  
  const chatCount = document.getElementById("vc-chat-count");
  if (chatCount) chatCount.textContent = "0 mensajes";

  // Mostrar panel de chat
  const chatPanel = document.getElementById("vc-chat-panel");
  if (chatPanel) chatPanel.classList.remove("vc-chat-hidden");

  // Cambiar a vista classroom
  showVcView("classroom");

  // Agregar mensaje de sistema
  setTimeout(() => {
    addVcChatMessage("Sistema", "system", `${vcStudentName} se ha conectado a la clase`);
  }, 500);

  // Mensaje de bienvenida del profesor
  setTimeout(() => {
    addVcChatMessage(cls.teacher, "teacher", `¡Bienvenidos a la clase de ${cls.subject}! Hoy veremos: ${cls.topic}`);
  }, 2000);

  // Iniciar simulación de chat
  startChatSimulation(cls.teacher);
}

function startVcClock() {
  clearInterval(vcClockInterval);
  updateVcDateTime();
  vcClockInterval = setInterval(updateVcDateTime, 30000); // cada 30 segundos
}

function updateVcDateTime() {
  const now = new Date();
  const dateEl = document.getElementById("vc-current-date");
  const timeEl = document.getElementById("vc-current-time");

  const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  if (dateEl) {
    dateEl.textContent = `${dias[now.getDay()]}, ${now.getDate()} de ${meses[now.getMonth()]} ${now.getFullYear()}`;
  }
  if (timeEl) {
    const hours = now.getHours();
    const mins = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const h12 = hours % 12 || 12;
    timeEl.textContent = `${h12}:${mins} ${ampm}`;
  }
}

// --- Chat functionality ---

function sendVcChatMessage(inputEl) {
  const text = inputEl.value.trim();
  if (!text) return;

  addVcChatMessage(vcStudentName, "self", text);
  inputEl.value = "";

  // Posible respuesta del profesor (30% de probabilidad)
  if (Math.random() < 0.3) {
    const currentTeacher = document.getElementById("vc-room-teacher")?.textContent || "Profesor";
    const response = VC_TEACHER_RESPONSES[Math.floor(Math.random() * VC_TEACHER_RESPONSES.length)];
    setTimeout(() => {
      addVcChatMessage(currentTeacher, "teacher", response);
    }, 2000 + Math.random() * 3000);
  }
}

function addVcChatMessage(name, role, text) {
  const chatMessagesEl = document.getElementById("vc-chat-messages");
  if (!chatMessagesEl) return;

  const now = new Date();
  const timeStr = `${(now.getHours() % 12 || 12)}:${now.getMinutes().toString().padStart(2, "0")} ${now.getHours() >= 12 ? "PM" : "AM"}`;

  vcChatMessages.push({ name, role, text, time: timeStr });

  const msgDiv = document.createElement("div");
  msgDiv.className = `vc-chat-msg${role === "system" ? " vc-chat-msg-system" : ""}`;

  if (role === "system") {
    msgDiv.innerHTML = `<p class="vc-chat-msg-text">${text}</p>`;
  } else {
    const nameClass = role === "teacher" ? "is-teacher" : role === "self" ? "is-self" : "";
    const displayName = role === "teacher" ? `${name} 🎓` : role === "self" ? `${name} (Tú)` : name;
    msgDiv.innerHTML = `
      <div class="vc-chat-msg-name ${nameClass}">${displayName}</div>
      <p class="vc-chat-msg-text">${escapeHtml(text)}</p>
      <div class="vc-chat-msg-time">${timeStr}</div>
    `;
  }

  chatMessagesEl.appendChild(msgDiv);
  chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;

  // Actualizar contador
  const chatCount = document.getElementById("vc-chat-count");
  if (chatCount) {
    chatCount.textContent = `${vcChatMessages.length} mensaje${vcChatMessages.length !== 1 ? "s" : ""}`;
  }
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function startChatSimulation(teacherName) {
  stopChatSimulation();
  let msgIndex = 0;

  vcChatSimInterval = setInterval(() => {
    if (msgIndex >= VC_SIMULATED_MESSAGES.length) {
      msgIndex = 0; // Reiniciar ciclo
    }

    const msg = VC_SIMULATED_MESSAGES[msgIndex];
    addVcChatMessage(msg.name, "student", msg.text);
    msgIndex++;

    // Respuesta ocasional del profesor (cada 3 mensajes de alumnos)
    if (msgIndex % 3 === 0) {
      const response = VC_TEACHER_RESPONSES[Math.floor(Math.random() * VC_TEACHER_RESPONSES.length)];
      setTimeout(() => {
        addVcChatMessage(teacherName, "teacher", response);
      }, 1500 + Math.random() * 2000);
    }
  }, 6000 + Math.random() * 4000); // Cada 6-10 segundos
}

function stopChatSimulation() {
  if (vcChatSimInterval) {
    clearInterval(vcChatSimInterval);
    vcChatSimInterval = null;
  }
}

