function typeConsole(input) {
    input = input.trim();
    input.length==0?console.log("Đây là type: log"):console.log(`Đây là type: ${input}`);
    
}
typeConsole("Hello World");
typeConsole("   ");
typeConsole("Error");
typeConsole(true);