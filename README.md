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
<dt><a href="#PGActiveModel">PGActiveModel</a> ⇐ <code><a href="#PGEncryptModel">PGEncryptModel</a></code></dt>
<dd><p>Postgres Active Model class to extend a custom model from.</p>
</dd>
<dt><a href="#PGBaseModel">PGBaseModel</a></dt>
<dd><p>Postgres Base Model class to extend a custom model from.</p>
</dd>
<dt><a href="#PGConnecter">PGConnecter</a></dt>
<dd><p>Postgres Connecter to initialize the singleton for connection.</p>
</dd>
<dt><a href="#PGEncryptModel">PGEncryptModel</a> ⇐ <code><a href="#PGBaseModel">PGBaseModel</a></code></dt>
<dd><p>Postgres Encryption Model class to extend a custom model from.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#PGTypes">PGTypes</a></dt>
<dd><p>The types of fields for Postgres Models.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#camelCase">camelCase(str)</a> ⇒ <code>String</code></dt>
<dd><p>Converts <code>string</code> to <a href="https://en.wikipedia.org/wiki/CamelCase">camel case</a>.</p>
</dd>
<dt><a href="#clone">clone(value)</a> ⇒ <code>*</code></dt>
<dd><p>Creates a shallow clone of <code>value</code>.</p>
<p><strong>Note:</strong> Is just <code>Object.assign</code>, please use that instead of this.</p>
</dd>
<dt><a href="#cloneDeep">cloneDeep(value)</a> ⇒ <code>*</code></dt>
<dd><p>This method is like <code>clone</code> except that it recursively clones <code>value</code>.</p>
</dd>
<dt><a href="#cloneDeepWith">cloneDeepWith(value, [cb])</a> ⇒ <code>*</code></dt>
<dd><p>This method is like <code>cloneWith</code> except that it recursively clones <code>value</code>.</p>
</dd>
<dt><a href="#merge">merge(object, [...sources])</a> ⇒ <code>Object</code></dt>
<dd><p>This method is like <code>assign</code> except that it recursively merges own and
inherited enumerable string keyed properties of source objects into the
destination object. Source properties that resolve to <code>undefined</code> are
skipped if a destination value exists. Array and plain object properties
are merged recursively. Other objects and value types are overridden by
assignment. Source objects are applied from left to right. Subsequent
sources overwrite property assignments of previous sources.</p>
<p><strong>Note:</strong> This method mutates <code>object</code>.</p>
</dd>
<dt><a href="#debounce">debounce(func, delay)</a> ⇒ <code>function</code></dt>
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
<dt><a href="#isArray">isArray(value)</a> ⇒ <code>Boolean</code></dt>
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
<dt><a href="#kebabCase">kebabCase(str)</a> ⇒ <code>String</code></dt>
<dd><p>Converts <code>string</code> to
<a href="https://en.wikipedia.org/wiki/Letter_case#Special_case_styles">kebab case</a>.</p>
</dd>
<dt><a href="#keysToCamel">keysToCamel(o)</a> ⇒ <code>String</code></dt>
<dd><p>Converts Object&#39;s keys from snake,kebab and space case to
<a href="https://en.wikipedia.org/wiki/CamelCase">camel case</a>.</p>
</dd>
<dt><a href="#mapKeys">mapKeys(object, iteratee)</a> ⇒ <code>Object</code></dt>
<dd><p>This method creates an object with the
same values as <code>object</code> and keys generated by running each own enumerable
string keyed property of <code>object</code> thru <code>iteratee</code>. The iteratee is invoked
with two arguments: (value, key).</p>
</dd>
<dt><a href="#request">request(options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a HTTP/S Request to a given url.</p>
</dd>
<dt><a href="#set">set(object, path, value)</a> ⇒ <code>Object</code></dt>
<dd><p>Sets the value at <code>path</code> of <code>object</code>. If a portion of <code>path</code> doesn&#39;t exist,
it&#39;s created. Arrays are created for missing index properties while objects
are created for all other missing properties.</p>
<p><strong>Note:</strong> This method mutates <code>object</code>.</p>
</dd>
<dt><a href="#snakeCase">snakeCase(str)</a> ⇒ <code>String</code></dt>
<dd><p>Converts <code>string</code> to
<a href="https://en.wikipedia.org/wiki/Snake_case">snake case</a>.</p>
</dd>
<dt><a href="#toPath">toPath(value)</a> ⇒ <code>Array</code></dt>
<dd><p>Converts <code>value</code> to a property path array.</p>
</dd>
</dl>

<a name="Timer"></a>

## Timer
Timer class for keeping accurate stop watch like time.

**Kind**: global class  

* [Timer](#Timer)
    * [new Timer(startTime, totalTime)](#new_Timer_new)
    * [.start()](#Timer+start) ⇒ [<code>Timer</code>](#Timer)
    * [.stop()](#Timer+stop) ⇒ [<code>Timer</code>](#Timer)
    * [.ns()](#Timer+ns) ⇒ <code>Number</code>
    * [.us()](#Timer+us) ⇒ <code>Number</code>
    * [.ms()](#Timer+ms) ⇒ <code>Number</code>

<a name="new_Timer_new"></a>

### new Timer(startTime, totalTime)
Constructs a Timer instance.

**Returns**: [<code>Timer</code>](#Timer) - Returns the new Timer instance.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| startTime | <code>BigInt</code> | <code>0</code> | the time the Timer started at. |
| totalTime | <code>BigInt</code> | <code>0</code> | the total time the Timer elapsed. |

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
<a name="PGActiveModel"></a>

## PGActiveModel ⇐ [<code>PGEncryptModel</code>](#PGEncryptModel)
Postgres Active Model class to extend a custom model from.

**Kind**: global class  
**Extends**: [<code>PGEncryptModel</code>](#PGEncryptModel)  

* [PGActiveModel](#PGActiveModel) ⇐ [<code>PGEncryptModel</code>](#PGEncryptModel)
    * _instance_
        * [.addProperty(name, value)](#PGActiveModel+addProperty)
        * [.find()](#PGActiveModel+find) ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
        * [.delete()](#PGActiveModel+delete) ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
        * [.create()](#PGActiveModel+create) ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
        * [.save()](#PGActiveModel+save) ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
        * [.update()](#PGActiveModel+update) ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
        * [.decrypt(...props)](#PGActiveModel+decrypt) ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
        * [.encrypt(...props)](#PGActiveModel+encrypt) ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
        * [.redactSensitiveData(redactionCensor)](#PGActiveModel+redactSensitiveData) ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
        * [.getEncryptedProfile()](#PGActiveModel+getEncryptedProfile) ⇒ <code>String</code>
    * _static_
        * [.create(model)](#PGActiveModel.create) ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
        * [.findById(id)](#PGActiveModel.findById) ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
        * [.findLimtedBy(fieldValues, operator, limit)](#PGActiveModel.findLimtedBy) ⇒ [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel)
        * [.findAllBy(fieldValues, operator)](#PGActiveModel.findAllBy) ⇒ [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel)
        * [.findAll()](#PGActiveModel.findAll) ⇒ [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel)
        * [.deleteById(id)](#PGActiveModel.deleteById) ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
        * [.deleteLimitedBy(fieldValues, operator, limit)](#PGActiveModel.deleteLimitedBy) ⇒ [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel)
        * [.deleteAllBy(fieldValues, operator)](#PGActiveModel.deleteAllBy) ⇒ [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel)
        * [.updateById(id, model, returnModel)](#PGActiveModel.updateById) ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
        * [.updateLimitedBy(fieldValues, model, operator, returnModel, limit)](#PGActiveModel.updateLimitedBy) ⇒ [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel)
        * [.updateAllBy(fieldValues, model, operator, returnModel)](#PGActiveModel.updateAllBy) ⇒ [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel)
        * [.updateAll(model)](#PGActiveModel.updateAll) ⇒ [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel)

<a name="PGActiveModel+addProperty"></a>

### pgActiveModel.addProperty(name, value)
Adds a property to this model that does not affect it from a database perspective.

**Kind**: instance method of [<code>PGActiveModel</code>](#PGActiveModel)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name of the property. |
| value | <code>Any</code> | The the value to set the property. |

<a name="PGActiveModel+find"></a>

### pgActiveModel.find() ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
Retrieves the current model by its set field with type `PGTypes.PK`

**Kind**: instance method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: [<code>PGActiveModel</code>](#PGActiveModel) - Returns it's self.  
<a name="PGActiveModel+delete"></a>

### pgActiveModel.delete() ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
Deletes the current model by its set field with type `PGTypes.PK`

**Kind**: instance method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: [<code>PGActiveModel</code>](#PGActiveModel) - Returns it's self.  
<a name="PGActiveModel+create"></a>

### pgActiveModel.create() ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
Creates a new row with the currently set properties.

**Kind**: instance method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: [<code>PGActiveModel</code>](#PGActiveModel) - Returns it's self.  
<a name="PGActiveModel+save"></a>

### pgActiveModel.save() ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
Saves the model with its changed properties.

**Kind**: instance method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: [<code>PGActiveModel</code>](#PGActiveModel) - Returns it's self.  
<a name="PGActiveModel+update"></a>

### pgActiveModel.update() ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
Updates the model with the passed in changed properties.

**Kind**: instance method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: [<code>PGActiveModel</code>](#PGActiveModel) - Returns it's self.  
<a name="PGActiveModel+decrypt"></a>

### pgActiveModel.decrypt(...props) ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
Decrypts the properties on the model based on which stringed names are passed in as arguments.

**Kind**: instance method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: [<code>PGActiveModel</code>](#PGActiveModel) - Returns it's self.  

| Param | Type | Description |
| --- | --- | --- |
| ...props | <code>String</code> | name of each property. |

<a name="PGActiveModel+encrypt"></a>

### pgActiveModel.encrypt(...props) ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
Encrypts the properties on the model based on which stringed names are passed in as arguments.

**Kind**: instance method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: [<code>PGActiveModel</code>](#PGActiveModel) - Returns it's self.  

| Param | Type | Description |
| --- | --- | --- |
| ...props | <code>String</code> | name of each property. |

<a name="PGActiveModel+redactSensitiveData"></a>

### pgActiveModel.redactSensitiveData(redactionCensor) ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
Redacts all encrypted fields from the model.

**Kind**: instance method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: [<code>PGActiveModel</code>](#PGActiveModel) - Returns it's self.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| redactionCensor | <code>String</code> | <code>&quot;[redacted]&quot;</code> | The string to replace the encrypted values with. |

<a name="PGActiveModel+getEncryptedProfile"></a>

### pgActiveModel.getEncryptedProfile() ⇒ <code>String</code>
Gets the encrypted profile that the model has set.

**Kind**: instance method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: <code>String</code> - Returns it's self.  
<a name="PGActiveModel.create"></a>

### PGActiveModel.create(model) ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
Creates a new row with the passed in props and values.

**Kind**: static method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: [<code>PGActiveModel</code>](#PGActiveModel) - Returns it's self.  

| Param | Type | Description |
| --- | --- | --- |
| model | <code>Object</code> | A plain object with the name of the properties and their values to be set with the new model. |

**Example**  
```js
create({
      username: 'foo',
      email: 'test@test.com',
   });
```
<a name="PGActiveModel.findById"></a>

### PGActiveModel.findById(id) ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
Retrives a model by it's PK.

**Kind**: static method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: [<code>PGActiveModel</code>](#PGActiveModel) - Returns a new model.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | The PK of the model to retrieve. |

<a name="PGActiveModel.findLimtedBy"></a>

### PGActiveModel.findLimtedBy(fieldValues, operator, limit) ⇒ [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel)
Retrives a limited amount models by the passed in `fieldValues`.

**Kind**: static method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel) - Returns an array of new models.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fieldValues | <code>Object</code> |  | A plain object with the properties and their values to retrive by. |
| operator | <code>String</code> | <code>AND</code> | The query operator to use between each of the `fieldValues` [`AND`, `OR`, 'NOT'] |
| limit | <code>Number</code> |  | The limit to stop searching when the records retrived are equal or greater than the set `limit`. |

**Example**  
```js
findLimtedBy({
      username: ['user2', 'OR', 'user3'],
      email: null,
   }, 'AND', 5);
```
<a name="PGActiveModel.findAllBy"></a>

### PGActiveModel.findAllBy(fieldValues, operator) ⇒ [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel)
Retrives all models by the passed in fieldValues. Will stop searching when the records retrived are equal or greater than `limit`.

**Kind**: static method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel) - Returns an array of new models.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fieldValues | <code>Object</code> |  | A plain object with the properties and their values to retrive by. |
| operator | <code>String</code> | <code>AND</code> | The query operator to use between each of the fieldValues [`AND`, `OR`, 'NOT'] |

**Example**  
```js
findAllBy({
      username: ['user2', 'OR', 'user3'],
      email: null,
   }, 'AND');
```
<a name="PGActiveModel.findAll"></a>

### PGActiveModel.findAll() ⇒ [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel)
Retrives all rows in the table of the model.

**Kind**: static method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel) - Returns an array of new models.  
<a name="PGActiveModel.deleteById"></a>

### PGActiveModel.deleteById(id) ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
Deletes a model that is found by it's PK with the passed in props and values.

**Kind**: static method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: [<code>PGActiveModel</code>](#PGActiveModel) - Returns a new model or null  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | The PK of the model to delete. |

<a name="PGActiveModel.deleteLimitedBy"></a>

### PGActiveModel.deleteLimitedBy(fieldValues, operator, limit) ⇒ [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel)
Deletes a limited amount models by the passed in fieldValues.

**Kind**: static method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel) - Returns an array of deleted models.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fieldValues | <code>Object</code> |  | A plain object with the properties and their values to delete by. |
| operator | <code>String</code> | <code>AND</code> | The query operator to use between each of the fieldValues [`AND`, `OR`, 'NOT'] |
| limit | <code>Number</code> |  | The limit to stop deleting when the records retrived are equal or greater than the set `limit`. |

**Example**  
```js
deleteLimitedBy({
      registered: false,
   },'AND', 5);
```
<a name="PGActiveModel.deleteAllBy"></a>

### PGActiveModel.deleteAllBy(fieldValues, operator) ⇒ [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel)
Deletes all models by the passed in `fieldValues`.

**Kind**: static method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel) - Returns an array of deleted models.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fieldValues | <code>Object</code> |  | A plain object with the properties and their values to delete by. |
| operator | <code>String</code> | <code>AND</code> | The query operator to use between each of the `fieldValues` [`AND`, `OR`, 'NOT'] |

**Example**  
```js
deleteAllBy({
      registered: true,
   });
```
<a name="PGActiveModel.updateById"></a>

### PGActiveModel.updateById(id, model, returnModel) ⇒ [<code>PGActiveModel</code>](#PGActiveModel)
Updates a model that is found by it's PK with the passed in props and values.

**Kind**: static method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: [<code>PGActiveModel</code>](#PGActiveModel) - Returns a new model or null  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>String</code> |  | The PK of the model to update. |
| model | <code>Object</code> |  | A plain object with the name of the properties and their values to update the model with. |
| returnModel | <code>Boolean</code> | <code>true</code> | If the updated model should be returned or not. It will return null if this is set to false. |

**Example**  
```js
updateById('09A75A84-A921-4F68-8FEF-B8392E3702C2',
  {
    password: 'bestpasswordinalltheland12346969420'
  });
```
<a name="PGActiveModel.updateLimitedBy"></a>

### PGActiveModel.updateLimitedBy(fieldValues, model, operator, returnModel, limit) ⇒ [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel)
Updates models that are found by the passed in `fieldValues` with the passed in props and values of the `model`.

**Kind**: static method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel) - Returns an array of updated models or null  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fieldValues | <code>Object</code> |  | A plain object with the properties and their values to update by. |
| model | <code>Object</code> |  | A plain object with the name of the properties and their values to update the model with. |
| operator | <code>String</code> | <code>AND</code> | The query operator to use between each of the `fieldValues` [`AND`, `OR`, 'NOT'] |
| returnModel | <code>Boolean</code> | <code>true</code> | If the updated model should be returned or not. It will return null if this is set to false. |
| limit | <code>Number</code> |  | The limit to stop searching when the records retrived are equal or greater than the set `limit`. |

**Example**  
```js
updateLimitedBy({
    password: null
  },
  {
    password: 'bestpasswordinalltheland12346969420'
  },'AND', true, 5);
```
<a name="PGActiveModel.updateAllBy"></a>

### PGActiveModel.updateAllBy(fieldValues, model, operator, returnModel) ⇒ [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel)
Updates all models that are found by the passed in `fieldValues` with the passed in props and values of the `model`.

**Kind**: static method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel) - Returns an array of updated models or null  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fieldValues | <code>Object</code> |  | A plain object with the properties and their values to update by. |
| model | <code>Object</code> |  | A plain object with the name of the properties and their values to update the model with. |
| operator | <code>String</code> | <code>AND</code> | The query operator to use between each of the `fieldValues` [`AND`, `OR`, 'NOT'] |
| returnModel | <code>Boolean</code> | <code>true</code> | If the updated model should be returned or not. It will return null if this is set to false. |

**Example**  
```js
updateAllBy({
    password: null
  },
  {
    password: 'bestpasswordinalltheland12346969420'
  });
```
<a name="PGActiveModel.updateAll"></a>

### PGActiveModel.updateAll(model) ⇒ [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel)
Updates all models in their table with the passed in props and values of the `model`.

**Kind**: static method of [<code>PGActiveModel</code>](#PGActiveModel)  
**Returns**: [<code>Array.&lt;PGActiveModel&gt;</code>](#PGActiveModel) - Returns an array of updated models or null  

| Param | Type | Description |
| --- | --- | --- |
| model | <code>Object</code> | A plain object with the name of the properties and their values to update the models with. |

**Example**  
```js
updateAll({
    password: 'bestpasswordinalltheland12346969420'
  });
```
<a name="PGBaseModel"></a>

## PGBaseModel
Postgres Base Model class to extend a custom model from.

**Kind**: global class  
<a name="PGConnecter"></a>

## PGConnecter
Postgres Connecter to initialize the singleton for connection.

**Kind**: global class  
<a name="new_PGConnecter_new"></a>

### new PGConnecter(options)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | The connection options. |
| options.crypto | <code>Crypto</code> | <code>postgres/crypto/interface.js</code> | The implemented crypto interface that follows `postgres/crypto/interface.js` |
| options.pg | <code>Object</code> |  | The options object to pass into `pg` lib. |
| options.pg.user | <code>String</code> | <code>process.env.PGUSER</code> | User's name. |
| options.pg.password | <code>String</code> | <code>process.env.PGPASSWORD</code> | User's password. |
| options.pg.database | <code>String</code> | <code>process.env.PGDATABASE</code> | Database's name. |
| options.pg.port | <code>Number</code> | <code>process.env.PGPORT</code> | Database's port. |
| options.pg.connectionString | <code>String</code> |  | Postgres formated connection string. e.g. postgres://user:password@host:5432/database |
| options.pg.ssl | <code>TLSSocket</code> |  | Options to be passed into the native Node.js TLSSocket socket. |
| options.pg.types | <code>pg.types</code> |  | Custom type parsers. See [node-postgres types](https://github.com/brianc/node-pg-types) for more details. |
| options.pg.statement_timeout | <code>Number</code> | <code>0</code> | Number of milliseconds before a statement in query will time out. |
| options.pg.query_timeout | <code>Number</code> | <code>0</code> | number of milliseconds before a query call will timeout. |
| options.pg.connectionTimeoutMillis | <code>Number</code> | <code>0</code> | Number of milliseconds to wait before timing out when connecting a new client. |
| options.pg.idleTimeoutMillis | <code>Number</code> | <code>10000</code> | Number of milliseconds a client must sit idle in the pool and not be checked out before it is disconnected from the backend and discarded. |
| options.pg.max | <code>Number</code> | <code>10</code> | Maximum number of clients the pool should contain. |

**Example**  
```js
var pgOptions = {
    pg: {
        connectionString: 'postgres://postgres@localhost/pgtest',
    }
};

try {
    pgOptions.crypto = require('@abeai/node-crypto').utils.pgCrypto;
} catch (_) {
    console.log(_);
}

var pg = new PGConnecter(pgOptions);
```
<a name="PGEncryptModel"></a>

## PGEncryptModel ⇐ [<code>PGBaseModel</code>](#PGBaseModel)
Postgres Encryption Model class to extend a custom model from.

**Kind**: global class  
**Extends**: [<code>PGBaseModel</code>](#PGBaseModel)  
<a name="PGTypes"></a>

## PGTypes
The types of fields for Postgres Models.

**Kind**: global constant  

* [PGTypes](#PGTypes)
    * [.PK](#PGTypes.PK)
    * [.Encrypt](#PGTypes.Encrypt)
    * [.EncryptWithoutHash](#PGTypes.EncryptWithoutHash)
    * [.EncryptProfile](#PGTypes.EncryptProfile)
    * [.AutoCrypt](#PGTypes.AutoCrypt)
    * [.AutoCryptWithoutHash](#PGTypes.AutoCryptWithoutHash)
    * [.Hash](#PGTypes.Hash)

<a name="PGTypes.PK"></a>

### PGTypes.PK
The primary key of the table.

**Kind**: static property of [<code>PGTypes</code>](#PGTypes)  
<a name="PGTypes.Encrypt"></a>

### PGTypes.Encrypt
Marks this field to auto encrypt/hash (for look up) but not auto decrypt it on retrieval.
The table will need to have a field with the same name as this set field with `__` as a prefix.

**Kind**: static property of [<code>PGTypes</code>](#PGTypes)  
**Example**  
```js
//if you have an encrypted field called `phone` the sql query for creating the table may look like this
 CREATE TABLE IF NOT EXISTS users (
   phone VARCHAR (500),
   __phone VARCHAR (500) UNIQUE,
 );
```
<a name="PGTypes.EncryptWithoutHash"></a>

### PGTypes.EncryptWithoutHash
Marks this field to auto encrypt but not auto decrypt it on retrieval.
Same as `Encrypt` but with no lookup hash.

**Kind**: static property of [<code>PGTypes</code>](#PGTypes)  
<a name="PGTypes.EncryptProfile"></a>

### PGTypes.EncryptProfile
Marks this field as the encryption profile for encrypting/decrypting/hashing utilizing aws kms.

**Kind**: static property of [<code>PGTypes</code>](#PGTypes)  
<a name="PGTypes.AutoCrypt"></a>

### PGTypes.AutoCrypt
Marks this field to auto encrypt/hash (for look up) and to auto decrypt it on retrieval.

**Kind**: static property of [<code>PGTypes</code>](#PGTypes)  
<a name="PGTypes.AutoCryptWithoutHash"></a>

### PGTypes.AutoCryptWithoutHash
Marks this field to auto encrypt and auto decrypt it on retrieval.
Same as `AutoCrypt` but with no lookup hash.

**Kind**: static property of [<code>PGTypes</code>](#PGTypes)  
<a name="PGTypes.Hash"></a>

### PGTypes.Hash
Marks this field to be hashed on creation (IE: Password and other information you want to protect)

**Kind**: static property of [<code>PGTypes</code>](#PGTypes)  
<a name="camelCase"></a>

## camelCase(str) ⇒ <code>String</code>
Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).

**Kind**: global function  
**Returns**: <code>String</code> - Returns the camel cased string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>String</code> | <code>&#x27;&#x27;</code> | The string to convert. |

**Example**  
```js
camelCase('Foo Bar');
// => 'fooBar'

camelCase('--foo-bar--');
// => 'fooBar'

camelCase('__FOO_BAR__');
// => 'fooBar'
```
<a name="clone"></a>

## clone(value) ⇒ <code>\*</code>
Creates a shallow clone of `value`.

**Note:** Is just `Object.assign`, please use that instead of this.

**Kind**: global function  
**Returns**: <code>\*</code> - Returns the cloned value.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to clone. |

**Example**  
```js
var objects = [{ 'a': 1 }, { 'b': 2 }];

var shallow = lodashClone(objects);
console.log(shallow[0] === objects[0]);
// => true
```
<a name="cloneDeep"></a>

## cloneDeep(value) ⇒ <code>\*</code>
This method is like `clone` except that it recursively clones `value`.

**Kind**: global function  
**Returns**: <code>\*</code> - Returns the deep cloned value.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to recursively clone. |

**Example**  
```js
var objects = [{ 'a': 1 }, { 'b': 2 }];

var deep = cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
```
<a name="cloneDeepWith"></a>

## cloneDeepWith(value, [cb]) ⇒ <code>\*</code>
This method is like `cloneWith` except that it recursively clones `value`.

**Kind**: global function  
**Returns**: <code>\*</code> - Returns the deep cloned value.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to recursively clone. |
| [cb] | <code>function</code> | The function to customize cloning. |

**Example**  
```js
function customizer(value) {
  if (_.isElement(value)) {
    return value.cloneNode(true);
  }
}

var el = cloneDeepWith(document.body, customizer);

console.log(el === document.body);
// => false
console.log(el.nodeName);
// => 'BODY'
console.log(el.childNodes.length);
// => 20
```
<a name="merge"></a>

## merge(object, [...sources]) ⇒ <code>Object</code>
This method is like `assign` except that it recursively merges own and
inherited enumerable string keyed properties of source objects into the
destination object. Source properties that resolve to `undefined` are
skipped if a destination value exists. Array and plain object properties
are merged recursively. Other objects and value types are overridden by
assignment. Source objects are applied from left to right. Subsequent
sources overwrite property assignments of previous sources.

**Note:** This method mutates `object`.

**Kind**: global function  
**Returns**: <code>Object</code> - Returns `object`.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The destination object. |
| [...sources] | <code>Object</code> | The source objects. |

**Example**  
```js
var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};

var other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};

merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
```
<a name="debounce"></a>

## debounce(func, delay) ⇒ <code>function</code>
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
| delay | <code>Number</code> | <code>0</code> | The number of milliseconds to delay. |

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

## isArray(value) ⇒ <code>Boolean</code>
Checks if `value` is classified as an `Array` object.

**Kind**: global function  
**Returns**: <code>Boolean</code> - Returns `true` if `value` is an array, else `false`.  

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

## kebabCase(str) ⇒ <code>String</code>
Converts `string` to
[kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).

**Kind**: global function  
**Returns**: <code>String</code> - Returns the kebab cased string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>String</code> | <code>&#x27;&#x27;</code> | The string to convert. |

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

## keysToCamel(o) ⇒ <code>String</code>
Converts Object's keys from snake,kebab and space case to
[camel case](https://en.wikipedia.org/wiki/CamelCase).

**Kind**: global function  
**Returns**: <code>String</code> - Returns the object with it's key's camelcased.  

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
<a name="request"></a>

## request(options) ⇒ <code>Promise</code>
Makes a HTTP/S Request to a given url.

**Kind**: global function  
**Returns**: <code>Promise</code> - Returns the promise that gets resolved or rejected.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | Supports all of nodes HTTP/S Module's options + the folloing. |
| options.uri | <code>String</code> |  | fully qualified uri. |
| options.method | <code>String</code> | <code>GET</code> | http method. |
| options.headers | <code>Object</code> | <code>{}</code> | http headers. |
| options.qs | <code>Object</code> |  | object containing querystring values to be appended to the `uri`. |
| options.simple | <code>Boolean</code> | <code>true</code> | throws an error for any non 2xx status code response. |
| options.resolveWithFullResponse | <code>Boolean</code> | <code>false</code> | set to true if the full response object is wanted instead of just the `body` data. |
| options.qs | <code>Object</code> |  | object containing querystring values to be appended to the `uri`. |
| options.body | <code>Object</code> \| <code>Buffer</code> \| <code>String</code> \| <code>ReadSteam</code> |  | entity body for PATCH, POST and PUT requests. Must be a `Buffer`, `String` or `ReadStream`. If json is true, then `body` must be a JSON-serializable object. |
| options.form | <code>Object</code> |  | when passed an object or a querystring, this sets body to a querystring representation of value, and adds `Content-type: application/x-www-form-urlencoded header`. |
| options.json | <code>Boolean</code> |  | sets`body` to JSON representation of value and adds `Content-type: application/json header`. Additionally, parses the response body as JSON. |
| options.keepAlive | <code>Boolean</code> | <code>true</code> | set to `false` to turn off keepAlive sockets. |
| options.authorization.basic | <code>Object</code> |  | takes an object with `client` and `secret` props to create a `Authorization: Basic client:secret` base64 header. |
| options.authorization.bearer | <code>String</code> |  | creates a `Authorization: Bearer bearer` header. |
| options.redirectMax | <code>Number</code> | <code>5</code> | number of times the request will follow a redirect from the server. |
| options.logger | <code>Object</code> |  | the pino logger to log errors. |

**Example**  
```js
await request({
       uri: 'http://127.0.0.1:4261/'),
       simple: false,
       resolveWithFullResponse: true
   });
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

## snakeCase(str) ⇒ <code>String</code>
Converts `string` to
[snake case](https://en.wikipedia.org/wiki/Snake_case).

**Kind**: global function  
**Returns**: <code>String</code> - Returns the snake cased string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>String</code> | <code>&#x27;&#x27;</code> | The string to convert. |

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
