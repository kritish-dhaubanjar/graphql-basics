# graphql-basics

```
npm install
npm start
````

### Query

```graphql
query AllCategories {
  categories {
    id
    slug
    color
    name
    topics {
      id
      slug
      title
      user {
        id
        name
        email
      }
    }
  }
}
```

### Mutation

```graphql
mutation MutateType {
  mutateType(topic_id: 5, topic_type: "question") {
    id
    slug
    title
    user {
      id
      name
      email
    }
  }
}
```
