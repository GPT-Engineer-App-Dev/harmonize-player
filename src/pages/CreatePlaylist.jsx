import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, VStack, Text, Checkbox, CheckboxGroup } from "@chakra-ui/react";

const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [selectedSongs, setSelectedSongs] = useState([]);

  const handleCreatePlaylist = () => {
    console.log("Playlist Created:", playlistName, selectedSongs);
    // Add logic to save the playlist
  };

  const handleSongSelection = (song) => {
    setSelectedSongs((prevSelectedSongs) =>
      prevSelectedSongs.includes(song)
        ? prevSelectedSongs.filter((s) => s !== song)
        : [...prevSelectedSongs, song]
    );
  };

  const availableSongs = ["Song 1", "Song 2", "Song 3", "Song 4"]; // Replace with actual song data

  return (
    <Container maxW="container.md" py={16}>
      <VStack spacing={8} align="center">
        <Heading as="h2" size="xl">
          Create a New Playlist
        </Heading>
        <FormControl id="playlist-name" isRequired>
          <FormLabel>Playlist Name</FormLabel>
          <Input
            type="text"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            placeholder="Enter playlist name"
          />
        </FormControl>
        <FormControl id="select-songs" isRequired>
          <FormLabel>Select Songs</FormLabel>
          <CheckboxGroup>
            <VStack align="start">
              {availableSongs.map((song) => (
                <Checkbox
                  key={song}
                  isChecked={selectedSongs.includes(song)}
                  onChange={() => handleSongSelection(song)}
                >
                  {song}
                </Checkbox>
              ))}
            </VStack>
          </CheckboxGroup>
        </FormControl>
        <Button colorScheme="blue" onClick={handleCreatePlaylist}>
          Create Playlist
        </Button>
      </VStack>
    </Container>
  );
};

export default CreatePlaylist;