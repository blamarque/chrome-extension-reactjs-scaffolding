import React from 'react';

import styles from './App.module.css'

const App = (props) =>{

    return (
        <div className={styles.appContainer}>
        {
            props.children
        }
    </div>
    
    )
}

export default App;
