import Part from "./Part";

function Content(props){

  return (
    <div>
      <Part test= {props.p1} test1={props.e1}/>
      <Part test={props.p2} test1={props.e2}/>
      <Part test={props.p3} test1={props.e3}/>
    </div>
  );
}

export default Content;