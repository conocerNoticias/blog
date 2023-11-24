/* empty css                             */import { a as createComponent, r as renderTemplate, f as renderComponent, u as unescapeHTML } from '../astro/server_d07ed82c.mjs';
import 'clsx';
import { e as $$PostsLayout } from './PostsLayout_1686f93e.mjs';

const html = "";

				const frontmatter = {"layout":"./PostsLayout.astro","etiqueta":"Blog","titulo":"🏗️Benito se va a poner guapo🗽","imagen":"/401848945_224558873984066_6163828149503638304_n.jpg","descripcion":"PARQUE REFORMA TENDRÁ UNA NUEVA IMAGEN! Autoridades municipales encabezadas por la Dra. Carmen Medel Palma darán el banderazo de arranque de la rehabilitación del parque Reforma mejor conocido como Los Dos Leones. Ya le hacia falta, o ¿usted que opina?","link":"https://www.facebook.com/permalink.php?story_fbid=pfbid0MuGXoyNyzrJbx5y6GiA2mG3quj9xU6DLMH8xMocMQCSFAdou33567tJ6r1kNZeYYl&id=100092898635950","redireccion":"/posts/post_3"};
				const file = "/home/angel/Escritorio/conoce/src/pages/posts/post_3.md";
				const url = "/posts/post_3";
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
