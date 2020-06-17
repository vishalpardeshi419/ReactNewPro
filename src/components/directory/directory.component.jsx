import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections : [{
                title : 'Hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1
            },
            {
                title : 'Jacket',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 2
            },
            {
                title : 'Sneakers',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 3
            },
            {
                title : 'TShirt',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                size : 'large',
                id: 4
            },
            {
                title : 'Shoes',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 5
            }
        ]
    };
}

render() {
    return (
        <div className='directory-menu'>
             {this.state.sections.map(({title, imageUrl, id , size}) =>  (
                 <MenuItem key={id} title={title} imageUrl={imageUrl} /> 
             ))}   
        </div>
    )}
}

export default Directory;