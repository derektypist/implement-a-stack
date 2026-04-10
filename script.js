function initStack() {
  return {
    collection: []
  };
}


function push(stack, item) {
  stack.collection.push(item);
}

function pop(stack) {
  if (stack.collection.length === 0) return undefined;
  let topElement = stack.collection.pop();
  return topElement;
}

function peek(stack) {
  return stack.collection.length === 0 ? undefined : stack.collection.at(-1);
}

function isEmpty(stack) {
  return stack.collection.length === 0;
}

function clear(stack) {
  stack.collection.length = 0;
}

const stack = initStack();
console.log(`Adding elements`);
push(stack, 50);
push(stack, 109);
push(stack, 74);
console.log(stack);
console.log(`Is stack empty? ${isEmpty(stack) ? "Yes" : "No"}`);
console.log(`Top element of the stack is ${peek(stack)}`);
console.log(`Removing top element of stack`);
pop(stack);
console.log(stack);
console.log(`Clearing stack`);
clear(stack);
console.log(stack);
