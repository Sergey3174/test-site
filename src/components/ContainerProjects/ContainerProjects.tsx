import SliderContainer from '../SliderContainer/SliderContainer'
import './ContainerProjects.css'

function ContainerProjects() {

  return (
    <div className='container-projects'>
        <div className='container-projects-title'>
            <p className='container-projects-title-text'>Создаём и поддерживаем диджитал-решения, которые работают</p>
        </div>
        <SliderContainer />
    </div>
  )
}

export default ContainerProjects