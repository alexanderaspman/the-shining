import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  Animated,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from "react-native";
const getTransformTransision = (animation, y, x, opicity) => {
  const xAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, x]
  });
  const yAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, y]
  });
  const opicityAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, opicity]
  });

  return {
    opicity: opicityAnimation,
    transform: [
      { x: xAnimation },
      { u: yAnimation },
      { opicity: opicityAnimation }
    ]
  };
};
export default function Raining() {
  const animations = useRef([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0)
  ]);
  const scale = useRef(new Animated.Value(0));
  const [animating, setAnamating] = useState(true);
  //   const showAnimations = animations.map(animation => {
  //     return Animated.spring(animation, {
  //       toValue: 1,
  //       friction: 4
  //     });
  //   });
  // //   const hideAnimations = animations
  //     .map(animation => {
  //       return Animated.timing(animation, {
  //         toValue: 0,
  //         duration: 50
  //       });
  //     })
  //     .reverse();
  //   Animated.parallel([
  //     Animated.spring(scale, {
  //       toValue: 2,
  //       friction: 4
  //     }),
  //     Animated.sequence([
  //       Animated.stagger(50, showAnimations),
  //       Animated.delay(100),
  //       Animated.stagger(50, hideAnimations)
  //     ])
  //   ]).start(async () => {
  //     await setAnamating(false);
  //     setScale(Value(0));
  //   });

  //   const bouncyHeart = scale.interpolate({
  //     inputRange: [0, 1, 2],
  //     outputRange: [1, 0.8, 1]
  //   });
  //   const heartButtonStyle = {
  //     transform: [{ scale: bouncyHeart }]
  //   };

  const ballAnimatedValue = useRef([ballAnimatedValue2, ballAnimatedValue3])
    .current;
  const ballAnimatedValue2 = useRef(new Animated.Value(0)).current;
  const ballAnimatedValue3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      // runs given animations in a sequence

      Animated.parallel([
        Animated.timing(ballAnimatedValue2, {
          toValue: 1,
          duration: 500
        }),
        Animated.timing(ballAnimatedValue3, {
          toValue: 1,
          duration: 390
        })
      ]),
      Animated.sequence([
        // increase size
        Animated.timing(ballAnimatedValue2, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        }),

        Animated.timing(ballAnimatedValue3, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true
        })
      ])
    ).start();
  });
  const mergeAnimation = (
    ballAnimatedValue,
    ballAnimatedValue2,
    ballAnimatedValue3
  ) => {
    return { ballAnimatedValue, ballAnimatedValue2, ballAnimatedValue3 };
  };
  const moveBall = () => {
    Animated.timing(ballAnimatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };

  const yVal = ballAnimatedValue2.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 350]
  });

  const yVal2 = ballAnimatedValue3.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 350]
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal
      }
    ]
  };
  const animStyle2 = {
    transform: [
      {
        translateY: yVal2
      }
    ]
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container} onPress={moveBall}>
        <Animated.View style={[styles.ball, animStyle]}>
          <Image style={styles.dog} source={require("../assets/group.png")} />
        </Animated.View>
        <Animated.View style={[styles.ball, animStyle2]}>
          <Image style={styles.cat} source={require("../assets/vector1.png")} />
        </Animated.View>
        <Animated.View style={[styles.ball, animStyle]}>
          <Image style={styles.dog1} source={require("../assets/group.png")} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },

  cat: {
    height: 40,
    width: 40,
    marginHorizontal: 30,
    marginTop: -35
  },
  dog: {
    height: 40,
    width: 55
  },
  dog1: {
    height: 40,
    width: 55,
    marginTop: -30
  }
});
