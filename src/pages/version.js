import React from 'react';
import data from 'public/version.json';

const Page = () => {
  return (
    <div>
      {JSON.stringify(data, null, '\t')}  
    </div>
  );
};

export default Page;