

const QuestionnaireComplete = () => {

    const [formEmail, setEmail] = useState("");

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();//avoid page reload to handle this request with javascript
        //Now sign the user in.
        console.log('Form Submission!');
    };

    return (
        <div className="complete">
            <p>Questionnnaire Complete! We will contact you shortly</p>


        </div>


    );
}





export default QuestionnaireComplete;