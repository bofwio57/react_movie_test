import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

// function App() {
//     const [counter, setValue] = useState(0);
//     const [keyword, setKeyword] = useState("");

//     const onClickMe = () => setValue((prev) => prev + 1);
//     const onChange = (e) => setKeyword(e.target.value);

//     useEffect(() => {
//         console.log("I run only once.");
//     }, []);
//     useEffect(() => {
//         console.log("I run when 'keyword' changes.");
//     }, [keyword]);
//     useEffect(() => {
//         console.log("I run when 'counter' changes.");
//     }, [counter]);
//     useEffect(() => {
//         console.log("I run when keyword & counter change");
//     }, [keyword, counter]);

//     function Hello() {
//         useEffect(() => {
//             console.log("hi :)");
//             return function () {
//                 console.log("bye :(");
//             };
//         }, []);
//         return <h1>Hello</h1>;
//     }

//     const [showing, setShowing] = useState(false);
//     const onClick = () => setShowing((prev) => !prev);

//     return (
//         <div>
//             <input
//                 value={keyword}
//                 onChange={onChange}
//                 type="text"
//                 placeholder="Search here..."
//             />
//             <h1>{counter}</h1>
//             <button onClick={onClickMe}>click me</button>
//             <hr />
//             {showing ? <Hello /> : null}
//             <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//         </div>
//     );
// }
// useEffect
// - 두 개의 argument를 가지는 함수
// - 첫 번째 argument는 우리가 딱 한번만 실행하고 싶은 코드
// - 두 번째는 [] 배열을 넣어줌
// -> useEffect가 컴포넌트의 첫 번째 렌더 시점에 함수 호출
// 그리고 상태를 변화시키면 함수는 호출되지 않음
// 즉, 한번만 렌더링 됨
// 대표적인 사용법 => API를 딱 한번만 호출하고 그 뒤로는 다시는 호출하기 싫은 경우

// keyword가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것.
// 이것이 바로 빈 array를 써주었을 때 코드가 단 한번만 실행되는 이유임
// react가 지켜볼 게 아무것도 없으니 처음 한번만 실행되는 것

//todo
// function App() {
//     const [toDo, setToDo] = useState("");
//     const [toDos, setToDos] = useState([]); //배열이 빔
//     const onChange = (event) => setToDo(event.target.value);
//     const onSubmit = (event) => {
//         event.preventDefault();
//         if (toDo === "") {
//             return;
//         }
//         setToDos((currentArray) => [toDo, ...currentArray]);
//         setToDo(""); //input 비우기
//     };
//     const deleteBtn = (index) => {
//         setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
//     };

//     return (
//         <div>
//             <h1>My To Dos ({toDos.length})</h1>
//             <form onSubmit={onSubmit}>
//                 <input
//                     onChange={onChange}
//                     value={toDo}
//                     type="text"
//                     placeholder="Write your to do..."
//                 />
//                 <button>Add To Do</button>
//             </form>
//             <hr />
//             <ul>
//                 {toDos.map((item, index) => (
//                     <li key={index}>
//                         {item}
//                         <button onClick={() => deleteBtn(index)}>❌</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// state는 직접적으로 수정 불가능 (예 : toDo = “” )
// currentArray에는 Hello 이미 있고 toDo는 byebye가 되는 것
// 그리고 currentArray는 Hello와 byebye를 가지고 있는 배열이 됨

//코인
// function App() {
//     const [loading, setLoading] = useState(true);
//     const [coins, setCoins] = useState([]);
//     useEffect(() => {
//         fetch("https://api.coinpaprika.com/v1/tickers")
//             .then((response) => response.json())
//             .then((json) => {
//                 setCoins(json);
//                 setLoading(false);
//             });
//     }, []); //한번만 실행

//     return (
//         <div>
//             <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
//             {loading ? (
//                 <strong>Loading...</strong>
//             ) : (
//                 <select>
//                     {coins.map((coin) => (
//                         <option key={coin.id}>
//                             {coin.name} ({coin.symbol}): $
//                             {coin.quotes.USD.price} USD
//                         </option>
//                     ))}
//                 </select>
//             )}
//         </div>
//     );
// }

//무비
function App() {
    return (
        <Router>
            <Switch>
                <Route
                    path={process.env.PUBLIC_URL + "/abot-us"}
                    element={<h1>Hello</h1>}
                />
                <Route
                    path={process.env.PUBLIC_URL + "/movie/:id"}
                    element={<Detail />}
                />
                <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
            </Switch>
        </Router>
    );
}
export default App;
