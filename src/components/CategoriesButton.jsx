import { Link } from "react-router-dom";

const CategoriesButton = ({category}) => {

    var icon = [
        'fi fi-rr-laptop',
        'fi fi-rr-devices',
        'fi fi-rr-mobile-button',
        'fi fi-rr-tablet',
        'fi fi-rr-screen',
    ]
    
    return (
        <Link to={`/products/${category.name}&cat=${category.id}`} style={{display: 'inline-block', textAlign: 'center', marginRight: '20px'}}>
            <button className="categoryButton">
                <i className={icon[category.id]}></i>
            </button><br /><br />
            <span style={{color: "#000"}}>{category.name}</span>
        </Link>
    );
}

export default CategoriesButton;