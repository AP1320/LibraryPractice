import React, {  useState } from "react";

function Header({ fetchBooks, booksList }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <header>
      <div className="inputSearchField">
        <label className="textInputBook" for="site-search">Поиск книг</label>
        <input onKeyDown={(e) => {
          if (e.key === "Enter") fetchBooks(inputValue)
        }} onChange={(e) => setInputValue(e.target.value)} type="search" id="books-search" name="q" />
      </div>
      <div className="selectorSort">
        <label className="textInputCategories" for="site-search">Категория</label>
        <select className="selectCategories">
          <option selected value="All">Все</option>
          <option value="art">Искусство</option>
          <option value="biography">Биография</option>
          <option value="computers">ПК</option>
          <option value="history">История</option>
          <option value="medical">Медицина</option>
          <option value="poetry">Поэзия</option>
        </select>
        <label className="textInputCategories" for="site-search">Сортировка:</label>
        <select className="selectCategories">
          <option selected value="relevance">Актуальные</option>
          <option value="newest">Новые</option>
        </select>
      </div>
      <div className="totalItem">
        <p>Найдено {booksList.totalItems} книг</p>
      </div>
    </header>
  );
}

export default Header;
