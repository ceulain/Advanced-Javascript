## Exercise 1

```javascript
function sumOfInteger (a, b) {
  var x = add(a, b);

  return x;

  function add(a, b) {
    var c = a + b;

    return c;
  }
}
```

Rewrite the program above like engines JavaScript sees it.


## Exersice 2

```javascript
var string = "I'm a strong string";

function displayString() {
  console.log(string);
  var string = "I'm a beautiful string";
  console.log(string);
}

displayString();
```

Rewrite the program above like engines JavaScript sees it.

## Exercise 3

Create program that highlight `this` default binding(standalone function invocation)

## Exercise 4

Create program that highlight `this` implicit binding.

## Exercise 5

Create program that highlight `this` explicit binding.

## Exercise 6

Create program that highlight `this` `new` binding.

## Exercise 7
Write a `Module` JavaScipt that will allow to handle a sport team, it will have five functions :
- `addPlayer` that add a player to team
- `removePlayer` that remove player to team
- `displayPlayer` displays all team
- `numberOfPlayers` displays the number of player in the team
- `updatePlayer` updates a player in the team

The addPlayer will add players that will have this form:
```javascript
{
 name: "Foo",
 id: 42
}
```

The property `id` must be read-only.

The module must handle to team : team of football an team of basket-ball

You should provide an execution example for each function and each team.

The program will be executed in `IIFE` with `strict mode`
