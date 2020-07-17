const aExpression = [
    {
        number: 2,
        exponent: -2
    },
    {
        number: 3,
        exponent: 0
    }
]

const bExpression = [
    {
        number: 3,
        exponent: 3
    },
    {
        number: 1,
        exponent: 2
    }
]

function addTwoExpressions(a, b) {
    const array = a.concat(b)

    const groupByObject = {}
    for (let i = array.length; i--;) {
        const expression = array[i]
        if (!groupByObject[expression.exponent]) {
            groupByObject[expression.exponent] = expression.number
        } else {
            groupByObject[expression.exponent] += expression.number
        }
    }

    const result = []
    for (let key in groupByObject) {
        result.push({
            exponent: Number(key),
            number: groupByObject[key]
        })
    }
}

addTwoExpressions(aExpression, bExpression) //example of execution

export default addTwoExpressions
