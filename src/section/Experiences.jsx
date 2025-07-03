import { experiences } from "../constants"
import { Timeline } from "../components/Timeline"
const Experiences = () => {
  return (
    <div >
        <Timeline data={experiences} />
    </div>
  )
}

export default Experiences