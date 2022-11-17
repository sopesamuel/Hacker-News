import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import { getData } from "../utils/dataHandler";
import { StatusBar } from "expo-status-bar";
import Posts from "../components/posts";
import Lottie from "lottie-react-native";
import { RefreshControl } from 'react-native';

const PostScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleData = async () => {
      setIsLoading(true);
      const dataArray = await getData(20);
      setData(dataArray);
      setIsLoading(false);
    };

    handleData();
  }, []);


  return (
    <ScrollView>
      <StatusBar style="dark" />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
    

        {isLoading ? (
          <View style={{ width: 500, height: 500 }}>
       <Lottie source={require("../assets/loader.json")} autoPlay loop />
          </View>
        ) : (
          <Posts results={data} setData={setData} />
        )}
      </View>
    </ScrollView>
  );
}

export default PostScreen;