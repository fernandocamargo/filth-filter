import { useMemo, useId } from "react";

export const Attribute = ({
  checked: defaultChecked,
  eligible,
  group,
  products,
  ...props
}) => {
  const id = useId();
  const style = useMemo(
    () => ({ color: eligible ? "green" : "red" }),
    [eligible]
  );

  return (
    <div style={style}>
      <input
        defaultChecked={defaultChecked}
        id={id}
        name={group}
        type="checkbox"
        value={props.id}
      />
      <label htmlFor={id}>
        {props.id} ({products.length} items)
      </label>
    </div>
  );
};

export const renderAttribute = (attribute) => (
  <Attribute key={attribute.id} {...attribute} />
);

export default function Group({ attributes, id }) {
  return (
    <fieldset key={id}>
      <legend>{id}</legend>
      {attributes.map(renderAttribute)}
    </fieldset>
  );
}
