import MenuItem from "./MenuItem";

export default function Menu({ menu }) {

    return (
        <div className="section-center">
            {menu.map((item) => { return <MenuItem key={item.id} {...item} /> })}
        </div>
    );
}