export default function Component({ buttonElem, propCount }) {

  const count = 0;
  const propCountDoubled = 2;
  
  return `
    State: ${count}
    Prop: ${propCount}
    Prop Doubled: ${propCountDoubled}
  `
}