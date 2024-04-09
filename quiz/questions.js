// creating an array and passing the number, questions, options, and answers
let htmlquestions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },
    {
        numb: 2,
        question: "Which HTML tag is used to define an unordered list?",
        answer: "ul",
        options: [
            "ol",
            "list",
            "ul",
            "li"
        ]
    },
    {
        numb: 3,
        question: "Which tag is used to define a hyperlink in HTML?",
        answer: "a",
        options: [
            "link",
            "a",
            "href",
            "hyperlink"
        ]
    },
    {
        numb: 4,
        question: "Which HTML element is used to define the structure of an HTML document?",
        answer: "html",
        options: [
            "head",
            "title",
            "html",
            "body"
        ]
    },
    {
        numb: 5,
        question: "Which attribute is used to define inline styles in HTML?",
        answer: "style",
        options: [
            "font",
            "style",
            "class",
            "css"
        ]
    },
    {
        numb: 6,
        question: "What is the correct way to comment out multiple lines in HTML?",
        answer: "<  ! - - This is a comment - - >",
        options: [
            "<  ! - - This is a comment - - >",
            "< ! - - This is a comment",
            "/ / This is a comment / /",
            "/ / This is a comment"
        ]
    },
    {
        numb: 7,
        question: "Which HTML element is used to define the main content of an HTML document?",
        answer: "main",
        options: [
            "bod",
            "main",
            "content",
            "section"
        ]
    },
    {
        numb: 8,
        question: "Which tag is used to add a line break in HTML?",
        answer: "br",
        options: [
            "break",
            "lb",
            "line",
            "br"
        ]
    },
    {
        numb: 9,
        question: "What does the 'src' attribute specify in an HTML <img> tag?",
        answer: "The URL of the image",
        options: [
            "The size of the image",
            "The alignment of the image",
            "The URL of the image",
            "The alternate text for the image"
        ]
    },
    {
        numb: 10,
        question: "Which HTML element is used to define a table row?",
        answer: "tr",
        options: [
            "table",
            "row",
            "tr",
            "td"
        ]
    }
];
let cssquestions = [
    {
        numb: 1,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
        options: [
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style Selector",
            "Cascaded Style System"
        ]
    },
    {
        numb: 2,
        question: "Which of the following is NOT a valid CSS property?",
        answer: "text-color",
        options: [
            "font-size",
            "background-color",
            "text-color",
            "margin"
        ]
    },
    {
        numb: 3,
        question: "In CSS, what does the 'Cascading' in 'Cascading Style Sheets' refer to?",
        answer: "The order of precedence when multiple styles conflict",
        options: [
            "The use of multiple style sheets in a single document",
            "The hierarchical structure of HTML elements",
            "The flow of styles from one element to its children",
            "The order of precedence when multiple styles conflict"
        ]
    },
    {
        numb: 4,
        question: "What is the correct CSS syntax for targeting an element with the ID 'example'?",
        answer: "#example { }",
        options: [
            ".example { }",
            "#example { }",
            "element.example { }",
            "example { }"
        ]
    },
    {
        numb: 5,
        question: "Which CSS property is used to control the spacing between lines of text?",
        answer: "line-height",
        options: [
            "text-spacing",
            "line-spacing",
            "spacing",
            "line-height"
        ]
    },
    {
        numb: 6,
        question: "What is the purpose of the 'box-sizing' property in CSS?",
        answer: "To control how the total width and height of an element is calculated",
        options: [
            "To control the appearance of borders around elements",
            "To control the behavior of inline elements",
            "To specify the type of box model used for an element",
            "To control how the total width and height of an element is calculated"
        ]
    },
    {
        numb: 7,
        question: "Which CSS property is used to create rounded corners on elements?",
        answer: "border-radius",
        options: [
            "corner-radius",
            "rounded-corners",
            "border-curve",
            "border-radius"
        ]
    },
    {
        numb: 8,
        question: "What does the 'float' property in CSS do?",
        answer: "Specifies whether an element should float to the left, right, or none",
        options: [
            "Adds a shadow to an element",
            "Changes the color of the text",
            "Specifies whether an element should float to the left, right, or none",
            "Controls the transparency of an element"
        ]
    },
    {
        numb: 9,
        question: "Which CSS property is used to control the appearance of text in uppercase or lowercase?",
        answer: "text-transform",
        options: [
            "font-style",
            "text-decoration",
            "text-case",
            "text-transform"
        ]
    },
    {
        numb: 10,
        question: "What does the 'z-index' property in CSS control?",
        answer: "The stacking order of elements along the z-axis",
        options: [
            "The size of an element",
            "The position of an element relative to its parent",
            "The stacking order of elements along the z-axis",
            "The alignment of text within an element"
        ]
    }
];
let jsquestions = [
    {
        numb: 1,
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        answer: " < script src = ' script.js ' > < / script > ",
        options: [
            " < script href = ' script.js ' > < / script > ",
            " < script  name = 'script.js ' > < / script > ",
            " < script src = ' script.js ' > < / script > ",
            " < script link =  'script.js ' > < / script >"
        ]
    },
    {
        numb: 2,
        question: "Which of the following is not a valid JavaScript variable name?",
        answer: "2myVar",
        options: [
            "myVar2",
            "_myVar",
            "my_Var",
            "2myVar"
        ]
    },
    {
        numb: 3,
        question: "What does 'DOM' stand for?",
        answer: "Document Object Model",
        options: [
            "Data Object Model",
            "Document Object Model",
            "Digital Object Model",
            "Dynamic Object Model"
        ]
    },
    {
        numb: 4,
        question: "What is the correct way to check if a variable is not equal to a specific value in JavaScript?",
        answer: "!==",
        options: [
            "<>",
            "!=",
            "==",
            "!=="
        ]
    },
    {
        numb: 5,
        question: "Which built-in method returns the characters in a string beginning at the specified location?",
        answer: "substring()",
        options: [
            "substr()",
            "slice()",
            "getSubstring()",
            "substring()"
        ]
    },
    {
        numb: 6,
        question: "Which of the following is the correct way to comment in JavaScript?",
        answer: "// This is a comment",
        options: [
            "<!-- This is a comment -->",
            "// This is a comment",
            "/* This is a comment */",
            "' This is a comment"
        ]
    },
    {
        numb: 7,
        question: "What will the following code output: console.log(typeof [1, 2, 3]);",
        answer: "object",
        options: [
            "number",
            "array",
            "object",
            "undefined"
        ]
    },
    {
        numb: 8,
        question: "Which keyword is used to declare a variable in JavaScript?",
        answer: "var",
        options: [
            "int",
            "variable",
            "declare",
            "var"
        ]
    },
    {
        numb: 9,
        question: "What is the result of 6 + '3' in JavaScript?",
        answer: "63",
        options: [
            "9",
            "63",
            "6",
            "33"
        ]
    },
    {
        numb: 10,
        question: "What does the 'this' keyword refer to in JavaScript?",
        answer: "The object that is currently executing the function",
        options: [
            "The parent object of the current object",
            "The first parameter of the function",
            "The object that is currently executing the function",
            "The prototype of the object"
        ]
    }
];
let cquestions = [
    {
        numb: 1,
        question: "What does 'printf()' function do in C?",
        answer: "Prints formatted output to the console",
        options: [
            "Prompts user to enter input",
            "Prints formatted output to the console",
            "Reads input from a file",
            "Sends data to a printer"
        ]
    },
    {
        numb: 2,
        question: "What is the correct way to declare a pointer in C?",
        answer: "int *ptr;",
        options: [
            "pointer int ptr;",
            "ptr int;",
            "int *ptr;",
            "pointer ptr;"
        ]
    },
    {
        numb: 3,
        question: "What does the 'malloc()' function do in C?",
        answer: "Allocates memory dynamically",
        options: [
            "Frees dynamically allocated memory",
            "Declares a pointer",
            "Allocates memory statically",
            "Initializes memory to zero"
        ]
    },
    {
        numb: 4,
        question: "Which symbol is used for single-line comments in C?",
        answer: "//",
        options: [
            "/* */",
            "//",
            "<!-- -->",
            "#"
        ]
    },
    {
        numb: 5,
        question: "What is the size of 'int' data type in C?",
        answer: "Depends on the compiler and system architecture",
        options: [
            "4 bytes",
            "2 bytes",
            "8 bytes",
            "Depends on the compiler and system architecture"
        ]
    },
    {
        numb: 6,
        question: "What is the correct syntax for the 'for' loop in C?",
        answer: "for(initialization; condition; increment/decrement)",
        options: [
            "for(condition; increment/decrement; initialization)",
            "for(condition; initialization; increment/decrement)",
            "for(increment/decrement; condition; initialization)",
            "for(initialization; condition; increment/decrement)"
        ]
    },
    {
        numb: 7,
        question: "What does the 'sizeof' operator return in C?",
        answer: "Size of the variable or data type in bytes",
        options: [
            "Memory address of the variable",
            "Value stored in the variable",
            "Size of the variable or data type in bytes",
            "Type of the variable"
        ]
    },
    {
        numb: 8,
        question: "What is the correct way to define a constant in C?",
        answer: "const int MAX = 100;",
        options: [
            "constant int MAX = 100;",
            "define MAX 100;",
            "#define MAX 100",
            "const int MAX = 100;"
        ]
    },
    {
        numb: 9,
        question: "Which function is used to compare two strings in C?",
        answer: "strcmp()",
        options: [
            "compare()",
            "strcompare()",
            "cmp()",
            "strcmp()"
        ]
    },
    {
        numb: 10,
        question: "What is the output of the expression '5 + 3 * 2' in C?",
        answer: "11",
        options: [
            "16",
            "11",
            "13",
            "10"
        ]
    }
];
let javaquestions = [
    {
        numb: 1,
        question: "Which keyword is used to define a constant in Java?",
        answer: "final",
        options: [
            "static",
            "final",
            "const",
            "define"
        ]
    },
    {
        numb: 2,
        question: "Which of the following is not a valid Java data type?",
        answer: "char[]",
        options: [
            "int",
            "float",
            "char[]",
            "double"
        ]
    },
    {
        numb: 3,
        question: "What is the default value of byte datatype in Java?",
        answer: "0",
        options: [
            "0",
            "0.0",
            "null",
            "undefined"
        ]
    },
    {
        numb: 4,
        question: "Which method is used to allocate memory to an object in Java?",
        answer: "new",
        options: [
            "malloc()",
            "alloc()",
            "new()",
            "allocate()"
        ]
    },
    {
        numb: 5,
        question: "What is the output of the following code?\n\nint x = 5;\nSystem.out.println(x++);",
        answer: "5",
        options: [
            "5",
            "6",
            "Compilation Error",
            "Runtime Error"
        ]
    },
    {
        numb: 6,
        question: "Which operator is used to compare two values in Java?",
        answer: "==",
        options: [
            "=",
            "==",
            "<>",
            "!="
        ]
    },
    {
        numb: 7,
        question: "What is the superclass of all classes in Java?",
        answer: "Object",
        options: [
            "Main",
            "Super",
            "Base",
            "Object"
        ]
    },
    {
        numb: 8,
        question: "Which keyword is used to implement multiple inheritance in Java?",
        answer: "interface",
        options: [
            "extends",
            "interface",
            "implements",
            "inherits"
        ]
    },
    {
        numb: 9,
        question: "What does JVM stand for?",
        answer: "Java Virtual Machine",
        options: [
            "Java Virtual Memory",
            "Java Virtual Method",
            "Java Virtual Mode",
            "Java Virtual Machine"
        ]
    },
    {
        numb: 10,
        question: "Which of the following is not a valid access specifier in Java?",
        answer: "package",
        options: [
            "public",
            "protected",
            "private",
            "package"
        ]
    }
];

let pythonQuestions = [
    {
        numb: 1,
        question: "Which of the following is NOT a valid variable name in Python?",
        answer: "2variable",
        options: [
            "my_variable",
            "variable2",
            "myVariable",
            "2variable"
        ]
    },
    {
        numb: 2,
        question: "What is the output of the following code snippet?\n\n```python\nx = 'hello'\nprint(x[::-1])\n```",
        answer: "olleh",
        options: [
            "hello",
            "olleh",
            "olle",
            "loleh"
        ]
    },
    {
        numb: 3,
        question: "Which keyword is used to define a function in Python?",
        answer: "def",
        options: [
            "function",
            "fun",
            "define",
            "def"
        ]
    },
    {
        numb: 4,
        question: "What is the result of 9 / 2 in Python 3?",
        answer: "4.5",
        options: [
            "4",
            "4.5",
            "5",
            "Error"
        ]
    },
    {
        numb: 5,
        question: "What is the output of the following code snippet?\n\n```python\nx = [1, 2, 3]\nprint(x * 2)\n```",
        answer: "[1, 2, 3, 1, 2, 3]",
        options: [
            "[1, 2, 3, 1, 2, 3]",
            "[1, 2, 3, 2, 4, 6]",
            "[2, 4, 6]",
            "Error"
        ]
    },
    {
        numb: 6,
        question: "Which of the following is used to comment multiple lines in Python?",
        answer: "Triple quotes",
        options: [
            "Double slashes (//)",
            "Hash symbol (#)",
            "Triple quotes",
            "Single quotes"
        ]
    },
    {
        numb: 7,
        question: "What is the output of the following code snippet?\n\n```python\nx = (1, 2, 3)\nx[1] = 4\nprint(x)\n```",
        answer: "Error",
        options: [
            "(1, 2, 3)",
            "(1, 4, 3)",
            "Error",
            "[1, 4, 3]"
        ]
    },
    {
        numb: 8,
        question: "What will be the output of the following code snippet?\n\n```python\nfor i in range(3):\n    print(i)\n```",
        answer: "0\n1\n2",
        options: [
            "0\n1\n2",
            "0\n1\n2\n3",
            "1\n2\n3",
            "Error"
        ]
    },
    {
        numb: 9,
        question: "What does the 'pass' statement do in Python?",
        answer: "It is a null operation; nothing happens when it is executed.",
        options: [
            "It stops the execution of the program.",
            "It is used to create a loop.",
            "It is a null operation; nothing happens when it is executed.",
            "It prints 'pass' to the console."
        ]
    },
    {
        numb: 10,
        question: "Which of the following is NOT a valid data type in Python?",
        answer: "char",
        options: [
            "int",
            "float",
            "str",
            "char"
        ]
    }
];

let cppQuestions = [
    {
        numb: 1,
        question: "Which of the following is NOT a valid C++ keyword?",
        answer: "function",
        options: [
            "if",
            "else",
            "function",
            "for"
        ]
    },
    {
        numb: 2,
        question: "What is the output of the following code snippet?\n\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    cout << ++x;\n    return 0;\n}\n```",
        answer: "6",
        options: [
            "5",
            "6",
            "Compiler Error",
            "Undefined Behavior"
        ]
    },
    {
        numb: 3,
        question: "Which operator is used to allocate memory dynamically in C++?",
        answer: "new",
        options: [
            "malloc",
            "calloc",
            "new",
            "allocate"
        ]
    },
    {
        numb: 4,
        question: "What is the correct way to declare a pointer in C++?",
        answer: "int *ptr;",
        options: [
            "int ptr;",
            "int ptr();",
            "int ptr[];",
            "int *ptr;"
        ]
    },
    {
        numb: 5,
        question: "What is the output of the following code snippet?\n\n```cpp\nint arr[5] = {1, 2, 3, 4, 5};\nint *ptr = arr;\ncout << *(ptr + 2);\n```",
        answer: "3",
        options: [
            "3",
            "2",
            "4",
            "Compiler Error"
        ]
    },
    {
        numb: 6,
        question: "What does the 'endl' keyword do in C++?",
        answer: "It inserts a newline character and flushes the output buffer.",
        options: [
            "It ends the program execution.",
            "It indicates the end of a loop.",
            "It inserts a space character.",
            "It inserts a newline character and flushes the output buffer."
        ]
    },
    {
        numb: 7,
        question: "What is the correct way to define a class member function outside the class definition in C++?",
        answer: "returnType className::functionName() { }",
        options: [
            "className::returnType functionName() { }",
            "functionName::returnType className() { }",
            "returnType functionName::className() { }",
            "returnType className::functionName() { }"
        ]
    },
    {
        numb: 8,
        question: "Which of the following is NOT a valid access specifier in C++?",
        answer: "protectedd",
        options: [
            "public",
            "private",
            "protected",
            "protectedd"
        ]
    },
    {
        numb: 9,
        question: "What is the output of the following code snippet?\n\n```cpp\ncout << (5 > 3) + (7 < 9);\n```",
        answer: "2",
        options: [
            "0",
            "1",
            "2",
            "Compiler Error"
        ]
    },
    {
        numb: 10,
        question: "What does the 'const' keyword indicate in C++?",
        answer: "It indicates that the value of a variable cannot be changed.",
        options: [
            "It indicates that a variable must be initialized at the time of declaration.",
            "It indicates that a variable can be accessed from any part of the program.",
            "It indicates that the value of a variable cannot be changed.",
            "It indicates that a function cannot modify the object it is called on."
        ]
    }
];

let phpQuestions = [
    {
        numb: 1,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
            "Hypertext Preprocessor",
            "Personal Home Page",
            "Preprocessed Hypertext",
            "Program Hyper Processor"
        ]
    },
    {
        numb: 2,
        question: "Which symbol is used to denote a single-line comment in PHP?",
        answer: "//",
        options: [
            "//",
            "#",
            "--",
            "/* */"
        ]
    },
    {
        numb: 3,
        question: "What will be the output of the following PHP code snippet?\n\n```php\necho strlen('Hello World');\n```",
        answer: "11",
        options: [
            "10",
            "11",
            "12",
            "5"
        ]
    },
    {
        numb: 4,
        question: "What is the correct way to start a PHP script?",
        answer: "<?php",
        options: [
            "<?php",
            "<?",
            "<script>",
            "<php>"
        ]
    },
    {
        numb: 5,
        question: "Which PHP function is used to read a file into a string?",
        answer: "file_get_contents()",
        options: [
            "readfile()",
            "fread()",
            "file_get_contents()",
            "file_read()"
        ]
    },
    {
        numb: 6,
        question: "Which PHP superglobal array contains information about headers, paths, and script locations?",
        answer: "$_SERVER",
        options: [
            "$_POST",
            "$_GET",
            "$_REQUEST",
            "$_SERVER"
        ]
    },
    {
        numb: 7,
        question: "What is the default method for passing data to a PHP script using HTML forms?",
        answer: "GET",
        options: [
            "POST",
            "GET",
            "PUT",
            "REQUEST"
        ]
    },
    {
        numb: 8,
        question: "What does the function 'isset()' do in PHP?",
        answer: "Checks if a variable is set and is not NULL",
        options: [
            "Declares a variable",
            "Assigns a value to a variable",
            "Checks if a variable is set and is not NULL",
            "Unsets a variable"
        ]
    },
    {
        numb: 9,
        question: "What will be the output of the following PHP code snippet?\n\n```php\n$x = 5;\n$y = '5';\nif ($x === $y) {\n    echo 'Equal';\n} else {\n    echo 'Not Equal';\n}\n```",
        answer: "Not Equal",
        options: [
            "Equal",
            "Not Equal",
            "Error",
            "Undefined"
        ]
    },
    {
        numb: 10,
        question: "Which PHP function is used to redirect the user to a different URL?",
        answer: "header()",
        options: [
            "redirect()",
            "location()",
            "header()",
            "forward()"
        ]
    }
];
let sqlQuestions = [
    {
        numb: 1,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
            "Structured Query Language",
            "Sequential Query Language",
            "Simple Query Language",
            "Standard Query Language"
        ]
    },
    {
        numb: 2,
        question: "Which SQL keyword is used to retrieve data from a database?",
        answer: "SELECT",
        options: [
            "GET",
            "FETCH",
            "RETRIEVE",
            "SELECT"
        ]
    },
    {
        numb: 3,
        question: "Which SQL command is used to insert new data into a database?",
        answer: "INSERT INTO",
        options: [
            "ADD",
            "INSERT INTO",
            "CREATE",
            "UPDATE"
        ]
    },
    {
        numb: 4,
        question: "What does the SQL command 'DELETE FROM' do?",
        answer: "Deletes records from a table",
        options: [
            "Deletes a table",
            "Deletes a database",
            "Deletes records from a table",
            "Deletes a column from a table"
        ]
    },
    {
        numb: 5,
        question: "What does the SQL command 'UPDATE' do?",
        answer: "Modifies existing records in a table",
        options: [
            "Adds new records to a table",
            "Deletes records from a table",
            "Modifies existing records in a table",
            "Retrieves data from a table"
        ]
    },
    {
        numb: 6,
        question: "Which SQL clause is used to filter the result set based on a specified condition?",
        answer: "WHERE",
        options: [
            "HAVING",
            "FILTER",
            "WHERE",
            "CONDITION"
        ]
    },
    {
        numb: 7,
        question: "What does the SQL command 'GROUP BY' do?",
        answer: "Groups rows that have the same values into summary rows",
        options: [
            "Orders the result set in ascending order",
            "Filters the result set based on a specified condition",
            "Joins multiple tables together",
            "Groups rows that have the same values into summary rows"
        ]
    },
    {
        numb: 8,
        question: "Which SQL function is used to find the maximum value of a column?",
        answer: "MAX()",
        options: [
            "MIN()",
            "MAX()",
            "SUM()",
            "AVG()"
        ]
    },
    {
        numb: 9,
        question: "What does the SQL command 'ORDER BY' do?",
        answer: "Sorts the result set in ascending or descending order",
        options: [
            "Filters the result set based on a specified condition",
            "Groups rows that have the same values into summary rows",
            "Sorts the result set in ascending or descending order",
            "Joins multiple tables together"
        ]
    },
    {
        numb: 10,
        question: "Which SQL statement is used to create a new table?",
        answer: "CREATE TABLE",
        options: [
            "ADD TABLE",
            "NEW TABLE",
            "CREATE TABLE",
            "MAKE TABLE"
        ]
    }
];