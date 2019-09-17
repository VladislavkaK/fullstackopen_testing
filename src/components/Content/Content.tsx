import * as React from 'react';
import { Part } from '../../components';

const Content = ({
    part
}) => {
    return (
        <div className="content" >
            {part.map((data, index) => {
                return (
                    <React.Fragment key={index} >
                        <Part part={data.name} exercise={data.exercises} />
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default Content;
