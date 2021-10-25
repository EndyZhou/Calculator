import { ITouchEvent, View } from "@tarojs/components";
import { useEffect, useState } from "react";
import {
  getSuffixExpression,
  isOperatorOrDecimal,
  removeEndDecimal,
} from "../../shared/utils";
import "./style.scss";
export const Calculator = () => {
  const [lastOperation, setLastOperation] = useState<string[]>([]);
  const [currentNumber, setCurrentNumber] = useState("");
  const [isPressedEqual, setIsPressedEqual] = useState(false);
  const [result, setResult] = useState(0);
  const [decimalFlag, setDecimalFlag] = useState(false);
  const onTap = (e: ITouchEvent) => {
    // vibrateShort();
    handleButtonClick(e.target.dataset.operation);
  };
  useEffect(() => {
    if (!isOperatorOrDecimal(currentNumber)) {
      const res = getSuffixExpression(currentNumber);
      setResult(res);
    }
  }, [currentNumber]);

  const handleButtonClick = (buttonValue) => {
    switch (buttonValue) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9": {
        const newNumber =
          isPressedEqual || currentNumber === "0"
            ? buttonValue
            : currentNumber + buttonValue;
        setCurrentNumber(newNumber);
        setIsPressedEqual(false);
        break;
      }
      case "*":
      case "+":
      case "-":
      case "/":
      case ")":
      case "(": {
        setIsPressedEqual(false);
        setDecimalFlag(false);
        setCurrentNumber(removeEndDecimal(currentNumber) + buttonValue);
        break;
      }
      case "AC":
        setIsPressedEqual(false);
        setCurrentNumber("");
        setResult(0);
        break;
      case "=":
        setLastOperation([
          ...lastOperation,
          `${removeEndDecimal(currentNumber)} = ${result}`,
        ]);
        setIsPressedEqual(true);
        setCurrentNumber(result.toString());
        break;
      case ".":
        if (!decimalFlag) {
          setCurrentNumber(currentNumber + ".");
          setDecimalFlag(true);
        }
        break;
      case "DELETE":
        const newNumber =
          currentNumber.length > 1
            ? currentNumber.slice(0, currentNumber.length - 1)
            : "0";
        setCurrentNumber(newNumber);
        break;
      default:
        break;
    }
  };
  return (
    <View className="main-wrapper">
      <View className={`result ${isPressedEqual && "focusEqual"}`}>
        <View className="history">
          {lastOperation.map((last) => (
            <View>{last}</View>
          ))}
        </View>
        <View className="process">{currentNumber}</View>
        <View className="result-text">= {result}</View>
      </View>
      <View onClick={onTap}>
        <View className="numbers">
          <View
            className="element"
            data-operation="AC"
            style="background-color: #d3d2d1; color: #1a1919;"
          >
            AC
          </View>
          <View
            className="element"
            data-operation="DELETE"
            style="background-color: #d3d2d1; color: #1a1919;"
          >
            DEL
          </View>
          <View className="element" data-operation=".">
            .
          </View>
          <View
            data-operation="/"
            className="element"
            style="background-color: #f69231; color: #fff;"
          >
            /
          </View>
        </View>
        <View className="numbers">
          <View className="element" data-operation="7">
            7
          </View>
          <View className="element" data-operation="8">
            8
          </View>
          <View className="element" data-operation="9">
            9
          </View>
          <View
            data-operation="*"
            className="element"
            style="background-color: #f69231; color: #fff;"
          >
            *
          </View>
        </View>
        <View className="numbers">
          <View className="element" data-operation="4">
            4
          </View>
          <View className="element" data-operation="5">
            5
          </View>
          <View className="element" data-operation="6">
            6
          </View>
          <View
            data-operation="-"
            className="element"
            style="background-color: #f69231; color: #fff;"
          >
            -
          </View>
        </View>
        <View className="numbers">
          <View className="element" data-operation="1">
            1
          </View>
          <View className="element" data-operation="2">
            2
          </View>
          <View className="element" data-operation="3">
            3
          </View>
          <View
            data-operation="+"
            className="element"
            style="background-color: #f69231; color: #fff;"
          >
            +
          </View>
        </View>
        <View className="numbers">
          <View className="element wide" data-operation="0">
            0
          </View>
          <View
            data-operation="="
            className="element wide"
            style="background-color: #f69231; color: #fff;"
          >
            =
          </View>
        </View>
      </View>
    </View>
  );
};

export default Calculator;