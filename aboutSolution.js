```javascript
// pages/about.js
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      {/* Use optional chaining to safely access the property */}
      <p>Accessing a non-existent property: {nonExistentProperty?.toString() || 'Property not defined'}</p>
    </div>
  );
}

export default About;
```