const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID
} = require('graphql');

const books = [
  { name: "算法导论", genre: "计算机科学", id: "1" },
  { name: "人性的弱点", genre: "社交", id: "2" },
  { name: "明朝那些事儿", genre: "历史", id: "3" }
]

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
})

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // 从哪里得到数据，比如数据库或其他来源
        // Mongodb mysql postgresql
        console.log(typeof(args.id));
        return _.find(books, { id: args.id })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
});
