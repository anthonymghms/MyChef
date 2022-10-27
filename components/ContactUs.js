import * as React from 'react';
import withUseForm from '../util/withUseForm';

export class Contact extends React.Component{

    
    renderTitle(){
        return(           
            <div className="row">
                <div className="col-12 text-center mb-5" data-aos="fade-up" data-aos-delay="">
                    <div className="block-heading-1">
                        <span>Get In Touch</span>
                        <h2>Contact Us</h2>
                    </div>
                </div>
            </div>
        )
    }
    
    renderForm() {
        const { register, handleSubmit, formState: { errors } } = this.props;
        const onSubmit = data => console.log(data);

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group row">
                        <div className="col-md-6">
                            <input type="text" className={`form-control ${errors?.firstName?.type === "required" ?  "hasError" : "" }`} placeholder="First Name" {...register("firstName", { required: true})}/>
                            {errors?.firstName?.type === "required" && this.renderRequiredError()}                                           
                        </div>
                        <div className="col-md-6">
                            <input type="text" className={`form-control ${errors?.lastName?.type === "required" ?  "hasError" : "" }`} placeholder="Last Name" {...register("lastName", {required: true})}/>
                            {errors?.lastName?.type === "required" && this.renderRequiredError()} 
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-12">
                            <input type="text" className={`form-control ${errors?.emailAdress?.type === "required" ?  "hasError" : "" }`} placeholder="Email Address" {...register("emailAdress",{required: true,pattern: /(.+)@(.+){2,}\.(.+){2,}/})}/>                                            
                            {errors?.emailAdress?.type === "required" && this.renderRequiredError()}
                            {errors?.emailAdress?.type === "pattern" && <p className="invalid-email">Please enter a valid email address.</p>}
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-12">
                            <textarea className={`form-control ${errors?.message?.type === "required" ?  "hasError" : "" }`} placeholder="Write your message." cols="30" rows="10" {...register("message",{required: true,maxLength: 255})}/>
                            {errors?.message?.type === "required" && this.renderRequiredError()}
                            {errors?.message?.type === "maxLength" && <p className="maximum-characters">255 characters maximum!</p>}
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="d-flex col-md-6 w-100">
                            <input type="submit" className="btn btn-block btn-primary-1 message-btn text-white py-3 px-5 ms-auto" value="Send Message">                                            
                            </input>
                        </div>
                    </div>
                </form>
        )
    }

    renderDetails(){
        return(
            <div className="col-lg-4 ml-auto details" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-black">Need to know more details? Get In Touch.</h2>
                <input type="submit" className="btn btn-block btn-primary-1 message-btn text-white py-3 px-5 ms-auto" value="Get Started">                                            
                </input>
            </div>
        )
    }
    
    renderContent(){
        return(
            <div className="row">
                <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="100">
                    {this.renderForm()}           
                </div>
                {this.renderDetails()}       
            </div>
        )
    }

    renderRequiredError(){
        return <p className="required-error">This field is required!</p>
    }

    render() {
        return (
            <div className="site-section" id="contact-section">
                <div className="container">
                    {this.renderTitle()}
                    {this.renderContent()}
                </div>
            </div>
        )
    }



}

export default withUseForm(Contact);