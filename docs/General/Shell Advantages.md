
The shells programming language is awful for all but one thing.

Pipelines.

The shells programming language for pipelines totally rocks.

The `|`, `&` and `;` operators, plus `()` and ``` form a tidy little language for describing pipelines.

`a & b` is concurrent

`a ; b` is sequential

`a | b` is a pipeline where a feeds b

That part of shell programming rocks.

Think of `( a & b & c ) | tee capture | analysis` as the kind of thing thats hard to express in Python (or Ruby). You can do much of this with [iterpipes](http://pypi.python.org/pypi/iterpipes), but not quite all of it.

Much of the rest you can live without, and use Python (or Ruby) and youll be happier and more productive.

The biggest thing to watch out for is anything involving `expr` at the shell level. As soon as you start trying to do "calculations", you have crossed out of the shell
s sweet spot and you should stop programming in the shell and rethink what you are doing.

Source: [Find More](https://stackoverflow.com/questions/2342894/why-and-when-to-use-the-shell-instead-of-ruby)

---
