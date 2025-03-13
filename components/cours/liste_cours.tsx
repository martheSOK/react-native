
import React, { useContext, useEffect, useState }  from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../users/provider/provider";


const ListeCours =  ({navigation}) => {
    const [cours, setCours] = useState([]);


    const { dataUser} = useContext(AuthContext);



    useEffect(() => {
        
        fetch("http://192.168.62.154:8080/api/cours",{
            method: "GET",
            
        }).then((response) => response.json())
      .then((data) => {
          console.log(data);
          
            setCours(data);
        }).
        catch((error) => {
            console.log(error);
        });
    }, [])




    const handleDelete = async (id:number) => {
        try {
            const response = fetch(`http://192.168.62.154:8080/api/cours/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${dataUser.token}`,
                }

                
            });
            setCours((cours)=> cours.filter((cours) => cours.id !== id));
          }
          catch (error) {
            console.log(error);
    }
    }

    return (

    
        <ScrollView style={styles.container}>
          <Button 
            title="Ajouter un cours" 
            onPress={()=>navigation.navigate('addCours')}>
            
          </Button>
            <h2 style={styles.cell}> Listes Des Cours </h2>
        
        {/* En-têtes du tableau */}
          <View style={styles.row}>
            <Text style={styles.cell}><b>Titre</b></Text>
            <Text style={styles.cell}><b>Description</b></Text>
            <Text style={styles.cell}><b>Prix</b></Text>
            <Text style={styles.cell}><b>Credit</b></Text>
            <Text style={styles.cell}><b>Action</b></Text>
          </View>
    
          <FlatList
            data={cours}
            keyExtractor={(item) => item.id.toString()}  // Chaque élément doit avoir une clé unique
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.cell}>{item.titre}</Text>  
                <Text style={styles.cell}>{item.description}</Text> 
                <Text style={styles.cell}>{item.prix}</Text> 
                <Text style={styles.cell}>{item.credit}</Text>
                <Text style={styles.cell}>
                    {/* <button onClick={handleDelete(item.id)}></button> */}
                    <Button title="Supprimer" onPress={()=>{handleDelete(item.id); }}></Button>
                    <Button title="Modifier" onPress={()=>{navigation.navigate('editCours', item)}}>

                    </Button>
                </Text> 
              </View>
            )}
          />
        </ScrollView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
        width: '100%',
        borderCollapse: true,
        
      },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      cell: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        flex: 1,
        textAlign: 'center',
      },
    });
    
    export default ListeCours;