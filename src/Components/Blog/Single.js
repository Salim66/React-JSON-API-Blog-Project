
import React from 'react';

const Single = (data) => {
    return (
        <div className="col-md-3">
            <div className="card my-5">
                <div className="card-body">
                    <h2>{data.blog.title.substring(0, 20) + "...." }</h2>
                    <p>{data.blog.body.substring(0, 50) + "...." }</p>
                </div>
            </div>
        </div>
    )
};

export default Single;
