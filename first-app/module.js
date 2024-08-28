// why need modules

// as we know, when ywe define a function or variable is added to the global scope and its available via window object. we often split javascript code into multiple files, there is a problem when we define a function or variable same name but in different file, here javascript overrides previous one. this is the problem with the global scope that is why we use modules

// so in order to build reliable and maintainable application we should avoid defining variables and functions in the global scope.

// insted we need modularity, create small building blocks or moduleswhere we defuine variable and functions two function or two same variable don't overwrite another function or variable. because its encapsulated inside of that module.


// every file in a node application considered a module, inside every thing in this file are private, if you need to user a function or variable of this module you need to explicitly export it and make it public.

// every application have a main module here is app.js main module

// here we print module object, its appear to be global but, it is not global object we can't access that object via global object. we will find out why very soon.

console.log(module);
// Result
//  {
//     id: '.',
//     path: 'D:\\hammad\\node js\\practice\\first-app',
//     exports: {},
//     filename: 'D:\\hammad\\node js\\practice\\first-app\\module.js',
//     loaded: false,
//     children: [],
//     paths: [
//       'D:\\hammad\\node js\\practice\\first-app\\node_modules',
//       'D:\\hammad\\node js\\practice\\node_modules',
//       'D:\\hammad\\node js\\node_modules',
//       'D:\\hammad\\node_modules',
//       'D:\\node_modules'
//     ],
//     [Symbol(kIsMainSymbol)]: true,
//     [Symbol(kIsCachedByESMLoader)]: false,
//     [Symbol(kIsExecuting)]: true
//   }


