import "../styles/Home.css"
import CategoriesButton from '../components/CategoriesButton.jsx';

function Home({categories}) {
  
  return (
    <main className="HomePage">
      <div className="headerIMG">
        <img src="https://i0.wp.com/techadvice.life/wp-content/uploads/2024/03/Lenovo-F1.png" alt="Lenovo x F1" />
      </div>
      
      <div style={{boxShadow: "0 0 10px #000000b0", margin: "-4px 0"}}>
        <h1 style={{padding: "30px 0px 0px 30px", fontSize: "19px"}}>Explore os Produtos Lenovo</h1>
        <div className='categoriesContainer'>
          {categories.map((category) => (<CategoriesButton category={category} />))}
        </div>
      </div>

      <div className="homeBody">
        <div className="card">
          <div className="homeIMGC">
            <img src="https://p4-ofp.static.pub/ShareResource/na/homepage/merchandising-card/lenovo-pro-segment.jpg" alt="" />
          </div>
          <h2>Lenovo Pro Para Negócios</h2>
          <p>Inscreva-se gratuitamente, obtenha benefícios exclusivos e atendimento personalizado.</p>
        </div>
        <div className="card">
          <div className="homeIMGC">
            <img src="https://p3-ofp.static.pub/ShareResource/na/homepage/campaign-card/lenovo-gaming-still-life.jpg" alt="" />
          </div>
          <h2>Gaming</h2>
          <p>Jogue de forma mais inteligente com a Lenovo.</p>
        </div>
        <div className="card">
          <div className="homeIMGC">
            <img src="https://p3-ofp.static.pub/ShareResource/na/homepage/merchandising-card/lenovo-education-lifestyle.jpg" alt="" />
          </div>
          <h2>Educaçao</h2>
          <p>O futuro precisa de você, libere sua paixão e construa um mundo melhor.</p>
        </div>
      </div>      
    </main>
  );
}

export default Home;