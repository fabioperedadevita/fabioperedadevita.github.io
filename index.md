<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" id="font_awesome-css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css?ver=5.8" media="all" />
        <link rel="stylesheet" href="estilos.css" >
        <script src="javascript.js"></script>
    </head>
    <body>
        <header class="cabecera">
            <i class="icono_menu fas fa-bars" onclick="desplegarMenu()"></i>
            <ul>
                <li><a id="enlace_sobre_mi" href="#sobre-mi" onclick="cerrarMenu()">Sobre mí</a></li>
                <li><a id="enlace_formacion" href="#formacion" onclick="cerrarMenu()">Formación</a></li>
                <li><a id="enlace_experiencia" href="#experiencia" onclick="cerrarMenu()">Experiencia</a></li>
                <li><a id="enlace_habilidades" href="#habilidades" onclick="cerrarMenu()">Habilidades</a></li>
                <li><a id="enlace_proyectos" href="#proyectos" onclick="cerrarMenu()">Proyectos</a></li>
                <li><a id="enlace_contacto" href="#contacto" onclick="cerrarMenu()">Contacto</a></li>
            </ul>
        </header>
        <div class="resumen">
            <div class="info_resumen">
                <h1>Fabio Pereda Devita</h1>
                <div class="texto_resumen">Economista con conocimientos en contabilidad y auditoría con ganas de crecer profesionalmente</div>
                <div class="botones">
                    <a href="cv.pdf" download="cv.pdf"><i class="far fa-file-alt"></i>&nbsp;&nbsp;Descargar CV</a>
                    <a href="#contacto">Contactar</a>
                </div>
            </div>
            <div class="foto_resumen">
                <img src="foto_cv.jpg">
            </div>
        </div>
        <div class="contenedor">
            <section id="sobre-mi">
                <h2>Sobre mí</h2>
                <div class="bloque_sobre_mi">
                    <p>
                        Soy un joven que ha nacido y vive en el Principado de Asturias teniendo actualmente 26 años. Le invito a conocerme un poco más allá de mi Currículo Vitae.
                    </p><br>
                    <p>
                        La curiosidad de entender la economía me llevo a estudiar en su momento ciencias empresariales, teniendo una preferencia por la rama en contabilidad y finanzas. De forma simultánea he trabajado en otra serie de empleos y me ha aportado una mayor capacidad de organización y de madurez.
                    </p><br>
                    <p>
                        Soy una persona organizada con una buena capacidad analítica y de adaptación, capaz de tolerar altos niveles de estrés. Y aunque mi experiencia laboral no sea demasiado amplía, tengo capacidad de evolución en autonomía y de trabajo en equipo. 
                    </p><br>
                    <p>
                        De forma paralela a la realización de mis estudios reglados, he profundizado en aquellos aspectos que me generaban curiosidad. Este interés se vio reflejado en el aprendizaje en un nivel básico del lenguaje SQL utilizado en la gestión de base de datos, así como en el programa Google Analytics. Me ha fascinado como los conocimientos teóricos en marketing se les daba una utilidad en este tipo de programas en combinación de la informática y las matemáticas.
                    </p>
                </div>
                <img src="foto_cv.jpg">
            </section>
            <section id="formacion">
                <h2>Formación</h2>
                <div class="bloque_formacion">
                    <h3><i class="fas fa-university"></i> Grado en ADE 2013-2020</h3>
                    <p>
                        Nota media de <strong>7,794</strong><br>
                        Universidad de Oviedo<br>
                        <a href="Expediente Grado ADE Fabio Pereda Devita.pdf" class="fichero_formacion"><i class="far fa-file-alt"></i>&nbsp;&nbsp;Descargar Expediente Académico</a>
                    </p>
                </div>
                <div class="bloque_formacion">
                    <h3><i class="fas fa-graduation-cap"></i> Máster en Sistemas de Información y Análisis Contable 2020-2021</h3>
                    <p>
                        Itinerario de Auditoría de Cuentas<br>
                        Nota media de <strong>9,369</strong><br>
                        Universidad de Oviedo<br>
                        Pendiente entrega TFM en octubre-noviembre<br>
                        <a href="Expediente Master SIAC Fabio Pereda Devita.pdf" class="fichero_formacion"><i class="far fa-file-alt"></i>&nbsp;&nbsp;Descargar Expediente Académico</a>
                    </p>
                </div>
                <div class="bloque_formacion">
                    <h3><i class="fas fa-award"></i> Otra formación de relevancia</h3>
                    <p>
                        Certificación de <i>Microsoft Office Specialist (MOS)</i><br>
                        <a href="MOS Fabio.pdf" class="fichero_formacion"><i class="far fa-file-alt"></i>&nbsp;&nbsp;Descargar Certificación MOS</a><br>
                        Gestión contable y gestión administrativa para auditoría (630 horas)
                    </p>
                </div>
            </section>
            <section id="experiencia">
                <h2>Experiencia</h2>
                <div class="contenido_experiencia">
                    <div class="bloque_experiencia">
                        <div class="ano_experiencia">2021</div>
                        <h3 class="titulo_experiencia">AUDITORÍA FINANCIERA</h3>
                        <span class="fecha_experiencia">enero de 2021 - julio de 2021</span>
                        <div class="descripcion_experiencia">
                            Ayudante de auditoría Financiera en Llana Consultores
                            <ul>
                                <li>Auditoría Financiera</li>
                                <li>Convenio de prácticas</li>
                                <li>Crecimiento en autonomía y resolución de tareas</li>
                                <li>Áreas Contables Ventas, Compras, Tesorería, Deuda financiera, Impuestos, etc</li>
                            </ul><br>
                            Realización de estudios en profundidad sobre la concordancia del inmovilizado (tanto en su coste, gasto y amortización acumulada)
                            de los datos reflejados en contabilidad con respecto a sus análogos en los respectivos cuadros de amortización.
                        </div>
                        <img class="logo_experiencia" src="llana_logo.png">
                    </div>
                    <div class="bloque_experiencia">
                        <div class="ano_experiencia">2019</div>
                        <h3 class="titulo_experiencia">SECTOR BANCARIO</h3>
                        <span class="fecha_experiencia">mayo de 2019 - septiembre de 2019</span>
                        <div class="descripcion_experiencia">
                            Gestor de atención al cliente en Oficina BBVA de Llanes
                            <ul>
                                <li>Atención al cliente</li>
                                <li>Atención en caja</li>
                                <li>Desarrollo de funciones de cajero de banca</li>
                                <li>Manejo de efectivo, resolución de incidencias, cobro de impuestos</li>
                              
                            </ul>
                        </div>
                        <img class="logo_experiencia" src="logo_BBVA.png">
                    </div>
                    <div class="bloque_experiencia">
                        <h3 class="titulo_experiencia">AUXILIAR ADMINISTRATIVO</h3>
                        <span class="fecha_experiencia">abril de 2019 - mayo de 2019</span>
                        <div class="descripcion_experiencia">
                            Ayudante de auxiliar administrativo en Infiesto Asesores
                            <ul>
                                <li>Contabilización de facturas de compras y ventas en el programa contable</li>
                                <li>Convenio de prácticas 80 horas)</li>
                                <li>Trascripción de documentación</li>
                                <li>Tareas relativas al archivo de la documentación</li>
                            </ul>
                        </div>
                        <img class="logo_experiencia" src="logo_infiesto_negro.png">
                    </div>
                    <div class="bloque_experiencia">
                        <div class="ano_experiencia">2018</div>
                        <h3 class="titulo_experiencia">DEPARTAMENTO DE CONTABILIDAD</h3>
                        <span class="fecha_experiencia">septiembre de 2017 - junio de 2018</span>
                        <div class="descripcion_experiencia">
                            Beca de colaboración con la Universidad de Oviedo
                            <ul>
                                <li>Mantenimiento de la página web del Máster SIAC y actualización de su contenido</li>
                                <li>Análisis de las encuestas a estudiantes del Máster SIAC sobre su futura empleabilidad</li>
                                <li>Informe sobre la enseñanza de contabilidad del resto de universidades españolas</li>
                                <li>Beca de colaboración correspondiente al curso 2017-2018</li>
                            </ul>
                        </div>
                        <img class="logo_experiencia" src="logo_uniovi.png">
                    </div>
                    <div class="bloque_experiencia">
                        <div class="ano_experiencia">2017</div>
                        <h3 class="titulo_experiencia">SECTOR BANCARIO</h3>
                        <span class="fecha_experiencia">mayo de 2017 - noviembre de 2017</span>
                        <div class="descripcion_experiencia">
                            Cajero de banca y gestor de atención al cliente en la oficina BBVA de Avilés
                            <ul>
                                <li>Convenio de prácticas</li>
                                <li>Funciones relativas a caja: Efectivo, impuestos, recibos, resolución del día a día.</li>
                                <li>Llamadas telefónicas, informar sobre los productos a los clientes.</li>
                                <li>Arqueo diario del puesto y resolución en el caso de haber diferencias</li>
                            </ul>

                        </div>
                        <img class="logo_experiencia" src="logo_BBVA.png">
                    </div>
                </div>
            </section>
            <section id="habilidades">
                <h2>Habilidades</h2>
                <div class="bloque_habilidades">
                    <div class="habilidad">
                        <h3 class="titulo_habilidad"><img src="trabajo_equipo.png">Trabajo en equipo</h3>
                        <div class="barra_habilidad">
                            <div class="porcentaje_habilidad" style="width: 95%;">95%</div>
                        </div>
                    </div>
                    <div class="habilidad">
                        <h3 class="titulo_habilidad"><img src="microsoft_teams.png">Microsoft Teams</h3>
                        <div class="barra_habilidad">
                            <div class="porcentaje_habilidad" style="width: 90%;">90%</div>
                        </div>
                    </div>
                    <div class="habilidad">
                        <h3 class="titulo_habilidad"><img src="microsoft_powerpoint_2019.png">Microsoft PowerPoint</h3>
                        <div class="barra_habilidad">
                            <div class="porcentaje_habilidad" style="width: 90%;">90%</div>
                        </div>
                    </div>
                    <div class="habilidad">
                        <h3 class="titulo_habilidad"><img src="microsoft_excel_2019.png">Microsoft Excel</h3>
                        <div class="barra_habilidad">
                            <div class="porcentaje_habilidad" style="width: 80%;">80%</div>
                        </div>
                    </div>
                    <div class="habilidad">
                        <h3 class="titulo_habilidad"><img src="microsoft_word_2019.png">Microsoft Word</h3>
                        <div class="barra_habilidad">
                            <div class="porcentaje_habilidad" style="width: 80%;">80%</div>
                        </div>
                    </div>
                    <div class="habilidad">
                        <h3 class="titulo_habilidad"><img src="google_drive.png">Google Drive</h3>
                        <div class="barra_habilidad">
                            <div class="porcentaje_habilidad" style="width: 70%;">70%</div>
                        </div>
                    </div>
                    <div class="habilidad">
                        <h3 class="titulo_habilidad"><img src="logo_zifra.png">Zifra Auditoría</h3>
                        <div class="barra_habilidad">
                            <div class="porcentaje_habilidad" style="width: 50%;">50%</div>
                        </div>
                    </div>
                    <div class="habilidad">
                        <h3 class="titulo_habilidad"><img src="logotipo_contasol.png">Contasol</h3>
                        <div class="barra_habilidad">
                            <div class="porcentaje_habilidad" style="width: 35%;">35%</div>
                        </div>
                    </div>
                    <div class="habilidad">
                        <h3 class="titulo_habilidad"><img src="google_analytics.png"/>Google Analytics</h3>
                        <div class="barra_habilidad">
                            <div class="porcentaje_habilidad" style="width: 15%;">15%</div>
                        </div>
                    </div>
                    <div class="habilidad">
                        <h3 class="titulo_habilidad"><img src="sql.png"/>Bases de datos SQL</h3>
                        <div class="barra_habilidad">
                            <div class="porcentaje_habilidad" style="width: 10%;">10%</div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="proyectos">
                <h2>Proyectos</h2>
                <div class="bloque_proyectos">
                    <a href="Fabio Pereda Devita TFG.pdf" target="_blank" class="proyecto">
                        <div class="foto_proyecto">
                            <img src="TFM_ADE.png">
                        </div>
                        <div class="info_proyecto">
                            <h3>TFG</h3>
                            <span>Implicaciones de la automatización en los sistemas productivos
                        </div>
                        </span>
                    </a>
                    <a href="Fabio Pereda Devita TFG.pdf" target="_blank" class="proyecto">
                        <div class="foto_proyecto">
                            <img src="TFM_auditoria.jpg">
                        </div>
                        <div class="info_proyecto">
                            <h3>TFM</h3>
                            <span>Análisis contable del inmovilizado material
                        </div>
                        </span>
                    </a>
                    <a href="https://www.instagram.com/gallu.lector/" target="_blank" class="proyecto">
                        <div class="foto_proyecto">
                            <img src="gallu_lector.jpg">
                        </div>
                        <div class="info_proyecto">
                            <h3>Afición literaria</h3>
                            <span>Seguimiento de mis publicaciones relacionadas con el ámbito literario
                        </div>
                        </span>
                    </a>
                    <a href="https://www.youtube.com/channel/UCazrbzzykQUaegqsPEOkTxg" target="_blank" class="proyecto" >
                        <div class="foto_proyecto">
                            <img src="gallu_economy.jpg">
                        </div>
                        <div class="info_proyecto">
                            <h3>Canal economía</h3>
                            <span>Afición en construcción sobre diversos temas sobre la economía y la contabilidad
                        </div>
                        </span>
                    </a>
                </div>
            </section>
            <section id="contacto">
                <h2>Contacto</h2>
                <div class="contenido_contacto">
                    <div class="bloque_contacto">
                        <h3>Teléfono</h3>
                        <p>
                            611 42 52 92
                        </p>
                        <i class="fas fa-phone icono_bloque_contacto"></i>
                    </div>
                    <div class="bloque_contacto">
                        <h3>Email</h3>
                        <p>
                            <a href="mailto:fabioperedadevitaasturias@gmail.com"><span style="white-space:nowrap;display:inline-block;">fabioperedadevitaasturias</span><span style="white-space:nowrap;display:inline-block;">@gmail.com</span></a>
                        </p>
                        <i class="far fa-envelope icono_bloque_contacto"></i>
                    </div>
                    <div class="bloque_contacto">
                        <h3>Dirección</h3>
                        <p>
                            Villaviciosa, Asturias
                        </p>
                        <i class="fas fa-map-marker-alt icono_bloque_contacto"></i>
                    </div>
                </div>
            </section>
        </div>
        <footer class="pie">
            <nav>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/fabio-pereda-devita-985709149/" target="_blank" title="Linkedin"><i class="fab fa-linkedin-in"></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/gallu.lector/" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCazrbzzykQUaegqsPEOkTxg" target="_blank" title="Youtube"><i class="fab fa-youtube"></i></a>
                    </li>
                </ul>
            </nav>
        </footer>
    </body>
</html>