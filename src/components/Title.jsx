
export default function Title({ category }) {
    return (<div className="title">
        <h4 className="line-under-title">Our {category === "all" ? null : category} Menu</h4>
        {/* <div className="title-underline"></div> //this Line is not responsive */}
    </div>
    );
}