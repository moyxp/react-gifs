import React, {useEffect, useState} from 'react';
import Gif from './Gif'
import getGifs from '../services/getGifs';

export default function ListOfGifs ({params}) {   
    const {keyword} = params    
    const [loading, setLoading] = useState(false)

    const [gifs, setGifs] = useState({ loading: false, results:[]})

    useEffect(() => {
        setGifs( actualGifs => ({loading: true, results: actualGifs.results}))
        // console.log('actualizando gifs')    
        getGifs({keyword})
        .then(gifs => {
            setGifs({loading:false, results:gifs})
        })
    }, [keyword])

    if(gifs.loading) return <i>Cargando...✨</i>
    
    return <div>
        {
            gifs.results.map(({id, title, url}) => 
            <Gif
            key={id}
            // {...singleGif} mandar todas las propiedades del objeto
            title={title} 
            id={id} 
            url={url}
            />
            )
        }
    </div>
}