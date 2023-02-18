## In classical OOP: Classes ##

* Class is like a blueprint which is a theoretical plan and that we use to build many houses in the real world. In the same way theoretical class can be used to create actual objects which are called instances.
* Objects(instances) are instantiated form a class, which function like a blueprint.
* In this process of creating an instance is called  **instantiation**.   

**Javascript works a bit differently. But JavaScript has similar concepts like class instance model.**

## OOP in JavaScript: Prototypes ##
* All objects in JavaScript linked to certain prototype object. So we can say that each object has a prototype.
* The prototype object contains methods and properties that all the objects that are linked to that prototype can access and use. This behavior is usually called prototypal inheritance.
* So basically, objects inherit methods and properties form the prototype which is the reason why this mechanism is called prototypal inheritance.

**Prototypal Inheritance or Prototypal Delegation is different form Class Inheritance.** 

* **JS:** In prototypal inheritance, all liked objects are inheriting form the prototype object. Object delegate behavior to the linked prototype object.
* **Other:** In class inheritance, one class is inheriting form another class. 
