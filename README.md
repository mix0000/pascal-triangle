# pascal-triangle
Get a nth degree of pascal triangle

## Formula
I use the math formula witch based on _Combinations(C)_ to find a nth line of a pascal triangle, <br>
_C(n, 0), C(n, 1), C(n, 2,), ... , C(n, n)_

## Quickstart
  * Download `pascal-triangle.js` and import it with `<script>` tag or ES6 `import`.
  * Now you can use the combinations as,
   ```javascript
   const pascal = new Pascal(n)
   pascal.singleLine() // returns "n" line of triangle.
   pascal.multiLine() // returns all of the triangle lines from 1 to "n".
```
## Examples 
 ```javascript
  const pascal = new Pascal(5)
  pascal.singleLine() 
  // 1, 5, 10, 10, 5, 1
  pascal.multiLine()
  // 1
  // 1, 2, 1
  // 1, 3, 3, 1
  // 1, 4, 6, 4, 1
  // 1, 5, 10, 10, 5, 1
```
