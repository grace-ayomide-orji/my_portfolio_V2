import { useRef , useState } from "react";
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import loader from '../assets/icons/loader.svg'


const Toast = ({ message, type, onClose }) => {
    return (
        <div className="fixed inset-0 z-[1000000] m-auto sm:w-[350px] sm:h-[250px] w-[280px] h-[220px] flex flex-col justify-center items-center px-4 py-2 rounded-md shadow-lg text-center bg-[#fff]">
            <p className="sm:text-[50px] text-[40px] mb-[30px]">{type === "success" ? "✅" : "❌"}</p>
            <p className="text-[18px]">{message}</p>
            <button className="ml-4 text-[18px] bg-[#801B36] px-[50px] py-[8px] mt-[20px] text-white 
            hover:bg-[#9A2645] rounded-[8px]" 
            onClick={onClose}>Okay</button>
        </div>
    );
};

function Contact() {


    const form = useRef();
    const [toast, setToast] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    
    const  sendEmail = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        try{

            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            // console.log("Email sent successfully:", result.text);
            setToast({ message: "Message sent successfully! Thank you!", type: "success" });
            form.current.reset();

        } catch (error) {
            // console.error("Error sending email:", error.message || error);
            setToast({ message: "Failed to send message. Please try again.", type: "error" });
        }
        finally {
            setIsSubmitting(false);
            setTimeout(() => setToast(null), 10000);
        };

    }
    
    return(   
            <div className="contact-parent parent" id="contact-me" data-aos='fade-up' data-aos-delay='200' data-aos-easing="ease-in-out">

                <h2 className="contact-header w-full text-center font-bold md:mb-[50px]">Let's Connect!</h2>

                <div className="contact-info-body w-full md:w-[48%]"> 
                    
                    <p>Have questions about me or my work? Whether it's coding, collabs, or even skincare and gym tips, I'm always up for a great chat. Drop me a message!</p>
                    <p>Thanks for visiting my portfolio, and I can't wait to hear from you!</p>
                    <p className="special-text mt-3">Drop me a line at: <a href="mailto:oloruntobiga@gmail.com" target="_blank">oloruntobiga@gmail.com</a></p>
                    <p className="special-text">Contact me directly: +234 816 853 3188</p>

                    <div className="flex gap-10 mt-[20px]">
                        <a href="https://github.com/grace-ayomide-orji" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} className="fas" /></a>
                        <a href="https://www.linkedin.com/in/grace-orji-ab3a1a263" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fas" /></a>
                        
                    </div>
                </div>


                <div className="contact-form-body w-full md:w-[48%]">

                    <form ref={form} onSubmit={sendEmail} method="POST">
                        <input required type="hidden" name="title" value='Message from Portfolio Contact Form'/>
                        <input required type="text" name="name" placeholder="YOUR NAME"/>
                        <input required type="email" name="email" placeholder="YOUR EMAIL"/>
                        <textarea name="message"  placeholder="MESSAGE" rows="5" className="pt-[10px] mb-[20px]"></textarea>
                        <button type="submit" disabled={isSubmitting}> {isSubmitting ? (
                            <img src={loader} alt="Loading..." className="block h-[30px] w-[30px]" />
                        ) : (
                            <>
                                Send Message <FontAwesomeIcon icon={faPaperPlane} />
                            </>
                        )}</button>

                        
                    </form>
                    
                </div>

                {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
                
            </div>
    )
}
export default Contact