import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react'
import * as yup from 'yup';

function NewContact() {
    const validationSchema = yup.object({
        firstName: yup
          .string()
          .required('First name is required'),
        lastName: yup
          .string(),
        email: yup.string().email().required(),
        phone: yup.string().required('Phone is required').min(10, "Phone should be at least")
      });
      const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName:"",
          email: 'foobar@example.com',
          contacts:[
            {
                phone:''
            }
          ],
          dob: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          console.log(JSON.stringify(values, null, 2));
        },
      });
      
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <TextField
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            />
        </form>
    </div>
  )
}

export default NewContact