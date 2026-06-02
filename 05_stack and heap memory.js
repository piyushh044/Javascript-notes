/**
 * Stack and Heap Memory
 * 
 * In JavaScript, memory is managed in two main areas: the stack and the heap.
 * 
 * 1. Stack Memory:
 *    - The stack is a region of memory that stores primitive values (like numbers, strings, booleans) and references to objects.
 *    - It operates in a last-in-first-out (LIFO) manner, meaning that the last item added to the stack is the first one to be removed.
 *    - When a function is called, a new stack frame is created for that function's execution context. Once the function finishes executing, its stack frame is removed.        
 * 
 * 2. Heap Memory:
 *    - The heap is a region of memory used for dynamic memory allocation, where objects and arrays are stored.
 *    - Unlike the stack, the heap does not have a specific order for storing data. It allows for more flexible memory management but can lead to fragmentation if not handled properly.
 *    - When an object or array is created, it is allocated in the heap, and a reference to that memory location is stored in the stack.
 * 
 * Understanding how stack and heap memory work is crucial for writing efficient JavaScript code and managing resources effectively.
 * 
 * Example:
 * 
 * function createObject() {
 *     let obj = { name: "Alice", age: 30 }; // obj is stored in heap, reference is stored in stack
 *     return obj;
 * }
 * 
 * let myObj = createObject(); // myObj holds a reference to the object in the heap
 * console.log(myObj.name); // Output: "Alice"
 * 
 * In this example, the object created inside the createObject function is stored in the heap, while the variable myObj holds a reference to that object in the stack. When we access myObj.name, it retrieves the value from the heap using the reference stored in the stack.
 * 
 * It's important to note that JavaScript has automatic garbage collection, which means that memory allocated in the heap will be freed when it is no longer referenced. However, developers should still be mindful of memory usage and avoid creating unnecessary objects or retaining references to unused objects to prevent memory leaks.
 * 
 * 
 * Stack(Primitives and references) vs Heap(Objects and arrays and Non-primitive data types)
 */