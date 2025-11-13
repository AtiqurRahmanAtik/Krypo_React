import React from 'react';

const SingleWhat = ({item}) => {

    const  {img, title, describe}= item;


    return (
        <div>
                <div  className="card bg-base-100 lg:w-72 shadow-sm">
  <figure>
    <img
    className='p-4 '
      src={img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title ">{title}</h2>
    <p>{describe}</p>

    
  </div>
</div>
        </div>
    );
};

export default SingleWhat;