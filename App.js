import ReactDOM from "react-dom/client";

//React Element
const heading = <h1 id="jsx">Namaste React using JSX</h1>;
console.log(heading); // object-To make react element to component just use arrow fuunc and heading should be Heading

//React Component--JS functions - components returns jsx code or react element for single line jsx code
const HeadingComponent1=()=><h1>Namaste React Using Functional Component </h1>;

//React Component for multiple lines
// const HeadingComponent2 = () => {
//   return (
//     <div>
//       <h1>Namaste React Using React Component2</h1>
//       <HeadingComponent1/>
//       <h2>Namaste React Using React COmponent</h2>
//     </div>
//   );
// };

const number=1000;
const Title=()=>(
    <div className="child">
        <h1>
            Namaste React of Title Component 
        </h1>
    </div>
);


const HeadingComponent3=()=>(
    <div className="parent">
        {Title()}
        {number * number}
        <Title/>
        <Title></Title>
        <h1>Namaste React of HeadingComponent3</h1>

    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent3/>);
