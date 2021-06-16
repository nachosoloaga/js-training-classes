# Welcome everybody! 👋

This is a test of the Spectacle lib.

- You can list items
- like this
- `or like this`

---

# And then you can add another slide ...

With images!

![cheer](https://media.giphy.com/media/l3V0wkQ2KKcAeW8Cs/giphy.gif)

---

## I think it's quite simple. Here is a JS snippet:

```js
import { createClient, Provider } from "urql";

const client = createClient({ url: "https://0ufyz.sse.codesandbox.io" });

const App = () => (
  <Provider value={client}>
    <Todos />
  </Provider>
);
```
