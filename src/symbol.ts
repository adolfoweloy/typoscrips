type Connection = {
  status: "open" | "closed";
};

type Field = {
  name: string;
  value: string;
};

type ResultSet = Field[];

function openConnect() {
  const conn: Connection = { status: "open" };

  return {
    query(str: string): ResultSet | undefined {
      if (str) {
        return [
          { name: "name", value: "alice" },
          { name: "name", value: "bob" },
        ];
      }
      return undefined;
    },

    // using recognises when an object declares Symbol.dispose function and calls
    //  it when exiting the block (in this case within `queryUsers` function below)
    [Symbol.dispose]() {
      conn.status = "closed";
      console.log("connection disposed and closed");
    },
  };
}

function queryUsers() {
  using c = openConnect();
  c.query("select * from users");
}

queryUsers();
