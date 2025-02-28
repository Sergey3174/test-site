import ContainerProjects from '../ContainerProjects/ContainerProjects'
import './MainProjects.css'

interface MainProjectsProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const MainProjects: React.FC<MainProjectsProps> = ({ onClick }) => {

  return (
    <div className='main-projects-container' onClick={onClick}>
        <h1 className='main-projects-container-title'>Разработка цифровых решений</h1>
        <ContainerProjects />
    </div>
  )
}

export default MainProjects