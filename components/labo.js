import React, {Component} from 'react'; 
import './labo.css';
class Labo extends Component{
    render(){
        const {title} = this.props; 
        const adresse = this.props.adresse;
        const {parking} = this.props;
        const qualites = this.props.qualite.map((h, index) => {
            return <li key={index}>{h}</li> 
        })
        const image= this.props.img;
        return(
                <div className='card' >
                    <div className="img">
                        <img src={image} alt={title} className='img2'></img>
                    </div>
                    <div>
                        <h1> {title} </h1>
                        <p>{adresse}</p>
                        <p>Un parking est à votre diposition : {parking}</p>
                        <ul>{qualites}</ul>
                    </div>
                </div>
        )
    }
}
export default Labo ; 


