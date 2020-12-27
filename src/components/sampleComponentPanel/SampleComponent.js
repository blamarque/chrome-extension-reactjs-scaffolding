import React from 'react';
import styles from './SampleComponent.module.scss'

const PanelTag = ({text}) => {

    return (

                <div className={styles.panelTagMain}>
                    <h3>
                        Extension Opens
                    </h3>

                    <div>
                        {text}
                    </div>
                </div>
    )
}

export default PanelTag;