Promise.resolve(1)
.then((value: number) => {
    console.log(value); // 1
    return Promise.resolve(true);
})
.then((value: boolean) => {
    console.log(value);
    return [1, 2, 3];
})
.then((value: number[]) => {
    console.log(value);
    return {name: 'jake', age: 25};
})
.then((value: object) => {
    console.log(value);
})