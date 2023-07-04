export const selectCategoriesMap = (state) =>
  state.category.categories.reduce((accumulator, category) => {
    const { title, items } = category;
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {});

//the selector function is called with the entire state object
//the selector file is where we write the business logic to get the desired state
