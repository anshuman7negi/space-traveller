import React from 'react';
import { useSelector } from 'react-redux';

const ReserveRocket = () => {
  const rocketData = useSelector((state) => state.rockets.rockets);

  return (
    <div className="rocketDetails">
      <h3>My Rockets</h3>
      <table>
        <tbody>
          {rocketData.map((item) => (
            item.reserved && (
              <tr key={item.id}>
                <td>{item.name}</td>
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReserveRocket;
