import { useState, useRef } from "react";
import { Box, Button, Container, Flex, Heading, Text, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const songs = [
  { title: "Song 1", artist: "Artist 1", src: "/songs/song1.mp3" },
  { title: "Song 2", artist: "Artist 2", src: "/songs/song2.mp3" },
  { title: "Song 3", artist: "Artist 3", src: "/songs/song3.mp3" },
];

const Player = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSkipForward = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const handleSkipBackward = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  return (
    <Container maxW="container.md" py={16}>
      <VStack spacing={8} align="center">
        <Heading as="h2" size="xl">
          Now Playing
        </Heading>
        <Text fontSize="lg">
          {songs[currentSongIndex].title} - {songs[currentSongIndex].artist}
        </Text>
        <audio ref={audioRef} src={songs[currentSongIndex].src} onEnded={handleSkipForward} />
        <HStack spacing={4}>
          <IconButton icon={<FaBackward />} onClick={handleSkipBackward} />
          <IconButton icon={isPlaying ? <FaPause /> : <FaPlay />} onClick={handlePlayPause} />
          <IconButton icon={<FaForward />} onClick={handleSkipForward} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Player;