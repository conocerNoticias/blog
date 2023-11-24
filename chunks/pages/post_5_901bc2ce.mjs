/* empty css                             */import { a as createComponent, r as renderTemplate, f as renderComponent, u as unescapeHTML } from '../astro/server_7f5373cd.mjs';
import 'clsx';
import { e as $$PostsLayout } from './PostsLayout_697d4437.mjs';

const html = "";

				const frontmatter = {"layout":"./PostsLayout.astro","etiqueta":"Blog","titulo":"🤼Todo un ejemplo bro🥋","imagen":"/401502585_224589217314365_208272078873219149_n.jpg","descripcion":"👏🏼 🥇 Orgullo Minatitleco, joven gana medalla de oro en campeonato panamericano.  .- Gilberto Moreno puso en alto a #Minatitlán y a #México al ganar medalla de oro en la categoría Jiu Jitsu en “Campeonato Panamericano” en Argentina.","link":"https://www.facebook.com/permalink.php?story_fbid=pfbid0cUE8a1mGo42wFp1kcqQwBxK5PEQtcurpTYqBpCWAqMTnrBcKRhHo27gtZwsWAxAgl&id=100092898635950","redireccion":"/posts/post_5"};
				const file = "/home/angel/Escritorio/conoce/src/pages/posts/post_5.md";
				const url = "/blog/posts/post_5";
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
