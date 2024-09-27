import React, { useRef } from "react";
import { Text, View } from "react-native";
import Video, { VideoRef } from "react-native-video";

function Test() {
  const videoRef = useRef<VideoRef>(null);
  return (
    <View>
      <Text style={{ marginVertical: 20 }}>Test</Text>
      <Video
        // Can be a URL or a local file.
        source={{
          uri: "https://lms-003-bethany.s3.amazonaws.com/compressed/video_2024812_5i3r7bswlzqrt1z3.mp4",
        }}
        // Store reference
        ref={videoRef}
      />
    </View>
  );
}

export default Test;
