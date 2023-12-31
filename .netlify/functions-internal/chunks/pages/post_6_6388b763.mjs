/* empty css                             */import { a as createComponent, r as renderTemplate, f as renderComponent, u as unescapeHTML } from '../astro/server_d07ed82c.mjs';
import 'clsx';
import { e as $$PostsLayout } from './PostsLayout_4ec6c872.mjs';

const html = "";

				const frontmatter = {"layout":"./PostsLayout.astro","etiqueta":"Blog","titulo":"🍋Un limón y pal jale","imagen":"/399653720_224482663991687_4620929109804480912_n.jpg","descripcion":" No habrá agua en la ciudad Serranos nuevamente cierran la presa Yuribia  Coatzacoalcos Ver. .- Tras el bloqueo que mantuvieron ejidatarios de Tatahuicapan en la presa Yuribia presuntamente liderados por el Presidente municipal Eusebio González, ha trascendido que se encuentran a punto de cerrar las válvulas del suministro para dejar al sur de Veracruz sin agua potable. Dicho movimiento derivó de exigir radicalmente al ayuntamiento de Coatzacoalcos el desarrollo de obras en la ciudad serrana, entre los que destacan tramos carreteros. Este bloqueo afectará a más de medio millón de usuarios entre los municipios de Coatzacoalcos, Minatitlán y Cosoleacaque, los cuales ya habían llegado a un acuerdo este año con los manifestantes para omitir estos movimientos, quienes reprueban el supuesto incumplimiento.","link":"https://www.facebook.com/permalink.php?story_fbid=pfbid02PNZUK2vodFWDkK5PdDyRue5bWJgYdrCwiUqGUV4CqWE9PXeCn2YrJSq7VW8WJFF7l&id=100092898635950","redireccion":"/posts/post_6"};
				const file = "/home/angel/Escritorio/conoce/src/pages/posts/post_6.md";
				const url = "/posts/post_6";
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
