import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { cancelRocket, reserveRocket, rocketData } from '../../redux/rocket/rocketSlice';
import '../../style/Rocket.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets, isLoading, isError } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(rocketData());
    }
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>Error fetching rocket data.</p>;
  } else {
    content = (
      <div className="RocketList">
        {rockets.map((rocket) => (
          <div key={rocket.id} className="RocketItem">
            <img src={rocket.flickr_images[0]} alt={rocket.name} />
            <div className="RocketDetails">
              <h3>{rocket.name}</h3>
              <p>
                {rocket.reserved && <span className="reserved">Reserved </span>}
                {rocket.description}
              </p>
              {
                rocket.reserved ? (<button type="button" onClick={() => dispatch(cancelRocket(rocket.id))}>cancel Rocket</button>)
                  : (<button type="button" onClick={() => dispatch(reserveRocket(rocket.id))}>Reserve Rocket</button>)
              }
            </div>
          </div>
        ))}
      </div>
    );
  }

  return <div className="RocketContainer">{content}</div>;
};

export default Rockets;
