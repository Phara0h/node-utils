# node-utils


## Current Benchmarks (11/27/19)

```
MacBook Pro (15-inch, 2018) v10.15 (19A603)
2.6 GHz 6-Core Intel Core i7
32 GB 2400 MHz DDR4

┌────────────────────────┬─────────────────────────────┬────────────────────────────────┐
│ Name                   │ Node-Utils                  │ Old                            │
├────────────────────────┼─────────────────────────────┼────────────────────────────────┤
│ Get-Lodash             │ 4234345 ops/s | +422.22%    │ 810835 ops/s | x5.22 slower    │
├────────────────────────┼─────────────────────────────┼────────────────────────────────┤
│ Set-Lodash             │ 3179749 ops/s | +527.10%    │ 507055 ops/s | x6.27 slower    │
├────────────────────────┼─────────────────────────────┼────────────────────────────────┤
│ toPath-Lodash          │ 578923 ops/s | +157.54%     │ 224788 ops/s | x2.58 slower    │
├────────────────────────┼─────────────────────────────┼────────────────────────────────┤
│ isObject-Lodash        │ 925387752 ops/s | +0.10%    │ 924506336 ops/s | x1.00 slower │
├────────────────────────┼─────────────────────────────┼────────────────────────────────┤
│ snakeCase-Lodash       │ 11846262 ops/s | +353.94%   │ 2609630 ops/s | x4.54 slower   │
├────────────────────────┼─────────────────────────────┼────────────────────────────────┤
│ camelCase-Lodash       │ 7228157 ops/s | +272.86%    │ 1938551 ops/s | x3.73 slower   │
├────────────────────────┼─────────────────────────────┼────────────────────────────────┤
│ kebabCase-Lodash       │ 10954872 ops/s | +327.54%   │ 2562305 ops/s | x4.28 slower   │
├────────────────────────┼─────────────────────────────┼────────────────────────────────┤
│ Mapkeys-Lodash         │ 4058951 ops/s | +590.54%    │ 587798 ops/s | x6.91 slower    │
├────────────────────────┼─────────────────────────────┼────────────────────────────────┤
│ Mapkeys-AltMap         │ 4163350 ops/s | +149.15%    │ 1671015 ops/s | x2.49 slower   │
├────────────────────────┼─────────────────────────────┼────────────────────────────────┤
│ ForEach-Lodash         │ 33148953 ops/s | +3170.51%  │ 1013571 ops/s | x32.71 slower  │
├────────────────────────┼─────────────────────────────┼────────────────────────────────┤
│ Debounce-Lodash        │ 453294 ops/s | +50.37%      │ 301450 ops/s | x1.50 slower    │
├────────────────────────┼─────────────────────────────┼────────────────────────────────┤
│ Clone-Lodash           │ 204591656 ops/s | +1276.91% │ 14858709 ops/s | x13.77 slower │
├────────────────────────┼─────────────────────────────┼────────────────────────────────┤
│ CloneDeep-Lodash       │ 1447731 ops/s | +180.19%    │ 516701 ops/s | x2.80 slower    │
├────────────────────────┼─────────────────────────────┼────────────────────────────────┤
│ Request-RequestPromise │ 7593 ops/s | +1443.29%      │ 492 ops/s | x15.43 slower      │
└────────────────────────┴─────────────────────────────┴────────────────────────────────┘
```

## Documentation

## Classes

<dl>
<dt><a href="#Timer">Timer</a></dt>
<dd><p>Timer class for keeping accurate stop watch like time.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#debounce">debounce(func, [delay])</a> ⇒ <code>function</code></dt>
<dd><p>Creates a debounced function that delays invoking <code>func</code> until after <code>wait</code>
milliseconds have elapsed since the last time the debounced function was
invoked. The debounced function comes with a <code>cancel</code> method to cancel
delayed <code>func</code> invocations and a <code>flush</code> method to immediately invoke them.
Provide <code>options</code> to indicate whether <code>func</code> should be invoked on the
leading and/or trailing edge of the <code>wait</code> timeout. The <code>func</code> is invoked
with the last arguments provided to the debounced function. Subsequent
calls to the debounced function return the result of the last <code>func</code>
invocation.</p>
<p><strong>Note:</strong> If <code>leading</code> and <code>trailing</code> options are <code>true</code>, <code>func</code> is
invoked on the trailing edge of the timeout only if the debounced function
is invoked more than once during the <code>wait</code> timeout.</p>
<p>If <code>wait</code> is <code>0</code> and <code>leading</code> is <code>false</code>, <code>func</code> invocation is deferred
until to the next tick, similar to <code>setTimeout</code> with a timeout of <code>0</code>.</p>
<p>See <a href="https://css-tricks.com/debouncing-throttling-explained-examples/">David Corbacho&#39;s article</a>
for details over the differences between <code>_.debounce</code> and <code>_.throttle</code>.</p>
</dd>
<dt><a href="#forEach">forEach(collection, cb)</a> ⇒ <code>Array</code> | <code>Object</code></dt>
<dd><p>Iterates over elements of <code>collection</code> and invokes <code>iteratee</code> for each element.
The iteratee is invoked with three arguments: (value, index|key, collection).
Iteratee functions may exit iteration early by explicitly returning <code>false</code>.</p>
</dd>
<dt><a href="#get">get(object, path, [defaultReturn])</a> ⇒ <code>*</code></dt>
<dd><p>Gets the value at <code>path</code> of <code>object</code>. If the resolved value is
<code>undefined</code>, the <code>defaultValue</code> is returned in its place.</p>
</dd>
<dt><a href="#isArray">isArray(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if <code>value</code> is classified as an <code>Array</code> object.</p>
</dd>
<dt><a href="#isEmpty">isEmpty(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if <code>value</code> is an empty object or array</p>
<p>Objects are considered empty if they have no own enumerable string keyed
properties.</p>
</dd>
<dt><a href="#isObject">isObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if <code>value</code> is the
<a href="http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types">language type</a>
of <code>Object</code>. (e.g. arrays, functions, objects, regexes, <code>new Number(0)</code>, and <code>new String(&#39;&#39;)</code>)</p>
</dd>
<dt><a href="#kebabCase">kebabCase([str])</a> ⇒ <code>string</code></dt>
<dd><p>Converts <code>string</code> to
<a href="https://en.wikipedia.org/wiki/Letter_case#Special_case_styles">kebab case</a>.</p>
</dd>
<dt><a href="#keysToCamel">keysToCamel(o)</a> ⇒ <code>string</code></dt>
<dd><p>Converts Object&#39;s keys from snake,kebab and space case to
<a href="https://en.wikipedia.org/wiki/CamelCase">camel case</a>.</p>
</dd>
<dt><a href="#mapKeys">mapKeys(object, iteratee)</a> ⇒ <code>Object</code></dt>
<dd><p>This method creates an object with the
same values as <code>object</code> and keys generated by running each own enumerable
string keyed property of <code>object</code> thru <code>iteratee</code>. The iteratee is invoked
with two arguments: (value, key).</p>
</dd>
<dt><a href="#set">set(object, path, value)</a> ⇒ <code>Object</code></dt>
<dd><p>Sets the value at <code>path</code> of <code>object</code>. If a portion of <code>path</code> doesn&#39;t exist,
it&#39;s created. Arrays are created for missing index properties while objects
are created for all other missing properties.</p>
<p><strong>Note:</strong> This method mutates <code>object</code>.</p>
</dd>
<dt><a href="#snakeCase">snakeCase([str])</a> ⇒ <code>string</code></dt>
<dd><p>Converts <code>string</code> to
<a href="https://en.wikipedia.org/wiki/Snake_case">snake case</a>.</p>
</dd>
<dt><a href="#toPath">toPath(value)</a> ⇒ <code>Array</code></dt>
<dd><p>Converts <code>value</code> to a property path array.</p>
</dd>
<dt><a href="#camelCase">camelCase([str])</a> ⇒ <code>string</code></dt>
<dd><p>Converts <code>string</code> to <a href="https://en.wikipedia.org/wiki/CamelCase">camel case</a>.</p>
</dd>
</dl>

<a name="Timer"></a>

## Timer
Timer class for keeping accurate stop watch like time.

**Kind**: global class  

* [Timer](#Timer)
    * [new Timer([startTime], [totalTime])](#new_Timer_new)
    * [.start()](#Timer+start) ⇒ [<code>Timer</code>](#Timer)
    * [.stop()](#Timer+stop) ⇒ [<code>Timer</code>](#Timer)
    * [.ns()](#Timer+ns) ⇒ <code>Number</code>
    * [.us()](#Timer+us) ⇒ <code>Number</code>
    * [.ms()](#Timer+ms) ⇒ <code>Number</code>

<a name="new_Timer_new"></a>

### new Timer([startTime], [totalTime])
Constructs a Timer instance.

**Returns**: [<code>Timer</code>](#Timer) - Returns the new Timer instance.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [startTime] | <code>BigInt</code> | <code>0</code> | the time the Timer started at. |
| [totalTime] | <code>BigInt</code> | <code>0</code> | the total time the Timer elapsed. |

<a name="Timer+start"></a>

### timer.start() ⇒ [<code>Timer</code>](#Timer)
Starts the stopwatch

**Kind**: instance method of [<code>Timer</code>](#Timer)  
**Returns**: [<code>Timer</code>](#Timer) - Returns it's self.  
<a name="Timer+stop"></a>

### timer.stop() ⇒ [<code>Timer</code>](#Timer)
Stops the stopwatch

**Kind**: instance method of [<code>Timer</code>](#Timer)  
**Returns**: [<code>Timer</code>](#Timer) - Returns it's self.  
<a name="Timer+ns"></a>

### timer.ns() ⇒ <code>Number</code>
Gets the elapsed time in nanoseconds.

**Kind**: instance method of [<code>Timer</code>](#Timer)  
**Returns**: <code>Number</code> - ns.  
<a name="Timer+us"></a>

### timer.us() ⇒ <code>Number</code>
Gets the elapsed time in microseconds.

**Kind**: instance method of [<code>Timer</code>](#Timer)  
**Returns**: <code>Number</code> - us.  
<a name="Timer+ms"></a>

### timer.ms() ⇒ <code>Number</code>
Gets the elapsed time in millieconds.

**Kind**: instance method of [<code>Timer</code>](#Timer)  
**Returns**: <code>Number</code> - ms.  
<a name="debounce"></a>

## debounce(func, [delay]) ⇒ <code>function</code>
Creates a debounced function that delays invoking `func` until after `wait`
milliseconds have elapsed since the last time the debounced function was
invoked. The debounced function comes with a `cancel` method to cancel
delayed `func` invocations and a `flush` method to immediately invoke them.
Provide `options` to indicate whether `func` should be invoked on the
leading and/or trailing edge of the `wait` timeout. The `func` is invoked
with the last arguments provided to the debounced function. Subsequent
calls to the debounced function return the result of the last `func`
invocation.

**Note:** If `leading` and `trailing` options are `true`, `func` is
invoked on the trailing edge of the timeout only if the debounced function
is invoked more than once during the `wait` timeout.

If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
until to the next tick, similar to `setTimeout` with a timeout of `0`.

See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
for details over the differences between `_.debounce` and `_.throttle`.

**Kind**: global function  
**Returns**: <code>function</code> - Returns the new debounced function.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| func | <code>function</code> |  | The function to debounce. |
| [delay] | <code>number</code> | <code>0</code> | The number of milliseconds to delay. |

**Example**  
```js
// Avoid costly calculations while the window size is in flux.
jQuery(window).on('resize', debounce(calculateLayout, 150));

// Invoke `sendMail` when clicked, debouncing subsequent calls.
jQuery(element).on('click', debounce(sendMail, 300, {
  'leading': true,
  'trailing': false
}));

// Ensure `batchLog` is invoked once after 1 second of debounced calls.
var debounced = debounce(batchLog, 250, { 'maxWait': 1000 });
var source = new EventSource('/stream');
jQuery(source).on('message', debounced);

// Cancel the trailing debounced invocation.
jQuery(window).on('popstate', debounced.cancel);
```
<a name="forEach"></a>

## forEach(collection, cb) ⇒ <code>Array</code> \| <code>Object</code>
Iterates over elements of `collection` and invokes `iteratee` for each element.
The iteratee is invoked with three arguments: (value, index|key, collection).
Iteratee functions may exit iteration early by explicitly returning `false`.

**Kind**: global function  
**Returns**: <code>Array</code> \| <code>Object</code> - Returns `collection`.  
**See**: _.forEachRight  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Array</code> \| <code>Object</code> | The collection to iterate over. |
| cb | <code>function</code> | The function invoked per iteration. |

**Example**  
```js
forEach([1, 2], function(value) {
  console.log(value);
});
// => Logs `1` then `2`.

forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).
```
<a name="get"></a>

## get(object, path, [defaultReturn]) ⇒ <code>\*</code>
Gets the value at `path` of `object`. If the resolved value is
`undefined`, the `defaultValue` is returned in its place.

**Kind**: global function  
**Returns**: <code>\*</code> - Returns the resolved value.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The object to query. |
| path | <code>Array</code> | The path of the property to get. |
| [defaultReturn] | <code>\*</code> | The value returned for `undefined` resolved values. |

**Example**  
```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };

get(object, 'a[0].b.c');
// => 3

get(object, ['a', '0', 'b', 'c']);
// => 3
```
<a name="isArray"></a>

## isArray(value) ⇒ <code>boolean</code>
Checks if `value` is classified as an `Array` object.

**Kind**: global function  
**Returns**: <code>boolean</code> - Returns `true` if `value` is an array, else `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isArray([1, 2, 3]);
// => true

isArray(document.body.children);
// => false

isArray('abc');
// => false

isArray(_.noop);
// => false
```
<a name="isEmpty"></a>

## isEmpty(value) ⇒ <code>boolean</code>
Checks if `value` is an empty object or array

Objects are considered empty if they have no own enumerable string keyed
properties.

**Kind**: global function  
**Returns**: <code>boolean</code> - Returns `true` if `value` is empty, else `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isEmpty({});
// => true

isEmpty([]);
// => true

isEmpty([1, 2, 3]);
// => false

isEmpty({ 'a': 1 });
// => false
```
<a name="isObject"></a>

## isObject(value) ⇒ <code>boolean</code>
Checks if `value` is the
[language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)

**Kind**: global function  
**Returns**: <code>boolean</code> - Returns `true` if `value` is an object, else `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

**Example**  
```js
isObject({});
// => true

isObject([1, 2, 3]);
// => true


isObject(null);
// => false
```
<a name="kebabCase"></a>

## kebabCase([str]) ⇒ <code>string</code>
Converts `string` to
[kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).

**Kind**: global function  
**Returns**: <code>string</code> - Returns the kebab cased string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [str] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The string to convert. |

**Example**  
```js
kebabCase('Foo Bar');
// => 'foo-bar'

kebabCase('fooBar');
// => 'foo-bar'

kebabCase('__FOO_BAR__');
// => 'foo-bar'
```
<a name="keysToCamel"></a>

## keysToCamel(o) ⇒ <code>string</code>
Converts Object's keys from snake,kebab and space case to
[camel case](https://en.wikipedia.org/wiki/CamelCase).

**Kind**: global function  
**Returns**: <code>string</code> - Returns the object with it's key's camelcased.  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>Object</code> | The object to convert. |

**Example**  
```js
keysToCamel({foo_bar:{bar_meme:20}})
// => {fooBar:{barMeme:20}}
```
<a name="mapKeys"></a>

## mapKeys(object, iteratee) ⇒ <code>Object</code>
This method creates an object with the
same values as `object` and keys generated by running each own enumerable
string keyed property of `object` thru `iteratee`. The iteratee is invoked
with two arguments: (value, key).

**Kind**: global function  
**Returns**: <code>Object</code> - Returns the new mapped object.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The object to iterate over. |
| iteratee | <code>function</code> | The function invoked per iteration. |

**Example**  
```js
mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
  return key + value;
});
// => { 'a1': 1, 'b2': 2 }
```
<a name="set"></a>

## set(object, path, value) ⇒ <code>Object</code>
Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
it's created. Arrays are created for missing index properties while objects
are created for all other missing properties.

**Note:** This method mutates `object`.

**Kind**: global function  
**Returns**: <code>Object</code> - Returns `object`.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The object to modify. |
| path | <code>Array</code> | The path of the property to set. |
| value | <code>\*</code> | The value to set. |

**Example**  
```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };

set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z);
// => 5
```
<a name="snakeCase"></a>

## snakeCase([str]) ⇒ <code>string</code>
Converts `string` to
[snake case](https://en.wikipedia.org/wiki/Snake_case).

**Kind**: global function  
**Returns**: <code>string</code> - Returns the snake cased string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [str] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The string to convert. |

**Example**  
```js
snakeCase('Foo Bar');
// => 'foo_bar'

snakeCase('fooBar');
// => 'foo_bar'

snakeCase('--FOO-BAR--');
// => 'foo_bar'
```
<a name="toPath"></a>

## toPath(value) ⇒ <code>Array</code>
Converts `value` to a property path array.

**Kind**: global function  
**Returns**: <code>Array</code> - Returns the new property path array.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | The value to convert. |

**Example**  
```js
toPath('a.b.c');
// => ['a', 'b', 'c']

toPath('a[0].b.c');
// => ['a', '0', 'b', 'c']
```
<a name="camelCase"></a>

## camelCase([str]) ⇒ <code>string</code>
Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).

**Kind**: global function  
**Returns**: <code>string</code> - Returns the camel cased string.  
**Category**: String  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [str] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The string to convert. |

**Example**  
```js
camelCase('Foo Bar');
// => 'fooBar'

camelCase('--foo-bar--');
// => 'fooBar'

camelCase('__FOO_BAR__');
// => 'fooBar'
```
