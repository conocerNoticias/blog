/* empty css                             */import { a as createComponent, r as renderTemplate, f as renderComponent, u as unescapeHTML } from '../astro/server_d07ed82c.mjs';
import 'clsx';
import { e as $$PostsLayout } from './PostsLayout_4ec6c872.mjs';

const html = "";

				const frontmatter = {"layout":"./PostsLayout.astro","etiqueta":"Blog","titulo":"Al bote🚓","imagen":"/401499955_223978987375388_7598998042059241658_n.jpg","descripcion":"🔴Vinculado a proceso como presunto responsable del delito de homicidio doloso calificado Coatzacoalcos, Ver., 13 de noviembre de 2023.- La Fiscalía Regional Coatzacoalcos obtuvo vinculación a proceso en contra de Josué “N” como presunto responsable del delito de homicidio doloso calificado cometido en agravio de la víctima L.A.D.L.S.R. El Juez dictó como medida cautelar prisión preventiva justificada por un año, dentro del proceso penal 922/2023.","link":"https://www.facebook.com/permalink.php?story_fbid=pfbid024cAwr1bmer2KhvwWgFUtQUcHxkQ49rkJP2tF7CEgY37vEtrGgprzGvrcjdX1v7mfl&id=100092898635950","redireccion":"/posts/post_2"};
				const file = "/home/angel/Escritorio/conoce/src/pages/posts/post_2.md";
				const url = "/posts/post_2";
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
