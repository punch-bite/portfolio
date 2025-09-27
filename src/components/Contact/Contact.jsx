import emailjs from '@emailjs/browser';
import { useState, useEffect } from "react";
import './Contact.css';

export const Contact = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    // Gestionnaire de changement pour tous les champs
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Effacer l'erreur du champ quand l'utilisateur tape
        if (errors[name]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
        }
    };

    // Validation en temps réel
    useEffect(() => {
        const newErrors = {};

        if (formData.username.length < 2) {
            newErrors.username = 'Le nom doit contenir au moins 2 caractères';
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email invalide';
        }

        if (formData.message.length < 100) {
            newErrors.message = 'Le message doit contenir au moins 150 caractères';
        }

        setErrors(newErrors);
    }, [formData]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Récupérez ces valeurs depuis votre tableau de bord EmailJS
        const serviceID = import.meta.env.VITE_SERVICE_EMAIL_ID;
        const templateID = import.meta.env.VITE_TEMPLATE_EMAIL_ID;
        const publicKey = import.meta.env.VITE_CLE_EMAIL_PUBLIC;

        // Validation finale avant soumission
        if (Object.keys(errors).length === 0) {
            try {
                // console.log('Données du formulaire:', formData);
                const result = await emailjs.send(serviceID, templateID, formData, publicKey);

                if (result.status === 200) {
                    setIsSuccess(true);
                }

                // Simulation d'envoi
                await new Promise(resolve => setTimeout(resolve, 2000));

                setFormData({
                    username: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } catch (error) {
                console.error('Erreur:', error);
                alert('Erreur lors de l\'envoi');
            }
        }

        setIsSubmitting(false);
    };

    useEffect(() => {
        if (isSuccess) {
            setShowSuccess(true);
            const timer = setTimeout(() => setShowSuccess(false), 2000);
            return () => clearTimeout(timer); // Nettoyage
        }
    }, [isSuccess]);

    return (
        <section id='contact' className="contact pb-5">
            <div className="container">
                <div className="row justify-content-center mt-5 py-5">
                    <div className="col-md-6 col-12">
                        <h1 className='text-white text-uppercase fw-bolder fade-in-up page-title'>Contactez-Moi</h1>
                        <form onSubmit={handleSubmit} method="post" className="fade-in-up">
                            <div className="form-group mb-3">
                                <label htmlFor="username">Name</label>
                                <input type="text" name="username" id="username"
                                    className={`form-control py-3 bg-black text-white-50 ${errors.username ? 'error' : ''}`}
                                    placeholder='Name'
                                    aria-placeholder='your Name'
                                    value={formData.username}
                                    onChange={handleChange} />
                                {errors.username && <span className="error-message">{errors.username}</span>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email"
                                    className={`form-control py-3 bg-black text-white-50 ${errors.email ? 'error' : ''}`}
                                    placeholder='E-mail' aria-placeholder='your email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required aria-required="true" />
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="subject">Sujet</label>
                                <input type="subject" name="subject" id="subject"
                                    className={`form-control py-3 bg-black text-white-50 ${errors.subject ? 'error' : ''}`}
                                    placeholder='Quel-est le sujet?' aria-placeholder='your subject'
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required aria-required="true" />
                                {errors.subject && <span className="error-message">{errors.subject}</span>}
                            </div>
                            <div className="from-group">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" rows="10"
                                    className={`form-control p-3 my-2 bg-black text-white-50 ${errors.message ? 'error' : ''}`}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message..."
                                    required
                                    aria-required={true}></textarea>
                                {errors.message && <span className="error-message">{errors.message}</span>}
                            </div>
                            <button disabled={isSubmitting || Object.keys(errors).length > 0}
                                onClick={handleChange} type="submit"
                                className='btn bg-warning-subtle bg-gradient col-12 py-3 text-warning-emphasis mt-5 fw-bold submit-btn'
                            >
                                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {showSuccess && (
                <div className="container d-flex justify-content-center align-items-center position-fixed bottom-0 start-0 end-0 fade-in-up bg-transparent" style={{ width: '100%' }}>
                    <div className='rounded alert alert-success border-success  text-success-emphasis shadow col-md-4 col-11 mb-5 text-center fw-bolder animate__animated animate__fadeInUp'>
                        Message envoyé avec succès!
                    </div>
                </div> )
            }

        </section>
    )
}