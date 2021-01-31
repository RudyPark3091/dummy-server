const db = [
  {
    id: 0,
    content: "lorem ipsum",
    due: "2021-02-01",
  },
  {
    id: 1,
    content: "dolor sit",
    due: "2021-02-01",
  }
];

const controller = {
  findAll: _ => {
    return db;
  },
  findById: id => {
    for (const item of db) {
      if (item.id === +id) return item;
    }
  },
  create: item => {
    if (item.id)
      throw new Error("you cannot specify id");
    if (!item.content)
      throw new Error("there must be a content");
    if (!item.due)
      throw new Error("there must be a due date");
    item.id = db.length;
    db.push(item);
  },
}

export default controller;