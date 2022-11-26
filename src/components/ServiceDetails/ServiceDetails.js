import React from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css';

function ServiceDetails(props) {
  const params = useParams();
  return (
    <main className='serviceDetails'>

      <div className='detail__with-image'>

      </div>

      <div className='detail__full'>

      </div>

    </main>
  );
}

export default ServiceDetails;