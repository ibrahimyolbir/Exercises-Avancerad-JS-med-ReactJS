class Counter {
    constructor(value) {
        this.value = value;
    };

    increment() {
        this.value = this.value + 1;
    };
    reset() {
        this.value = 0;
    };
    getCurrentValue() {
        return this.value;
    }
}
const counter = new Counter(0);

function render() {
    document.getElementById('render').textContent = counter.getCurrentValue();
}

render();
document.getElementById('increment').addEventListener('click', () => {
    counter.increment();
    render();
});

document.getElementById('reset').addEventListener('click', () => {
    counter.reset();
    render();
});