import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function CardServices({title,image,link,output}){

    const {ref: refCustom, useInView:inView1}=useInView({
        threshold: 0.25,
    });
    return link ?(
        output ? (
            <Link ref={refCustom}
            className='card'
            to={link}
            target="_blank"
            preventScrollReset={true}
        >
            
                <img src={image}/>
                <div class="card__content">
                    <p class="card__title">{title}</p>
                </div>
            
        </Link>
        ):(
            <Link ref={refCustom}
            className='card'
            to={link}
            target="_blank"
            preventScrollReset={true}
        >
            
                <img src={image} />
                <div class="card__content">
                    <p class="card__title">{title}</p>
                </div>
        </Link>
        )
      ):(
        <Link ref={refCustom}
            className='card'
            to={link}
            target="_blank"
            preventScrollReset={true}
        >
            
                <img src={image} />
                <div class="card__content">
                    <p class="card__title">{title}</p>
                </div>
            
        </Link>
      );
}