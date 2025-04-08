import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://redesigned-lamp-q7vrxjj9gjwfg95-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Workouts</h1>
        <ul className="list-group">
          {workouts.map(workout => (
            <li key={workout.id} className="list-group-item">
              <h5>{workout.name}</h5>
              <p>{workout.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Workouts;
