import { createElement, useState, Fragment } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import DebounceTextInput from 'debounce-text-input';
import { EventObject } from 'rax-textinput/lib/types';

import './index.css';
function SearchInput() {
  const [value, setValue] = useState<string>('');

  const onInput = (text: string) => {
    setValue(text);
    
    // 网络请求
    // ...
  }

  return (
    <Fragment>
      <View className="container">
        <DebounceTextInput className="input"
                           value={value}
                           debounceInterval={600}
                           onInput={(e: EventObject) => onInput(e.value)}/>
        {
          value
          && (
            <Text onClick={() => onInput('')}>
              清空
            </Text>
          )
        }
      </View>
      <Text>
        debounceInterval: 600
      </Text>
      <Text>
        value: {value}
      </Text>
      <Text onClick={() => onInput('felix')}>
        set: felix
      </Text>
    </Fragment>
  );
}

export default SearchInput;