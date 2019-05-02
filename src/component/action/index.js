
import React from 'react';
import View from './view';
import Model from './model';

export default function(props) {
    return  (
        <Model  {...props}>
            {prop => <View {...prop}  {...props}  />}
        </Model>
    );
}
