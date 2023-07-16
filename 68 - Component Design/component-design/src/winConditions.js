import { sum } from "./utils";

function lessThan4(dice) {
    return (sum(dice) < 4);
  };
  

  function allSameValue(dice) {
    return dice.every(v => v === dice[0]);
  };

  export { lessThan4, allSameValue};
