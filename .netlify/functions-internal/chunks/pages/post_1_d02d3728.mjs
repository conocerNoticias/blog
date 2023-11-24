/* empty css                             */import { a as createComponent, r as renderTemplate, f as renderComponent, u as unescapeHTML } from '../astro/server_d07ed82c.mjs';
import 'clsx';
import { e as $$PostsLayout } from './PostsLayout_4ec6c872.mjs';

const html = "";

				const frontmatter = {"layout":"./PostsLayout.astro","etiqueta":"Blog","titulo":"Postal de minatitlan","descripcion":"🏭 Se ve chido 🌊 Malecón ribereño y Refinería de Minatitlán, Veracruz; como para ir y echarse un esquite mientras miras el río Coatzacoalcos","imagen":"/401085519_224091037364183_1954866231995672563_n.jpg","link":"https://www.facebook.com/permalink.php?story_fbid=pfbid02j8W65dMy1QjqT54xuFiLBKwWmK2K1DAX1PaHKJ6G7GVNHagNc7aoGTw4C44zsuT9l&id=100092898635950","redireccion":"/posts/post_1"};
				const file = "/home/angel/Escritorio/conoce/src/pages/posts/post_1.md";
				const url = "/posts/post_1";
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
