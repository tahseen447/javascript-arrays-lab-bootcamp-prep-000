const app = "I don't do much."

function destructivelyAppendKitten(name)
{
  kittens.push(name)
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten()
{
  kittens.pop()
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift()
}

function appendKitten(name)
{
  var newArray = [...kittens, name]
  return newArray;
}

function preprendKitten()
{
  var newArray = [name, ...kittens]
  return newArray;
}

function removeLastKitten()
{
  var newArray = kittens.slice(-1)
  return newArray
}

function removeFirstKitten()
{
  var newArray = kittens.splice(1)
  return newArray
}
