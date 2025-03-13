import React, { useContext } from "react";
import {  Field, Formik, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import { AuthContext } from "../users/provider/provider";


const validationSchema = Yup.object().shape({
    titre: Yup.string()
        .required("titre est obligatoire"),
        

    description: Yup.string()
        .required("description est obligatoire"),
        

    prix: Yup.string()
        .required("prix est obligatoire"),


        credit: Yup.string()
        .required("credit est obligatoire")
        
  });



  
const AddCours = ({navigation}) => {
    const initialValues = {
        titre: "",
        description: "",
        prix: "",
        credit: "",
      };

      const { dataUser} = useContext(AuthContext);

      const handleSubmit = async (values) => {
        try {
         const response = await fetch("http://192.168.62.154:8080/api/cours", {
           method: "POST",
           headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${dataUser.token}`,
        },

           body: JSON.stringify(values),
         });
     
        
         if (!response.ok) {
             throw new Error("Une erreur est survenue lors de l'ajout du cours");
          
         }
         const data = await response.json();
         console.log("cours ajouter avec succés" , data);
        navigation.navigate("listeCours");
         
        } 
        catch (error) {
         console.log(error);
        }
       }



      return(
        <div>
             <h1>Ajouter un cours </h1>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({resetForm}) => (
                

                <Form>
                    <div>
                        <label htmlFor="titre">Titre</label>
                        <Field type="text" id="titre" name="titre" placeholder="titre" />

                        <ErrorMessage name='titre'></ErrorMessage>
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <Field type="text" id="description" name="description" placeholder="description" />
                        <ErrorMessage name='description'></ErrorMessage>
                        
                    </div>

                    <div>
                        <label htmlFor="prix">Prix</label>
                        <Field type="number" id="prix" name="prix" placeholder="prix" />
                        <ErrorMessage name='prix'></ErrorMessage>
                    </div>
                    <div>
                        <label htmlFor="credit">Credit</label>
                        <Field type="number" id="credit" name="credit" placeholder="credit" />
                        
                        <ErrorMessage name='credit'></ErrorMessage>
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

export default AddCours;
