import { createBrowserHistory } from "history";
import { useCallback, useEffect, useMemo, useState } from "react";

// import { conciliate, scan } from "./App.helpers";
import { consider } from "./App.helpers";
import mock from "./data.json";

export default () => {
  /*
  const [state, persist] = useState({ filters: {}, products: [] });
  const groups = useMemo(() => conciliate(state.filters), [state.filters]);
  const products = useMemo(() => state.products, [state.products]);
  const onInput = useCallback(({ target: { form, name } }) => {
    const data = new FormData(form);
    // const value = data.getAll(name);

    // return console.log(value);

    return console.log(new URLSearchParams(data).toString());
  }, []);

  useEffect(() => void Promise.resolve(mock).then(scan).then(persist), []);

  return { ...data, groups, onInput, products };
  */

  const [state, persist] = useState({ search: window.location.search });
  const history = useMemo(() => createBrowserHistory(), []);
  const data = useMemo(() => {
    const use = consider(state.search);

    return use(mock);
  }, [state.search]);
  const listen = useCallback(
    ({ location }) => persist({ search: location.search }),
    []
  );

  useEffect(() => history.listen(listen), [history, listen]);

  /*
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const url = new URL(window.location.href);

      url.searchParams.set("yearOfRelease", "1986");

      return history.push({ pathname: url.pathname, search: url.search });
    }, 2500);

    return () => window.clearTimeout(timeout);
  }, [history]);
  */

  return { ...data };
};
