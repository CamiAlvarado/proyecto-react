import houseofdragon from '../../img/house-of-dragon.jpg';
import bettercallsaul from '../../img/better-call-saul.jpg';
import strangerthings from '../../img/stranger-things.jpg';
import theringsofpower from '../../img/the-rings-of-power.jpg';
import dahmer from '../../img/dahmer.jpg';
import moonknight from '../../img/Moon-knight.jpg';
import peakyblinders from '../../img/peaky-blinders.jpg';
import msmarvel from '../../img/ms-marvel.jpg';
import './styles.css'

const Cards = () => {
    return (
        <section className="section">
            <div className="section__title">
                <h4>Mejores series 2022</h4>
            </div>
            <div className="section__cards">
                <div className="section__card">
                    <div className="section__card--imagen">
                        <img src={houseofdragon} alt="HOD" />
                    </div>
                    <div className="section__card--body">
                        <h4 className="section__card--title">House of Dragon</h4>
                        <p className="section__card--text">
                            <ul>
                                <li>Año: 2022</li>
                            </ul>
                        </p>

                    </div>
                </div>

                <div className="section__card">
                    <div className="section__card--imagen">
                        <img src={bettercallsaul} alt="BCS" />
                    </div>
                    <div className="section__card--body">
                        <h4 className="section__card--title">Better Call Saul</h4>
                        <p className="section__card--text">
                            <ul>
                                <li>Año: 2022</li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div className="section__card">
                    <div className="section__card--imagen">
                        <img src={strangerthings} alt="Stranger-things" />
                    </div>
                    <div className="section__card--body">
                        <h4 className="section__card--title">Stranger Things</h4>
                        <p className="section__card--text">
                            <ul>
                                <li>Año: 2022</li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div className="section__card">
                    <div className="section__card--imagen">
                        <img src={theringsofpower} alt="The-rings-of-power" />
                    </div>
                    <div className="section__card--body">
                        <h4 className="section__card--title">The Rings of Power</h4>
                        <p className="section__card--text">
                            <ul>
                                <li>Año: 2022</li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div className="section__card">
                    <div className="section__card--imagen">
                        <img src={dahmer} alt="Dahmer" />
                    </div>
                    <div className="section__card--body">
                        <h4 className="section__card--title">Dahmer</h4>
                        <p className="section__card--text">
                            <ul>
                                <li>Año: 2022</li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div className="section__card">
                    <div className="section__card--imagen">
                        <img src={moonknight} alt="Moonknight" />
                    </div>
                    <div className="section__card--body">
                        <h4 className="section__card--title">Moon Knight</h4>
                        <p className="section__card--text">
                            <ul>
                                <li>Año: 2022</li>
                            </ul>
                        </p>
                    </div>
                </div>


                <div className="section__card">
                    <div className="section__card--imagen">
                        <img src={peakyblinders} alt="Peaky-blinders" />
                    </div>
                    <div className="section__card--body">
                        <h4 className="section__card--title">Peaky Blinders</h4>
                        <p className="section__card--text">
                            <ul>
                                <li>Año: 2022</li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div className="section__card">
                    <div className="section__card--imagen">
                        <img src={msmarvel} alt="Ms-marvel" />
                    </div>
                    <div className="section__card--body">
                        <h4 className="section__card--title">Ms Marvel</h4>
                        <p className="section__card--text">
                            <ul>
                                <li>Año: 2022</li>
                            </ul>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Cards