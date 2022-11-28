
let input = prompt('What would you like to do?').toLowerCase();

const todos = [];

while (input !== 'quit' && input !== 'q' && input !== 'exit') {
    if (input === 'list') {
        console.log('*************************')
        for (i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*************************')
    } else if (input === 'new') {
        const newTodo = prompt('OK, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list.`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('OK, enter an index to delete.'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`OK. Deleted ${deleted[0]}.`);
        } else {
            console.log('Unknown Index.');
        }
    } else if (input === 'clear') {
        console.clear()
    }
    input = prompt('What would you like to do?').toLowerCase();
}
console.log('OK! You quit the app.');
