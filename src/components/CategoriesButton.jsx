const CategoriesButton = ({category}) => {

    var icon = [
        'fi fi-rr-laptop',
        'fi fi-rr-devices',
        'fi fi-rr-mobile-button',
        'fi fi-rr-tablet',
        'fi fi-rr-screen',
    ]
    
    
    return (
        <div style={{display: 'inline-block', textAlign: 'center', marginRight: '20px'}}>
            <button className="categoryButton">
                <i className={icon[category.id]}></i>
            </button><br /><br />
            <span>{category.name}</span>
        </div>
    );
}

export default CategoriesButton;