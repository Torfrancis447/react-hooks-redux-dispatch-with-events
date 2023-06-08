// add code snippets from README

let state

function reducer(state = { count: 0 }, action) {
    switch (action.type) {
        case "counter/increment":
            return { count: state.count + 1 };
        case "counter/decrease":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function dispatch(action) {
    state = reducer(state,action);
    render();
}

function render() {
    const container = document.getElementById("container");
    container.textContent = state.count;
}

dispatch({type: "@@INIT"});

const button = document.getElementById("increase-button");
const button2 = document.getElementById("decrease-button");

button.addEventListener("click", () => {
    dispatch({type: "counter/increment"});
})
button2.addEventListener("click", () => {
    dispatch({type: "counter/decrease"});
})