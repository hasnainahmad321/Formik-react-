import { Fragment } from 'react';
import { Formik,Form, Field,ErrorMessage } from 'formik';
import * as yup from "yup"

const Basic = () => {
  const defaultValue = {
    name:"",
    email:"",
    password:"",
    gender:"",
    termAndCond:false,
    TransportMode:""
  }
  const validationSchema=yup.object().shape({
    name:yup.string().required("please enter your name"),
    email:yup.string().required("please enter your email").email("please valid email"),
    password:yup.string().required("please enter your password"),
    gender:yup.string().required("please select gender"),
    termAndCond:yup.boolean().oneOf([true],"please accept term adn condition"),
    TransportMode:yup.string().required("please select transport mode")

  })
  const handleSubmit=(values)=>{
    console.log("values",values)
  }

   return (
    <Fragment>
      <div className='container'>
        <div className='col-md-15 text-center mt-5'>
    <h1 className=''>Form with validation formik and yup  library</h1>

    <Formik initialValues={defaultValue}
     validationSchema={validationSchema}
     onSubmit={handleSubmit}>
      <Form >
        <div className='col-md-12 mt-4'>
        <Field type="text" name="name" placeholder="Enter your name" className="form-control"/>
        <p className='text-danger'>
          <ErrorMessage name= "name"/>
        </p>
         </div>
         <div className='col-md-12 mt-4'>
        <Field type="text" name="email" placeholder="Enter your Email" className="form-control" />
        <p className="text-danger">
          <ErrorMessage name="email"/>
        </p>
        </div>
        <div className='col-md-12 mt-4'>
        <Field type="text" name="password" placeholder="Enter your password " className="form-control"/>
        <p className="text-dandewr">
          <ErrorMessage name="password"/>
        </p>
        </div>
        <div className='col-md-12 mt-4'>
          <Field component ="select" name="gender" placeholder="select your gender" className="form-control">
          <option value="" disabled>Please select</option>
          <option value="male">Male</option>
          <option value="female">female</option>
          </Field>
          <p className='text-danger'>
            <ErrorMessage name='gender'/>
          </p>
        </div>
        <div className='col-md-12 mt-4'>
          <label className='form-inline'>
          <Field type="checkbox" name="termAndCond"></Field>
          I accept term and Condition 
          </label>
          <p className='text-danger'>
            <ErrorMessage name="termAndCond"/>
          </p>
        </div>
        < div className='col-md-12 mt-4'>
        <label>
          <Field type="radio" name="TransportMode " value ="bike">
          </Field>
          Bike
        </label>
        <label>
        <Field type="radio" name="TransportMode " value ="Car">
          </Field>
          Car
        </label>
        <p className='text-ellipsis'>
        <ErrorMessage name="TransportMode"/>
        </p>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>

      </Form>

    </Formik>
    </div>
    </div>
    </Fragment>
   )
  
}

export default Basic;