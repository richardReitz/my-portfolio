import { FiGithub } from 'react-icons/fi';
import './styles.css';

export default function ProjectCard({ project, onClick }) {
    return (
        <div className='project-detail-view' onClick={() => onClick?.()}>
            {project.video ?
                <video controls>
                    <source src={project.video} type="video/mp4" />
                    Seu navegador não suporta vídeo.
                </video>
            :
                <img src={project.image} alt={project.name} />
            }
            <div>
                <p id='card-title'>Descrição</p>
                <p id='description'>{project.description}</p>
            </div>

            <div>
                <div>
                    <div className='project-stacks'>
                        <p id='card-title'>Stack</p>
                        {project.stack.map((item) =>
                            <span key={item}>{item}</span>
                        )}
                    </div>
                    <div>
                        <p id='card-title'>Links</p>
                        <div className='link-view'>
                            {project.repo.length ? project.repo.map((item) => 
                                <a key={item.name} href={item.link}>
                                    <FiGithub />
                                    {item.name}
                                </a>
                            ) : 
                                <span>Em breve nas lojas</span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
