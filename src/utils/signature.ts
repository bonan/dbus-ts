// parse signature from string to tree

let match = {
  '{': '}',
  '(': ')'
};

let knownTypes = {};
'(){}ybnqiuxtdsogarvehm*?@&^'.split('').forEach(function(c) {
  knownTypes[c] = true;
});

declare type Types =
    '('|'{'|'y'|'b'|'n'|'q'|'i'|'u'|'x'|'t'|'d'|'s'|'o'|'g'|'a'|'r'|'v'|'e'|'h'|'m'|'*'|'?'|'@'|'&'|'^';

export interface Type {
  type: Types
  child?: Type[]
}

export declare type ObjectPath = string;

export function nativeType(t: Type|string, input: boolean = false) {
  if (typeof t === 'string') {
    return parseSignature(t).map(v => nativeType(v, input)).join(', ')
  }

  switch (t.type) {
    case 'b': // boolean
      return 'boolean';
    case 'y': // int8
    case 'n': // sint16
    case 'q': // int16
    case 'u': // int32
    case 'i': // sint32
    case 'x': // signed long
    case 't': // unsigned long
    case 'd': // double
      return 'number';
    case 'g': // string
    case 's':
      return 'string';
    case 'o':
      return 'ObjectPath';
    case 'h':
      return 'any'
    case 'v':
      if (input) {
        return '[/*signature*/string,any]';
      }
      return '[Type[],any[]]';
    case 'a':
      if (t.child && t.child.length == 1) {
        if (t.child[0].type == 'y') {
          return `Buffer`;
        }
        /*if (['{', '('].indexOf(t.child[0].type) >= 0) {
          return `${nativeType(t.child[0])}`
        }*/
        return `${nativeType(t.child[0], input)}[]`
      }
      break;
    case '(':
      return `[${t.child.map(c => nativeType(c, input)).join(',')}]`
    case '{':
      return `[${t.child.map(c => nativeType(c, input)).join(',')}]`

  }
  console.log(`Unhandled type`, t);
  return 'any';
}

export function parseSignature(signature): Type[] {
  let index = 0;
  function next(): Types {
    if (index < signature.length) {
      let c = signature[index];
      ++index;
      return c;
    }
    return null;
  }

  function parseOne(c: Types): Type {
    function checkNotEnd(c: Types) {
      if (!c) throw new Error('Bad signature: unexpected end');
      return c;
    }

    if (!knownTypes[c])
      throw new Error(`Unknown type: "${c}" in signature "${signature}"`);

    let ele;
    let res: Type = { type: c, child: [] };
    switch (c) {
      case 'a': // array
        ele = next();
        checkNotEnd(ele);
        res.child.push(parseOne(ele));
        return res;
      case '{': // dict entry
      case '(': // struct
        while ((ele = next()) !== null && ele !== match[c])
          res.child.push(parseOne(ele));
        checkNotEnd(ele);
        return res;
    }
    return res;
  }

  let ret = [];
  let c;
  while ((c = next()) !== null) ret.push(parseOne(c));
  return ret;
}

const fromTree = function(tree) {
  var res = '';
  for (var i = 0; i < tree.length; ++i) {
    if (tree[i].child.length === 0) {
      res += tree[i].type;
    } else {
      if (tree[i].type === 'a') {
        res += `a${fromTree(tree[i].child)}`;
      } else {
        res += tree[i].type + fromTree(tree[i].child) + match[tree[i].type];
      }
    }
  }
  return res;
}
