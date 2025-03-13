import React, { useEffect } from "react";
import {  Field, Formik, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import { Text, View } from "react-native";
import { AuthContext } from "./provider/provider";

const validationSchema = Yup.object().shape({
    

    email: Yup.string()
        .email("Email n'est pas valide")
        .required("Email est obligatoire"),
    password: Yup.string()
        .required("Password est obligatoire")
        

  });


  const LoginForm =({navigation})=>{
    const initialValues = {
        email: "",
        password: ""
      };
    const { dataUser , setDataUser} = React.useContext(AuthContext);


      const handleSubmit = async (values) => {
        try {
         const response = await fetch("http://192.168.62.154:8080/api/login", {
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
         console.log("connexion réussie avec succés" , data);
         setDataUser(data);
         console.log("dataUser", dataUser);
         navigation.navigate("listeCours");
         
        
         
        } 
        catch (error) {
         console.log(error);
        }
       }  

      useEffect(() => {
        console.log("dataUser", dataUser);
      }
      , [dataUser]);
 return(
  <div>
    <h1>Connexion</h1>
    <Formik 
    initialValues={initialValues}
    onSubmit={(values)=>{handleSubmit(values)}}
    validationSchema={validationSchema}
    >
          {({resetForm})=>(
            
                    <Form>
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
                        <button type="submit">Submit</button>
                        <button type="button" onClick={() => resetForm()}>Reset</button>
                    </div>
                </Form>
            )}

    </Formik>
  </div>
   

  );

}

export default LoginForm;