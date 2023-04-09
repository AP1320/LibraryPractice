import './App.css';

function Header() {


    return (


            <div className="Header">
                <h1>Поиск книг</h1>
                <form>
                    <label>
                        Имя:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Поиск" />
                </form>
            </div>





    );
}

export default Header;