import SliderContainer from '../SliderContainer/SliderContainer'
import './ContainerProjects.css'

function ContainerProjects() {

  return (
    <div className='container-projects'>
        <div className='container-projects-title'>
            <h4 className='container-projects-title-text'>Создаём и поддерживаем диджитал-решения, которые работают</h4>
        </div>
        <SliderContainer />
    </div>
  )
}

export default ContainerProjects