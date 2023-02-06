import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, Dimensions } from "react-native";

import { styles } from "./styles";
import { Card } from "../../components/index";
import { colors } from "../../constants";

const GameOver = ({ rounds, selectedNumber, onHandleRestartGame }) => {
  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };

  const statePortrait = () => {
    setIsPortrait(onPortrait);
  };

  useEffect(() => {
    const suscription = Dimensions.addEventListener("change", statePortrait);

    return () => {
      suscription.remove();
    };
  });

  return (
    <View style={styles.container}>
      <Card style={isPortrait ? styles.content : styles.contentLandscape}>
        <Image
          source={{
            uri: "https://www.pngmart.com/files/17/Game-Over-Logo-Transparent-PNG.png",
          }}
          style={styles.image}
        />
        <Text style={styles.text}>Rounds: {rounds}</Text>
        <Text style={styles.text}>Number selected: {selectedNumber}</Text>
        <Button title="Restart game" onPress={onHandleRestartGame} color={colors.primary} />
      </Card>
    </View>
  );
};

export default GameOver;
