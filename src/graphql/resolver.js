const { CATEGORIES, TOPICS, USERS } = require("../mock/database");

const resolver = {
  categories() {
    const categories = CATEGORIES.map((category) => {
      category.topics = TOPICS.filter(
        (topic) => topic.category_id === category.id
      );

      category.topics = category.topics.map((topic) => {
        topic.user = USERS.find((user) => user.id === topic.user_id);
        return topic;
      });

      return category;
    });

    return categories;
  },

  topics() {
    const topics = TOPICS.map((topic) => {
      topic.category = CATEGORIES.find(
        (category) => category.id === topic.category_id
      );

      topic.user = USERS.find((user) => user.id === topic.user_id);

      return topic;
    });

    return topics;
  },

  users() {
    const users = USERS.map((user) => {
      user.topics = TOPICS.filter((topic) => topic.user_id === user.id);

      return user;
    });

    return users;
  },

  // Mutation

  mutateType({ topic_id, topic_type }, request) {
    try {
      const topic = TOPICS.find((topic) => topic.id === topic_id);

      if (!topic) {
        throw new Error();
      }

      topic.type = topic_type;

      return topic;
    } catch (err) {
      const error = new Error("Oops! Topic Not Found.");
      error.code = 404;
      error.data = { message: `Topic with id ${topic_id} doesn't exist.` };
      throw error;
    }
  },
};

module.exports = resolver;
