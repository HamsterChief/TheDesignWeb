//type testSum<a, b> = { kind: 'left', v: a } | { kind: 'right', v: b }
//type TestOption<a> = testSum<a, false>
//const some = <a>(v: a): TestOption<a> => ({ kind: 'left', v: v })
//const none = <a>(): TestOption<a> => ({ kind: 'right', v: false })

//let x: Option<number> = none()
//let y: number = null!

const factoralSum = (n: number): number => {
    if (n == 0) { return 1 }
    return n*factoralSum(n-1)
}
console.log(factoralSum(4))