var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e3) {
    throw err = [e3], e3;
  }
};
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e3) {
    throw mod = 0, e3;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/devalue/src/constants.js
var UNDEFINED, HOLE, NAN, POSITIVE_INFINITY, NEGATIVE_INFINITY, NEGATIVE_ZERO, SPARSE, MAX_ARRAY_LEN, MAX_ARRAY_INDEX;
var init_constants = __esm({
  "node_modules/devalue/src/constants.js"() {
    init_modules_watch_stub();
    UNDEFINED = -1;
    HOLE = -2;
    NAN = -3;
    POSITIVE_INFINITY = -4;
    NEGATIVE_INFINITY = -5;
    NEGATIVE_ZERO = -6;
    SPARSE = -7;
    MAX_ARRAY_LEN = 2 ** 32 - 1;
    MAX_ARRAY_INDEX = MAX_ARRAY_LEN - 1;
  }
});

// node_modules/devalue/src/utils.js
function is_primitive(thing) {
  return thing === null || typeof thing !== "object" && typeof thing !== "function";
}
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getPrototypeOf(proto) === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    const char = str[i];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i) + replacement;
      last_pos = i + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}
function enumerable_symbols(object) {
  return Object.getOwnPropertySymbols(object).filter(
    (symbol) => Object.getOwnPropertyDescriptor(object, symbol).enumerable
  );
}
function stringify_key(key2) {
  return is_identifier.test(key2) ? "." + key2 : "[" + JSON.stringify(key2) + "]";
}
function is_valid_array_index(n2) {
  if (!Number.isInteger(n2)) return false;
  if (n2 < 0) return false;
  if (n2 > MAX_ARRAY_INDEX) return false;
  return true;
}
function is_valid_array_len(n2) {
  if (!Number.isInteger(n2)) return false;
  if (n2 < 0) return false;
  if (n2 > MAX_ARRAY_LEN) return false;
  return true;
}
function is_valid_array_index_string(s3) {
  if (s3.length === 0) return false;
  if (s3.length > 1 && s3.charCodeAt(0) === 48) return false;
  for (let i = 0; i < s3.length; i++) {
    const c2 = s3.charCodeAt(i);
    if (c2 < 48 || c2 > 57) return false;
  }
  return is_valid_array_index(+s3);
}
function valid_array_indices(array2) {
  const keys = Object.keys(array2);
  for (var i = keys.length - 1; i >= 0; i--) {
    if (is_valid_array_index_string(keys[i])) {
      break;
    }
  }
  keys.length = i + 1;
  return keys;
}
var escaped, DevalueError, object_proto_names, is_identifier;
var init_utils = __esm({
  "node_modules/devalue/src/utils.js"() {
    init_modules_watch_stub();
    init_constants();
    escaped = {
      "<": "\\u003C",
      "\\": "\\\\",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    DevalueError = class extends Error {
      static {
        __name(this, "DevalueError");
      }
      /**
       * @param {string} message
       * @param {string[]} keys
       * @param {any} [value] - The value that failed to be serialized
       * @param {any} [root] - The root value being serialized
       */
      constructor(message, keys, value, root2) {
        super(message);
        this.name = "DevalueError";
        this.path = keys.join("");
        this.value = value;
        this.root = root2;
      }
    };
    __name(is_primitive, "is_primitive");
    object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    __name(is_plain_object, "is_plain_object");
    __name(get_type, "get_type");
    __name(get_escaped_char, "get_escaped_char");
    __name(stringify_string, "stringify_string");
    __name(enumerable_symbols, "enumerable_symbols");
    is_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    __name(stringify_key, "stringify_key");
    __name(is_valid_array_index, "is_valid_array_index");
    __name(is_valid_array_len, "is_valid_array_len");
    __name(is_valid_array_index_string, "is_valid_array_index_string");
    __name(valid_array_indices, "valid_array_indices");
  }
});

// node_modules/devalue/src/uneval.js
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing, (value2) => uneval(value2, replacer));
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      if (typeof thing === "function") {
        throw new DevalueError(`Cannot stringify a function`, keys, thing, value);
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
        case "URL":
        case "URLSearchParams":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(`.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`);
            walk(value2);
            keys.pop();
          }
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Float16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
        case "DataView":
          walk(thing.buffer);
          return;
        case "ArrayBuffer":
          return;
        case "Temporal.Duration":
        case "Temporal.Instant":
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.PlainMonthDay":
        case "Temporal.PlainYearMonth":
        case "Temporal.ZonedDateTime":
          return;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(`Cannot stringify arbitrary non-POJOs`, keys, thing, value);
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(`Cannot stringify POJOs with symbolic keys`, keys, thing, value);
          }
          for (const key2 of Object.keys(thing)) {
            if (key2 === "__proto__") {
              throw new DevalueError(
                `Cannot stringify objects with __proto__ keys`,
                keys,
                thing,
                value
              );
            }
            keys.push(stringify_key(key2));
            walk(thing[key2]);
            keys.pop();
          }
      }
    } else if (typeof thing === "symbol") {
      throw new DevalueError(`Cannot stringify a Symbol primitive`, keys, thing, value);
    }
  }
  __name(walk, "walk");
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify4(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
      case "BigInt":
        return `Object(${stringify4(thing.valueOf())})`;
      case "RegExp":
        const { source: source2, flags: flags2 } = thing;
        return flags2 ? `new RegExp(${stringify_string(source2)},"${flags2}")` : `new RegExp(${stringify_string(source2)})`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "URL":
        return `new URL(${stringify_string(thing.toString())})`;
      case "URLSearchParams":
        return `new URLSearchParams(${stringify_string(thing.toString())})`;
      case "Array": {
        let has_holes = false;
        let result = "[";
        for (let i = 0; i < thing.length; i += 1) {
          if (i > 0) result += ",";
          if (Object.hasOwn(thing, i)) {
            result += stringify4(thing[i]);
          } else if (!has_holes) {
            const populated_keys = valid_array_indices(
              /** @type {any[]} */
              thing
            );
            const population = populated_keys.length;
            const d = String(thing.length).length;
            const hole_cost = thing.length + 2;
            const sparse_cost = 25 + d + population * (d + 2);
            if (hole_cost > sparse_cost) {
              const entries = populated_keys.map((k) => `${k}:${stringify4(thing[k])}`).join(",");
              return `Object.assign(Array(${thing.length}),{${entries}})`;
            }
            has_holes = true;
            i -= 1;
          }
        }
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return result + tail + "]";
      }
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify4).join(",")}])`;
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Float16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "BigInt64Array":
      case "BigUint64Array": {
        let str2 = `new ${type}`;
        if (!names.has(thing.buffer)) {
          const array2 = new thing.constructor(thing.buffer);
          str2 += `([${array2}])`;
        } else {
          str2 += `(${stringify4(thing.buffer)})`;
        }
        if (thing.byteLength !== thing.buffer.byteLength) {
          const start = thing.byteOffset / thing.BYTES_PER_ELEMENT;
          const end = start + thing.length;
          str2 += `.subarray(${start},${end})`;
        }
        return str2;
      }
      case "DataView": {
        let str2 = `new DataView`;
        if (!names.has(thing.buffer)) {
          str2 += `(new Uint8Array([${new Uint8Array(thing.buffer)}]).buffer`;
        } else {
          str2 += `(${stringify4(thing.buffer)}`;
        }
        if (thing.byteLength !== thing.buffer.byteLength) {
          str2 += `,${thing.startOffset},${thing.byteLength}`;
        }
        return str2 + ")";
      }
      case "ArrayBuffer": {
        const ui8 = new Uint8Array(thing);
        return `new Uint8Array([${ui8.toString()}]).buffer`;
      }
      case "Temporal.Duration":
      case "Temporal.Instant":
      case "Temporal.PlainDate":
      case "Temporal.PlainTime":
      case "Temporal.PlainDateTime":
      case "Temporal.PlainMonthDay":
      case "Temporal.PlainYearMonth":
      case "Temporal.ZonedDateTime":
        return `${type}.from(${stringify_string(thing.toString())})`;
      default:
        const keys2 = Object.keys(thing);
        const obj = keys2.map((key2) => `${safe_key(key2)}:${stringify4(thing[key2])}`).join(",");
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return keys2.length > 0 ? `{${obj},__proto__:null}` : `{__proto__:null}`;
        }
        return `{${obj}}`;
    }
  }
  __name(stringify4, "stringify");
  const str = stringify4(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "BigInt":
          values.push(`Object(${stringify4(thing.valueOf())})`);
          break;
        case "RegExp":
          const { source: source2, flags: flags2 } = thing;
          const regexp = flags2 ? `new RegExp(${stringify_string(source2)},"${flags2}")` : `new RegExp(${stringify_string(source2)})`;
          values.push(regexp);
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "URL":
          values.push(`new URL(${stringify_string(thing.toString())})`);
          break;
        case "URLSearchParams":
          values.push(`new URLSearchParams(${stringify_string(thing.toString())})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify4(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify4(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify4(k)}, ${stringify4(v)})`).join(".")}`
          );
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Float16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          let str2 = `new ${type}`;
          if (!names.has(thing.buffer)) {
            const array2 = new thing.constructor(thing.buffer);
            str2 += `([${array2}])`;
          } else {
            str2 += `(${stringify4(thing.buffer)})`;
          }
          if (thing.byteLength !== thing.buffer.byteLength) {
            const start = thing.byteOffset / thing.BYTES_PER_ELEMENT;
            const end = start + thing.length;
            str2 += `.subarray(${start},${end})`;
          }
          values.push(`{}`);
          statements.push(`${name}=${str2}`);
          break;
        }
        case "DataView": {
          let str2 = `new DataView`;
          if (!names.has(thing.buffer)) {
            str2 += `(new Uint8Array([${new Uint8Array(thing.buffer)}]).buffer`;
          } else {
            str2 += `(${stringify4(thing.buffer)}`;
          }
          if (thing.byteLength !== thing.buffer.byteLength) {
            str2 += `,${thing.byteOffset},${thing.byteLength}`;
          }
          str2 += ")";
          values.push(`{}`);
          statements.push(`${name}=${str2}`);
          break;
        }
        case "ArrayBuffer":
          values.push(`new Uint8Array([${new Uint8Array(thing)}]).buffer`);
          break;
        default:
          values.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach((key2) => {
            statements.push(`${name}${safe_prop(key2)}=${stringify4(thing[key2])}`);
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(";")}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c2) {
  return escaped[c2] || c2;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive(thing) {
  const type = typeof thing;
  if (type === "string") return stringify_string(thing);
  if (thing === void 0) return "void 0";
  if (thing === 0 && 1 / thing < 0) return "-0";
  const str = String(thing);
  if (type === "number") return str.replace(/^(-)?0\./, "$1.");
  if (type === "bigint") return thing + "n";
  return str;
}
var chars, unsafe_chars, reserved;
var init_uneval = __esm({
  "node_modules/devalue/src/uneval.js"() {
    init_modules_watch_stub();
    init_utils();
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
    unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
    reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
    __name(uneval, "uneval");
    __name(get_name, "get_name");
    __name(escape_unsafe_char, "escape_unsafe_char");
    __name(escape_unsafe_chars, "escape_unsafe_chars");
    __name(safe_key, "safe_key");
    __name(safe_prop, "safe_prop");
    __name(stringify_primitive, "stringify_primitive");
  }
});

// node_modules/devalue/src/base64.js
function encode_native(array_buffer) {
  return new Uint8Array(array_buffer).toBase64();
}
function decode_native(base64) {
  return Uint8Array.fromBase64(base64).buffer;
}
function encode_buffer(array_buffer) {
  return Buffer.from(array_buffer).toString("base64");
}
function decode_buffer(base64) {
  return Uint8Array.from(Buffer.from(base64, "base64")).buffer;
}
function encode_legacy(array_buffer) {
  const array2 = new Uint8Array(array_buffer);
  let binary = "";
  const chunk_size = 32768;
  for (let i = 0; i < array2.length; i += chunk_size) {
    const chunk = array2.subarray(i, i + chunk_size);
    binary += String.fromCharCode.apply(null, chunk);
  }
  return btoa(binary);
}
function decode_legacy(base64) {
  const binary_string = atob(base64);
  const len = binary_string.length;
  const array2 = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    array2[i] = binary_string.charCodeAt(i);
  }
  return array2.buffer;
}
var native, buffer, encode64, decode64;
var init_base64 = __esm({
  "node_modules/devalue/src/base64.js"() {
    init_modules_watch_stub();
    __name(encode_native, "encode_native");
    __name(decode_native, "decode_native");
    __name(encode_buffer, "encode_buffer");
    __name(decode_buffer, "decode_buffer");
    __name(encode_legacy, "encode_legacy");
    __name(decode_legacy, "decode_legacy");
    native = typeof Uint8Array.fromBase64 === "function";
    buffer = typeof process === "object" && process.versions?.node !== void 0;
    encode64 = native ? encode_native : buffer ? encode_buffer : encode_legacy;
    decode64 = native ? decode_native : buffer ? decode_buffer : decode_legacy;
  }
});

// node_modules/devalue/src/parse.js
function parse(serialized, revivers) {
  return unflatten(JSON.parse(serialized), revivers);
}
function unflatten(parsed, revivers) {
  if (typeof parsed === "number") return hydrate2(parsed, true);
  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new Error("Invalid input");
  }
  const values = (
    /** @type {any[]} */
    parsed
  );
  const hydrated = Array(values.length);
  let hydrating2 = null;
  function hydrate2(index5, standalone = false) {
    if (index5 === UNDEFINED) return void 0;
    if (index5 === NAN) return NaN;
    if (index5 === POSITIVE_INFINITY) return Infinity;
    if (index5 === NEGATIVE_INFINITY) return -Infinity;
    if (index5 === NEGATIVE_ZERO) return -0;
    if (standalone || typeof index5 !== "number") {
      throw new Error(`Invalid input`);
    }
    if (index5 in hydrated) return hydrated[index5];
    const value = values[index5];
    if (!value || typeof value !== "object") {
      hydrated[index5] = value;
    } else if (Array.isArray(value)) {
      if (typeof value[0] === "string") {
        const type = value[0];
        const reviver = revivers && Object.hasOwn(revivers, type) ? revivers[type] : void 0;
        if (reviver) {
          let i = value[1];
          if (typeof i !== "number") {
            i = values.push(value[1]) - 1;
          }
          hydrating2 ??= /* @__PURE__ */ new Set();
          if (hydrating2.has(i)) {
            throw new Error("Invalid circular reference");
          }
          hydrating2.add(i);
          hydrated[index5] = reviver(hydrate2(i));
          hydrating2.delete(i);
          return hydrated[index5];
        }
        switch (type) {
          case "Date":
            hydrated[index5] = new Date(value[1]);
            break;
          case "Set":
            const set2 = /* @__PURE__ */ new Set();
            hydrated[index5] = set2;
            for (let i = 1; i < value.length; i += 1) {
              set2.add(hydrate2(value[i]));
            }
            break;
          case "Map":
            const map = /* @__PURE__ */ new Map();
            hydrated[index5] = map;
            for (let i = 1; i < value.length; i += 2) {
              map.set(hydrate2(value[i]), hydrate2(value[i + 1]));
            }
            break;
          case "RegExp":
            hydrated[index5] = new RegExp(value[1], value[2]);
            break;
          case "Object": {
            const wrapped_index = value[1];
            if (typeof values[wrapped_index] === "object" && values[wrapped_index][0] !== "BigInt") {
              throw new Error("Invalid input");
            }
            hydrated[index5] = Object(hydrate2(wrapped_index));
            break;
          }
          case "BigInt":
            hydrated[index5] = BigInt(value[1]);
            break;
          case "null":
            const obj = /* @__PURE__ */ Object.create(null);
            hydrated[index5] = obj;
            for (let i = 1; i < value.length; i += 2) {
              if (value[i] === "__proto__") {
                throw new Error("Cannot parse an object with a `__proto__` property");
              }
              obj[value[i]] = hydrate2(value[i + 1]);
            }
            break;
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Float16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array":
          case "DataView": {
            if (values[value[1]][0] !== "ArrayBuffer") {
              throw new Error("Invalid data");
            }
            const TypedArrayConstructor = globalThis[type];
            const buffer2 = hydrate2(value[1]);
            hydrated[index5] = value[2] !== void 0 ? new TypedArrayConstructor(buffer2, value[2], value[3]) : new TypedArrayConstructor(buffer2);
            break;
          }
          case "ArrayBuffer": {
            const base64 = value[1];
            if (typeof base64 !== "string") {
              throw new Error("Invalid ArrayBuffer encoding");
            }
            const arraybuffer = decode64(base64);
            hydrated[index5] = arraybuffer;
            break;
          }
          case "Temporal.Duration":
          case "Temporal.Instant":
          case "Temporal.PlainDate":
          case "Temporal.PlainTime":
          case "Temporal.PlainDateTime":
          case "Temporal.PlainMonthDay":
          case "Temporal.PlainYearMonth":
          case "Temporal.ZonedDateTime": {
            const temporalName = type.slice(9);
            hydrated[index5] = Temporal[temporalName].from(value[1]);
            break;
          }
          case "URL": {
            const url = new URL(value[1]);
            hydrated[index5] = url;
            break;
          }
          case "URLSearchParams": {
            const url = new URLSearchParams(value[1]);
            hydrated[index5] = url;
            break;
          }
          default:
            throw new Error(`Unknown type ${type}`);
        }
      } else if (value[0] === SPARSE) {
        const len = value[1];
        if (!is_valid_array_len(len)) {
          throw new Error("Invalid input");
        }
        const array2 = [];
        hydrated[index5] = array2;
        array2[MAX_ARRAY_INDEX] = void 0;
        delete array2[MAX_ARRAY_INDEX];
        for (let i = 2; i < value.length; i += 2) {
          const idx = value[i];
          if (!is_valid_array_index(idx) || idx >= len) {
            throw new Error("Invalid input");
          }
          array2[idx] = hydrate2(value[i + 1]);
        }
        array2.length = len;
      } else {
        const array2 = new Array(value.length);
        hydrated[index5] = array2;
        for (let i = 0; i < value.length; i += 1) {
          const n2 = value[i];
          if (n2 === HOLE) continue;
          array2[i] = hydrate2(n2);
        }
      }
    } else {
      const object = {};
      hydrated[index5] = object;
      for (const key2 of Object.keys(value)) {
        if (key2 === "__proto__") {
          throw new Error("Cannot parse an object with a `__proto__` property");
        }
        const n2 = value[key2];
        object[key2] = hydrate2(n2);
      }
    }
    return hydrated[index5];
  }
  __name(hydrate2, "hydrate");
  return hydrate2(0);
}
var init_parse = __esm({
  "node_modules/devalue/src/parse.js"() {
    init_modules_watch_stub();
    init_base64();
    init_constants();
    init_utils();
    __name(parse, "parse");
    __name(unflatten, "unflatten");
  }
});

// node_modules/devalue/src/stringify.js
function stringify(value, reducers) {
  const stringified = run(false, value, reducers);
  return typeof stringified === "string" ? stringified : `[${stringified.join(",")}]`;
}
function run(async, value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  if (reducers) {
    for (const key2 of Object.getOwnPropertyNames(reducers)) {
      custom.push({ key: key2, fn: reducers[key2] });
    }
  }
  const keys = [];
  let p = 0;
  function flatten(thing, index6) {
    if (thing === void 0) return UNDEFINED;
    if (Number.isNaN(thing)) return NAN;
    if (thing === Infinity) return POSITIVE_INFINITY;
    if (thing === -Infinity) return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO;
    if (indexes.has(thing)) return (
      /** @type {number} */
      indexes.get(thing)
    );
    index6 ??= p++;
    indexes.set(thing, index6);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index6] = `["${key2}",${flatten(value2)}]`;
        return index6;
      }
    }
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys, thing, value);
    } else if (typeof thing === "symbol") {
      throw new DevalueError(`Cannot stringify a Symbol primitive`, keys, thing, value);
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else if (typeof thing.then === "function") {
      if (!async) {
        throw new DevalueError(
          `Cannot stringify a Promise or thenable \u2014 use stringifyAsync instead`,
          keys,
          thing,
          value
        );
      }
      str = Promise.resolve(thing).then((value2) => {
        const i = flatten(value2, index6);
        if (i < 0) stringified[index6] = i;
      });
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "BigInt":
          str = `["Object",${flatten(thing.valueOf())}]`;
          break;
        case "Date":
          const valid = !isNaN(thing.getDate());
          str = `["Date","${valid ? thing.toISOString() : ""}"]`;
          break;
        case "URL":
          str = `["URL",${stringify_string(thing.toString())}]`;
          break;
        case "URLSearchParams":
          str = `["URLSearchParams",${stringify_string(thing.toString())}]`;
          break;
        case "RegExp":
          const { source: source2, flags: flags2 } = thing;
          str = flags2 ? `["RegExp",${stringify_string(source2)},"${flags2}"]` : `["RegExp",${stringify_string(source2)}]`;
          break;
        case "Array": {
          let mostly_dense = false;
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0) str += ",";
            if (Object.hasOwn(thing, i)) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else if (mostly_dense) {
              str += HOLE;
            } else {
              const populated_keys = valid_array_indices(
                /** @type {any[]} */
                thing
              );
              const population = populated_keys.length;
              const d = String(thing.length).length;
              const hole_cost = (thing.length - population) * 3;
              const sparse_cost = 4 + d + population * (d + 1);
              if (hole_cost > sparse_cost) {
                str = "[" + SPARSE + "," + thing.length;
                for (let j = 0; j < populated_keys.length; j++) {
                  const key2 = populated_keys[j];
                  keys.push(`[${key2}]`);
                  str += "," + key2 + "," + flatten(thing[key2]);
                  keys.pop();
                }
                break;
              } else {
                mostly_dense = true;
                str += HOLE;
              }
            }
          }
          str += "]";
          break;
        }
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(`.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`);
            str += `,${flatten(key2)},${flatten(value2)}`;
            keys.pop();
          }
          str += "]";
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Float16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
        case "DataView": {
          const typedArray = thing;
          str = '["' + type + '",' + flatten(typedArray.buffer);
          if (typedArray.byteLength !== typedArray.buffer.byteLength) {
            str += `,${typedArray.byteOffset},${typedArray.length}`;
          }
          str += "]";
          break;
        }
        case "ArrayBuffer": {
          const arraybuffer = thing;
          const base64 = encode64(arraybuffer);
          str = `["ArrayBuffer","${base64}"]`;
          break;
        }
        case "Temporal.Duration":
        case "Temporal.Instant":
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.PlainMonthDay":
        case "Temporal.PlainYearMonth":
        case "Temporal.ZonedDateTime":
          str = `["${type}",${stringify_string(thing.toString())}]`;
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(`Cannot stringify arbitrary non-POJOs`, keys, thing, value);
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(`Cannot stringify POJOs with symbolic keys`, keys, thing, value);
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 of Object.keys(thing)) {
              if (key2 === "__proto__") {
                throw new DevalueError(
                  `Cannot stringify objects with __proto__ keys`,
                  keys,
                  thing,
                  value
                );
              }
              keys.push(stringify_key(key2));
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 of Object.keys(thing)) {
              if (key2 === "__proto__") {
                throw new DevalueError(
                  `Cannot stringify objects with __proto__ keys`,
                  keys,
                  thing,
                  value
                );
              }
              if (started) str += ",";
              started = true;
              keys.push(stringify_key(key2));
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index6] = str;
    return index6;
  }
  __name(flatten, "flatten");
  const index5 = flatten(value);
  if (index5 < 0) return `${index5}`;
  return stringified;
}
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string") return stringify_string(thing);
  if (thing === void 0) return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO.toString();
  if (type === "bigint") return `["BigInt","${thing}"]`;
  return String(thing);
}
var init_stringify = __esm({
  "node_modules/devalue/src/stringify.js"() {
    init_modules_watch_stub();
    init_utils();
    init_constants();
    init_base64();
    __name(stringify, "stringify");
    __name(run, "run");
    __name(stringify_primitive2, "stringify_primitive");
  }
});

// node_modules/devalue/index.js
var init_devalue = __esm({
  "node_modules/devalue/index.js"() {
    init_modules_watch_stub();
    init_uneval();
    init_parse();
    init_stringify();
  }
});

// .svelte-kit/output/server/chunks/utils2.js
function get_relative_path(from, to) {
  const from_parts = from.split(/[/\\]/);
  const to_parts = to.split(/[/\\]/);
  from_parts.pop();
  while (from_parts[0] === to_parts[0]) {
    from_parts.shift();
    to_parts.shift();
  }
  let i = from_parts.length;
  while (i--) from_parts[i] = "..";
  return from_parts.concat(to_parts).join("/");
}
function base64_encode(bytes) {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(bytes).toString("base64");
  }
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
function base64_decode(encoded) {
  if (globalThis.Buffer) {
    const buffer2 = globalThis.Buffer.from(encoded, "base64");
    return new Uint8Array(buffer2);
  }
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}
var text_encoder;
var init_utils2 = __esm({
  ".svelte-kit/output/server/chunks/utils2.js"() {
    init_modules_watch_stub();
    text_encoder = new TextEncoder();
    __name(get_relative_path, "get_relative_path");
    __name(base64_encode, "base64_encode");
    __name(base64_decode, "base64_decode");
  }
});

// node_modules/@sveltejs/kit/src/exports/internal/remote-functions.js
var init_remote_functions = __esm({
  "node_modules/@sveltejs/kit/src/exports/internal/remote-functions.js"() {
    init_modules_watch_stub();
  }
});

// node_modules/@sveltejs/kit/src/exports/internal/index.js
var HttpError, Redirect, SvelteKitError, ActionFailure;
var init_internal = __esm({
  "node_modules/@sveltejs/kit/src/exports/internal/index.js"() {
    init_modules_watch_stub();
    init_remote_functions();
    HttpError = class {
      static {
        __name(this, "HttpError");
      }
      /**
       * @param {number} status
       * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
       */
      constructor(status, body) {
        this.status = status;
        if (typeof body === "string") {
          this.body = { message: body };
        } else if (body) {
          this.body = body;
        } else {
          this.body = { message: `Error: ${status}` };
        }
      }
      toString() {
        return JSON.stringify(this.body);
      }
    };
    Redirect = class {
      static {
        __name(this, "Redirect");
      }
      /**
       * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
       * @param {string} location
       */
      constructor(status, location) {
        try {
          new Headers({ location });
        } catch {
          throw new Error(
            `Invalid redirect location ${JSON.stringify(location)}: this string contains characters that cannot be used in HTTP headers`
          );
        }
        this.status = status;
        this.location = location;
      }
    };
    SvelteKitError = class extends Error {
      static {
        __name(this, "SvelteKitError");
      }
      /**
       * @param {number} status
       * @param {string} text
       * @param {string} message
       */
      constructor(status, text2, message) {
        super(message);
        this.status = status;
        this.text = text2;
      }
    };
    ActionFailure = class {
      static {
        __name(this, "ActionFailure");
      }
      /**
       * @param {number} status
       * @param {T} data
       */
      constructor(status, data) {
        this.status = status;
        this.data = data;
      }
    };
  }
});

// node_modules/@sveltejs/kit/src/runtime/server/constants.js
var IN_WEBCONTAINER;
var init_constants2 = __esm({
  "node_modules/@sveltejs/kit/src/runtime/server/constants.js"() {
    init_modules_watch_stub();
    IN_WEBCONTAINER = !!globalThis.process?.versions?.webcontainer;
  }
});

// node_modules/@sveltejs/kit/src/exports/internal/event.js
function with_request_store(store, fn) {
  try {
    sync_store = store;
    return als ? als.run(store, fn) : fn();
  } finally {
    if (!IN_WEBCONTAINER) {
      sync_store = null;
    }
  }
}
var sync_store, als;
var init_event = __esm({
  "node_modules/@sveltejs/kit/src/exports/internal/event.js"() {
    init_modules_watch_stub();
    init_constants2();
    sync_store = null;
    import("node:async_hooks").then((hooks) => als = new hooks.AsyncLocalStorage()).catch(() => {
    });
    __name(with_request_store, "with_request_store");
  }
});

// node_modules/@sveltejs/kit/src/exports/internal/server.js
function merge_tracing(event_like, current2) {
  return {
    ...event_like,
    tracing: {
      ...event_like.tracing,
      current: current2
    }
  };
}
var init_server = __esm({
  "node_modules/@sveltejs/kit/src/exports/internal/server.js"() {
    init_modules_watch_stub();
    init_event();
    __name(merge_tracing, "merge_tracing");
  }
});

// .svelte-kit/output/server/chunks/false.js
var browser;
var init_false = __esm({
  ".svelte-kit/output/server/chunks/false.js"() {
    init_modules_watch_stub();
    browser = false;
  }
});

// .svelte-kit/output/server/chunks/exports.js
function resolve(base2, path) {
  if (path[0] === "/" && path[1] === "/") return path;
  let url = new URL(base2, internal);
  url = new URL(path, url);
  return url.protocol === internal.protocol ? url.pathname + url.search + url.hash : url.href;
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore") return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
function make_trackable(url, callback, search_params_callback, allow_hash = false) {
  const tracked = new URL(url);
  Object.defineProperty(tracked, "searchParams", {
    value: new Proxy(tracked.searchParams, {
      get(obj, key2) {
        if (key2 === "get" || key2 === "getAll" || key2 === "has") {
          return (param, ...rest) => {
            search_params_callback(param);
            return obj[key2](param, ...rest);
          };
        }
        callback();
        const value = Reflect.get(obj, key2);
        return typeof value === "function" ? value.bind(obj) : value;
      }
    }),
    enumerable: true,
    configurable: true
  });
  const tracked_url_properties = ["href", "pathname", "search", "toString", "toJSON"];
  if (allow_hash) tracked_url_properties.push("hash");
  for (const property of tracked_url_properties) {
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return url[property];
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = (_depth, opts, inspect) => {
      return inspect(url, opts);
    };
    tracked.searchParams[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = (_depth, opts, inspect) => {
      return inspect(url.searchParams, opts);
    };
  }
  if (!allow_hash) {
    disable_hash(tracked);
  }
  return tracked;
}
function disable_hash(url) {
  allow_nodejs_console_log(url);
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  allow_nodejs_console_log(url);
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
function allow_nodejs_console_log(url) {
  {
    url[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = (_depth, opts, inspect) => {
      return inspect(new URL(url), opts);
    };
  }
}
function validator(expected) {
  function validate(module, file) {
    if (!module) return;
    for (const key2 in module) {
      if (key2[0] === "_" || expected.has(key2)) continue;
      const values = [...expected.values()];
      const hint = hint_for_supported_files(key2, file?.slice(file.lastIndexOf("."))) ?? `valid exports are ${values.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key2}'${file ? ` in ${file}` : ""} (${hint})`);
    }
  }
  __name(validate, "validate");
  return validate;
}
function hint_for_supported_files(key2, ext = ".js") {
  const supported_files = [];
  if (valid_layout_exports.has(key2)) {
    supported_files.push(`+layout${ext}`);
  }
  if (valid_page_exports.has(key2)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_layout_server_exports.has(key2)) {
    supported_files.push(`+layout.server${ext}`);
  }
  if (valid_page_server_exports.has(key2)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.has(key2)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key2}' is a valid export in ${supported_files.slice(0, -1).join(", ")}${supported_files.length > 1 ? " or " : ""}${supported_files.at(-1)}`;
  }
}
var internal, valid_layout_exports, valid_page_exports, valid_layout_server_exports, valid_page_server_exports, valid_server_exports, validate_layout_exports, validate_page_exports, validate_layout_server_exports, validate_page_server_exports, validate_server_exports;
var init_exports = __esm({
  ".svelte-kit/output/server/chunks/exports.js"() {
    init_modules_watch_stub();
    internal = new URL("sveltekit-internal://");
    __name(resolve, "resolve");
    __name(normalize_path, "normalize_path");
    __name(decode_pathname, "decode_pathname");
    __name(decode_params, "decode_params");
    __name(make_trackable, "make_trackable");
    __name(disable_hash, "disable_hash");
    __name(disable_search, "disable_search");
    __name(allow_nodejs_console_log, "allow_nodejs_console_log");
    __name(validator, "validator");
    __name(hint_for_supported_files, "hint_for_supported_files");
    valid_layout_exports = /* @__PURE__ */ new Set([
      "load",
      "prerender",
      "csr",
      "ssr",
      "trailingSlash",
      "config"
    ]);
    valid_page_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
    valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports]);
    valid_page_server_exports = /* @__PURE__ */ new Set([...valid_layout_server_exports, "actions", "entries"]);
    valid_server_exports = /* @__PURE__ */ new Set([
      "GET",
      "POST",
      "PATCH",
      "PUT",
      "DELETE",
      "OPTIONS",
      "HEAD",
      "fallback",
      "prerender",
      "trailingSlash",
      "config",
      "entries"
    ]);
    validate_layout_exports = validator(valid_layout_exports);
    validate_page_exports = validator(valid_page_exports);
    validate_layout_server_exports = validator(valid_layout_server_exports);
    validate_page_server_exports = validator(valid_page_server_exports);
    validate_server_exports = validator(valid_server_exports);
  }
});

// node_modules/clsx/dist/clsx.mjs
function r(e3) {
  var t3, f, n2 = "";
  if ("string" == typeof e3 || "number" == typeof e3) n2 += e3;
  else if ("object" == typeof e3) if (Array.isArray(e3)) {
    var o2 = e3.length;
    for (t3 = 0; t3 < o2; t3++) e3[t3] && (f = r(e3[t3])) && (n2 && (n2 += " "), n2 += f);
  } else for (f in e3) e3[f] && (n2 && (n2 += " "), n2 += f);
  return n2;
}
function clsx() {
  for (var e3, t3, f = 0, n2 = "", o2 = arguments.length; f < o2; f++) (e3 = arguments[f]) && (t3 = r(e3)) && (n2 && (n2 += " "), n2 += t3);
  return n2;
}
var init_clsx = __esm({
  "node_modules/clsx/dist/clsx.mjs"() {
    init_modules_watch_stub();
    __name(r, "r");
    __name(clsx, "clsx");
  }
});

// .svelte-kit/output/server/chunks/index.js
function run_all(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]();
  }
}
function deferred() {
  var resolve2;
  var reject;
  var promise = new Promise((res, rej) => {
    resolve2 = res;
    reject = rej;
  });
  return { promise, resolve: resolve2, reject };
}
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}
function lifecycle_outside_component(name) {
  {
    throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
  }
}
function effect_update_depth_exceeded() {
  {
    throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
  }
}
function hydration_failed() {
  {
    throw new Error(`https://svelte.dev/e/hydration_failed`);
  }
}
function state_descriptors_fixed() {
  {
    throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
  }
}
function state_prototype_fixed() {
  {
    throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
  }
}
function state_unsafe_mutation() {
  {
    throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
  }
}
function svelte_boundary_reset_onerror() {
  {
    throw new Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
  }
}
function set_component_context(context2) {
  component_context = context2;
}
function push$1(props, runes = false, fn) {
  component_context = {
    p: component_context,
    i: false,
    c: null,
    e: null,
    s: props,
    x: null,
    r: (
      /** @type {Effect} */
      active_effect
    ),
    l: null
  };
}
function pop$1(component5) {
  var context2 = (
    /** @type {ComponentContext} */
    component_context
  );
  var effects = context2.e;
  if (effects !== null) {
    context2.e = null;
    for (var fn of effects) {
      create_user_effect(fn);
    }
  }
  context2.i = true;
  component_context = context2.p;
  return (
    /** @type {T} */
    {}
  );
}
function is_runes() {
  return true;
}
function run_micro_tasks() {
  var tasks = micro_tasks;
  micro_tasks = [];
  run_all(tasks);
}
function queue_micro_task(fn) {
  if (micro_tasks.length === 0 && !is_flushing_sync) {
    var tasks = micro_tasks;
    queueMicrotask(() => {
      if (tasks === micro_tasks) run_micro_tasks();
    });
  }
  micro_tasks.push(fn);
}
function flush_tasks() {
  while (micro_tasks.length > 0) {
    run_micro_tasks();
  }
}
function derived_inert() {
  {
    console.warn(`https://svelte.dev/e/derived_inert`);
  }
}
function hydration_mismatch(location) {
  {
    console.warn(`https://svelte.dev/e/hydration_mismatch`);
  }
}
function svelte_boundary_reset_noop() {
  {
    console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
  }
}
function proxy(value) {
  if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
    return value;
  }
  const prototype = get_prototype_of(value);
  if (prototype !== object_prototype && prototype !== array_prototype) {
    return value;
  }
  var sources = /* @__PURE__ */ new Map();
  var is_proxied_array = is_array(value);
  var version = /* @__PURE__ */ state(0);
  var parent_version = update_version;
  var with_parent = /* @__PURE__ */ __name((fn) => {
    if (update_version === parent_version) {
      return fn();
    }
    var reaction = active_reaction;
    var version2 = update_version;
    set_active_reaction(null);
    set_update_version(parent_version);
    var result = fn();
    set_active_reaction(reaction);
    set_update_version(version2);
    return result;
  }, "with_parent");
  if (is_proxied_array) {
    sources.set("length", /* @__PURE__ */ state(
      /** @type {any[]} */
      value.length
    ));
  }
  return new Proxy(
    /** @type {any} */
    value,
    {
      defineProperty(_, prop, descriptor) {
        if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
          state_descriptors_fixed();
        }
        var s3 = sources.get(prop);
        if (s3 === void 0) {
          with_parent(() => {
            var s22 = /* @__PURE__ */ state(descriptor.value);
            sources.set(prop, s22);
            return s22;
          });
        } else {
          set(s3, descriptor.value, true);
        }
        return true;
      },
      deleteProperty(target, prop) {
        var s3 = sources.get(prop);
        if (s3 === void 0) {
          if (prop in target) {
            const s22 = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
            sources.set(prop, s22);
            increment(version);
          }
        } else {
          set(s3, UNINITIALIZED);
          increment(version);
        }
        return true;
      },
      get(target, prop, receiver) {
        if (prop === STATE_SYMBOL) {
          return value;
        }
        var s3 = sources.get(prop);
        var exists = prop in target;
        if (s3 === void 0 && (!exists || get_descriptor(target, prop)?.writable)) {
          s3 = with_parent(() => {
            var p = proxy(exists ? target[prop] : UNINITIALIZED);
            var s22 = /* @__PURE__ */ state(p);
            return s22;
          });
          sources.set(prop, s3);
        }
        if (s3 !== void 0) {
          var v = get(s3);
          return v === UNINITIALIZED ? void 0 : v;
        }
        return Reflect.get(target, prop, receiver);
      },
      getOwnPropertyDescriptor(target, prop) {
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);
        if (descriptor && "value" in descriptor) {
          var s3 = sources.get(prop);
          if (s3) descriptor.value = get(s3);
        } else if (descriptor === void 0) {
          var source2 = sources.get(prop);
          var value2 = source2?.v;
          if (source2 !== void 0 && value2 !== UNINITIALIZED) {
            return {
              enumerable: true,
              configurable: true,
              value: value2,
              writable: true
            };
          }
        }
        return descriptor;
      },
      has(target, prop) {
        if (prop === STATE_SYMBOL) {
          return true;
        }
        var s3 = sources.get(prop);
        var has = s3 !== void 0 && s3.v !== UNINITIALIZED || Reflect.has(target, prop);
        if (s3 !== void 0 || active_effect !== null && (!has || get_descriptor(target, prop)?.writable)) {
          if (s3 === void 0) {
            s3 = with_parent(() => {
              var p = has ? proxy(target[prop]) : UNINITIALIZED;
              var s22 = /* @__PURE__ */ state(p);
              return s22;
            });
            sources.set(prop, s3);
          }
          var value2 = get(s3);
          if (value2 === UNINITIALIZED) {
            return false;
          }
        }
        return has;
      },
      set(target, prop, value2, receiver) {
        var s3 = sources.get(prop);
        var has = prop in target;
        if (is_proxied_array && prop === "length") {
          for (var i = value2; i < /** @type {Source<number>} */
          s3.v; i += 1) {
            var other_s = sources.get(i + "");
            if (other_s !== void 0) {
              set(other_s, UNINITIALIZED);
            } else if (i in target) {
              other_s = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
              sources.set(i + "", other_s);
            }
          }
        }
        if (s3 === void 0) {
          if (!has || get_descriptor(target, prop)?.writable) {
            s3 = with_parent(() => /* @__PURE__ */ state(void 0));
            set(s3, proxy(value2));
            sources.set(prop, s3);
          }
        } else {
          has = s3.v !== UNINITIALIZED;
          var p = with_parent(() => proxy(value2));
          set(s3, p);
        }
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);
        if (descriptor?.set) {
          descriptor.set.call(receiver, value2);
        }
        if (!has) {
          if (is_proxied_array && typeof prop === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n2 = Number(prop);
            if (Number.isInteger(n2) && n2 >= ls.v) {
              set(ls, n2 + 1);
            }
          }
          increment(version);
        }
        return true;
      },
      ownKeys(target) {
        get(version);
        var own_keys = Reflect.ownKeys(target).filter((key22) => {
          var source3 = sources.get(key22);
          return source3 === void 0 || source3.v !== UNINITIALIZED;
        });
        for (var [key2, source2] of sources) {
          if (source2.v !== UNINITIALIZED && !(key2 in target)) {
            own_keys.push(key2);
          }
        }
        return own_keys;
      },
      setPrototypeOf() {
        state_prototype_fixed();
      }
    }
  );
}
function init_operations() {
  if ($window !== void 0) {
    return;
  }
  $window = window;
  var element_prototype = Element.prototype;
  var node_prototype = Node.prototype;
  var text_prototype = Text.prototype;
  first_child_getter = get_descriptor(node_prototype, "firstChild").get;
  next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
  if (is_extensible(element_prototype)) {
    element_prototype[CLASS_CACHE] = void 0;
    element_prototype[ATTRIBUTES_CACHE] = null;
    element_prototype[STYLE_CACHE] = void 0;
    element_prototype.__e = void 0;
  }
  if (is_extensible(text_prototype)) {
    text_prototype[TEXT_CACHE] = void 0;
  }
}
function create_text(value = "") {
  return document.createTextNode(value);
}
// @__NO_SIDE_EFFECTS__
function get_first_child(node) {
  return (
    /** @type {TemplateNode | null} */
    first_child_getter.call(node)
  );
}
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node) {
  return (
    /** @type {TemplateNode | null} */
    next_sibling_getter.call(node)
  );
}
function clear_text_content(node) {
  node.textContent = "";
}
function handle_error(error3) {
  var effect = active_effect;
  if (effect === null) {
    active_reaction.f |= ERROR_VALUE;
    return error3;
  }
  if ((effect.f & REACTION_RAN) === 0 && (effect.f & EFFECT) === 0) {
    throw error3;
  }
  invoke_error_boundary(error3, effect);
}
function invoke_error_boundary(error3, effect) {
  if (effect !== null && (effect.f & DESTROYED) !== 0) {
    return;
  }
  while (effect !== null) {
    if ((effect.f & BOUNDARY_EFFECT) !== 0) {
      if ((effect.f & REACTION_RAN) === 0) {
        throw error3;
      }
      try {
        effect.b.error(error3);
        return;
      } catch (e3) {
        error3 = e3;
      }
    }
    effect = effect.parent;
  }
  throw error3;
}
function set_signal_status(signal, status) {
  signal.f = signal.f & STATUS_MASK | status;
}
function update_derived_status(derived22) {
  if ((derived22.f & CONNECTED) !== 0 || derived22.deps === null) {
    set_signal_status(derived22, CLEAN);
  } else {
    set_signal_status(derived22, MAYBE_DIRTY);
  }
}
function clear_marked(deps) {
  if (deps === null) return;
  for (const dep of deps) {
    if ((dep.f & DERIVED) === 0 || (dep.f & WAS_MARKED) === 0) {
      continue;
    }
    dep.f ^= WAS_MARKED;
    clear_marked(
      /** @type {Derived} */
      dep.deps
    );
  }
}
function defer_effect(effect, dirty_effects, maybe_dirty_effects) {
  if ((effect.f & DIRTY) !== 0) {
    dirty_effects.add(effect);
  } else if ((effect.f & MAYBE_DIRTY) !== 0) {
    maybe_dirty_effects.add(effect);
  }
  clear_marked(effect.deps);
  set_signal_status(effect, CLEAN);
}
function subscribe_to_store(store, run2, invalidate) {
  if (store == null) {
    run2(void 0);
    if (invalidate) invalidate(void 0);
    return noop2;
  }
  const unsub = untrack(
    () => store.subscribe(
      run2,
      // @ts-expect-error
      invalidate
    )
  );
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function destroy_derived_effects(derived22) {
  var effects = derived22.effects;
  if (effects !== null) {
    derived22.effects = null;
    for (var i = 0; i < effects.length; i += 1) {
      destroy_effect(
        /** @type {Effect} */
        effects[i]
      );
    }
  }
}
function execute_derived(derived22) {
  var value;
  var prev_active_effect = active_effect;
  var parent = derived22.parent;
  if (!is_destroying_effect && parent !== null && derived22.v !== UNINITIALIZED && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (parent.f & (DESTROYED | INERT)) !== 0) {
    derived_inert();
    return derived22.v;
  }
  set_active_effect(parent);
  {
    try {
      derived22.f &= ~WAS_MARKED;
      destroy_derived_effects(derived22);
      value = update_reaction(derived22);
    } finally {
      set_active_effect(prev_active_effect);
    }
  }
  return value;
}
function update_derived(derived22) {
  var value = execute_derived(derived22);
  if (!derived22.equals(value)) {
    derived22.wv = increment_write_version();
    if (!current_batch?.is_fork || derived22.deps === null) {
      if (current_batch !== null) {
        current_batch.capture(derived22, value, true);
        previous_batch?.capture(derived22, value, true);
      } else {
        derived22.v = value;
      }
      if (derived22.deps === null) {
        set_signal_status(derived22, CLEAN);
        return;
      }
    }
  }
  if (is_destroying_effect) {
    return;
  }
  if (batch_values !== null) {
    if (effect_tracking() || current_batch?.is_fork) {
      batch_values.set(derived22, value);
    }
  } else {
    update_derived_status(derived22);
  }
}
function freeze_derived_effects(derived22) {
  if (derived22.effects === null) return;
  for (const e3 of derived22.effects) {
    if (e3.teardown || e3.ac) {
      e3.teardown?.();
      e3.ac?.abort(STALE_REACTION);
      if (e3.fn !== null) e3.teardown = noop2;
      e3.ac = null;
      remove_reactions(e3, 0);
      destroy_effect_children(e3);
    }
  }
}
function unfreeze_derived_effects(derived22) {
  if (derived22.effects === null) return;
  for (const e3 of derived22.effects) {
    if (e3.teardown && e3.fn !== null) {
      update_effect(e3);
    }
  }
}
function flushSync(fn) {
  var was_flushing_sync = is_flushing_sync;
  is_flushing_sync = true;
  try {
    var result;
    if (fn) ;
    while (true) {
      flush_tasks();
      if (current_batch === null) {
        return (
          /** @type {T} */
          result
        );
      }
      current_batch.flush();
    }
  } finally {
    is_flushing_sync = was_flushing_sync;
  }
}
function infinite_loop_guard() {
  try {
    effect_update_depth_exceeded();
  } catch (error3) {
    invoke_error_boundary(error3, last_scheduled_effect);
  }
}
function flush_queued_effects(effects) {
  var length = effects.length;
  if (length === 0) return;
  var i = 0;
  while (i < length) {
    var effect = effects[i++];
    if ((effect.f & (DESTROYED | INERT)) === 0 && is_dirty(effect)) {
      eager_block_effects = /* @__PURE__ */ new Set();
      update_effect(effect);
      if (effect.deps === null && effect.first === null && effect.nodes === null && effect.teardown === null && effect.ac === null) {
        unlink_effect(effect);
      }
      if (eager_block_effects?.size > 0) {
        old_values.clear();
        for (const e3 of eager_block_effects) {
          if ((e3.f & (DESTROYED | INERT)) !== 0) continue;
          const ordered_effects = [e3];
          let ancestor = e3.parent;
          while (ancestor !== null) {
            if (eager_block_effects.has(ancestor)) {
              eager_block_effects.delete(ancestor);
              ordered_effects.push(ancestor);
            }
            ancestor = ancestor.parent;
          }
          for (let j = ordered_effects.length - 1; j >= 0; j--) {
            const e22 = ordered_effects[j];
            if ((e22.f & (DESTROYED | INERT)) !== 0) continue;
            update_effect(e22);
          }
        }
        eager_block_effects.clear();
      }
    }
  }
  eager_block_effects = null;
}
function mark_effects(value, sources, marked, checked) {
  if (marked.has(value)) return;
  marked.add(value);
  if (value.reactions !== null) {
    for (const reaction of value.reactions) {
      const flags2 = reaction.f;
      if ((flags2 & DERIVED) !== 0) {
        mark_effects(
          /** @type {Derived} */
          reaction,
          sources,
          marked,
          checked
        );
      } else if ((flags2 & (ASYNC | BLOCK_EFFECT)) !== 0 && (flags2 & DIRTY) === 0 && depends_on(reaction, sources, checked)) {
        set_signal_status(reaction, DIRTY);
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
}
function depends_on(reaction, sources, checked) {
  const depends = checked.get(reaction);
  if (depends !== void 0) return depends;
  if (reaction.deps !== null) {
    for (const dep of reaction.deps) {
      if (includes.call(sources, dep)) {
        return true;
      }
      if ((dep.f & DERIVED) !== 0 && depends_on(
        /** @type {Derived} */
        dep,
        sources,
        checked
      )) {
        checked.set(
          /** @type {Derived} */
          dep,
          true
        );
        return true;
      }
    }
  }
  checked.set(reaction, false);
  return false;
}
function schedule_effect(effect) {
  current_batch.schedule(effect);
}
function reset_branch(effect, tracked) {
  if ((effect.f & BRANCH_EFFECT) !== 0 && (effect.f & CLEAN) !== 0) {
    return;
  }
  if ((effect.f & DIRTY) !== 0) {
    tracked.d.push(effect);
  } else if ((effect.f & MAYBE_DIRTY) !== 0) {
    tracked.m.push(effect);
  }
  set_signal_status(effect, CLEAN);
  var e3 = effect.first;
  while (e3 !== null) {
    reset_branch(e3, tracked);
    e3 = e3.next;
  }
}
function reset_all(effect) {
  set_signal_status(effect, CLEAN);
  var e3 = effect.first;
  while (e3 !== null) {
    reset_all(e3);
    e3 = e3.next;
  }
}
function source(v, stack) {
  var signal = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v,
    reactions: null,
    equals,
    rv: 0,
    wv: 0
  };
  return signal;
}
// @__NO_SIDE_EFFECTS__
function state(v, stack) {
  const s3 = source(v);
  push_reaction_value(s3);
  return s3;
}
// @__NO_SIDE_EFFECTS__
function mutable_source(initial_value, immutable2 = false, trackable = true) {
  const s3 = source(initial_value);
  if (!immutable2) {
    s3.equals = safe_equals;
  }
  return s3;
}
function set(source2, value, should_proxy = false) {
  if (active_reaction !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!untracking || (active_reaction.f & EAGER_EFFECT) !== 0) && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT | ASYNC | EAGER_EFFECT)) !== 0 && (current_sources === null || !current_sources.has(source2))) {
    state_unsafe_mutation();
  }
  let new_value = should_proxy ? proxy(value) : value;
  return internal_set(source2, new_value, legacy_updates);
}
function internal_set(source2, value, updated_during_traversal = null) {
  if (!source2.equals(value)) {
    old_values.set(source2, is_destroying_effect ? value : source2.v);
    var batch = Batch.ensure();
    batch.capture(source2, value);
    if ((source2.f & DERIVED) !== 0) {
      const derived22 = (
        /** @type {Derived} */
        source2
      );
      if ((source2.f & DIRTY) !== 0) {
        execute_derived(derived22);
      }
      if (batch_values === null) {
        update_derived_status(derived22);
      }
    }
    source2.wv = increment_write_version();
    mark_reactions(source2, DIRTY, updated_during_traversal);
    if (active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
      if (untracked_writes === null) {
        set_untracked_writes([source2]);
      } else {
        untracked_writes.push(source2);
      }
    }
    if (!batch.is_fork && eager_effects.size > 0 && !eager_effects_deferred) {
      flush_eager_effects();
    }
  }
  return value;
}
function flush_eager_effects() {
  eager_effects_deferred = false;
  for (const effect of eager_effects) {
    if ((effect.f & CLEAN) !== 0) {
      set_signal_status(effect, MAYBE_DIRTY);
    }
    let dirty;
    try {
      dirty = is_dirty(effect);
    } catch {
      dirty = true;
    }
    if (dirty) {
      update_effect(effect);
    }
  }
  eager_effects.clear();
}
function increment(source2) {
  set(source2, source2.v + 1);
}
function mark_reactions(signal, status, updated_during_traversal) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  var length = reactions.length;
  for (var i = 0; i < length; i++) {
    var reaction = reactions[i];
    var flags2 = reaction.f;
    var not_dirty = (flags2 & DIRTY) === 0;
    if (not_dirty) {
      set_signal_status(reaction, status);
    }
    if ((flags2 & EAGER_EFFECT) !== 0) {
      eager_effects.add(
        /** @type {Effect} */
        reaction
      );
    } else if ((flags2 & DERIVED) !== 0) {
      var derived22 = (
        /** @type {Derived} */
        reaction
      );
      batch_values?.delete(derived22);
      if ((flags2 & WAS_MARKED) === 0) {
        if (flags2 & CONNECTED && (active_effect === null || (active_effect.f & REACTION_IS_UPDATING) === 0)) {
          reaction.f |= WAS_MARKED;
        }
        mark_reactions(derived22, MAYBE_DIRTY, updated_during_traversal);
      }
    } else if (not_dirty) {
      var effect = (
        /** @type {Effect} */
        reaction
      );
      if ((flags2 & BLOCK_EFFECT) !== 0 && eager_block_effects !== null) {
        eager_block_effects.add(effect);
      }
      if (updated_during_traversal !== null) {
        updated_during_traversal.push(effect);
      } else {
        schedule_effect(effect);
      }
    }
  }
}
function without_reactive_context(fn) {
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    return fn();
  } finally {
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
function set_is_destroying_effect(value) {
  is_destroying_effect = value;
}
function set_active_reaction(reaction) {
  active_reaction = reaction;
}
function set_active_effect(effect) {
  active_effect = effect;
}
function push_reaction_value(value) {
  if (active_reaction !== null && true) {
    (current_sources ??= /* @__PURE__ */ new Set()).add(value);
  }
}
function set_untracked_writes(value) {
  untracked_writes = value;
}
function set_update_version(value) {
  update_version = value;
}
function increment_write_version() {
  return ++write_version;
}
function is_dirty(reaction) {
  var flags2 = reaction.f;
  if ((flags2 & DIRTY) !== 0) {
    return true;
  }
  if (flags2 & DERIVED) {
    reaction.f &= ~WAS_MARKED;
  }
  if ((flags2 & MAYBE_DIRTY) !== 0) {
    var dependencies = (
      /** @type {Value[]} */
      reaction.deps
    );
    var length = dependencies.length;
    for (var i = 0; i < length; i++) {
      var dependency = dependencies[i];
      if (is_dirty(
        /** @type {Derived} */
        dependency
      )) {
        update_derived(
          /** @type {Derived} */
          dependency
        );
      }
      if (dependency.wv > reaction.wv) {
        return true;
      }
    }
    if ((flags2 & CONNECTED) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    batch_values === null) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
function schedule_possible_effect_self_invalidation(signal, effect, root2 = true) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  if (current_sources !== null && current_sources.has(signal)) {
    return;
  }
  for (var i = 0; i < reactions.length; i++) {
    var reaction = reactions[i];
    if ((reaction.f & DERIVED) !== 0) {
      schedule_possible_effect_self_invalidation(
        /** @type {Derived} */
        reaction,
        effect,
        false
      );
    } else if (effect === reaction) {
      if (root2) {
        set_signal_status(reaction, DIRTY);
      } else if ((reaction.f & CLEAN) !== 0) {
        set_signal_status(reaction, MAYBE_DIRTY);
      }
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}
function update_reaction(reaction) {
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_sources = current_sources;
  var previous_component_context = component_context;
  var previous_untracking = untracking;
  var previous_update_version = update_version;
  var flags2 = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  active_reaction = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  current_sources = null;
  set_component_context(reaction.ctx);
  untracking = false;
  update_version = ++read_version;
  if (reaction.ac !== null) {
    without_reactive_context(() => {
      reaction.ac.abort(STALE_REACTION);
    });
    reaction.ac = null;
  }
  try {
    reaction.f |= REACTION_IS_UPDATING;
    var fn = (
      /** @type {Function} */
      reaction.fn
    );
    var result = fn();
    reaction.f |= REACTION_RAN;
    var deps = reaction.deps;
    var is_fork = current_batch?.is_fork;
    if (new_deps !== null) {
      var i;
      if (!is_fork) {
        remove_reactions(reaction, skipped_deps);
      }
      if (deps !== null && skipped_deps > 0) {
        deps.length = skipped_deps + new_deps.length;
        for (i = 0; i < new_deps.length; i++) {
          deps[skipped_deps + i] = new_deps[i];
        }
      } else {
        reaction.deps = deps = new_deps;
      }
      if (effect_tracking() && (reaction.f & CONNECTED) !== 0) {
        for (i = skipped_deps; i < deps.length; i++) {
          (deps[i].reactions ??= []).push(reaction);
        }
      }
    } else if (!is_fork && deps !== null && skipped_deps < deps.length) {
      remove_reactions(reaction, skipped_deps);
      deps.length = skipped_deps;
    }
    if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
      for (i = 0; i < /** @type {Source[]} */
      untracked_writes.length; i++) {
        schedule_possible_effect_self_invalidation(
          untracked_writes[i],
          /** @type {Effect} */
          reaction
        );
      }
    }
    if (previous_reaction !== null && previous_reaction !== reaction) {
      read_version++;
      if (previous_reaction.deps !== null) {
        for (let i2 = 0; i2 < previous_skipped_deps; i2 += 1) {
          previous_reaction.deps[i2].rv = read_version;
        }
      }
      if (previous_deps !== null) {
        for (const dep of previous_deps) {
          dep.rv = read_version;
        }
      }
      if (untracked_writes !== null) {
        if (previous_untracked_writes === null) {
          previous_untracked_writes = untracked_writes;
        } else {
          previous_untracked_writes.push(.../** @type {Source[]} */
          untracked_writes);
        }
      }
    }
    if ((reaction.f & ERROR_VALUE) !== 0) {
      reaction.f ^= ERROR_VALUE;
    }
    return result;
  } catch (error3) {
    return handle_error(error3);
  } finally {
    reaction.f ^= REACTION_IS_UPDATING;
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    current_sources = previous_sources;
    set_component_context(previous_component_context);
    untracking = previous_untracking;
    update_version = previous_update_version;
  }
}
function remove_reaction(signal, dependency) {
  let reactions = dependency.reactions;
  if (reactions !== null) {
    var index5 = index_of.call(reactions, signal);
    if (index5 !== -1) {
      var new_length = reactions.length - 1;
      if (new_length === 0) {
        reactions = dependency.reactions = null;
      } else {
        reactions[index5] = reactions[new_length];
        reactions.pop();
      }
    }
  }
  if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (new_deps === null || !includes.call(new_deps, dependency))) {
    var derived22 = (
      /** @type {Derived} */
      dependency
    );
    if ((derived22.f & CONNECTED) !== 0) {
      derived22.f ^= CONNECTED;
      derived22.f &= ~WAS_MARKED;
    }
    if (derived22.v !== UNINITIALIZED) {
      update_derived_status(derived22);
    }
    freeze_derived_effects(derived22);
    remove_reactions(derived22, 0);
  }
}
function remove_reactions(signal, start_index) {
  var dependencies = signal.deps;
  if (dependencies === null) return;
  for (var i = start_index; i < dependencies.length; i++) {
    remove_reaction(signal, dependencies[i]);
  }
}
function update_effect(effect) {
  var flags2 = effect.f;
  if ((flags2 & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect, CLEAN);
  var previous_effect = active_effect;
  var was_updating_effect = is_updating_effect;
  active_effect = effect;
  is_updating_effect = true;
  try {
    if ((flags2 & (BLOCK_EFFECT | MANAGED_EFFECT)) !== 0) {
      destroy_block_effect_children(effect);
    } else {
      destroy_effect_children(effect);
    }
    execute_effect_teardown(effect);
    var teardown = update_reaction(effect);
    effect.teardown = typeof teardown === "function" ? teardown : null;
    effect.wv = write_version;
    var dep;
    if (browser && tracing_mode_flag && (effect.f & DIRTY) !== 0 && effect.deps !== null) ;
  } finally {
    is_updating_effect = was_updating_effect;
    active_effect = previous_effect;
  }
}
function get(signal) {
  var flags2 = signal.f;
  var is_derived = (flags2 & DERIVED) !== 0;
  if (active_reaction !== null && !untracking) {
    var destroyed = active_effect !== null && (active_effect.f & DESTROYED) !== 0;
    if (!destroyed && (current_sources === null || !current_sources.has(signal))) {
      var deps = active_reaction.deps;
      if ((active_reaction.f & REACTION_IS_UPDATING) !== 0) {
        if (signal.rv < read_version) {
          signal.rv = read_version;
          if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
            skipped_deps++;
          } else if (new_deps === null) {
            new_deps = [signal];
          } else {
            new_deps.push(signal);
          }
        }
      } else {
        active_reaction.deps ??= [];
        if (!includes.call(active_reaction.deps, signal)) {
          active_reaction.deps.push(signal);
        }
        var reactions = signal.reactions;
        if (reactions === null) {
          signal.reactions = [active_reaction];
        } else if (!includes.call(reactions, active_reaction)) {
          reactions.push(active_reaction);
        }
      }
    }
  }
  if (is_destroying_effect && old_values.has(signal)) {
    return old_values.get(signal);
  }
  if (is_derived) {
    var derived22 = (
      /** @type {Derived} */
      signal
    );
    if (is_destroying_effect) {
      var value = derived22.v;
      if ((derived22.f & CLEAN) === 0 && derived22.reactions !== null || depends_on_old_values(derived22)) {
        value = execute_derived(derived22);
      }
      old_values.set(derived22, value);
      return value;
    }
    var should_connect = (derived22.f & CONNECTED) === 0 && !untracking && active_reaction !== null && (is_updating_effect || (active_reaction.f & CONNECTED) !== 0);
    var is_new = (derived22.f & REACTION_RAN) === 0;
    if (is_dirty(derived22)) {
      if (should_connect) {
        derived22.f |= CONNECTED;
      }
      update_derived(derived22);
    }
    if (should_connect && !is_new) {
      unfreeze_derived_effects(derived22);
      reconnect(derived22);
    }
  }
  if (batch_values?.has(signal)) {
    return batch_values.get(signal);
  }
  if ((signal.f & ERROR_VALUE) !== 0) {
    throw signal.v;
  }
  return signal.v;
}
function reconnect(derived22) {
  derived22.f |= CONNECTED;
  if (derived22.deps === null) return;
  for (const dep of derived22.deps) {
    (dep.reactions ??= []).push(derived22);
    if ((dep.f & DERIVED) !== 0 && (dep.f & CONNECTED) === 0) {
      unfreeze_derived_effects(
        /** @type {Derived} */
        dep
      );
      reconnect(
        /** @type {Derived} */
        dep
      );
    }
  }
}
function depends_on_old_values(derived22) {
  if (derived22.v === UNINITIALIZED) return true;
  if (derived22.deps === null) return false;
  for (const dep of derived22.deps) {
    if (old_values.has(dep)) {
      return true;
    }
    if ((dep.f & DERIVED) !== 0 && depends_on_old_values(
      /** @type {Derived} */
      dep
    )) {
      return true;
    }
  }
  return false;
}
function untrack(fn) {
  var previous_untracking = untracking;
  try {
    untracking = true;
    return fn();
  } finally {
    untracking = previous_untracking;
  }
}
function push_effect(effect, parent_effect) {
  var parent_last = parent_effect.last;
  if (parent_last === null) {
    parent_effect.last = parent_effect.first = effect;
  } else {
    parent_last.next = effect;
    effect.prev = parent_last;
    parent_effect.last = effect;
  }
}
function create_effect(type, fn) {
  var parent = active_effect;
  if (parent !== null && (parent.f & INERT) !== 0) {
    type |= INERT;
  }
  var effect = {
    ctx: component_context,
    deps: null,
    nodes: null,
    f: type | DIRTY | CONNECTED,
    first: null,
    fn,
    last: null,
    next: null,
    parent,
    b: parent && parent.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  current_batch?.register_created_effect(effect);
  var e3 = effect;
  if ((type & EFFECT) !== 0) {
    if (collected_effects !== null) {
      collected_effects.push(effect);
    } else {
      Batch.ensure().schedule(effect);
    }
  } else if (fn !== null) {
    try {
      update_effect(effect);
    } catch (e22) {
      destroy_effect(effect);
      throw e22;
    }
    if (e3.deps === null && e3.teardown === null && e3.nodes === null && e3.first === e3.last && // either `null`, or a singular child
    (e3.f & EFFECT_PRESERVED) === 0) {
      e3 = e3.first;
      if ((type & BLOCK_EFFECT) !== 0 && (type & EFFECT_TRANSPARENT) !== 0 && e3 !== null) {
        e3.f |= EFFECT_TRANSPARENT;
      }
    }
  }
  if (e3 !== null) {
    e3.parent = parent;
    if (parent !== null) {
      push_effect(e3, parent);
    }
    if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0 && (type & ROOT_EFFECT) === 0) {
      var derived22 = (
        /** @type {Derived} */
        active_reaction
      );
      (derived22.effects ??= []).push(e3);
    }
  }
  return effect;
}
function effect_tracking() {
  return active_reaction !== null && !untracking;
}
function create_user_effect(fn) {
  return create_effect(EFFECT | USER_EFFECT, fn);
}
function component_root(fn) {
  Batch.ensure();
  const effect = create_effect(ROOT_EFFECT | EFFECT_PRESERVED, fn);
  return (options2 = {}) => {
    return new Promise((fulfil) => {
      if (options2.outro) {
        pause_effect(effect, () => {
          destroy_effect(effect);
          fulfil(void 0);
        });
      } else {
        destroy_effect(effect);
        fulfil(void 0);
      }
    });
  };
}
function render_effect(fn, flags2 = 0) {
  return create_effect(RENDER_EFFECT | flags2, fn);
}
function block(fn, flags2 = 0) {
  var effect = create_effect(BLOCK_EFFECT | flags2, fn);
  return effect;
}
function branch(fn) {
  return create_effect(BRANCH_EFFECT | EFFECT_PRESERVED, fn);
}
function execute_effect_teardown(effect) {
  var teardown = effect.teardown;
  if (teardown !== null) {
    const previously_destroying_effect = is_destroying_effect;
    const previous_reaction = active_reaction;
    set_is_destroying_effect(true);
    set_active_reaction(null);
    try {
      teardown.call(null);
    } finally {
      set_is_destroying_effect(previously_destroying_effect);
      set_active_reaction(previous_reaction);
    }
  }
}
function destroy_effect_children(signal, remove_dom = false) {
  var effect = signal.first;
  signal.first = signal.last = null;
  while (effect !== null) {
    const controller2 = effect.ac;
    if (controller2 !== null) {
      without_reactive_context(() => {
        controller2.abort(STALE_REACTION);
      });
    }
    var next2 = effect.next;
    if ((effect.f & ROOT_EFFECT) !== 0) {
      effect.parent = null;
    } else {
      destroy_effect(effect, remove_dom);
    }
    effect = next2;
  }
}
function destroy_block_effect_children(signal) {
  var effect = signal.first;
  while (effect !== null) {
    var next2 = effect.next;
    if ((effect.f & BRANCH_EFFECT) === 0) {
      destroy_effect(effect);
    }
    effect = next2;
  }
}
function destroy_effect(effect, remove_dom = true) {
  var removed = false;
  if ((remove_dom || (effect.f & HEAD_EFFECT) !== 0) && effect.nodes !== null && effect.nodes.end !== null) {
    remove_effect_dom(
      effect.nodes.start,
      /** @type {TemplateNode} */
      effect.nodes.end
    );
    removed = true;
  }
  effect.f |= DESTROYING;
  destroy_effect_children(effect, remove_dom && !removed);
  remove_reactions(effect, 0);
  var transitions = effect.nodes && effect.nodes.t;
  if (transitions !== null) {
    for (const transition of transitions) {
      transition.stop();
    }
  }
  execute_effect_teardown(effect);
  effect.f ^= DESTROYING;
  effect.f |= DESTROYED;
  var parent = effect.parent;
  if (parent !== null && parent.first !== null) {
    unlink_effect(effect);
  }
  effect.next = effect.prev = effect.teardown = effect.ctx = effect.deps = effect.fn = effect.nodes = effect.ac = effect.b = null;
}
function remove_effect_dom(node, end) {
  while (node !== null) {
    var next2 = node === end ? null : /* @__PURE__ */ get_next_sibling(node);
    node.remove();
    node = next2;
  }
}
function unlink_effect(effect) {
  var parent = effect.parent;
  var prev = effect.prev;
  var next2 = effect.next;
  if (prev !== null) prev.next = next2;
  if (next2 !== null) next2.prev = prev;
  if (parent !== null) {
    if (parent.first === effect) parent.first = next2;
    if (parent.last === effect) parent.last = prev;
  }
}
function pause_effect(effect, callback, destroy = true) {
  var transitions = [];
  pause_children(effect, transitions, true);
  var fn = /* @__PURE__ */ __name(() => {
    if (destroy) destroy_effect(effect);
    if (callback) callback();
  }, "fn");
  var remaining = transitions.length;
  if (remaining > 0) {
    var check = /* @__PURE__ */ __name(() => --remaining || fn(), "check");
    for (var transition of transitions) {
      transition.out(check);
    }
  } else {
    fn();
  }
}
function pause_children(effect, transitions, local) {
  if ((effect.f & INERT) !== 0) return;
  effect.f ^= INERT;
  var t3 = effect.nodes && effect.nodes.t;
  if (t3 !== null) {
    for (const transition of t3) {
      if (transition.is_global || local) {
        transitions.push(transition);
      }
    }
  }
  var child = effect.first;
  while (child !== null) {
    var sibling = child.next;
    if ((child.f & ROOT_EFFECT) === 0) {
      var transparent = (child.f & EFFECT_TRANSPARENT) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (child.f & BRANCH_EFFECT) !== 0 && (effect.f & BLOCK_EFFECT) !== 0;
      pause_children(child, transitions, transparent ? local : false);
    }
    child = sibling;
  }
}
function move_effect(effect, fragment) {
  if (!effect.nodes) return;
  var node = effect.nodes.start;
  var end = effect.nodes.end;
  while (node !== null) {
    var next2 = node === end ? null : /* @__PURE__ */ get_next_sibling(node);
    fragment.append(node);
    node = next2;
  }
}
function is_boolean_attribute(name) {
  return DOM_BOOLEAN_ATTRIBUTES.includes(name);
}
function is_passive_event(name) {
  return PASSIVE_EVENTS.includes(name);
}
function escape_html2(value, is_attr) {
  const str = String(value ?? "");
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function attr(name, value, is_boolean = false) {
  if (name === "hidden" && value !== "until-found") {
    is_boolean = true;
  }
  if (value == null || !value && is_boolean) return "";
  const normalized = has_own_property.call(replacements, name) && replacements[name].get(value) || value;
  const assignment = is_boolean ? `=""` : `="${escape_html2(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function clsx2(value) {
  if (typeof value === "object") {
    return clsx(value);
  } else {
    return value ?? "";
  }
}
function to_class(value, hash2, directives) {
  var classname = value == null ? "" : "" + value;
  if (hash2) {
    classname = classname ? classname + " " + hash2 : hash2;
  }
  if (directives) {
    for (var key2 of Object.keys(directives)) {
      if (directives[key2]) {
        classname = classname ? classname + " " + key2 : key2;
      } else if (classname.length) {
        var len = key2.length;
        var a = 0;
        while ((a = classname.indexOf(key2, a)) >= 0) {
          var b = a + len;
          if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
            classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
          } else {
            a = b;
          }
        }
      }
    }
  }
  return classname === "" ? null : classname;
}
function append_styles(styles, important = false) {
  var separator = important ? " !important;" : ";";
  var css = "";
  for (var key2 of Object.keys(styles)) {
    var value = styles[key2];
    if (value != null && value !== "") {
      css += " " + key2 + ": " + value + separator;
    }
  }
  return css;
}
function to_css_name(name) {
  if (name[0] !== "-" || name[1] !== "-") {
    return name.toLowerCase();
  }
  return name;
}
function to_style(value, styles) {
  if (styles) {
    var new_style = "";
    var normal_styles;
    var important_styles;
    if (Array.isArray(styles)) {
      normal_styles = styles[0];
      important_styles = styles[1];
    } else {
      normal_styles = styles;
    }
    if (value) {
      value = String(value).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var in_str = false;
      var in_apo = 0;
      var in_comment = false;
      var reserved_names = [];
      if (normal_styles) {
        reserved_names.push(...Object.keys(normal_styles).map(to_css_name));
      }
      if (important_styles) {
        reserved_names.push(...Object.keys(important_styles).map(to_css_name));
      }
      var start_index = 0;
      var name_index = -1;
      const len = value.length;
      for (var i = 0; i < len; i++) {
        var c2 = value[i];
        if (in_comment) {
          if (c2 === "/" && value[i - 1] === "*") {
            in_comment = false;
          }
        } else if (in_str) {
          if (in_str === c2) {
            in_str = false;
          }
        } else if (c2 === "/" && value[i + 1] === "*") {
          in_comment = true;
        } else if (c2 === '"' || c2 === "'") {
          in_str = c2;
        } else if (c2 === "(") {
          in_apo++;
        } else if (c2 === ")") {
          in_apo--;
        }
        if (!in_comment && in_str === false && in_apo === 0) {
          if (c2 === ":" && name_index === -1) {
            name_index = i;
          } else if (c2 === ";" || i === len - 1) {
            if (name_index !== -1) {
              var name = to_css_name(value.substring(start_index, name_index).trim());
              if (!reserved_names.includes(name)) {
                if (c2 !== ";") {
                  i++;
                }
                var property = value.substring(start_index, i).trim();
                new_style += " " + property + ";";
              }
            }
            start_index = i + 1;
            name_index = -1;
          }
        }
      }
    }
    if (normal_styles) {
      new_style += append_styles(normal_styles);
    }
    if (important_styles) {
      new_style += append_styles(important_styles, true);
    }
    new_style = new_style.trim();
    return new_style === "" ? null : new_style;
  }
  return value == null ? null : String(value);
}
function abort() {
  controller?.abort(STALE_REACTION);
  controller = null;
}
function await_invalid() {
  const error3 = new Error(`await_invalid
Encountered asynchronous work while rendering synchronously.
https://svelte.dev/e/await_invalid`);
  error3.name = "Svelte error";
  throw error3;
}
function invalid_csp() {
  const error3 = new Error(`invalid_csp
\`csp.nonce\` was set while \`csp.hash\` was \`true\`. These options cannot be used simultaneously.
https://svelte.dev/e/invalid_csp`);
  error3.name = "Svelte error";
  throw error3;
}
function invalid_id_prefix() {
  const error3 = new Error(`invalid_id_prefix
The \`idPrefix\` option cannot include \`--\`.
https://svelte.dev/e/invalid_id_prefix`);
  error3.name = "Svelte error";
  throw error3;
}
function server_context_required() {
  const error3 = new Error(`server_context_required
Could not resolve \`render\` context.
https://svelte.dev/e/server_context_required`);
  error3.name = "Svelte error";
  throw error3;
}
function set_ssr_context(v) {
  ssr_context = v;
}
function getContext(key2) {
  const context_map = get_or_init_context_map();
  const result = (
    /** @type {T} */
    context_map.get(key2)
  );
  return result;
}
function setContext(key2, context2) {
  get_or_init_context_map().set(key2, context2);
  return context2;
}
function get_or_init_context_map(name) {
  if (ssr_context === null) {
    lifecycle_outside_component();
  }
  return ssr_context.c ??= new Map(get_parent_context(ssr_context) || void 0);
}
function push(fn) {
  ssr_context = { p: ssr_context, c: null, r: null };
}
function pop() {
  ssr_context = /** @type {SSRContext} */
  ssr_context.p;
}
function get_parent_context(ssr_context2) {
  let parent = ssr_context2.p;
  while (parent !== null) {
    const context_map = parent.c;
    if (context_map !== null) {
      return context_map;
    }
    parent = parent.p;
  }
  return null;
}
function unresolved_hydratable(key2, stack) {
  {
    console.warn(`https://svelte.dev/e/unresolved_hydratable`);
  }
}
function get_render_context() {
  const store = als2?.getStore();
  {
    server_context_required();
  }
  return store;
}
async function sha256(data) {
  text_encoder3 ??= new TextEncoder();
  crypto2 ??= globalThis.crypto?.subtle?.digest ? globalThis.crypto : (
    // @ts-ignore - we don't install node types in the prod build
    // don't use import('node:crypto') directly because static analysers will think we rely on node when we don't
    (await obfuscated_import("node:crypto")).webcrypto
  );
  const hash_buffer = await crypto2.subtle.digest("SHA-256", text_encoder3.encode(data));
  return base64_encode2(hash_buffer);
}
function base64_encode2(bytes) {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(bytes).toString("base64");
  }
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
function render(component5, options2 = {}) {
  if (options2.csp?.hash && options2.csp.nonce) {
    invalid_csp();
  }
  return Renderer.render(
    /** @type {Component<Props>} */
    component5,
    options2
  );
}
function head(hash2, renderer, fn) {
  renderer.head((renderer2) => {
    renderer2.push(`<!--${hash2}-->`);
    renderer2.child(fn);
    renderer2.push(EMPTY_COMMENT);
  });
}
function attributes(attrs, css_hash, classes, styles, flags2 = 0) {
  if (styles) {
    attrs.style = to_style(attrs.style, styles);
  }
  if (attrs.class) {
    attrs.class = clsx2(attrs.class);
  }
  if (css_hash || classes) {
    attrs.class = to_class(attrs.class, css_hash, classes);
  }
  let attr_str = "";
  let name;
  const is_html = (flags2 & ELEMENT_IS_NAMESPACED) === 0;
  const lowercase = (flags2 & ELEMENT_PRESERVE_ATTRIBUTE_CASE) === 0;
  const is_input = (flags2 & ELEMENT_IS_INPUT) !== 0;
  for (name of Object.keys(attrs)) {
    if (typeof attrs[name] === "function") continue;
    if (name[0] === "$" && name[1] === "$") continue;
    if (name === "" || INVALID_ATTR_NAME_CHAR_REGEX.test(name)) continue;
    var value = attrs[name];
    var lower = name.toLowerCase();
    if (lowercase) name = lower;
    if (lower.length > 2 && lower.startsWith("on")) continue;
    if (is_input) {
      if (name === "defaultvalue" || name === "defaultchecked") {
        name = name === "defaultvalue" ? "value" : "checked";
        if (attrs[name]) continue;
      }
    }
    attr_str += attr(name, value, is_html && is_boolean_attribute(name));
  }
  return attr_str;
}
function stringify3(value) {
  return typeof value === "string" ? value : value == null ? "" : value + "";
}
function attr_class(value, hash2, directives) {
  var result = to_class(value, hash2, directives);
  return result ? ` class="${escape_html2(result, true)}"` : "";
}
function attr_style(value, directives) {
  var result = to_style(value, directives);
  return result ? ` style="${escape_html2(result, true)}"` : "";
}
function store_get(store_values, store_name, store) {
  if (store_name in store_values && store_values[store_name][0] === store) {
    return store_values[store_name][2];
  }
  store_values[store_name]?.[1]();
  store_values[store_name] = [store, null, void 0];
  const unsub = subscribe_to_store(
    store,
    /** @param {any} v */
    (v) => store_values[store_name][2] = v
  );
  store_values[store_name][1] = unsub;
  return store_values[store_name][2];
}
function unsubscribe_stores(store_values) {
  for (const store_name of Object.keys(store_values)) {
    store_values[store_name][1]();
  }
}
function ensure_array_like(array_like_or_iterator) {
  if (array_like_or_iterator) {
    return array_like_or_iterator.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
  }
  return [];
}
function once2(get_value) {
  let value = (
    /** @type {V} */
    UNINITIALIZED
  );
  return () => {
    if (value === UNINITIALIZED) {
      value = get_value();
    }
    return value;
  };
}
function derived(fn) {
  const get_value = ssr_context === null ? fn : once2(fn);
  let updated_value;
  return function(new_value) {
    if (arguments.length === 0) {
      return updated_value ?? get_value();
    }
    updated_value = new_value;
    return updated_value;
  };
}
var DERIVED, EFFECT, RENDER_EFFECT, MANAGED_EFFECT, BLOCK_EFFECT, BRANCH_EFFECT, ROOT_EFFECT, BOUNDARY_EFFECT, CONNECTED, CLEAN, DIRTY, MAYBE_DIRTY, INERT, DESTROYED, REACTION_RAN, DESTROYING, EFFECT_TRANSPARENT, EAGER_EFFECT, HEAD_EFFECT, EFFECT_PRESERVED, USER_EFFECT, WAS_MARKED, REACTION_IS_UPDATING, ASYNC, ERROR_VALUE, STATE_SYMBOL, LEGACY_PROPS, ATTRIBUTES_CACHE, CLASS_CACHE, STYLE_CACHE, TEXT_CACHE, STALE_REACTION, COMMENT_NODE, is_array, index_of, includes, array_from, define_property, get_descriptor, object_prototype, array_prototype, get_prototype_of, is_extensible, has_own_property, noop2, tracing_mode_flag, HYDRATION_START, HYDRATION_START_ELSE, HYDRATION_START_FAILED, HYDRATION_END, HYDRATION_ERROR, ELEMENT_IS_NAMESPACED, ELEMENT_PRESERVE_ATTRIBUTE_CASE, ELEMENT_IS_INPUT, UNINITIALIZED, component_context, micro_tasks, $window, first_child_getter, next_sibling_getter, STATUS_MASK, OBSOLETE, first_batch, last_batch, current_batch, previous_batch, batch_values, last_scheduled_effect, is_flushing_sync, is_processing, collected_effects, legacy_updates, flush_count, uid, Batch, eager_block_effects, eager_effects, old_values, eager_effects_deferred, is_updating_effect, is_destroying_effect, active_reaction, untracking, active_effect, current_sources, new_deps, skipped_deps, untracked_writes, write_version, read_version, update_version, DOM_BOOLEAN_ATTRIBUTES, PASSIVE_EVENTS, ATTR_REGEX, CONTENT_REGEX, replacements, whitespace, BLOCK_OPEN, BLOCK_CLOSE, EMPTY_COMMENT, controller, ssr_context, als2, text_encoder3, crypto2, obfuscated_import, Renderer, SSRState, INVALID_ATTR_NAME_CHAR_REGEX;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    init_modules_watch_stub();
    init_clsx();
    init_false();
    init_devalue();
    DERIVED = 1 << 1;
    EFFECT = 1 << 2;
    RENDER_EFFECT = 1 << 3;
    MANAGED_EFFECT = 1 << 24;
    BLOCK_EFFECT = 1 << 4;
    BRANCH_EFFECT = 1 << 5;
    ROOT_EFFECT = 1 << 6;
    BOUNDARY_EFFECT = 1 << 7;
    CONNECTED = 1 << 9;
    CLEAN = 1 << 10;
    DIRTY = 1 << 11;
    MAYBE_DIRTY = 1 << 12;
    INERT = 1 << 13;
    DESTROYED = 1 << 14;
    REACTION_RAN = 1 << 15;
    DESTROYING = 1 << 25;
    EFFECT_TRANSPARENT = 1 << 16;
    EAGER_EFFECT = 1 << 17;
    HEAD_EFFECT = 1 << 18;
    EFFECT_PRESERVED = 1 << 19;
    USER_EFFECT = 1 << 20;
    WAS_MARKED = 1 << 16;
    REACTION_IS_UPDATING = 1 << 21;
    ASYNC = 1 << 22;
    ERROR_VALUE = 1 << 23;
    STATE_SYMBOL = /* @__PURE__ */ Symbol("$state");
    LEGACY_PROPS = /* @__PURE__ */ Symbol("legacy props");
    ATTRIBUTES_CACHE = /* @__PURE__ */ Symbol("attributes");
    CLASS_CACHE = /* @__PURE__ */ Symbol("class");
    STYLE_CACHE = /* @__PURE__ */ Symbol("style");
    TEXT_CACHE = /* @__PURE__ */ Symbol("text");
    STALE_REACTION = new class StaleReactionError extends Error {
      static {
        __name(this, "StaleReactionError");
      }
      name = "StaleReactionError";
      message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
    }();
    COMMENT_NODE = 8;
    is_array = Array.isArray;
    index_of = Array.prototype.indexOf;
    includes = Array.prototype.includes;
    array_from = Array.from;
    define_property = Object.defineProperty;
    get_descriptor = Object.getOwnPropertyDescriptor;
    object_prototype = Object.prototype;
    array_prototype = Array.prototype;
    get_prototype_of = Object.getPrototypeOf;
    is_extensible = Object.isExtensible;
    has_own_property = Object.prototype.hasOwnProperty;
    noop2 = /* @__PURE__ */ __name(() => {
    }, "noop");
    __name(run_all, "run_all");
    __name(deferred, "deferred");
    __name(equals, "equals");
    __name(safe_not_equal, "safe_not_equal");
    __name(safe_equals, "safe_equals");
    __name(lifecycle_outside_component, "lifecycle_outside_component");
    __name(effect_update_depth_exceeded, "effect_update_depth_exceeded");
    __name(hydration_failed, "hydration_failed");
    __name(state_descriptors_fixed, "state_descriptors_fixed");
    __name(state_prototype_fixed, "state_prototype_fixed");
    __name(state_unsafe_mutation, "state_unsafe_mutation");
    __name(svelte_boundary_reset_onerror, "svelte_boundary_reset_onerror");
    tracing_mode_flag = false;
    HYDRATION_START = "[";
    HYDRATION_START_ELSE = "[!";
    HYDRATION_START_FAILED = "[?";
    HYDRATION_END = "]";
    HYDRATION_ERROR = {};
    ELEMENT_IS_NAMESPACED = 1;
    ELEMENT_PRESERVE_ATTRIBUTE_CASE = 1 << 1;
    ELEMENT_IS_INPUT = 1 << 2;
    UNINITIALIZED = /* @__PURE__ */ Symbol("uninitialized");
    component_context = null;
    __name(set_component_context, "set_component_context");
    __name(push$1, "push$1");
    __name(pop$1, "pop$1");
    __name(is_runes, "is_runes");
    micro_tasks = [];
    __name(run_micro_tasks, "run_micro_tasks");
    __name(queue_micro_task, "queue_micro_task");
    __name(flush_tasks, "flush_tasks");
    __name(derived_inert, "derived_inert");
    __name(hydration_mismatch, "hydration_mismatch");
    __name(svelte_boundary_reset_noop, "svelte_boundary_reset_noop");
    __name(proxy, "proxy");
    __name(init_operations, "init_operations");
    __name(create_text, "create_text");
    __name(get_first_child, "get_first_child");
    __name(get_next_sibling, "get_next_sibling");
    __name(clear_text_content, "clear_text_content");
    __name(handle_error, "handle_error");
    __name(invoke_error_boundary, "invoke_error_boundary");
    STATUS_MASK = -7169;
    __name(set_signal_status, "set_signal_status");
    __name(update_derived_status, "update_derived_status");
    __name(clear_marked, "clear_marked");
    __name(defer_effect, "defer_effect");
    __name(subscribe_to_store, "subscribe_to_store");
    OBSOLETE = /* @__PURE__ */ Symbol("obsolete");
    __name(destroy_derived_effects, "destroy_derived_effects");
    __name(execute_derived, "execute_derived");
    __name(update_derived, "update_derived");
    __name(freeze_derived_effects, "freeze_derived_effects");
    __name(unfreeze_derived_effects, "unfreeze_derived_effects");
    first_batch = null;
    last_batch = null;
    current_batch = null;
    previous_batch = null;
    batch_values = null;
    last_scheduled_effect = null;
    is_flushing_sync = false;
    is_processing = false;
    collected_effects = null;
    legacy_updates = null;
    flush_count = 0;
    uid = 1;
    Batch = class _Batch {
      static {
        __name(this, "Batch");
      }
      id = uid++;
      /** True as soon as `#process` was called */
      #started = false;
      linked = true;
      /** @type {Batch | null} */
      #prev = null;
      /** @type {Batch | null} */
      #next = null;
      /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
      async_deriveds = /* @__PURE__ */ new Map();
      /**
       * The current values of any signals that are updated in this batch.
       * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
       * They keys of this map are identical to `this.#previous`
       * @type {Map<Value, [any, boolean]>}
       */
      current = /* @__PURE__ */ new Map();
      /**
       * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
       * They keys of this map are identical to `this.#current`
       * @type {Map<Value, any>}
       */
      previous = /* @__PURE__ */ new Map();
      /**
       * When the batch is committed (and the DOM is updated), we need to remove old branches
       * and append new ones by calling the functions added inside (if/each/key/etc) blocks
       * @type {Set<(batch: Batch) => void>}
       */
      #commit_callbacks = /* @__PURE__ */ new Set();
      /**
       * If a fork is discarded, we need to destroy any effects that are no longer needed
       * @type {Set<(batch: Batch) => void>}
       */
      #discard_callbacks = /* @__PURE__ */ new Set();
      /**
       * The number of async effects that are currently in flight
       */
      #pending = 0;
      /**
       * Async effects that are currently in flight, _not_ inside a pending boundary
       * @type {Map<Effect, number>}
       */
      #blocking_pending = /* @__PURE__ */ new Map();
      /**
       * A deferred that resolves when the batch is committed, used with `settled()`
       * TODO replace with Promise.withResolvers once supported widely enough
       * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
       */
      #deferred = null;
      /**
       * The root effects that need to be flushed
       * @type {Effect[]}
       */
      #roots = [];
      /**
       * Effects created while this batch was active.
       * @type {Effect[]}
       */
      #new_effects = [];
      /**
       * Deferred effects (which run after async work has completed) that are DIRTY
       * @type {Set<Effect>}
       */
      #dirty_effects = /* @__PURE__ */ new Set();
      /**
       * Deferred effects that are MAYBE_DIRTY
       * @type {Set<Effect>}
       */
      #maybe_dirty_effects = /* @__PURE__ */ new Set();
      /**
       * A map of branches that still exist, but will be destroyed when this batch
       * is committed — we skip over these during `process`.
       * The value contains child effects that were dirty/maybe_dirty before being reset,
       * so they can be rescheduled if the branch survives.
       * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
       */
      #skipped_branches = /* @__PURE__ */ new Map();
      /**
       * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
       * @type {Set<Effect>}
       */
      #unskipped_branches = /* @__PURE__ */ new Set();
      is_fork = false;
      #decrement_queued = false;
      constructor() {
        if (last_batch === null) {
          first_batch = last_batch = this;
        } else {
          last_batch.#next = this;
          this.#prev = last_batch;
        }
        last_batch = this;
      }
      #is_deferred() {
        if (this.is_fork) return true;
        for (const effect of this.#blocking_pending.keys()) {
          var e3 = effect;
          var skipped = false;
          while (e3.parent !== null) {
            if (this.#skipped_branches.has(e3)) {
              skipped = true;
              break;
            }
            e3 = e3.parent;
          }
          if (!skipped) {
            return true;
          }
        }
        return false;
      }
      /**
       * Add an effect to the #skipped_branches map and reset its children
       * @param {Effect} effect
       */
      skip_effect(effect) {
        if (!this.#skipped_branches.has(effect)) {
          this.#skipped_branches.set(effect, { d: [], m: [] });
        }
        this.#unskipped_branches.delete(effect);
      }
      /**
       * Remove an effect from the #skipped_branches map and reschedule
       * any tracked dirty/maybe_dirty child effects
       * @param {Effect} effect
       * @param {(e: Effect) => void} callback
       */
      unskip_effect(effect, callback = (e3) => this.schedule(e3)) {
        var tracked = this.#skipped_branches.get(effect);
        if (tracked) {
          this.#skipped_branches.delete(effect);
          for (var e3 of tracked.d) {
            set_signal_status(e3, DIRTY);
            callback(e3);
          }
          for (e3 of tracked.m) {
            set_signal_status(e3, MAYBE_DIRTY);
            callback(e3);
          }
        }
        this.#unskipped_branches.add(effect);
      }
      #process() {
        this.#started = true;
        if (flush_count++ > 1e3) {
          this.#unlink();
          infinite_loop_guard();
        }
        for (const e3 of this.#dirty_effects) {
          this.#maybe_dirty_effects.delete(e3);
          set_signal_status(e3, DIRTY);
          this.schedule(e3);
        }
        for (const e3 of this.#maybe_dirty_effects) {
          set_signal_status(e3, MAYBE_DIRTY);
          this.schedule(e3);
        }
        const roots = this.#roots;
        this.#roots = [];
        this.apply();
        var effects = collected_effects = [];
        var render_effects = [];
        var updates = legacy_updates = [];
        for (const root2 of roots) {
          try {
            this.#traverse(root2, effects, render_effects);
          } catch (e3) {
            reset_all(root2);
            if (!this.#is_deferred()) this.discard();
            throw e3;
          }
        }
        current_batch = null;
        if (updates.length > 0) {
          var batch = _Batch.ensure();
          for (const e3 of updates) {
            batch.schedule(e3);
          }
        }
        collected_effects = null;
        legacy_updates = null;
        if (this.#is_deferred()) {
          this.#defer_effects(render_effects);
          this.#defer_effects(effects);
          for (const [e3, t3] of this.#skipped_branches) {
            reset_branch(e3, t3);
          }
          if (updates.length > 0) {
            current_batch.#process();
          }
          return;
        }
        const earlier_batch = this.#find_earlier_batch();
        if (earlier_batch) {
          this.#defer_effects(render_effects);
          this.#defer_effects(effects);
          earlier_batch.#merge(this);
          return;
        }
        this.#dirty_effects.clear();
        this.#maybe_dirty_effects.clear();
        for (const fn of this.#commit_callbacks) fn(this);
        this.#commit_callbacks.clear();
        previous_batch = this;
        flush_queued_effects(render_effects);
        flush_queued_effects(effects);
        previous_batch = null;
        this.#deferred?.resolve();
        var next_batch = (
          /** @type {Batch | null} */
          /** @type {unknown} */
          current_batch
        );
        if (this.#pending === 0 && (this.#roots.length === 0 || next_batch !== null)) {
          this.#unlink();
        }
        if (this.#roots.length > 0) {
          if (next_batch !== null) {
            const batch2 = next_batch;
            batch2.#roots.push(...this.#roots.filter((r3) => !batch2.#roots.includes(r3)));
          } else {
            next_batch = this;
          }
        }
        if (next_batch !== null) {
          next_batch.#process();
        }
      }
      /**
       * Traverse the effect tree, executing effects or stashing
       * them for later execution as appropriate
       * @param {Effect} root
       * @param {Effect[]} effects
       * @param {Effect[]} render_effects
       */
      #traverse(root2, effects, render_effects) {
        root2.f ^= CLEAN;
        var effect = root2.first;
        while (effect !== null) {
          var flags2 = effect.f;
          var is_branch = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
          var is_skippable_branch = is_branch && (flags2 & CLEAN) !== 0;
          var skip = is_skippable_branch || (flags2 & INERT) !== 0 || this.#skipped_branches.has(effect);
          if (!skip && effect.fn !== null) {
            if (is_branch) {
              effect.f ^= CLEAN;
            } else if ((flags2 & EFFECT) !== 0) {
              effects.push(effect);
            } else if (is_dirty(effect)) {
              if ((flags2 & BLOCK_EFFECT) !== 0) this.#maybe_dirty_effects.add(effect);
              update_effect(effect);
            }
            var child = effect.first;
            if (child !== null) {
              effect = child;
              continue;
            }
          }
          while (effect !== null) {
            var next2 = effect.next;
            if (next2 !== null) {
              effect = next2;
              break;
            }
            effect = effect.parent;
          }
        }
      }
      #find_earlier_batch() {
        var batch = this.#prev;
        while (batch !== null) {
          if (!batch.is_fork) {
            for (const [value, [, is_derived]] of this.current) {
              if (batch.current.has(value) && !is_derived) {
                return batch;
              }
            }
          }
          batch = batch.#prev;
        }
        return null;
      }
      /**
       * @param {Batch} batch
       */
      #merge(batch) {
        for (const [source2, value] of batch.current) {
          if (!this.previous.has(source2) && batch.previous.has(source2)) {
            this.previous.set(source2, batch.previous.get(source2));
          }
          this.current.set(source2, value);
        }
        for (const [effect, deferred2] of batch.async_deriveds) {
          const d = this.async_deriveds.get(effect);
          if (d) deferred2.promise.then(d.resolve).catch(d.reject);
        }
        batch.async_deriveds.clear();
        this.transfer_effects(batch.#dirty_effects, batch.#maybe_dirty_effects);
        const mark = /* @__PURE__ */ __name((value) => {
          var reactions = value.reactions;
          if (reactions === null) return;
          for (const reaction of reactions) {
            var flags2 = reaction.f;
            if ((flags2 & DERIVED) !== 0) {
              mark(
                /** @type {Derived} */
                reaction
              );
            } else {
              var effect = (
                /** @type {Effect} */
                reaction
              );
              if (flags2 & (ASYNC | BLOCK_EFFECT) && !this.async_deriveds.has(effect)) {
                this.#maybe_dirty_effects.delete(effect);
                set_signal_status(effect, DIRTY);
                this.schedule(effect);
              }
            }
          }
        }, "mark");
        for (const source2 of this.current.keys()) {
          mark(source2);
        }
        this.oncommit(() => batch.discard());
        batch.#unlink();
        current_batch = this;
        this.#process();
      }
      /**
       * @param {Effect[]} effects
       */
      #defer_effects(effects) {
        for (var i = 0; i < effects.length; i += 1) {
          defer_effect(effects[i], this.#dirty_effects, this.#maybe_dirty_effects);
        }
      }
      /**
       * Associate a change to a given source with the current
       * batch, noting its previous and current values
       * @param {Value} source
       * @param {any} value
       * @param {boolean} [is_derived]
       */
      capture(source2, value, is_derived = false) {
        if (source2.v !== UNINITIALIZED && !this.previous.has(source2)) {
          this.previous.set(source2, source2.v);
        }
        if ((source2.f & ERROR_VALUE) === 0) {
          this.current.set(source2, [value, is_derived]);
          batch_values?.set(source2, value);
        }
        if (!this.is_fork) {
          source2.v = value;
        }
      }
      activate() {
        current_batch = this;
      }
      deactivate() {
        current_batch = null;
        batch_values = null;
      }
      flush() {
        try {
          if (browser) ;
          is_processing = true;
          current_batch = this;
          this.#process();
        } finally {
          flush_count = 0;
          last_scheduled_effect = null;
          collected_effects = null;
          legacy_updates = null;
          is_processing = false;
          current_batch = null;
          batch_values = null;
          old_values.clear();
        }
      }
      discard() {
        for (const fn of this.#discard_callbacks) fn(this);
        this.#discard_callbacks.clear();
        for (const deferred2 of this.async_deriveds.values()) {
          deferred2.reject(OBSOLETE);
        }
        this.#unlink();
        this.#deferred?.resolve();
      }
      /**
       * @param {Effect} effect
       */
      register_created_effect(effect) {
        this.#new_effects.push(effect);
      }
      #commit() {
        for (let batch = first_batch; batch !== null; batch = batch.#next) {
          var is_earlier = batch.id < this.id;
          var sources = [];
          for (const [source3, [value, is_derived]] of this.current) {
            if (batch.current.has(source3)) {
              var batch_value = (
                /** @type {[any, boolean]} */
                batch.current.get(source3)[0]
              );
              if (is_earlier && value !== batch_value) {
                batch.current.set(source3, [value, is_derived]);
              } else {
                continue;
              }
            }
            sources.push(source3);
          }
          if (is_earlier) {
            for (const [effect, deferred2] of this.async_deriveds) {
              const d = batch.async_deriveds.get(effect);
              if (d) deferred2.promise.then(d.resolve).catch(d.reject);
            }
          }
          var current2 = [...batch.current.keys()].filter(
            (source3) => !/** @type {[any, boolean]} */
            batch.current.get(source3)[1]
          );
          if (!batch.#started || current2.length === 0) continue;
          var others = current2.filter((source3) => !this.current.has(source3));
          if (others.length === 0) {
            if (is_earlier) {
              batch.discard();
            }
          } else if (sources.length > 0) {
            if (is_earlier) {
              for (const unskipped of this.#unskipped_branches) {
                batch.unskip_effect(unskipped, (e3) => {
                  if ((e3.f & (BLOCK_EFFECT | ASYNC)) !== 0) {
                    batch.schedule(e3);
                  } else {
                    batch.#defer_effects([e3]);
                  }
                });
              }
            }
            batch.activate();
            var marked = /* @__PURE__ */ new Set();
            var checked = /* @__PURE__ */ new Map();
            for (var source2 of sources) {
              mark_effects(source2, others, marked, checked);
            }
            checked = /* @__PURE__ */ new Map();
            var current_unequal = [...batch.current].filter(([c2, v1]) => {
              const v2 = this.current.get(c2);
              if (!v2) return true;
              return v2[0] !== v1[0] || v2[1] !== v1[1];
            }).map(([c2]) => c2);
            if (current_unequal.length > 0) {
              for (const effect of this.#new_effects) {
                if ((effect.f & (DESTROYED | INERT | EAGER_EFFECT)) === 0 && depends_on(effect, current_unequal, checked)) {
                  if ((effect.f & (ASYNC | BLOCK_EFFECT)) !== 0) {
                    set_signal_status(effect, DIRTY);
                    batch.schedule(effect);
                  } else {
                    batch.#dirty_effects.add(effect);
                  }
                }
              }
            }
            if (batch.#roots.length > 0 && !batch.#decrement_queued) {
              batch.apply();
              for (var root2 of batch.#roots) {
                batch.#traverse(root2, [], []);
              }
              batch.#roots = [];
            }
            batch.deactivate();
          }
        }
      }
      /**
       * @param {boolean} blocking
       * @param {Effect} effect
       */
      increment(blocking, effect) {
        this.#pending += 1;
        if (blocking) {
          let blocking_pending_count = this.#blocking_pending.get(effect) ?? 0;
          this.#blocking_pending.set(effect, blocking_pending_count + 1);
        }
      }
      /**
       * @param {boolean} blocking
       * @param {Effect} effect
       */
      decrement(blocking, effect) {
        this.#pending -= 1;
        if (blocking) {
          let blocking_pending_count = this.#blocking_pending.get(effect) ?? 0;
          if (blocking_pending_count === 1) {
            this.#blocking_pending.delete(effect);
          } else {
            this.#blocking_pending.set(effect, blocking_pending_count - 1);
          }
        }
        if (this.#decrement_queued) return;
        this.#decrement_queued = true;
        queue_micro_task(() => {
          this.#decrement_queued = false;
          if (this.linked) {
            this.flush();
          }
        });
      }
      /**
       * @param {Set<Effect>} dirty_effects
       * @param {Set<Effect>} maybe_dirty_effects
       */
      transfer_effects(dirty_effects, maybe_dirty_effects) {
        for (const e3 of dirty_effects) {
          this.#dirty_effects.add(e3);
        }
        for (const e3 of maybe_dirty_effects) {
          this.#maybe_dirty_effects.add(e3);
        }
        dirty_effects.clear();
        maybe_dirty_effects.clear();
      }
      /** @param {(batch: Batch) => void} fn */
      oncommit(fn) {
        this.#commit_callbacks.add(fn);
      }
      /** @param {(batch: Batch) => void} fn */
      ondiscard(fn) {
        this.#discard_callbacks.add(fn);
      }
      settled() {
        return (this.#deferred ??= deferred()).promise;
      }
      static ensure() {
        if (current_batch === null) {
          const batch = current_batch = new _Batch();
          if (!is_processing && !is_flushing_sync) {
            queue_micro_task(() => {
              if (!batch.#started) {
                batch.flush();
              }
            });
          }
        }
        return current_batch;
      }
      apply() {
        {
          batch_values = null;
          return;
        }
      }
      /**
       *
       * @param {Effect} effect
       */
      schedule(effect) {
        last_scheduled_effect = effect;
        if (effect.b?.is_pending && (effect.f & (EFFECT | RENDER_EFFECT | MANAGED_EFFECT)) !== 0 && (effect.f & REACTION_RAN) === 0) {
          effect.b.defer_effect(effect);
          return;
        }
        var e3 = effect;
        while (e3.parent !== null) {
          e3 = e3.parent;
          var flags2 = e3.f;
          if (collected_effects !== null && e3 === active_effect) {
            if ((active_reaction === null || (active_reaction.f & DERIVED) === 0) && true) {
              return;
            }
          }
          if ((flags2 & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
            if ((flags2 & CLEAN) === 0) {
              return;
            }
            e3.f ^= CLEAN;
          }
        }
        this.#roots.push(e3);
      }
      #unlink() {
        if (!this.linked) return;
        var prev = this.#prev;
        var next2 = this.#next;
        if (prev === null) {
          first_batch = next2;
        } else {
          prev.#next = next2;
        }
        if (next2 === null) {
          last_batch = prev;
        } else {
          next2.#prev = prev;
        }
        this.linked = false;
      }
    };
    __name(flushSync, "flushSync");
    __name(infinite_loop_guard, "infinite_loop_guard");
    eager_block_effects = null;
    __name(flush_queued_effects, "flush_queued_effects");
    __name(mark_effects, "mark_effects");
    __name(depends_on, "depends_on");
    __name(schedule_effect, "schedule_effect");
    __name(reset_branch, "reset_branch");
    __name(reset_all, "reset_all");
    eager_effects = /* @__PURE__ */ new Set();
    old_values = /* @__PURE__ */ new Map();
    eager_effects_deferred = false;
    __name(source, "source");
    __name(state, "state");
    __name(mutable_source, "mutable_source");
    __name(set, "set");
    __name(internal_set, "internal_set");
    __name(flush_eager_effects, "flush_eager_effects");
    __name(increment, "increment");
    __name(mark_reactions, "mark_reactions");
    __name(without_reactive_context, "without_reactive_context");
    is_updating_effect = false;
    is_destroying_effect = false;
    __name(set_is_destroying_effect, "set_is_destroying_effect");
    active_reaction = null;
    untracking = false;
    __name(set_active_reaction, "set_active_reaction");
    active_effect = null;
    __name(set_active_effect, "set_active_effect");
    current_sources = null;
    __name(push_reaction_value, "push_reaction_value");
    new_deps = null;
    skipped_deps = 0;
    untracked_writes = null;
    __name(set_untracked_writes, "set_untracked_writes");
    write_version = 1;
    read_version = 0;
    update_version = read_version;
    __name(set_update_version, "set_update_version");
    __name(increment_write_version, "increment_write_version");
    __name(is_dirty, "is_dirty");
    __name(schedule_possible_effect_self_invalidation, "schedule_possible_effect_self_invalidation");
    __name(update_reaction, "update_reaction");
    __name(remove_reaction, "remove_reaction");
    __name(remove_reactions, "remove_reactions");
    __name(update_effect, "update_effect");
    __name(get, "get");
    __name(reconnect, "reconnect");
    __name(depends_on_old_values, "depends_on_old_values");
    __name(untrack, "untrack");
    __name(push_effect, "push_effect");
    __name(create_effect, "create_effect");
    __name(effect_tracking, "effect_tracking");
    __name(create_user_effect, "create_user_effect");
    __name(component_root, "component_root");
    __name(render_effect, "render_effect");
    __name(block, "block");
    __name(branch, "branch");
    __name(execute_effect_teardown, "execute_effect_teardown");
    __name(destroy_effect_children, "destroy_effect_children");
    __name(destroy_block_effect_children, "destroy_block_effect_children");
    __name(destroy_effect, "destroy_effect");
    __name(remove_effect_dom, "remove_effect_dom");
    __name(unlink_effect, "unlink_effect");
    __name(pause_effect, "pause_effect");
    __name(pause_children, "pause_children");
    __name(move_effect, "move_effect");
    DOM_BOOLEAN_ATTRIBUTES = [
      "allowfullscreen",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "disabled",
      "formnovalidate",
      "indeterminate",
      "inert",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "seamless",
      "selected",
      "webkitdirectory",
      "defer",
      "disablepictureinpicture",
      "disableremoteplayback"
    ];
    __name(is_boolean_attribute, "is_boolean_attribute");
    PASSIVE_EVENTS = ["touchstart", "touchmove"];
    __name(is_passive_event, "is_passive_event");
    ATTR_REGEX = /[&"<]/g;
    CONTENT_REGEX = /[&<]/g;
    __name(escape_html2, "escape_html");
    replacements = {
      translate: /* @__PURE__ */ new Map([
        [true, "yes"],
        [false, "no"]
      ])
    };
    __name(attr, "attr");
    __name(clsx2, "clsx");
    whitespace = [..." 	\n\r\f\xA0\v\uFEFF"];
    __name(to_class, "to_class");
    __name(append_styles, "append_styles");
    __name(to_css_name, "to_css_name");
    __name(to_style, "to_style");
    BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
    BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;
    EMPTY_COMMENT = `<!---->`;
    controller = null;
    __name(abort, "abort");
    __name(await_invalid, "await_invalid");
    __name(invalid_csp, "invalid_csp");
    __name(invalid_id_prefix, "invalid_id_prefix");
    __name(server_context_required, "server_context_required");
    ssr_context = null;
    __name(set_ssr_context, "set_ssr_context");
    __name(getContext, "getContext");
    __name(setContext, "setContext");
    __name(get_or_init_context_map, "get_or_init_context_map");
    __name(push, "push");
    __name(pop, "pop");
    __name(get_parent_context, "get_parent_context");
    __name(unresolved_hydratable, "unresolved_hydratable");
    __name(get_render_context, "get_render_context");
    als2 = null;
    obfuscated_import = /* @__PURE__ */ __name((module_name) => import(
      /* @vite-ignore */
      module_name
    ), "obfuscated_import");
    __name(sha256, "sha256");
    __name(base64_encode2, "base64_encode");
    Renderer = class _Renderer {
      static {
        __name(this, "Renderer");
      }
      /**
       * The contents of the renderer.
       * @type {RendererItem[]}
       */
      #out = [];
      /**
       * Any `onDestroy` callbacks registered during execution of this renderer.
       * @type {(() => void)[] | undefined}
       */
      #on_destroy = void 0;
      /**
       * Whether this renderer is a component body.
       * @type {boolean}
       */
      #is_component_body = false;
      /**
       * If set, this renderer is an error boundary. When async collection
       * of the children fails, the failed snippet is rendered instead.
       * @type {{
       * 	failed: (renderer: Renderer, error: unknown, reset: () => void) => void;
       * 	transformError: (error: unknown) => unknown;
       * 	context: SSRContext | null;
       * } | null}
       */
      #boundary = null;
      /**
       * The type of string content that this renderer is accumulating.
       * @type {RendererType}
       */
      type;
      /** @type {Renderer | undefined} */
      #parent;
      /**
       * Asynchronous work associated with this renderer
       * @type {Promise<void> | undefined}
       */
      promise = void 0;
      /**
       * State which is associated with the content tree as a whole.
       * It will be re-exposed, uncopied, on all children.
       * @type {SSRState}
       * @readonly
       */
      global;
      /**
       * State that is local to the branch it is declared in.
       * It will be shallow-copied to all children.
       *
       * @type {{ select_value: string | undefined }}
       */
      local;
      /**
       * @param {SSRState} global
       * @param {Renderer | undefined} [parent]
       */
      constructor(global, parent) {
        this.#parent = parent;
        this.global = global;
        this.local = parent ? { ...parent.local } : { select_value: void 0 };
        this.type = parent ? parent.type : "body";
      }
      /**
       * @param {(renderer: Renderer) => void} fn
       */
      head(fn) {
        const head2 = new _Renderer(this.global, this);
        head2.type = "head";
        this.#out.push(head2);
        head2.child(fn);
      }
      /**
       * @param {Array<Promise<void>>} blockers
       * @param {(renderer: Renderer) => void} fn
       */
      async_block(blockers, fn) {
        this.#out.push(BLOCK_OPEN);
        this.async(blockers, fn);
        this.#out.push(BLOCK_CLOSE);
      }
      /**
       * @param {Array<Promise<void>>} blockers
       * @param {(renderer: Renderer) => void} fn
       */
      async(blockers, fn) {
        let callback = fn;
        if (blockers.length > 0) {
          const context2 = ssr_context;
          callback = /* @__PURE__ */ __name((renderer) => {
            return Promise.all(blockers).then(() => {
              const previous_context = ssr_context;
              try {
                set_ssr_context(context2);
                return fn(renderer);
              } finally {
                set_ssr_context(previous_context);
              }
            });
          }, "callback");
        }
        this.child(callback);
      }
      /**
       * @param {Array<() => void>} thunks
       */
      run(thunks) {
        const context2 = ssr_context;
        let promise = Promise.resolve(thunks[0]());
        const promises = [promise];
        for (const fn of thunks.slice(1)) {
          promise = promise.then(() => {
            const previous_context = ssr_context;
            set_ssr_context(context2);
            try {
              return fn();
            } finally {
              set_ssr_context(previous_context);
            }
          });
          promises.push(promise);
        }
        promise.catch(noop2);
        this.promise = promise;
        return promises;
      }
      /**
       * @param {(renderer: Renderer) => MaybePromise<void>} fn
       */
      child_block(fn) {
        this.#out.push(BLOCK_OPEN);
        this.child(fn);
        this.#out.push(BLOCK_CLOSE);
      }
      /**
       * Create a child renderer. The child renderer inherits the state from the parent,
       * but has its own content.
       * @param {(renderer: Renderer) => MaybePromise<void>} fn
       */
      child(fn) {
        const child = new _Renderer(this.global, this);
        this.#out.push(child);
        const parent = ssr_context;
        set_ssr_context({
          ...ssr_context,
          p: parent,
          c: null,
          r: child
        });
        const result = fn(child);
        set_ssr_context(parent);
        if (result instanceof Promise) {
          result.catch(noop2);
          result.finally(() => set_ssr_context(null)).catch(noop2);
          if (child.global.mode === "sync") {
            await_invalid();
          }
          child.promise = result;
        }
        return child;
      }
      /**
       * Render children inside an error boundary. If the children throw and the API-level
       * `transformError` transform handles the error (doesn't re-throw), the `failed` snippet is
       * rendered instead. Otherwise the error propagates.
       *
       * @param {{ failed?: (renderer: Renderer, error: unknown, reset: () => void) => void }} props
       * @param {(renderer: Renderer) => MaybePromise<void>} children_fn
       */
      boundary(props, children_fn) {
        const child = new _Renderer(this.global, this);
        this.#out.push(child);
        const parent_context = ssr_context;
        if (props.failed) {
          child.#boundary = {
            failed: props.failed,
            transformError: this.global.transformError,
            context: parent_context
          };
        }
        set_ssr_context({
          ...ssr_context,
          p: parent_context,
          c: null,
          r: child
        });
        try {
          const result = children_fn(child);
          set_ssr_context(parent_context);
          if (result instanceof Promise) {
            if (child.global.mode === "sync") {
              await_invalid();
            }
            result.catch(noop2);
            child.promise = result;
          }
        } catch (error3) {
          set_ssr_context(parent_context);
          const failed_snippet = props.failed;
          if (!failed_snippet) throw error3;
          const result = this.global.transformError(error3);
          child.#out.length = 0;
          child.#boundary = null;
          if (result instanceof Promise) {
            if (this.global.mode === "sync") {
              await_invalid();
            }
            child.promise = /** @type {Promise<unknown>} */
            result.then((transformed) => {
              set_ssr_context(parent_context);
              child.#out.push(_Renderer.#serialize_failed_boundary(transformed));
              failed_snippet(child, transformed, noop2);
              child.#out.push(BLOCK_CLOSE);
            });
            child.promise.catch(noop2);
          } else {
            child.#out.push(_Renderer.#serialize_failed_boundary(result));
            failed_snippet(child, result, noop2);
            child.#out.push(BLOCK_CLOSE);
          }
        }
      }
      /**
       * Create a component renderer. The component renderer inherits the state from the parent,
       * but has its own content. It is treated as an ordering boundary for ondestroy callbacks.
       * @param {(renderer: Renderer) => MaybePromise<void>} fn
       * @param {Function} [component_fn]
       * @returns {void}
       */
      component(fn, component_fn) {
        push();
        const child = this.child(fn);
        child.#is_component_body = true;
        pop();
      }
      /**
       * @param {Record<string, any>} attrs
       * @param {(renderer: Renderer) => void} fn
       * @param {string | undefined} [css_hash]
       * @param {Record<string, boolean> | undefined} [classes]
       * @param {Record<string, string> | undefined} [styles]
       * @param {number | undefined} [flags]
       * @param {boolean | undefined} [is_rich]
       * @returns {void}
       */
      select(attrs, fn, css_hash, classes, styles, flags2, is_rich) {
        const { value, ...select_attrs } = attrs;
        this.push(`<select${attributes(select_attrs, css_hash, classes, styles, flags2)}>`);
        this.child((renderer) => {
          renderer.local.select_value = value;
          fn(renderer);
        });
        this.push(`${is_rich ? "<!>" : ""}</select>`);
      }
      /**
       * @param {Record<string, any>} attrs
       * @param {string | number | boolean | ((renderer: Renderer) => void)} body
       * @param {string | undefined} [css_hash]
       * @param {Record<string, boolean> | undefined} [classes]
       * @param {Record<string, string> | undefined} [styles]
       * @param {number | undefined} [flags]
       * @param {boolean | undefined} [is_rich]
       */
      option(attrs, body, css_hash, classes, styles, flags2, is_rich) {
        this.#out.push(`<option${attributes(attrs, css_hash, classes, styles, flags2)}`);
        const close = /* @__PURE__ */ __name((renderer, value, { head: head2, body: body2 }) => {
          if (has_own_property.call(attrs, "value")) {
            value = attrs.value;
          }
          if (value === this.local.select_value) {
            renderer.#out.push(' selected=""');
          }
          renderer.#out.push(`>${body2}${is_rich ? "<!>" : ""}</option>`);
          if (head2) {
            renderer.head((child) => child.push(head2));
          }
        }, "close");
        if (typeof body === "function") {
          this.child((renderer) => {
            const r3 = new _Renderer(this.global, this);
            body(r3);
            if (this.global.mode === "async") {
              return r3.#collect_content_async().then((content) => {
                close(renderer, content.body.replaceAll("<!---->", ""), content);
              });
            } else {
              const content = r3.#collect_content();
              close(renderer, content.body.replaceAll("<!---->", ""), content);
            }
          });
        } else {
          close(this, body, { body: escape_html2(body) });
        }
      }
      /**
       * @param {(renderer: Renderer) => void} fn
       */
      title(fn) {
        const path = this.get_path();
        const close = /* @__PURE__ */ __name((head2) => {
          this.global.set_title(head2, path);
        }, "close");
        this.child((renderer) => {
          const r3 = new _Renderer(renderer.global, renderer);
          fn(r3);
          if (renderer.global.mode === "async") {
            return r3.#collect_content_async().then((content) => {
              close(content.head);
            });
          } else {
            const content = r3.#collect_content();
            close(content.head);
          }
        });
      }
      /**
       * @param {string | (() => Promise<string>)} content
       */
      push(content) {
        if (typeof content === "function") {
          this.child(async (renderer) => renderer.push(await content()));
        } else {
          this.#out.push(content);
        }
      }
      /**
       * @param {() => void} fn
       */
      on_destroy(fn) {
        (this.#on_destroy ??= []).push(fn);
      }
      /**
       * @returns {number[]}
       */
      get_path() {
        return this.#parent ? [...this.#parent.get_path(), this.#parent.#out.indexOf(this)] : [];
      }
      /**
       * @deprecated this is needed for legacy component bindings
       */
      copy() {
        const copy = new _Renderer(this.global, this.#parent);
        copy.#out = this.#out.map((item) => item instanceof _Renderer ? item.copy() : item);
        copy.promise = this.promise;
        return copy;
      }
      /**
       * @param {Renderer} other
       * @deprecated this is needed for legacy component bindings
       */
      subsume(other) {
        if (this.global.mode !== other.global.mode) {
          throw new Error(
            "invariant: A renderer cannot switch modes. If you're seeing this, there's a compiler bug. File an issue!"
          );
        }
        this.local = other.local;
        this.#out = other.#out.map((item, i) => {
          const current2 = this.#out[i];
          if (current2 instanceof _Renderer && item instanceof _Renderer) {
            current2.subsume(item);
            return current2;
          }
          return item;
        });
        this.promise = other.promise;
        this.type = other.type;
      }
      get length() {
        return this.#out.length;
      }
      /**
       * Creates the hydration comment that marks the start of a failed boundary.
       * The error is JSON-serialized and embedded inside an HTML comment for the client
       * to parse during hydration. The JSON is escaped to prevent `-->` or `<!--` sequences
       * from breaking out of the comment (XSS). Uses unicode escapes which `JSON.parse()`
       * handles transparently.
       * @param {unknown} error
       * @returns {string}
       */
      static #serialize_failed_boundary(error3) {
        var json2 = JSON.stringify(error3);
        var escaped2 = json2.replace(/>/g, "\\u003e").replace(/</g, "\\u003c");
        return `<!--${HYDRATION_START_FAILED}${escaped2}-->`;
      }
      /**
       * Only available on the server and when compiling with the `server` option.
       * Takes a component and returns an object with `body` and `head` properties on it, which you can use to populate the HTML when server-rendering your app.
       * @template {Record<string, any>} Props
       * @param {Component<Props>} component
       * @param {{ props?: Omit<Props, '$$slots' | '$$events'>; context?: Map<any, any>; idPrefix?: string; csp?: Csp }} [options]
       * @returns {RenderOutput}
       */
      static render(component5, options2 = {}) {
        let sync;
        const result = (
          /** @type {RenderOutput} */
          {}
        );
        Object.defineProperties(result, {
          html: {
            get: /* @__PURE__ */ __name(() => {
              return (sync ??= _Renderer.#render(component5, options2)).body;
            }, "get")
          },
          head: {
            get: /* @__PURE__ */ __name(() => {
              return (sync ??= _Renderer.#render(component5, options2)).head;
            }, "get")
          },
          body: {
            get: /* @__PURE__ */ __name(() => {
              return (sync ??= _Renderer.#render(component5, options2)).body;
            }, "get")
          },
          hashes: {
            value: {
              script: ""
            }
          },
          then: {
            value: (
              /**
               * this is not type-safe, but honestly it's the best I can do right now, and it's a straightforward function.
               *
               * @template TResult1
               * @template [TResult2=never]
               * @param { (value: SyncRenderOutput) => TResult1 } onfulfilled
               * @param { (reason: unknown) => TResult2 } onrejected
               */
              /* @__PURE__ */ __name(((onfulfilled, onrejected) => {
                {
                  const result2 = sync ??= _Renderer.#render(component5, options2);
                  const user_result = onfulfilled({
                    head: result2.head,
                    body: result2.body,
                    html: result2.body,
                    hashes: { script: [] }
                  });
                  return Promise.resolve(user_result);
                }
              }), "value")
            )
          }
        });
        return result;
      }
      /**
       * Collect all of the `onDestroy` callbacks registered during rendering. In an async context, this is only safe to call
       * after awaiting `collect_async`.
       *
       * Child renderers are "porous" and don't affect execution order, but component body renderers
       * create ordering boundaries. Within a renderer, callbacks run in order until hitting a component boundary.
       * @returns {Iterable<() => void>}
       */
      *#collect_on_destroy() {
        for (const component5 of this.#traverse_components()) {
          yield* component5.#collect_ondestroy();
        }
      }
      /**
       * Performs a depth-first search of renderers, yielding the deepest components first, then additional components as we backtrack up the tree.
       * @returns {Iterable<Renderer>}
       */
      *#traverse_components() {
        for (const child of this.#out) {
          if (typeof child !== "string") {
            yield* child.#traverse_components();
          }
        }
        if (this.#is_component_body) {
          yield this;
        }
      }
      /**
       * @returns {Iterable<() => void>}
       */
      *#collect_ondestroy() {
        if (this.#on_destroy) {
          for (const fn of this.#on_destroy) {
            yield fn;
          }
        }
        for (const child of this.#out) {
          if (child instanceof _Renderer && !child.#is_component_body) {
            yield* child.#collect_ondestroy();
          }
        }
      }
      /**
       * Render a component. Throws if any of the children are performing asynchronous work.
       *
       * @template {Record<string, any>} Props
       * @param {Component<Props>} component
       * @param {{ props?: Omit<Props, '$$slots' | '$$events'>; context?: Map<any, any>; idPrefix?: string }} options
       * @returns {AccumulatedContent}
       */
      static #render(component5, options2) {
        var previous_context = ssr_context;
        try {
          const renderer = _Renderer.#open_render("sync", component5, options2);
          const content = renderer.#collect_content();
          return _Renderer.#close_render(content, renderer);
        } finally {
          abort();
          set_ssr_context(previous_context);
        }
      }
      /**
       * Render a component.
       *
       * @template {Record<string, any>} Props
       * @param {Component<Props>} component
       * @param {{ props?: Omit<Props, '$$slots' | '$$events'>; context?: Map<any, any>; idPrefix?: string; csp?: Csp }} options
       * @returns {Promise<AccumulatedContent & { hashes: { script: Sha256Source[] } }>}
       */
      static async #render_async(component5, options2) {
        const previous_context = ssr_context;
        try {
          const renderer = _Renderer.#open_render("async", component5, options2);
          const content = await renderer.#collect_content_async();
          const hydratables = await renderer.#collect_hydratables();
          if (hydratables !== null) {
            content.head = hydratables + content.head;
          }
          return _Renderer.#close_render(content, renderer);
        } finally {
          set_ssr_context(previous_context);
          abort();
        }
      }
      /**
       * Collect all of the code from the `out` array and return it as a string, or a promise resolving to a string.
       * @param {AccumulatedContent} content
       * @returns {AccumulatedContent}
       */
      #collect_content(content = { head: "", body: "" }) {
        for (const item of this.#out) {
          if (typeof item === "string") {
            content[this.type] += item;
          } else if (item instanceof _Renderer) {
            item.#collect_content(content);
          }
        }
        return content;
      }
      /**
       * Collect all of the code from the `out` array and return it as a string.
       * @param {AccumulatedContent} content
       * @returns {Promise<AccumulatedContent>}
       */
      async #collect_content_async(content = { head: "", body: "" }) {
        await this.promise;
        for (const item of this.#out) {
          if (typeof item === "string") {
            content[this.type] += item;
          } else if (item instanceof _Renderer) {
            if (item.#boundary) {
              const boundary_content = { head: "", body: "" };
              try {
                await item.#collect_content_async(boundary_content);
                content.head += boundary_content.head;
                content.body += boundary_content.body;
              } catch (error3) {
                const { context: context2, failed, transformError } = item.#boundary;
                set_ssr_context(context2);
                let promise = transformError(error3);
                set_ssr_context(null);
                let transformed = await promise;
                set_ssr_context(context2);
                const failed_renderer = new _Renderer(item.global, item);
                failed_renderer.type = item.type;
                failed_renderer.#out.push(_Renderer.#serialize_failed_boundary(transformed));
                failed(failed_renderer, transformed, noop2);
                failed_renderer.#out.push(BLOCK_CLOSE);
                await failed_renderer.#collect_content_async(content);
              }
            } else {
              await item.#collect_content_async(content);
            }
          }
        }
        return content;
      }
      async #collect_hydratables() {
        const ctx = get_render_context().hydratable;
        for (const [_, key2] of ctx.unresolved_promises) {
          unresolved_hydratable(key2, ctx.lookup.get(key2)?.stack ?? "<missing stack trace>");
        }
        for (const comparison of ctx.comparisons) {
          await comparison;
        }
        return await this.#hydratable_block(ctx);
      }
      /**
       * @template {Record<string, any>} Props
       * @param {'sync' | 'async'} mode
       * @param {import('svelte').Component<Props>} component
       * @param {{ props?: Omit<Props, '$$slots' | '$$events'>; context?: Map<any, any>; idPrefix?: string; csp?: Csp; transformError?: (error: unknown) => unknown }} options
       * @returns {Renderer}
       */
      static #open_render(mode, component5, options2) {
        if (options2.idPrefix?.includes("--")) {
          invalid_id_prefix();
        }
        var previous_context = ssr_context;
        try {
          const renderer = new _Renderer(
            new SSRState(
              mode,
              options2.idPrefix ? options2.idPrefix + "-" : "",
              options2.csp,
              options2.transformError
            )
          );
          const context2 = { p: null, c: options2.context ?? null, r: renderer };
          set_ssr_context(context2);
          renderer.push(BLOCK_OPEN);
          component5(renderer, options2.props ?? {});
          renderer.push(BLOCK_CLOSE);
          return renderer;
        } finally {
          set_ssr_context(previous_context);
        }
      }
      /**
       * @param {AccumulatedContent} content
       * @param {Renderer} renderer
       * @returns {AccumulatedContent & { hashes: { script: Sha256Source[] } }}
       */
      static #close_render(content, renderer) {
        for (const cleanup of renderer.#collect_on_destroy()) {
          cleanup();
        }
        let head2 = content.head + renderer.global.get_title();
        let body = content.body;
        for (const { hash: hash2, code } of renderer.global.css) {
          head2 += `<style id="${hash2}">${code}</style>`;
        }
        return {
          head: head2,
          body,
          hashes: {
            script: renderer.global.csp.script_hashes
          }
        };
      }
      /**
       * @param {HydratableContext} ctx
       */
      async #hydratable_block(ctx) {
        if (ctx.lookup.size === 0) {
          return null;
        }
        let entries = [];
        let has_promises = false;
        for (const [k, v] of ctx.lookup) {
          if (v.promises) {
            has_promises = true;
            for (const p of v.promises) await p;
          }
          entries.push(`[${uneval(k)},${v.serialized}]`);
        }
        let prelude = `const h = (window.__svelte ??= {}).h ??= new Map();`;
        if (has_promises) {
          prelude = `const r = (v) => Promise.resolve(v);
				${prelude}`;
        }
        const body = `
			{
				${prelude}

				for (const [k, v] of [
					${entries.join(",\n					")}
				]) {
					h.set(k, v);
				}
			}
		`;
        let csp_attr = "";
        if (this.global.csp.nonce) {
          csp_attr = ` nonce="${this.global.csp.nonce}"`;
        } else if (this.global.csp.hash) {
          const hash2 = await sha256(body);
          this.global.csp.script_hashes.push(`sha256-${hash2}`);
        }
        return `
		<script${csp_attr}>${body}<\/script>`;
      }
    };
    SSRState = class {
      static {
        __name(this, "SSRState");
      }
      /** @readonly @type {Csp & { script_hashes: Sha256Source[] }} */
      csp;
      /** @readonly @type {'sync' | 'async'} */
      mode;
      /** @readonly @type {() => string} */
      uid;
      /** @readonly @type {Set<{ hash: string; code: string }>} */
      css = /* @__PURE__ */ new Set();
      /**
       * `transformError` passed to `render`. Called when an error boundary catches an error.
       * Throws by default if unset in `render`.
       * @type {(error: unknown) => unknown}
       */
      transformError;
      /** @type {{ path: number[], value: string }} */
      #title = { path: [], value: "" };
      /**
       * @param {'sync' | 'async'} mode
       * @param {string} id_prefix
       * @param {Csp} csp
       * @param {((error: unknown) => unknown) | undefined} [transformError]
       */
      constructor(mode, id_prefix = "", csp = { hash: false }, transformError) {
        this.mode = mode;
        this.csp = { ...csp, script_hashes: [] };
        this.transformError = transformError ?? ((error3) => {
          throw error3;
        });
        let uid2 = 1;
        this.uid = () => `${id_prefix}s${uid2++}`;
      }
      get_title() {
        return this.#title.value;
      }
      /**
       * Performs a depth-first (lexicographic) comparison using the path. Rejects sets
       * from earlier than or equal to the current value.
       * @param {string} value
       * @param {number[]} path
       */
      set_title(value, path) {
        const current2 = this.#title.path;
        let i = 0;
        let l = Math.min(path.length, current2.length);
        while (i < l && path[i] === current2[i]) i += 1;
        if (path[i] === void 0) return;
        if (current2[i] === void 0 || path[i] > current2[i]) {
          this.#title.path = path;
          this.#title.value = value;
        }
      }
    };
    INVALID_ATTR_NAME_CHAR_REGEX = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
    __name(render, "render");
    __name(head, "head");
    __name(attributes, "attributes");
    __name(stringify3, "stringify");
    __name(attr_class, "attr_class");
    __name(attr_style, "attr_style");
    __name(store_get, "store_get");
    __name(unsubscribe_stores, "unsubscribe_stores");
    __name(ensure_array_like, "ensure_array_like");
    __name(once2, "once");
    __name(derived, "derived");
  }
});

// .svelte-kit/output/server/chunks/index2.js
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop2) {
  let stop = null;
  const subscribers = /* @__PURE__ */ new Set();
  function set2(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  __name(set2, "set");
  function update(fn) {
    set2(fn(
      /** @type {T} */
      value
    ));
  }
  __name(update, "update");
  function subscribe(run2, invalidate = noop2) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set2, update) || noop2;
    }
    run2(
      /** @type {T} */
      value
    );
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  __name(subscribe, "subscribe");
  return { set: set2, update, subscribe };
}
function derived2(stores2, fn, initial_value) {
  const single = !Array.isArray(stores2);
  const stores_array = single ? [stores2] : stores2;
  if (!stores_array.every(Boolean)) {
    throw new Error("derived() expects stores as input, got a falsy value");
  }
  const auto = fn.length < 2;
  return readable(initial_value, (set2, update) => {
    let started = false;
    const values = [];
    let pending = 0;
    let cleanup = noop2;
    const sync = /* @__PURE__ */ __name(() => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set2, update);
      if (auto) {
        set2(result);
      } else {
        cleanup = typeof result === "function" ? result : noop2;
      }
    }, "sync");
    const unsubscribers = stores_array.map(
      (store, i) => subscribe_to_store(
        store,
        (value) => {
          values[i] = value;
          pending &= ~(1 << i);
          if (started) {
            sync();
          }
        },
        () => {
          pending |= 1 << i;
        }
      )
    );
    started = true;
    sync();
    return /* @__PURE__ */ __name(function stop() {
      run_all(unsubscribers);
      cleanup();
      started = false;
    }, "stop");
  });
}
var subscriber_queue;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    init_modules_watch_stub();
    init_chunks();
    subscriber_queue = [];
    __name(readable, "readable");
    __name(writable, "writable");
    __name(derived2, "derived");
  }
});

// .svelte-kit/output/server/chunks/root.js
function set_hydrating(value) {
  hydrating = value;
}
function set_hydrate_node(node) {
  if (node === null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return hydrate_node = node;
}
function hydrate_next() {
  return set_hydrate_node(get_next_sibling(hydrate_node));
}
function next(count = 1) {
  if (hydrating) {
    var i = count;
    var node = hydrate_node;
    while (i--) {
      node = /** @type {TemplateNode} */
      get_next_sibling(node);
    }
    hydrate_node = node;
  }
}
function skip_nodes(remove = true) {
  var depth = 0;
  var node = hydrate_node;
  while (true) {
    if (node.nodeType === COMMENT_NODE) {
      var data = (
        /** @type {Comment} */
        node.data
      );
      if (data === HYDRATION_END) {
        if (depth === 0) return node;
        depth -= 1;
      } else if (data === HYDRATION_START || data === HYDRATION_START_ELSE || // "[1", "[2", etc. for if blocks
      data[0] === "[" && !isNaN(Number(data.slice(1)))) {
        depth += 1;
      }
    }
    var next2 = (
      /** @type {TemplateNode} */
      get_next_sibling(node)
    );
    if (remove) node.remove();
    node = next2;
  }
}
function createSubscriber(start) {
  let subscribers = 0;
  let version = source(0);
  let stop;
  return () => {
    if (effect_tracking()) {
      get(version);
      render_effect(() => {
        if (subscribers === 0) {
          stop = untrack(() => start(() => increment(version)));
        }
        subscribers += 1;
        return () => {
          queue_micro_task(() => {
            subscribers -= 1;
            if (subscribers === 0) {
              stop?.();
              stop = void 0;
              increment(version);
            }
          });
        };
      });
    }
  };
}
function boundary(node, props, children, transform_error) {
  new Boundary(node, props, children, transform_error);
}
function handle_event_propagation(event) {
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event.type;
  var path = event.composedPath?.() || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event.target
  );
  last_propagated_event = event;
  var path_idx = 0;
  var handled_at = last_propagated_event === event && event[event_symbol];
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event[event_symbol] = handler_element;
      return;
    }
    var handler_idx = path.indexOf(handler_element);
    if (handler_idx === -1) {
      return;
    }
    if (at_idx <= handler_idx) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event.target;
  if (current_target === handler_element) return;
  define_property(event, "currentTarget", {
    configurable: true,
    get() {
      return current_target || owner_document;
    }
  });
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    var throw_error;
    var other_errors = [];
    while (current_target !== null) {
      if (current_target === handler_element) break;
      try {
        var delegated = current_target[event_symbol]?.[event_name];
        if (delegated != null && (!/** @type {any} */
        current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
        // -> the target could not have been disabled because it emits the event in the first place
        event.target === current_target)) {
          delegated.call(current_target, event);
        }
      } catch (error3) {
        if (throw_error) {
          other_errors.push(error3);
        } else {
          throw_error = error3;
        }
      }
      if (event.cancelBubble) break;
      path_idx++;
      current_target = path_idx < path.length ? (
        /** @type {Element} */
        path[path_idx]
      ) : null;
    }
    if (throw_error) {
      for (let error3 of other_errors) {
        queueMicrotask(() => {
          throw error3;
        });
      }
      throw throw_error;
    }
  } finally {
    event[event_symbol] = handler_element;
    delete event.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
function assign_nodes(start, end) {
  var effect = (
    /** @type {Effect} */
    active_effect
  );
  if (effect.nodes === null) {
    effect.nodes = { start, end, a: null, t: null };
  }
}
function mount(component5, options2) {
  return _mount(component5, options2);
}
function hydrate(component5, options2) {
  init_operations();
  options2.intro = options2.intro ?? false;
  const target = options2.target;
  const was_hydrating = hydrating;
  const previous_hydrate_node = hydrate_node;
  try {
    var anchor = get_first_child(target);
    while (anchor && (anchor.nodeType !== COMMENT_NODE || /** @type {Comment} */
    anchor.data !== HYDRATION_START)) {
      anchor = get_next_sibling(anchor);
    }
    if (!anchor) {
      throw HYDRATION_ERROR;
    }
    set_hydrating(true);
    set_hydrate_node(
      /** @type {Comment} */
      anchor
    );
    const instance = _mount(component5, { ...options2, anchor });
    set_hydrating(false);
    return (
      /**  @type {Exports} */
      instance
    );
  } catch (error3) {
    if (error3 instanceof Error && error3.message.split("\n").some((line) => line.startsWith("https://svelte.dev/e/"))) {
      throw error3;
    }
    if (error3 !== HYDRATION_ERROR) {
      console.warn("Failed to hydrate: ", error3);
    }
    if (options2.recover === false) {
      hydration_failed();
    }
    init_operations();
    clear_text_content(target);
    set_hydrating(false);
    return mount(component5, options2);
  } finally {
    set_hydrating(was_hydrating);
    set_hydrate_node(previous_hydrate_node);
  }
}
function _mount(Component, { target, anchor, props = {}, events, context: context2, intro = true, transformError }) {
  init_operations();
  var component5 = void 0;
  var unmount2 = component_root(() => {
    var anchor_node = anchor ?? target.appendChild(create_text());
    boundary(
      /** @type {TemplateNode} */
      anchor_node,
      {
        pending: /* @__PURE__ */ __name(() => {
        }, "pending")
      },
      (anchor_node2) => {
        push$1({});
        var ctx = (
          /** @type {ComponentContext} */
          component_context
        );
        if (context2) ctx.c = context2;
        if (events) {
          props.$$events = events;
        }
        if (hydrating) {
          assign_nodes(
            /** @type {TemplateNode} */
            anchor_node2,
            null
          );
        }
        component5 = Component(anchor_node2, props) || {};
        if (hydrating) {
          active_effect.nodes.end = hydrate_node;
          if (hydrate_node === null || hydrate_node.nodeType !== COMMENT_NODE || /** @type {Comment} */
          hydrate_node.data !== HYDRATION_END) {
            hydration_mismatch();
            throw HYDRATION_ERROR;
          }
        }
        pop$1();
      },
      transformError
    );
    var registered_events = /* @__PURE__ */ new Set();
    var event_handle = /* @__PURE__ */ __name((events2) => {
      for (var i = 0; i < events2.length; i++) {
        var event_name = events2[i];
        if (registered_events.has(event_name)) continue;
        registered_events.add(event_name);
        var passive = is_passive_event(event_name);
        for (const node of [target, document]) {
          var counts = listeners.get(node);
          if (counts === void 0) {
            counts = /* @__PURE__ */ new Map();
            listeners.set(node, counts);
          }
          var count = counts.get(event_name);
          if (count === void 0) {
            node.addEventListener(event_name, handle_event_propagation, { passive });
            counts.set(event_name, 1);
          } else {
            counts.set(event_name, count + 1);
          }
        }
      }
    }, "event_handle");
    event_handle(array_from(all_registered_events));
    root_event_handles.add(event_handle);
    return () => {
      for (var event_name of registered_events) {
        for (const node of [target, document]) {
          var counts = (
            /** @type {Map<string, number>} */
            listeners.get(node)
          );
          var count = (
            /** @type {number} */
            counts.get(event_name)
          );
          if (--count == 0) {
            node.removeEventListener(event_name, handle_event_propagation);
            counts.delete(event_name);
            if (counts.size === 0) {
              listeners.delete(node);
            }
          } else {
            counts.set(event_name, count);
          }
        }
      }
      root_event_handles.delete(event_handle);
      if (anchor_node !== anchor) {
        anchor_node.parentNode?.removeChild(anchor_node);
      }
    };
  });
  mounted_components.set(component5, unmount2);
  return component5;
}
function unmount(component5, options2) {
  const fn = mounted_components.get(component5);
  if (fn) {
    mounted_components.delete(component5);
    return fn(options2);
  }
  return Promise.resolve();
}
function asClassComponent$1(component5) {
  return class extends Svelte4Component {
    /** @param {any} options */
    constructor(options2) {
      super({
        component: component5,
        ...options2
      });
    }
  };
}
function asClassComponent(component5) {
  const component_constructor = asClassComponent$1(component5);
  const _render = /* @__PURE__ */ __name((props, { context: context2, csp, transformError } = {}) => {
    const result = render(component5, { props, context: context2, csp, transformError });
    const munged = Object.defineProperties(
      /** @type {LegacyRenderResult & PromiseLike<LegacyRenderResult>} */
      {},
      {
        css: {
          value: { code: "", map: null }
        },
        head: {
          get: /* @__PURE__ */ __name(() => result.head, "get")
        },
        html: {
          get: /* @__PURE__ */ __name(() => result.body, "get")
        },
        then: {
          /**
           * this is not type-safe, but honestly it's the best I can do right now, and it's a straightforward function.
           *
           * @template TResult1
           * @template [TResult2=never]
           * @param { (value: LegacyRenderResult) => TResult1 } onfulfilled
           * @param { (reason: unknown) => TResult2 } onrejected
           */
          value: /* @__PURE__ */ __name((onfulfilled, onrejected) => {
            {
              const user_result = onfulfilled({
                css: munged.css,
                head: munged.head,
                html: munged.html
              });
              return Promise.resolve(user_result);
            }
          }, "value")
        }
      }
    );
    return munged;
  }, "_render");
  component_constructor.render = _render;
  return component_constructor;
}
function Root($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      stores: stores2,
      page: page2,
      constructors,
      components = [],
      form,
      data_0 = null,
      data_1 = null
    } = $$props;
    {
      setContext("__svelte__", stores2);
    }
    {
      stores2.page.set(page2);
    }
    const Pyramid_1 = derived(() => constructors[1]);
    if (constructors[1]) {
      $$renderer2.push("<!--[0-->");
      const Pyramid_0 = constructors[0];
      if (Pyramid_0) {
        $$renderer2.push("<!--[-->");
        Pyramid_0($$renderer2, {
          data: data_0,
          form,
          params: page2.params,
          children: /* @__PURE__ */ __name(($$renderer3) => {
            if (Pyramid_1()) {
              $$renderer3.push("<!--[-->");
              Pyramid_1()($$renderer3, { data: data_1, form, params: page2.params });
              $$renderer3.push("<!--]-->");
            } else {
              $$renderer3.push("<!--[!-->");
              $$renderer3.push("<!--]-->");
            }
          }, "children"),
          $$slots: { default: true }
        });
        $$renderer2.push("<!--]-->");
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push("<!--]-->");
      }
    } else {
      $$renderer2.push("<!--[-1-->");
      const Pyramid_0 = constructors[0];
      if (Pyramid_0) {
        $$renderer2.push("<!--[-->");
        Pyramid_0($$renderer2, { data: data_0, form, params: page2.params });
        $$renderer2.push("<!--]-->");
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push("<!--]-->");
      }
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
var hydrating, hydrate_node, flags, Boundary, event_symbol, all_registered_events, root_event_handles, last_propagated_event, listeners, mounted_components, Svelte4Component, root;
var init_root = __esm({
  ".svelte-kit/output/server/chunks/root.js"() {
    init_modules_watch_stub();
    init_chunks();
    hydrating = false;
    __name(set_hydrating, "set_hydrating");
    __name(set_hydrate_node, "set_hydrate_node");
    __name(hydrate_next, "hydrate_next");
    __name(next, "next");
    __name(skip_nodes, "skip_nodes");
    __name(createSubscriber, "createSubscriber");
    flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED;
    __name(boundary, "boundary");
    Boundary = class {
      static {
        __name(this, "Boundary");
      }
      /** @type {Boundary | null} */
      parent;
      is_pending = false;
      /**
       * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
       * Inherited from parent boundary, or defaults to identity.
       * @type {(error: unknown) => unknown}
       */
      transform_error;
      /** @type {TemplateNode} */
      #anchor;
      /** @type {TemplateNode | null} */
      #hydrate_open = hydrating ? hydrate_node : null;
      /** @type {BoundaryProps} */
      #props;
      /** @type {((anchor: Node) => void)} */
      #children;
      /** @type {Effect} */
      #effect;
      /** @type {Effect | null} */
      #main_effect = null;
      /** @type {Effect | null} */
      #pending_effect = null;
      /** @type {Effect | null} */
      #failed_effect = null;
      /** @type {DocumentFragment | null} */
      #offscreen_fragment = null;
      #local_pending_count = 0;
      #pending_count = 0;
      #pending_count_update_queued = false;
      /** @type {Set<Effect>} */
      #dirty_effects = /* @__PURE__ */ new Set();
      /** @type {Set<Effect>} */
      #maybe_dirty_effects = /* @__PURE__ */ new Set();
      /**
       * A source containing the number of pending async deriveds/expressions.
       * Only created if `$effect.pending()` is used inside the boundary,
       * otherwise updating the source results in needless `Batch.ensure()`
       * calls followed by no-op flushes
       * @type {Source<number> | null}
       */
      #effect_pending = null;
      #effect_pending_subscriber = createSubscriber(() => {
        this.#effect_pending = source(this.#local_pending_count);
        return () => {
          this.#effect_pending = null;
        };
      });
      /**
       * @param {TemplateNode} node
       * @param {BoundaryProps} props
       * @param {((anchor: Node) => void)} children
       * @param {((error: unknown) => unknown) | undefined} [transform_error]
       */
      constructor(node, props, children, transform_error) {
        this.#anchor = node;
        this.#props = props;
        this.#children = (anchor) => {
          var effect = (
            /** @type {Effect} */
            active_effect
          );
          effect.b = this;
          effect.f |= BOUNDARY_EFFECT;
          children(anchor);
        };
        this.parent = /** @type {Effect} */
        active_effect.b;
        this.transform_error = transform_error ?? this.parent?.transform_error ?? ((e3) => e3);
        this.#effect = block(() => {
          if (hydrating) {
            const comment = (
              /** @type {Comment} */
              this.#hydrate_open
            );
            hydrate_next();
            const server_rendered_pending = comment.data === HYDRATION_START_ELSE;
            const server_rendered_failed = comment.data.startsWith(HYDRATION_START_FAILED);
            if (server_rendered_failed) {
              const serialized_error = JSON.parse(comment.data.slice(HYDRATION_START_FAILED.length));
              this.#hydrate_failed_content(serialized_error);
            } else if (server_rendered_pending) {
              this.#hydrate_pending_content();
            } else {
              this.#hydrate_resolved_content();
            }
          } else {
            this.#render();
          }
        }, flags);
        if (hydrating) {
          this.#anchor = hydrate_node;
        }
      }
      #hydrate_resolved_content() {
        try {
          this.#main_effect = branch(() => this.#children(this.#anchor));
        } catch (error3) {
          this.error(error3);
        }
      }
      /**
       * @param {unknown} error The deserialized error from the server's hydration comment
       */
      #hydrate_failed_content(error3) {
        const failed = this.#props.failed;
        if (!failed) return;
        this.#failed_effect = branch(() => {
          failed(
            this.#anchor,
            () => error3,
            () => () => {
            }
          );
        });
      }
      #hydrate_pending_content() {
        const pending = this.#props.pending;
        if (!pending) return;
        this.is_pending = true;
        this.#pending_effect = branch(() => pending(this.#anchor));
        queue_micro_task(() => {
          var fragment = this.#offscreen_fragment = document.createDocumentFragment();
          var anchor = create_text();
          fragment.append(anchor);
          this.#main_effect = this.#run(() => {
            return branch(() => this.#children(anchor));
          });
          if (this.#pending_count === 0) {
            this.#anchor.before(fragment);
            this.#offscreen_fragment = null;
            pause_effect(
              /** @type {Effect} */
              this.#pending_effect,
              () => {
                this.#pending_effect = null;
              }
            );
            this.#resolve(
              /** @type {Batch} */
              current_batch
            );
          }
        });
      }
      #render() {
        try {
          this.is_pending = this.has_pending_snippet();
          this.#pending_count = 0;
          this.#local_pending_count = 0;
          this.#main_effect = branch(() => {
            this.#children(this.#anchor);
          });
          if (this.#pending_count > 0) {
            var fragment = this.#offscreen_fragment = document.createDocumentFragment();
            move_effect(this.#main_effect, fragment);
            const pending = (
              /** @type {(anchor: Node) => void} */
              this.#props.pending
            );
            this.#pending_effect = branch(() => pending(this.#anchor));
          } else {
            this.#resolve(
              /** @type {Batch} */
              current_batch
            );
          }
        } catch (error3) {
          this.error(error3);
        }
      }
      /**
       * @param {Batch} batch
       */
      #resolve(batch) {
        this.is_pending = false;
        batch.transfer_effects(this.#dirty_effects, this.#maybe_dirty_effects);
      }
      /**
       * Defer an effect inside a pending boundary until the boundary resolves
       * @param {Effect} effect
       */
      defer_effect(effect) {
        defer_effect(effect, this.#dirty_effects, this.#maybe_dirty_effects);
      }
      /**
       * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
       * @returns {boolean}
       */
      is_rendered() {
        return !this.is_pending && (!this.parent || this.parent.is_rendered());
      }
      has_pending_snippet() {
        return !!this.#props.pending;
      }
      /**
       * @template T
       * @param {() => T} fn
       */
      #run(fn) {
        var previous_effect = active_effect;
        var previous_reaction = active_reaction;
        var previous_ctx = component_context;
        set_active_effect(this.#effect);
        set_active_reaction(this.#effect);
        set_component_context(this.#effect.ctx);
        try {
          Batch.ensure();
          return fn();
        } catch (e3) {
          handle_error(e3);
          return null;
        } finally {
          set_active_effect(previous_effect);
          set_active_reaction(previous_reaction);
          set_component_context(previous_ctx);
        }
      }
      /**
       * Updates the pending count associated with the currently visible pending snippet,
       * if any, such that we can replace the snippet with content once work is done
       * @param {1 | -1} d
       * @param {Batch} batch
       */
      #update_pending_count(d, batch) {
        if (!this.has_pending_snippet()) {
          if (this.parent) {
            this.parent.#update_pending_count(d, batch);
          }
          return;
        }
        this.#pending_count += d;
        if (this.#pending_count === 0) {
          this.#resolve(batch);
          if (this.#pending_effect) {
            pause_effect(this.#pending_effect, () => {
              this.#pending_effect = null;
            });
          }
          if (this.#offscreen_fragment) {
            this.#anchor.before(this.#offscreen_fragment);
            this.#offscreen_fragment = null;
          }
        }
      }
      /**
       * Update the source that powers `$effect.pending()` inside this boundary,
       * and controls when the current `pending` snippet (if any) is removed.
       * Do not call from inside the class
       * @param {1 | -1} d
       * @param {Batch} batch
       */
      update_pending_count(d, batch) {
        this.#update_pending_count(d, batch);
        this.#local_pending_count += d;
        if (!this.#effect_pending || this.#pending_count_update_queued) return;
        this.#pending_count_update_queued = true;
        queue_micro_task(() => {
          this.#pending_count_update_queued = false;
          if (this.#effect_pending) {
            internal_set(this.#effect_pending, this.#local_pending_count);
          }
        });
      }
      get_effect_pending() {
        this.#effect_pending_subscriber();
        return get(
          /** @type {Source<number>} */
          this.#effect_pending
        );
      }
      /** @param {unknown} error */
      error(error3) {
        if (!this.#props.onerror && !this.#props.failed) {
          throw error3;
        }
        if (current_batch?.is_fork) {
          if (this.#main_effect) current_batch.skip_effect(this.#main_effect);
          if (this.#pending_effect) current_batch.skip_effect(this.#pending_effect);
          if (this.#failed_effect) current_batch.skip_effect(this.#failed_effect);
          current_batch.oncommit(() => {
            this.#handle_error(error3);
          });
        } else {
          this.#handle_error(error3);
        }
      }
      /**
       * @param {unknown} error
       */
      #handle_error(error3) {
        if (this.#main_effect) {
          destroy_effect(this.#main_effect);
          this.#main_effect = null;
        }
        if (this.#pending_effect) {
          destroy_effect(this.#pending_effect);
          this.#pending_effect = null;
        }
        if (this.#failed_effect) {
          destroy_effect(this.#failed_effect);
          this.#failed_effect = null;
        }
        if (hydrating) {
          set_hydrate_node(
            /** @type {TemplateNode} */
            this.#hydrate_open
          );
          next();
          set_hydrate_node(skip_nodes());
        }
        var onerror = this.#props.onerror;
        let failed = this.#props.failed;
        var did_reset = false;
        var calling_on_error = false;
        const reset2 = /* @__PURE__ */ __name(() => {
          if (did_reset) {
            svelte_boundary_reset_noop();
            return;
          }
          did_reset = true;
          if (calling_on_error) {
            svelte_boundary_reset_onerror();
          }
          if (this.#failed_effect !== null) {
            pause_effect(this.#failed_effect, () => {
              this.#failed_effect = null;
            });
          }
          this.#run(() => {
            this.#render();
          });
        }, "reset");
        const handle_error_result = /* @__PURE__ */ __name((transformed_error) => {
          try {
            calling_on_error = true;
            onerror?.(transformed_error, reset2);
            calling_on_error = false;
          } catch (error22) {
            invoke_error_boundary(error22, this.#effect && this.#effect.parent);
          }
          if (failed) {
            this.#failed_effect = this.#run(() => {
              try {
                return branch(() => {
                  var effect = (
                    /** @type {Effect} */
                    active_effect
                  );
                  effect.b = this;
                  effect.f |= BOUNDARY_EFFECT;
                  failed(
                    this.#anchor,
                    () => transformed_error,
                    () => reset2
                  );
                });
              } catch (error22) {
                invoke_error_boundary(
                  error22,
                  /** @type {Effect} */
                  this.#effect.parent
                );
                return null;
              }
            });
          }
        }, "handle_error_result");
        queue_micro_task(() => {
          var result;
          try {
            result = this.transform_error(error3);
          } catch (e3) {
            invoke_error_boundary(e3, this.#effect && this.#effect.parent);
            return;
          }
          if (result !== null && typeof result === "object" && typeof /** @type {any} */
          result.then === "function") {
            result.then(
              handle_error_result,
              /** @param {unknown} e */
              (e3) => invoke_error_boundary(e3, this.#effect && this.#effect.parent)
            );
          } else {
            handle_error_result(result);
          }
        });
      }
    };
    event_symbol = /* @__PURE__ */ Symbol("events");
    all_registered_events = /* @__PURE__ */ new Set();
    root_event_handles = /* @__PURE__ */ new Set();
    last_propagated_event = null;
    __name(handle_event_propagation, "handle_event_propagation");
    __name(assign_nodes, "assign_nodes");
    __name(mount, "mount");
    __name(hydrate, "hydrate");
    listeners = /* @__PURE__ */ new Map();
    __name(_mount, "_mount");
    mounted_components = /* @__PURE__ */ new WeakMap();
    __name(unmount, "unmount");
    __name(asClassComponent$1, "asClassComponent$1");
    Svelte4Component = class {
      static {
        __name(this, "Svelte4Component");
      }
      /** @type {any} */
      #events;
      /** @type {Record<string, any>} */
      #instance;
      /**
       * @param {ComponentConstructorOptions & {
       *  component: any;
       * }} options
       */
      constructor(options2) {
        var sources = /* @__PURE__ */ new Map();
        var add_source = /* @__PURE__ */ __name((key2, value) => {
          var s3 = mutable_source(value, false, false);
          sources.set(key2, s3);
          return s3;
        }, "add_source");
        const props = new Proxy(
          { ...options2.props || {}, $$events: {} },
          {
            get(target, prop) {
              return get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
            },
            has(target, prop) {
              if (prop === LEGACY_PROPS) return true;
              get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
              return Reflect.has(target, prop);
            },
            set(target, prop, value) {
              set(sources.get(prop) ?? add_source(prop, value), value);
              return Reflect.set(target, prop, value);
            }
          }
        );
        this.#instance = (options2.hydrate ? hydrate : mount)(options2.component, {
          target: options2.target,
          anchor: options2.anchor,
          props,
          context: options2.context,
          intro: options2.intro ?? false,
          recover: options2.recover,
          transformError: options2.transformError
        });
        if (!options2?.props?.$$host || options2.sync === false) {
          flushSync();
        }
        this.#events = props.$$events;
        for (const key2 of Object.keys(this.#instance)) {
          if (key2 === "$set" || key2 === "$destroy" || key2 === "$on") continue;
          define_property(this, key2, {
            get() {
              return this.#instance[key2];
            },
            /** @param {any} value */
            set(value) {
              this.#instance[key2] = value;
            },
            enumerable: true
          });
        }
        this.#instance.$set = /** @param {Record<string, any>} next */
        (next2) => {
          Object.assign(props, next2);
        };
        this.#instance.$destroy = () => {
          unmount(this.#instance);
        };
      }
      /** @param {Record<string, any>} props */
      $set(props) {
        this.#instance.$set(props);
      }
      /**
       * @param {string} event
       * @param {(...args: any[]) => any} callback
       * @returns {any}
       */
      $on(event, callback) {
        this.#events[event] = this.#events[event] || [];
        const cb = /* @__PURE__ */ __name((...args) => callback.call(this, ...args), "cb");
        this.#events[event].push(cb);
        return () => {
          this.#events[event] = this.#events[event].filter(
            /** @param {any} fn */
            (fn) => fn !== cb
          );
        };
      }
      $destroy() {
        this.#instance.$destroy();
      }
    };
    __name(asClassComponent, "asClassComponent");
    __name(Root, "Root");
    root = asClassComponent(Root);
  }
});

// .svelte-kit/output/server/entries/hooks.server.js
var hooks_server_exports = {};
__export(hooks_server_exports, {
  handle: () => handle
});
function isLang(v) {
  return SUPPORTED.includes(v);
}
function pickLang(cookieValue, acceptLanguage) {
  if (isLang(cookieValue)) return cookieValue;
  if (acceptLanguage) {
    for (const part of acceptLanguage.split(",")) {
      const base2 = part.split(";")[0].trim().toLowerCase().split("-")[0];
      if (isLang(base2)) return base2;
    }
  }
  return "en";
}
var SUPPORTED, handle;
var init_hooks_server = __esm({
  ".svelte-kit/output/server/entries/hooks.server.js"() {
    init_modules_watch_stub();
    SUPPORTED = ["tr", "en", "kk", "ru"];
    __name(isLang, "isLang");
    __name(pickLang, "pickLang");
    handle = /* @__PURE__ */ __name(async ({ event, resolve: resolve2 }) => {
      event.locals.lang = pickLang(
        event.cookies.get("pulsar-lang"),
        event.request.headers.get("accept-language")
      );
      return resolve2(event, {
        transformPageChunk: /* @__PURE__ */ __name(({ html: html2 }) => html2.replace("%lang%", event.locals.lang), "transformPageChunk")
      });
    }, "handle");
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    exports.parse = parse3;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode;
      var index5 = 0;
      while (index5 < str.length) {
        var eqIdx = str.indexOf("=", index5);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index5);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index5 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index5, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index5 = endIdx + 1;
      }
      return obj;
    }
    __name(parse3, "parse");
    function serialize2(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.partitioned) {
        str += "; Partitioned";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    __name(serialize2, "serialize");
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    __name(decode, "decode");
    function encode2(val) {
      return encodeURIComponent(val);
    }
    __name(encode2, "encode");
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    __name(isDate, "isDate");
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e3) {
        return str;
      }
    }
    __name(tryDecode, "tryDecode");
  }
});

// .svelte-kit/output/server/entries/pages/_layout.server.ts.js
var layout_server_ts_exports = {};
__export(layout_server_ts_exports, {
  load: () => load
});
var load;
var init_layout_server_ts = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.server.ts.js"() {
    init_modules_watch_stub();
    load = /* @__PURE__ */ __name(({ locals }) => {
      return { lang: locals.lang };
    }, "load");
  }
});

// .svelte-kit/output/server/chunks/PulsarMark.js
function PulsarMark($$renderer, $$props) {
  let { size = 28, color = "var(--accent)" } = $$props;
  $$renderer.push(`<svg${attr("width", size)}${attr("height", size)} viewBox="0 0 52 52" fill="none" style="flex: none;"><circle cx="26" cy="26" r="24"${attr("stroke", color)} stroke-width="1.5" opacity="0.18"></circle><circle cx="26" cy="26" r="16"${attr("stroke", color)} stroke-width="1.75" opacity="0.42"></circle><circle cx="26" cy="26" r="8.5"${attr("stroke", color)} stroke-width="2"></circle><circle cx="26" cy="26" r="3.5"${attr("fill", color)}></circle></svg>`);
}
var init_PulsarMark = __esm({
  ".svelte-kit/output/server/chunks/PulsarMark.js"() {
    init_modules_watch_stub();
    init_chunks();
    __name(PulsarMark, "PulsarMark");
  }
});

// .svelte-kit/output/server/chunks/index3.js
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
var LANGS, TR, EN, KK, RU, DICTS, DOC_TITLE, DL_TITLE, DS_LMAP, DL_BTN, lang, t;
var init_index3 = __esm({
  ".svelte-kit/output/server/chunks/index3.js"() {
    init_modules_watch_stub();
    init_index2();
    __name(html, "html");
    LANGS = [
      { code: "tr", label: "T\xFCrk\xE7e" },
      { code: "en", label: "English" },
      { code: "kk", label: "\u049A\u0430\u0437\u0430\u049B\u0448\u0430" },
      { code: "ru", label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" }
    ];
    TR = {
      "nav.remote": "Uzaktan masa\xFCst\xFC",
      "nav.features": "\xD6zellikler",
      "nav.how": "Nas\u0131l \xE7al\u0131\u015F\u0131r",
      "nav.download": "\u0130ndir",
      "hero.pill": '<span class="dot"></span>A\xE7\u0131k kaynak \xB7 GPLv3 \xB7 self-host edilebilir',
      "hero.title": "Oyna, ba\u011Flan, y\xF6net.",
      "hero.sub": "Pulsar; Parsec gibi d\xFC\u015F\xFCk gecikmeli oyun ak\u0131\u015F\u0131n\u0131 ve TeamViewer / RustDesk gibi uzaktan masa\xFCst\xFCn\xFC tek a\xE7\u0131k kaynak uygulamada birle\u015Ftirir. macOS, Windows, Linux ve Android\u2019de \u2014 sonsuza dek \xFCcretsiz.",
      "hero.dl": "\xDCcretsiz indir",
      "hero.chip1": '<span class="d" style="background: var(--cyan)"></span>Oyun ak\u0131\u015F\u0131 <span class="mono">120 fps \xB7 6 ms</span>',
      "hero.chip2": '<span class="d" style="background: var(--accent)"></span>Do\u011Frudan P2P <span class="mono">u\xE7tan uca \u015Fifreli</span>',
      "strip.k1": "Yerel a\u011Fda ek gecikme",
      "strip.k2": "Donan\u0131msal H.265 / AV1",
      "strip.v3": "<em>4</em> platform",
      "strip.v4": "<em>%100</em> a\xE7\u0131k",
      "game.eyebrow": "Oyuncular i\xE7in",
      "game.title": "PC\u2019n nerede olursa olsun, oyunun yan\u0131nda.",
      "game.p": "G\xFC\xE7l\xFC masa\xFCst\xFCn\xFC host yap; kanepedeki laptop\u2019tan, ba\u015Fka \u015Fehirdeki bilgisayardan ya da arkada\u015F\u0131n\u0131n ekran\u0131ndan oyununa devam et. Sunshine + Moonlight kurulum derdi yok \u2014 tek uygulama.",
      "game.t1": '<span class="ck">\u2713</span>120 fps\u2019e kadar donan\u0131msal H.265 / AV1 ak\u0131\u015F',
      "game.t2": '<span class="ck">\u2713</span>HDR, ultra-wide ve \xE7oklu ses kanal\u0131',
      "game.t3": '<span class="ck">\u2713</span>Xbox / PlayStation kontrolc\xFC e\u015Fleme',
      "game.t4": '<span class="ck">\u2713</span>Adaptif bit h\u0131z\u0131 \u2014 a\u011Fa g\xF6re kendini ayarlar',
      "remote.eyebrow": "IT & destek ekipleri i\xE7in",
      "remote.title": "ID\u2019yi gir, saniyeler i\xE7inde y\xF6net.",
      "remote.p": "TeamViewer ve AnyDesk\u2019in tan\u0131d\u0131k ak\u0131\u015F\u0131 \u2014 lisans \xFCcreti ve \u201Cticari kullan\u0131m\u201D uyar\u0131lar\u0131 olmadan. Sunucular, m\xFC\u015Fteri makineleri ve ailenin bilgisayarlar\u0131 tek adres defterinde.",
      "remote.t1": '<span class="ck">\u2713</span>ID + tek seferlik \u015Fifre ile anl\u0131k destek',
      "remote.t2": '<span class="ck">\u2713</span>G\xF6zetimsiz eri\u015Fim \u2014 kendi cihazlar\u0131na her zaman',
      "remote.t3": '<span class="ck">\u2713</span>Dosya transferi, pano senkronu, oturum sohbeti',
      "remote.t4": '<span class="ck">\u2713</span>\xC7oklu monit\xF6r ve uzaktan yeniden ba\u015Flatma',
      "feat.eyebrow": "Neden Pulsar",
      "feat.title": "Profesyonel ara\xE7lardan \xF6d\xFCn yok.",
      "feat.f1h": "\xD6nce P2P, sonra relay",
      "feat.f1p": "Her ba\u011Flant\u0131da \xF6nce do\u011Frudan P2P denenir; NAT engellerse trafik otomatik relay\u2019e d\xFC\u015Fer. Ba\u011Flant\u0131 hi\xE7 kopmaz.",
      "feat.f2h": "U\xE7tan uca \u015Fifreli",
      "feat.f2p": "Anahtarlar yaln\u0131zca cihazlarda \xFCretilir. Relay dahil hi\xE7bir sunucu trafi\u011Fi \xE7\xF6zemez.",
      "feat.f3h": "Self-host relay & ID",
      "feat.f3p": "Cihaz kimli\u011Fin relay sunucusundan al\u0131n\u0131r. Tek docker komutuyla kendi sunucunu \xE7al\u0131\u015Ft\u0131r.",
      "feat.f4h": "\xC7oklu monit\xF6r",
      "feat.f4p": "Uzak ekranlar aras\u0131nda ge\xE7i\u015F yap, ya da hepsini yan yana tek pencerede a\xE7.",
      "feat.f5h": "Dosya transferi",
      "feat.f5p": "S\xFCr\xFCkle-b\u0131rak ile iki y\xF6nl\xFC, \u015Fifreli aktar\u0131m. Pano senkronu ve oturum i\xE7i sohbet dahil.",
      "feat.f6h": "%100 a\xE7\u0131k kaynak",
      "feat.f6p": "T\xFCm kod GitHub\u2019da, GPLv3 alt\u0131nda. Hesap zorunlu de\u011Fil, telemetri yok, reklam yok.",
      "how.eyebrow": "Nas\u0131l \xE7al\u0131\u015F\u0131r",
      "how.title": "\xDC\xE7 ad\u0131mda ba\u011Flan.",
      "how.s1h": "\u0130ndir & a\xE7",
      "how.s1p": "Pulsar\u2019\u0131 iki cihaza da kur. Uygulama relay sunucusuna kaydolur ve sana benzersiz bir cihaz kimli\u011Fi atar.",
      "how.s2h": "ID\u2019yi payla\u015F",
      "how.s2p": "Kar\u015F\u0131 cihaz\u0131n 9 haneli kimli\u011Fini ve tek seferlik \u015Fifresini gir. Hesap a\xE7maya gerek yok.",
      "how.s3h": "Ba\u011Flan & kullan",
      "how.s3p": "\xD6nce do\u011Frudan P2P denenir, gerekirse relay\u2019e ge\xE7ilir \u2014 iki durumda da u\xE7tan uca \u015Fifreli.",
      "cta.title": "Bug\xFCn ba\u011Flanmaya ba\u015Fla.",
      "cta.p": "\xDCcretsiz, a\xE7\u0131k kaynak, reklams\u0131z. Kredi kart\u0131 yok, hesap yok.",
      "cta.dl": "\u0130ndir \u2014 macOS, Windows, Linux, Android",
      "cta.star": "GitHub\u2019da y\u0131ld\u0131zla",
      "foot.about": "A\xE7\u0131k kaynakl\u0131 uzaktan masa\xFCst\xFC ve oyun streaming. Senin makinen, senin kurallar\u0131n.",
      "foot.product": "\xDCr\xFCn",
      "foot.l.game": "Uzaktan oyun",
      "foot.l.remote": "Uzaktan masa\xFCst\xFC",
      "foot.l.features": "\xD6zellikler",
      "foot.l.download": "\u0130ndir",
      "foot.resources": "Kaynak",
      "foot.l.docs": "Dok\xFCmantasyon",
      "foot.l.selfhost": "Self-host k\u0131lavuzu",
      "foot.l.releases": "S\xFCr\xFCm notlar\u0131",
      "foot.community": "Topluluk",
      "foot.l.contribute": "Katk\u0131 sa\u011Fla",
      "foot.l.license": "Lisans \xB7 GPLv3",
      "foot.copy": "\xA9 2026 Pulsar.",
      "foot.tork": 'Bir <span class="glyph">\u{10C45}\u{10C07}\u{10C3C}\u{10C1B}</span> \xFCr\xFCn\xFCd\xFCr.',
      "dl.eyebrow": "\u0130ndir",
      "dl.title": "Pulsar\u2019\u0131 kur, saniyeler i\xE7inde ba\u011Flan.",
      "dl.sub": "\xDCcretsiz ve a\xE7\u0131k kaynak. Hesap gerekmez. Cihaz\u0131n\u0131 otomatik alg\u0131lad\u0131k \u2014 ya da a\u015Fa\u011F\u0131dan platformunu se\xE7.",
      "dl.detected": "Alg\u0131lanan sistem",
      "dl.other": "Ba\u015Fka platform?",
      "dl.otherVersions": "Di\u011Fer s\xFCr\xFCmler",
      "dl.allTitle": "T\xFCm platformlar",
      "dl.allSub": "Her s\xFCr\xFCm ayn\u0131 \xF6zellikleri ta\u015F\u0131r \u2014 host (payla\u015Fan) ve client (ba\u011Flanan) tek uygulamada.",
      "dl.msi": ".msi (kurumsal)",
      "dl.soon": "Yak\u0131nda",
      "dl.iosSub": "App Store s\xFCr\xFCm\xFC \xFCzerinde \xE7al\u0131\u015F\u0131yoruz.",
      "dl.allFiles": "T\xFCm dosyalar \xB7 GitHub Releases",
      "dl.reqTitle": "Sistem gereksinimleri",
      "dl.req.cpu": "\u0130\u015Flemci",
      "dl.req.cpuV": "Donan\u0131msal video kodlama destekli",
      "dl.req.ram": "RAM",
      "dl.req.ramV": "4 GB (8 GB \xF6nerilir)",
      "dl.req.net": "A\u011F",
      "dl.req.netV": "5 Mbps (oyun i\xE7in 15+ Mbps)",
      "dl.req.gpu": "GPU",
      "dl.req.gpuV": "H.265 / AV1 encode (oyun modu)",
      "dl.req.conn": "Ba\u011Flant\u0131",
      "dl.req.connV": "P2P veya self-host relay",
      "dl.buildTitle": "Kaynaktan derle",
      "dl.build.clone": "# Depoyu klonla",
      "dl.build.license": "# GPLv3 lisans\u0131 \xB7 katk\u0131lara a\xE7\u0131k",
      "dl.build.gpg": "GPG ile imzal\u0131 s\xFCr\xFCmler"
    };
    EN = {
      "nav.remote": "Remote desktop",
      "nav.features": "Features",
      "nav.how": "How it works",
      "nav.download": "Download",
      "hero.pill": '<span class="dot"></span>Open source \xB7 GPLv3 \xB7 self-hostable',
      "hero.title": "Play, connect, control.",
      "hero.sub": "Pulsar combines Parsec-style low-latency game streaming with TeamViewer / RustDesk-style remote desktop in a single open-source app. On macOS, Windows, Linux and Android \u2014 free forever.",
      "hero.dl": "Download for free",
      "hero.chip1": '<span class="d" style="background: var(--cyan)"></span>Game stream <span class="mono">120 fps \xB7 6 ms</span>',
      "hero.chip2": '<span class="d" style="background: var(--accent)"></span>Direct P2P <span class="mono">end-to-end encrypted</span>',
      "strip.k1": "Added latency on LAN",
      "strip.k2": "Hardware H.265 / AV1",
      "strip.v3": "<em>4</em> platforms",
      "strip.v4": "<em>100%</em> open",
      "game.eyebrow": "For gamers",
      "game.title": "Wherever your PC is, your game is with you.",
      "game.p": "Make your powerful desktop the host; pick up your game from the laptop on the couch, a computer in another city, or a friend's screen. No Sunshine + Moonlight setup hassle \u2014 one app.",
      "game.t1": '<span class="ck">\u2713</span>Hardware H.265 / AV1 streaming up to 120 fps',
      "game.t2": '<span class="ck">\u2713</span>HDR, ultra-wide and multi-channel audio',
      "game.t3": '<span class="ck">\u2713</span>Xbox / PlayStation controller mapping',
      "game.t4": '<span class="ck">\u2713</span>Adaptive bitrate \u2014 tunes itself to your network',
      "remote.eyebrow": "For IT & support teams",
      "remote.title": "Enter the ID, take control in seconds.",
      "remote.p": `The familiar TeamViewer / AnyDesk flow \u2014 without license fees or "commercial use" warnings. Servers, client machines and the family's computers in a single address book.`,
      "remote.t1": '<span class="ck">\u2713</span>Instant support with ID + one-time password',
      "remote.t2": '<span class="ck">\u2713</span>Unattended access \u2014 your devices, anytime',
      "remote.t3": '<span class="ck">\u2713</span>File transfer, clipboard sync, session chat',
      "remote.t4": '<span class="ck">\u2713</span>Multi-monitor and remote restart',
      "feat.eyebrow": "Why Pulsar",
      "feat.title": "No compromise on professional tools.",
      "feat.f1h": "P2P first, relay fallback",
      "feat.f1p": "Every connection tries direct P2P first; if NAT blocks it, traffic falls back to a relay automatically. The connection never drops.",
      "feat.f2h": "End-to-end encrypted",
      "feat.f2p": "Keys are generated only on your devices. No server \u2014 including the relay \u2014 can decrypt your traffic.",
      "feat.f3h": "Self-host relay & ID",
      "feat.f3p": "Your device identity comes from the relay server. Run your own with a single docker command.",
      "feat.f4h": "Multi-monitor",
      "feat.f4p": "Switch between remote displays, or open them all side by side in one window.",
      "feat.f5h": "File transfer",
      "feat.f5p": "Two-way encrypted transfer with drag &amp; drop. Clipboard sync and in-session chat included.",
      "feat.f6h": "100% open source",
      "feat.f6p": "All code on GitHub under GPLv3. No account required, no telemetry, no ads.",
      "how.eyebrow": "How it works",
      "how.title": "Connect in three steps.",
      "how.s1h": "Download &amp; open",
      "how.s1p": "Install Pulsar on both devices. The app registers with the relay server and assigns you a unique device ID.",
      "how.s2h": "Share the ID",
      "how.s2p": "Enter the other device's 9-digit ID and one-time password. No account needed.",
      "how.s3h": "Connect &amp; go",
      "how.s3p": "Direct P2P is tried first, falling back to relay if needed \u2014 end-to-end encrypted either way.",
      "cta.title": "Start connecting today.",
      "cta.p": "Free, open source, ad-free. No credit card, no account.",
      "cta.dl": "Download \u2014 macOS, Windows, Linux, Android",
      "cta.star": "Star on GitHub",
      "foot.about": "Open-source remote desktop and game streaming. Your machine, your rules.",
      "foot.product": "Product",
      "foot.l.game": "Remote gaming",
      "foot.l.remote": "Remote desktop",
      "foot.l.features": "Features",
      "foot.l.download": "Download",
      "foot.resources": "Resources",
      "foot.l.docs": "Documentation",
      "foot.l.selfhost": "Self-host guide",
      "foot.l.releases": "Release notes",
      "foot.community": "Community",
      "foot.l.contribute": "Contribute",
      "foot.l.license": "License \xB7 GPLv3",
      "foot.copy": "\xA9 2026 Pulsar.",
      "foot.tork": 'A <span class="glyph">\u{10C45}\u{10C07}\u{10C3C}\u{10C1B}</span> product.',
      "dl.eyebrow": "Download",
      "dl.title": "Install Pulsar, connect in seconds.",
      "dl.sub": "Free and open source. No account needed. We detected your device \u2014 or pick your platform below.",
      "dl.detected": "Detected system",
      "dl.other": "Other platform?",
      "dl.otherVersions": "Other versions",
      "dl.allTitle": "All platforms",
      "dl.allSub": "Every build has the same features \u2014 host (sharer) and client (connector) in one app.",
      "dl.msi": ".msi (enterprise)",
      "dl.soon": "Coming soon",
      "dl.iosSub": "We are working on the App Store release.",
      "dl.allFiles": "All files \xB7 GitHub Releases",
      "dl.reqTitle": "System requirements",
      "dl.req.cpu": "CPU",
      "dl.req.cpuV": "Hardware video encoding support",
      "dl.req.ram": "RAM",
      "dl.req.ramV": "4 GB (8 GB recommended)",
      "dl.req.net": "Network",
      "dl.req.netV": "5 Mbps (15+ Mbps for gaming)",
      "dl.req.gpu": "GPU",
      "dl.req.gpuV": "H.265 / AV1 encode (game mode)",
      "dl.req.conn": "Connection",
      "dl.req.connV": "P2P or self-host relay",
      "dl.buildTitle": "Build from source",
      "dl.build.clone": "# Clone the repo",
      "dl.build.license": "# GPLv3 license \xB7 open to contributions",
      "dl.build.gpg": "GPG-signed releases"
    };
    KK = {
      "nav.remote": "\u049A\u0430\u0448\u044B\u049B\u0442\u0430\u0493\u044B \u0436\u04B1\u043C\u044B\u0441 \u04AF\u0441\u0442\u0435\u043B\u0456",
      "nav.features": "\u041C\u04AF\u043C\u043A\u0456\u043D\u0434\u0456\u043A\u0442\u0435\u0440",
      "nav.how": "\u049A\u0430\u043B\u0430\u0439 \u0436\u04B1\u043C\u044B\u0441 \u0456\u0441\u0442\u0435\u0439\u0434\u0456",
      "nav.download": "\u0416\u04AF\u043A\u0442\u0435\u043F \u0430\u043B\u0443",
      "hero.pill": '<span class="dot"></span>\u0410\u0448\u044B\u049B \u0431\u0430\u0441\u0442\u0430\u043F\u049B\u044B \u043A\u043E\u0434 \xB7 GPLv3 \xB7 \u04E9\u0437\u0456\u04A3\u0456\u0437 \u0445\u043E\u0441\u0442\u0430\u0439 \u0430\u043B\u0430\u0441\u044B\u0437',
      "hero.title": "\u041E\u0439\u043D\u0430, \u049B\u043E\u0441\u044B\u043B, \u0431\u0430\u0441\u049B\u0430\u0440.",
      "hero.sub": "Pulsar \u2014 Parsec \u0442\u04D9\u0440\u0456\u0437\u0434\u0456 \u0442\u04E9\u043C\u0435\u043D \u043A\u0456\u0434\u0456\u0440\u0456\u0441\u0442\u0456 \u043E\u0439\u044B\u043D \u0430\u0493\u044B\u043D\u044B\u043D \u0436\u04D9\u043D\u0435 TeamViewer / RustDesk \u0442\u04D9\u0440\u0456\u0437\u0434\u0456 \u049B\u0430\u0448\u044B\u049B\u0442\u0430\u0493\u044B \u0436\u04B1\u043C\u044B\u0441 \u04AF\u0441\u0442\u0435\u043B\u0456\u043D \u0431\u0456\u0440 \u0430\u0448\u044B\u049B \u0431\u0430\u0441\u0442\u0430\u043F\u049B\u044B \u043A\u043E\u0434\u0442\u044B \u049B\u043E\u043B\u0434\u0430\u043D\u0431\u0430\u0434\u0430 \u0431\u0456\u0440\u0456\u043A\u0442\u0456\u0440\u0435\u0434\u0456. macOS, Windows, Linux \u0436\u04D9\u043D\u0435 Android-\u0442\u0435 \u2014 \u043C\u04D9\u04A3\u0433\u0456 \u0442\u0435\u0433\u0456\u043D.",
      "hero.dl": "\u0422\u0435\u0433\u0456\u043D \u0436\u04AF\u043A\u0442\u0435\u043F \u0430\u043B\u0443",
      "hero.chip1": '<span class="d" style="background: var(--cyan)"></span>\u041E\u0439\u044B\u043D \u0430\u0493\u044B\u043D\u044B <span class="mono">120 fps \xB7 6 ms</span>',
      "hero.chip2": '<span class="d" style="background: var(--accent)"></span>\u0422\u0456\u043A\u0435\u043B\u0435\u0439 P2P <span class="mono">\u04B1\u0448\u0442\u0430\u043D-\u04B1\u0448\u049B\u0430 \u0448\u0438\u0444\u0440\u043B\u0430\u043D\u0493\u0430\u043D</span>',
      "strip.k1": "LAN-\u0434\u0430\u0493\u044B \u049B\u043E\u0441\u044B\u043C\u0448\u0430 \u043A\u0456\u0434\u0456\u0440\u0456\u0441",
      "strip.k2": "\u0410\u043F\u043F\u0430\u0440\u0430\u0442\u0442\u044B\u049B H.265 / AV1",
      "strip.v3": "<em>4</em> \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430",
      "strip.v4": "<em>100%</em> \u0430\u0448\u044B\u049B",
      "game.eyebrow": "\u041E\u0439\u044B\u043D\u0448\u044B\u043B\u0430\u0440\u0493\u0430 \u0430\u0440\u043D\u0430\u043B\u0493\u0430\u043D",
      "game.title": "\u0414\u041A-\u04A3\u0456\u0437 \u049B\u0430\u0439\u0434\u0430 \u0431\u043E\u043B\u0441\u0430 \u0434\u0430, \u043E\u0439\u044B\u043D\u044B\u04A3\u044B\u0437 \u0441\u0456\u0437\u0431\u0435\u043D \u0431\u0456\u0440\u0433\u0435.",
      "game.p": "\u049A\u0443\u0430\u0442\u0442\u044B \u0436\u04B1\u043C\u044B\u0441 \u04AF\u0441\u0442\u0435\u043B\u0456\u04A3\u0456\u0437\u0434\u0456 \u0445\u043E\u0441\u0442 \u0435\u0442\u0456\u04A3\u0456\u0437; \u043E\u0439\u044B\u043D\u044B\u04A3\u044B\u0437\u0434\u044B \u0434\u0438\u0432\u0430\u043D\u0434\u0430 \u0436\u0430\u0442\u049B\u0430\u043D \u043D\u043E\u0443\u0442\u0431\u0443\u043A\u0442\u0435\u043D, \u0431\u0430\u0441\u049B\u0430 \u049B\u0430\u043B\u0430\u0434\u0430\u0493\u044B \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0434\u0435\u043D \u043D\u0435\u043C\u0435\u0441\u0435 \u0434\u043E\u0441\u044B\u04A3\u044B\u0437\u0434\u044B\u04A3 \u044D\u043A\u0440\u0430\u043D\u044B\u043D\u0430\u043D \u0436\u0430\u043B\u0493\u0430\u0441\u0442\u044B\u0440\u044B\u04A3\u044B\u0437. Sunshine + Moonlight \u043E\u0440\u043D\u0430\u0442\u0443 \u04D9\u0431\u0456\u0433\u0435\u0440\u0456 \u0436\u043E\u049B \u2014 \u0431\u0456\u0440 \u049B\u043E\u043B\u0434\u0430\u043D\u0431\u0430.",
      "game.t1": '<span class="ck">\u2713</span>120 fps-\u043A\u0435 \u0434\u0435\u0439\u0456\u043D \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u0442\u044B\u049B H.265 / AV1 \u0430\u0493\u044B\u043D\u044B',
      "game.t2": '<span class="ck">\u2713</span>HDR, \u0443\u043B\u044C\u0442\u0440\u0430\u043A\u0435\u04A3 \u0436\u04D9\u043D\u0435 \u043A\u04E9\u043F\u0430\u0440\u043D\u0430\u043B\u044B \u0434\u044B\u0431\u044B\u0441',
      "game.t3": '<span class="ck">\u2713</span>Xbox / PlayStation \u0434\u0436\u043E\u0439\u0441\u0442\u0438\u0433\u0456\u043D \u0431\u0430\u043F\u0442\u0430\u0443',
      "game.t4": '<span class="ck">\u2713</span>\u0411\u0435\u0439\u0456\u043C\u0434\u0435\u043B\u0433\u0456\u0448 \u0431\u0438\u0442\u0440\u0435\u0439\u0442 \u2014 \u0436\u0435\u043B\u0456\u04A3\u0456\u0437\u0433\u0435 \u04E9\u0437\u0456 \u0431\u0435\u0439\u0456\u043C\u0434\u0435\u043B\u0435\u0434\u0456',
      "remote.eyebrow": "IT \u0436\u04D9\u043D\u0435 \u049B\u043E\u043B\u0434\u0430\u0443 \u043A\u043E\u043C\u0430\u043D\u0434\u0430\u043B\u0430\u0440\u044B\u043D\u0430",
      "remote.title": "ID \u0435\u043D\u0433\u0456\u0437\u0456\u043F, \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u0440\u0434\u0430 \u0431\u0430\u0441\u049B\u0430\u0440\u0443\u0434\u044B \u0430\u043B\u044B\u04A3\u044B\u0437.",
      "remote.p": "\u0422\u0430\u043D\u044B\u0441 TeamViewer / AnyDesk \u0442\u04D9\u0436\u0456\u0440\u0438\u0431\u0435\u0441\u0456 \u2014 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u0430\u049B\u044B\u0441\u044B \u043C\u0435\u043D \xAB\u043A\u043E\u043C\u043C\u0435\u0440\u0446\u0438\u044F\u043B\u044B\u049B \u049B\u043E\u043B\u0434\u0430\u043D\u0443\xBB \u0435\u0441\u043A\u0435\u0440\u0442\u0443\u043B\u0435\u0440\u0456\u043D\u0441\u0456\u0437. \u0421\u0435\u0440\u0432\u0435\u0440\u043B\u0435\u0440, \u043A\u043B\u0438\u0435\u043D\u0442 \u043C\u0430\u0448\u0438\u043D\u0430\u043B\u0430\u0440\u044B \u0436\u04D9\u043D\u0435 \u043E\u0442\u0431\u0430\u0441\u044B\u043D\u044B\u04A3 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043B\u0435\u0440\u0456 \u0431\u0456\u0440 \u043C\u0435\u043A\u0435\u043D\u0436\u0430\u0439 \u043A\u0456\u0442\u0430\u043F\u0448\u0430\u0441\u044B\u043D\u0434\u0430.",
      "remote.t1": '<span class="ck">\u2713</span>ID + \u0431\u0456\u0440 \u0440\u0435\u0442\u0442\u0456\u043A \u049B\u04B1\u043F\u0438\u044F\u0441\u04E9\u0437\u0431\u0435\u043D \u0436\u0435\u0434\u0435\u043B \u049B\u043E\u043B\u0434\u0430\u0443',
      "remote.t2": '<span class="ck">\u2713</span>\u049A\u0430\u0440\u0430\u0443\u0441\u044B\u0437 \u049B\u0430\u0442\u044B\u043D\u0430\u0443 \u2014 \u049B\u04B1\u0440\u044B\u043B\u0493\u044B\u043B\u0430\u0440\u044B\u04A3\u044B\u0437, \u043A\u0435\u0437 \u043A\u0435\u043B\u0433\u0435\u043D \u0443\u0430\u049B\u044B\u0442\u0442\u0430',
      "remote.t3": '<span class="ck">\u2713</span>\u0424\u0430\u0439\u043B \u0430\u043B\u043C\u0430\u0441\u0443, \u0430\u043B\u043C\u0430\u0441\u0443 \u0431\u0443\u0444\u0435\u0440\u0456\u043D \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0434\u0430\u0443, \u0447\u0430\u0442',
      "remote.t4": '<span class="ck">\u2713</span>\u041A\u04E9\u043F \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u043B\u044B \u0436\u04D9\u043D\u0435 \u049B\u0430\u0448\u044B\u049B\u0442\u0430\u043D \u049B\u0430\u0439\u0442\u0430 \u049B\u043E\u0441\u0443',
      "feat.eyebrow": "\u041D\u0435\u0433\u0435 Pulsar",
      "feat.title": "\u041A\u04D9\u0441\u0456\u0431\u0438 \u049B\u04B1\u0440\u0430\u043B\u0434\u0430\u0440\u0434\u0430\u043D \u0431\u0430\u0441 \u0442\u0430\u0440\u0442\u0443\u0441\u044B\u0437.",
      "feat.f1h": "\u0410\u043B\u0434\u044B\u043C\u0435\u043D P2P, \u0441\u043E\u0441\u044B\u043D relay",
      "feat.f1p": "\u04D8\u0440 \u049B\u043E\u0441\u044B\u043B\u044B\u043C \u0430\u043B\u0434\u044B\u043C\u0435\u043D \u0442\u0456\u043A\u0435\u043B\u0435\u0439 P2P-\u0434\u0456 \u0441\u044B\u043D\u0430\u0439\u0434\u044B; NAT \u0431\u04E9\u0433\u0435\u0441\u0435, \u0442\u0440\u0430\u0444\u0438\u043A \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0442\u044B \u0442\u04AF\u0440\u0434\u0435 relay-\u0433\u0435 \u0430\u0443\u044B\u0441\u0430\u0434\u044B. \u049A\u043E\u0441\u044B\u043B\u044B\u043C \u0435\u0448\u049B\u0430\u0448\u0430\u043D \u04AF\u0437\u0456\u043B\u043C\u0435\u0439\u0434\u0456.",
      "feat.f2h": "\u04B0\u0448\u0442\u0430\u043D-\u04B1\u0448\u049B\u0430 \u0448\u0438\u0444\u0440\u043B\u0430\u043D\u0493\u0430\u043D",
      "feat.f2p": "\u041A\u0456\u043B\u0442\u0442\u0435\u0440 \u0442\u0435\u043A \u0441\u0456\u0437\u0434\u0456\u04A3 \u049B\u04B1\u0440\u044B\u043B\u0493\u044B\u043B\u0430\u0440\u044B\u04A3\u044B\u0437\u0434\u0430 \u0436\u0430\u0441\u0430\u043B\u0430\u0434\u044B. \u0415\u0448\u0431\u0456\u0440 \u0441\u0435\u0440\u0432\u0435\u0440 \u2014 relay \u0434\u0435 \u2014 \u0442\u0440\u0430\u0444\u0438\u043A\u0442\u0456 \u0448\u0435\u0448\u0435 \u0430\u043B\u043C\u0430\u0439\u0434\u044B.",
      "feat.f3h": "Relay \u043C\u0435\u043D ID-\u0434\u0456 \u04E9\u0437\u0456\u04A3\u0456\u0437 \u0445\u043E\u0441\u0442\u0430\u04A3\u044B\u0437",
      "feat.f3p": "\u049A\u04B1\u0440\u044B\u043B\u0493\u044B \u0431\u0456\u0440\u0435\u0433\u0435\u0439\u043B\u0456\u0433\u0456 relay \u0441\u0435\u0440\u0432\u0435\u0440\u0456\u043D\u0435\u043D \u043A\u0435\u043B\u0435\u0434\u0456. \u04E8\u0437\u0456\u04A3\u0456\u0437\u0434\u0456\u043A\u0456\u043D \u0431\u0456\u0440 docker \u043A\u043E\u043C\u0430\u043D\u0434\u0430\u0441\u044B\u043C\u0435\u043D \u0456\u0441\u043A\u0435 \u049B\u043E\u0441\u044B\u04A3\u044B\u0437.",
      "feat.f4h": "\u041A\u04E9\u043F \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u043B\u044B",
      "feat.f4p": "\u049A\u0430\u0448\u044B\u049B\u0442\u0430\u0493\u044B \u044D\u043A\u0440\u0430\u043D\u0434\u0430\u0440 \u0430\u0440\u0430\u0441\u044B\u043D\u0434\u0430 \u0430\u0443\u044B\u0441\u044B\u04A3\u044B\u0437 \u043D\u0435\u043C\u0435\u0441\u0435 \u043E\u043B\u0430\u0440\u0434\u044B\u04A3 \u0431\u04D9\u0440\u0456\u043D \u0431\u0456\u0440 \u0442\u0435\u0440\u0435\u0437\u0435\u0434\u0435 \u049B\u0430\u0442\u0430\u0440 \u0430\u0448\u044B\u04A3\u044B\u0437.",
      "feat.f5h": "\u0424\u0430\u0439\u043B \u0430\u043B\u043C\u0430\u0441\u0443",
      "feat.f5p": "\u0421\u04AF\u0439\u0440\u0435\u043F \u0430\u043F\u0430\u0440\u0443 \u0430\u0440\u049B\u044B\u043B\u044B \u0435\u043A\u0456 \u0431\u0430\u0493\u044B\u0442\u0442\u044B \u0448\u0438\u0444\u0440\u043B\u0430\u043D\u0493\u0430\u043D \u0430\u043B\u043C\u0430\u0441\u0443. \u0410\u043B\u043C\u0430\u0441\u0443 \u0431\u0443\u0444\u0435\u0440\u0456\u043D \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0434\u0430\u0443 \u043C\u0435\u043D \u0447\u0430\u0442 \u049B\u043E\u0441\u0430 \u0431\u0435\u0440\u0456\u043B\u0435\u0434\u0456.",
      "feat.f6h": "100% \u0430\u0448\u044B\u049B \u0431\u0430\u0441\u0442\u0430\u043F\u049B\u044B \u043A\u043E\u0434",
      "feat.f6p": "\u0411\u0430\u0440\u043B\u044B\u049B \u043A\u043E\u0434 GitHub-\u0442\u0430 GPLv3 \u0431\u043E\u0439\u044B\u043D\u0448\u0430. \u0422\u0456\u0440\u043A\u0435\u043B\u0433\u0456 \u049B\u0430\u0436\u0435\u0442 \u0435\u043C\u0435\u0441, \u0442\u0435\u043B\u0435\u043C\u0435\u0442\u0440\u0438\u044F \u0436\u043E\u049B, \u0436\u0430\u0440\u043D\u0430\u043C\u0430 \u0436\u043E\u049B.",
      "how.eyebrow": "\u049A\u0430\u043B\u0430\u0439 \u0436\u04B1\u043C\u044B\u0441 \u0456\u0441\u0442\u0435\u0439\u0434\u0456",
      "how.title": "\u04AE\u0448 \u049B\u0430\u0434\u0430\u043C\u043C\u0435\u043D \u049B\u043E\u0441\u044B\u043B\u044B\u04A3\u044B\u0437.",
      "how.s1h": "\u0416\u04AF\u043A\u0442\u0435\u043F \u0430\u043B\u044B\u043F, \u0430\u0448\u044B\u04A3\u044B\u0437",
      "how.s1p": "Pulsar-\u0434\u044B \u0435\u043A\u0456 \u049B\u04B1\u0440\u044B\u043B\u0493\u044B\u0493\u0430 \u0434\u0430 \u043E\u0440\u043D\u0430\u0442\u044B\u04A3\u044B\u0437. \u049A\u043E\u043B\u0434\u0430\u043D\u0431\u0430 relay \u0441\u0435\u0440\u0432\u0435\u0440\u0456\u043D\u0435 \u0442\u0456\u0440\u043A\u0435\u043B\u0456\u043F, \u0441\u0456\u0437\u0433\u0435 \u0431\u0456\u0440\u0435\u0433\u0435\u0439 \u049B\u04B1\u0440\u044B\u043B\u0493\u044B ID \u0431\u0435\u0440\u0435\u0434\u0456.",
      "how.s2h": "ID-\u0434\u0456 \u0431\u04E9\u043B\u0456\u0441\u0456\u04A3\u0456\u0437",
      "how.s2p": "\u0411\u0430\u0441\u049B\u0430 \u049B\u04B1\u0440\u044B\u043B\u0493\u044B\u043D\u044B\u04A3 9 \u0442\u0430\u04A3\u0431\u0430\u043B\u044B ID-\u0456 \u043C\u0435\u043D \u0431\u0456\u0440 \u0440\u0435\u0442\u0442\u0456\u043A \u049B\u04B1\u043F\u0438\u044F\u0441\u04E9\u0437\u0456\u043D \u0435\u043D\u0433\u0456\u0437\u0456\u04A3\u0456\u0437. \u0422\u0456\u0440\u043A\u0435\u043B\u0433\u0456 \u049B\u0430\u0436\u0435\u0442 \u0435\u043C\u0435\u0441.",
      "how.s3h": "\u049A\u043E\u0441\u044B\u043B\u044B\u043F, \u0431\u0430\u0441\u0442\u0430\u04A3\u044B\u0437",
      "how.s3p": "\u0410\u043B\u0434\u044B\u043C\u0435\u043D \u0442\u0456\u043A\u0435\u043B\u0435\u0439 P2P, \u049B\u0430\u0436\u0435\u0442 \u0431\u043E\u043B\u0441\u0430 relay \u2014 \u0435\u043A\u0456 \u0436\u0430\u0493\u0434\u0430\u0439\u0434\u0430 \u0434\u0430 \u04B1\u0448\u0442\u0430\u043D-\u04B1\u0448\u049B\u0430 \u0448\u0438\u0444\u0440\u043B\u0430\u043D\u0493\u0430\u043D.",
      "cta.title": "\u0411\u04AF\u0433\u0456\u043D \u049B\u043E\u0441\u044B\u043B\u0430 \u0431\u0430\u0441\u0442\u0430\u04A3\u044B\u0437.",
      "cta.p": "\u0422\u0435\u0433\u0456\u043D, \u0430\u0448\u044B\u049B \u0431\u0430\u0441\u0442\u0430\u043F\u049B\u044B \u043A\u043E\u0434, \u0436\u0430\u0440\u043D\u0430\u043C\u0430\u0441\u044B\u0437. \u041A\u0430\u0440\u0442\u0430 \u0436\u043E\u049B, \u0442\u0456\u0440\u043A\u0435\u043B\u0433\u0456 \u0436\u043E\u049B.",
      "cta.dl": "\u0416\u04AF\u043A\u0442\u0435\u043F \u0430\u043B\u0443 \u2014 macOS, Windows, Linux, Android",
      "cta.star": "GitHub-\u0442\u0430 \u0436\u04B1\u043B\u0434\u044B\u0437\u0448\u0430 \u049B\u043E\u0439\u044B\u04A3\u044B\u0437",
      "foot.about": "\u0410\u0448\u044B\u049B \u0431\u0430\u0441\u0442\u0430\u043F\u049B\u044B \u043A\u043E\u0434\u0442\u044B \u049B\u0430\u0448\u044B\u049B\u0442\u0430\u0493\u044B \u0436\u04B1\u043C\u044B\u0441 \u04AF\u0441\u0442\u0435\u043B\u0456 \u0436\u04D9\u043D\u0435 \u043E\u0439\u044B\u043D \u0430\u0493\u044B\u043D\u044B. \u0421\u0456\u0437\u0434\u0456\u04A3 \u043C\u0430\u0448\u0438\u043D\u0430\u04A3\u044B\u0437, \u0441\u0456\u0437\u0434\u0456\u04A3 \u0435\u0440\u0435\u0436\u0435\u043B\u0435\u0440\u0456\u04A3\u0456\u0437.",
      "foot.product": "\u04E8\u043D\u0456\u043C",
      "foot.l.game": "\u049A\u0430\u0448\u044B\u049B\u0442\u0430\u043D \u043E\u0439\u044B\u043D",
      "foot.l.remote": "\u049A\u0430\u0448\u044B\u049B\u0442\u0430\u0493\u044B \u0436\u04B1\u043C\u044B\u0441 \u04AF\u0441\u0442\u0435\u043B\u0456",
      "foot.l.features": "\u041C\u04AF\u043C\u043A\u0456\u043D\u0434\u0456\u043A\u0442\u0435\u0440",
      "foot.l.download": "\u0416\u04AF\u043A\u0442\u0435\u043F \u0430\u043B\u0443",
      "foot.resources": "\u0420\u0435\u0441\u0443\u0440\u0441\u0442\u0430\u0440",
      "foot.l.docs": "\u049A\u04B1\u0436\u0430\u0442\u0442\u0430\u043C\u0430",
      "foot.l.selfhost": "Self-host \u043D\u04B1\u0441\u049B\u0430\u0443\u043B\u044B\u0493\u044B",
      "foot.l.releases": "\u0428\u044B\u0493\u0430\u0440\u044B\u043B\u044B\u043C \u0436\u0430\u0437\u0431\u0430\u043B\u0430\u0440\u044B",
      "foot.community": "\u049A\u0430\u0443\u044B\u043C\u0434\u0430\u0441\u0442\u044B\u049B",
      "foot.l.contribute": "\u04AE\u043B\u0435\u0441 \u049B\u043E\u0441\u0443",
      "foot.l.license": "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \xB7 GPLv3",
      "foot.copy": "\xA9 2026 Pulsar.",
      "foot.tork": '<span class="glyph">\u{10C45}\u{10C07}\u{10C3C}\u{10C1B}</span> \u04E9\u043D\u0456\u043C\u0456.',
      "dl.eyebrow": "\u0416\u04AF\u043A\u0442\u0435\u043F \u0430\u043B\u0443",
      "dl.title": "Pulsar-\u0434\u044B \u043E\u0440\u043D\u0430\u0442\u044B\u04A3\u044B\u0437, \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u0440\u0434\u0430 \u049B\u043E\u0441\u044B\u043B\u044B\u04A3\u044B\u0437.",
      "dl.sub": "\u0422\u0435\u0433\u0456\u043D \u0436\u04D9\u043D\u0435 \u0430\u0448\u044B\u049B \u0431\u0430\u0441\u0442\u0430\u043F\u049B\u044B \u043A\u043E\u0434\u0442\u044B. \u0422\u0456\u0440\u043A\u0435\u043B\u0433\u0456 \u049B\u0430\u0436\u0435\u0442 \u0435\u043C\u0435\u0441. \u049A\u04B1\u0440\u044B\u043B\u0493\u044B\u04A3\u044B\u0437\u0434\u044B \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0442\u044B \u0430\u043D\u044B\u049B\u0442\u0430\u0434\u044B\u049B \u2014 \u043D\u0435\u043C\u0435\u0441\u0435 \u0442\u04E9\u043C\u0435\u043D\u043D\u0435\u043D \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430\u04A3\u044B\u0437\u0434\u044B \u0442\u0430\u04A3\u0434\u0430\u04A3\u044B\u0437.",
      "dl.detected": "\u0410\u043D\u044B\u049B\u0442\u0430\u043B\u0493\u0430\u043D \u0436\u04AF\u0439\u0435",
      "dl.other": "\u0411\u0430\u0441\u049B\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430?",
      "dl.otherVersions": "\u0411\u0430\u0441\u049B\u0430 \u043D\u04B1\u0441\u049B\u0430\u043B\u0430\u0440",
      "dl.allTitle": "\u0411\u0430\u0440\u043B\u044B\u049B \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430\u043B\u0430\u0440",
      "dl.allSub": "\u04D8\u0440 \u049B\u04B1\u0440\u0430\u0441\u0442\u044B\u0440\u043C\u0430 \u0431\u0456\u0440\u0434\u0435\u0439 \u043C\u04AF\u043C\u043A\u0456\u043D\u0434\u0456\u043A\u0442\u0435\u0440\u0433\u0435 \u0438\u0435 \u2014 host (\u0431\u04E9\u043B\u0456\u0441\u0443\u0448\u0456) \u0436\u04D9\u043D\u0435 client (\u049B\u043E\u0441\u044B\u043B\u0443\u0448\u044B) \u0431\u0456\u0440 \u049B\u043E\u043B\u0434\u0430\u043D\u0431\u0430\u0434\u0430.",
      "dl.msi": ".msi (\u043A\u04D9\u0441\u0456\u043F\u043E\u0440\u044B\u043D)",
      "dl.soon": "\u0416\u0430\u049B\u044B\u043D\u0434\u0430",
      "dl.iosSub": "App Store \u043D\u04B1\u0441\u049B\u0430\u0441\u044B\u043C\u0435\u043D \u0436\u04B1\u043C\u044B\u0441 \u0456\u0441\u0442\u0435\u043F \u0436\u0430\u0442\u044B\u0440\u043C\u044B\u0437.",
      "dl.allFiles": "\u0411\u0430\u0440\u043B\u044B\u049B \u0444\u0430\u0439\u043B\u0434\u0430\u0440 \xB7 GitHub Releases",
      "dl.reqTitle": "\u0416\u04AF\u0439\u0435 \u0442\u0430\u043B\u0430\u043F\u0442\u0430\u0440\u044B",
      "dl.req.cpu": "\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440",
      "dl.req.cpuV": "\u0410\u043F\u043F\u0430\u0440\u0430\u0442\u0442\u044B\u049B \u0431\u0435\u0439\u043D\u0435 \u043A\u043E\u0434\u0442\u0430\u0443\u0434\u044B \u049B\u043E\u043B\u0434\u0430\u0439\u0442\u044B\u043D",
      "dl.req.ram": "RAM",
      "dl.req.ramV": "4 \u0413\u0411 (8 \u0413\u0411 \u04B1\u0441\u044B\u043D\u044B\u043B\u0430\u0434\u044B)",
      "dl.req.net": "\u0416\u0435\u043B\u0456",
      "dl.req.netV": "5 Mbps (\u043E\u0439\u044B\u043D \u04AF\u0448\u0456\u043D 15+ Mbps)",
      "dl.req.gpu": "GPU",
      "dl.req.gpuV": "H.265 / AV1 \u043A\u043E\u0434\u0442\u0430\u0443 (\u043E\u0439\u044B\u043D \u0440\u0435\u0436\u0438\u043C\u0456)",
      "dl.req.conn": "\u0411\u0430\u0439\u043B\u0430\u043D\u044B\u0441",
      "dl.req.connV": "P2P \u043D\u0435\u043C\u0435\u0441\u0435 self-host relay",
      "dl.buildTitle": "\u0411\u0430\u0441\u0442\u0430\u043F\u049B\u044B \u043A\u043E\u0434\u0442\u0430\u043D \u049B\u04B1\u0440\u0430\u0441\u0442\u044B\u0440\u0443",
      "dl.build.clone": "# \u0420\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0439\u0434\u0456 \u043A\u043B\u043E\u043D\u0434\u0430\u04A3\u044B\u0437",
      "dl.build.license": "# GPLv3 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F\u0441\u044B \xB7 \u04AF\u043B\u0435\u0441\u043A\u0435 \u0430\u0448\u044B\u049B",
      "dl.build.gpg": "GPG \u049B\u043E\u043B\u0442\u0430\u04A3\u0431\u0430\u043B\u044B \u0448\u044B\u0493\u0430\u0440\u044B\u043B\u044B\u043C\u0434\u0430\u0440"
    };
    RU = {
      "nav.remote": "\u0423\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0439 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B",
      "nav.features": "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438",
      "nav.how": "\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442",
      "nav.download": "\u0421\u043A\u0430\u0447\u0430\u0442\u044C",
      "hero.pill": '<span class="dot"></span>\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u043A\u043E\u0434 \xB7 GPLv3 \xB7 \u043C\u043E\u0436\u043D\u043E \u0445\u043E\u0441\u0442\u0438\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443',
      "hero.title": "\u0418\u0433\u0440\u0430\u0439, \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0439\u0441\u044F, \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0439.",
      "hero.sub": "Pulsar \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u0441\u0442\u0440\u0438\u043C\u0438\u043D\u0433 \u0438\u0433\u0440 \u0441 \u043D\u0438\u0437\u043A\u043E\u0439 \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u043E\u0439 \u0432 \u0441\u0442\u0438\u043B\u0435 Parsec \u0438 \u0443\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0439 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B \u0432\u0440\u043E\u0434\u0435 TeamViewer / RustDesk \u0432 \u043E\u0434\u043D\u043E\u043C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u043A\u043E\u0434\u043E\u043C. \u041D\u0430 macOS, Windows, Linux \u0438 Android \u2014 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430.",
      "hero.dl": "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E",
      "hero.chip1": '<span class="d" style="background: var(--cyan)"></span>\u0421\u0442\u0440\u0438\u043C \u0438\u0433\u0440\u044B <span class="mono">120 fps \xB7 6 ms</span>',
      "hero.chip2": '<span class="d" style="background: var(--accent)"></span>\u041F\u0440\u044F\u043C\u043E\u0439 P2P <span class="mono">\u0441\u043A\u0432\u043E\u0437\u043D\u043E\u0435 \u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0438\u0435</span>',
      "strip.k1": "\u0414\u043E\u043F. \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0430 \u0432 LAN",
      "strip.k2": "\u0410\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u044B\u0439 H.265 / AV1",
      "strip.v3": "<em>4</em> \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B",
      "strip.v4": "<em>100%</em> \u043E\u0442\u043A\u0440\u044B\u0442\u043E",
      "game.eyebrow": "\u0414\u043B\u044F \u0433\u0435\u0439\u043C\u0435\u0440\u043E\u0432",
      "game.title": "\u0413\u0434\u0435 \u0431\u044B \u043D\u0438 \u0431\u044B\u043B \u0432\u0430\u0448 \u041F\u041A, \u0438\u0433\u0440\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441 \u0432\u0430\u043C\u0438.",
      "game.p": "\u0421\u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u043C\u043E\u0449\u043D\u044B\u0439 \u041F\u041A \u0445\u043E\u0441\u0442\u043E\u043C; \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0439\u0442\u0435 \u0438\u0433\u0440\u0443 \u0441 \u043D\u043E\u0443\u0442\u0431\u0443\u043A\u0430 \u043D\u0430 \u0434\u0438\u0432\u0430\u043D\u0435, \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430 \u0432 \u0434\u0440\u0443\u0433\u043E\u043C \u0433\u043E\u0440\u043E\u0434\u0435 \u0438\u043B\u0438 \u044D\u043A\u0440\u0430\u043D\u0430 \u0434\u0440\u0443\u0433\u0430. \u0411\u0435\u0437 \u0432\u043E\u0437\u043D\u0438 \u0441 Sunshine + Moonlight \u2014 \u043E\u0434\u043D\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435.",
      "game.t1": '<span class="ck">\u2713</span>\u0410\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u044B\u0439 \u0441\u0442\u0440\u0438\u043C H.265 / AV1 \u0434\u043E 120 fps',
      "game.t2": '<span class="ck">\u2713</span>HDR, ultra-wide \u0438 \u043C\u043D\u043E\u0433\u043E\u043A\u0430\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0432\u0443\u043A',
      "game.t3": '<span class="ck">\u2713</span>\u0420\u0430\u0441\u043A\u043B\u0430\u0434\u043A\u0430 \u0433\u0435\u0439\u043C\u043F\u0430\u0434\u043E\u0432 Xbox / PlayStation',
      "game.t4": '<span class="ck">\u2713</span>\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0439 \u0431\u0438\u0442\u0440\u0435\u0439\u0442 \u2014 \u0441\u0430\u043C \u043F\u043E\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0434 \u0441\u0435\u0442\u044C',
      "remote.eyebrow": "\u0414\u043B\u044F IT \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438",
      "remote.title": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ID \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0437\u0430 \u0441\u0435\u043A\u0443\u043D\u0434\u044B.",
      "remote.p": "\u041F\u0440\u0438\u0432\u044B\u0447\u043D\u044B\u0439 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439 TeamViewer / AnyDesk \u2014 \u0431\u0435\u0437 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0431\u043E\u0440\u043E\u0432 \u0438 \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0439 \u043E \xAB\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438\xBB. \u0421\u0435\u0440\u0432\u0435\u0440\u044B, \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0438\u0435 \u043C\u0430\u0448\u0438\u043D\u044B \u0438 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u044B \u0441\u0435\u043C\u044C\u0438 \u0432 \u043E\u0434\u043D\u043E\u0439 \u0430\u0434\u0440\u0435\u0441\u043D\u043E\u0439 \u043A\u043D\u0438\u0433\u0435.",
      "remote.t1": '<span class="ck">\u2713</span>\u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u0430\u044F \u043F\u043E\u043C\u043E\u0449\u044C \u043F\u043E ID + \u043E\u0434\u043D\u043E\u0440\u0430\u0437\u043E\u0432\u043E\u043C\u0443 \u043F\u0430\u0440\u043E\u043B\u044E',
      "remote.t2": '<span class="ck">\u2713</span>\u0414\u043E\u0441\u0442\u0443\u043F \u0431\u0435\u0437 \u043F\u0440\u0438\u0441\u043C\u043E\u0442\u0440\u0430 \u2014 \u0432\u0430\u0448\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430, \u0432 \u043B\u044E\u0431\u043E\u0435 \u0432\u0440\u0435\u043C\u044F',
      "remote.t3": '<span class="ck">\u2713</span>\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0444\u0430\u0439\u043B\u043E\u0432, \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0431\u0443\u0444\u0435\u0440\u0430, \u0447\u0430\u0442',
      "remote.t4": '<span class="ck">\u2713</span>\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u043E\u0432 \u0438 \u0443\u0434\u0430\u043B\u0451\u043D\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430',
      "feat.eyebrow": "\u041F\u043E\u0447\u0435\u043C\u0443 Pulsar",
      "feat.title": "\u0411\u0435\u0437 \u043A\u043E\u043C\u043F\u0440\u043E\u043C\u0438\u0441\u0441\u043E\u0432 \u0432 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u0445.",
      "feat.f1h": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 P2P, \u0437\u0430\u0442\u0435\u043C relay",
      "feat.f1p": "\u041A\u0430\u0436\u0434\u043E\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0440\u043E\u0431\u0443\u0435\u0442 \u043F\u0440\u044F\u043C\u043E\u0439 P2P; \u0435\u0441\u043B\u0438 NAT \u0431\u043B\u043E\u043A\u0438\u0440\u0443\u0435\u0442 \u2014 \u0442\u0440\u0430\u0444\u0438\u043A \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442 \u043D\u0430 relay. \u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0440\u0432\u0451\u0442\u0441\u044F.",
      "feat.f2h": "\u0421\u043A\u0432\u043E\u0437\u043D\u043E\u0435 \u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
      "feat.f2p": "\u041A\u043B\u044E\u0447\u0438 \u0441\u043E\u0437\u0434\u0430\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u0432\u0430\u0448\u0438\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u0445. \u041D\u0438 \u043E\u0434\u0438\u043D \u0441\u0435\u0440\u0432\u0435\u0440 \u2014 \u0432\u043A\u043B\u044E\u0447\u0430\u044F relay \u2014 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0440\u0430\u0444\u0438\u043A.",
      "feat.f3h": "Self-host relay \u0438 ID",
      "feat.f3p": "\u0418\u0434\u0435\u043D\u0442\u0438\u0447\u043D\u043E\u0441\u0442\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u0432\u044B\u0434\u0430\u0451\u0442 relay-\u0441\u0435\u0440\u0432\u0435\u0440. \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u043E\u0434\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 docker.",
      "feat.f4h": "\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u043E\u0432",
      "feat.f4p": "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0439\u0442\u0435\u0441\u044C \u043C\u0435\u0436\u0434\u0443 \u0443\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u043C\u0438 \u044D\u043A\u0440\u0430\u043D\u0430\u043C\u0438 \u0438\u043B\u0438 \u043E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0438\u0445 \u0432\u0441\u0435 \u0440\u044F\u0434\u043E\u043C \u0432 \u043E\u0434\u043D\u043E\u043C \u043E\u043A\u043D\u0435.",
      "feat.f5h": "\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0444\u0430\u0439\u043B\u043E\u0432",
      "feat.f5p": "\u0414\u0432\u0443\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u044F\u044F \u0437\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435\u043C. \u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0431\u0443\u0444\u0435\u0440\u0430 \u0438 \u0447\u0430\u0442 \u0432 \u0441\u0435\u0441\u0441\u0438\u0438 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u044B.",
      "feat.f6h": "100% \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u043A\u043E\u0434",
      "feat.f6p": "\u0412\u0435\u0441\u044C \u043A\u043E\u0434 \u043D\u0430 GitHub \u043F\u043E\u0434 GPLv3. \u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u043D\u0435 \u043D\u0443\u0436\u0435\u043D, \u0431\u0435\u0437 \u0442\u0435\u043B\u0435\u043C\u0435\u0442\u0440\u0438\u0438 \u0438 \u0440\u0435\u043A\u043B\u0430\u043C\u044B.",
      "how.eyebrow": "\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442",
      "how.title": "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0432 \u0442\u0440\u0438 \u0448\u0430\u0433\u0430.",
      "how.s1h": "\u0421\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u0438 \u043E\u0442\u043A\u0440\u043E\u0439\u0442\u0435",
      "how.s1p": "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 Pulsar \u043D\u0430 \u043E\u0431\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430. \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043D\u0430 relay-\u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0438 \u043F\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u0442 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 ID \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430.",
      "how.s2h": "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u0435\u0441\u044C ID",
      "how.s2p": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 9-\u0437\u043D\u0430\u0447\u043D\u044B\u0439 ID \u0438 \u043E\u0434\u043D\u043E\u0440\u0430\u0437\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430. \u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u043D\u0435 \u043D\u0443\u0436\u0435\u043D.",
      "how.s3h": "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u0441\u044C \u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0439\u0442\u0435",
      "how.s3p": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0440\u044F\u043C\u043E\u0439 P2P, \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 relay \u2014 \u0432 \u043E\u0431\u043E\u0438\u0445 \u0441\u043B\u0443\u0447\u0430\u044F\u0445 \u0441\u043E \u0441\u043A\u0432\u043E\u0437\u043D\u044B\u043C \u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C.",
      "cta.title": "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0442\u044C\u0441\u044F \u0441\u0435\u0433\u043E\u0434\u043D\u044F.",
      "cta.p": "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E, \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u043A\u043E\u0434, \u0431\u0435\u0437 \u0440\u0435\u043A\u043B\u0430\u043C\u044B. \u0411\u0435\u0437 \u043A\u0430\u0440\u0442\u044B, \u0431\u0435\u0437 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430.",
      "cta.dl": "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u2014 macOS, Windows, Linux, Android",
      "cta.star": "\u0417\u0432\u0435\u0437\u0434\u0430 \u043D\u0430 GitHub",
      "foot.about": "\u0423\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0439 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B \u0438 \u0441\u0442\u0440\u0438\u043C\u0438\u043D\u0433 \u0438\u0433\u0440 \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u043A\u043E\u0434\u043E\u043C. \u0412\u0430\u0448\u0430 \u043C\u0430\u0448\u0438\u043D\u0430 \u2014 \u0432\u0430\u0448\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430.",
      "foot.product": "\u041F\u0440\u043E\u0434\u0443\u043A\u0442",
      "foot.l.game": "\u0423\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      "foot.l.remote": "\u0423\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0439 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B",
      "foot.l.features": "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438",
      "foot.l.download": "\u0421\u043A\u0430\u0447\u0430\u0442\u044C",
      "foot.resources": "\u0420\u0435\u0441\u0443\u0440\u0441\u044B",
      "foot.l.docs": "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F",
      "foot.l.selfhost": "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u043F\u043E self-host",
      "foot.l.releases": "\u0417\u0430\u043C\u0435\u0442\u043A\u0438 \u043E \u0440\u0435\u043B\u0438\u0437\u0430\u0445",
      "foot.community": "\u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E",
      "foot.l.contribute": "\u0412\u043D\u0435\u0441\u0442\u0438 \u0432\u043A\u043B\u0430\u0434",
      "foot.l.license": "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \xB7 GPLv3",
      "foot.copy": "\xA9 2026 Pulsar.",
      "foot.tork": '\u041F\u0440\u043E\u0434\u0443\u043A\u0442 <span class="glyph">\u{10C45}\u{10C07}\u{10C3C}\u{10C1B}</span>.',
      "dl.eyebrow": "\u0421\u043A\u0430\u0447\u0430\u0442\u044C",
      "dl.title": "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 Pulsar, \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u0441\u044C \u0437\u0430 \u0441\u0435\u043A\u0443\u043D\u0434\u044B.",
      "dl.sub": "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u0438 \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u043A\u043E\u0434\u043E\u043C. \u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u043D\u0435 \u043D\u0443\u0436\u0435\u043D. \u041C\u044B \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u043B\u0438 \u0432\u0430\u0448\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u2014 \u0438\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0443 \u043D\u0438\u0436\u0435.",
      "dl.detected": "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430",
      "dl.other": "\u0414\u0440\u0443\u0433\u0430\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430?",
      "dl.otherVersions": "\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u0438",
      "dl.allTitle": "\u0412\u0441\u0435 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B",
      "dl.allSub": "\u041A\u0430\u0436\u0434\u0430\u044F \u0441\u0431\u043E\u0440\u043A\u0430 \u0438\u043C\u0435\u0435\u0442 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u2014 host (\u0440\u0430\u0437\u0434\u0430\u044E\u0449\u0438\u0439) \u0438 client (\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u044E\u0449\u0438\u0439\u0441\u044F) \u0432 \u043E\u0434\u043D\u043E\u043C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438.",
      "dl.msi": ".msi (\u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0439)",
      "dl.soon": "\u0421\u043A\u043E\u0440\u043E",
      "dl.iosSub": "\u041C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043D\u0430\u0434 \u0432\u0435\u0440\u0441\u0438\u0435\u0439 \u0434\u043B\u044F App Store.",
      "dl.allFiles": "\u0412\u0441\u0435 \u0444\u0430\u0439\u043B\u044B \xB7 GitHub Releases",
      "dl.reqTitle": "\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0435 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F",
      "dl.req.cpu": "\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440",
      "dl.req.cpuV": "\u0421 \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u044B\u043C \u043A\u043E\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0432\u0438\u0434\u0435\u043E",
      "dl.req.ram": "RAM",
      "dl.req.ramV": "4 \u0413\u0411 (\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F 8 \u0413\u0411)",
      "dl.req.net": "\u0421\u0435\u0442\u044C",
      "dl.req.netV": "5 \u041C\u0431\u0438\u0442/\u0441 (15+ \u041C\u0431\u0438\u0442/\u0441 \u0434\u043B\u044F \u0438\u0433\u0440)",
      "dl.req.gpu": "GPU",
      "dl.req.gpuV": "H.265 / AV1 \u043A\u043E\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 (\u0438\u0433\u0440\u043E\u0432\u043E\u0439 \u0440\u0435\u0436\u0438\u043C)",
      "dl.req.conn": "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435",
      "dl.req.connV": "P2P \u0438\u043B\u0438 self-host relay",
      "dl.buildTitle": "\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u0438\u0437 \u0438\u0441\u0445\u043E\u0434\u043D\u0438\u043A\u043E\u0432",
      "dl.build.clone": "# \u041A\u043B\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0439",
      "dl.build.license": "# \u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F GPLv3 \xB7 \u043E\u0442\u043A\u0440\u044B\u0442\u043E \u0434\u043B\u044F \u0432\u043A\u043B\u0430\u0434\u043E\u0432",
      "dl.build.gpg": "\u0420\u0435\u043B\u0438\u0437\u044B \u0441 GPG-\u043F\u043E\u0434\u043F\u0438\u0441\u044C\u044E"
    };
    DICTS = { tr: TR, en: EN, kk: KK, ru: RU };
    DOC_TITLE = {
      tr: "Pulsar \u2014 A\xE7\u0131k kaynak uzaktan masa\xFCst\xFC & oyun streaming",
      en: "Pulsar \u2014 Open-source remote desktop & game streaming",
      kk: "Pulsar \u2014 \u0410\u0448\u044B\u049B \u043A\u043E\u0434\u0442\u044B \u049B\u0430\u0448\u044B\u049B\u0442\u0430\u0493\u044B \u0436\u04B1\u043C\u044B\u0441 \u04AF\u0441\u0442\u0435\u043B\u0456 \u0436\u04D9\u043D\u0435 \u043E\u0439\u044B\u043D \u0430\u0493\u044B\u043D\u044B",
      ru: "Pulsar \u2014 \u0423\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0439 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B \u0438 \u0441\u0442\u0440\u0438\u043C\u0438\u043D\u0433 \u0438\u0433\u0440 \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u043A\u043E\u0434\u043E\u043C"
    };
    DL_TITLE = {
      tr: "Pulsar \u2014 \u0130ndir",
      en: "Pulsar \u2014 Download",
      kk: "Pulsar \u2014 \u0416\u04AF\u043A\u0442\u0435\u043F \u0430\u043B\u0443",
      ru: "Pulsar \u2014 \u0421\u043A\u0430\u0447\u0430\u0442\u044C"
    };
    DS_LMAP = {
      tr: { title: "Pulsar \u2014 Ba\u011Flan", gameName: "Oyun Rig\u2019i", remoteName: "Ofis Sunucusu" },
      en: { title: "Pulsar \u2014 Connect", gameName: "Gaming Rig", remoteName: "Office Server" },
      kk: { title: "Pulsar \u2014 \u0411\u0430\u0439\u043B\u0430\u043D\u044B\u0441", gameName: "\u041E\u0439\u044B\u043D \u0414\u041A-\u0441\u0456", remoteName: "\u041A\u0435\u04A3\u0441\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0456" },
      ru: { title: "Pulsar \u2014 \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435", gameName: "\u0418\u0433\u0440\u043E\u0432\u043E\u0439 \u041F\u041A", remoteName: "\u041E\u0444\u0438\u0441\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440" }
    };
    DL_BTN = {
      tr: /* @__PURE__ */ __name((n2) => n2 + " i\xE7in indir", "tr"),
      en: /* @__PURE__ */ __name((n2) => "Download for " + n2, "en"),
      kk: /* @__PURE__ */ __name((n2) => n2 + " \u04AF\u0448\u0456\u043D \u0436\u04AF\u043A\u0442\u0435\u043F \u0430\u043B\u0443", "kk"),
      ru: /* @__PURE__ */ __name((n2) => "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0434\u043B\u044F " + n2, "ru")
    };
    lang = writable("en");
    t = derived2(lang, (l) => (key2) => DICTS[l][key2] ?? DICTS.tr[key2] ?? key2);
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => _layout
});
function SiteHeader($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let open = false;
    $$renderer2.push(`<header class="site"><div class="wrap"><nav class="nav"><a class="brand" href="/">`);
    PulsarMark($$renderer2, { size: 28 });
    $$renderer2.push(`<!----><span class="nm">Pulsar</span></a> <div class="nav-links"><a href="/#gaming">Gaming</a> <a href="/#remote">${html(store_get($$store_subs ??= {}, "$t", t)("nav.remote"))}</a> <a href="/#features">${html(store_get($$store_subs ??= {}, "$t", t)("nav.features"))}</a> <a href="/#how">${html(store_get($$store_subs ??= {}, "$t", t)("nav.how"))}</a></div> <div class="nav-right"><div${attr_class("lang-dd", void 0, { "open": open })}><button type="button" class="lang-btn" aria-haspopup="listbox"${attr("aria-expanded", open)} aria-label="Dil / Language"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20z"></path></svg> <span>${escape_html2(store_get($$store_subs ??= {}, "$lang", lang).toUpperCase())}</span> <svg class="chev" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg></button> <div class="lang-menu" role="listbox"><!--[-->`);
    const each_array = ensure_array_like(LANGS);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let { code, label } = each_array[$$index];
      $$renderer2.push(`<button type="button" role="option"${attr("aria-selected", store_get($$store_subs ??= {}, "$lang", lang) === code)}${attr_class("", void 0, {
        "on": store_get($$store_subs ??= {}, "$lang", lang) === code
      })}><span><span class="code">${escape_html2(code.toUpperCase())}</span>${escape_html2(label)}</span></button>`);
    }
    $$renderer2.push(`<!--]--></div></div> <button type="button" class="theme-tgl" aria-label="Koyu / a\xE7\u0131k tema"><svg class="ic-moon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z"></path></svg> <svg class="ic-sun" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg></button> <a class="gh" href="https://github.com/PulsarDesk"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0012 2z"></path></svg> GitHub</a> <a class="btn btn-primary" href="/download" style="padding: 9px 16px; font-size: 14px;">${html(store_get($$store_subs ??= {}, "$t", t)("nav.download"))}</a></div></nav></div></header>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function SiteFooter($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<footer class="site"><div class="wrap"><div class="fgrid2"><div class="fcol fabout"><a class="brand" href="/">`);
    PulsarMark($$renderer2, { size: 28 });
    $$renderer2.push(`<!----><span class="nm">Pulsar</span></a> <p>${html(store_get($$store_subs ??= {}, "$t", t)("foot.about"))}</p></div> <div class="fcol"><h5>${html(store_get($$store_subs ??= {}, "$t", t)("foot.product"))}</h5> <a href="/#gaming">${html(store_get($$store_subs ??= {}, "$t", t)("foot.l.game"))}</a> <a href="/#remote">${html(store_get($$store_subs ??= {}, "$t", t)("foot.l.remote"))}</a> <a href="/#features">${html(store_get($$store_subs ??= {}, "$t", t)("foot.l.features"))}</a> <a href="/download">${html(store_get($$store_subs ??= {}, "$t", t)("foot.l.download"))}</a></div> <div class="fcol"><h5>${html(store_get($$store_subs ??= {}, "$t", t)("foot.resources"))}</h5> <a href="#">${html(store_get($$store_subs ??= {}, "$t", t)("foot.l.docs"))}</a> <a href="#">${html(store_get($$store_subs ??= {}, "$t", t)("foot.l.selfhost"))}</a> <a href="#">${html(store_get($$store_subs ??= {}, "$t", t)("foot.l.releases"))}</a></div> <div class="fcol"><h5>${html(store_get($$store_subs ??= {}, "$t", t)("foot.community"))}</h5> <a href="https://github.com/PulsarDesk">GitHub</a> <a href="#">Discord</a> <a href="#">${html(store_get($$store_subs ??= {}, "$t", t)("foot.l.contribute"))}</a> <a href="#">${html(store_get($$store_subs ??= {}, "$t", t)("foot.l.license"))}</a></div></div> <div class="fbot"><span>${html(store_get($$store_subs ??= {}, "$t", t)("foot.copy"))}</span> <span class="tork">${html(store_get($$store_subs ??= {}, "$t", t)("foot.tork"))}</span></div></div></footer>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children, data } = $$props;
    lang.set(data.lang);
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<noscript>`);
      $$renderer3.push(`<style>.reveal { opacity: 1; transform: none; }</style>`);
      $$renderer3.push(`</noscript>`);
    });
    SiteHeader($$renderer2);
    $$renderer2.push(`<!----> `);
    children($$renderer2);
    $$renderer2.push(`<!----> `);
    SiteFooter($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_modules_watch_stub();
    init_chunks();
    init_PulsarMark();
    init_index3();
    __name(SiteHeader, "SiteHeader");
    __name(SiteFooter, "SiteFooter");
    __name(_layout, "_layout");
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  server: () => layout_server_ts_exports,
  server_id: () => server_id,
  stylesheets: () => stylesheets
});
var index, component_cache, component, server_id, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    init_modules_watch_stub();
    init_layout_server_ts();
    index = 0;
    component = /* @__PURE__ */ __name(async () => component_cache ??= (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default, "component");
    server_id = "src/routes/+layout.server.ts";
    imports = ["_app/immutable/nodes/0.DHMVC1kB.js", "_app/immutable/chunks/DCdaCEBk.js", "_app/immutable/chunks/nidF8yIj.js", "_app/immutable/chunks/BS_TTt1R.js", "_app/immutable/chunks/CU2p3_pp.js", "_app/immutable/chunks/4J4uoJNn.js", "_app/immutable/chunks/CjmGeLJL.js", "_app/immutable/chunks/BLCDGXvv.js"];
    stylesheets = ["_app/immutable/assets/0.CgP6LPWu.css"];
    fonts = [];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error$1
});
function create_updated_store() {
  const { set: set2, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: /* @__PURE__ */ __name(async () => false, "check")
    };
  }
}
function context() {
  return getContext("__request__");
}
function Error$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<h1>${escape_html2(page.status)}</h1> <p>${escape_html2(page.error?.message)}</p>`);
  });
}
var is_legacy, placeholder_url, stores, page$1, page;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_modules_watch_stub();
    init_chunks();
    init_clsx();
    init_exports();
    init_server();
    init_root();
    init_internal();
    init_utils2();
    init_index2();
    __name(create_updated_store, "create_updated_store");
    is_legacy = noop2.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop2.toString());
    placeholder_url = "a:";
    if (is_legacy) {
      ({
        data: {},
        form: null,
        error: null,
        params: {},
        route: { id: null },
        state: {},
        status: -1,
        url: new URL(placeholder_url)
      });
    }
    stores = {
      updated: /* @__PURE__ */ create_updated_store()
    };
    ({
      check: stores.updated.check
    });
    __name(context, "context");
    page$1 = {
      get error() {
        return context().page.error;
      },
      get status() {
        return context().page.status;
      }
    };
    page = page$1;
    __name(Error$1, "Error$1");
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component_cache2, component2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    init_modules_watch_stub();
    index2 = 1;
    component2 = /* @__PURE__ */ __name(async () => component_cache2 ??= (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default, "component");
    imports2 = ["_app/immutable/nodes/1.Du7Rq_6p.js", "_app/immutable/chunks/DCdaCEBk.js", "_app/immutable/chunks/nidF8yIj.js", "_app/immutable/chunks/DmMEkFma.js", "_app/immutable/chunks/BS_TTt1R.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => _page
});
function Avatar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { name, tone = "accent", size = 38 } = $$props;
    const BG = {
      accent: "var(--accent-soft)",
      cyan: "var(--cyan-soft)",
      ok: "var(--ok-soft)",
      warn: "var(--warn-soft)"
    };
    const FG = {
      accent: "var(--accent)",
      cyan: "var(--cyan)",
      ok: "var(--ok)",
      warn: "oklch(0.5 0.13 70)"
    };
    const initials = derived(() => name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase());
    $$renderer2.push(`<div${attr_style(`width: ${stringify3(size)}px; height: ${stringify3(size)}px; border-radius: ${stringify3(size > 30 ? 11 : 8)}px; background: ${stringify3(BG[tone])}; color: ${stringify3(FG[tone])}; display: grid; place-items: center; font-weight: 700; font-size: ${stringify3(size * 0.36)}px; flex: none; font-family: var(--font-display);`)}>${escape_html2(initials())}</div>`);
  });
}
function Icon($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { name, size = 20, stroke = 2, style = "" } = $$props;
    $$renderer2.push(`<svg${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none" stroke="currentColor"${attr("stroke-width", stroke)} stroke-linecap="round" stroke-linejoin="round"${attr_style(style)}>${html(ICON_PATHS[name])}</svg>`);
  });
}
function IDDisplay($$renderer, $$props) {
  let { label = "Senin kimli\u011Fin \xB7 relay\u2019den", id } = $$props;
  $$renderer.push(`<div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--r); padding: 11px 12px;"><div style="font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-faint);">${escape_html2(label)}</div> <div style="font-family: var(--font-mono); font-size: 16px; font-weight: 500; letter-spacing: 0.04em; margin-top: 4px;">${escape_html2(id)}</div></div>`);
}
function Sidebar($$renderer, $$props) {
  let { active = "home", selfId = SELF_ID } = $$props;
  $$renderer.push(`<aside style="width: 224px; flex: none; background: var(--surface-2); border-right: 1px solid var(--border); display: flex; flex-direction: column; padding: 14px 12px;"><div style="display: flex; align-items: center; gap: 10px; padding: 6px 8px 16px;">`);
  PulsarMark($$renderer, { size: 26 });
  $$renderer.push(`<!----> <span style="font-family: var(--font-display); font-weight: 600; font-size: 18px; letter-spacing: -0.03em;">Pulsar</span></div> <nav style="display: flex; flex-direction: column; gap: 3px;"><!--[-->`);
  const each_array = ensure_array_like(NAV);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let n2 = each_array[$$index];
    const on = active === n2.id;
    $$renderer.push(`<button type="button"${attr_style(`display: flex; align-items: center; gap: 11px; padding: 10px 11px; border: none; border-radius: var(--r-sm); cursor: pointer; text-align: left; font-family: var(--font-sans); font-size: 14.5px; font-weight: ${stringify3(on ? 600 : 500)}; color: ${on ? "var(--accent-press)" : "var(--text-muted)"}; background: ${on ? "var(--accent-soft)" : "transparent"}; transition: all var(--dur) var(--ease);`)}>`);
    Icon($$renderer, { name: n2.icon, size: 19, stroke: on ? 2.1 : 1.9 });
    $$renderer.push(`<!----> ${escape_html2(n2.label)}</button>`);
  }
  $$renderer.push(`<!--]--></nav> <div style="margin-top: auto; display: flex; flex-direction: column; gap: 10px;">`);
  IDDisplay($$renderer, { id: selfId });
  $$renderer.push(`<!----> <div style="display: flex; align-items: center; gap: 9px; padding: 4px 6px;">`);
  Avatar($$renderer, { name: "Sen", tone: "accent", size: 32 });
  $$renderer.push(`<!----> <div style="line-height: 1.2;"><div style="font-size: 13px; font-weight: 600;">Bu cihaz</div> <div style="font-size: 11.5px; color: var(--ok); display: flex; align-items: center; gap: 5px;"><span style="width: 6px; height: 6px; border-radius: 50%; background: var(--ok);"></span> \xC7evrimi\xE7i \xB7 relay\u2019e kay\u0131tl\u0131</div></div></div></div></aside>`);
}
function WindowChrome($$renderer, $$props) {
  const DOTS = ["#ED6A5E", "#F4BF4F", "#61C554"];
  let { title } = $$props;
  $$renderer.push(`<div style="height: 44px; flex: none; display: flex; align-items: center; padding: 0 14px; border-bottom: 1px solid var(--border); background: var(--surface); user-select: none; position: relative;"><div style="display: flex; gap: 8px;"><!--[-->`);
  const each_array = ensure_array_like(DOTS);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let c2 = each_array[i];
    $$renderer.push(`<span${attr_style(`width: 12px; height: 12px; border-radius: 50%; background: ${stringify3(c2)}; cursor: ${i === 0 ? "pointer" : "default"};`)}></span>`);
  }
  $$renderer.push(`<!--]--></div> <div style="position: absolute; left: 0; right: 0; text-align: center; font-size: 13px; font-weight: 600; color: var(--text-muted); pointer-events: none;">${escape_html2(title)}</div> <div style="margin-left: auto; display: flex; align-items: center; gap: 4px; color: var(--text-faint);"><span style="font-family: var(--font-mono); font-size: 11.5px;">Pulsar v1.0</span></div></div>`);
}
function AppShell($$renderer, $$props) {
  let {
    title = "Pulsar \u2014 Ba\u011Flan",
    active = "home",
    selfId = SELF_ID,
    children
  } = $$props;
  $$renderer.push(`<div class="window">`);
  WindowChrome($$renderer, { title });
  $$renderer.push(`<!----> <div style="display: flex; flex: 1; min-height: 0;">`);
  Sidebar($$renderer, { active, selfId });
  $$renderer.push(`<!----> <main class="content">`);
  children?.($$renderer);
  $$renderer.push(`<!----></main></div></div>`);
}
function Badge($$renderer, $$props) {
  let { tone = "neutral", style = "", children } = $$props;
  const TONES = {
    online: { bg: "var(--ok-soft)", fg: "var(--ok)" },
    stream: { bg: "var(--cyan-soft)", fg: "var(--cyan)" },
    accent: { bg: "var(--accent-soft)", fg: "var(--accent-press)" },
    warn: { bg: "var(--warn-soft)", fg: "oklch(0.5 0.13 70)" },
    danger: { bg: "var(--danger-soft)", fg: "var(--danger)" },
    neutral: { bg: "var(--surface-3)", fg: "var(--text-muted)" }
  };
  const c2 = derived(() => TONES[tone] ?? TONES.neutral);
  $$renderer.push(`<span${attr_style(`display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 600; padding: 4px 10px; border-radius: var(--r-pill); background: ${stringify3(c2().bg)}; color: ${stringify3(c2().fg)}; ${stringify3(style)}`)}>`);
  if (tone !== "neutral") {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<span${attr_style(`width: 6px; height: 6px; border-radius: 50%; background: ${stringify3(c2().fg)};`)}></span>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--> `);
  children?.($$renderer);
  $$renderer.push(`<!----></span>`);
}
function Button($$renderer, $$props) {
  let {
    variant = "primary",
    icon,
    disabled = false,
    style = "",
    children
  } = $$props;
  $$renderer.push(`<button type="button"${attr_class(`btn btn-${stringify3(variant)}`)}${attr("disabled", disabled, true)}${attr_style(`opacity: ${stringify3(disabled ? 0.5 : 1)}; ${stringify3(style)}`)}>`);
  {
    $$renderer.push("<!--[0-->");
    Icon($$renderer, { name: icon, size: 17 });
  }
  $$renderer.push(`<!--]--> `);
  children?.($$renderer);
  $$renderer.push(`<!----></button>`);
}
function Card($$renderer, $$props) {
  let { pad = 24, style = "", children } = $$props;
  $$renderer.push(`<div${attr_style(`background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-lg); box-shadow: var(--shadow-sm); padding: ${stringify3(pad)}px; ${stringify3(style)}`)}>`);
  children?.($$renderer);
  $$renderer.push(`<!----></div>`);
}
function RecentRow($$renderer, $$props) {
  let { name, id, tone = "accent" } = $$props;
  $$renderer.push(`<button type="button" class="recent-row">`);
  Avatar($$renderer, { name, tone, size: 30 });
  $$renderer.push(`<!----> <div style="text-align: left; line-height: 1.25;"><div style="font-size: 13.5px; font-weight: 600;">${escape_html2(name)}</div> <div style="font-family: var(--font-mono); font-size: 11px; color: var(--text-faint);">${escape_html2(id)}</div></div> `);
  Icon($$renderer, {
    name: "arrowRight",
    size: 15,
    style: "margin-left: auto; color: var(--text-faint);"
  });
  $$renderer.push(`<!----></button>`);
}
function ScreenHeader($$renderer, $$props) {
  let { title, sub, right } = $$props;
  $$renderer.push(`<div class="screen-head"><div><h1 style="font-size: 27px; letter-spacing: -0.03em;">${escape_html2(title)}</h1> `);
  {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<p style="color: var(--text-muted); font-size: 14.5px; margin-top: 7px;">${escape_html2(sub)}</p>`);
  }
  $$renderer.push(`<!--]--></div> `);
  right?.($$renderer);
  $$renderer.push(`<!----></div>`);
}
function SegControl($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { options: options2, value } = $$props;
    $$renderer2.push(`<div style="display: inline-flex; background: var(--surface-3); border-radius: var(--r-sm); padding: 3px; gap: 2px;"><!--[-->`);
    const each_array = ensure_array_like(options2);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let o2 = each_array[$$index];
      const active = o2.value === value;
      $$renderer2.push(`<button type="button"${attr_style(`border: none; cursor: pointer; font-family: var(--font-sans); font-weight: 600; font-size: 13px; padding: 6px 13px; border-radius: 7px; background: ${active ? "var(--surface)" : "transparent"}; color: ${active ? "var(--text)" : "var(--text-muted)"}; box-shadow: ${active ? "var(--shadow-xs)" : "none"}; transition: all var(--dur) var(--ease);`)}>${escape_html2(o2.label)}</button>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function HomeScreen($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { selfId = SELF_ID, recents = RECENTS } = $$props;
    let mode = "remote";
    let target = "";
    const enough = derived(() => target.replace(/\D/g, "").length >= 6);
    $$renderer2.push(`<div>`);
    {
      let right = /* @__PURE__ */ __name(function($$renderer3) {
        SegControl($$renderer3, {
          value: mode,
          options: [
            { value: "remote", label: "Uzaktan masa\xFCst\xFC" },
            { value: "game", label: "Oyun ak\u0131\u015F\u0131" }
          ]
        });
      }, "right");
      ScreenHeader($$renderer2, {
        title: "Ba\u011Flan",
        sub: "Kimli\u011Fini payla\u015F ya da uzak bir cihaza ba\u011Flan.",
        right
      });
    }
    $$renderer2.push(`<!----> <div class="home-grid">`);
    Card($$renderer2, {
      children: /* @__PURE__ */ __name(($$renderer3) => {
        $$renderer3.push(`<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px;"><span style="font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-faint);">Bu cihaza izin ver</span> `);
        Badge($$renderer3, {
          tone: "online",
          children: /* @__PURE__ */ __name(($$renderer4) => {
            $$renderer4.push(`<!---->Haz\u0131r`);
          }, "children")
        });
        $$renderer3.push(`<!----></div> <div style="font-size: 12.5px; color: var(--text-muted); font-weight: 600; margin-bottom: 7px;">Cihaz kimli\u011Fi</div> <div style="display: flex; align-items: center; gap: 10px;"><span style="font-family: var(--font-mono); font-size: 27px; font-weight: 500; letter-spacing: 0.04em; white-space: nowrap;">${escape_html2(selfId)}</span> <button type="button" class="icon-btn" title="Kopyala" style="margin-left: auto;">`);
        Icon($$renderer3, { name: "copy", size: 17 });
        $$renderer3.push(`<!----></button></div> <div style="height: 1px; background: var(--border); margin: 20px 0;"></div> <div style="font-size: 12.5px; color: var(--text-muted); font-weight: 600; margin-bottom: 7px;">Tek seferlik \u015Fifre</div> <div style="display: flex; align-items: center; gap: 10px;"><span style="font-family: var(--font-mono); font-size: 22px; font-weight: 500; letter-spacing: 0.12em;">7yf2-qk</span> <button type="button" class="icon-btn" title="Yenile" style="margin-left: auto;">`);
        Icon($$renderer3, { name: "refresh", size: 16 });
        $$renderer3.push(`<!----></button></div> <p style="font-size: 12.5px; color: var(--text-faint); margin-top: 16px; line-height: 1.5;">Bu kimlik relay sunucusundan atan\u0131r. Payla\u015F\u0131rsan ba\u015Fkalar\u0131 cihaz\u0131na ba\u011Flanabilir; ba\u011Flant\u0131 \xF6nce P2P, gerekirse relay
				\xFCzerinden kurulur. \u015Eifre her oturumdan sonra yenilenir.</p>`);
      }, "children")
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      style: "display: flex; flex-direction: column;",
      children: /* @__PURE__ */ __name(($$renderer3) => {
        $$renderer3.push(`<span style="font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-faint); margin-bottom: 18px;">${escape_html2("Uzak cihaza ba\u011Flan")}</span> <label for="ds-target-id" style="font-size: 12.5px; color: var(--text-muted); font-weight: 600; margin-bottom: 7px;">Cihaz kimli\u011Fi</label> <div class="field">`);
        Icon($$renderer3, {
          name: "connect",
          size: 17,
          style: "color: var(--text-faint);"
        });
        $$renderer3.push(`<!----> <input id="ds-target-id"${attr("value", target)} placeholder="000 000 000" style="border: none; outline: none; background: transparent; font-family: var(--font-mono); font-size: 19px; width: 100%; color: var(--text); letter-spacing: 0.06em;"/></div> `);
        Button($$renderer3, {
          variant: "primary",
          icon: "connect",
          disabled: !enough(),
          style: "justify-content: center; margin-top: 12px;",
          children: /* @__PURE__ */ __name(($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html2("Ba\u011Flan")}`);
          }, "children")
        });
        $$renderer3.push(`<!----> <div style="margin-top: auto; padding-top: 20px;"><div style="font-size: 11.5px; color: var(--text-faint); font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 10px;">Son ba\u011Flant\u0131lar</div> <div style="display: flex; flex-direction: column; gap: 6px;"><!--[-->`);
        const each_array = ensure_array_like(recents.slice(0, 3));
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let r3 = each_array[$$index];
          RecentRow($$renderer3, {
            name: r3.name,
            id: r3.id,
            tone: r3.tone
          });
        }
        $$renderer3.push(`<!--]--></div></div>`);
      }, "children")
    });
    $$renderer2.push(`<!----></div></div>`);
  });
}
function FauxDesktop($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { mode = "remote" } = $$props;
    let clock = "";
    const TRAFFIC = ["#ED6A5E", "#F4BF4F", "#61C554"];
    const LINES = [88, 66, 74, 52];
    const DOCK = ["#5B7CFA", "#E0689B", "#3FB98C", "#F2B33D", "#8A6BF0"];
    if (mode === "game") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div style="position: absolute; inset: 0; overflow: hidden; background: radial-gradient(120% 120% at 30% 20%, oklch(0.32 0.09 280), oklch(0.16 0.05 270) 70%);"><div style="position: absolute; inset: 0; background: linear-gradient(0deg, oklch(0.1 0.03 270 / 0.7), transparent 55%);"></div> <div style="position: absolute; bottom: 20%; left: 8%; width: 220px; height: 220px; border-radius: 50%; background: radial-gradient(circle, oklch(0.62 0.15 215 / 0.5), transparent 70%); filter: blur(8px);"></div> <div style="position: absolute; top: 14%; right: 12%; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle, oklch(0.6 0.2 320 / 0.35), transparent 70%); filter: blur(12px);"></div> <div style="position: absolute; inset: 0; background-image: repeating-linear-gradient(115deg, transparent, transparent 34px, oklch(1 0 0 / 0.025) 34px, oklch(1 0 0 / 0.025) 35px);"></div> <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); text-align: center;"><div style="font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.14em; color: oklch(0.85 0.05 215); text-transform: uppercase;">Canl\u0131 oyun ak\u0131\u015F\u0131</div> <div style="font-family: var(--font-display); font-size: 34px; font-weight: 600; color: #fff; margin-top: 8px; letter-spacing: -0.02em;">Stellar Drift</div></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div style="position: absolute; inset: 0; overflow: hidden; background: radial-gradient(130% 120% at 70% 0%, oklch(0.42 0.07 250), oklch(0.26 0.04 255) 70%);"><div style="position: absolute; top: 0; left: 0; right: 0; height: 28px; background: oklch(0.18 0.02 255 / 0.55); backdrop-filter: blur(8px); display: flex; align-items: center; padding: 0 14px; gap: 16px; color: oklch(0.92 0.01 255); font-size: 11.5px; font-weight: 600;"><span style="font-weight: 700;">\u25CF</span> <span>Dosya</span> <span>D\xFCzen</span> <span>G\xF6r\xFCn\xFCm</span> <span style="margin-left: auto; font-family: var(--font-mono);">${escape_html2(clock)}</span></div> <div style="position: absolute; top: 64px; left: 48px; width: 46%; height: 58%; border-radius: 10px; background: oklch(0.96 0.005 255 / 0.96); box-shadow: 0 30px 60px -20px rgba(0,0,0,0.5); overflow: hidden;"><div style="height: 30px; background: oklch(0.9 0.005 255); display: flex; align-items: center; gap: 6px; padding: 0 11px;"><!--[-->`);
      const each_array = ensure_array_like(TRAFFIC);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let c2 = each_array[$$index];
        $$renderer2.push(`<span${attr_style(`width: 9px; height: 9px; border-radius: 50%; background: ${stringify3(c2)};`)}></span>`);
      }
      $$renderer2.push(`<!--]--></div> <div style="padding: 16px; display: flex; flex-direction: column; gap: 8px;"><!--[-->`);
      const each_array_1 = ensure_array_like(LINES);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let w = each_array_1[$$index_1];
        $$renderer2.push(`<div${attr_style(`height: 9px; width: ${stringify3(w)}%; border-radius: 4px; background: oklch(0.86 0.006 255);`)}></div>`);
      }
      $$renderer2.push(`<!--]--></div></div> <div style="position: absolute; top: 130px; right: 60px; width: 34%; height: 46%; border-radius: 10px; background: oklch(0.2 0.02 260 / 0.96); box-shadow: 0 30px 60px -20px rgba(0,0,0,0.5); overflow: hidden;"><div style="height: 28px; background: oklch(0.26 0.02 260);"></div> <div style="padding: 14px; font-family: var(--font-mono); font-size: 11px; line-height: 1.8; color: oklch(0.7 0.13 158);"><div><span style="color: oklch(0.6 0.02 260);">$</span> systemctl status pulsar</div> <div style="color: oklch(0.75 0.02 260);">\u25CF active (running)</div> <div><span style="color: oklch(0.6 0.02 260);">$</span> _</div></div></div> <div style="position: absolute; bottom: 14px; left: 50%; transform: translateX(-50%); display: flex; gap: 9px; padding: 8px 12px; border-radius: 16px; background: oklch(0.96 0.005 255 / 0.3); backdrop-filter: blur(10px); border: 1px solid oklch(1 0 0 / 0.15);"><!--[-->`);
      const each_array_2 = ensure_array_like(DOCK);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let c2 = each_array_2[$$index_2];
        $$renderer2.push(`<div${attr_style(`width: 34px; height: 34px; border-radius: 9px; background: ${stringify3(c2)}; box-shadow: 0 4px 10px rgba(0,0,0,0.25);`)}></div>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function ToolButton($$renderer, $$props) {
  let { icon, label, onclick, active = false, danger = false } = $$props;
  $$renderer.push(`<button type="button"${attr("title", label)}${attr_style(`display: flex; flex-direction: column; align-items: center; gap: 3px; border: none; background: ${active ? "oklch(1 0 0 / 0.16)" : "transparent"}; cursor: pointer; border-radius: 9px; padding: 7px 10px; color: ${danger ? "oklch(0.8 0.13 25)" : "oklch(0.95 0.01 260)"}; transition: background var(--dur); min-width: 52px;`)}>`);
  Icon($$renderer, { name: icon, size: 18 });
  $$renderer.push(`<!----> <span style="font-size: 10px; font-weight: 600;">${escape_html2(label)}</span></button>`);
}
function SessionScreen($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      target = { name: "Ev PC\u2019si", id: "719 204 663" },
      mode = "remote",
      stats = { fps: 60, latency: 7, bitrate: 24 },
      conn = "p2p",
      onEnd
    } = $$props;
    let panel = null;
    let quality = "auto";
    let fs = false;
    const QUALITIES = [
      { v: "auto", l: "Oto" },
      { v: "hq", l: "4K" },
      { v: "fast", l: "H\u0131zl\u0131" }
    ];
    const FILES = [
      { n: "rapor-q3.pdf", s: "2.4 MB", d: "\u2193" },
      { n: "build.zip", s: "48 MB", d: "\u2191" }
    ];
    $$renderer2.push(`<div style="position: absolute; inset: 0; background: #000; display: flex; flex-direction: column;"><div style="position: relative; flex: 1; overflow: hidden;">`);
    FauxDesktop($$renderer2, { mode });
    $$renderer2.push(`<!----> <div class="s-toolbar" style="position: absolute; top: 14px; left: 50%; z-index: 3; display: flex; align-items: center; gap: 4px; padding: 7px 9px; border-radius: 14px; background: oklch(0.18 0.02 262 / 0.82); backdrop-filter: blur(16px); border: 1px solid oklch(1 0 0 / 0.12); box-shadow: 0 10px 40px -8px rgba(0,0,0,0.5);"><div style="display: flex; align-items: center; gap: 9px; padding: 0 10px 0 6px; border-right: 1px solid oklch(1 0 0 / 0.12); margin-right: 4px;"><span style="width: 7px; height: 7px; border-radius: 50%; background: var(--ok); box-shadow: 0 0 8px var(--ok);"></span> <div style="line-height: 1.15;"><div style="font-size: 12.5px; font-weight: 700; color: #fff; white-space: nowrap;">${escape_html2(target.name)}</div> <div style="font-family: var(--font-mono); font-size: 10px; color: oklch(0.8 0.05 215); white-space: nowrap;">${escape_html2(stats.fps)} fps \xB7 ${escape_html2(stats.latency)} ms \xB7 ${escape_html2(stats.bitrate)} Mbps</div></div> <span${attr_style(`font-family: var(--font-mono); font-size: 9.5px; font-weight: 700; letter-spacing: 0.04em; padding: 3px 7px; border-radius: 6px; white-space: nowrap; background: ${conn === "p2p" ? "oklch(0.6 0.18 272 / 0.32)" : "oklch(0.7 0.02 260 / 0.25)"}; color: ${conn === "p2p" ? "oklch(0.86 0.09 282)" : "oklch(0.85 0.01 260)"};`)}>${escape_html2(conn === "p2p" ? "DO\u011ERUDAN P2P" : "RELAY")}</span></div> `);
    if (mode === "remote") {
      $$renderer2.push("<!--[0-->");
      ToolButton($$renderer2, { icon: "monitor", label: "Ekran 1", active: true });
      $$renderer2.push(`<!----> `);
      ToolButton($$renderer2, { icon: "clipboard", label: "Pano" });
      $$renderer2.push(`<!----> `);
      ToolButton($$renderer2, {
        icon: "file",
        label: "Dosya",
        active: panel === "files",
        onclick: /* @__PURE__ */ __name(() => panel = panel === "files" ? null : "files", "onclick")
      });
      $$renderer2.push(`<!----> `);
      ToolButton($$renderer2, { icon: "keyboard", label: "Klavye" });
      $$renderer2.push(`<!----> `);
      ToolButton($$renderer2, { icon: "power", label: "Ctrl+Alt+Del" });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (mode === "game") {
      $$renderer2.push("<!--[0-->");
      ToolButton($$renderer2, { icon: "gaming", label: "Kontrolc\xFC", active: true });
      $$renderer2.push(`<!----> `);
      ToolButton($$renderer2, { icon: "speaker", label: "Ses" });
      $$renderer2.push(`<!----> `);
      ToolButton($$renderer2, { icon: "bolt", label: "D\xFC\u015F\xFCk gec.", active: true });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    ToolButton($$renderer2, {
      icon: "chat",
      label: "Sohbet",
      active: panel === "chat",
      onclick: /* @__PURE__ */ __name(() => panel = panel === "chat" ? null : "chat", "onclick")
    });
    $$renderer2.push(`<!----> `);
    ToolButton($$renderer2, {
      icon: "expand",
      label: "Tam ekran",
      active: fs,
      onclick: /* @__PURE__ */ __name(() => fs = !fs, "onclick")
    });
    $$renderer2.push(`<!----> <div style="display: flex; align-items: center; gap: 2px; margin-left: 4px; padding-left: 4px; border-left: 1px solid oklch(1 0 0 / 0.12);">`);
    ToolButton($$renderer2, { icon: "x", label: "Bitir", danger: true, onclick: onEnd });
    $$renderer2.push(`<!----></div></div> <div style="position: absolute; bottom: 14px; right: 14px; z-index: 3; display: flex; gap: 8px; align-items: center; padding: 6px 8px 6px 12px; border-radius: 12px; background: oklch(0.18 0.02 262 / 0.82); backdrop-filter: blur(16px); border: 1px solid oklch(1 0 0 / 0.12);"><span style="font-size: 11.5px; font-weight: 600; color: oklch(0.85 0.01 260);">Kalite</span> <div style="display: inline-flex; gap: 2px; background: oklch(0.1 0.02 262 / 0.6); border-radius: 8px; padding: 2px;"><!--[-->`);
    const each_array = ensure_array_like(QUALITIES);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let o2 = each_array[$$index];
      $$renderer2.push(`<button type="button"${attr_style(`border: none; cursor: pointer; border-radius: 6px; padding: 4px 10px; font-size: 11.5px; font-weight: 600; font-family: var(--font-sans); background: ${quality === o2.v ? "var(--accent)" : "transparent"}; color: ${quality === o2.v ? "#fff" : "oklch(0.7 0.01 260)"};`)}>${escape_html2(o2.l)}</button>`);
    }
    $$renderer2.push(`<!--]--></div></div> `);
    if (panel) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div style="position: absolute; top: 0; right: 0; bottom: 0; width: 300px; z-index: 4; background: var(--surface); border-left: 1px solid var(--border); display: flex; flex-direction: column; box-shadow: -20px 0 50px -20px rgba(0,0,0,0.4); animation: slideIn 0.25s var(--ease);"><div style="display: flex; align-items: center; justify-content: space-between; padding: 14px 16px; border-bottom: 1px solid var(--border);"><span style="font-weight: 700; font-size: 14px;">${escape_html2(panel === "files" ? "Dosya transferi" : "Oturum sohbeti")}</span> <button type="button" class="icon-btn">`);
      Icon($$renderer2, { name: "x", size: 16 });
      $$renderer2.push(`<!----></button></div> `);
      if (panel === "files") {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div style="padding: 16px; flex: 1;"><div style="border: 1.5px dashed var(--border-strong); border-radius: var(--r); padding: 28px 16px; text-align: center; color: var(--text-faint);">`);
        Icon($$renderer2, { name: "file", size: 26, style: "color: var(--text-faint);" });
        $$renderer2.push(`<!----> <div style="font-size: 13px; font-weight: 600; color: var(--text-muted); margin-top: 10px;">Dosyalar\u0131 buraya s\xFCr\xFCkle</div> <div style="font-size: 11.5px; margin-top: 4px;">\u0130ki y\xF6nl\xFC, \u015Fifreli aktar\u0131m</div></div> <!--[-->`);
        const each_array_1 = ensure_array_like(FILES);
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let f = each_array_1[$$index_1];
          $$renderer2.push(`<div style="display: flex; align-items: center; gap: 10px; padding: 10px 4px; border-bottom: 1px solid var(--border);">`);
          Icon($$renderer2, { name: "file", size: 16, style: "color: var(--accent);" });
          $$renderer2.push(`<!----> <div style="flex: 1;"><div style="font-size: 13px; font-weight: 600;">${escape_html2(f.n)}</div> <div style="font-size: 11px; color: var(--text-faint);">${escape_html2(f.s)} \xB7 ${escape_html2(f.d === "\u2193" ? "\u0130ndirildi" : "G\xF6nderildi")}</div></div> `);
          Icon($$renderer2, { name: "check", size: 15, style: "color: var(--ok);" });
          $$renderer2.push(`<!----></div>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<div style="padding: 16px; flex: 1; display: flex; flex-direction: column; gap: 12px;"><div style="background: var(--surface-2); border-radius: var(--r); padding: 9px 12px; font-size: 13px; align-self: flex-start; max-width: 85%;">Ba\u011Flant\u0131 kuruldu, ekran\u0131 g\xF6rebiliyor musun?</div> <div style="background: var(--accent); color: #fff; border-radius: var(--r); padding: 9px 12px; font-size: 13px; align-self: flex-end; max-width: 85%;">Evet, gayet net \u{1F44D}</div></div>`);
      }
      $$renderer2.push(`<!--]--> <div style="padding: 12px; border-top: 1px solid var(--border);"><div class="field"><input placeholder="Mesaj yaz\u2026" style="border: none; outline: none; background: transparent; font-size: 13px; width: 100%;"/></div></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const L = derived(() => DS_LMAP[store_get($$store_subs ??= {}, "$lang", lang)]);
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html2(DOC_TITLE[store_get($$store_subs ??= {}, "$lang", lang)])}</title>`);
      });
    });
    $$renderer2.push(`<a id="top" class="svelte-1uha8ag"></a> <section class="hero svelte-1uha8ag"><div class="wrap svelte-1uha8ag"><span class="pill svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("hero.pill"))}</span> <h1 class="hero-title svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("hero.title"))}</h1> <p class="sub svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("hero.sub"))}</p> <div class="hero-cta svelte-1uha8ag"><a class="btn btn-primary btn-lg svelte-1uha8ag" href="/download"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1uha8ag"><path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 19h16" class="svelte-1uha8ag"></path></svg> <span class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("hero.dl"))}</span></a></div> <div class="osline svelte-1uha8ag">macOS \xB7 Windows \xB7 Linux \xB7 Android \xB7 iOS (${escape_html2(store_get($$store_subs ??= {}, "$t", t)("dl.soon").toLowerCase())})</div> <div class="shot-stage svelte-1uha8ag"><div class="shot-wrap svelte-1uha8ag"><div class="chip-float cf1 svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("hero.chip1"))}</div> <div class="chip-float cf2 svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("hero.chip2"))}</div> <div class="ds-shot svelte-1uha8ag" aria-label="Pulsar uygulamas\u0131 \u2014 Ba\u011Flan ekran\u0131">`);
    AppShell($$renderer2, {
      title: L().title,
      active: "home",
      selfId: "482 913 056",
      children: /* @__PURE__ */ __name(($$renderer3) => {
        HomeScreen($$renderer3, { selfId: "482 913 056" });
      }, "children")
    });
    $$renderer2.push(`<!----></div></div></div></div></section> <div class="strip svelte-1uha8ag"><div class="wrap svelte-1uha8ag"><div class="cell svelte-1uha8ag"><div class="v svelte-1uha8ag">&lt;<em class="svelte-1uha8ag">8</em> ms</div><div class="k svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("strip.k1"))}</div></div> <div class="cell svelte-1uha8ag"><div class="v svelte-1uha8ag">4K \xB7 <em class="svelte-1uha8ag">120</em> fps</div><div class="k svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("strip.k2"))}</div></div> <div class="cell svelte-1uha8ag"><div class="v svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("strip.v3"))}</div><div class="k svelte-1uha8ag">macOS \xB7 Windows \xB7 Linux \xB7 Android</div></div> <div class="cell svelte-1uha8ag"><div class="v svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("strip.v4"))}</div><div class="k svelte-1uha8ag">GPLv3 \xB7 self-host</div></div></div></div> <section class="s svelte-1uha8ag" id="gaming"><div class="wrap svelte-1uha8ag"><div class="uc game svelte-1uha8ag"><div class="txt reveal svelte-1uha8ag"><span class="eyebrow svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("game.eyebrow"))}</span> <h3 class="s-title svelte-1uha8ag" style="font-size: clamp(24px, 3vw, 32px);">${html(store_get($$store_subs ??= {}, "$t", t)("game.title"))}</h3> <p class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("game.p"))}</p> <ul class="ticks svelte-1uha8ag"><li class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("game.t1"))}</li> <li class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("game.t2"))}</li> <li class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("game.t3"))}</li> <li class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("game.t4"))}</li></ul></div> <div class="vis vis-game reveal svelte-1uha8ag"><div class="ds-session svelte-1uha8ag">`);
    SessionScreen($$renderer2, {
      mode: "game",
      conn: "p2p",
      target: { name: L().gameName, id: "640 117 992" }
    });
    $$renderer2.push(`<!----></div></div></div> <div class="uc remote svelte-1uha8ag" id="remote"><div class="vis vis-remote reveal svelte-1uha8ag"><div class="ds-session svelte-1uha8ag">`);
    SessionScreen($$renderer2, {
      mode: "remote",
      conn: "p2p",
      target: { name: L().remoteName, id: "719 204 663" }
    });
    $$renderer2.push(`<!----></div></div> <div class="txt reveal svelte-1uha8ag"><span class="eyebrow svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("remote.eyebrow"))}</span> <h3 class="s-title svelte-1uha8ag" style="font-size: clamp(24px, 3vw, 32px);">${html(store_get($$store_subs ??= {}, "$t", t)("remote.title"))}</h3> <p class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("remote.p"))}</p> <ul class="ticks svelte-1uha8ag"><li class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("remote.t1"))}</li> <li class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("remote.t2"))}</li> <li class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("remote.t3"))}</li> <li class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("remote.t4"))}</li></ul></div></div></div></section> <section class="s features svelte-1uha8ag" id="features"><div class="wrap svelte-1uha8ag"><div class="head reveal svelte-1uha8ag"><span class="eyebrow svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("feat.eyebrow"))}</span> <h2 class="s-title svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("feat.title"))}</h2></div> <div class="fgrid svelte-1uha8ag"><div class="f reveal svelte-1uha8ag"><div class="ic svelte-1uha8ag"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1uha8ag"><path d="M13 2L3 14h7l-1 8 10-12h-7z" class="svelte-1uha8ag"></path></svg></div><h4 class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("feat.f1h"))}</h4><p class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("feat.f1p"))}</p></div> <div class="f reveal svelte-1uha8ag"><div class="ic svelte-1uha8ag"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1uha8ag"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" class="svelte-1uha8ag"></path></svg></div><h4 class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("feat.f2h"))}</h4><p class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("feat.f2p"))}</p></div> <div class="f reveal svelte-1uha8ag"><div class="ic svelte-1uha8ag"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1uha8ag"><rect x="3" y="3" width="18" height="18" rx="2" class="svelte-1uha8ag"></rect><path d="M3 9h18M9 21V9" class="svelte-1uha8ag"></path></svg></div><h4 class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("feat.f3h"))}</h4><p class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("feat.f3p"))}</p></div> <div class="f reveal svelte-1uha8ag"><div class="ic svelte-1uha8ag"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1uha8ag"><path d="M4 16V6a2 2 0 012-2h12a2 2 0 012 2v10M2 20h20M9 8h6" class="svelte-1uha8ag"></path></svg></div><h4 class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("feat.f4h"))}</h4><p class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("feat.f4p"))}</p></div> <div class="f reveal svelte-1uha8ag"><div class="ic svelte-1uha8ag"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1uha8ag"><path d="M14 3v4a1 1 0 001 1h4M5 3h9l5 5v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" class="svelte-1uha8ag"></path><path d="M9 13l2 2 4-4" class="svelte-1uha8ag"></path></svg></div><h4 class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("feat.f5h"))}</h4><p class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("feat.f5p"))}</p></div> <div class="f reveal svelte-1uha8ag"><div class="ic svelte-1uha8ag"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1uha8ag"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" class="svelte-1uha8ag"></path></svg></div><h4 class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("feat.f6h"))}</h4><p class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("feat.f6p"))}</p></div></div></div></section> <section class="s svelte-1uha8ag" id="how"><div class="wrap svelte-1uha8ag"><div class="reveal svelte-1uha8ag" style="text-align:center; display:flex; flex-direction:column; align-items:center;"><span class="eyebrow svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("how.eyebrow"))}</span> <h2 class="s-title svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("how.title"))}</h2></div> <div class="how svelte-1uha8ag"><div class="hstep reveal svelte-1uha8ag"><div class="n svelte-1uha8ag">1</div><h4 class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("how.s1h"))}</h4><p class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("how.s1p"))}</p></div> <div class="hstep reveal svelte-1uha8ag"><div class="n svelte-1uha8ag">2</div><h4 class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("how.s2h"))}</h4><p class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("how.s2p"))}</p></div> <div class="hstep reveal svelte-1uha8ag"><div class="n svelte-1uha8ag">3</div><h4 class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("how.s3h"))}</h4><p class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("how.s3p"))}</p></div></div></div></section> <section class="cta svelte-1uha8ag"><div class="cta-inner reveal svelte-1uha8ag"><div class="rings svelte-1uha8ag"><span style="width: 380px; height: 380px;" class="svelte-1uha8ag"></span> <span style="width: 560px; height: 560px;" class="svelte-1uha8ag"></span> <span style="width: 760px; height: 760px;" class="svelte-1uha8ag"></span></div> <h2 class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("cta.title"))}</h2> <p class="svelte-1uha8ag">${html(store_get($$store_subs ??= {}, "$t", t)("cta.p"))}</p> <div class="cta-row svelte-1uha8ag"><a class="btn btn-primary btn-lg svelte-1uha8ag" href="/download">${html(store_get($$store_subs ??= {}, "$t", t)("cta.dl"))}</a> <a class="btn btn-ghost btn-lg svelte-1uha8ag" href="https://github.com/PulsarDesk">${html(store_get($$store_subs ??= {}, "$t", t)("cta.star"))}</a></div></div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
var ICON_PATHS, SELF_ID, RECENTS, NAV;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_modules_watch_stub();
    init_chunks();
    init_index3();
    init_clsx();
    init_PulsarMark();
    __name(Avatar, "Avatar");
    ICON_PATHS = {
      connect: '<path d="M12 3v12" /><path d="M8 7l4-4 4 4" /><path d="M4 14v5a2 2 0 002 2h12a2 2 0 002-2v-5" />',
      devices: '<rect x="3" y="4" width="13" height="9" rx="1.5" /><rect x="13" y="9" width="8" height="11" rx="1.5" /><path d="M6 17h5M8 13v4" />',
      gaming: '<rect x="2" y="6" width="20" height="12" rx="4" /><path d="M7 10v4M5 12h4" /><circle cx="15.5" cy="11" r="1" /><circle cx="18" cy="14" r="1" />',
      settings: '<circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 00-.1-1.3l2-1.5-2-3.4-2.3 1a7 7 0 00-2.2-1.3L14 2h-4l-.4 2.2a7 7 0 00-2.2 1.3l-2.3-1-2 3.4 2 1.5A7 7 0 005 12c0 .4 0 .9.1 1.3l-2 1.5 2 3.4 2.3-1a7 7 0 002.2 1.3L10 22h4l.4-2.2a7 7 0 002.2-1.3l2.3 1 2-3.4-2-1.5c.1-.4.1-.9.1-1.3z" />',
      monitor: '<rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" />',
      lock: '<rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 018 0v4" />',
      search: '<circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" />',
      plus: '<path d="M12 5v14M5 12h14" />',
      minus: '<path d="M5 12h14" />',
      dots: '<circle cx="5" cy="12" r="1.4" /><circle cx="12" cy="12" r="1.4" /><circle cx="19" cy="12" r="1.4" />',
      chevron: '<path d="M9 6l6 6-6 6" />',
      chevronDown: '<path d="M6 9l6 6 6-6" />',
      refresh: '<path d="M3 12a9 9 0 0115.5-6.3L21 8M21 4v4h-4" /><path d="M21 12a9 9 0 01-15.5 6.3L3 16M3 20v-4h4" />',
      expand: '<path d="M8 3H5a2 2 0 00-2 2v3M16 3h3a2 2 0 012 2v3M8 21H5a2 2 0 01-2-2v-3M16 21h3a2 2 0 002-2v-3" />',
      keyboard: '<rect x="2" y="6" width="20" height="12" rx="2" /><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10" />',
      clipboard: '<rect x="8" y="3" width="8" height="4" rx="1" /><path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-2" />',
      power: '<path d="M12 4v8M7.5 7a7 7 0 109 0" />',
      file: '<path d="M14 3v4a1 1 0 001 1h4" /><path d="M5 3h9l5 5v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />',
      chat: '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />',
      mic: '<rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0014 0M12 18v3" />',
      shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />',
      bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z" />',
      plug: '<path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 01-10 0zM12 16v6" />',
      user: '<circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0116 0" />',
      star: '<path d="M12 3l2.6 5.3 5.9.8-4.3 4.1 1 5.8L12 16.3 6.8 19l1-5.8L3.5 9.1l5.9-.8z" />',
      x: '<path d="M6 6l12 12M18 6L6 18" />',
      check: '<path d="M4 12l5 5L20 6" />',
      copy: '<rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a2 2 0 012-2h10" />',
      arrowRight: '<path d="M5 12h14M13 6l6 6-6 6" />',
      wifi: '<path d="M5 12.5a10 10 0 0114 0M8.5 16a5 5 0 017 0M12 19.5h.01" />',
      sun: '<circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />',
      speaker: '<path d="M11 5L6 9H3v6h3l5 4z" /><path d="M16 9a4 4 0 010 6M19 6a8 8 0 010 12" />'
    };
    __name(Icon, "Icon");
    __name(IDDisplay, "IDDisplay");
    SELF_ID = "482 913 056";
    RECENTS = [
      { name: "Ev PC\u2019si", id: "719 204 663", tone: "accent", cat: "pc" },
      { name: "Ofis Sunucusu", id: "305 881 027", tone: "cyan", cat: "server" },
      { name: "Oyun Rig\u2019i", id: "640 117 992", tone: "ok", cat: "console" }
    ];
    NAV = [
      { id: "home", label: "Ba\u011Flan", icon: "connect" },
      { id: "devices", label: "Cihazlar", icon: "devices" },
      { id: "gaming", label: "Gaming", icon: "gaming" },
      { id: "settings", label: "Ayarlar", icon: "settings" }
    ];
    __name(Sidebar, "Sidebar");
    __name(WindowChrome, "WindowChrome");
    __name(AppShell, "AppShell");
    __name(Badge, "Badge");
    __name(Button, "Button");
    __name(Card, "Card");
    __name(RecentRow, "RecentRow");
    __name(ScreenHeader, "ScreenHeader");
    __name(SegControl, "SegControl");
    __name(HomeScreen, "HomeScreen");
    __name(FauxDesktop, "FauxDesktop");
    __name(ToolButton, "ToolButton");
    __name(SessionScreen, "SessionScreen");
    __name(_page, "_page");
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3
});
var index3, component_cache3, component3, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    init_modules_watch_stub();
    index3 = 2;
    component3 = /* @__PURE__ */ __name(async () => component_cache3 ??= (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default, "component");
    imports3 = ["_app/immutable/nodes/2.QZq4-9gY.js", "_app/immutable/chunks/DCdaCEBk.js", "_app/immutable/chunks/nidF8yIj.js", "_app/immutable/chunks/4J4uoJNn.js", "_app/immutable/chunks/CjmGeLJL.js", "_app/immutable/chunks/CU2p3_pp.js", "_app/immutable/chunks/BLCDGXvv.js", "_app/immutable/chunks/CoAffLjH.js", "_app/immutable/chunks/BS_TTt1R.js"];
    stylesheets3 = ["_app/immutable/assets/2.CmTr-y4B.css"];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/entries/pages/download/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load2
});
function fallbackData() {
  const page2 = /* @__PURE__ */ __name((label) => ({ label, url: DESKTOP_RELEASES_URL, sizeMB: null }), "page");
  return {
    desktop: {
      version: null,
      releasesUrl: DESKTOP_RELEASES_URL,
      mac: [page2("Apple Silicon .dmg"), page2("Intel .dmg")],
      win: [page2("Installer .exe (x64)")],
      linux: [page2(".AppImage (x86_64)"), page2(".deb (Debian/Ubuntu)"), page2(".rpm (Fedora)"), page2(".AppImage (ARM64 \xB7 Pi)")]
    },
    android: {
      version: null,
      releasesUrl: MOBILE_RELEASES_URL,
      apk: { label: "Universal .apk", url: APK_LATEST_URL, sizeMB: null }
    }
  };
}
async function fetchLatest(fetchFn, repo) {
  try {
    const res = await fetchFn(`https://api.github.com/repos/${repo}/releases/latest`, {
      headers: {
        accept: "application/vnd.github+json",
        "user-agent": "pulsar-web (https://pulsardesk.com)"
      }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
function mapDesktop(release) {
  if (!release) return fallbackData().desktop;
  const out = {
    version: release.tag_name,
    releasesUrl: DESKTOP_RELEASES_URL,
    mac: [],
    win: [],
    linux: []
  };
  for (const row of DESKTOP_ROWS) {
    const asset = release.assets.find((a) => row.re.test(a.name));
    if (asset) out[row.key].push({ label: row.label, url: asset.browser_download_url, sizeMB: mb(asset.size) });
  }
  const fb = fallbackData().desktop;
  if (!out.mac.length) out.mac = fb.mac;
  if (!out.win.length) out.win = fb.win;
  if (!out.linux.length) out.linux = fb.linux;
  return out;
}
function mapAndroid(release) {
  const fb = fallbackData().android;
  if (!release) return fb;
  const asset = release.assets.find((a) => /\.apk$/.test(a.name));
  return {
    version: release.tag_name,
    releasesUrl: MOBILE_RELEASES_URL,
    apk: asset ? { label: "Universal .apk", url: asset.browser_download_url, sizeMB: mb(asset.size) } : fb.apk
  };
}
async function getDownloadData(fetchFn) {
  if (cache && Date.now() - cache.at < TTL_MS) return cache.data;
  const [desktopRel, mobileRel] = await Promise.all([
    fetchLatest(fetchFn, DESKTOP_REPO),
    fetchLatest(fetchFn, MOBILE_REPO)
  ]);
  const data = { desktop: mapDesktop(desktopRel), android: mapAndroid(mobileRel) };
  if (desktopRel || mobileRel) cache = { at: Date.now(), data };
  return data;
}
function detectOs(ua) {
  if (/Android/i.test(ua)) return "android";
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/Win/i.test(ua)) return "win";
  if (/Linux|X11/i.test(ua)) return "linux";
  return "mac";
}
var DESKTOP_REPO, MOBILE_REPO, DESKTOP_RELEASES_URL, MOBILE_RELEASES_URL, APK_LATEST_URL, mb, DESKTOP_ROWS, TTL_MS, cache, load2;
var init_page_server_ts = __esm({
  ".svelte-kit/output/server/entries/pages/download/_page.server.ts.js"() {
    init_modules_watch_stub();
    DESKTOP_REPO = "PulsarDesk/pulsar-desktop";
    MOBILE_REPO = "PulsarDesk/pulsar-mobile";
    DESKTOP_RELEASES_URL = `https://github.com/${DESKTOP_REPO}/releases/latest`;
    MOBILE_RELEASES_URL = `https://github.com/${MOBILE_REPO}/releases/latest`;
    APK_LATEST_URL = `https://github.com/${MOBILE_REPO}/releases/latest/download/app-universal-release.apk`;
    mb = /* @__PURE__ */ __name((bytes) => Math.round(bytes / 1024 / 1024), "mb");
    DESKTOP_ROWS = [
      { key: "mac", re: /_aarch64\.dmg$/, label: "Apple Silicon .dmg" },
      { key: "mac", re: /_x64\.dmg$/, label: "Intel .dmg" },
      { key: "win", re: /_x64-setup\.exe$/, label: "Installer .exe (x64)" },
      { key: "linux", re: /_amd64\.AppImage$/, label: ".AppImage (x86_64)" },
      { key: "linux", re: /_amd64\.deb$/, label: ".deb (Debian/Ubuntu)" },
      { key: "linux", re: /\.x86_64\.rpm$/, label: ".rpm (Fedora)" },
      { key: "linux", re: /_aarch64\.AppImage$/, label: ".AppImage (ARM64 \xB7 Pi)" }
    ];
    __name(fallbackData, "fallbackData");
    __name(fetchLatest, "fetchLatest");
    __name(mapDesktop, "mapDesktop");
    __name(mapAndroid, "mapAndroid");
    TTL_MS = 10 * 60 * 1e3;
    cache = null;
    __name(getDownloadData, "getDownloadData");
    __name(detectOs, "detectOs");
    load2 = /* @__PURE__ */ __name(async ({ request, fetch: fetch2 }) => {
      return {
        os: detectOs(request.headers.get("user-agent") ?? ""),
        downloads: await getDownloadData(fetch2)
      };
    }, "load");
  }
});

// .svelte-kit/output/server/entries/pages/download/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => _page2
});
function _page2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    const os = data.os;
    const dl = data.downloads;
    const ICONS = {
      mac: '<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.6c0-2 1.6-3 1.7-3.1-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.5-.4 6.1 1 8.1.7 1 1.4 2.1 2.4 2 1-.04 1.3-.6 2.5-.6s1.5.6 2.6.6c1 0 1.7-1 2.4-2 .5-.7.7-1.4.7-1.5 0 0-1.5-.6-1.5-2.4zM14.5 6.3c.5-.7.9-1.6.8-2.6-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9.1 1.8-.4 2.3-1z"/></svg>',
      win: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4.5l8-1.1v8.1H3zm0 15l8 1.1v-8.1H3zm9 1.2l9 1.3V12.5h-9zm0-17.4v8.7h9V3z"/></svg>',
      linux: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-1.5 0-2.5 1.3-2.5 3 0 1 .2 1.7.2 2.5 0 1-1.5 2.3-2.2 4-.6 1.5-.4 3-.8 3.8-.5 1-1.4 1.5-1.4 2.3 0 .6.5.9 1.2 1 .8.2 1.8.6 2.6 1.3.6.5 1.4.6 2 .6.8 0 1.4-.3 1.9-.7.8-.6 1.7-1 2.4-1.2.7-.2 1.2-.5 1.2-1.1 0-.7-.8-1.2-1.3-2.2-.4-.8-.3-2.3-.8-3.8-.7-1.7-2.2-3-2.2-4 0-.8.2-1.5.2-2.5 0-1.7-1-3-2.5-3z"/></svg>',
      android: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v-3a8 8 0 0116 0v3a2 2 0 01-2 2H6a2 2 0 01-2-2z"/><path d="M7 7l-1.5-2.5M17 7l1.5-2.5"/><circle cx="9" cy="13" r="0.4" fill="currentColor"/><circle cx="15" cy="13" r="0.4" fill="currentColor"/></svg>',
      ios: '<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.6c0-2 1.6-3 1.7-3.1-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.5-.4 6.1 1 8.1.7 1 1.4 2.1 2.4 2 1-.04 1.3-.6 2.5-.6s1.5.6 2.6.6c1 0 1.7-1 2.4-2 .5-.7.7-1.4.7-1.5 0 0-1.5-.6-1.5-2.4zM14.5 6.3c.5-.7.9-1.6.8-2.6-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9.1 1.8-.4 2.3-1z"/></svg>'
    };
    const OS_NAME = {
      mac: "macOS",
      win: "Windows",
      linux: "Linux",
      android: "Android",
      ios: "iOS"
    };
    const SUGGESTION = {
      mac: dl.desktop.mac[0] ?? null,
      win: dl.desktop.win[0] ?? null,
      linux: dl.desktop.linux[0] ?? null,
      android: dl.android.apk,
      ios: null
    };
    const suggested = SUGGESTION[os];
    const detVersion = os === "android" ? dl.android.version : dl.desktop.version;
    function subLine(asset, version) {
      if (!asset) return "";
      const parts = [asset.label];
      if (version) parts.push(version);
      if (asset.sizeMB) parts.push(`${asset.sizeMB} MB`);
      return parts.join(" \xB7 ");
    }
    __name(subLine, "subLine");
    const ver = /* @__PURE__ */ __name((v, req) => `${v ?? "latest"} \xB7 ${req}`, "ver");
    head("fw0qxd", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html2(DL_TITLE[store_get($$store_subs ??= {}, "$lang", lang)])}</title>`);
      });
    });
    $$renderer2.push(`<section class="dl-hero svelte-fw0qxd"><div class="wrap svelte-fw0qxd"><div class="eyebrow svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.eyebrow"))}`);
    if (dl.desktop.version) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`\xA0\xB7 ${escape_html2(dl.desktop.version)}`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <h1 class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.title"))}</h1> <p class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.sub"))}</p> <div class="detected svelte-fw0qxd"><div class="top svelte-fw0qxd"><div class="osico svelte-fw0qxd">${html(ICONS[os])}</div> <div class="meta svelte-fw0qxd"><div class="lab svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.detected"))}</div> <h3 class="svelte-fw0qxd">${escape_html2(OS_NAME[os])}</h3> <div class="sm svelte-fw0qxd">${escape_html2(os === "ios" ? store_get($$store_subs ??= {}, "$t", t)("dl.iosSub") : subLine(suggested, detVersion))}</div></div> `);
    if (suggested) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<a class="btn btn-primary btn-lg svelte-fw0qxd"${attr("href", suggested.url)} style="padding:13px 22px"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 19h16"></path></svg> <span>${escape_html2(DL_BTN[store_get($$store_subs ??= {}, "$lang", lang)](OS_NAME[os]))}</span></a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<button class="btn btn-ghost btn-lg svelte-fw0qxd" style="padding:13px 22px" disabled="">${html(store_get($$store_subs ??= {}, "$t", t)("dl.soon"))}</button>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="alt svelte-fw0qxd"><span class="sp svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.other"))}</span> <a href="#all" class="svelte-fw0qxd">Windows</a><a href="#all" class="svelte-fw0qxd">Linux</a><a href="#all" class="svelte-fw0qxd">Android</a><a href="#all" class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.otherVersions"))}</a></div></div></div></section> <section class="os-section svelte-fw0qxd" id="all"><div class="wrap svelte-fw0qxd"><div class="sec-h svelte-fw0qxd"><h2 class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.allTitle"))}</h2> <p class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.allSub"))}</p></div> <div class="os-grid svelte-fw0qxd"><div class="os-card svelte-fw0qxd"><div class="ic svelte-fw0qxd">${html(ICONS.mac)}</div> <h3 class="svelte-fw0qxd">macOS</h3> <div class="ver svelte-fw0qxd">${escape_html2(ver(dl.desktop.version, "macOS 12+"))}</div> <ul class="files svelte-fw0qxd"><!--[-->`);
    const each_array = ensure_array_like(dl.desktop.mac);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let f = each_array[$$index];
      $$renderer2.push(`<li><a${attr("href", f.url)} class="svelte-fw0qxd"><span class="fmt svelte-fw0qxd">${escape_html2(f.label)}</span><span class="sz svelte-fw0qxd">${escape_html2(f.sizeMB ? `${f.sizeMB} MB` : "\u2192")}</span></a></li>`);
    }
    $$renderer2.push(`<!--]--></ul> <div class="pm svelte-fw0qxd"><a${attr("href", dl.desktop.releasesUrl)} class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.allFiles"))}</a></div></div> <div class="os-card svelte-fw0qxd"><div class="ic svelte-fw0qxd">${html(ICONS.win)}</div> <h3 class="svelte-fw0qxd">Windows</h3> <div class="ver svelte-fw0qxd">${escape_html2(ver(dl.desktop.version, "Windows 10/11"))}</div> <ul class="files svelte-fw0qxd"><!--[-->`);
    const each_array_1 = ensure_array_like(dl.desktop.win);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let f = each_array_1[$$index_1];
      $$renderer2.push(`<li><a${attr("href", f.url)} class="svelte-fw0qxd"><span class="fmt svelte-fw0qxd">${escape_html2(f.label)}</span><span class="sz svelte-fw0qxd">${escape_html2(f.sizeMB ? `${f.sizeMB} MB` : "\u2192")}</span></a></li>`);
    }
    $$renderer2.push(`<!--]--></ul> <div class="pm svelte-fw0qxd"><a${attr("href", dl.desktop.releasesUrl)} class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.allFiles"))}</a></div></div> <div class="os-card svelte-fw0qxd"><div class="ic svelte-fw0qxd">${html(ICONS.linux)}</div> <h3 class="svelte-fw0qxd">Linux</h3> <div class="ver svelte-fw0qxd">${escape_html2(ver(dl.desktop.version, "glibc 2.31+"))}</div> <ul class="files svelte-fw0qxd"><!--[-->`);
    const each_array_2 = ensure_array_like(dl.desktop.linux);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let f = each_array_2[$$index_2];
      $$renderer2.push(`<li><a${attr("href", f.url)} class="svelte-fw0qxd"><span class="fmt svelte-fw0qxd">${escape_html2(f.label)}</span><span class="sz svelte-fw0qxd">${escape_html2(f.sizeMB ? `${f.sizeMB} MB` : "\u2192")}</span></a></li>`);
    }
    $$renderer2.push(`<!--]--></ul> <div class="pm svelte-fw0qxd"><a${attr("href", dl.desktop.releasesUrl)} class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.allFiles"))}</a></div></div> <div class="os-card svelte-fw0qxd"><div class="ic svelte-fw0qxd">${html(ICONS.android)}</div> <h3 class="svelte-fw0qxd">Android</h3> <div class="ver svelte-fw0qxd">${escape_html2(ver(dl.android.version, "Android 7+"))}</div> <ul class="files svelte-fw0qxd"><li><a${attr("href", dl.android.apk.url)} class="svelte-fw0qxd"><span class="fmt svelte-fw0qxd">${escape_html2(dl.android.apk.label)}</span><span class="sz svelte-fw0qxd">${escape_html2(dl.android.apk.sizeMB ? `${dl.android.apk.sizeMB} MB` : "\u2192")}</span></a></li></ul> <div class="pm svelte-fw0qxd"><a${attr("href", dl.android.releasesUrl)} class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.allFiles"))}</a></div></div> <div class="os-card soon svelte-fw0qxd"><span class="soon-badge svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.soon"))}</span> <div class="ic svelte-fw0qxd">${html(ICONS.ios)}</div> <h3 class="svelte-fw0qxd">iOS</h3> <div class="ver svelte-fw0qxd">\u2014</div> <p class="soon-sub svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.iosSub"))}</p></div></div></div></section> <section class="wrap svelte-fw0qxd"><div class="info-grid svelte-fw0qxd"><div class="info-card svelte-fw0qxd"><h3 class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.reqTitle"))}</h3> <ul class="req svelte-fw0qxd"><li class="svelte-fw0qxd"><span class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.req.cpu"))}</span><span class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.req.cpuV"))}</span></li> <li class="svelte-fw0qxd"><span class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.req.ram"))}</span><span class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.req.ramV"))}</span></li> <li class="svelte-fw0qxd"><span class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.req.net"))}</span><span class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.req.netV"))}</span></li> <li class="svelte-fw0qxd"><span class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.req.gpu"))}</span><span class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.req.gpuV"))}</span></li> <li class="svelte-fw0qxd"><span class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.req.conn"))}</span><span class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.req.connV"))}</span></li></ul></div> <div class="info-card svelte-fw0qxd"><h3 class="svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.buildTitle"))}</h3> <div class="src-term svelte-fw0qxd"><div><span class="c svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.build.clone"))}</span></div> <div><span class="g svelte-fw0qxd">$</span> git clone <span class="a svelte-fw0qxd">github.com/PulsarDesk/pulsar-desktop</span></div> <div><span class="g svelte-fw0qxd">$</span> cd pulsar-desktop</div> <div><span class="g svelte-fw0qxd">$</span> cargo build <span class="a svelte-fw0qxd">--release</span></div> <div><span class="c svelte-fw0qxd">${html(store_get($$store_subs ??= {}, "$t", t)("dl.build.license"))}</span></div></div> <div class="checksum svelte-fw0qxd"><a${attr("href", dl.desktop.releasesUrl)} class="svelte-fw0qxd">SHA-256 / .sig</a> \xB7 <span>${html(store_get($$store_subs ??= {}, "$t", t)("dl.build.gpg"))}</span></div></div></div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/download/_page.svelte.js"() {
    init_modules_watch_stub();
    init_chunks();
    init_index3();
    __name(_page2, "_page");
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  fonts: () => fonts4,
  imports: () => imports4,
  index: () => index4,
  server: () => page_server_ts_exports,
  server_id: () => server_id2,
  stylesheets: () => stylesheets4
});
var index4, component_cache4, component4, server_id2, imports4, stylesheets4, fonts4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    init_modules_watch_stub();
    init_page_server_ts();
    index4 = 3;
    component4 = /* @__PURE__ */ __name(async () => component_cache4 ??= (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default, "component");
    server_id2 = "src/routes/download/+page.server.ts";
    imports4 = ["_app/immutable/nodes/3.e4s8uHoK.js", "_app/immutable/chunks/DCdaCEBk.js", "_app/immutable/chunks/nidF8yIj.js", "_app/immutable/chunks/4J4uoJNn.js", "_app/immutable/chunks/CoAffLjH.js", "_app/immutable/chunks/CjmGeLJL.js"];
    stylesheets4 = ["_app/immutable/assets/3.CQdrvkyD.css"];
    fonts4 = [];
  }
});

// .wrangler/tmp/bundle-xOV5pf/middleware-loader.entry.ts
init_modules_watch_stub();

// .wrangler/tmp/bundle-xOV5pf/middleware-insertion-facade.js
init_modules_watch_stub();

// .svelte-kit/cloudflare/_worker.js
init_modules_watch_stub();

// .svelte-kit/output/server/index.js
init_modules_watch_stub();

// .svelte-kit/output/server/chunks/utils.js
init_modules_watch_stub();
init_devalue();
init_utils2();

// node_modules/@sveltejs/kit/src/exports/index.js
init_modules_watch_stub();
init_internal();

// node_modules/esm-env/index.js
init_modules_watch_stub();

// node_modules/esm-env/true.js
init_modules_watch_stub();
var true_default = true;

// node_modules/esm-env/dev-fallback.js
init_modules_watch_stub();
var node_env = "development";
var dev_fallback_default = node_env && !node_env.toLowerCase().startsWith("prod");

// node_modules/esm-env/false.js
init_modules_watch_stub();

// node_modules/@sveltejs/kit/src/runtime/pathname.js
init_modules_watch_stub();

// node_modules/@sveltejs/kit/src/runtime/utils.js
init_modules_watch_stub();
var text_encoder2 = new TextEncoder();

// node_modules/@sveltejs/kit/src/version.js
init_modules_watch_stub();

// node_modules/@sveltejs/kit/src/exports/index.js
function error(status, body) {
  if ((!true_default || dev_fallback_default) && (isNaN(status) || status < 400 || status > 599)) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  throw new HttpError(status, body);
}
__name(error, "error");
function isRedirect(e3) {
  return e3 instanceof Redirect;
}
__name(isRedirect, "isRedirect");
function json(data, init2) {
  const body = JSON.stringify(data);
  const headers2 = new Headers(init2?.headers);
  if (!headers2.has("content-length")) {
    headers2.set("content-length", text_encoder2.encode(body).byteLength.toString());
  }
  if (!headers2.has("content-type")) {
    headers2.set("content-type", "application/json");
  }
  return new Response(body, {
    ...init2,
    headers: headers2
  });
}
__name(json, "json");
function text(body, init2) {
  const headers2 = new Headers(init2?.headers);
  if (!headers2.has("content-length")) {
    const encoded = text_encoder2.encode(body);
    headers2.set("content-length", encoded.byteLength.toString());
    return new Response(encoded, {
      ...init2,
      headers: headers2
    });
  }
  return new Response(body, {
    ...init2,
    headers: headers2
  });
}
__name(text, "text");

// .svelte-kit/output/server/chunks/utils.js
init_internal();
init_server();

// node_modules/set-cookie-parser/lib/set-cookie.js
init_modules_watch_stub();
var defaultParseOptions = {
  decodeValues: true,
  map: false,
  silent: false,
  split: "auto"
  // auto = split strings but not arrays
};
function isForbiddenKey(key2) {
  return typeof key2 !== "string" || key2 in {};
}
__name(isForbiddenKey, "isForbiddenKey");
function createNullObj() {
  return /* @__PURE__ */ Object.create(null);
}
__name(createNullObj, "createNullObj");
function isNonEmptyString(str) {
  return typeof str === "string" && !!str.trim();
}
__name(isNonEmptyString, "isNonEmptyString");
function parseString(setCookieValue, options2) {
  var parts = setCookieValue.split(";").filter(isNonEmptyString);
  var nameValuePairStr = parts.shift();
  if (!nameValuePairStr) {
    return null;
  }
  var parsed = parseNameValuePair(nameValuePairStr);
  var name = parsed.name;
  var value = parsed.value;
  options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
  if (isForbiddenKey(name)) {
    return null;
  }
  try {
    value = options2.decodeValues ? decodeURIComponent(value) : value;
  } catch (e3) {
    console.error(
      "set-cookie-parser: failed to decode cookie value. Set options.decodeValues=false to disable decoding.",
      e3
    );
  }
  var cookie = createNullObj();
  cookie.name = name;
  cookie.value = value;
  parts.forEach(function(part) {
    var sides = part.split("=");
    var key2 = sides.shift().trim().toLowerCase();
    if (isForbiddenKey(key2)) {
      return;
    }
    var value2 = sides.join("=").trim();
    if (key2 === "expires") {
      cookie.expires = new Date(value2);
    } else if (key2 === "max-age") {
      var n2 = parseInt(value2, 10);
      if (!Number.isNaN(n2)) cookie.maxAge = n2;
    } else if (key2 === "secure") {
      cookie.secure = true;
    } else if (key2 === "httponly") {
      cookie.httpOnly = true;
    } else if (key2 === "samesite") {
      cookie.sameSite = value2;
    } else if (key2 === "partitioned") {
      cookie.partitioned = true;
    } else if (key2) {
      cookie[key2] = value2;
    }
  });
  return cookie;
}
__name(parseString, "parseString");
function parseNameValuePair(nameValuePairStr) {
  var name = "";
  var value = "";
  var nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("=");
  } else {
    value = nameValuePairStr;
  }
  return { name, value };
}
__name(parseNameValuePair, "parseNameValuePair");
function parseSetCookie(input, options2) {
  options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
  if (!input) {
    if (!options2.map) {
      return [];
    } else {
      return createNullObj();
    }
  }
  if (input.headers) {
    if (typeof input.headers.getSetCookie === "function") {
      input = input.headers.getSetCookie();
    } else if (input.headers["set-cookie"]) {
      input = input.headers["set-cookie"];
    } else {
      var sch = input.headers[Object.keys(input.headers).find(function(key2) {
        return key2.toLowerCase() === "set-cookie";
      })];
      if (!sch && input.headers.cookie && !options2.silent) {
        console.warn(
          "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
        );
      }
      input = sch;
    }
  }
  var split = options2.split;
  var isArray = Array.isArray(input);
  if (split === "auto") {
    split = !isArray;
  }
  if (!isArray) {
    input = [input];
  }
  input = input.filter(isNonEmptyString);
  if (split) {
    input = input.map(splitCookiesString).flat();
  }
  if (!options2.map) {
    return input.map(function(str) {
      return parseString(str, options2);
    }).filter(Boolean);
  } else {
    var cookies = createNullObj();
    return input.reduce(function(cookies2, str) {
      var cookie = parseString(str, options2);
      if (cookie && !isForbiddenKey(cookie.name)) {
        cookies2[cookie.name] = cookie;
      }
      return cookies2;
    }, cookies);
  }
}
__name(parseSetCookie, "parseSetCookie");
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString;
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;
  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }
  __name(skipWhitespace, "skipWhitespace");
  function notSpecialChar() {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  }
  __name(notSpecialChar, "notSpecialChar");
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}
__name(splitCookiesString, "splitCookiesString");
parseSetCookie.parseSetCookie = parseSetCookie;
parseSetCookie.parse = parseSetCookie;
parseSetCookie.parseString = parseString;
parseSetCookie.splitCookiesString = splitCookiesString;

// .svelte-kit/output/server/chunks/utils.js
var SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
var ENDPOINT_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"];
var PAGE_METHODS = ["GET", "POST", "HEAD"];
function noop() {
}
__name(noop, "noop");
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done) return result;
    done = true;
    return result = fn();
  };
}
__name(once, "once");
var decoder = new TextDecoder();
function set_nested_value(object, path_string, value) {
  if (path_string.startsWith("n:")) {
    path_string = path_string.slice(2);
    value = value === "" ? void 0 : parseFloat(value);
  } else if (path_string.startsWith("b:")) {
    path_string = path_string.slice(2);
    value = value === "on";
  }
  deep_set(object, split_path(path_string), value);
}
__name(set_nested_value, "set_nested_value");
var DELETE_KEY = {};
function convert_formdata(data) {
  const result = {};
  for (let key2 of data.keys()) {
    const is_array2 = key2.endsWith("[]");
    let values = data.getAll(key2);
    if (is_array2) key2 = key2.slice(0, -2);
    values = values.filter(
      (entry) => typeof entry === "string" || entry.name !== "" || entry.size > 0
    );
    if (values.length === 0 && !is_array2) continue;
    if (key2.startsWith("n:")) {
      key2 = key2.slice(2);
      values = values.map((v) => v === "" ? void 0 : parseFloat(
        /** @type {string} */
        v
      ));
    } else if (key2.startsWith("b:")) {
      key2 = key2.slice(2);
      values = values.map((v) => v === "on");
    }
    if (values.length > 1 && !is_array2) {
      throw new Error(`Form cannot contain duplicated keys \u2014 "${key2}" has ${values.length} values`);
    }
    set_nested_value(result, key2, is_array2 ? values : values[0]);
  }
  return result;
}
__name(convert_formdata, "convert_formdata");
var BINARY_FORM_CONTENT_TYPE = "application/x-sveltekit-formdata";
var BINARY_FORM_VERSION = 0;
var HEADER_BYTES = 1 + 4 + 2;
async function deserialize_binary_form(request) {
  if (request.headers.get("content-type") !== BINARY_FORM_CONTENT_TYPE) {
    const form_data = await request.formData();
    return { data: convert_formdata(form_data), meta: {}, form_data };
  }
  if (!request.body) {
    throw deserialize_error("no body");
  }
  const reader = request.body.getReader();
  const chunks = [];
  function get_chunk(index5) {
    if (index5 in chunks) return chunks[index5];
    let i = chunks.length;
    while (i <= index5) {
      chunks[i] = reader.read().then((chunk) => chunk.value);
      i++;
    }
    return chunks[index5];
  }
  __name(get_chunk, "get_chunk");
  async function get_buffer(offset, length) {
    let start_chunk;
    let chunk_start = 0;
    let chunk_index;
    for (chunk_index = 0; ; chunk_index++) {
      const chunk = await get_chunk(chunk_index);
      if (!chunk) return null;
      const chunk_end = chunk_start + chunk.byteLength;
      if (offset >= chunk_start && offset < chunk_end) {
        start_chunk = chunk;
        break;
      }
      chunk_start = chunk_end;
    }
    if (offset + length <= chunk_start + start_chunk.byteLength) {
      return start_chunk.subarray(offset - chunk_start, offset + length - chunk_start);
    }
    const chunks2 = [start_chunk.subarray(offset - chunk_start)];
    let cursor = start_chunk.byteLength - offset + chunk_start;
    while (cursor < length) {
      chunk_index++;
      let chunk = await get_chunk(chunk_index);
      if (!chunk) return null;
      if (chunk.byteLength > length - cursor) {
        chunk = chunk.subarray(0, length - cursor);
      }
      chunks2.push(chunk);
      cursor += chunk.byteLength;
    }
    const buffer2 = new Uint8Array(length);
    cursor = 0;
    for (const chunk of chunks2) {
      buffer2.set(chunk, cursor);
      cursor += chunk.byteLength;
    }
    return buffer2;
  }
  __name(get_buffer, "get_buffer");
  const header = await get_buffer(0, HEADER_BYTES);
  if (!header) throw deserialize_error("too short");
  if (header[0] !== BINARY_FORM_VERSION) {
    throw deserialize_error(`got version ${header[0]}, expected version ${BINARY_FORM_VERSION}`);
  }
  const header_view = new DataView(header.buffer, header.byteOffset, header.byteLength);
  const data_length = header_view.getUint32(1, true);
  const file_offsets_length = header_view.getUint16(5, true);
  const data_buffer = await get_buffer(HEADER_BYTES, data_length);
  if (!data_buffer) throw deserialize_error("data too short");
  let file_offsets;
  let files_start_offset;
  if (file_offsets_length > 0) {
    const file_offsets_buffer = await get_buffer(HEADER_BYTES + data_length, file_offsets_length);
    if (!file_offsets_buffer) throw deserialize_error("file offset table too short");
    const parsed_offsets = JSON.parse(decoder.decode(file_offsets_buffer));
    if (!Array.isArray(parsed_offsets) || parsed_offsets.some((n2) => typeof n2 !== "number" || !Number.isInteger(n2) || n2 < 0)) {
      throw deserialize_error("invalid file offset table");
    }
    file_offsets = /** @type {Array<number>} */
    parsed_offsets;
    files_start_offset = HEADER_BYTES + data_length + file_offsets_length;
  }
  const file_spans = [];
  const [data, meta] = parse(decoder.decode(data_buffer), {
    File: /* @__PURE__ */ __name(([name, type, size, last_modified, index5]) => {
      if (typeof name !== "string" || typeof type !== "string" || typeof size !== "number" || typeof last_modified !== "number" || typeof index5 !== "number") {
        throw deserialize_error("invalid file metadata");
      }
      let offset = file_offsets[index5];
      if (offset === void 0) {
        throw deserialize_error("duplicate file offset table index");
      }
      file_offsets[index5] = void 0;
      offset += files_start_offset;
      file_spans.push({ offset, size });
      return new Proxy(new LazyFile(name, type, size, last_modified, get_chunk, offset), {
        getPrototypeOf() {
          return File.prototype;
        }
      });
    }, "File")
  });
  file_spans.sort((a, b) => a.offset - b.offset || a.size - b.size);
  for (let i = 1; i < file_spans.length; i++) {
    const previous = file_spans[i - 1];
    const current2 = file_spans[i];
    const previous_end = previous.offset + previous.size;
    if (previous_end < current2.offset) {
      throw deserialize_error("gaps in file data");
    }
    if (previous_end > current2.offset) {
      throw deserialize_error("overlapping file data");
    }
  }
  void (async () => {
    let has_more = true;
    while (has_more) {
      const chunk = await get_chunk(chunks.length);
      has_more = !!chunk;
    }
  })().catch(noop);
  return { data, meta, form_data: null };
}
__name(deserialize_binary_form, "deserialize_binary_form");
function deserialize_error(message) {
  return new SvelteKitError(400, "Bad Request", `Could not deserialize binary form: ${message}`);
}
__name(deserialize_error, "deserialize_error");
var LazyFile = class _LazyFile {
  static {
    __name(this, "LazyFile");
  }
  /** @type {(index: number) => Promise<Uint8Array<ArrayBuffer> | undefined>} */
  #get_chunk;
  /** @type {number} */
  #offset;
  /**
   * @param {string} name
   * @param {string} type
   * @param {number} size
   * @param {number} last_modified
   * @param {(index: number) => Promise<Uint8Array<ArrayBuffer> | undefined>} get_chunk
   * @param {number} offset
   */
  constructor(name, type, size, last_modified, get_chunk, offset) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.lastModified = last_modified;
    this.webkitRelativePath = "";
    this.#get_chunk = get_chunk;
    this.#offset = offset;
    this.arrayBuffer = this.arrayBuffer.bind(this);
    this.bytes = this.bytes.bind(this);
    this.slice = this.slice.bind(this);
    this.stream = this.stream.bind(this);
    this.text = this.text.bind(this);
  }
  /** @type {ArrayBuffer | undefined} */
  #buffer;
  async arrayBuffer() {
    this.#buffer ??= await new Response(this.stream()).arrayBuffer();
    return this.#buffer;
  }
  async bytes() {
    return new Uint8Array(await this.arrayBuffer());
  }
  /**
   * @param {number=} start
   * @param {number=} end
   * @param {string=} contentType
   */
  slice(start = 0, end = this.size, contentType = this.type) {
    if (start < 0) {
      start = Math.max(this.size + start, 0);
    } else {
      start = Math.min(start, this.size);
    }
    if (end < 0) {
      end = Math.max(this.size + end, 0);
    } else {
      end = Math.min(end, this.size);
    }
    const size = Math.max(end - start, 0);
    const file = new _LazyFile(
      this.name,
      contentType,
      size,
      this.lastModified,
      this.#get_chunk,
      this.#offset + start
    );
    return file;
  }
  stream() {
    let cursor = 0;
    let chunk_index = 0;
    return new ReadableStream({
      start: /* @__PURE__ */ __name(async (controller2) => {
        let chunk_start = 0;
        let start_chunk;
        for (chunk_index = 0; ; chunk_index++) {
          const chunk = await this.#get_chunk(chunk_index);
          if (!chunk) return null;
          const chunk_end = chunk_start + chunk.byteLength;
          if (this.#offset >= chunk_start && this.#offset < chunk_end) {
            start_chunk = chunk;
            break;
          }
          chunk_start = chunk_end;
        }
        if (this.#offset + this.size <= chunk_start + start_chunk.byteLength) {
          controller2.enqueue(
            start_chunk.subarray(this.#offset - chunk_start, this.#offset + this.size - chunk_start)
          );
          controller2.close();
        } else {
          controller2.enqueue(start_chunk.subarray(this.#offset - chunk_start));
          cursor = start_chunk.byteLength - this.#offset + chunk_start;
        }
      }, "start"),
      pull: /* @__PURE__ */ __name(async (controller2) => {
        chunk_index++;
        let chunk = await this.#get_chunk(chunk_index);
        if (!chunk) {
          controller2.error("incomplete file data");
          controller2.close();
          return;
        }
        if (chunk.byteLength > this.size - cursor) {
          chunk = chunk.subarray(0, this.size - cursor);
        }
        controller2.enqueue(chunk);
        cursor += chunk.byteLength;
        if (cursor >= this.size) {
          controller2.close();
        }
      }, "pull")
    });
  }
  async text() {
    return decoder.decode(await this.arrayBuffer());
  }
};
var path_regex = /^[a-zA-Z_$]\w*(\.[a-zA-Z_$]\w*|\[\d+\])*$/;
function split_path(path) {
  if (!path_regex.test(path)) {
    throw new Error(`Invalid path ${path}`);
  }
  return path.split(/\.|\[|\]/).filter(Boolean);
}
__name(split_path, "split_path");
function check_prototype_pollution(key2) {
  if (key2 === "__proto__" || key2 === "constructor" || key2 === "prototype") {
    throw new Error(
      `Invalid key "${key2}"`
    );
  }
}
__name(check_prototype_pollution, "check_prototype_pollution");
function deep_set(object, keys, value) {
  let current2 = object;
  for (let i = 0; i < keys.length - 1; i += 1) {
    const key2 = keys[i];
    check_prototype_pollution(key2);
    const is_array2 = /^\d+$/.test(keys[i + 1]);
    const inner = Object.hasOwn(current2, key2) ? current2[key2] : void 0;
    const exists = inner != null;
    if (exists && is_array2 !== Array.isArray(inner)) {
      throw new Error(`Invalid array key ${keys[i + 1]}`);
    }
    if (!exists) {
      if (value === DELETE_KEY) {
        return;
      }
      current2[key2] = is_array2 ? [] : {};
    }
    current2 = current2[key2];
  }
  const final_key = keys[keys.length - 1];
  check_prototype_pollution(final_key);
  if (value === DELETE_KEY) {
    delete current2[final_key];
  } else {
    current2[final_key] = value;
  }
}
__name(deep_set, "deep_set");
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
var TRAILING_SLASH_PARAM = "x-sveltekit-trailing-slash";
function stringify2(data, transport) {
  const encoders = Object.fromEntries(Object.entries(transport).map(([k, v]) => [k, v.encode]));
  return stringify(data, encoders);
}
__name(stringify2, "stringify");
var remote_object = "__skrao";
var remote_map = "__skram";
var remote_set = "__skras";
var remote_file = "__skraf";
var remote_arg_marker = Symbol(remote_object);
function create_remote_arg_revivers(transport) {
  const remote_fns_revivers = {
    /** @type {(value: unknown) => unknown} */
    [remote_object]: (value) => value,
    /** @type {(value: unknown) => Map<unknown, unknown>} */
    [remote_map]: (value) => {
      if (!Array.isArray(value)) {
        throw new Error("Invalid data for Map reviver");
      }
      const map = /* @__PURE__ */ new Map();
      for (const item of value) {
        if (!Array.isArray(item) || item.length !== 2 || typeof item[0] !== "string" || typeof item[1] !== "string") {
          throw new Error("Invalid data for Map reviver");
        }
        const [key2, val] = item;
        map.set(parse3(key2), parse3(val));
      }
      return map;
    },
    /** @type {(value: unknown) => Set<unknown>} */
    [remote_set]: (value) => {
      if (!Array.isArray(value)) {
        throw new Error("Invalid data for Set reviver");
      }
      const set2 = /* @__PURE__ */ new Set();
      for (const item of value) {
        if (typeof item !== "string") {
          throw new Error("Invalid data for Set reviver");
        }
        set2.add(parse3(item));
      }
      return set2;
    },
    /** @type {(value: any) => File} */
    [remote_file]: (value) => {
      if (!value || typeof value !== "object" || typeof value.name !== "string" || typeof value.type !== "string" || typeof value.size !== "number" || typeof value.lastModified !== "number" || !(value.data instanceof ArrayBuffer)) {
        throw new Error("Invalid data for File reviver");
      }
      const { data, name, ...meta } = value;
      return new File([data], name, meta);
    }
  };
  const user_revivers = Object.fromEntries(
    Object.entries(transport).map(([k, v]) => [k, v.decode])
  );
  const all_revivers = { ...user_revivers, ...remote_fns_revivers };
  const parse3 = /* @__PURE__ */ __name((data) => parse(data, all_revivers), "parse");
  return all_revivers;
}
__name(create_remote_arg_revivers, "create_remote_arg_revivers");
function parse_remote_arg(string, transport) {
  if (!string) return void 0;
  const json_string = new TextDecoder().decode(
    // no need to add back `=` characters, atob can handle it
    base64_decode(string.replaceAll("-", "+").replaceAll("_", "/"))
  );
  return parse(json_string, create_remote_arg_revivers(transport));
}
__name(parse_remote_arg, "parse_remote_arg");
function create_remote_key(id, payload2) {
  return id + "/" + payload2;
}
__name(create_remote_key, "create_remote_key");
function split_remote_key(key2) {
  const i = key2.lastIndexOf("/");
  if (i === -1) {
    throw new Error(`Invalid remote key: ${key2}`);
  }
  return {
    id: key2.slice(0, i),
    payload: key2.slice(i + 1)
  };
}
__name(split_remote_key, "split_remote_key");
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
__name(coalesce_to_error, "coalesce_to_error");
function normalize_error(error3) {
  return (
    /** @type {import('../exports/internal/index.js').Redirect | HttpError | SvelteKitError | Error} */
    error3
  );
}
__name(normalize_error, "normalize_error");
function get_status(error3) {
  return error3 instanceof HttpError || error3 instanceof SvelteKitError ? error3.status : 500;
}
__name(get_status, "get_status");
function get_message(error3) {
  return error3 instanceof SvelteKitError ? error3.text : "Internal Error";
}
__name(get_message, "get_message");
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/ \t]+)\/([^; \t]+)[ \t]*(?:;[ \t]*q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
__name(negotiate, "negotiate");
function get_set_cookies(headers2) {
  if (typeof headers2.getSetCookie === "function") {
    return headers2.getSetCookie();
  }
  const set_cookie = headers2.get("set-cookie");
  return set_cookie ? splitCookiesString(set_cookie) : [];
}
__name(get_set_cookies, "get_set_cookies");
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type.toLowerCase());
}
__name(is_content_type, "is_content_type");
function is_form_content_type(request) {
  return is_content_type(
    request,
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
    BINARY_FORM_CONTENT_TYPE
  );
}
__name(is_form_content_type, "is_form_content_type");
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
  // Svelte also escapes < because the escape function could be called inside a `noscript` there
  // https://github.com/sveltejs/svelte/security/advisories/GHSA-8266-84wp-wv5c
  // However, that doesn't apply in SvelteKit
};
var escape_html_dict = {
  "&": "&amp;",
  "<": "&lt;"
};
var surrogates = (
  // high surrogate without paired low surrogate
  "[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]"
);
var escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|` + surrogates,
  "g"
);
var escape_html_regex = new RegExp(
  `[${Object.keys(escape_html_dict).join("")}]|` + surrogates,
  "g"
);
function escape_html(str, is_attr) {
  const dict = is_attr ? escape_html_attr_dict : escape_html_dict;
  const escaped_str = str.replace(is_attr ? escape_html_attr_regex : escape_html_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return escaped_str;
}
__name(escape_html, "escape_html");
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
__name(method_not_allowed, "method_not_allowed");
function allowed_methods(mod) {
  const allowed = ENDPOINT_METHODS.filter((method) => method in mod);
  if ("GET" in mod && !("HEAD" in mod)) {
    allowed.push("HEAD");
  }
  return allowed;
}
__name(allowed_methods, "allowed_methods");
function get_global_name(options2) {
  return `__sveltekit_${options2.version_hash}`;
}
__name(get_global_name, "get_global_name");
function static_error_page(options2, status, message) {
  let page2 = options2.templates.error({ status, message: escape_html(message) });
  return text(page2, {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
__name(static_error_page, "static_error_page");
async function handle_fatal_error(event, state2, options2, error3) {
  error3 = error3 instanceof HttpError ? error3 : coalesce_to_error(error3);
  const status = get_status(error3);
  const body = await handle_error_and_jsonify(event, state2, options2, error3);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body, {
      status
    });
  }
  return static_error_page(options2, status, body.message);
}
__name(handle_fatal_error, "handle_fatal_error");
async function handle_error_and_jsonify(event, state2, options2, error3) {
  if (error3 instanceof HttpError) {
    return { message: "Unknown Error", ...error3.body };
  }
  const status = get_status(error3);
  const message = get_message(error3);
  return await with_request_store(
    { event, state: state2 },
    () => options2.hooks.handleError({ error: error3, event, status, message })
  ) ?? { message };
}
__name(handle_error_and_jsonify, "handle_error_and_jsonify");
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
__name(redirect_response, "redirect_response");
function clarify_devalue_error(event, error3) {
  if (error3.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error3.message} (${error3.path}). If you need to serialize/deserialize custom types, use transport hooks: https://svelte.dev/docs/kit/hooks#Universal-hooks-transport.`;
  }
  if (error3.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error3.message;
}
__name(clarify_devalue_error, "clarify_devalue_error");
function serialize_uses(node) {
  const uses = {};
  if (node.uses && node.uses.dependencies.size > 0) {
    uses.dependencies = Array.from(node.uses.dependencies);
  }
  if (node.uses && node.uses.search_params.size > 0) {
    uses.search_params = Array.from(node.uses.search_params);
  }
  if (node.uses && node.uses.params.size > 0) {
    uses.params = Array.from(node.uses.params);
  }
  if (node.uses?.parent) uses.parent = 1;
  if (node.uses?.route) uses.route = 1;
  if (node.uses?.url) uses.url = 1;
  return uses;
}
__name(serialize_uses, "serialize_uses");
function has_prerendered_path(manifest2, pathname) {
  return manifest2._.prerendered_routes.has(pathname) || pathname.at(-1) === "/" && manifest2._.prerendered_routes.has(pathname.slice(0, -1));
}
__name(has_prerendered_path, "has_prerendered_path");
function format_server_error(status, error3, event) {
  const formatted_text = `
\x1B[1;31m[${status}] ${event.request.method} ${event.url.pathname}\x1B[0m`;
  if (status === 404) {
    return formatted_text;
  }
  return `${formatted_text}
${error3.stack}`;
}
__name(format_server_error, "format_server_error");
function get_node_type(node_id) {
  const parts = node_id?.split("/");
  const filename = parts?.at(-1);
  if (!filename) return "unknown";
  const dot_parts = filename.split(".");
  return dot_parts.slice(0, -1).join(".");
}
__name(get_node_type, "get_node_type");
function create_replacer(transport) {
  const replacer = /* @__PURE__ */ __name((thing) => {
    for (const key2 in transport) {
      const encoded = transport[key2].encode(thing);
      if (encoded) {
        return `app.decode('${key2}', ${uneval(encoded, replacer)})`;
      }
    }
  }, "replacer");
  return replacer;
}
__name(create_replacer, "create_replacer");

// .svelte-kit/output/server/index.js
init_false();
init_internal();
init_server();

// .svelte-kit/output/server/chunks/server.js
init_modules_watch_stub();
var base = "";
var assets = base;
var app_dir = "_app";
var relative = true;
var initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
__name(override, "override");
function reset() {
  base = initial.base;
  assets = initial.assets;
}
__name(reset, "reset");

// .svelte-kit/output/server/index.js
init_devalue();
init_exports();
init_utils2();
init_index2();

// .svelte-kit/output/server/chunks/internal.js
init_modules_watch_stub();
init_root();
var read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
__name(set_read_implementation, "set_read_implementation");
var public_env = {};
function set_private_env(environment) {
}
__name(set_private_env, "set_private_env");
function set_public_env(environment) {
  public_env = environment;
}
__name(set_public_env, "set_public_env");
var error2 = /* @__PURE__ */ __name(({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n", "error");
var options = {
  app_template_contains_nonce: false,
  async: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  csrf_trusted_origins: [],
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hash_routing: false,
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root,
  service_worker: false,
  service_worker_options: void 0,
  server_error_boundaries: false,
  templates: {
    app: /* @__PURE__ */ __name(({ head: head2, body, assets: assets2, nonce, env: env2 }) => '<!doctype html>\n<html lang="%lang%">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + `/favicon.svg" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<script>
			try {
				var t = localStorage.getItem('pulsar-theme');
				if (t === 'dark' || (t !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches))
					document.documentElement.dataset.theme = 'dark';
			} catch (e) {}
		<\/script>
		` + head2 + '\n	</head>\n	<body data-sveltekit-preload-data="hover">\n		<div style="display: contents">' + body + "</div>\n	</body>\n</html>\n", "app"),
    error: error2
  },
  version_hash: "1q76qfw"
};
async function get_hooks() {
  let handle2;
  let handleFetch;
  let handleError;
  let handleValidationError;
  let init2;
  ({ handle: handle2, handleFetch, handleError, handleValidationError, init: init2 } = await Promise.resolve().then(() => (init_hooks_server(), hooks_server_exports)));
  let reroute;
  let transport;
  return {
    handle: handle2,
    handleFetch,
    handleError,
    handleValidationError,
    init: init2,
    reroute,
    transport
  };
}
__name(get_hooks, "get_hooks");

// .svelte-kit/output/server/index.js
var import_cookie = __toESM(require_cookie(), 1);
var s = JSON.stringify;
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  const values_needing_match = values.filter((value) => value !== void 0);
  let buffered = 0;
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    let value = values[i - buffered];
    if (param.chained && param.rest && buffered) {
      value = values.slice(i - buffered, i + 1).filter((s22) => s22).join("/");
      buffered = 0;
    }
    if (value === void 0) {
      if (param.rest) {
        value = "";
      } else {
        continue;
      }
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i + 1];
      const next_value = values[i + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value && param.chained) {
        buffered = 0;
      }
      if (!next_param && !next_value && Object.keys(result).length === values_needing_match.length) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered) return;
  return result;
}
__name(exec, "exec");
function find_route(path, routes, matchers) {
  for (const route of routes) {
    const match = route.pattern.exec(path);
    if (!match) continue;
    const matched = exec(match, route.params, matchers);
    if (matched) {
      return {
        route,
        params: decode_params(matched)
      };
    }
  }
  return null;
}
__name(find_route, "find_route");
var DATA_SUFFIX = "/__data.json";
var HTML_DATA_SUFFIX = ".html__data.json";
function has_data_suffix2(pathname) {
  return pathname.endsWith(DATA_SUFFIX) || pathname.endsWith(HTML_DATA_SUFFIX);
}
__name(has_data_suffix2, "has_data_suffix");
function add_data_suffix2(pathname) {
  if (pathname.endsWith(".html")) return pathname.replace(/\.html$/, HTML_DATA_SUFFIX);
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
__name(add_data_suffix2, "add_data_suffix");
function strip_data_suffix2(pathname) {
  if (pathname.endsWith(HTML_DATA_SUFFIX)) {
    return pathname.slice(0, -HTML_DATA_SUFFIX.length) + ".html";
  }
  return pathname.slice(0, -DATA_SUFFIX.length);
}
__name(strip_data_suffix2, "strip_data_suffix");
var ROUTE_SUFFIX = "/__route.js";
function has_resolution_suffix2(pathname) {
  return pathname.endsWith(ROUTE_SUFFIX);
}
__name(has_resolution_suffix2, "has_resolution_suffix");
function add_resolution_suffix2(pathname) {
  return pathname.replace(/\/$/, "") + ROUTE_SUFFIX;
}
__name(add_resolution_suffix2, "add_resolution_suffix");
function strip_resolution_suffix2(pathname) {
  return pathname.slice(0, -ROUTE_SUFFIX.length);
}
__name(strip_resolution_suffix2, "strip_resolution_suffix");
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i = value.length;
      while (i) hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else if (ArrayBuffer.isView(value)) {
      const buffer2 = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i = buffer2.length;
      while (i) hash2 = hash2 * 33 ^ buffer2[--i];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
__name(hash, "hash");
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
__name(compact, "compact");
var noop_span = {
  spanContext() {
    return noop_span_context;
  },
  setAttribute() {
    return this;
  },
  setAttributes() {
    return this;
  },
  addEvent() {
    return this;
  },
  setStatus() {
    return this;
  },
  updateName() {
    return this;
  },
  end() {
    return this;
  },
  isRecording() {
    return false;
  },
  recordException() {
    return this;
  },
  addLink() {
    return this;
  },
  addLinks() {
    return this;
  }
};
var noop_span_context = {
  traceId: "",
  spanId: "",
  traceFlags: 0
};
function with_resolvers() {
  let resolve2;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve2 = res;
    reject = rej;
  });
  return { promise, resolve: resolve2, reject };
}
__name(with_resolvers, "with_resolvers");
var NULL_BODY_STATUS = [101, 103, 204, 205, 304];
var IN_WEBCONTAINER2 = !!globalThis.process?.versions?.webcontainer;
async function render_endpoint(event, event_state, mod, state2) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler = mod[method] || mod.fallback;
  if (method === "HEAD" && !mod.HEAD && mod.GET) {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state2.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state2.prerendering && !state2.prerendering.inside_reroute && !prerender) {
    if (state2.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    const response = await with_request_store(
      { event, state: event_state },
      () => handler(
        /** @type {import('@sveltejs/kit').RequestEvent<Record<string, any>>} */
        event
      )
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state2.prerendering && (!state2.prerendering.inside_reroute || prerender)) {
      const cloned = new Response(response.clone().body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers)
      });
      cloned.headers.set("x-sveltekit-prerender", String(prerender));
      if (state2.prerendering.inside_reroute && prerender) {
        cloned.headers.set(
          "x-sveltekit-routeid",
          encodeURI(
            /** @type {string} */
            event.route.id
          )
        );
        state2.prerendering.dependencies.set(event.url.pathname, { response: cloned, body: null });
      } else {
        return cloned;
      }
    }
    return response;
  } catch (e3) {
    if (e3 instanceof Redirect) {
      return new Response(void 0, {
        status: e3.status,
        headers: { location: e3.location }
      });
    }
    throw e3;
  }
}
__name(render_endpoint, "render_endpoint");
function is_endpoint_request(event) {
  const { method, headers: headers2 } = event.request;
  if (ENDPOINT_METHODS.includes(method) && !PAGE_METHODS.includes(method)) {
    return true;
  }
  if (method === "POST" && headers2.get("x-sveltekit-action") === "true") return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
__name(is_endpoint_request, "is_endpoint_request");
async function record_span({ name, attributes: attributes2, fn }) {
  {
    return fn(noop_span);
  }
}
__name(record_span, "record_span");
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
__name(is_action_json_request, "is_action_json_request");
async function handle_action_json_request(event, event_state, options2, server2) {
  const actions = server2?.actions;
  if (!actions) {
    const no_actions_error = new SvelteKitError(
      405,
      "Method Not Allowed",
      `POST method not allowed. No form actions exist for ${"this page"}`
    );
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, event_state, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, event_state, actions);
    if (browser) ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        )
      });
    }
  } catch (e3) {
    const err = normalize_error(e3);
    if (err instanceof Redirect) {
      return action_json_redirect(err);
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(
          event,
          event_state,
          options2,
          check_incorrect_fail_use(err)
        )
      },
      {
        status: get_status(err)
      }
    );
  }
}
__name(handle_action_json_request, "handle_action_json_request");
function check_incorrect_fail_use(error22) {
  return error22 instanceof ActionFailure ? new Error('Cannot "throw fail()". Use "return fail()"') : error22;
}
__name(check_incorrect_fail_use, "check_incorrect_fail_use");
function action_json_redirect(redirect) {
  return action_json({
    type: "redirect",
    status: redirect.status,
    location: redirect.location
  });
}
__name(action_json_redirect, "action_json_redirect");
function action_json(data, init2) {
  return json(data, init2);
}
__name(action_json, "action_json");
function is_action_request(event) {
  return event.request.method === "POST";
}
__name(is_action_request, "is_action_request");
async function handle_action_request(event, event_state, server2) {
  const actions = server2?.actions;
  if (!actions) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: new SvelteKitError(
        405,
        "Method Not Allowed",
        `POST method not allowed. No form actions exist for ${"this page"}`
      )
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, event_state, actions);
    if (browser) ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e3) {
    const err = normalize_error(e3);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
__name(handle_action_request, "handle_action_request");
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      "When using named actions, the default action cannot be used. See the docs for more info: https://svelte.dev/docs/kit/form-actions#named-actions"
    );
  }
}
__name(check_named_default_separate, "check_named_default_separate");
async function call_action(event, event_state, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new SvelteKitError(404, "Not Found", `No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new SvelteKitError(
      415,
      "Unsupported Media Type",
      `Form actions expect form-encoded data \u2014 received ${event.request.headers.get(
        "content-type"
      )}`
    );
  }
  return record_span({
    name: "sveltekit.form_action",
    attributes: {
      "http.route": event.route.id || "unknown"
    },
    fn: /* @__PURE__ */ __name(async (current2) => {
      const traced_event = merge_tracing(event, current2);
      const result = await with_request_store(
        { event: traced_event, state: event_state },
        () => action(traced_event)
      );
      if (result instanceof ActionFailure) {
        current2.setAttributes({
          "sveltekit.form_action.result.type": "failure",
          "sveltekit.form_action.result.status": result.status
        });
      }
      return result;
    }, "fn")
  });
}
__name(call_action, "call_action");
function uneval_action_response(data, route_id, transport) {
  const replacer = create_replacer(transport);
  return try_serialize(data, (value) => uneval(value, replacer), route_id);
}
__name(uneval_action_response, "uneval_action_response");
function stringify_action_response(data, route_id, transport) {
  const encoders = Object.fromEntries(
    Object.entries(transport).map(([key2, value]) => [key2, value.encode])
  );
  return try_serialize(data, (value) => stringify(value, encoders), route_id);
}
__name(stringify_action_response, "stringify_action_response");
function try_serialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e3) {
    const error22 = (
      /** @type {any} */
      e3
    );
    if (data instanceof Response) {
      throw new Error(
        `Data returned from action inside ${route_id} is not serializable. Form actions need to return plain objects or fail(). E.g. return { success: true } or return fail(400, { message: "invalid" });`,
        { cause: e3 }
      );
    }
    if ("path" in error22) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error22.message}`;
      if (error22.path !== "") message += ` (data.${error22.path})`;
      throw new Error(message, { cause: e3 });
    }
    throw error22;
  }
}
__name(try_serialize, "try_serialize");
function create_async_iterator() {
  let resolved = -1;
  let returned = -1;
  const deferred2 = [];
  return {
    iterate: /* @__PURE__ */ __name((transform = (x) => x) => {
      return {
        [Symbol.asyncIterator]() {
          return {
            next: /* @__PURE__ */ __name(async () => {
              const next2 = deferred2[++returned];
              if (!next2) return { value: null, done: true };
              const value = await next2.promise;
              return { value: transform(value), done: false };
            }, "next")
          };
        }
      };
    }, "iterate"),
    add: /* @__PURE__ */ __name((promise) => {
      const next2 = with_resolvers();
      void next2.promise.catch(noop);
      deferred2.push(next2);
      void promise.then(
        (value) => {
          deferred2[++resolved].resolve(value);
        },
        (error22) => {
          deferred2[++resolved].reject(error22);
        }
      );
    }, "add")
  };
}
__name(create_async_iterator, "create_async_iterator");
function server_data_serializer(event, event_state, options2) {
  let promise_id = 1;
  let max_nodes = -1;
  const iterator = create_async_iterator();
  const global = get_global_name(options2);
  function get_replacer(index5) {
    return /* @__PURE__ */ __name(function replacer(thing) {
      if (typeof thing?.then === "function") {
        const id = promise_id++;
        const promise = thing.then(
          /** @param {any} data */
          (data) => ({ data })
        ).catch(
          /** @param {any} error */
          async (error22) => ({
            error: await handle_error_and_jsonify(event, event_state, options2, error22)
          })
        ).then(
          /**
           * @param {{data: any; error: any}} result
           */
          async ({ data, error: error22 }) => {
            let str;
            try {
              str = uneval(error22 ? [, error22] : [data], replacer);
            } catch {
              error22 = await handle_error_and_jsonify(
                event,
                event_state,
                options2,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              str = uneval([, error22], replacer);
            }
            return {
              index: index5,
              str: `${global}.resolve(${id}, ${str.includes("app.decode") ? `(app) => ${str}` : `() => ${str}`})`
            };
          }
        );
        iterator.add(promise);
        return `${global}.defer(${id})`;
      } else {
        for (const key2 in options2.hooks.transport) {
          const encoded = options2.hooks.transport[key2].encode(thing);
          if (encoded) {
            return `app.decode('${key2}', ${uneval(encoded, replacer)})`;
          }
        }
      }
    }, "replacer");
  }
  __name(get_replacer, "get_replacer");
  const strings = (
    /** @type {string[]} */
    []
  );
  return {
    set_max_nodes(i) {
      max_nodes = i;
    },
    add_node(i, node) {
      try {
        if (!node) {
          strings[i] = "null";
          return;
        }
        const payload2 = { type: "data", data: node.data, uses: serialize_uses(node) };
        if (node.slash) payload2.slash = node.slash;
        strings[i] = uneval(payload2, get_replacer(i));
      } catch (e3) {
        e3.path = e3.path.slice(1);
        throw new Error(clarify_devalue_error(
          event,
          /** @type {any} */
          e3
        ), { cause: e3 });
      }
    },
    get_data(csp) {
      const open = `<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>`;
      const close = `<\/script>
`;
      return {
        data: `[${compact(max_nodes > -1 ? strings.slice(0, max_nodes) : strings).join(",")}]`,
        chunks: promise_id > 1 ? iterator.iterate(({ index: index5, str }) => {
          if (max_nodes > -1 && index5 >= max_nodes) {
            return "";
          }
          return open + str + close;
        }) : null
      };
    }
  };
}
__name(server_data_serializer, "server_data_serializer");
function server_data_serializer_json(event, event_state, options2) {
  let promise_id = 1;
  const iterator = create_async_iterator();
  const reducers = {
    ...Object.fromEntries(
      Object.entries(options2.hooks.transport).map(([key2, value]) => [key2, value.encode])
    ),
    /** @param {any} thing */
    Promise: /* @__PURE__ */ __name((thing) => {
      if (typeof thing?.then !== "function") {
        return;
      }
      const id = promise_id++;
      let key2 = "data";
      const promise = thing.catch(
        /** @param {any} e */
        async (e3) => {
          key2 = "error";
          return handle_error_and_jsonify(
            event,
            event_state,
            options2,
            /** @type {any} */
            e3
          );
        }
      ).then(
        /** @param {any} value */
        async (value) => {
          let str;
          try {
            str = stringify(value, reducers);
          } catch {
            const error22 = await handle_error_and_jsonify(
              event,
              event_state,
              options2,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            key2 = "error";
            str = stringify(error22, reducers);
          }
          return `{"type":"chunk","id":${id},"${key2}":${str}}
`;
        }
      );
      iterator.add(promise);
      return id;
    }, "Promise")
  };
  const strings = (
    /** @type {string[]} */
    []
  );
  return {
    add_node(i, node) {
      try {
        if (!node) {
          strings[i] = "null";
          return;
        }
        if (node.type === "error" || node.type === "skip") {
          strings[i] = JSON.stringify(node);
          return;
        }
        strings[i] = `{"type":"data","data":${stringify(node.data, reducers)},"uses":${JSON.stringify(
          serialize_uses(node)
        )}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
      } catch (e3) {
        e3.path = "data" + e3.path;
        throw new Error(clarify_devalue_error(
          event,
          /** @type {any} */
          e3
        ), { cause: e3 });
      }
    },
    get_data() {
      return {
        data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
        chunks: promise_id > 1 ? iterator.iterate() : null
      };
    }
  };
}
__name(server_data_serializer_json, "server_data_serializer_json");
async function load_server_data({ event, event_state, state: state2, node, parent }) {
  if (!node?.server) return null;
  let is_tracking = true;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false,
    search_params: /* @__PURE__ */ new Set()
  };
  const load3 = node.server.load;
  const slash = node.server.trailingSlash;
  if (!load3) {
    return { type: "data", data: null, uses, slash };
  }
  const url = make_trackable(
    event.url,
    () => {
      if (is_tracking) {
        uses.url = true;
      }
    },
    (param) => {
      if (is_tracking) {
        uses.search_params.add(param);
      }
    }
  );
  if (state2.prerendering) {
    disable_search(url);
  }
  const result = await record_span({
    name: "sveltekit.load",
    attributes: {
      "sveltekit.load.node_id": node.server_id || "unknown",
      "sveltekit.load.node_type": get_node_type(node.server_id),
      "http.route": event.route.id || "unknown"
    },
    fn: /* @__PURE__ */ __name(async (current2) => {
      const traced_event = merge_tracing(event, current2);
      const result2 = await with_request_store(
        { event: traced_event, state: event_state },
        () => load3.call(null, {
          ...traced_event,
          fetch: /* @__PURE__ */ __name((info, init2) => {
            new URL(info instanceof Request ? info.url : info, event.url);
            return event.fetch(info, init2);
          }, "fetch"),
          /** @param {string[]} deps */
          depends: /* @__PURE__ */ __name((...deps) => {
            for (const dep of deps) {
              const { href } = new URL(dep, event.url);
              uses.dependencies.add(href);
            }
          }, "depends"),
          params: new Proxy(event.params, {
            get: /* @__PURE__ */ __name((target, key2) => {
              if (is_tracking) {
                uses.params.add(key2);
              }
              return target[
                /** @type {string} */
                key2
              ];
            }, "get")
          }),
          parent: /* @__PURE__ */ __name(async () => {
            if (is_tracking) {
              uses.parent = true;
            }
            return parent();
          }, "parent"),
          route: new Proxy(event.route, {
            get: /* @__PURE__ */ __name((target, key2) => {
              if (is_tracking) {
                uses.route = true;
              }
              return target[
                /** @type {'id'} */
                key2
              ];
            }, "get")
          }),
          url,
          untrack(fn) {
            is_tracking = false;
            try {
              return fn();
            } finally {
              is_tracking = true;
            }
          }
        })
      );
      return result2;
    }, "fn")
  });
  return {
    type: "data",
    data: result ?? null,
    uses,
    slash
  };
}
__name(load_server_data, "load_server_data");
async function load_data({
  event,
  event_state,
  fetched,
  node,
  parent,
  server_data_promise,
  state: state2,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  const load3 = node?.universal?.load;
  if (!load3) {
    return server_data_node?.data ?? null;
  }
  const result = await record_span({
    name: "sveltekit.load",
    attributes: {
      "sveltekit.load.node_id": node.universal_id || "unknown",
      "sveltekit.load.node_type": get_node_type(node.universal_id),
      "http.route": event.route.id || "unknown"
    },
    fn: /* @__PURE__ */ __name(async (current2) => {
      const traced_event = merge_tracing(event, current2);
      const child_state = { ...event_state, is_in_universal_load: true };
      return await with_request_store(
        { event: traced_event, state: child_state },
        () => load3.call(null, {
          url: event.url,
          params: event.params,
          data: server_data_node?.data ?? null,
          route: event.route,
          fetch: create_universal_fetch(event, state2, fetched, csr, resolve_opts),
          setHeaders: event.setHeaders,
          depends: noop,
          parent,
          untrack: /* @__PURE__ */ __name((fn) => fn(), "untrack"),
          tracing: traced_event.tracing
        })
      );
    }, "fn")
  });
  return result ?? null;
}
__name(load_data, "load_data");
function create_universal_fetch(event, state2, fetched, csr, resolve_opts) {
  const universal_fetch = /* @__PURE__ */ __name(async (input, init2) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    const cloned_headers = input instanceof Request && [...input.headers].length ? new Headers(input.headers) : init2?.headers;
    let response = await event.fetch(input, init2);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state2.prerendering) {
        dependency = { response, body: null };
        state2.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else if (url.protocol === "https:" || url.protocol === "http:") {
      const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    let teed_body;
    const proxy2 = new Proxy(response, {
      get(response2, key2, receiver) {
        async function push_fetched(body, is_b64) {
          const status_number = Number(response2.status);
          if (isNaN(status_number)) {
            throw new Error(
              `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
            );
          }
          fetched.push({
            url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
            method: event.request.method,
            request_body: (
              /** @type {string | ArrayBufferView | undefined} */
              input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body
            ),
            request_headers: cloned_headers,
            response_body: body,
            response: response2,
            is_b64
          });
        }
        __name(push_fetched, "push_fetched");
        if (key2 === "body") {
          if (response2.body === null) {
            return null;
          }
          if (teed_body) {
            return teed_body;
          }
          const [a, b] = response2.body.tee();
          void (async () => {
            let result = new Uint8Array();
            for await (const chunk of a) {
              const combined = new Uint8Array(result.length + chunk.length);
              combined.set(result, 0);
              combined.set(chunk, result.length);
              result = combined;
            }
            if (dependency) {
              dependency.body = new Uint8Array(result);
            }
            void push_fetched(base64_encode(result), true);
          })().catch(noop);
          return teed_body = b;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer2 = await response2.arrayBuffer();
            const bytes = new Uint8Array(buffer2);
            if (dependency) {
              dependency.body = bytes;
            }
            if (buffer2 instanceof ArrayBuffer) {
              await push_fetched(base64_encode(bytes), true);
            }
            return buffer2;
          };
        }
        async function text2() {
          const body = await response2.text();
          if (body === "" && NULL_BODY_STATUS.includes(response2.status)) {
            await push_fetched(void 0, false);
            return void 0;
          }
          if (!body || typeof body === "string") {
            await push_fetched(body, false);
          }
          if (dependency) {
            dependency.body = body;
          }
          return body;
        }
        __name(text2, "text2");
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            const body = await text2();
            return body ? JSON.parse(body) : void 0;
          };
        }
        const value = Reflect.get(response2, key2, response2);
        if (value instanceof Function) {
          return Object.defineProperties(
            /**
             * @this {any}
             */
            function() {
              return Reflect.apply(value, this === receiver ? response2 : this, arguments);
            },
            {
              name: { value: value.name },
              length: { value: value.length }
            }
          );
        }
        return value;
      }
    });
    if (csr) {
      const get2 = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get2.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://svelte.dev/docs/kit/hooks#Server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy2;
  }, "universal_fetch");
  return (input, init2) => {
    const response = universal_fetch(input, init2);
    response.catch(noop);
    return response;
  };
}
__name(create_universal_fetch, "create_universal_fetch");
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder2 = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      result += decoder2.decode();
      break;
    }
    result += decoder2.decode(value, { stream: true });
  }
  return result;
}
__name(stream_to_string, "stream_to_string");
var replacements2 = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements2).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers2 = {};
  let cache_control = null;
  let age = null;
  let varyAny = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers2[key2] = value;
    }
    if (key2 === "cache-control") cache_control = value;
    else if (key2 === "age") age = value;
    else if (key2 === "vary" && value.trim() === "*") varyAny = true;
  }
  const payload2 = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers: headers2,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload2).replace(pattern, (match) => replacements2[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url="${escape_html(fetched.url, true)}"`
  ];
  if (fetched.is_b64) {
    attrs.push("data-b64");
  }
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control && !varyAny) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
__name(serialize_data, "serialize_data");
function sha2562(data) {
  if (!key[0]) precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return btoa(String.fromCharCode(...bytes));
}
__name(sha2562, "sha256");
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  __name(frac, "frac");
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
__name(precompute, "precompute");
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c2 = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c2;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
__name(reverse_endianness, "reverse_endianness");
function encode(str) {
  const encoded = text_encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
__name(encode, "encode");
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array));
}
__name(generate_nonce, "generate_nonce");
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var BaseProvider = class {
  static {
    __name(this, "BaseProvider");
  }
  /** @type {boolean} */
  #use_hashes;
  /** @type {boolean} */
  #script_needs_csp;
  /** @type {boolean} */
  #script_src_needs_csp;
  /** @type {boolean} */
  #script_src_elem_needs_csp;
  /** @type {boolean} */
  #style_needs_csp;
  /** @type {boolean} */
  #style_src_needs_csp;
  /** @type {boolean} */
  #style_src_attr_needs_csp;
  /** @type {boolean} */
  #style_src_elem_needs_csp;
  /** @type {import('types').CspDirectives} */
  #directives;
  /** @type {Set<import('types').Csp.Source>} */
  #script_src;
  /** @type {Set<import('types').Csp.Source>} */
  #script_src_elem;
  /** @type {Set<import('types').Csp.Source>} */
  #style_src;
  /** @type {Set<import('types').Csp.Source>} */
  #style_src_attr;
  /** @type {Set<import('types').Csp.Source>} */
  #style_src_elem;
  /** @type {boolean} */
  script_needs_nonce;
  /** @type {boolean} */
  style_needs_nonce;
  /** @type {boolean} */
  script_needs_hash;
  /** @type {string} */
  #nonce;
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    this.#use_hashes = use_hashes;
    this.#directives = directives;
    const d = this.#directives;
    this.#script_src = /* @__PURE__ */ new Set();
    this.#script_src_elem = /* @__PURE__ */ new Set();
    this.#style_src = /* @__PURE__ */ new Set();
    this.#style_src_attr = /* @__PURE__ */ new Set();
    this.#style_src_elem = /* @__PURE__ */ new Set();
    const effective_script_src = d["script-src"] || d["default-src"];
    const script_src_elem = d["script-src-elem"];
    const effective_style_src = d["style-src"] || d["default-src"];
    const style_src_attr = d["style-src-attr"];
    const style_src_elem = d["style-src-elem"];
    const style_needs_csp = /* @__PURE__ */ __name((directive) => !!directive && !directive.some((value) => value === "unsafe-inline"), "style_needs_csp");
    const script_needs_csp = /* @__PURE__ */ __name((directive) => !!directive && (!directive.some((value) => value === "unsafe-inline") || directive.some((value) => value === "strict-dynamic")), "script_needs_csp");
    this.#script_src_needs_csp = script_needs_csp(effective_script_src);
    this.#script_src_elem_needs_csp = script_needs_csp(script_src_elem);
    this.#style_src_needs_csp = style_needs_csp(effective_style_src);
    this.#style_src_attr_needs_csp = style_needs_csp(style_src_attr);
    this.#style_src_elem_needs_csp = style_needs_csp(style_src_elem);
    this.#script_needs_csp = this.#script_src_needs_csp || this.#script_src_elem_needs_csp;
    this.#style_needs_csp = this.#style_src_needs_csp || this.#style_src_attr_needs_csp || this.#style_src_elem_needs_csp;
    this.script_needs_nonce = this.#script_needs_csp && !this.#use_hashes;
    this.style_needs_nonce = this.#style_needs_csp && !this.#use_hashes;
    this.script_needs_hash = this.#script_needs_csp && this.#use_hashes;
    this.#nonce = nonce;
  }
  /** @param {string} content */
  add_script(content) {
    if (!this.#script_needs_csp) return;
    const source2 = this.#use_hashes ? `sha256-${sha2562(content)}` : `nonce-${this.#nonce}`;
    if (this.#script_src_needs_csp) {
      this.#script_src.add(source2);
    }
    if (this.#script_src_elem_needs_csp) {
      this.#script_src_elem.add(source2);
    }
  }
  /** @param {`sha256-${string}`[]} hashes */
  add_script_hashes(hashes) {
    for (const hash2 of hashes) {
      if (this.#script_src_needs_csp) {
        this.#script_src.add(hash2);
      }
      if (this.#script_src_elem_needs_csp) {
        this.#script_src_elem.add(hash2);
      }
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (!this.#style_needs_csp) return;
    const source2 = this.#use_hashes ? `sha256-${sha2562(content)}` : `nonce-${this.#nonce}`;
    if (this.#style_src_needs_csp) {
      this.#style_src.add(source2);
    }
    if (this.#style_src_attr_needs_csp) {
      this.#style_src_attr.add(source2);
    }
    if (this.#style_src_elem_needs_csp) {
      const sha256_empty_comment_hash = "sha256-9OlNO0DNEeaVzHL4RZwCLsBHA8WBQ8toBp/4F5XV2nc=";
      const d = this.#directives;
      if (d["style-src-elem"] && !d["style-src-elem"].includes(sha256_empty_comment_hash) && !this.#style_src_elem.has(sha256_empty_comment_hash)) {
        this.#style_src_elem.add(sha256_empty_comment_hash);
      }
      if (source2 !== sha256_empty_comment_hash) {
        this.#style_src_elem.add(source2);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...this.#directives };
    if (this.#style_src.size > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...this.#style_src
      ];
    }
    if (this.#style_src_attr.size > 0) {
      directives["style-src-attr"] = [
        ...directives["style-src-attr"] || [],
        ...this.#style_src_attr
      ];
    }
    if (this.#style_src_elem.size > 0) {
      directives["style-src-elem"] = [
        ...directives["style-src-elem"] || [],
        ...this.#style_src_elem
      ];
    }
    if (this.#script_src.size > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...this.#script_src
      ];
    }
    if (this.#script_src_elem.size > 0) {
      directives["script-src-elem"] = [
        ...directives["script-src-elem"] || [],
        ...this.#script_src_elem
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value) continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
var CspProvider = class extends BaseProvider {
  static {
    __name(this, "CspProvider");
  }
  get_meta() {
    const content = this.get_header(true);
    if (!content) {
      return;
    }
    return `<meta http-equiv="content-security-policy" content="${escape_html(content, true)}">`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  static {
    __name(this, "CspReportOnlyProvider");
  }
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    super(use_hashes, directives, nonce);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  static {
    __name(this, "Csp");
  }
  /** @readonly */
  nonce = generate_nonce();
  /** @type {CspProvider} */
  csp_provider;
  /** @type {CspReportOnlyProvider} */
  report_only_provider;
  /**
   * @param {import('./types.js').CspConfig} config
   * @param {import('./types.js').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_hash() {
    return this.csp_provider.script_needs_hash || this.report_only_provider.script_needs_hash;
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {`sha256-${string}`[]} hashes */
  add_script_hashes(hashes) {
    this.csp_provider.add_script_hashes(hashes);
    this.report_only_provider.add_script_hashes(hashes);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
function generate_route_object(route, url, client) {
  const { errors, layouts, leaf } = route;
  const nodes = [...errors, ...layouts.map((l) => l?.[1]), leaf[1]].filter((n2) => typeof n2 === "number").map((n2) => `'${n2}': () => ${create_client_import(client.nodes?.[n2], url)}`).join(",\n		");
  return [
    `{
	id: ${s(route.id)}`,
    `errors: ${s(route.errors)}`,
    `layouts: ${s(route.layouts)}`,
    `leaf: ${s(route.leaf)}`,
    `nodes: {
		${nodes}
	}
}`
  ].join(",\n	");
}
__name(generate_route_object, "generate_route_object");
function create_client_import(import_path, url) {
  if (!import_path) return "Promise.resolve({})";
  if (import_path[0] === "/") {
    return `import('${import_path}')`;
  }
  if (assets !== "") {
    return `import('${assets}/${import_path}')`;
  }
  let path = get_relative_path(url.pathname, `${base}/${import_path}`);
  if (path[0] !== ".") path = `./${path}`;
  return `import('${path}')`;
}
__name(create_client_import, "create_client_import");
async function resolve_route(resolved_path, url, manifest2) {
  if (!manifest2._.client?.routes) {
    return text("Server-side route resolution disabled", { status: 400 });
  }
  const matchers = await manifest2._.matchers();
  const result = find_route(resolved_path, manifest2._.client.routes, matchers);
  return create_server_routing_response(
    result?.route ?? null,
    result?.params ?? {},
    url,
    manifest2._.client
  ).response;
}
__name(resolve_route, "resolve_route");
function create_server_routing_response(route, params, url, client) {
  const headers2 = new Headers({
    "content-type": "application/javascript; charset=utf-8"
  });
  if (route) {
    const csr_route = generate_route_object(route, url, client);
    const body = `${create_css_import(route, url, client)}
export const route = ${csr_route}; export const params = ${JSON.stringify(params)};`;
    return { response: text(body, { headers: headers2 }), body };
  } else {
    return { response: text("", { headers: headers2 }), body: "" };
  }
}
__name(create_server_routing_response, "create_server_routing_response");
function create_css_import(route, url, client) {
  const { errors, layouts, leaf } = route;
  let css = "";
  for (const node of [...errors, ...layouts.map((l) => l?.[1]), leaf[1]]) {
    if (typeof node !== "number") continue;
    const node_css = client.css?.[node];
    for (const css_path of node_css ?? []) {
      css += `'${assets || base}/${css_path}',`;
    }
  }
  if (!css) return "";
  return `${create_client_import(client.start, url)}.then(x => x.load_css([${css}]));`;
}
__name(create_css_import, "create_css_import");
async function handle_remote_call(event, state2, options2, manifest2, id) {
  return record_span({
    name: "sveltekit.remote.call",
    attributes: {},
    fn: /* @__PURE__ */ __name((current2) => {
      const traced_event = merge_tracing(event, current2);
      return with_request_store(
        { event: traced_event, state: state2 },
        () => handle_remote_call_internal(traced_event, state2, options2, manifest2, id)
      );
    }, "fn")
  });
}
__name(handle_remote_call, "handle_remote_call");
async function handle_remote_call_internal(event, state2, options2, manifest2, id) {
  const [hash2, name, additional_args] = id.split("/");
  const remotes = manifest2._.remotes;
  if (!remotes[hash2]) error(404);
  const module = await remotes[hash2]();
  const fn = module.default[name];
  if (!fn) error(404);
  const internals = fn.__;
  const transport = options2.hooks.transport;
  event.tracing.current.setAttributes({
    "sveltekit.remote.call.type": internals.type,
    "sveltekit.remote.call.name": internals.name
  });
  const headers2 = state2.prerendering ? void 0 : { "cache-control": "private, no-store" };
  try {
    const data = {};
    switch (internals.type) {
      case "query_live": {
        let send = /* @__PURE__ */ __name(function(controller2, payload3) {
          controller2.enqueue(encoder.encode("data: " + JSON.stringify(payload3) + "\n\n"));
        }, "send");
        if (event.request.method !== "GET") {
          throw new SvelteKitError(
            405,
            "Method Not Allowed",
            `\`query.live\` functions must be invoked via GET request, not ${event.request.method}`
          );
        }
        const payload2 = (
          /** @type {string} */
          new URL(event.request.url).searchParams.get("payload")
        );
        const generator = internals.run(event, state2, parse_remote_arg(payload2, transport));
        const encoder = new TextEncoder();
        let closed = false;
        let result = void 0;
        async function cancel() {
          if (closed) return;
          closed = true;
          await generator.return(void 0);
        }
        __name(cancel, "cancel");
        event.request.signal.addEventListener("abort", cancel, { once: true });
        return new Response(
          new ReadableStream({
            async pull(controller2) {
              if (event.request.signal.aborted) {
                await cancel();
                controller2.close();
                return;
              }
              try {
                while (true) {
                  const { value, done } = await generator.next();
                  if (done) {
                    await cancel();
                    controller2.close();
                    return;
                  }
                  if (result !== (result = stringify2(value, transport))) {
                    send(controller2, {
                      type: "result",
                      result
                    });
                    return;
                  }
                }
              } catch (error22) {
                if (!event.request.signal.aborted) {
                  if (error22 instanceof Redirect) {
                    send(controller2, {
                      type: "redirect",
                      location: error22.location
                    });
                  } else {
                    const status = error22 instanceof HttpError || error22 instanceof SvelteKitError ? error22.status : 500;
                    send(controller2, {
                      type: "error",
                      error: await handle_error_and_jsonify(event, state2, options2, error22),
                      status
                    });
                  }
                }
                await cancel();
                controller2.close();
              }
            },
            cancel
          }),
          {
            headers: {
              "cache-control": "private, no-store",
              "content-type": "text/event-stream"
            }
          }
        );
      }
      case "query_batch": {
        if (event.request.method !== "POST") {
          throw new SvelteKitError(
            405,
            "Method Not Allowed",
            `\`query.batch\` functions must be invoked via POST request, not ${event.request.method}`
          );
        }
        const { payloads } = await event.request.json();
        const args = await Promise.all(
          payloads.map((payload2) => parse_remote_arg(payload2, transport))
        );
        data._ = await with_request_store({ event, state: state2 }, () => internals.run(args, options2));
        break;
      }
      case "form": {
        if (event.request.method !== "POST") {
          throw new SvelteKitError(
            405,
            "Method Not Allowed",
            `\`form\` functions must be invoked via POST request, not ${event.request.method}`
          );
        }
        if (!is_form_content_type(event.request)) {
          throw new SvelteKitError(
            415,
            "Unsupported Media Type",
            `\`form\` functions expect form-encoded data \u2014 received ${event.request.headers.get(
              "content-type"
            )}`
          );
        }
        const { data: input, meta, form_data } = await deserialize_binary_form(event.request);
        state2.remote.requested = create_requested_map(meta.remote_refreshes);
        if (additional_args && !("id" in input)) {
          input.id = JSON.parse(decodeURIComponent(additional_args));
        }
        const fn2 = internals.fn;
        data._ = await with_request_store(
          { event, state: { ...state2, is_in_remote_form_or_command: true } },
          () => fn2(input, meta, form_data)
        );
        if (data._.issues) {
          return json(
            /** @type {RemoteFunctionResponse} */
            {
              type: "result",
              data: stringify2(data, transport)
            },
            { headers: headers2 }
          );
        }
        break;
      }
      case "command": {
        const { payload: payload2, refreshes } = await event.request.json();
        state2.remote.requested = create_requested_map(refreshes);
        const arg = parse_remote_arg(payload2, transport);
        data._ = await with_request_store(
          { event, state: { ...state2, is_in_remote_form_or_command: true } },
          () => fn(arg)
        );
        break;
      }
      case "prerender": {
        data._ = await with_request_store(
          { event, state: state2 },
          () => fn(parse_remote_arg(additional_args, transport))
        );
        break;
      }
      case "query": {
        const payload2 = (
          /** @type {string} */
          // new URL(...) necessary because we're hiding the URL from the user in the event object
          new URL(event.request.url).searchParams.get("payload")
        );
        data._ = await with_request_store(
          { event, state: state2 },
          () => fn(parse_remote_arg(payload2, transport))
        );
        break;
      }
    }
    await collect_remote_data(data, event, state2, options2);
    return json(
      /** @type {RemoteFunctionResponse} */
      {
        type: "result",
        data: stringify2(data, transport)
      },
      { headers: headers2 }
    );
  } catch (error22) {
    if (error22 instanceof Redirect) {
      const data = await collect_remote_data({ redirect: error22.location }, event, state2, options2);
      return json(
        /** @type {RemoteFunctionResponse} */
        {
          type: "result",
          data: stringify2(data, transport)
        },
        { headers: headers2 }
      );
    }
    const status = error22 instanceof HttpError || error22 instanceof SvelteKitError ? error22.status : 500;
    return json(
      /** @type {RemoteFunctionResponse} */
      {
        type: "error",
        error: await handle_error_and_jsonify(event, state2, options2, error22),
        status
      },
      {
        // By setting a non-200 during prerendering we fail the prerender process (unless handleHttpError handles it).
        // Errors at runtime will be passed to the client and are handled there
        status: state2.prerendering ? status : void 0,
        headers: {
          "cache-control": "private, no-store"
        }
      }
    );
  }
}
__name(handle_remote_call_internal, "handle_remote_call_internal");
async function collect_remote_data(data, event, state2, options2) {
  async function convert_error(error22) {
    const status = error22 instanceof HttpError || error22 instanceof SvelteKitError ? error22.status : 500;
    return [status, await handle_error_and_jsonify(event, state2, options2, error22)];
  }
  __name(convert_error, "convert_error");
  const promises = [];
  if (state2.remote.explicit) {
    for (const [remote_key, { internals, promise }] of state2.remote.explicit) {
      data.r = true;
      const type = (
        /** @type {'p' | 'q' | 'l'} */
        internals.type === "query_live" ? "l" : internals.type[0]
      );
      await promise.then(
        (v) => {
          ((data[type] ??= {})[remote_key] ??= {}).v = v;
        },
        async (e3) => {
          if (e3 instanceof Redirect) {
            return;
          }
          ((data[type] ??= {})[remote_key] ??= {}).e = await convert_error(e3);
        }
      );
    }
  }
  await Promise.all(promises);
  if (state2.remote.implicit) {
    for (const [internals, record] of state2.remote.implicit) {
      if (!internals.id) continue;
      for (const key2 in record) {
        const remote_key = internals.type === "form" ? key2 : create_remote_key(internals.id, key2);
        const type = (
          /** @type {'p' | 'q' | 'l' | 'f'} */
          internals.type === "query_live" ? "l" : internals.type[0]
        );
        const promise = state2.remote.data?.get(internals)?.[key2] ?? record[key2]();
        let resolved = true;
        await Promise.race([
          Promise.resolve(promise).then(
            (v) => {
              if (resolved) {
                ((data[type] ??= {})[remote_key] ??= {}).v = v;
              }
            },
            (e3) => {
              if (e3 instanceof Redirect) {
                return;
              }
              if (resolved) {
                promises.push(
                  convert_error(e3).then((e22) => {
                    ((data[type] ??= {})[remote_key] ??= {}).e = e22;
                  })
                );
              }
            }
          ),
          Promise.resolve().then(() => resolved = false)
        ]);
      }
    }
  }
  await Promise.all(promises);
  return data;
}
__name(collect_remote_data, "collect_remote_data");
function create_requested_map(refreshes) {
  const requested = /* @__PURE__ */ new Map();
  for (const key2 of refreshes ?? []) {
    const parts = split_remote_key(key2);
    const existing = requested.get(parts.id);
    if (existing) {
      existing.push(parts.payload);
    } else {
      requested.set(parts.id, [parts.payload]);
    }
  }
  return requested;
}
__name(create_requested_map, "create_requested_map");
async function handle_remote_form_post(event, state2, manifest2, id) {
  return record_span({
    name: "sveltekit.remote.form.post",
    attributes: {},
    fn: /* @__PURE__ */ __name((current2) => {
      const traced_event = merge_tracing(event, current2);
      return with_request_store(
        { event: traced_event, state: state2 },
        () => handle_remote_form_post_internal(traced_event, state2, manifest2, id)
      );
    }, "fn")
  });
}
__name(handle_remote_form_post, "handle_remote_form_post");
async function handle_remote_form_post_internal(event, state2, manifest2, id) {
  const [hash2, name, ...rest] = id.split("/");
  const action_id = rest.join("/");
  const remotes = manifest2._.remotes;
  const module = await remotes[hash2]?.();
  let form = (
    /** @type {RemoteForm<any, any>} */
    module?.default[name]
  );
  if (!form) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: new SvelteKitError(
        405,
        "Method Not Allowed",
        `POST method not allowed. No form actions exist for ${"this page"}`
      )
    };
  }
  if (action_id) {
    form = with_request_store({ event, state: state2 }, () => form.for(JSON.parse(action_id)));
  }
  try {
    const fn = (
      /** @type {RemoteFormInternals} */
      /** @type {any} */
      form.__.fn
    );
    const { data, meta, form_data } = await deserialize_binary_form(event.request);
    if (action_id && !("id" in data)) {
      data.id = JSON.parse(decodeURIComponent(action_id));
    }
    await with_request_store(
      { event, state: { ...state2, is_in_remote_form_or_command: true } },
      () => fn(data, meta, form_data)
    );
    return {
      type: "success",
      status: 200
    };
  } catch (e3) {
    const err = normalize_error(e3);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
__name(handle_remote_form_post_internal, "handle_remote_form_post_internal");
function get_remote_id(url) {
  return url.pathname.startsWith(`${base}/${app_dir}/remote/`) && url.pathname.replace(`${base}/${app_dir}/remote/`, "");
}
__name(get_remote_id, "get_remote_id");
function get_remote_action(url) {
  return url.searchParams.get("/remote");
}
__name(get_remote_action, "get_remote_action");
var updated = {
  ...readable(false),
  check: /* @__PURE__ */ __name(() => false, "check")
};
async function render_response({
  branch: branch2,
  fetched,
  options: options2,
  manifest: manifest2,
  state: state2,
  page_config,
  status,
  error: error22 = null,
  event,
  event_state,
  resolve_opts,
  action_result,
  data_serializer,
  error_components
}) {
  if (state2.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client } = manifest2._;
  const modulepreloads = new Set(client?.imports);
  const stylesheets5 = new Set(client?.stylesheets);
  const fonts5 = new Set(client?.fonts);
  const link_headers = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s(base);
  const csp = new Csp(options2.csp, {
    prerender: !!state2.prerendering
  });
  {
    if (!state2.prerendering?.fallback) {
      const pathname = event.isDataRequest ? add_data_suffix2(event.url.pathname) : event.url.pathname;
      const segments = pathname.slice(base.length).split("/").slice(2);
      base$1 = segments.map(() => "..").join("/") || ".";
      base_expression = `new URL(${s(base$1)}, location).pathname.slice(0, -1)`;
      if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
        assets$1 = base$1;
      }
    } else if (options2.hash_routing) {
      base_expression = "new URL('.', location).pathname.slice(0, -1)";
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(
        branch2.map(({ node }) => {
          if (!node.component) {
            throw new Error(`Missing +page.svelte component for route ${event.route.id}`);
          }
          return node.component();
        })
      ),
      form: form_value
    };
    if (error_components) {
      if (error22) {
        props.error = error22;
      }
      props.errors = error_components;
    }
    let data2 = {};
    for (let i = 0; i < branch2.length; i += 1) {
      data2 = { ...data2, ...branch2[i].data };
      props[`data_${i}`] = data2;
    }
    props.page = {
      error: error22,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value,
      state: {}
    };
    const render_opts = {
      context: /* @__PURE__ */ new Map([
        [
          "__request__",
          {
            page: props.page
          }
        ]
      ]),
      csp: csp.script_needs_nonce ? { nonce: csp.nonce } : { hash: csp.script_needs_hash },
      transformError: error_components ? (
        /** @param {unknown} e */
        (async (e3) => {
          if (isRedirect(e3)) {
            throw e3;
          }
          const transformed2 = await handle_error_and_jsonify(event, event_state, options2, e3);
          props.page.error = props.error = error22 = transformed2;
          props.page.status = status = get_status(e3);
          return transformed2;
        })
      ) : void 0
    };
    const fetch2 = globalThis.fetch;
    try {
      if (browser) ;
      const state22 = { ...event_state, is_in_render: true };
      rendered = await with_request_store({ event, state: state22 }, async () => {
        if (relative) override({ base: base$1, assets: assets$1 });
        const maybe_promise = options2.root.render(props, render_opts);
        const rendered2 = options2.async && "then" in maybe_promise ? (
          /** @type {ReturnType<typeof options.root.render> & Promise<any>} */
          maybe_promise.then((r3) => r3)
        ) : maybe_promise;
        if (options2.async) {
          reset();
        }
        const { head: head22, html: html22, css, hashes } = (
          /** @type {ReturnType<typeof options.root.render>} */
          options2.async ? await rendered2 : rendered2
        );
        if (hashes) {
          csp.add_script_hashes(hashes.script);
        }
        return { head: head22, html: html22, css, hashes };
      });
    } finally {
      reset();
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null }, hashes: { script: [] } };
  }
  for (const { node } of branch2) {
    for (const url of node.imports) modulepreloads.add(url);
    for (const url of node.stylesheets) stylesheets5.add(url);
    for (const url of node.fonts) fonts5.add(url);
    if (node.inline_styles && !client?.inline) {
      Object.entries(await node.inline_styles()).forEach(([filename, css]) => {
        if (typeof css === "string") {
          inline_styles.set(filename, css);
          return;
        }
        inline_styles.set(filename, css(`${assets$1}/${app_dir}/immutable/assets`, assets$1));
      });
    }
  }
  const head2 = new Head(rendered.head, !!state2.prerendering);
  let body = rendered.html;
  const prefixed = /* @__PURE__ */ __name((path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  }, "prefixed");
  const style = client?.inline ? client.inline?.style : Array.from(inline_styles.values()).join("\n");
  if (style) {
    const attributes2 = [];
    if (csp.style_needs_nonce) attributes2.push(`nonce="${csp.nonce}"`);
    csp.add_style(style);
    head2.add_style(style, attributes2);
  }
  for (const dep of stylesheets5) {
    const path = prefixed(dep);
    const attributes2 = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes2.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        link_headers.add(`<${encodeURI(path)}>; rel="preload"; as="style"; nopush`);
      }
    }
    head2.add_stylesheet(path, attributes2);
  }
  for (const dep of fonts5) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      head2.add_link_tag(path, ['rel="preload"', 'as="font"', `type="font/${ext}"`, "crossorigin"]);
      link_headers.add(
        `<${encodeURI(path)}>; rel="preload"; as="font"; type="font/${ext}"; crossorigin; nopush`
      );
    }
  }
  const global = get_global_name(options2);
  const { data, chunks } = data_serializer.get_data(csp);
  if (page_config.ssr && page_config.csr) {
    body += `
			${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state2.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr && client) {
    const route = client.routes?.find((r3) => r3.id === event.route.id) ?? null;
    const load_env_eagerly = client.uses_env_dynamic_public && !!state2.prerendering;
    if (load_env_eagerly) {
      modulepreloads.add(`${app_dir}/env.js`);
    }
    if (!client.inline) {
      const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
        (path) => resolve_opts.preload({ type: "js", path })
      );
      for (const path of included_modulepreloads) {
        link_headers.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
        if (options2.preload_strategy !== "modulepreload") {
          head2.add_script_preload(path);
        } else {
          head2.add_link_tag(path, ['rel="modulepreload"']);
        }
      }
    }
    if (client.routes && state2.prerendering && !state2.prerendering.fallback) {
      const pathname = add_resolution_suffix2(event.url.pathname);
      state2.prerendering.dependencies.set(
        pathname,
        create_server_routing_response(route, event.params, new URL(pathname, event.url), client)
      );
    }
    const blocks = [];
    const properties = [`base: ${base_expression}`];
    if (assets) {
      properties.push(`assets: ${s(assets)}`);
    }
    if (client.uses_env_dynamic_public) {
      properties.push(`env: ${load_env_eagerly ? "null" : s(public_env)}`);
    }
    if (chunks) {
      blocks.push("const deferred = new Map();");
      properties.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      let app_declaration = "";
      if (Object.keys(options2.hooks.transport).length > 0) {
        if (client.inline) {
          app_declaration = `const app = ${global}.app.app;`;
        } else if (client.app) {
          app_declaration = `const app = await import(${s(prefixed(client.app))});`;
        } else {
          app_declaration = `const { app } = await import(${s(prefixed(client.start))});`;
        }
      }
      const prelude = app_declaration ? `${app_declaration}
							const [data, error] = fn(app);` : `const [data, error] = fn();`;
      properties.push(`resolve: async (id, fn) => {
							${prelude}

							const try_to_resolve = () => {
								if (!deferred.has(id)) {
									setTimeout(try_to_resolve, 0);
									return;
								}
								const { fulfil, reject } = deferred.get(id);
								deferred.delete(id);
								if (error) reject(error);
								else fulfil(data);
							}
							try_to_resolve();
						}`);
    }
    blocks.push(`${global} = {
						${properties.join(",\n						")}
					};`);
    const args = ["element"];
    blocks.push("const element = document.currentScript.parentElement;");
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        );
      }
      if (error22) {
        serialized.error = uneval(error22);
      }
      const hydrate2 = [
        `node_ids: [${branch2.map(({ node }) => node.index).join(", ")}]`,
        `data: ${data}`,
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate2.push(`status: ${status}`);
      }
      if (client.routes) {
        if (route) {
          const stringified = generate_route_object(route, event.url, client).replaceAll(
            "\n",
            "\n							"
          );
          hydrate2.push(`params: ${uneval(event.params)}`, `server_route: ${stringified}`);
        }
      } else if (options2.embedded) {
        hydrate2.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      const indent = "	".repeat(load_env_eagerly ? 7 : 6);
      args.push(`{
${indent}	${hydrate2.join(`,
${indent}	`)}
${indent}}`);
    }
    const remote_data = await collect_remote_data({}, event, event_state, options2);
    const serialized_data = Object.keys(remote_data).length > 0 ? `${global}.data = ${uneval(remote_data, create_replacer(options2.hooks.transport))};

						` : "";
    const boot = client.inline ? `${client.inline.script}

					${serialized_data}${global}.app.start(${args.join(", ")});` : client.app ? `Promise.all([
						import(${s(prefixed(client.start))}),
						import(${s(prefixed(client.app))})
					]).then(([kit, app]) => {
						${serialized_data}kit.start(app, ${args.join(", ")});
					});` : `import(${s(prefixed(client.start))}).then((app) => {
						${serialized_data}app.start(${args.join(", ")})
					});`;
    if (load_env_eagerly) {
      blocks.push(`import(${s(`${base$1}/${app_dir}/env.js`)}).then(({ env }) => {
						${global}.env = env;

						${boot.replace(/\n/g, "\n	")}
					});`);
    } else {
      blocks.push(boot);
    }
    if (options2.service_worker) {
      let opts = "";
      if (options2.service_worker_options != null) {
        const service_worker_options = { ...options2.service_worker_options };
        opts = `, ${s(service_worker_options)}`;
      }
      blocks.push(`if ('serviceWorker' in navigator) {
						const script_url = '${prefixed("service-worker.js")}';
						const policy = globalThis?.window?.trustedTypes?.createPolicy(
							'sveltekit-trusted-url',
							{ createScriptURL(url) { return url; } }
						);
						const sanitised = policy?.createScriptURL(script_url) ?? script_url;
						addEventListener('load', function () {
							navigator.serviceWorker.register(sanitised${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}<\/script>
		`;
  }
  const headers2 = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state2.prerendering) {
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      head2.add_http_equiv(csp_headers);
    }
    if (state2.prerendering.cache) {
      head2.add_http_equiv(
        `<meta http-equiv="cache-control" content="${state2.prerendering.cache}">`
      );
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers2.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers2.set("content-security-policy-report-only", report_only_header);
    }
    if (link_headers.size) {
      headers2.set("link", Array.from(link_headers).join(", "));
    }
  }
  const html2 = options2.templates.app({
    head: head2.build(),
    body,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html: html2,
    done: true
  }) || "";
  if (!chunks) {
    headers2.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers: headers2
  }) : new Response(
    new ReadableStream({
      async start(controller2) {
        controller2.enqueue(text_encoder.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          if (chunk.length) controller2.enqueue(text_encoder.encode(chunk));
        }
        controller2.close();
      },
      type: "bytes"
    }),
    {
      headers: headers2
    }
  );
}
__name(render_response, "render_response");
var Head = class {
  static {
    __name(this, "Head");
  }
  #rendered;
  #prerendering;
  /** @type {string[]} */
  #http_equiv = [];
  /** @type {string[]} */
  #link_tags = [];
  /** @type {string[]} */
  #script_preloads = [];
  /** @type {string[]} */
  #style_tags = [];
  /** @type {string[]} */
  #stylesheet_links = [];
  /**
   * @param {string} rendered
   * @param {boolean} prerendering
   */
  constructor(rendered, prerendering) {
    this.#rendered = rendered;
    this.#prerendering = prerendering;
  }
  build() {
    return [
      ...this.#http_equiv,
      ...this.#link_tags,
      ...this.#script_preloads,
      this.#rendered,
      ...this.#style_tags,
      ...this.#stylesheet_links
    ].join("\n		");
  }
  /**
   * @param {string} style
   * @param {string[]} attributes
   */
  add_style(style, attributes2) {
    this.#style_tags.push(
      `<style${attributes2.length ? " " + attributes2.join(" ") : ""}>${style}</style>`
    );
  }
  /**
   * @param {string} href
   * @param {string[]} attributes
   */
  add_stylesheet(href, attributes2) {
    this.#stylesheet_links.push(`<link href="${href}" ${attributes2.join(" ")}>`);
  }
  /** @param {string} href */
  add_script_preload(href) {
    this.#script_preloads.push(
      `<link rel="preload" as="script" crossorigin="anonymous" href="${href}">`
    );
  }
  /**
   * @param {string} href
   * @param {string[]} attributes
   */
  add_link_tag(href, attributes2) {
    if (!this.#prerendering) return;
    this.#link_tags.push(`<link href="${href}" ${attributes2.join(" ")}>`);
  }
  /** @param {string} tag */
  add_http_equiv(tag) {
    if (!this.#prerendering) return;
    this.#http_equiv.push(tag);
  }
};
var PageNodes = class {
  static {
    __name(this, "PageNodes");
  }
  /** All layout nodes and the page node, if any */
  data;
  /**
   * @param {Array<import('types').SSRNode | undefined>} nodes
   */
  constructor(nodes) {
    this.data = nodes;
  }
  layouts() {
    return this.data.slice(0, -1);
  }
  page() {
    return this.data.at(-1);
  }
  validate() {
    for (const layout of this.layouts()) {
      if (layout) {
        validate_layout_server_exports(
          layout.server,
          /** @type {string} */
          layout.server_id
        );
        validate_layout_exports(
          layout.universal,
          /** @type {string} */
          layout.universal_id
        );
      }
    }
    const page2 = this.page();
    if (page2) {
      validate_page_server_exports(
        page2.server,
        /** @type {string} */
        page2.server_id
      );
      validate_page_exports(
        page2.universal,
        /** @type {string} */
        page2.universal_id
      );
    }
  }
  /**
   * @template {'prerender' | 'ssr' | 'csr' | 'trailingSlash'} Option
   * @param {Option} option
   * @returns {Value | undefined}
   */
  #get_option(option) {
    return this.data.reduce(
      (value, node) => {
        return node?.universal?.[option] ?? node?.server?.[option] ?? value;
      },
      /** @type {Value | undefined} */
      void 0
    );
  }
  csr() {
    return this.#get_option("csr") ?? true;
  }
  ssr() {
    return this.#get_option("ssr") ?? true;
  }
  prerender() {
    return this.#get_option("prerender") ?? false;
  }
  trailing_slash() {
    return this.#get_option("trailingSlash") ?? "never";
  }
  get_config() {
    let current2 = {};
    for (const node of this.data) {
      if (!node?.universal?.config && !node?.server?.config) continue;
      current2 = {
        ...current2,
        // TODO: should we override the server config value with the universal value similar to other page options?
        ...node?.universal?.config,
        ...node?.server?.config
      };
    }
    return Object.keys(current2).length ? current2 : void 0;
  }
  should_prerender_data() {
    return this.data.some(
      // prerender in case of trailingSlash because the client retrieves that value from the server
      (node) => node?.server?.load || node?.server?.trailingSlash !== void 0
    );
  }
};
async function respond_with_error({
  event,
  event_state,
  options: options2,
  manifest: manifest2,
  state: state2,
  status,
  error: error22,
  resolve_opts
}) {
  if (event.request.headers.get("x-sveltekit-error")) {
    return static_error_page(
      options2,
      status,
      /** @type {Error} */
      error22.message
    );
  }
  const fetched = [];
  try {
    const branch2 = [];
    const default_layout = await manifest2._.nodes[0]();
    const nodes = new PageNodes([default_layout]);
    const ssr = nodes.ssr();
    const csr = nodes.csr();
    const data_serializer = server_data_serializer(event, event_state, options2);
    if (ssr) {
      state2.error = true;
      const server_data_promise = load_server_data({
        event,
        event_state,
        state: state2,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: /* @__PURE__ */ __name(async () => ({}), "parent")
      });
      const server_data = await server_data_promise;
      data_serializer.add_node(0, server_data);
      const data = await load_data({
        event,
        event_state,
        fetched,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: /* @__PURE__ */ __name(async () => ({}), "parent"),
        resolve_opts,
        server_data_promise,
        state: state2,
        csr
      });
      branch2.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state: state2,
      page_config: {
        ssr,
        csr
      },
      status,
      error: await handle_error_and_jsonify(event, event_state, options2, error22),
      branch: branch2,
      error_components: [],
      fetched,
      event,
      event_state,
      resolve_opts,
      data_serializer
    });
  } catch (e3) {
    if (e3 instanceof Redirect) {
      return redirect_response(e3.status, e3.location);
    }
    return static_error_page(
      options2,
      get_status(e3),
      (await handle_error_and_jsonify(event, event_state, options2, e3)).message
    );
  }
}
__name(respond_with_error, "respond_with_error");
var MAX_DEPTH = 10;
async function render_page(event, event_state, page2, options2, manifest2, state2, nodes, resolve_opts) {
  if (state2.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page2.leaf]();
    return handle_action_json_request(event, event_state, options2, node?.server);
  }
  try {
    const leaf_node = (
      /** @type {SSRNode} */
      nodes.page()
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      const remote_id = get_remote_action(event.url);
      if (remote_id) {
        action_result = await handle_remote_form_post(event, event_state, manifest2, remote_id);
      } else {
        action_result = await handle_action_request(event, event_state, leaf_node.server);
      }
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        status = get_status(action_result.error);
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender = nodes.prerender();
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state2.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state2.prerender_default = should_prerender;
    const should_prerender_data = nodes.should_prerender_data();
    const data_pathname = add_data_suffix2(event.url.pathname);
    const fetched = [];
    const ssr = nodes.ssr();
    const csr = nodes.csr();
    if (ssr === false && !(state2.prerendering && should_prerender_data)) {
      if (browser && action_result && !event.request.headers.has("x-sveltekit-action")) ;
      return await render_response({
        // provide nodes without running load functions so that the styles and
        // fonts are linked in the head before CSR takes over
        branch: compact(nodes.data).map((node) => {
          return {
            node,
            data: null,
            server_data: null
          };
        }),
        fetched,
        page_config: {
          ssr: false,
          csr
        },
        status,
        error: null,
        event,
        event_state,
        options: options2,
        manifest: manifest2,
        state: state2,
        resolve_opts,
        data_serializer: server_data_serializer(event, event_state, options2)
      });
    }
    const branch2 = [];
    let load_error = null;
    const data_serializer = server_data_serializer(event, event_state, options2);
    const data_serializer_json = state2.prerendering && should_prerender_data ? server_data_serializer_json(event, event_state, options2) : null;
    const server_promises = nodes.data.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          const server_data = await load_server_data({
            event,
            event_state,
            state: state2,
            node,
            parent: /* @__PURE__ */ __name(async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent) Object.assign(data, parent.data);
              }
              return data;
            }, "parent")
          });
          if (node) {
            data_serializer.add_node(i, server_data);
          }
          data_serializer_json?.add_node(i, server_data);
          return server_data;
        } catch (e3) {
          load_error = /** @type {Error} */
          e3;
          throw load_error;
        }
      });
    });
    const load_promises = nodes.data.map((node, i) => {
      if (load_error) throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            event_state,
            fetched,
            node,
            parent: /* @__PURE__ */ __name(async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            }, "parent"),
            resolve_opts,
            server_data_promise: server_promises[i],
            state: state2,
            csr
          });
        } catch (e3) {
          load_error = /** @type {Error} */
          e3;
          throw load_error;
        }
      });
    });
    for (const p of server_promises) p.catch(noop);
    for (const p of load_promises) p.catch(noop);
    for (let i = 0; i < nodes.data.length; i += 1) {
      const node = nodes.data[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch2.push({ node, server_data, data });
        } catch (e3) {
          const err = normalize_error(e3);
          if (err instanceof Redirect) {
            if (state2.prerendering && should_prerender_data) {
              const body = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state2.prerendering.dependencies.set(data_pathname, {
                response: text(body),
                body
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = get_status(err);
          const error22 = await handle_error_and_jsonify(event, event_state, options2, err);
          while (i--) {
            if (page2.errors[i]) {
              const index5 = (
                /** @type {number} */
                page2.errors[i]
              );
              const node2 = await manifest2._.nodes[index5]();
              let j = i;
              while (!branch2[j]) j -= 1;
              data_serializer.set_max_nodes(j + 1);
              const layouts = compact(branch2.slice(0, j + 1));
              const nodes2 = new PageNodes(layouts.map((layout) => layout.node));
              const error_branch = layouts.concat({
                node: node2,
                data: null,
                server_data: null
              });
              return await render_response({
                event,
                event_state,
                options: options2,
                manifest: manifest2,
                state: state2,
                resolve_opts,
                page_config: {
                  ssr: nodes2.ssr(),
                  csr: nodes2.csr()
                },
                status: status2,
                error: error22,
                error_components: await load_error_components(
                  options2,
                  ssr,
                  error_branch,
                  page2,
                  manifest2
                ),
                branch: error_branch,
                fetched,
                data_serializer
              });
            }
          }
          return static_error_page(options2, status2, error22.message);
        }
      } else {
        branch2.push(null);
      }
    }
    if (state2.prerendering && data_serializer_json) {
      let { data, chunks } = data_serializer_json.get_data();
      if (chunks) {
        for await (const chunk of chunks) {
          data += chunk;
        }
      }
      state2.prerendering.dependencies.set(data_pathname, {
        response: text(data),
        body: data
      });
    }
    return await render_response({
      event,
      event_state,
      options: options2,
      manifest: manifest2,
      state: state2,
      resolve_opts,
      page_config: {
        csr,
        ssr
      },
      status,
      error: null,
      branch: compact(branch2),
      action_result,
      fetched,
      data_serializer: !ssr ? server_data_serializer(event, event_state, options2) : data_serializer,
      error_components: await load_error_components(options2, ssr, branch2, page2, manifest2)
    });
  } catch (e3) {
    if (e3 instanceof Redirect) {
      return redirect_response(e3.status, e3.location);
    }
    return await respond_with_error({
      event,
      event_state,
      options: options2,
      manifest: manifest2,
      state: state2,
      status: e3 instanceof HttpError ? e3.status : 500,
      error: e3,
      resolve_opts
    });
  }
}
__name(render_page, "render_page");
async function load_error_components(options2, ssr, branch2, page2, manifest2) {
  let error_components;
  if (options2.server_error_boundaries && ssr) {
    let last_idx = -1;
    error_components = await Promise.all(
      // eslint-disable-next-line @typescript-eslint/await-thenable
      branch2.map((b, i) => {
        if (i === 0) return void 0;
        if (!b) return null;
        i--;
        while (i > last_idx + 1 && page2.errors[i] === void 0) i -= 1;
        last_idx = i;
        const idx = page2.errors[i];
        if (idx == null) return void 0;
        return manifest2._.nodes[idx]?.().then((e3) => e3.component?.()).catch(() => void 0);
      }).filter((e3) => e3 !== null)
    );
  }
  return error_components;
}
__name(load_error_components, "load_error_components");
async function render_data(event, event_state, route, options2, manifest2, state2, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n2, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n2 == void 0 ? n2 : await manifest2._.nodes[n2]();
          return load_server_data({
            event: new_event,
            event_state,
            state: state2,
            node,
            parent: /* @__PURE__ */ __name(async () => {
              const data2 = {};
              for (let j = 0; j < i; j += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j]()
                );
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            }, "parent")
          });
        } catch (e3) {
          aborted = true;
          throw e3;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch(async (error22) => {
          if (error22 instanceof Redirect) {
            throw error22;
          }
          length = Math.min(length, i + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, event_state, options2, error22),
              status: error22 instanceof HttpError || error22 instanceof SvelteKitError ? error22.status : void 0
            }
          );
        })
      )
    );
    const data_serializer = server_data_serializer_json(event, event_state, options2);
    for (let i = 0; i < nodes.length; i++) data_serializer.add_node(i, nodes[i]);
    const { data, chunks } = data_serializer.get_data();
    if (!chunks) {
      return json_response(data);
    }
    return new Response(
      new ReadableStream({
        async start(controller2) {
          controller2.enqueue(text_encoder.encode(data));
          for await (const chunk of chunks) {
            controller2.enqueue(text_encoder.encode(chunk));
          }
          controller2.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e3) {
    const error22 = normalize_error(e3);
    if (error22 instanceof Redirect) {
      return redirect_json_response(error22);
    } else {
      return json_response(await handle_error_and_jsonify(event, event_state, options2, error22), 500);
    }
  }
}
__name(render_data, "render_data");
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
__name(json_response, "json_response");
function redirect_json_response(redirect) {
  return json_response(
    /** @type {import('types').ServerRedirectNode} */
    {
      type: "redirect",
      location: redirect.location
    }
  );
}
__name(redirect_json_response, "redirect_json_response");
var INVALID_COOKIE_CHARACTER_REGEX = /[\x00-\x1F\x7F()<>@,;:"/[\]?={} \t]/;
function validate_options(options2) {
  if (options2?.path === void 0) {
    throw new Error("You must specify a `path` when setting, deleting or serializing cookies");
  }
}
__name(validate_options, "validate_options");
function generate_cookie_key(domain, path, name) {
  return `${domain || ""}${path}?${encodeURIComponent(name)}`;
}
__name(generate_cookie_key, "generate_cookie_key");
function get_cookies(request, url) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header, { decode: /* @__PURE__ */ __name((value) => value, "decode") });
  let normalized_url;
  const new_cookies = /* @__PURE__ */ new Map();
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('@sveltejs/kit').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} [opts]
     */
    get(name, opts) {
      const best_match = Array.from(new_cookies.values()).filter((c2) => {
        return c2.name === name && domain_matches(url.hostname, c2.options.domain) && path_matches(url.pathname, c2.options.path);
      }).sort((a, b) => b.options.path.length - a.options.path.length)[0];
      if (best_match) {
        return best_match.options.maxAge === 0 ? void 0 : best_match.value;
      }
      const req_cookies = (0, import_cookie.parse)(header, { decode: opts?.decode });
      const cookie = req_cookies[name];
      return cookie;
    },
    /**
     * @param {import('cookie').CookieParseOptions} [opts]
     */
    getAll(opts) {
      const cookies2 = (0, import_cookie.parse)(header, { decode: opts?.decode });
      const lookup = /* @__PURE__ */ new Map();
      for (const c2 of new_cookies.values()) {
        if (domain_matches(url.hostname, c2.options.domain) && path_matches(url.pathname, c2.options.path)) {
          const existing = lookup.get(c2.name);
          if (!existing || c2.options.path.length > existing.options.path.length) {
            lookup.set(c2.name, c2);
          }
        }
      }
      for (const c2 of lookup.values()) {
        cookies2[c2.name] = c2.value;
      }
      return Object.entries(cookies2).map(([name, value]) => ({ name, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('./page/types.js').Cookie['options']} options
     */
    set(name, value, options2) {
      const illegal_characters = name.match(INVALID_COOKIE_CHARACTER_REGEX);
      if (illegal_characters) {
        console.warn(
          `The cookie name "${name}" will be invalid in SvelteKit 3.0 as it contains ${illegal_characters.join(
            " and "
          )}. See RFC 2616 for more details https://datatracker.ietf.org/doc/html/rfc2616#section-2.2`
        );
      }
      validate_options(options2);
      set_internal(name, value, { ...defaults, ...options2 });
    },
    /**
     * @param {string} name
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    delete(name, options2) {
      validate_options(options2);
      cookies.set(name, "", { ...options2, maxAge: 0 });
    },
    /**
     * @param {string} name
     * @param {string} value
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    serialize(name, value, options2) {
      validate_options(options2);
      let path = options2.path;
      if (!options2.domain || options2.domain === url.hostname) {
        if (!normalized_url) {
          throw new Error("Cannot serialize cookies until after the route is determined");
        }
        path = resolve(normalized_url, path);
      }
      return (0, import_cookie.serialize)(name, value, { ...defaults, ...options2, path });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const cookie of new_cookies.values()) {
      if (!domain_matches(destination.hostname, cookie.options.domain)) continue;
      if (!path_matches(destination.pathname, cookie.options.path)) continue;
      const encoder = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder(cookie.value);
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2, { decode: /* @__PURE__ */ __name((value) => value, "decode") });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  __name(get_cookie_header, "get_cookie_header");
  const internal_queue = [];
  function set_internal(name, value, options2) {
    if (!normalized_url) {
      internal_queue.push(() => set_internal(name, value, options2));
      return;
    }
    let path = options2.path;
    if (!options2.domain || options2.domain === url.hostname) {
      path = resolve(normalized_url, path);
    }
    const cookie_key = generate_cookie_key(options2.domain, path, name);
    const cookie = { name, value, options: { ...options2, path } };
    new_cookies.set(cookie_key, cookie);
  }
  __name(set_internal, "set_internal");
  function set_trailing_slash(trailing_slash) {
    normalized_url = normalize_path(url.pathname, trailing_slash);
    internal_queue.forEach((fn) => fn());
  }
  __name(set_trailing_slash, "set_trailing_slash");
  return { cookies, new_cookies, get_cookie_header, set_internal, set_trailing_slash };
}
__name(get_cookies, "get_cookies");
function domain_matches(hostname, constraint) {
  if (!constraint) return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized) return true;
  return hostname.endsWith("." + normalized);
}
__name(domain_matches, "domain_matches");
function path_matches(path, constraint) {
  if (!constraint) return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized) return true;
  return path.startsWith(normalized + "/");
}
__name(path_matches, "path_matches");
function add_cookies_to_headers(headers2, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers2.append("set-cookie", (0, import_cookie.serialize)(name, value, options2));
    if (options2.path.endsWith(".html")) {
      const path = add_data_suffix2(options2.path);
      headers2.append("set-cookie", (0, import_cookie.serialize)(name, value, { ...options2, path }));
    }
  }
}
__name(add_cookies_to_headers, "add_cookies_to_headers");
function create_fetch({ event, options: options2, manifest: manifest2, state: state2, get_cookie_header, set_internal }) {
  const server_fetch = /* @__PURE__ */ __name(async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: /* @__PURE__ */ __name(async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        const decoded = decodeURIComponent(url.pathname);
        if (url.origin !== event.url.origin || base && decoded !== base && !decoded.startsWith(`${base}/`)) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie) request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        const prefix = assets || base;
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename) || filename in manifest2._.server_assets;
        const is_asset_html = manifest2.assets.has(filename_html) || filename_html in manifest2._.server_assets;
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (state2.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state2.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          } else if (read_implementation && file in manifest2._.server_assets) {
            const length = manifest2._.server_assets[file];
            const type = manifest2.mimeTypes[file.slice(file.lastIndexOf("."))];
            return new Response(read_implementation(file), {
              headers: {
                "Content-Length": "" + length,
                "Content-Type": type
              }
            });
          }
          return await fetch(request);
        }
        if (has_prerendered_path(manifest2, base + decoded)) {
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        const response = await internal_fetch(request, options2, manifest2, state2);
        for (const str of get_set_cookies(response.headers)) {
          const { name, value, ...options3 } = parseString(str, {
            decodeValues: false
          });
          const path = options3.path ?? (url.pathname.split("/").slice(0, -1).join("/") || "/");
          set_internal(name, value, {
            path,
            encode: /* @__PURE__ */ __name((value2) => value2, "encode"),
            .../** @type {import('cookie').CookieSerializeOptions} */
            options3
          });
        }
        return response;
      }, "fetch")
    });
  }, "server_fetch");
  return (input, init2) => {
    const response = server_fetch(input, init2);
    response.catch(noop);
    return response;
  };
}
__name(create_fetch, "create_fetch");
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
__name(normalize_fetch_input, "normalize_fetch_input");
async function internal_fetch(request, options2, manifest2, state2) {
  if (request.signal) {
    if (request.signal.aborted) {
      throw new DOMException("The operation was aborted.", "AbortError");
    }
    let remove_abort_listener = noop;
    const abort_promise = new Promise((_, reject) => {
      const on_abort = /* @__PURE__ */ __name(() => {
        reject(new DOMException("The operation was aborted.", "AbortError"));
      }, "on_abort");
      request.signal.addEventListener("abort", on_abort, { once: true });
      remove_abort_listener = /* @__PURE__ */ __name(() => request.signal.removeEventListener("abort", on_abort), "remove_abort_listener");
    });
    const result = await Promise.race([
      respond(request, options2, manifest2, {
        ...state2,
        depth: state2.depth + 1
      }),
      abort_promise
    ]);
    remove_abort_listener();
    return result;
  } else {
    return await respond(request, options2, manifest2, {
      ...state2,
      depth: state2.depth + 1
    });
  }
}
__name(internal_fetch, "internal_fetch");
var payload;
var etag;
var headers;
function get_public_env(request) {
  const script = request.url.endsWith(".script.js");
  const env2 = public_env;
  payload ??= uneval(env2);
  etag ??= `W/${Date.now()}`;
  headers ??= new Headers({
    "content-type": "application/javascript; charset=utf-8",
    etag
  });
  if (request.headers.get("if-none-match") === etag) {
    return new Response(void 0, { status: 304, headers });
  }
  if (script) {
    return new Response(`globalThis.__sveltekit_sw={env:${payload}}`, { headers });
  }
  return new Response(`export const env=${payload}`, { headers });
}
__name(get_public_env, "get_public_env");
var default_transform = /* @__PURE__ */ __name(({ html: html2 }) => html2, "default_transform");
var default_filter = /* @__PURE__ */ __name(() => false, "default_filter");
var default_preload = /* @__PURE__ */ __name(({ type }) => type === "js" || type === "css", "default_preload");
var page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "POST"]);
var allowed_page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "OPTIONS"]);
var respond = propagate_context(internal_respond);
async function internal_respond(request, options2, manifest2, state2) {
  const url = new URL(request.url);
  const is_route_resolution_request = has_resolution_suffix2(url.pathname);
  const is_data_request = has_data_suffix2(url.pathname);
  const remote_id = get_remote_id(url);
  {
    const request_origin = request.headers.get("origin");
    if (remote_id) {
      if (request.method !== "GET" && request_origin !== url.origin) {
        const message = "Cross-site remote requests are forbidden";
        return json({ message }, { status: 403 });
      }
    } else if (options2.csrf_check_origin) {
      const forbidden = is_form_content_type(request) && (request.method === "POST" || request.method === "PUT" || request.method === "PATCH" || request.method === "DELETE") && request_origin !== url.origin && (!request_origin || !options2.csrf_trusted_origins.includes(request_origin));
      if (forbidden) {
        const message = `Cross-site ${request.method} form submissions are forbidden`;
        const opts = { status: 403 };
        if (request.headers.get("accept") === "application/json") {
          return json({ message }, opts);
        }
        return text(message, opts);
      }
    }
  }
  if (options2.hash_routing && url.pathname !== base + "/" && url.pathname !== "/[fallback]") {
    return text("Not found", { status: 404 });
  }
  let invalidated_data_nodes;
  if (is_route_resolution_request) {
    url.pathname = strip_resolution_suffix2(url.pathname);
  } else if (is_data_request) {
    url.pathname = strip_data_suffix2(url.pathname) + (url.searchParams.get(TRAILING_SLASH_PARAM) === "1" ? "/" : "") || "/";
    url.searchParams.delete(TRAILING_SLASH_PARAM);
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("").map((node) => node === "1");
    url.searchParams.delete(INVALIDATED_PARAM);
  } else if (remote_id) {
    url.pathname = request.headers.get("x-sveltekit-pathname") ?? base;
    url.search = request.headers.get("x-sveltekit-search") ?? "";
  }
  const headers2 = {};
  const { cookies, new_cookies, get_cookie_header, set_internal, set_trailing_slash } = get_cookies(
    request,
    url
  );
  const event_state = {
    prerendering: state2.prerendering,
    transport: options2.hooks.transport,
    handleValidationError: options2.hooks.handleValidationError,
    tracing: {
      record_span
    },
    remote: {
      data: null,
      explicit: null,
      implicit: null,
      forms: null,
      requested: null,
      batches: null,
      live_iterators: null
    },
    is_in_remote_function: false,
    is_in_remote_form_or_command: false,
    is_in_remote_query: false,
    is_in_render: false,
    is_in_universal_load: false
  };
  const event = {
    cookies,
    // @ts-expect-error `fetch` needs to be created after the `event` itself
    fetch: null,
    getClientAddress: state2.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-cloudflare"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params: {},
    platform: state2.platform,
    request,
    route: { id: null },
    setHeaders: /* @__PURE__ */ __name((new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            "Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies"
          );
        } else if (lower in headers2) {
          if (lower === "server-timing") {
            headers2[lower] += ", " + value;
          } else {
            throw new Error(`"${key2}" header is already set`);
          }
        } else {
          headers2[lower] = value;
          if (state2.prerendering && lower === "cache-control") {
            state2.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    }, "setHeaders"),
    url,
    isDataRequest: is_data_request,
    isSubRequest: state2.depth > 0,
    isRemoteRequest: !!remote_id
  };
  event.fetch = create_fetch({
    event,
    options: options2,
    manifest: manifest2,
    state: state2,
    get_cookie_header,
    set_internal
  });
  if (state2.emulator?.platform) {
    event.platform = await state2.emulator.platform({
      config: {},
      prerender: !!state2.prerendering?.fallback
    });
  }
  let resolved_path = url.pathname;
  if (!remote_id) {
    const prerendering_reroute_state = state2.prerendering?.inside_reroute;
    try {
      if (state2.prerendering) state2.prerendering.inside_reroute = true;
      resolved_path = await options2.hooks.reroute({ url: new URL(url), fetch: event.fetch }) ?? url.pathname;
    } catch {
      return text("Internal Server Error", {
        status: 500
      });
    } finally {
      if (state2.prerendering) state2.prerendering.inside_reroute = prerendering_reroute_state;
    }
  }
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  let trailing_slash = "never";
  let page_nodes;
  try {
    resolved_path = decode_pathname(resolved_path);
  } catch {
    resolved_path = null;
    return await handle2();
  }
  if (
    // the resolved path has been decoded so it should be compared to the decoded url pathname
    resolved_path !== decode_pathname(url.pathname) && !state2.prerendering?.fallback && has_prerendered_path(manifest2, resolved_path)
  ) {
    const url2 = new URL(request.url);
    url2.pathname = is_data_request ? add_data_suffix2(resolved_path) : is_route_resolution_request ? add_resolution_suffix2(resolved_path) : resolved_path;
    try {
      const response = await fetch(url2, request);
      const headers22 = new Headers(response.headers);
      if (headers22.has("content-encoding")) {
        headers22.delete("content-encoding");
        headers22.delete("content-length");
      }
      return new Response(response.body, {
        headers: headers22,
        status: response.status,
        statusText: response.statusText
      });
    } catch (error22) {
      return await handle_fatal_error(event, event_state, options2, error22);
    }
  }
  let route = null;
  if (base && !state2.prerendering?.fallback) {
    if (!resolved_path.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    resolved_path = resolved_path.slice(base.length) || "/";
  }
  if (is_route_resolution_request) {
    return resolve_route(resolved_path, new URL(request.url), manifest2);
  }
  if (resolved_path === `/${app_dir}/env.js` || resolved_path === `/${app_dir}/env.script.js`) {
    return get_public_env(request);
  }
  if (!remote_id && resolved_path.startsWith(`/${app_dir}`)) {
    const headers22 = new Headers();
    headers22.set("cache-control", "public, max-age=0, must-revalidate");
    return text("Not found", { status: 404, headers: headers22 });
  }
  if (!state2.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    const result = find_route(resolved_path, manifest2._.routes, matchers);
    if (result) {
      route = result.route;
      event.route = { id: route.id };
      event.params = result.params;
    }
  }
  try {
    page_nodes = route?.page ? new PageNodes(await load_page_nodes(route.page, manifest2)) : void 0;
    if (route && !remote_id) {
      if (url.pathname === base || url.pathname === base + "/") {
        trailing_slash = "always";
      } else if (page_nodes) {
        if (browser) ;
        trailing_slash = page_nodes.trailing_slash();
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash ?? "never";
        if (browser) ;
      }
      if (!is_data_request) {
        const normalized = normalize_path(url.pathname, trailing_slash);
        if (normalized !== url.pathname && !state2.prerendering?.fallback) {
          return new Response(void 0, {
            status: 308,
            headers: {
              "x-sveltekit-normalize": "1",
              location: (
                // ensure paths starting with '//' are not treated as protocol-relative
                (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
              )
            }
          });
        }
      }
      if (state2.before_handle || state2.emulator?.platform) {
        let config = {};
        let prerender = false;
        if (route.endpoint) {
          const node = await route.endpoint();
          config = node.config ?? config;
          prerender = node.prerender ?? prerender;
        } else if (page_nodes) {
          config = page_nodes.get_config() ?? config;
          prerender = page_nodes.prerender();
        }
        if (state2.emulator?.platform) {
          event.platform = await state2.emulator.platform({ config, prerender });
        }
        if (state2.before_handle) {
          return await state2.before_handle(event, config, prerender, handle2);
        }
      }
    }
    return await handle2();
  } catch (e3) {
    if (e3 instanceof Redirect) {
      try {
        const response = is_data_request || remote_id ? redirect_json_response(e3) : route?.page && is_action_json_request(event) ? action_json_redirect(e3) : redirect_response(e3.status, e3.location);
        add_cookies_to_headers(response.headers, new_cookies.values());
        return response;
      } catch (err) {
        return await handle_fatal_error(event, event_state, options2, err);
      }
    }
    return await handle_fatal_error(event, event_state, options2, e3);
  }
  async function handle2() {
    set_trailing_slash(trailing_slash);
    if (state2.prerendering && !state2.prerendering.fallback && !state2.prerendering.inside_reroute) {
      disable_search(url);
    }
    const response = await record_span({
      name: "sveltekit.handle.root",
      attributes: {
        "http.route": event.route.id || "unknown",
        "http.method": event.request.method,
        "http.url": event.url.href,
        "sveltekit.is_sub_request": event.isSubRequest
      },
      fn: /* @__PURE__ */ __name(async (root_span) => {
        const traced_event = {
          ...event,
          tracing: {
            enabled: false,
            root: root_span,
            current: root_span
          }
        };
        return await with_request_store(
          { event: traced_event, state: event_state },
          () => options2.hooks.handle({
            event: traced_event,
            resolve: /* @__PURE__ */ __name((event2, opts) => {
              return record_span({
                name: "sveltekit.resolve",
                attributes: {
                  "http.route": event2.route.id || "unknown"
                },
                fn: /* @__PURE__ */ __name((resolve_span) => {
                  return with_request_store(
                    null,
                    () => resolve2(merge_tracing(event2, resolve_span), page_nodes, opts).then(
                      (response2) => {
                        for (const key2 in headers2) {
                          const value = headers2[key2];
                          response2.headers.set(
                            key2,
                            /** @type {string} */
                            value
                          );
                        }
                        add_cookies_to_headers(response2.headers, new_cookies.values());
                        if (state2.prerendering && event2.route.id !== null) {
                          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
                        }
                        resolve_span.setAttributes({
                          "http.response.status_code": response2.status,
                          "http.response.body.size": response2.headers.get("content-length") || "unknown"
                        });
                        return response2;
                      }
                    )
                  );
                }, "fn")
              });
            }, "resolve")
          })
        );
      }, "fn")
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag2 = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag2) {
        const headers22 = new Headers({ etag: etag2 });
        for (const key2 of ["cache-control", "content-location", "date", "expires", "vary"]) {
          const value = response.headers.get(key2);
          if (value) headers22.set(key2, value);
        }
        for (const cookie of get_set_cookies(response.headers)) {
          headers22.append("set-cookie", cookie);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers22
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  }
  __name(handle2, "handle");
  async function resolve2(event2, page_nodes2, opts) {
    try {
      if (opts) {
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (resolved_path === null) {
        return await respond_with_error({
          event: event2,
          event_state,
          options: options2,
          manifest: manifest2,
          state: state2,
          status: 400,
          error: new SvelteKitError(
            400,
            "Malformed URI",
            `Failed to decode URI: ${event2.url.pathname}`
          ),
          resolve_opts
        });
      }
      if (options2.hash_routing || state2.prerendering?.fallback) {
        return await render_response({
          event: event2,
          event_state,
          options: options2,
          manifest: manifest2,
          state: state2,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [
            // include the root layout because it applies to every page
            {
              node: (
                /** @type {SSRNode} */
                await manifest2._.nodes[0]()
              ),
              data: null,
              server_data: null
            }
          ],
          fetched: [],
          resolve_opts,
          data_serializer: server_data_serializer(event2, event_state, options2)
        });
      }
      if (remote_id) {
        return await handle_remote_call(event2, event_state, options2, manifest2, remote_id);
      }
      if (route) {
        const method = (
          /** @type {import('types').HttpMethod} */
          event2.request.method
        );
        let response2;
        if (is_data_request) {
          response2 = await render_data(
            event2,
            event_state,
            route,
            options2,
            manifest2,
            state2,
            invalidated_data_nodes,
            trailing_slash
          );
        } else if (route.endpoint && (!route.page || !state2.prerendering && is_endpoint_request(event2))) {
          response2 = await render_endpoint(event2, event_state, await route.endpoint(), state2);
        } else if (route.page) {
          if (!page_nodes2) {
            throw new Error("page_nodes not found. This should never happen");
          } else if (page_methods.has(method)) {
            response2 = await render_page(
              event2,
              event_state,
              route.page,
              options2,
              manifest2,
              state2,
              page_nodes2,
              resolve_opts
            );
          } else {
            const allowed_methods2 = new Set(allowed_page_methods);
            const node = await manifest2._.nodes[route.page.leaf]();
            if (node?.server?.actions) {
              allowed_methods2.add("POST");
            }
            if (method === "OPTIONS") {
              response2 = new Response(null, {
                status: 204,
                headers: {
                  allow: Array.from(allowed_methods2.values()).join(", ")
                }
              });
            } else {
              const mod = [...allowed_methods2].reduce(
                (acc, curr) => {
                  acc[curr] = true;
                  return acc;
                },
                /** @type {Record<string, any>} */
                {}
              );
              response2 = method_not_allowed(mod, method);
            }
          }
        } else {
          throw new Error("Route is neither page nor endpoint. This should never happen");
        }
        if (request.method === "GET" && route.page && route.endpoint) {
          const vary = response2.headers.get("vary")?.split(",")?.map((v) => v.trim().toLowerCase());
          if (!(vary?.includes("accept") || vary?.includes("*"))) {
            response2 = new Response(response2.body, {
              status: response2.status,
              statusText: response2.statusText,
              headers: new Headers(response2.headers)
            });
            response2.headers.append("Vary", "Accept");
          }
        }
        return response2;
      }
      if (state2.error && event2.isSubRequest) {
        const headers22 = new Headers(request.headers);
        headers22.set("x-sveltekit-error", "true");
        return await fetch(request, { headers: headers22 });
      }
      if (state2.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state2.depth === 0) {
        return await respond_with_error({
          event: event2,
          event_state,
          options: options2,
          manifest: manifest2,
          state: state2,
          status: 404,
          error: new SvelteKitError(404, "Not Found", `Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state2.prerendering) {
        return text("not found", { status: 404 });
      }
      const response = await fetch(request);
      return new Response(response.body, response);
    } catch (e3) {
      return await handle_fatal_error(event2, event_state, options2, e3);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
  __name(resolve2, "resolve2");
}
__name(internal_respond, "internal_respond");
function load_page_nodes(page2, manifest2) {
  return Promise.all([
    // we use == here rather than === because [undefined] serializes as "[null]"
    ...page2.layouts.map((n2) => n2 == void 0 ? n2 : manifest2._.nodes[n2]()),
    manifest2._.nodes[page2.leaf]()
  ]);
}
__name(load_page_nodes, "load_page_nodes");
function propagate_context(fn) {
  return async (req, ...rest) => {
    {
      return fn(req, ...rest);
    }
  };
}
__name(propagate_context, "propagate_context");
function filter_env(env2, allowed, disallowed) {
  return Object.fromEntries(
    Object.entries(env2).filter(
      ([k]) => k.startsWith(allowed) && (disallowed === "" || !k.startsWith(disallowed))
    )
  );
}
__name(filter_env, "filter_env");
function set_app(value) {
}
__name(set_app, "set_app");
var init_promise;
var current = null;
var Server = class {
  static {
    __name(this, "Server");
  }
  /** @type {import('types').SSROptions} */
  #options;
  /** @type {import('@sveltejs/kit').SSRManifest} */
  #manifest;
  /** @param {import('@sveltejs/kit').SSRManifest} manifest */
  constructor(manifest2) {
    this.#options = options;
    this.#manifest = manifest2;
    if (IN_WEBCONTAINER2) {
      const respond2 = this.respond.bind(this);
      this.respond = async (...args) => {
        const { promise, resolve: resolve2 } = (
          /** @type {PromiseWithResolvers<void>} */
          with_resolvers()
        );
        const previous = current;
        current = promise;
        await previous;
        return respond2(...args).finally(resolve2);
      };
    }
  }
  /**
   * @param {import('@sveltejs/kit').ServerInitOptions} opts
   */
  async init({ env: env2, read }) {
    const { env_public_prefix, env_private_prefix } = this.#options;
    set_private_env(filter_env(env2, env_private_prefix, env_public_prefix));
    set_public_env(filter_env(env2, env_public_prefix, env_private_prefix));
    if (read) {
      const wrapped_read = /* @__PURE__ */ __name((file) => {
        const result = read(file);
        if (result instanceof ReadableStream) {
          return result;
        } else {
          return new ReadableStream({
            async start(controller2) {
              try {
                const stream = await Promise.resolve(result);
                if (!stream) {
                  controller2.close();
                  return;
                }
                const reader = stream.getReader();
                while (true) {
                  const { done, value } = await reader.read();
                  if (done) break;
                  controller2.enqueue(value);
                }
                controller2.close();
              } catch (error22) {
                controller2.error(error22);
              }
            }
          });
        }
      }, "wrapped_read");
      set_read_implementation(wrapped_read);
    }
    await (init_promise ??= (async () => {
      try {
        const module = await get_hooks();
        this.#options.hooks = {
          handle: module.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
          handleError: module.handleError || (({ status, error: error22, event }) => {
            const error_message = format_server_error(
              status,
              /** @type {Error} */
              error22,
              event
            );
            console.error(error_message);
          }),
          handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request)),
          handleValidationError: module.handleValidationError || (({ issues }) => {
            console.error("Remote function schema validation failed:", issues);
            return { message: "Bad Request" };
          }),
          reroute: module.reroute || noop,
          transport: module.transport || {}
        };
        set_app({
          decoders: module.transport ? Object.fromEntries(Object.entries(module.transport).map(([k, v]) => [k, v.decode])) : {}
        });
        if (module.init) {
          await module.init();
        }
      } catch (e3) {
        {
          throw e3;
        }
      }
    })());
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    return respond(request, this.#options, this.#manifest, {
      ...options2,
      error: false,
      depth: 0
    });
  }
};

// .svelte-kit/cloudflare-tmp/manifest.js
init_modules_watch_stub();
var manifest = (() => {
  function __memo(fn) {
    let value;
    return () => value ??= value = fn();
  }
  __name(__memo, "__memo");
  return {
    appDir: "_app",
    appPath: "_app",
    assets: /* @__PURE__ */ new Set(["favicon.svg"]),
    mimeTypes: { ".svg": "image/svg+xml" },
    _: {
      client: { start: "_app/immutable/entry/start.BigukYIe.js", app: "_app/immutable/entry/app.DIQi0N4S.js", imports: ["_app/immutable/entry/start.BigukYIe.js", "_app/immutable/chunks/DmMEkFma.js", "_app/immutable/chunks/nidF8yIj.js", "_app/immutable/chunks/BS_TTt1R.js", "_app/immutable/entry/app.DIQi0N4S.js", "_app/immutable/chunks/nidF8yIj.js", "_app/immutable/chunks/DCdaCEBk.js", "_app/immutable/chunks/BS_TTt1R.js", "_app/immutable/chunks/CoAffLjH.js", "_app/immutable/chunks/4J4uoJNn.js", "_app/immutable/chunks/BLCDGXvv.js"], stylesheets: [], fonts: [], uses_env_dynamic_public: false },
      nodes: [
        __memo(() => Promise.resolve().then(() => (init__(), __exports))),
        __memo(() => Promise.resolve().then(() => (init__2(), __exports2))),
        __memo(() => Promise.resolve().then(() => (init__3(), __exports3))),
        __memo(() => Promise.resolve().then(() => (init__4(), __exports4)))
      ],
      remotes: {},
      routes: [
        {
          id: "/",
          pattern: /^\/$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 2 },
          endpoint: null
        },
        {
          id: "/download",
          pattern: /^\/download\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 3 },
          endpoint: null
        }
      ],
      prerendered_routes: /* @__PURE__ */ new Set([]),
      matchers: /* @__PURE__ */ __name(async () => {
        return {};
      }, "matchers"),
      server_assets: {}
    }
  };
})();
var prerendered = /* @__PURE__ */ new Set([]);
var base_path = "";

// .svelte-kit/cloudflare/_worker.js
import { env } from "cloudflare:workers";
async function e(e3, t22) {
  let n2 = "string" != typeof t22 && "HEAD" === t22.method;
  n2 && (t22 = new Request(t22, { method: "GET" }));
  let r3 = await e3.match(t22);
  return n2 && r3 && (r3 = new Response(null, r3)), r3;
}
__name(e, "e");
function t2(e3, t22, n2, o2) {
  return ("string" == typeof t22 || "GET" === t22.method) && r2(n2) && (n2.headers.has("Set-Cookie") && (n2 = new Response(n2.body, n2)).headers.append("Cache-Control", "private=Set-Cookie"), o2.waitUntil(e3.put(t22, n2.clone()))), n2;
}
__name(t2, "t");
var n = /* @__PURE__ */ new Set([200, 203, 204, 300, 301, 404, 405, 410, 414, 501]);
function r2(e3) {
  if (!n.has(e3.status)) return false;
  if (~(e3.headers.get("Vary") || "").indexOf("*")) return false;
  let t22 = e3.headers.get("Cache-Control") || "";
  return !/(private|no-cache|no-store)/i.test(t22);
}
__name(r2, "r");
function o(n2) {
  return async function(r3, o2) {
    let a = await e(n2, r3);
    if (a) return a;
    o2.defer(((e3) => {
      t2(n2, r3, e3, o2);
    }));
  };
}
__name(o, "o");
var s2 = caches.default;
var c = t2.bind(0, s2);
var r22 = e.bind(0, s2);
var e2 = o.bind(0, s2);
var server = new Server(manifest);
var app_path = `/${manifest.appPath}`;
var immutable = `${app_path}/immutable/`;
var version_file = `${app_path}/version.json`;
var origin;
var initialized = server.init({
  // @ts-expect-error env contains environment variables and bindings
  env,
  read: /* @__PURE__ */ __name(async (file) => {
    const url = `${origin}/${file}`;
    const response = await /** @type {{ ASSETS: { fetch: typeof fetch } }} */
    env.ASSETS.fetch(
      url
    );
    if (!response.ok) {
      throw new Error(
        `read(...) failed: could not fetch ${url} (${response.status} ${response.statusText})`
      );
    }
    return response.body;
  }, "read")
});
var worker_default = {
  /**
   * @param {Request} req
   * @param {{ ASSETS: { fetch: typeof fetch } }} env
   * @param {ExecutionContext} ctx
   * @returns {Promise<Response>}
   */
  async fetch(req, env2, ctx) {
    if (!origin) {
      origin = new URL(req.url).origin;
    }
    await initialized;
    let pragma = req.headers.get("cache-control") || "";
    let res = !pragma.includes("no-cache") && await r22(req);
    if (res) return res;
    let { pathname, search } = new URL(req.url);
    try {
      pathname = decodeURIComponent(pathname);
    } catch {
    }
    const stripped_pathname = pathname.replace(/\/$/, "");
    let is_static_asset = false;
    const filename = stripped_pathname.slice(base_path.length + 1);
    if (filename) {
      is_static_asset = manifest.assets.has(filename) || manifest.assets.has(filename + "/index.html") || filename in manifest._.server_assets || filename + "/index.html" in manifest._.server_assets;
    }
    let location = pathname.at(-1) === "/" ? stripped_pathname : pathname + "/";
    if (is_static_asset || prerendered.has(pathname) || pathname === version_file || pathname.startsWith(immutable)) {
      res = await env2.ASSETS.fetch(req);
    } else if (location && prerendered.has(location)) {
      if (search) location += search;
      res = new Response("", {
        status: 308,
        headers: {
          location
        }
      });
    } else {
      res = await server.respond(req, {
        platform: {
          env: env2,
          ctx,
          context: ctx,
          // deprecated in favor of ctx
          // @ts-expect-error webworker types from worktop are not compatible with Cloudflare Workers types
          caches,
          // @ts-expect-error the type is correct but ts is confused because platform.cf uses the type from index.ts while req.cf uses the type from index.d.ts
          cf: req.cf
        },
        getClientAddress() {
          return (
            /** @type {string} */
            req.headers.get("cf-connecting-ip")
          );
        }
      });
    }
    pragma = res.headers.get("cache-control") || "";
    return pragma && res.status < 400 ? c(req, res, ctx) : res;
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e3) {
      console.error("Failed to drain the unused request body.", e3);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
function reduceError(e3) {
  return {
    name: e3?.name,
    message: e3?.message ?? String(e3),
    stack: e3?.stack,
    cause: e3?.cause === void 0 ? void 0 : reduceError(e3.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e3) {
    const error3 = reduceError(e3);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-xOV5pf/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = worker_default;

// node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head2, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head2(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-xOV5pf/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init2) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller2 = new __Facade_ScheduledController__(
            Date.now(),
            init2.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller2, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init2) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller2 = new __Facade_ScheduledController__(
          Date.now(),
          init2.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller2);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=_worker.js.map
