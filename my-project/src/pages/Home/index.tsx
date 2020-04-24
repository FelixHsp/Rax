import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import './index.css';

import Logo from '../../components/Logo';
import Three from '../../components/Three';

export default function Home() {
    return (
        <View className="home">
            <Logo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" />
            <Text className="title">Three.js Demo</Text>
            <Three />
        </View>
    );
}
