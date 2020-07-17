import { expect } from 'chai'
import { addTwoExpressions } from '../src/index'

describe("Test addTwoExpression function", () => {
    describe("should properly calculate the sum of two experssion", () => {
        it("when passing correct model of data", (done) => {
            expect(addTwoExpressions(
                [
                    {
                        number: 2,
                        exponent: 2
                    },
                    {
                        number: 3,
                        exponent: 0
                    }
                ],
                [
                    {
                        number: 3,
                        exponent: 3
                    },
                    {
                        number: 1,
                        exponent: 2
                    }
                ]
            )).to.have.deep.members([{ number: 3, exponent: 3 }, { number: 3, exponent: 2 }, { number: 3, exponent: 0 }])
            done()
        })
        it("when passing experssion with positive numbers", (done) => {
            expect(addTwoExpressions(
                [
                    {
                        number: 2,
                        exponent: 2
                    },
                    {
                        number: 3,
                        exponent: 0
                    },
                    {
                        number: 10,
                        exponent: 4
                    }
                ],
                [
                    {
                        number: 3,
                        exponent: 3
                    },
                    {
                        number: 5,
                        exponent: 2
                    }
                ]
            )).to.have.deep.members([{ number: 7, exponent: 2 }, { number: 10, exponent: 4 }, { number: 3, exponent: 3 }, { number: 3, exponent: 0 }])
            done()
        })
        it("when passing experssion with negative numbers", (done) => {
            expect(addTwoExpressions(
                [
                    {
                        number: -2,
                        exponent: 2
                    },
                    {
                        number: -3,
                        exponent: 0
                    }
                ],
                [
                    {
                        number: -3,
                        exponent: 3
                    },
                    {
                        number: 5,
                        exponent: 2
                    }
                ]
            )).to.have.deep.members([{ number: 3, exponent: 2 }, { number: -3, exponent: 3 }, { number: -3, exponent: 0 }])
            done()
        })
        it("when passing experssion with positive exponent", (done) => {
            expect(addTwoExpressions(
                [
                    {
                        number: -2,
                        exponent: 2
                    },
                    {
                        number: -3,
                        exponent: 0
                    }
                ],
                [
                    {
                        number: -3,
                        exponent: 3
                    },
                    {
                        number: 5,
                        exponent: 2
                    }
                ]
            )).to.have.deep.members([{ number: 3, exponent: 2 }, { number: -3, exponent: 3 }, { number: -3, exponent: 0 }])
            done()
        })
        it("when passing experssion with negative exponent", (done) => {
            expect(addTwoExpressions(
                [
                    {
                        number: 2,
                        exponent: -2
                    },
                    {
                        number: 3,
                        exponent: 0
                    }
                ],
                [
                    {
                        number: 3,
                        exponent: 3
                    },
                    {
                        number: 1,
                        exponent: -2
                    }
                ]
            )).to.have.deep.members([{ number: 3, exponent: 3 }, { number: 3, exponent: -2 }, { number: 3, exponent: 0 }])
            done()
        })
        it("when passing expressions without algebraic expression", (done) => {
            expect(addTwoExpressions(
                [
                    {
                        number: 2,
                        exponent: 0
                    },
                    {
                        number: 3,
                        exponent: 0
                    }
                ],
                [
                    {
                        number: 3,
                        exponent: 0
                    },
                    {
                        number: 1,
                        exponent: 0
                    }
                ]
            )).to.have.deep.members([{ number: 9, exponent: 0 }])
            done()
        })
        it("when passing expression with fractions", (done) => {
            expect(addTwoExpressions(
                [
                    {
                        number: 0.5,
                        exponent: 0
                    },
                    {
                        number: 0.66,
                        exponent: 2
                    }
                ],
                [
                    {
                        number: 3,
                        exponent: 2
                    },
                    {
                        number: 1,
                        exponent: 0
                    }
                ]
            )).to.have.deep.members([{ number: 1.5, exponent: 0 }, { number: 3.66, exponent: 2 }])
            done()
        })
        it("when passing every number as a zero", (done) => {
            expect(addTwoExpressions(
                [
                    {
                        number: 0,
                        exponent: 2
                    },
                    {
                        number: 0,
                        exponent: 2
                    }
                ],
                [
                    {
                        number: 0,
                        exponent: 2
                    },
                    {
                        number: 0,
                        exponent: 0
                    }
                ]
            )).to.have.lengthOf(0)
            done()
        })
        it("when passing every exponent as a zero", (done) => {
            expect(addTwoExpressions(
                [
                    {
                        number: 0.5,
                        exponent: 0
                    },
                    {
                        number: 2,
                        exponent: 0
                    }
                ],
                [
                    {
                        number: 3,
                        exponent: 0
                    },
                    {
                        number: 1,
                        exponent: 0
                    }
                ]
            )).to.have.deep.members([{ number: 6.5, exponent: 0 }])
            done()
        })
        it("when passing empty arrays", (done) => {
            expect(addTwoExpressions([], [])).to.have.lengthOf(0)
            done()
        })
    })

    describe("should throw error", () => {
        it("when passing different types than array", (done) => {
            expect(function () { addTwoExpressions("str", "str2") }).to.throw("You have to pass two arguments as arrays")
            done()
        })
        it("when called without arguments", (done) => {
            expect(function () { addTwoExpressions() }).to.throw("You have to pass two arguments as arrays")
            done()
        })
        it("when called with only one argument", (done) => {
            expect(function () { addTwoExpressions([{ number: 2, exponent: 10 }]) }).to.throw("You have to pass two arguments as arrays")
            done()
        })
        it("when one of objects in array doesn't have number property", (done) => {
            expect(function () {
                addTwoExpressions(
                    [{ exponent: 10 }],
                    [{ number: 2, exponent: 10 }]
                )
            }).to.throw("Structure of objects in array is incorrect")
            done()
        })
        it("when one of objects in array doesn't have exponent property", (done) => {
            expect(function () {
                addTwoExpressions(
                    [{ number: 4, exponent: 10 }],
                    [{ number: 2 }]
                )
            }).to.throw("Structure of objects in array is incorrect")
            done()
        })
        it("when number property in one of objects in array is different type than number", (done) => {
            expect(function () {
                addTwoExpressions(
                    [{ number: 4, exponent: 10 }],
                    [{ number: "2", exponent: 15 }]
                )
            }).to.throw("Structure of objects in array is incorrect")
            done()
        })
        it("when exponent property in one of objects in array is different type than number", (done) => {
            expect(function () {
                addTwoExpressions(
                    [{ number: 4, exponent: "10" }],
                    [{ number: 2, exponent: 10 }]
                )
            }).to.throw("Structure of objects in array is incorrect")
            done()
        })
    })


})