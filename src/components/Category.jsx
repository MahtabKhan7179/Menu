export default function Category({ categories, filterMenu }) {

    return (<div className="btn-container">
        {categories.map((itemCategory, index) => {
            return <button key={index} className="btn" onClick={e => { filterMenu(e) }} value={itemCategory}>{itemCategory}</button>
        })}
    </div>);
}