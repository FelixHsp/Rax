import { createElement, useRef, useEffect, useState, useLayoutEffect } from 'rax';
import View from 'rax-view';

import animate from 'universal-animation';
import findDOMNode from 'rax-find-dom-node';
import { isWeex } from 'universal-env';

import './index.css';
let dom: any;
isWeex && (dom = require('@weex-module/dom'));

const Tag: Rax.FC = () => {
    const tagRef = useRef(null);
    const scaleRef = useRef(0.5);
    function blockAnimation() {
        animate(
            {
                props: [
                    {
                        element: findDOMNode(tagRef.current),
                        property: 'transform.scale',
                        easing: 'easeOutSine',
                        start: scaleRef.current === 0.5 ? 0.5 : 1.0,
                        end: scaleRef.current === 0.5 ? 1.0 : 0.5,
                        duration: 1000
                    },
                ],
            },
            () => {
                scaleRef.current = scaleRef.current === 0.5 ? 1.0 : 0.5;
                blockAnimation();
            },
        );
    }
    useEffect(() => {
        blockAnimation();
    }, [tagRef.current]);
    return (
        <View className='tag' ref={tagRef}></View>
    );
}

const DomTest: Rax.FC = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        setList([1, 2, 3, 4, 5]);
    }, []);
    return (
        <View className='container'>
            {
                list.map(
                    (item, index) => {
                        return <Tag key={`tag_${index}`}></Tag>
                    }
                )
            }
        </View>
    );
}

export default DomTest;