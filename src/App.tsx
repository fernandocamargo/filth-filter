import use from "./App.hooks";
import { Group } from "./components";

export const renderGroup = (group) => <Group key={group.id} {...group} />;

export default function App() {
  const { groups, onInput } = use();

  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form onInput={onInput}>
        <fieldset>
          <legend>Filters</legend>
          {groups.map(renderGroup)}
        </fieldset>
      </form>
      <section>
        <article></article>
      </section>
    </div>
  );
}
