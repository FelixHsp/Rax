import { createElement, useState, useRef, useImperativeHandle, forwardRef } from 'rax';
import Text from 'rax-text';
import View from 'rax-view';
// 子组件
const Child = (props, ref) => {
  const [num, setNum] = useState(0);
  const addNum = () => {
    setNum(num + 1);
  };
  useImperativeHandle(ref, () => ({
    add: () => {
      addNum();
    }
  }));

  return (
    <View>
      <Text>
        {num}
      </Text>
    </View>
  );
};
Child = forwardRef(Child);
// 父组件
const Parents = () => {
  const ChildRef = useRef(null);

  return (
    <View>
      <Text
        onClick={() => {
          ChildRef.current && ChildRef.current.add();
        }}>
        add
      </Text>
      <Child ref={ChildRef}/>
    </View>
  );
}

export default Parents;