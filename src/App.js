import './App.css';

function App() {
    return (

            <div className="App">
                <h1 className="hello">Поиск книг</h1>
                <form>
                    <label>
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Отправить" />

                </form>

                <form>
                    <select>Категории:
                        <option value="all">all</option>
                        <option value="ART">ART</option>
                        <option selected value="Computers">Computers</option>
                       
                    </select>

                    <select>Сортировка по:
                        <option value="revelance">revelance</option>

                    </select>


                </form>



            </div>



    );
}

export default App;
