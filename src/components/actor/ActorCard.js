import React from 'react'

const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {
    return (
      <div>
        <div>
          <img src={image} alt="actor" />
        </div>
        <h1>
          {name} {gender ? `(${gender})` : null}
        </h1>
        <p>{country ? `Comes from ${country}` : 'Country Not Known :('}</p>
        {birthday ? <p>Born on {birthday}</p> : null}
        <p>{deathday ? `Died on ${deathday}` : 'Alive'}</p>
      </div>
    );
  };

export default ActorCard
