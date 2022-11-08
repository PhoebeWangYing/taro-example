/*
 * @Author: wangying51 wangying51@baidu.com
 * @Date: 2022-11-08 17:04:19
 * @LastEditors: wangying51 wangying51@baidu.com
 * @LastEditTime: 2022-11-08 17:15:49
 * @FilePath: /taro-example/src/pages/index/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Component1 from '../../components/component1';
import Component2 from '../../components/component2';
import styles from './index.less';

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className={styles.index}>
        <Text>Index Page</Text>
        <Component1 />
        <Component2 />
      </View>
    )
  }
}
