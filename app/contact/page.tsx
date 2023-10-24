import ContactForm from "./contact-form";

export default function ContactPage(){
    return (
        <section className='flex flex-col bg-white text-gray-900 items-center md:h-screen py-24'>
            <h1>Contact</h1>
            <ContactForm />
        </section>
    )
}