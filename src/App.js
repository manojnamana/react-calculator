import './App.css'
import React, { useState } from 'react';


const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  const [operation, setOperation] = useState('');

  const handleNumber = (number) => {
    setCurrentNumber(currentNumber + number);
  };

  const handleOperation = (op) => {
    if (currentNumber === '') return;
    setOperation(op);
    setLastNumber(currentNumber);
    setCurrentNumber('');
  };

  const clear = () => {
    setCurrentNumber('');
    setLastNumber('');
    setOperation('');
  };

  const getResult = () => {
    if (currentNumber === '' || lastNumber === '') return;
    
    let result;
    switch (operation) {
      case '+':
        result = parseFloat(lastNumber) + parseFloat(currentNumber);
        break;
      case '-':
        result = parseFloat(lastNumber) - parseFloat(currentNumber);
        break;
      case '*':
        result = parseFloat(lastNumber) * parseFloat(currentNumber);
        break;
      case '/':
        result = parseFloat(lastNumber) / parseFloat(currentNumber);
        break;
      default:
        return;
    }
    setCurrentNumber(result.toString());
    setLastNumber('');
    setOperation('');
  };

  return (

      <div className="w-80 h-100 rounded-lg bg-white p-6 shadow-lg mt-40">
        <div className="mb-4  flex h-24 flex-col items-end justify-end rounded-lg bg-gray-50 p-4 overflow-x-hidden" >
          <div className="text-lg text-gray-500">
            {lastNumber} {operation}
          </div>
          <div className="text-lg text-gray-900 ">
            {currentNumber || '0'}
          </div>
        </div>

        <div className="grid gap-2 ">
          <div className="grid grid-cols-4 gap-2">
            <button onClick={() => clear()} className="rounded-lg bg-red-500 p-4 text-xl text-white hover:bg-red-600">
              C
            </button>
            <button onClick={() => handleOperation('/')} className="rounded-lg bg-blue-600 p-4 text-xl text-white hover:bg-blue-700">
              /
            </button>
            <button onClick={() => handleOperation('*')} className="rounded-lg bg-blue-600 p-4 text-xl text-white hover:bg-blue-700">
              ×
            </button>
            <button onClick={() => handleOperation('-')} className="rounded-lg bg-blue-600 p-4 text-xl text-white hover:bg-blue-700">
              -
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <button onClick={() => handleNumber('7')} className="rounded-lg bg-blue-600 p-4 text-xl text-white hover:bg-blue-700">
              7
            </button>
            <button onClick={() => handleNumber('8')} className="rounded-lg bg-blue-600 p-4 text-xl text-white hover:bg-blue-700">
              8
            </button>
            <button onClick={() => handleNumber('9')} className="rounded-lg bg-blue-600 p-4 text-xl text-white hover:bg-blue-700">
              9
            </button>
            <button onClick={() => handleOperation('+')} className="rounded-lg bg-blue-600 p-4 text-xl text-white hover:bg-blue-700">
              +
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <button onClick={() => handleNumber('4')} className="rounded-lg bg-blue-600 p-4 text-xl text-white hover:bg-blue-700">
              4
            </button>
            <button onClick={() => handleNumber('5')} className="rounded-lg bg-blue-600 p-4 text-xl text-white hover:bg-blue-700">
              5
            </button>
            <button onClick={() => handleNumber('6')} className="rounded-lg bg-blue-600 p-4 text-xl text-white hover:bg-blue-700">
              6
            </button>
            <button onClick={() => getResult()} className="row-span-2 rounded-lg bg-green-500 p-4 text-xl text-white hover:bg-green-600">
              =
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <button onClick={() => handleNumber('1')} className="rounded-lg bg-blue-600 p-4 text-xl text-white hover:bg-blue-700">
              1
            </button>
            <button onClick={() => handleNumber('2')} className="rounded-lg bg-blue-600 p-4 text-xl text-white hover:bg-blue-700">
              2
            </button>
            <button onClick={() => handleNumber('3')} className="rounded-lg bg-blue-600 p-4 text-xl text-white hover:bg-blue-700">
              3
            </button>
            <button onClick={() => handleNumber('0')} className="rounded-lg bg-blue-600 p-4 text-xl text-white hover:bg-blue-700">
              0
            </button>
          </div>
        </div>

        <div className="mt-4 text-center text-red-500 font-bold">
          Calc by Manoj
        </div>
      </div>

  );
};

export default Calculator;