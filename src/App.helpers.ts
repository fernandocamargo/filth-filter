import update from "immutability-helper";

/*
[
  ['brand', 'V7'],
  ['brand', 'Samsung'],
  ['year', '1986']
]

{
  brand: ['V7', 'Samsung'],
  year: ['1986']
}
*/

/*
export const conciliate = (dictionary) =>
  Object.entries(dictionary).reduce(format, []);

export const extract = () => new URLSearchParams(window.location.search);

export const format = (filters, [group, filter]) => {
  const { dictionary } = parse();
  const concat = (stack, [id, products]) => {
    const { [group]: collection = [] } = dictionary;
    const eligible = !!collection.length;
    const checked = collection.includes(id);

    return stack.concat({ checked, eligible, group, id, products });
  };
  const attributes = Object.entries(filter).reduce(concat, []);

  return filters.concat({ id: group, attributes });
};

export const iterate = ({ filters, products }, product, index) => {
  const mark = (indexes = []) => {
    // const skip = Math.random() >= 0.5;
    const skip = false;

    return skip ? indexes : indexes.concat(index);
  };
  const aggregate = (attributes, [attribute, value]) => {
    const resolve = (current = {}) =>
      update(current, { [value]: { $apply: mark } });

    return update(attributes, { [attribute]: { $apply: resolve } });
  };

  return {
    filters: Object.entries(product).reduce(aggregate, filters),
    products: products.concat(product),
  };
};

export const parse = () => {
  const params = extract();
  const entries = Array.from(params.entries());
  const aggregate = (stack, entry) => {
    const [key, value] = entry;
    const mark = (current = []) => current.concat(value);

    return update(stack, {
      dictionary: { [key]: { $apply: mark } },
      entries: { $push: [entry] },
    });
  };

  return entries.reduce(aggregate, { dictionary: {}, entries: [] });
};

export const scan = (response) =>
  response.reduce(iterate, { filters: {}, products: [] });
*/

export const consider = (search) => {
  const query = parse(search);
  const use = () => ({
    products: [],
    groups: [],
  });

  return use;
};

export const parse = (search) => {
  const params = new URLSearchParams(search);
  const entries = Array.from(params.entries());

  return { entries };
};
