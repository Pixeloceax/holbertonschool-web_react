import { getIn, fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  return getIn(fromJS(object), array, undefined);
}

/* console.log(
  accessImmutableObject(
    {
      name: {
        first: "Guillaume",
        last: "Salva",
      },
    },
    ["name", "first"]
  )
);
 */
