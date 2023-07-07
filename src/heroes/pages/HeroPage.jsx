import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { heroId } = useParams();
  const navigate=useNavigate();

  const hero = useMemo(()=>getHeroById(heroId),[heroId]);

  const onNavigateBack=()=>{
    navigate(-1)
  }

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={require(`../../assets/heroes/${heroId}.jpg`)}
          alt={hero.superhero}
          className="img-thumbnail"
        />
        
      </div>

      <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li>
            <li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li>
            <li className="list-group-item"><b>Fisrt apperarance: </b>{hero.first_appearance}</li>
          </ul>

          <h5 className="mt-5">Characters</h5>
          <p>{hero.characters}</p>


          <button className="btn btn-outline-primary" onClick={onNavigateBack}>Regresar</button>
        </div>
    </div>
  );
};