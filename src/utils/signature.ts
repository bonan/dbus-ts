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
  let res = '';
  for (let i = 0; i < tree.length; ++i) {
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
