import './reset.css'
import './App.css'
import { ClassComp, FunctionComp, ArrowFunctionComp } from './Components.jsx'
import ButtonA from './ButtonA.jsx'
import ButtonB from './ButtonB.jsx'

function Hello() {
  return <h1>Hello</h1>
}

function BasicExpressions() {
  const name = "John";
  const age = 25;
  const isAdmin = true;

  return (
    <div className="section">
      <p>Name: {name}</p>
      <p>Age next year: {age + 1}</p>
      <p>{name + "'s Profile"}</p>
      <p>{`${name} is ${age} years old`}</p>
      <p>Admin status: {String(isAdmin)}</p>
    </div>
  )
}

function ObjectArrayExpressions() {
  const user = {
    name: "Jane",
    email: "jane@example.com"
  };
  const colors = ["red", "blue", "green"];
  const numbers = [1, 2, 3, 4, 5];
  
  return (
    <div className="section">
      <p>User: {user.name} ({user.email})</p>
      <p>First color: {colors[0]}</p>
      <p>Color count: {colors.length}</p>
      
      <p>Doubleds: {
        numbers.map(n => n * 2).join(", ")
      }</p>
      
      <p>Evens: {
        numbers.filter(n => n % 2 === 0).join(", ")
      }</p>
    </div>
  );
}

function FunctionExpressions() {
  const getGreeting = (name) => `Hello, ${name}!`;
  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };
  
  const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + item.price, 0);
  };

  const items = [
    { id: 1, price: 10 },
    { id: 2, price: 20 }
  ];
  
  return (
    <div className="section">
      <p>{getGreeting("Alice")}</p>
      <p>Today: {formatDate(new Date())}</p>     
      <p>Total: ${calculateTotal(items)}</p>      
      <p>Good {(() => {
        const hours = new Date().getHours();
        return hours < 12 ? "morning!" : "afternoon!";
      })()}</p>
    </div>
  );
}

function App() { 
  const element01 = <h3>Hello, World</h3>;
  const element02 = (
    <ul>
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
  )

  const language = "JAVASCRIPT";

  const isLoggedIn = true;

  const hasMessages = false;
  const message = "Hello, World!"

  const fruits = ["Apple", "Banana", "Cherry"]

  const books = [
    { id: 1, title: 'React Basics',
      published: true, publisher: 'Manning' },
    { id: 2, title: 'Advanced Hooks',
      published: false, publisher: 'OReilly' },
    { id: 3, title: 'JSX in Depth',
      published: true, publisher: 'Packt' }
  ];
  const publisheds = books.filter(book => book.published);

  const disableInput = false;

  return (
    <div className="wrap">
      <div className="section">
        <Hello />
        <h2>World</h2>
        <ClassComp />
        <FunctionComp />
        <ArrowFunctionComp />
      </div>

      <div className="section">
        {element01}
        {element02}
        <p>{language}</p>
      </div>

      <BasicExpressions />

      <ObjectArrayExpressions />

      <FunctionExpressions />

      <div className="section">
        {isLoggedIn ? <p>Hello!</p> : <p>Sign in</p>}        

        {isLoggedIn ? (
          <>
            <h2>Welcome back!</h2>
            <p>You are logged in. Enjoy your time here!</p>
          </>
        ) : (
          <>
            <h2>Hello, Guest!</h2>
            <p>Please log in to access more features.</p>
          </>
        )}
      </div>

      <div className="section">
        {hasMessages && <h2>You have new messages!</h2>}
        {message && <p>Message: {message}</p>}

        <p>Message: {message ?? <em>No message</em>}</p>
        <p>Message: {message || <em>Empty</em>}</p>
      </div>
      
      <div className="section">
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        {publisheds.length && <h2>Published Books</h2>}
        {publisheds.length ? 
          publisheds.map(book => 
            <article key={book.id}>
              <strong>{book.title}</strong>
              <em> - {book.publisher}</em>
            </article>
          )
        : <p>No published books found.</p>
        }
      </div>

      <div className="section">
        <label
          htmlFor="username"        // for
        >
          Username
        </label>
        <input
          type="text"
          id="username"

          className="input-field"   // class
          autoComplete="off"        // autocomplete

          maxLength={20}            // maxlength
          spellCheck={true}         // spellcheck
          readOnly={false}          // readonly
          tabIndex={0}              // tabindex

          disabled={disableInput}
          placeholder={
            disableInput ? "(DISABLED)" : "Enter your name."
          }
        />
      </div>

      <div className="section">
        <ButtonA />
        <ButtonB />
      </div>

    </div>    
  )
}

export default App
