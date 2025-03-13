import React from "react";
import {  Field, Formik, Form, ErrorMessage} from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
    nom: Yup.string()
        .required("Nom est obligatoire")
        .min(3, "Nom doit avoir au moins 3 characters")
        .max(255, "Nom ne peut pas excéder 255 characters"),

    prenom: Yup.string()
        .required("Nom est obligatoire")
        .min(3, "Nom doit avoir au moins 3 characters")
        .max(255, "Nom ne peut pas excéder 255 characters"),

    email: Yup.string()
        .email("Email n'est pas valide")
        .required("Email est obligatoire"),
    password: Yup.string()
        .required("Password est obligatoire")
        .min(8, "Password must have at least 8 characters")
        .max(16, "Password cannot exceed 16 characters"),

    sexe: Yup.string()
        .required("Sexeest obligatoire")
    ,

    role: Yup.string()
  });



const FormRegister =({navigation})=>{
    const initialValues = {
        nom: "",
        prenom: "",
        email: "",
        password: "",
        sexe: "",
        role: "admin"
      };


  const handleSubmit = async (values) => {
    try {
     const response = await fetch("http://192.168.62.154:8080/api/users", {
       method: "POST",
       headers: {
         "content-Type": "application/json",
       },
       body: JSON.stringify(values),
     });
 
    
     if (!response.ok) {
         throw new Error("Une erreur est survenue");
      
     }
     const data = await response.json();
     console.log("compte creer avec succés" , data);
    navigation.navigate("login");
     
    } 
    catch (error) {
     console.log(error);
    }
   }


      return(
        <div>
             <h1>Register</h1>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}>
            {({resetForm}) => (

                <Form>
                    <div>
                        <label htmlFor="nom">Nom</label>
                        <Field type="text" id="nom" name="nom" placeholder="Nom" />

                        <ErrorMessage name='nom'></ErrorMessage>
                    </div>
                    <div>
                        <label htmlFor="prenom">Prenom</label>
                        <Field type="text" id="prenom" name="prenom" placeholder="prenom" />
                        <ErrorMessage name='prenom'></ErrorMessage>
                        
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email" placeholder="email" />
                        <ErrorMessage name='email'></ErrorMessage>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field type="password" id="password" name="password" placeholder="password" />
                        
                        <ErrorMessage name='password'></ErrorMessage>
                    </div>
                    <div>
                        <label htmlFor="sexe">Sexe :</label>
                        <div>
                            <label htmlFor="homme">Homme</label>
                            <Field type="radio" id="homme" name="sexe" value="homme" />
                        </div>
                        <div>
                            <label htmlFor="femme">Femme</label>
                            <Field type="radio" id="femme" name="sexe" value="femme" />
                        </div>
                        <ErrorMessage name='sexe'></ErrorMessage>
                    </div>
                    <div>
                        <label htmlFor="role">Role</label>
                        <Field type="text" id="role" name="role" placeholder="role" />

                       
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                        <button type="button" onClick={() => resetForm()}>Reset</button>
                    </div>
                </Form>)}
        </Formik>

        </div>
       

      );

}

export default FormRegister;
    
