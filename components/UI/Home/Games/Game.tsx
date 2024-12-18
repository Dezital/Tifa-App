//Things we can do to improve this game is as the score increases, the speed of the ball increases, the size of ball decreases,  the controller size decreases and target size increases 
import React, { useState } from "react";
import { setStatusBarHidden } from "expo-status-bar";
import { useEffect } from "react";
import { useSegments } from "expo-router";
import {
  Button,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  useAnimatedGestureHandler,
  withRepeat,
  withSequence,
  BounceIn,
} from "react-native-reanimated";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import { AuthButton, ReuseButton } from "../../Button";

const FPS = 60;
const DELTA = 1000 / FPS;
let SPEED = 15; // adjust this value to control the speed increase
const BALL_WIDTH = 25;

const islandDimensions = { x: 127, y: 11, w: 127, h: 37 };

const normalizeVector = (vector: any) => {
  const magnitude = Math.sqrt(vector.x * vector.x + vector.y * vector.y);

  return {
    x: vector.x / magnitude,
    y: vector.y / magnitude,
  };
};

export default function Game() {
  const [score, setScore] = useState(0);
  SPEED = 10 + (score / 5);
  const [gameOver, setGameOver] = useState(true);
  const segments = useSegments();
  const { height, width } = useWindowDimensions();
  const playerDimensions = {
    w: width / 2,
    h: 37,
  };

  const targetPositionX = useSharedValue(width / 2);
  const targetPositionY = useSharedValue(height / 2);
  const direction = useSharedValue(
    normalizeVector({ x: Math.random(), y: Math.random() })
  );
  const playerPos = useSharedValue({ x: width / 4, y: height - 100 });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver) {
        update();
      }
    }, DELTA);
    return () => clearInterval(interval);
  }, [gameOver]);

  useEffect(() => {
    // Unmount component when `segments` changes
    if (
      JSON.stringify(segments) == JSON.stringify(["(tabs)", "pingpong", "[id]"])
    ) {
      setStatusBarHidden(true);
    } else {
      setStatusBarHidden(false);
    }
  }, [segments]);

  const update = () => {
    let nextPos = getNextPos(direction.value);
    let newDirection = direction.value;

    // Wall Hit detection
    if (nextPos.y > height - BALL_WIDTH) {
      setGameOver(true);
    }
    if (nextPos.y < 0) {
      newDirection = { x: direction.value.x, y: -direction.value.y };
    }

    if (nextPos.x < 0 || nextPos.x > width - BALL_WIDTH) {
      newDirection = { x: -direction.value.x, y: direction.value.y };
    }

    // Island Hit detection
    if (
      nextPos.x < islandDimensions.x + islandDimensions.w &&
      nextPos.x + BALL_WIDTH > islandDimensions.x &&
      nextPos.y < islandDimensions.y + islandDimensions.h &&
      BALL_WIDTH + nextPos.y > islandDimensions.y
    ) {
      if (
        targetPositionX.value < islandDimensions.x ||
        targetPositionX.value > islandDimensions.x + islandDimensions.w
      ) {
        newDirection = { x: -direction.value.x, y: direction.value.y };
      } else {
        newDirection = { x: direction.value.x, y: -direction.value.y };
      }
      setScore((s) => s + 1);
    }

    // Player Hit detection
    if (
      nextPos.x < playerPos.value.x + playerDimensions.w &&
      nextPos.x + BALL_WIDTH > playerPos.value.x &&
      nextPos.y < playerPos.value.y + playerDimensions.h &&
      BALL_WIDTH + nextPos.y > playerPos.value.y
    ) {
      if (
        targetPositionX.value < playerPos.value.x ||
        targetPositionX.value > playerPos.value.x + playerDimensions.w
      ) {
        newDirection = { x: -direction.value.x, y: direction.value.y };
      } else {
        newDirection = { x: direction.value.x, y: -direction.value.y };
      }
    }

    direction.value = newDirection;
    nextPos = getNextPos(newDirection);

    targetPositionX.value = withTiming(nextPos.x, {
      duration: DELTA,
      easing: Easing.linear,
    });
    targetPositionY.value = withTiming(nextPos.y, {
      duration: DELTA,
      easing: Easing.linear,
    });
  };

  const getNextPos = (direction: any) => {
    return {
      x: targetPositionX.value + direction.x * SPEED,
      y: targetPositionY.value + direction.y * SPEED,
    };
  };

  const restartGame = () => {
    console.log("restart");
    targetPositionX.value = width / 2;
    targetPositionY.value = height / 2;
    setScore(0);
    setGameOver(false);
  };

  const ballAnimatedStyles = useAnimatedStyle(() => {
    return {
      top: targetPositionY.value,
      left: targetPositionX.value,
    };
  });

  const islandAnimatedStyles = useAnimatedStyle(
    () => ({
      width: withSequence(
        withTiming(islandDimensions.w * 1.3),
        withTiming(islandDimensions.w)
      ),
      height: withSequence(
        withTiming(islandDimensions.h * 1.3),
        withTiming(islandDimensions.h)
      ),
      opacity: withSequence(withTiming(0), withTiming(1)),
    }),
    [score]
  );

  const playerAnimatedStyles = useAnimatedStyle(() => ({
    left: playerPos.value.x,
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      playerPos.value = {
        ...playerPos.value,
        x: event.absoluteX - playerDimensions.w / 2,
      };
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.score}>{score}</Text>
      {gameOver && (
        <>
          <View style={styles.gameOverContainer}>
            <Text style={styles.gameOver}>Game over</Text>
            <AuthButton
                formatBlue="blue"
                asyncFunctionPass={restartGame}
                Title="RESTRART"
              />
            <View style={{ marginTop: 10 }}>
            <ReuseButton
              formatBlue="transparent"
              routeLink="/(tabs)"
              Title="GO BACK"
            />
            </View>
          </View>
        </>
      )}

      {!gameOver && <Animated.View style={[styles.ball, ballAnimatedStyles]} />}

      {/* Island */}
      <Animated.View
        entering={BounceIn}
        key={score}
        style={{
          position: "absolute",
          top: islandDimensions.y,
          left: islandDimensions.x,
          width: islandDimensions.w,
          height: islandDimensions.h,
          borderRadius: 20,
          backgroundColor: "black",
        }}
      />

      {/* Player */}
      <Animated.View
        style={[
          {
            top: playerPos.value.y,
            position: "absolute",
            width: playerDimensions.w,
            height: playerDimensions.h,
            borderRadius: 20,
            backgroundColor: "black",
          },
          playerAnimatedStyles,
        ]}
      />

      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={{
            width: "100%",
            height: 200,
            position: "absolute",
            bottom: 0,
          }}
        />
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  ball: {
    backgroundColor: "rgba(0, 54, 171, 1)",
    width: BALL_WIDTH,
    aspectRatio: 1,
    borderRadius: 25,
    position: "absolute",
  },
  score: {
    fontSize: 150,
    fontWeight: "500",
    position: "absolute",
    top: 100,
    color: "lightgray",
  },
  gameOverContainer: {
    position: "absolute",
    top: 280,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "rgba(27, 27, 27, 0.73)",
    zIndex: 1,
  },
  gameOver: {
    fontSize: 50,
    fontWeight: "500",
    color: "#fff",
  },
});


/*
const update = () => {
  let nextPos = getNextPos(direction.value);
  let newDirection = direction.value;

  // Adjust speed based on score
  const adjustedSpeed = getSpeedBasedOnScore(score);

  // Wall Hit detection
  if (nextPos.y > height - BALL_WIDTH) {
    setGameOver(true);
  }
  if (nextPos.y < 0) {
    newDirection = { x: direction.value.x, y: -direction.value.y };
  }

  if (nextPos.x < 0 || nextPos.x > width - BALL_WIDTH) {
    newDirection = { x: -direction.value.x, y: direction.value.y };
  }

  // Island Hit detection
  if (
    nextPos.x < islandDimensions.x + islandDimensions.w &&
    nextPos.x + BALL_WIDTH > islandDimensions.x &&
    nextPos.y < islandDimensions.y + islandDimensions.h &&
    BALL_WIDTH + nextPos.y > islandDimensions.y
  ) {
    if (
      targetPositionX.value < islandDimensions.x ||
      targetPositionX.value > islandDimensions.x + islandDimensions.w
    ) {
      newDirection = { x: -direction.value.x, y: direction.value.y };
    } else {
      newDirection = { x: direction.value.x, y: -direction.value.y };
    }
    setScore((s) => s + 1);
  }

  // Player Hit detection
  if (
    nextPos.x < playerPos.value.x + playerDimensions.w &&
    nextPos.x + BALL_WIDTH > playerPos.value.x &&
    nextPos.y < playerPos.value.y + playerDimensions.h &&
    BALL_WIDTH + nextPos.y > playerPos.value.y
  ) {
    if (
      targetPositionX.value < playerPos.value.x ||
      targetPositionX.value > playerPos.value.x + playerDimensions.w
    ) {
      newDirection = { x: -direction.value.x, y: direction.value.y };
    } else {
      newDirection = { x: direction.value.x, y: -direction.value.y };
    }
  }

  direction.value = newDirection;
  nextPos = getNextPos(newDirection, adjustedSpeed);

  targetPositionX.value = withTiming(nextPos.x, {
    duration: DELTA,
    easing: Easing.linear,
  });
  targetPositionY.value = withTiming(nextPos.y, {
    duration: DELTA,
    easing: Easing.linear,
  });
};

// Function to calculate speed based on score
const getSpeedBasedOnScore = (score) => {
  // Starting speed and increment
  const baseSpeed = 10;
  const speedIncrement = 0.5; // Increase speed by 0.5 for each point scored

  return baseSpeed + score * speedIncrement;
};

// Update getNextPos to accept the speed parameter
const getNextPos = (direction, speed) => {
  return {
    x: targetPositionX.value + direction.x * speed,
    y: targetPositionY.value + direction.y * speed,
  };
};

*/