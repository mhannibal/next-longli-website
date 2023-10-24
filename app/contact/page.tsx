import ContactForm from "./contact-form";

export default function ContactPage(){
    return (
        <section className='flex flex-col bg-white text-gray-900 items-center md:h-screen py-24'>
            <h1 className="font-semibold text-xl my-8">نتشرف بقراءة ملاحظاتك أو استفساراتك
            </h1>
            <ContactForm />
        </section>
    )
}