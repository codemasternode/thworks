# Table of Contents #
1. [Requirements](#requirements)
2. [Installation and setup](#installation-and-setup)
3. [Running and execute core function](#running-and-execute-core-function)
4. [Running and execute tests](#running-and-execute-tests)
5. [Basics of working](#basics-of-working)
6. [Technologies](#technologies)


# Requirements
1. NodeJS

# Installation and setup

Open a terminal and type:
```
git clone https://github.com/codemasternode/thworks.git thworks
cd thworks
npm install
```

# Running and execute core function

Open src/index.js file and uncomment this line:
```
console.log(addTwoExpressions(aExpression, bExpression)) //uncomment to see an example of execution
```
Open a terminal in your project and type:
```
npm start
```

If you would like to get to know how function works go into "Basics of working" section.


# Running and execute tests

Open a terminal in your project and type:
```
npm run test
```


# Basics of working

Function addTwoExpressions accepts 2 arguments, both are Array types with objects.
Objects have structure:
```
{
    number: 2,
    exponent: 5
}
```
which represent expression: 
```
2x^5
```

If you would like to save simple number,
e.g. "5" you have to write object like that:
```
{
    number: 5,
    exponent: 0
}
```

# Technologies

1. NodeJS
2. Mocha
3. Chai
4. Babel

