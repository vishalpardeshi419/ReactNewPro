import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handelChange, lable, ...otherProps}) => (
    <div className="group">
        <input className='form-input' onChange={ handelChange} {...otherProps} />
        {
            lable ?
            (<lable className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} >
                {lable}
            </lable>)
            : null
        }   
    </div>
);

export default FormInput;