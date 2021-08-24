let db = [
  {
    id: 0,
    content: "lorem ipsum",
    due: "2021-02-01",
    done: false,
  },
  {
    id: 1,
    content: "dolor sit",
    due: "2021-02-01",
    done: true,
  },
];

const controller = {
  findAll: (_) => {
    return db;
  },
  findById: (id) => {
    const filtered = db.filter((item) => item.id === +id);
    if (filtered.length !== 1) return false;
    else return filtered[0];
  },
  create: (body) => {
    if (body.id) throw new Error("you cannot specify id");
    if (!body.content) throw new Error("there must be a content");
    if (!body.due) throw new Error("there must be a due date");
    if (
      !body.hasOwnProperty("done") ||
      typeof body.done !== "boolean"
    )
      throw new Error("boolean field done cannot be a null");
    const item = {
      id: db.length,
      ...body,
    };
    db.push(item);
    return item;
  },
  update: (id, body) => {
    if (body.id) throw new Error("you cannot specify id");
    const changed = db.filter((item) => {
      if (item.id === id) {
        if (body.content) item.content = body.content;
        if (body.due) item.due = body.due;
        if (body.hasOwnProperty("done")) item.done = body.done;
        return true;
      }
    });
    if (changed.length > 0) return true;
    else return false;
  },
  delete: (id) => {
    const l = db.length;
    db = db.filter((item) => item.id !== id);
    if (l > db.length) return true;
    else return false;
  },
};

export default controller;
