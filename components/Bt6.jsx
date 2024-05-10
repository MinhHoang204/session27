import React from 'react';

function FormatName(props) {
  const formatName = (user) => {
    return `${user.lastName} ${user.firstName}`;
  };

  return (
    <div>
      <p>Full name: {formatName(props.user)}</p>
    </div>
  );
}

export default FormatName;