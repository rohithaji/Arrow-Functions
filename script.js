const greet = (input) => 
{
    input = prompt("Enter a String")
    for(let i=0;i<input.length;i++)
        {
          let uppercase = input.toUpperCase()
          document.write(` ${[i]} ${uppercase[i]}`);
        }

}

greet()