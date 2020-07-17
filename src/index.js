const aExpression = [
    {
        number: 2,
        exponent: 2
    },
    {
        number: 3,
        exponent: 0 // 3x^0 = 3 * 1 = 3
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

    if (!Array.isArray(a) || !Array.isArray(b)) {
        throw new Error("You have to pass two arguments as arrays")
    }

    let array = a.concat(b)

    const groupByObject = {}
    for (let i = array.length; i--;) {
        if (typeof array[i].number !== "number" || typeof array[i].exponent !== "number") {
            throw new Error("Structure of objects in array is incorrect")
        }
        const expression = array[i]
        if (!groupByObject[expression.exponent]) {
            groupByObject[expression.exponent] = expression.number
        } else {
            groupByObject[expression.exponent] += expression.number
        }
    }

    array = []
    for (let key in groupByObject) {
        if (groupByObject[key] === 0) {
            continue
        }
        array.push({
            exponent: Number(key),
            number: groupByObject[key]
        })
    }

    return array
}

// console.log(addTwoExpressions(aExpression, bExpression)) //uncomment to see an example of execution
export { addTwoExpressions }
