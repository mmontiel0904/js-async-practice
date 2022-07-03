function* gen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
};

const g = gen();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


function* genIterable(array) {
    for (let value of array) {
        yield value;
    };
};

const it = genIterable(['Marcos', 'Lizzeth', 'Teorodo', 'Janneth']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

