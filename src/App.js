import React, {useState,useEffect,useRef, useReducer} from 'react';
import react from 'react-dom';

const content = [
  { id:1,
    tab : "section 1",
    content : "I'm the content of the section 1"
  },
  {id:2,
    tab : "section 2",
    content : "I'm the content of the section 2"
  },
  {id:3,
    tab : "section 3",
    content : "I'm the content of the section 3"
  }
]


const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event =>{
    
    const {
      target : {value}
    } = event;
    let willUpdate = true;
    if(typeof validator === "function"){
      willUpdate = validator(value);
    }
    if(willUpdate){
      setValue(value);
      console.log(value)
    }
    
  }
  return {value,onChange};
};
const useTabs = (i, o) =>{
  const [currentIndex, setCurrentIndex] = useState(i);
  if(!o || !Array.isArray(o)){
    return;
  }
  
  return {
    currentItem: o[currentIndex],
    changeItem: setCurrentIndex
  };
}

const useTitle = i => {
  const [title, setTitle] = useState(i);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;

}


const useClick = onClick => {
  // if(typeof onClick !== "function"){
  //   return;
  // };
  const element = useRef();
  useEffect(() => {
    if(element.current){
      element.current.addEventListener("click",onClick);
    }
    return () =>{
      if(element.current){
        element.current.removeEventListener("click",onClick);
      }
    } 
  },[]);
  return element;
}
const useConfirm = (m = "",callback,cancel) => {
  if(!callback || typeof callback !== "function"){
    return;
  }
  if(cancel && typeof cancel !== "function"){
    return;
  }
  const confirmAction = () => {
    if(window.confirm(m)){
      callback();
    }else{
      cancel();
    }
  }
  return confirmAction;

}

const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = "";
  }
  const enablePrevent = () => window.addEventListener("beforeunload",listener);
  const disablePrevent = () => window.removeEventListener("beforeunload",listener);

  return {enablePrevent, disablePrevent}

}


const useBeforLeave = onBefore =>{
  
  const handle = (event) =>{
    
   
    const {clientY} = event;
    if(clientY <= 0){
      return ;
    } 
    onBefore();
  }
  useEffect(()=>{
    if(typeof onBefore !== "function"){
      return ;
    }; // 조건부로 데이터를 로드해야하는 경우 useEffect 호출 안에 if문을 써야함
    document.addEventListener("mouseleave",handle);
    return () => document.removeEventListener("mouseleave",handle);
  },[]);
  
}
const useFadeIn = (duration = 1,delay = 0) =>{
  
const element = useRef();
  useEffect(()=>{
    if(typeof duration !== "number" || typeof delay !== "number"){
      return;
    }
    if(element.current){
      const {current} = element;
      current.style.opacity = 1;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
     
    }
  },[])

  return {ref: element, style: {opacity : 0}};

}

const useNetwork = netWorkOnChange => {
  const {status, setStatus} = useState(navigator.onLine);
  const handler = () =>{
    if(typeof netWorkOnChange === "function"){
      netWorkOnChange(navigator.onLine)
    }
     setStatus(navigator.onLine);
  }
 
  useEffect(() => {
    window.addEventListener("online",handler);
    window.addEventListener("offline",handler);

    /*() => {
      window.removeEventListener("online",handler);
      window.removeEventListener("offline",handler);
    }*/ //온라인일때 주석 풀어서 확인 필요
    
  },[])
  
  return status;
}


const App = () =>{
  const maxLen = value => value.length <= 10;
  const [item,setItem] = useState(0);
  const name = useInput("Mr.", maxLen);

  const Increment = () => setItem(item + 1);
  const Decrement = () => setItem(item - 1);
  const {currentItem,changeItem} = useTabs(0, content);
  const titleUpDater = useTitle("loading...");
  setTimeout(()=> titleUpDater("home"),5000);
  const sayHello = () => console.log("say Hello");
  const changeElement = useClick(sayHello);
  const Deleteing =  () => console.log("Deleting message....");
  const abort = () => console.log("abort");
  const confirmDelete = useConfirm("Are you sure?",Deleteing,abort);
  const { enablePrevent, disablePrevent } = usePreventLeave();
  const BeforeLife =() =>{console.log("plz Don't leave")} ;
  useBeforLeave(BeforeLife);
  const titleFadeIn = useFadeIn(2,3);
  const descriptionFadeIn = useFadeIn(3,2);
  const checkOnLine = useNetwork();
  

  return(
    <div className="App">
      <h1>{checkOnLine ? "Online" : "Offline"}</h1>
      <h1 ref={changeElement}>{item}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <input placeholder="Name" {...name} />
      {content.map((section,index) => (
          <button  onClick={() => changeItem(index)} >{section.tab}</button>)
      )}
      <div>{currentItem.content}</div>
      <h2 ref={changeElement}>Hi</h2>
      <button onClick={confirmDelete}>Delete message</button>
      <div>
        <h2>Prevent Btn</h2>
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>Unprotect</button>
      </div>
      <div>
        <h2 {...titleFadeIn}>FadeIn Title</h2>
        <p {...descriptionFadeIn}>FadeIn description</p>
      </div>
    </div>
    
    
  );
};


export default App;
