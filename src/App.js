import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";
import InputFields from "./Components/InputFields";


function App() {
    const [banana, setBanana] = useState(0)
    const [apple, setApple] = useState(0)
    const [strawberry, setStrawberry] = useState(0)
    const [kiwi, setKiwi] = useState(0)
    // const [counterState, setCounterState] = useState(0);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState(0);
    const [zipcode, setZipcode] = useState("");
    const [deliveryFrequency, setDeliveryFrequency] = useState("iedere week");
    const [moment, toggleMoment] = useState("overdag");
    const [remarks, setRemarks] = useState("");
    const [subscriptionValue, toggleSubscriptionValue] = useState(false);


    // function addOne() {
    //     setCounterState(counterState + 1);
    //     console.log("ik ben aangeklikt");
    // }
    //
    // function subtractOne() {
    //     if (counterState >= 1) {
    //
    //         setCounterState(counterState - 1);
    //         console.log("ik ben aangeklikt");
    //     }
    // }
    //
    function resetBtn() {
        setStrawberry(0);
        setBanana(0);
        setKiwi(0);
        setApple(0);
        console.log(strawberry);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(strawberry, banana, apple, kiwi, name, surname, age, zipcode, deliveryFrequency, moment, remarks, subscriptionValue)
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            🍓<Counter
            fruit={strawberry}
            setFruit={setStrawberry}
        />
            🍌
            <Counter
                fruit={banana}
                setFruit={setBanana}
            />
            🍎
            <Counter
                fruit={apple}
                setFruit={setApple}
            />
            🥝
            <Counter
                fruit={kiwi}
                setFruit={setKiwi}
            />
            <article>
                <button
                    type="button"
                    className="reset-btn"
                    onClick={resetBtn}
                >Reset
                </button>
            </article>
            <form onSubmit={handleSubmit}>
                <main>
                    <InputFields
                        labelName="Voornaam"
                        fieldname="name"
                        value={name}
                        inputType="text"
                        id="form-name"
                        setFieldName={setName}
                    />
                    />
                    {/*<label htmlFor="name">Voornaam</label>*/}
                    {/*<input*/}
                    {/*    value={name}*/}
                    {/*    type="text"*/}
                    {/*    id="form-name"*/}
                    {/*    name="name"*/}
                    {/*    onChange={(event) => setName(event.target.value)}*/}
                    {/*/>*/}
                    <label htmlFor="surname">
                        Achternaam</label>
                    <input
                        value={surname}
                        type="text"
                        id="surname"
                        name="surname"
                        onChange={(event) => setSurname(event.target.value)}
                    />
                    <label htmlFor="age">Leeftijd</label>
                    <input
                        value={age}
                        type="number"
                        id="age"
                        name="age"
                        onChange={(event) => setAge(parseInt(event.target.value))}
                    />
                    <label htmlFor="zipcode">Postcode </label>
                    <input
                        value={zipcode}
                        type="text"
                        id="zipcode"
                        name="zipcode"
                        onChange={(event) => setZipcode(event.target.value)}
                    />

                    <label htmlFor="delivery-freq">Bezorgfrequentie </label>
                    <select
                        id="delivery-freq"
                        value={deliveryFrequency}
                        onChange={(event) => setDeliveryFrequency(event.target.value)}
                    >
                        <option value="iedere week">iedere week</option>
                        <option value="om de week">om de week</option>
                        <option value="iedere maand">iedere maand</option>
                    </select>
                    <div>
                        <input
                            type="radio"
                            name="moment"
                            value="daytime"
                            checked={moment === "daytime"}
                            onChange={(event) => toggleMoment(event.target.value)}
                        />
                        <label htmlFor="daytime">Overdag</label>
                        <input
                            type="radio"
                            name="moment"
                            value="atNight'"
                            checked={moment === "atNight"}
                            onChange={(event) => toggleMoment(event.target.value)}
                        />
                        <label htmlFor="atNight">'s avonds</label>
                    </div>

                    <label htmlFor="remarks">Opmerking:</label>
                    <textarea
                        value={remarks}
                        id="remarks"
                        name="remarks"
                        onChange={(event) => setRemarks(event.target.value)}
                    />

                    <label htmlFor={"subscriptionForm"}>
                        <input
                            type="checkbox"
                            id="subscriptionForm"
                            name="subscription"
                            checked={subscriptionValue}
                            onChange={() => toggleSubscriptionValue(!subscriptionValue)}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <button type="submit">Verzend</button>
                </main>
            </form>
        </>
    );
}

export default App;
