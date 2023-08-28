import { useSelector } from 'react-redux';
import Mission from '../components/pages/Mission';

const Mission = () => {
    return(
      <div className="px-[5rem] py-[2rem] font-manrope">
        <table>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            Happy coding!
          </tbody>
        </table>
      </div>
    )
}