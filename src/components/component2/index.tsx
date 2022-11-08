import {memo, FC} from 'react';
import {View} from '@tarojs/components';
import styles from './index.less';

const component2: FC = props => {
    const {} = props;


    return (
        <View className={styles.comp2}>
            component2
        </View>
    );
};

component2.defaultProps = {
};

export default memo(component2);
