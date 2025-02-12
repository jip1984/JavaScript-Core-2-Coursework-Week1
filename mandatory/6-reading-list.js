/**

The Reading List
Keep track of which books you read and which books you want to read!

=====
Exercise 1
=====

Loop through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"

You should write and log at least 5 recipes

=====
Exercise 2
=====
Now use an if/else statement to change the output depending on whether you read it yet or not. 

If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

**/

let books = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. TOLKEIN',
        read: false,
    },
    {
        title: 'The Lord of the rings',
        author: 'J.R.R. TOLKEIN',
        read: false,
    },
    {
        title: 'The Two Towers',
        author: 'J.R.R. TOLKEIN',
        read: true,
    },
    {
        title: 'The King returns',
        author: 'J.R.R. TOLKEIN',
        read: false,
    },
    {
        title: 'The Hobbit: Battle of 5 armys',
        author: 'J.R.R. TOLKEIN',
        read: true,
    },
];

for (i of books) {
    console.log(`${i.title} by ${i.author}`);
}


// exercise 2

for (i of books) {
    if (i.read === true) {
        console.log(`You have read ${i.title} by ${i.author}`);
    } else {
        console.log(`You still need to read ${i.title} by ${i.author}`);
    }
}
