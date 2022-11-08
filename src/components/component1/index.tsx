import {memo, FC} from 'react';
import {View} from '@tarojs/components';
import cx from 'classnames';
import styles from './index.less';

const component1: FC = props => {
    const {} = props;


    return (
        <View className={cx(styles.comp1, 'c-font-big')}>
            component1
        </View>
    );
};

component1.defaultProps = {
};

export default memo(component1);
