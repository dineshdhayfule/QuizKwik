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
