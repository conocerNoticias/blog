/* empty css                             */import { a as createComponent, r as renderTemplate, f as renderComponent, u as unescapeHTML } from '../astro/server_7f5373cd.mjs';
import 'clsx';
import { e as $$PostsLayout } from './PostsLayout_697d4437.mjs';

const html = "";

				const frontmatter = {"layout":"./PostsLayout.astro","etiqueta":"Blog","titulo":"💪🏻LA MUJER, CONSTRUCTORA DE LA DEMOCRACIA: ROCÍO NAHLE","imagen":"/400858078_223436510762969_5414392456891242071_n.jpg","descripcion":"***La mujer que más admira es la que todos los días se levanta y demuestra su capacidad de organización, trabajo, sensibilidad y atención.  ***Rocío Nahle, fue coordinadora de la primera bancada de Morena a nivel federal integrada por 22 diputadas y 13 diputados. ***Las mujeres, protagonistas del cambio del régimen neoliberal al de la Cuarta Transformación. ***Si se puede trabajar con hombres, en equidad, igualdad y equipo.  Perote, Ver., domingo 12 de noviembre de 2023.- Ratificando que #estiempodemujeres, la Coordinadora de los Comités de Defensa de la 4T en Veracruz, Rocío Nahle García, aseguró que la mujer es imprescindible para el desarrollo de la sociedad porque donde está la presencia de la mujer “se avanza” en todos los niveles y ámbitos. En su participación en el Foro “Veracruz MujerEsPolítica 2023”, organizado por la Secretaría de Mujeres del Comité Ejecutivo Nacional y la Secretaría de Mujeres del Comité Ejecutivo Estatal de Veracruz de Morena, Rocío Nahle expresó que no hay desarrollo social sin las mujeres. “Donde está la mujer, donde está la presencia de la mujer se avanza a nivel social, a nivel económico, a nivel educativo y nuestra propia naturaleza de cuidar, de proteger, de guiar, de bien administrar conlleva a una mejor sociedad”, añadió.  Al grito de ¡coordinadora!, ¡coordinadora!, ¡coordinadora! por parte de las mujeres presentes en este espacio de formación y capacitación política de Morena, Rocío Nahle apuntó que no hay mujer que más admire, ni más respetable que aquella que todos los días se encarga de su casa, de su familia, de su trabajo y de todas las responsabilidades que enfrenta en el día a día.  Narró a las mujeres presentes: -Alguien me preguntó una vez en Ciudad de México, oye Rocío, ¿cual es la mujer que más admiras?, le dije: aquella que todos los días se levanta a atender su hogar, irse a trabajar, tener atenciones todo el día, somos las primeras que nos levantamos, todo el día trabajamos y las últimas que descansamos.  Recordó que las mujeres se han preparado para reducir el rezago histórico que el género acumuló por décadas, por ello, el que hoy ocupen sitios de mando a nivel nacional, estatal y legislativo no es fortuito, al contrario, el género femenino lo ha logrado porque trabajaron para eso.  Otro factor que ha permitido a las mujeres ser protagonistas del cambio es que la ley ha sido reformada permanentemente para abrir legalmente paso al género femenino. Ahora, indicó, solo falta que las mujeres crean y confíen de verdad en su capacidad y poder. “Ley, hemos modificado leyes para tener derechos políticos y dos, nos hemos preparado, las mujeres nos hemos preparado y eso es importante porque todas las que estamos aquí tenemos una representación y vamos a nuestras comunidades y localidades y tenemos que creérnosla, apoyar y formar y cada una de ustedes, estoy segura que tienen una historia”, enfatizó.  Subrayó que actualmente el gabinete del presidente Andrés Manuel López Obrador está integrado por mujeres así como las legislaturas federales y locales en un porcentaje importante. “Hoy en política nos sometemos a una contienda, una participación en condiciones iguales pero las mujeres venimos con pasos agigantados para ganar tiempo a lo que veníamos rezagadas”, agregó.  Por su parte, Adriana Grajales Gómez, secretaria de Mujeres del Comité Ejecutivo Nacional de Morena, se congratuló de que Rocío Nahle sea hoy la Coordinadora de los Comités de Defensa de la 4T en Veracruz porque las mujeres son garantía de triunfo para el proceso electoral de 2024. “Vamos a ganar las cinco gobernaturas donde van mujeres junto con ustedes”, afirmó. Estuvieron presentes Adriana Grajales Gómez, secretaria de Mujeres del Comité Ejecutivo Nacional de Morena; Esteban Ramírez Zepeta, dirigente de Morena en el Estado; Elizabeth Cervantes, secretaria general de Morena; la presidenta del Consejo Político de Morena, Dorheny García Cayetano; la senadora Gloria Sánchez; Felipe Castro Girón, Secretario de Organización; Secretaria de Mujeres de Morena, Jennifer Joyce García Esquivel; Alejandro Porras Marín, Secretario de Jóvenes del Comité Ejecutivo Nacional del Morena y la diputada federal, Claudia Tello Espinosa. Asistieron igualmente los y las diputadas locales Adriana Martínez, presidenta de la Mesa Directiva del Congreso Local; Gisela López; Paul Martínez Marié; Perla Romero Rodríguez; Margarita Corro; Magaly Armenta; Itzel López López; Lidia Irma Mezhua Campos, además de ediles de distintos municipios del estado.","link":"https://www.facebook.com/permalink.php?story_fbid=pfbid0GwHHMY9HtSjagmd1xWu2XPDQJH6VQ7K1tu65rKBvescjcZ796DB8jmPTBFPEPPkal&id=100092898635950","redireccion":"/posts/post_4"};
				const file = "/home/angel/Escritorio/conoce/src/pages/posts/post_4.md";
				const url = "/blog/posts/post_4";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$PostsLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
