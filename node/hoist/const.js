console.log(helloConst); // ReferenceError: TDZ
helloFunction(); // ReferenceError: TDZ

const helloConst = 'hello!';

const helloFunction = () => {
  console.log('hello!');
};
