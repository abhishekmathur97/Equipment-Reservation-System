// RequestList.js
import React from 'react';
import Request from './request';

const RequestList = ({ requests }) => {
  return (
    <div>
      <h2>Request List</h2>
      {requests.map(request => (
        <Request key={request.id} request={request} />
      ))}
    </div>
  );
};

// Request.js
import React from 'react';

const Request = ({ request }) => {
  const handleAccept = () => {
    // Handle accept logic here
    console.log(`Request ${request.id} accepted`);
  };

  const handleDecline = () => {
    // Handle decline logic here
    console.log(`Request ${request.id} declined`);
  };

  return (
    <div>
      <h3>Request {request.id}</h3>
      <p>{request.description}</p>
      <button onClick={handleAccept}>Accept</button>
      <button onClick={handleDecline}>Decline</button>
    </div>
  );
};

export default request;

