# Medior Node Backend Assignment

In this assignment we would like you to build an amazing web API for a frontend Pets web app. 🧑‍🏭

- The current code is very basic and could do with improvement in many places.
- What we're mostly looking for is to see is what you chose to tackle and how you went about it.
- Decide what you think is important to tackle, remember you won't have time to do everything.
- Please make regular git commits while working on the project, and include the .git folder along when handing in the assignment, so we get a feel for the way in which you've worked and how you went about changing the application.

Carefully read the instructions before you proceed.

## Scope

There are many things that you could do to improve the code, but we want to add the following functionality in the future, so this may affect your choices:

- We need to ensure that our API works and that we do not introduce errors.
- Keeping the data in a JSON file is fine, but we will want the ability to use something more flexible in the future.
  - We might want to use a different data store next to the JSON file.
- We will want to fetch a single Pet from its own API endpoint which may contain additional data than is in the listing endpoint.
- We will want to add APIs for the other CRUD operations upon a Pet.

## Questions

- **Question**: How much time do I have?
- **Answer**: We don't give you a time limit. If you only have a few hours to spare, take that, if you want to spend your weekend on it, go for it! We'd recommend you try to spend about 4 hours, we don't judge on the amount of time you spend, we wanna know the reasons behind your decisions.

If you have any other questions while working on the exercise feel free to reach out. We will be happy to help.

## The Interview

An appointment will be made to talk to you about your assignment. During this one-hour interview two Coolblue developers will ask you to explain the choices you made and answer questions about the assignment and web development in general. Please ensure you're able to screenshare your IDE in this meeting (through Google Meet).

Happy coding! 😺

## My Approach

I focused on building a structure that’s easy to maintain and flexible for future datasources, as requested in the assignment.

To do this, I created a `PetDataSource` interface that all data providers implement.

This means that switching to something like GraphQL only requires adding a new class and updating the handler without changing the controller or service logic. Everything depends on the interface, not the implementation. I tried to follow SOLID principles here, with focus on Dependency Inversion Principle.

I wrote tests for both the controller and the data layer, including edge cases and error handling. The .env switching logic is also covered by tests.

## Running the project

```bash
yarn install
yarn start
```

## Future Updates

I plan to add a small GraphQL data source to demonstrate the flexibility of the current abstraction layer. This will show how easily a new data provider can be added without changing the business logic.

I'd also like to implement full CRUD support since the current setup only supports `GET`.

If time allows after the GraphQL implementation, I’d like to introduce integration tests. While unit and controller tests already ensure correctness, integration tests would help catch misconfigurations between layers and simulate more realistic API behavior.
