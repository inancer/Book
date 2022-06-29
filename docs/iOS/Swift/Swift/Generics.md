# Generics

Tag: #generics, #some, #opaque, #polymorphism

## Polymorphism

:::note Definition
Polymorphism allows one piece of code to have many behaviors.
:::

- Overloads achieve **ad-hoc polymorphism**. (Boilerplate code)
- Subtypes achieve **subtype polymorphism.** (Inheritance)
- Generics achieve **parametric polymorphism.**


## Attribute "some"

Use to declare a generic type in parameter position or in result position.


### Opaque Type

A main type (as a protocol, an abstract class etc.) which is using for declaring a generic parameter.

::: New in Swift 5.7
Using some in parameter position.
:::

![](images/Pasted%20image%2020220627152354.png)

### Underlying Type

A subtype type (a class which is inherited from main type, applied a protocol etc.) which is using for reaching to target on run time.

::: Note
Using some with Local variables, Underlying type has to be declared during implementation. This means local variables with opaque type must always have an initial value; and if you don't provide one, the compiler will report an error.
:::

![](images/Pasted%20image%2020220627153807.png)

![](images/Pasted%20image%2020220627153429.png)

::: NOTE
Using "some" in parameter position is new in Swift 5.7.

The underlying type only needs to be fixed for the scope of the parameter, so each call can provide a different argument type.

For an opaque result type, the underlying type is inferred from the return value in the implementation.

A method or computed property with an opaque result type can be called from anywhere in the program, so the scope of this named value is global.

This means the underlying return type has to be the same across all return statements; and if it isn't, the compiler will report an error that the underlying return values have mismatched types.
:::

![](images/Pasted%20image%2020220627154210.png)

For an opaque SwiftUI view, the ViewBuilder DSL can transform control-flow statements to have the same underlying return type for each branch.

So in this case, we can fix the issue by using the ViewBuilder DSL.

Writing an @ViewBuilder annotation on the method and removing return statements will enable the result to be built for us by the ViewBuilder type.

![](images/Pasted%20image%2020220627154308.png)

## Example 1

![](images/Pasted%20image%2020220627155305.png)

## Example 2

![](images/Pasted%20image%2020220627155409.png)

## Example 3

```swift
protocol AnimalFeed {
  associatedtype CropType: Crop where CropType.Feed == Self
  static func grow() -> CropType
}

protocol Crop {
  associatedtype Feed: AnimalFeed where Feed.CropType == Self
  func harvest() -> Feed
}

protocol Animal {
  associatedtype Feed: AnimalFeed
  func eat(_ food: Feed)
}

struct Farm {
  func feed(_ animal: some Animal) {
    let crop = type(of: animal).Feed.grow()
    let produce = crop.harvest()
    animal.eat(produce)
  }

  func feedAll(_ animals: [any Animal]) {
    for animal in animals {
      feed(animal)
    }
  }
}

struct Cow: Animal {
  func eat(_ food: Hay) {}
}

struct Hay: AnimalFeed {
  static func grow() -> Alfalfa {
    Alfalfa()
  }
}

struct Alfalfa: Crop {
  func harvest() -> Hay {
    Hay()
  }
}
```