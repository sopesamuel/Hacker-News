import React, { useState } from "react";
import { View, Linking, StyleSheet, Text, Image } from "react-native";
import { baseStyles } from "../styles/baseStyles";
import CustomText from "../components/customText";
import Button from "./button";
import { getData } from "../utils/dataHandler";
import Lottie from "lottie-react-native";
import moment from "moment";
import styled from "styled-components";
import { Dimensions } from "react-native";




const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').width;

const Post = ({ story }) => (

    
  <View style={styles.post}>
 

    <CustomText
      style={styles.postContent}
      onPress={() => Linking.openURL(story.url)}
    >
        <Image
            source={{
            uri: "https://source.unsplash.com/featured/?{nature}",
            }}
            resizeMode="cover"
            style={styles.imageStyle}
        />
          
      <View style={styles.textWrapper}>
        <CustomText style={styles.heading2}>{story.title}</CustomText>
      </View>
      <View style={styles.textWrapper}>
        <CustomText style={styles.details}>
          Posted By: {story.by} at{" "}
          {new Date(parseInt(story.time) * 1000).toLocaleString()}
        </CustomText>
        <Text style={styles.pub}>Published {moment(story.time * 1000).fromNow()}</Text>
      </View>
      <CustomText style={styles.pub}>
    
      </CustomText>
    </CustomText>

   
  </View>
);

const Posts = ({ results, setData, hasSearched }) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoreData = async () => {
    setIsLoading(true);
    const newData = await getData(20, results.length);
    setData((prevData) => [...prevData, ...newData]);
    setIsLoading(false);
  };

  return (
    <View style={{ ...baseStyles.container, ...styles.container }}>
        <View>
         <Image
                 source= {require('../assets/pexels-pixabay-267394.jpg')}
                    style={Wrap.wrap}
                    onPressItem={() => Linking.openURL(story.url)}
                  />
                    <CustomText style={{position: 'absolute',fontSize: 35, color: 'white'}}>
                        Top Stories Today
                    </CustomText>
         </View>
         <CustomText  style={{fontSize: 20,  color: '#FAC898'}}>
            Latest Stories
         </CustomText>
   
      {results?.map((story, index) => (
        <Post key={index} story={story} />
       
      ))}
    
      {isLoading ? (
        <View style={{ width: 120, height: 120 }}>
          <Lottie source={require("../assets/loader.json")} autoPlay loop />
        </View>
      ) : !results.length ? (
        <View>
         <Text>
        <CustomText style={styles.noResults}>No Results</CustomText>
         </Text> 
        
        </View>
      ) : (
        <>
          {!hasSearched && (
            <Button style={styles.button} onPress={fetchMoreData}>
             <Text>
             <CustomText>Load more</CustomText> 
             </Text>
             
             
            </Button>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  imageStyle: {
    width: 60,
    height: 60,
  
  },
  post: {
    width: 350,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: "#f6f6ef",
    shadowColor: "#000a",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  postContent: {
    width: 250,
    paddingTop: 0,
    paddingBottom: 10,
    paddingLeft: 10
  },
  textWrapper: {
    width: 340,
    paddingTop: 0,
    paddingRight: 10,
    paddingBottom: 0,
    paddingLeft: 10,
  },
  heading2: {
    fontSize: 14,
    paddingTop: 10,
    width: 230
  },
  noResults: {
    fontSize: 30,
    color: "#0008",
    marginTop: 20,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "#FAC898",
    marginVertical: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  details: {
    color: "#0009",
    fontSize: 11,
    marginLeft: 60
  },
  pub:{
    color: "#f9581b",
    fontSize: 11,
    marginLeft: 60
  }
});

const Wrap = {
    wrap:{
        width: WIDTH,
        height:HEIGHT * 0.5
    }
    }

export default Posts;