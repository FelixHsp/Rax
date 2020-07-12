import { createElement, useState, Fragment } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import TextInput from 'rax-textinput';
import { EventObject } from 'rax-textinput/lib/types';

import './index.css';

function SearchInput() {
  const [value, setValue] = useState<string>('');
  const [defaultValue, setDefaultValue] = useState<string>('');
  const [inputKey, setInputKey] = useState<number>(0);

  // 输入框输入事件
  const onInput = (value) => {
    setValue(value);

    // 发起请求
    // ...
  }

  // 设置输入框的值（非输入事件）
  const setInputValue = (text: string) => {
    // 重新渲染输入框，并将要设的值赋给defaultValue
    setTimeout(() => {
      setInputKey(inputKey + 1);
      setDefaultValue(text);
    }, 20);

    // 触发输入事件
    onInput(text);
  }

  return (
    <Fragment>
      <View className="container">
        <TextInput className="input"
                   key={inputKey}
                   defaultValue={defaultValue}
                   onInput={(e: EventObject) => onInput(e.value)}/>
        {
          value
          && (
            <Text onClick={() => setInputValue('')}>
              清空
            </Text>
          )
        }
      </View>
      <Text>
        value: {value}
      </Text>
    </Fragment>
  );
}

export default SearchInput;