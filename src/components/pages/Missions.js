import { useSelector } from 'react-redux';
import Mission from '../Mission';

const Missions = () => {
  const { missions, isLoading } = useSelector((store) => store.missions);

  return (
    <div className="px-[5rem] py-[2rem] font-manrope">
      {isLoading ? (
        <div> Loading...</div>
      ) : (
        <table className="border text-left">
          <thead className="h-16">
            <tr>
              <th className="border pl-5 w-1/6">Mission</th>
              <th className="border pl-5 w-3/6">Description</th>
              <th className="border pl-5 w-1/6">Status</th>
              <th className="border pl-5 w-1/6" aria-hidden="true" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {missions.map((mission, i) => {
                  const data = {
                    id: mission.mission_id,
                    missionName: mission.mission_name,
                    description: mission.description,
                    reserved: mission.reserved,
                  };
                  return (
                    <Mission
                      key={data.id}
                      id={data.id}
                      missionName={data.missionName}
                      description={data.description}
                      highlights={i % 2 === 1}
                      reserved={data.reserved}
                    />
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Missions;
