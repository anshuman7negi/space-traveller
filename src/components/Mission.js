import PropTypes from 'prop-types';
import classNames from 'classnames';
import MissionButton from './MissionButton';

const Mission = ({
  id, missionName, description, highlights, reserved,
}) => {
  const rows = classNames('border pl-2', {
    'bg-gray-100': highlights,
  });
  return (
    <>
      <tr className={rows}>
        <td className="border pl-5 pt-5 align-top">{ missionName }</td>
        <td className="border p-5 text-justify">{ description }</td>
        <td className="border pl-5">
          {reserved ? (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-500 text-white">
              Active Member
            </span>
          ) : (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-gray-500 text-white">
              NOT A MEMBER
            </span>
          )}
        </td>
        <td className="border pl-5" aria-hidden="true">
          <MissionButton id={id} reserved={reserved} />
        </td>
      </tr>
    </>
  );
};

export default Mission;

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  highlights: PropTypes.bool.isRequired,
  reserved: PropTypes.bool.isRequired,
};
