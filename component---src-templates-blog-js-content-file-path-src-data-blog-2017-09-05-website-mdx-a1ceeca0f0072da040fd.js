(self.webpackChunkalec_divito_website=self.webpackChunkalec_divito_website||[]).push([[130],{5856:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({h2:"h2",p:"p",ol:"ol",li:"li",a:"a"},(0,a.ah)(),e.components),{Design_index_page:n,Design_about_page:r,Design_projects_page:o,Design_work_page:i,Design_contact_page:c,Design_nav_component:m,Old_index_page:d,Old_about_page:u,Old_personal_page:h,Old_work_page:p,Old_contact_page:g,Old_nav_component:f}=t;return r||s("Design_about_page",!0),c||s("Design_contact_page",!0),n||s("Design_index_page",!0),m||s("Design_nav_component",!0),o||s("Design_projects_page",!0),i||s("Design_work_page",!0),u||s("Old_about_page",!0),g||s("Old_contact_page",!0),d||s("Old_index_page",!0),f||s("Old_nav_component",!0),h||s("Old_personal_page",!0),p||s("Old_work_page",!0),l.createElement(l.Fragment,null,l.createElement(t.h2,null,"Overview"),"\n",l.createElement(t.p,null,"This website was created to act as a resume for my skills and hobbies for anyone\nwho is interested. The website is the starting of a project that could become\na blog or a place to put my school and self studies. The hardest part of any\nproject is starting it and this my start."),"\n",l.createElement(t.h2,null,"Goals"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Act as a second resume"),"\n",l.createElement(t.li,null,"Look decent for a Full Stack standard (not UI/UX)"),"\n",l.createElement(t.li,null,"Show off completed school and personal projects"),"\n"),"\n",l.createElement(t.p,null,"I wanted to make something that was easily extendable, looked good and was easy to manage. It also\nhad to have a layout that was easy to read on mobile, tablet and desktop platforms.\nThe final goal was to make sure that it advertised my accomplishments and\nprojects that I have completed and am proud of as well as give a glimps of what\nI'm currently working on."),"\n",l.createElement(t.h2,null,"Technologies"),"\n",l.createElement(t.p,null,"The site was build with Gatsby",l.createElement("sup",null,"[",l.createElement(t.a,{href:"#gatsby"},"2"),"]")," because it allowed me to\nuse React to generate a static site. I really enjoyed using it and felt right at\nhome because of how heavily Gatsby uses React and it's component system. That's\nthe main reason why it was chosen over other solution's that are out on the market\ntoday (ex. Hugo)"),"\n",l.createElement(t.p,null,"Javascript was used instead of my usually choice of Typescript. This was mainly\nbecause this is my first project using Gatsby and I didn't find out there was a\nplugin that allowed me to compile the project with typescript. Overall I believe\nthis was a poor choice and regret it. Typescript is superior to Javascript in\nevery way and using React without types doesn't feel right. Proptypes do help\na little but they do not compare to the ability in typescript to quickly map\nout an interface and get a compile time exception about an incorrect type. Though\nthis was my first time using Proptypes in a actual project so I may not know all\nthe tips and tricks."),"\n",l.createElement(t.p,null,"To style I used SCSS and focused on using some parts of the BEM methodology."),"\n",l.createElement(t.h2,null,"Design/Development Process"),"\n",l.createElement(t.p,null,"This project has been on and off again for at least 1 year at this point.\nIn that time there have been many designs focusing on single paged layout's\nbut none of them were ever panned out. What really held me back we're my designs and\nplanning. This time I decided to take the time to just draw out some basic ideas\nas well as define a small sitemap that would cover all the sections of the site.\nAfter spending 30 minutes of drawing and thinking what content I wanted on each\npage I ended up with these drawings:"),"\n",l.createElement("div",{class:"grid grid--3"},l.createElement(n,{alt:"Initial design for home page"}),l.createElement(r,{alt:"Initial design for about page"}),l.createElement(o,{alt:"Initial design for projects page"}),l.createElement(i,{alt:"Initial design for work page"}),l.createElement(c,{alt:"Initial design for contact page"}),l.createElement(m,{alt:"Initial design for the nav component"})),"\n",l.createElement(t.p,null,"After quickly finishing my layouts I got to work and used this small color palette\nto color the screen:"),"\n",l.createElement("h4",null,"Old Primary Colors"),"\n",l.createElement("div",null,l.createElement("span",{class:"color--square old-primary-1"})),"\n",l.createElement("h4",null,"Old Accent Colors"),"\n",l.createElement("div",null,l.createElement("span",{class:"color--square old-accent-1"})),"\n",l.createElement("h4",null,"Old Shades"),"\n",l.createElement("div",null,l.createElement("span",{class:"color--square old-shade-1"}),l.createElement("span",{class:"color--square old-shade-2"})),"\n",l.createElement(t.p,null,"Using a simple palette allowed me to not spend much time on coloring the site so\nI was able to spend more time on styling the components and live functionalities\nlive the navigation bar. The final designs for the projects and index page look\nas such:"),"\n",l.createElement("div",{class:"grid grid--3"},l.createElement(d,{alt:"first vision of the home page"}),l.createElement(u,{alt:"first vision of the about page"}),l.createElement(h,{alt:"first vision of the projects page"}),l.createElement(p,{alt:"first vision of the work page"}),l.createElement(g,{alt:"first vision of the contact page"}),l.createElement(f,{alt:"first vision of the active nav component"})),"\n",l.createElement(t.p,null,"Now, to be franck, I thought this looked pretty good. Yeah there were some super\nbright colors and the accent color looked pretty bad but I thought I had done a\ngood job on it. Then I let other people see. So I changed it."),"\n",l.createElement(t.p,null,"The first part of the site that was changed is colors. After reading through\nrefactoring UI",l.createElement("sup",null,"[",l.createElement(t.a,{href:"#refactoringui"},"1"),"]")," blog post on how important color\nis in an application as well as how important it is to have different shades. This\nlead me to actually spend some time actually coming up with a good color palette.\nWith lots of colors to choose from, These are the colors and shades I came up with:"),"\n",l.createElement("h3",null,"Primary Color"),"\n",l.createElement("div",null,l.createElement("span",{class:"color--square primary-1"}),l.createElement("span",{class:"color--square primary-2"}),l.createElement("span",{class:"color--square primary-3"}),l.createElement("span",{class:"color--square primary-4"}),l.createElement("span",{class:"color--square primary-5"}),l.createElement("span",{class:"color--square primary-6"}),l.createElement("span",{class:"color--square primary-7"}),l.createElement("span",{class:"color--square primary-8"}),l.createElement("span",{class:"color--square primary-9"})),"\n",l.createElement("h3",null,"Accent Color"),"\n",l.createElement("div",null,l.createElement("span",{class:"color--square accent-1"}),l.createElement("span",{class:"color--square accent-2"}),l.createElement("span",{class:"color--square accent-3"}),l.createElement("span",{class:"color--square accent-4"}),l.createElement("span",{class:"color--square accent-5"}),l.createElement("span",{class:"color--square accent-6"}),l.createElement("span",{class:"color--square accent-7"}),l.createElement("span",{class:"color--square accent-8"}),l.createElement("span",{class:"color--square accent-9"})),"\n",l.createElement("h3",null,"Shades"),"\n",l.createElement("div",null,l.createElement("span",{class:"color--square shade-1"}),l.createElement("span",{class:"color--square shade-2"}),l.createElement("span",{class:"color--square shade-3"}),l.createElement("span",{class:"color--square shade-4"}),l.createElement("span",{class:"color--square shade-5"}),l.createElement("span",{class:"color--square shade-6"}),l.createElement("span",{class:"color--square shade-7"}),l.createElement("span",{class:"color--square shade-8"}),l.createElement("span",{class:"color--square shade-9"})),"\n",l.createElement(t.p,null,"Already this looks better then the older shades, not only do we have more selection\nto pick from but we can also give different colors to different components on the page.\nOnce the updated colors were picked I got what the site looks like today."),"\n",l.createElement(t.p,null,"I was also given feed back on how my project's looked to cramped and had to\nmuch content on the cards, so I updated them to have more white space and remove\nthe background image. I also decided to remove the filters so that the application\npicture could be shown off clearly."),"\n",l.createElement(t.h2,null,"Difficulties"),"\n",l.createElement(t.p,null,"There were no big difficulties that were faced during this project, on design\nand learning pains. There were a lot of mistake's I made initial because I\ndidn't know very well how to use Gatsby so I had to read the documentation and\nlook at helpful tutorials."),"\n",l.createElement(t.p,null,"The hardest part of this project was properly setting up the markdown to HTML\nconverter and properly setting up the filesystem so it pointed at all of my data\ninstead of the default pictures. Again all of these issues were solved as I learned\nthe platform more."),"\n",l.createElement(t.h2,null,"Project Status"),"\n",l.createElement(t.p,null,"Is a resume ever done? No, so this website is never done but that's ok.\nOverall the initial structure and design for the website is at a completed stage\nthat I am happy with. If I extend the site or my web design skills improve I may\nlook at updating the look."),"\n",l.createElement(t.h2,null,"What's Next"),"\n",l.createElement(t.p,null,"Expanding the content on the website would be my first goal for what's to come.\nA resume website doesn't add a lot to anyone's life, so turning it into a place\nto congregate my thoughts, projects, tutorials would be my first move at improving\nthis site."),"\n",l.createElement(t.p,null,"What's next could be boiled down to 2 points:"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Write blog content (in the form of notes and tutorials)"),"\n",l.createElement(t.li,null,"Small redesign to focus more on content instead of my resume"),"\n"),"\n",l.createElement(t.p,null,"Now is a better time then any as I will be back in school for 2 more years (as\nof writing this in 2019). There is no better time then right now to start."),"\n",l.createElement(t.h2,null,"Reflections"),"\n",l.createElement(t.p,null,"As I reflect on this project I think it already shows that the biggest hangup for\nthe project was design. Using a tool like Figma",l.createElement("sup",null,"[",l.createElement(t.a,{href:"#figma"},"6"),"]")," before\njumping straight into the coding would have allowed me to code this website once\nand not need to make multiple small changes to it over time."),"\n",l.createElement(t.p,null,"I'm also not happy about the way I sorted out my styles and I feel as though I\nmaybe repeating myself quite a bit in the style department. I think a way to\nimprove this is to look at some css framework as well as reworking how my pages\nare layed out."),"\n",l.createElement(t.p,null,"Although I may complain about how I was slowed down by my lack of design prototyping,\nI can say with confidence that I really like the look of my site. A lot of my\ndesign friends nit pick it but everyone else not in design say it looks great\nwhich is awesome. This really motivated to keep better tabs on my projects and\ndocument anything I create. I can't wait to add more content to my website :)"),"\n",l.createElement(t.h2,null,"References"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement("a",{href:"https://refactoringui.com/previews/building-your-color-palette/",rel:"noopener noreferrer",target:"_blank",id:"refactoringui"},"Refactoring UI Color Palette"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement("a",{href:"https://www.gatsbyjs.org",rel:"noopener noreferrer",target:"_blank",id:"gatsby"},"GatsbyJS: Blazing fast modern site generator for React"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement("a",{href:"https://material.io/components/cards/#specs",rel:"noopener noreferrer",target:"_blank",id:"material"},"Material Card Design"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement("a",{href:"https://www.figma.com",id:"figma",rel:"noopener noreferrer",target:"_blank"},"Figma: Design, protype, and gather feedback"),"\n"),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)};function s(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var i=n(8183),c=n(8032),m=n(1699),d=n(2460),u=n(6479),h=n(2359),p=n(6880),g=n(2536),f=n(2098),E=n(7992);function y(e){return e.charAt(0).toUpperCase()+e.slice(1)}const w=e=>{var t;let{data:n,children:r}=e;const o=n.mdx,s=n.allMdx;let w={};var v,b;null!=o&&null!==(t=o.frontmatter)&&void 0!==t&&t.images&&(null!==(v=null==o||null===(b=o.frontmatter)||void 0===b?void 0:b.images)&&void 0!==v?v:[]).forEach(((e,t)=>{var n;if(console.log(e),!e)return;let a,r="";if(null!=e&&null!==(n=e.childImageSharp)&&void 0!==n&&n.fluid){r=y(e.childImageSharp.fluid.originalName.split(".")[0]),a=t=>{let{alt:n,caption:a}=t;return l.createElement("figure",null,l.createElement(c.G,{image:e.childImageSharp.gatsbyImageData,alt:n}),a&&a.length>0?l.createElement("figcaption",null,a):null)}}else{let t=e.publicURL.split("/");r=y(t[t.length-1].split(".")[0]),a=t=>{let{alt:n,caption:a}=t;return l.createElement("figure",null,l.createElement("img",{className:"image--child",src:e.publicURL,alt:n}),a&&a.length>0?l.createElement("figcaption",null,a):null)}}w[r]=a}));return l.createElement(d.Z,null,l.createElement(i.Z,{title:o.frontmatter.title,description:o.frontmatter.description},l.createElement("script",{defer:!0,src:"/scripts/toc.js"})),l.createElement(m.Z,{title:o.frontmatter.title,subTitle:o.frontmatter.subTitle,tags:o.frontmatter.tags,date:o.frontmatter.publishedDate,className:"post"}),l.createElement(E.Gn,null,l.createElement(E.S1,null,l.createElement(u.Z,null,l.createElement(a.Zo,{components:w},r)),l.createElement(f.Z,{title:"Continue Reading More...",className:"section--tm"},l.createElement(g.U,null,s.nodes.map((e=>l.createElement(p.Z,{to:""+e.fields.slug,key:e.fields.slug,title:e.frontmatter.title,description:e.frontmatter.subTitle})))))),l.createElement(E.O6,null,l.createElement(h.Z,{contents:o.tableOfContents.items}))))};function v(e){return l.createElement(w,e,l.createElement(o,e))}},2359:function(e,t,n){"use strict";var a=n(7294),l=n(5697),r=n.n(l);const o=e=>{let{contents:t}=e;return(0,a.useEffect)((()=>{document.querySelector(".article").querySelectorAll("h2").forEach(((e,n)=>{try{let a=t[n].url.slice(1);e.id=a}catch(a){console.log(a)}}))}),[t]),a.createElement("ol",{className:"toc"},t.map((e=>a.createElement("li",{key:e.url,className:"toc__item"},a.createElement("a",{className:"toc__link",href:e.url},e.title)))))};o.prototype={contents:r().arrayOf(r().shape({url:r().string,title:r().string}))},t.Z=o},1699:function(e,t,n){"use strict";var a=n(7294),l=n(5697),r=n.n(l),o=n(1883),s=n(9373),i=n(5684),c=n.n(i);const m=e=>{let{title:t,className:n,titleIcon:l,subTitle:r,tags:i,readMoreLink:m,readMoreText:d,date:u,children:h}=e;return a.createElement("section",{className:"hero "+(null!=n?n:"")},a.createElement("div",{className:"hero--container common--max-width"},h?a.createElement("div",{className:"hero--z-index hero--children",style:{width:270}},h):null,a.createElement("div",{className:(h?"":"hero--p0")+" hero--z-index hero--content"},a.createElement("h1",{className:"hero__title"},l,t),a.createElement("p",{className:"hero__description"},r),a.createElement("div",{className:"hero--flex"},a.createElement("ul",{className:"hero__list"},i.map((e=>a.createElement("li",{key:e,className:"hero__list__item"},a.createElement(s.Z,{text:e}))))),m&&d?a.createElement(o.Link,{className:"hero__link",to:m},d):null,u?a.createElement("p",{className:"hero__date"},"Published: ",u):null))),a.createElement("div",{className:"hero__curve"},a.createElement(c(),null)))};m.prototype={title:r().string.isRequired,className:r().string,titleIcon:r().node,subTitle:r().string.isRequired,tags:r().arrayOf(r().string).isRequired,readMoreLink:r().string,readMoreText:r().string,date:r().string.isRequired,children:r().node},t.Z=m},6479:function(e,t,n){"use strict";var a=n(7294),l=n(5697);const r=e=>{let{children:t}=e;return a.createElement("article",{className:"article"},t)};r.prototype={children:n.n(l)().node},t.Z=r},7992:function(e,t,n){"use strict";n.d(t,{Gn:function(){return i},M9:function(){return c},O6:function(){return d},S1:function(){return m}});var a=n(7294),l=n(5697),r=n.n(l);const o=e=>{let{children:t,className:n}=e;return a.createElement("div",{className:"box "+(n||null)},t)};o.prototype={className:r().string,children:r().node.isRequired};var s=o;const i=e=>{let{children:t,className:n}=e;return a.createElement("div",{className:"common common--max-width "+(n||"")},t)},c=e=>{let{children:t}=e;return a.createElement("div",{className:"common__center common__center--max-width"},t)},m=e=>{let{children:t}=e;return a.createElement("div",{className:"common__right common__right--max-width"},t)},d=e=>{let{children:t}=e;return a.createElement("aside",{className:"common__left"},a.createElement(s,{className:"common__left--sticky"},t))};i.prototype={className:r().string,children:r().node.isRequired},m.prototype={children:r().node.isRequired},d.prototype={children:r().node.isRequired},c.prototype={children:r().node.isRequired}},6880:function(e,t,n){"use strict";var a=n(7294),l=n(5697),r=n.n(l),o=n(1883),s=n(4458),i=n(6466);const c=e=>{let{to:t,title:n,description:l}=e;return a.createElement("div",{className:"la"},a.createElement(o.Link,{to:t},a.createElement(s.Z,{variant:"h5"},n)),a.createElement(i.Z,null,l))};c.prototype={to:r().string.isRequired,title:r().string.isRequired,description:r().string},t.Z=c},2536:function(e,t,n){"use strict";n.d(t,{U:function(){return l},c:function(){return r}});var a=n(7294);const l=e=>{let{children:t,className:n}=e;return a.createElement("ul",{className:"list list--h "+(n||"")},t)},r=e=>{let{children:t,className:n}=e;return a.createElement("ul",{className:"list list--v "+(n||"")},t)}},6466:function(e,t,n){"use strict";var a=n(7294),l=n(5697);const r=e=>{let{children:t}=e;return a.createElement("p",{className:"pg"},t)};r.prototype={children:n.n(l)().string.isRequired},t.Z=r},2098:function(e,t,n){"use strict";var a=n(7294),l=n(5697),r=n.n(l),o=n(4458);const s=e=>{let{title:t,varient:n,children:l,className:r}=e;return a.createElement(a.Fragment,null,a.createElement("section",{className:"section "+(null!=r?r:"")},a.createElement(o.Z,{className:"mb",varient:null!=n?n:"h2"},t),l))};s.prototype={children:r().node,title:r().string.isRequired,varient:r().string,className:r().string},t.Z=s},9373:function(e,t,n){"use strict";var a=n(7294);t.Z=e=>{let{text:t,dropshadow:n}=e;return a.createElement("div",{className:"tag "+(n?"tag--shadow":"")},t)}},5684:function(e,t,n){var a=n(7294);function l(e){return a.createElement("svg",e,a.createElement("path",{d:"M8102,634.694c190.061-82.42,408.646-106.963,952,0s969.466-43.7,969.466-43.7V548.561H8102Z",transform:"translate(-8101.5 -548.061)",fill:"#475de6"}))}l.defaultProps={preserveAspectRatio:"none",viewBox:"0 0 1920 125"},e.exports=l,l.default=l},1151:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||o:r(e),a.createElement(l.Provider,{value:s},t)}}}]);
//# sourceMappingURL=component---src-templates-blog-js-content-file-path-src-data-blog-2017-09-05-website-mdx-a1ceeca0f0072da040fd.js.map