// // import React from 'react';

// interface Project {
//     title: string;
//     img?: string;
//     desc: string;
//     pageLink?: string;
//     gitLink?: string;
// }

// function renderProjectCard(project: Project) {
//     const title = project.title;
//     const img = project.img;
//     const desc = project.desc;
//     const pageLink = project.pageLink;
//     const gitLink = project.gitLink;
//     return (
//         <div className="card">
//             <div>
//                 <h3>{title}</h3>
//                 {img && <img src={img} alt={title} />}
//             </div>
//             <section className="content">
//                 <p>{desc}</p>
//                 {pageLink && <a href={pageLink} target="_blank" rel="noopener noreferrer" style={{ lineHeight: '1' }}>View Project</a>}
//                 {gitLink && <a href={gitLink} target="_blank" rel="noopener noreferrer" style={{ lineHeight: '1' }}>View Code</a>}
//             </section>
//         </div>
//     );
// }

// export { renderProjectCard };