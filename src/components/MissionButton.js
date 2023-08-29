import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionSlice';

const MissionButton = ({ id, reserved }) => {
  const dispatch = useDispatch();

  const click = (id) => {
    if (reserved) dispatch(joinMission(id));
    dispatch(leaveMission(id));
  };

  return (
    <button
      type="button"
      className={`${
        reserved
          ? 'text-blue-500 bg-transparent cursor-pointer mt-3 rounded-full px-[1.2rem] py-2 font-medium outline outline-red-500'
          : 'text-gray-500 bg-transparent cursor-pointer mt-3 rounded px-[1.2rem] py-2 font-medium outline outline-gray-400'
      }`}
      onClick={() => click(id)}
    >
      {reserved ? 'Leave missions' : 'Join missions'}
    </button>
  );
};

MissionButton.propTypes = {
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionButton;
