import { Testimonial } from '../models/Testimoniales.js';

const guardarTestimonial = async (req,res) => {

    //Validar...

    const {nombre, email, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre está vacío'})
    }

    if(email.trim() === ''){
        errores.push({mensaje:'El email está vacío'})
    }

    if(mensaje.trim() === ''){
        errores.push({mensaje:'El mensaje está vacío'})
    }

    if(errores.length > 0){
        //Consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();
        //Mostrar la vista con errores
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre,
            email,
            testimoniales
        })
    } else{
        //Almacenar en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo: email,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }
    }
}

export {
 guardarTestimonial
};