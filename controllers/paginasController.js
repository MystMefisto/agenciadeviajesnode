import {
    Viaje
} from '../models/Viaje.js';
import { Testimonial } from "../models/Testimoniales.js";

const paginaInicio = async (req, res) => {
    //Consultar 3 viajesdel modelo viaje


    try {
        const viajes = await Viaje.findAll({limit:3});
        const testimoniales = await Testimonial.findAll({limit:3})
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes,
            testimoniales
        });
    } catch (error) {
        console.log(error)
    }
}

const paginaNosotros = (req, res) => {
    //Req - lo que enviamos ; res - lo que express nos responde
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {
    //Consultar base de datos
    const viajes = await Viaje.findAll();

    // console.log(viajes);

    res.render('viajes', {
        pagina: 'Viajes',
        viajes,
    });
}

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error)
    }

}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const {
        slug
    } = req.params;

    try {
        const viaje = await Viaje.findOne({
            where: {
                slug
            }
        });

        res.render('viaje', {
            pagina: 'Información viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}