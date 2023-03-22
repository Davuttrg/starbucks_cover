import { useNavigate } from "react-router-dom";
import "./home.scss";
export const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/login");
  return (
    <section className="home-hero">
      <div className="container">
        <div>
          <div className="container__header">
            <h1>It's not just Coffee </h1>
            <h1>
              It's <span className="container__header--brand">Starbucks</span>
            </h1>
          </div>
          <div className="container__body">
            <h2>Join today to earn your way to free coffe and treats </h2>
          </div>
          <div className="container__action">
            <button onClick={handleNavigate}>Get Start to Starbucks</button>
          </div>
        </div>

        <div className="container__file">
          <img
            src="https://i.pinimg.com/originals/f5/77/da/f577daa16da6b4513ea09d7e6b060fe8.gif"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
