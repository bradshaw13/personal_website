import * as React from 'react';
import { Link } from 'react-router-dom';

function CityInfo(props) {
  const {info} = props;
  const displayName = `${info.city}, ${info.state}`;

  return (
    <div>
      <div>
        {displayName} |{' '}
        {/* 
        <a
          target="_new"
          href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}
        >
          Wikipedia
        </a>
        */}
        <Link to={'/recipes/'+info.displayName} className='menu-bars'>
            recipe
        </Link>
        
      </div>
      <img width={240} src={info.image} alt={info.displayName}/>
    </div>
  );
}

export default React.memo(CityInfo);
